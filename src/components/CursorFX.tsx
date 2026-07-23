"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

const IDLE_MS = 900;
const EASE = 0.18;
const RADIUS = 110;
const COARSE = 260;
const CELL_SIZE = 256;
const ENABLE_QUERY = "(any-pointer: fine)";
const SKIP_TAGS = new Set([
  "SCRIPT",
  "STYLE",
  "SVG",
  "PATH",
  "INPUT",
  "TEXTAREA",
  "OPTION",
]);

type LitBox = {
  left: number;
  top: number;
  width: number;
  height: number;
  fixed: boolean;
};

type SpatialIndex = {
  fixed: Map<string, number[]>;
  page: Map<string, number[]>;
};

function cellKey(x: number, y: number) {
  return `${Math.floor(x / CELL_SIZE)}:${Math.floor(y / CELL_SIZE)}`;
}

function buildSpatialIndex(boxes: LitBox[]): SpatialIndex {
  const index: SpatialIndex = {
    fixed: new Map(),
    page: new Map(),
  };

  boxes.forEach((box, boxIndex) => {
    const buckets = box.fixed ? index.fixed : index.page;
    const firstColumn = Math.floor((box.left - COARSE) / CELL_SIZE);
    const lastColumn = Math.floor(
      (box.left + box.width + COARSE) / CELL_SIZE,
    );
    const firstRow = Math.floor((box.top - COARSE) / CELL_SIZE);
    const lastRow = Math.floor(
      (box.top + box.height + COARSE) / CELL_SIZE,
    );

    for (let column = firstColumn; column <= lastColumn; column++) {
      for (let row = firstRow; row <= lastRow; row++) {
        const key = `${column}:${row}`;
        const bucket = buckets.get(key);
        if (bucket) bucket.push(boxIndex);
        else buckets.set(key, [boxIndex]);
      }
    }
  });

  return index;
}

function wrapTextNodes() {
  const wrapped: HTMLElement[] = [];

  for (const root of document.querySelectorAll("header, main, footer")) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.textContent || !node.textContent.trim()) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (SKIP_TAGS.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
        if (parent.dataset.lit !== undefined) return NodeFilter.FILTER_REJECT;
        if (parent.closest(".name-sweep, [data-no-lit]")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });

    const nodes: Text[] = [];
    while (walker.nextNode()) nodes.push(walker.currentNode as Text);

    for (const node of nodes) {
      const parent = node.parentNode;
      if (!parent) continue;

      const fragment = document.createDocumentFragment();
      for (const part of node.textContent!.split(/(\s+)/)) {
        if (!part) continue;
        if (!part.trim()) {
          fragment.appendChild(document.createTextNode(part));
          continue;
        }

        const span = document.createElement("span");
        span.dataset.lit = "";
        span.textContent = part;
        fragment.appendChild(span);
        wrapped.push(span);
      }
      parent.replaceChild(fragment, node);
    }
  }

  return wrapped;
}

function unwrap(spans: HTMLElement[]) {
  const parents = new Set<Node>();
  for (const span of spans) {
    const parent = span.parentNode;
    if (!parent) continue;
    parents.add(parent);
    while (span.firstChild) parent.insertBefore(span.firstChild, span);
    parent.removeChild(span);
  }
  for (const parent of parents) (parent as Element).normalize?.();
}

function isFixed(element: HTMLElement) {
  let node: HTMLElement | null = element;
  while (node && node !== document.body) {
    if (getComputedStyle(node).position === "fixed") return true;
    node = node.parentElement;
  }
  return false;
}

function subscribe(onChange: () => void) {
  const enabled = window.matchMedia(ENABLE_QUERY);
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  enabled.addEventListener("change", onChange);
  motion.addEventListener("change", onChange);
  return () => {
    enabled.removeEventListener("change", onChange);
    motion.removeEventListener("change", onChange);
  };
}

function isEnabled() {
  return (
    window.matchMedia(ENABLE_QUERY).matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function CursorFX() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const discRef = useRef<HTMLDivElement>(null);
  const active = useSyncExternalStore(subscribe, isEnabled, () => false);

  useEffect(() => {
    if (!active) return;

    const root = document.documentElement;
    const supportsTextClip =
      CSS.supports("background-clip", "text") ||
      CSS.supports("-webkit-background-clip", "text");

    root.classList.add("cursor-fx");

    let spans: HTMLElement[] = [];
    let boxes: LitBox[] = [];
    let spatialIndex: SpatialIndex = {
      fixed: new Map(),
      page: new Map(),
    };
    let inRange = new Set<HTMLElement>();
    const paintedPositions = new WeakMap<HTMLElement, string>();
    let disposed = false;

    const measure = () => {
      if (disposed) return;
      const fixedParents = new WeakMap<HTMLElement, boolean>();
      const parentIsFixed = (element: HTMLElement) => {
        const parent = element.parentElement ?? element;
        const cached = fixedParents.get(parent);
        if (cached !== undefined) return cached;
        const fixed = isFixed(parent);
        fixedParents.set(parent, fixed);
        return fixed;
      };

      boxes = spans.map((element) => {
        const rect = element.getBoundingClientRect();
        const fixed = parentIsFixed(element);
        return {
          left: rect.left + (fixed ? 0 : window.scrollX),
          top: rect.top + (fixed ? 0 : window.scrollY),
          width: rect.width,
          height: rect.height,
          fixed,
        };
      });
      spatialIndex = buildSpatialIndex(boxes);
    };

    let measureTimer: ReturnType<typeof setTimeout> | undefined;
    const scheduleMeasure = () => {
      if (measureTimer !== undefined) clearTimeout(measureTimer);
      measureTimer = setTimeout(measure, 150);
    };

    const paintBases = () => {
      if (disposed) return;
      for (const element of spans) element.classList.remove("lit");
      for (const element of spans) {
        element.style.setProperty("--lit-base", getComputedStyle(element).color);
      }
      for (const element of spans) element.classList.add("lit");
    };

    const collect = () => {
      if (disposed) return;
      unwrap(spans);
      spans = wrapTextNodes();
      paintBases();
      measure();
      inRange = new Set();
    };

    let contentObserver: MutationObserver | undefined;
    let themeObserver: MutationObserver | undefined;
    let recollectTimer: ReturnType<typeof setTimeout> | undefined;

    const observeContent = () => {
      for (const node of document.querySelectorAll("header, main, footer")) {
        contentObserver?.observe(node, {
          childList: true,
          subtree: true,
          characterData: true,
        });
      }
    };

    if (supportsTextClip) {
      root.classList.add("lit-ready");
      collect();

      contentObserver = new MutationObserver((mutations) => {
        const relevant = mutations.some((mutation) => {
          const target =
            mutation.target.nodeType === Node.ELEMENT_NODE
              ? (mutation.target as Element)
              : mutation.target.parentElement;
          return !target?.closest("[data-no-lit]");
        });
        if (!relevant) return;

        if (recollectTimer !== undefined) clearTimeout(recollectTimer);
        recollectTimer = setTimeout(() => {
          contentObserver?.disconnect();
          collect();
          observeContent();
        }, 250);
      });
      observeContent();

      let lastTheme = root.classList.contains("dark");
      themeObserver = new MutationObserver(() => {
        const theme = root.classList.contains("dark");
        if (theme === lastTheme) return;
        lastTheme = theme;
        requestAnimationFrame(paintBases);
      });
      themeObserver.observe(root, {
        attributes: true,
        attributeFilter: ["class"],
      });
      window.addEventListener("resize", scheduleMeasure);
      document.fonts?.ready.then(scheduleMeasure);
    }

    const paintLit = (x: number, y: number) => {
      const next = new Set<HTMLElement>();
      const nextPositions: Array<{
        element: HTMLElement;
        dx: string;
        dy: string;
        key: string;
      }> = [];
      const pageX = x + window.scrollX;
      const pageY = y + window.scrollY;
      const candidates = [
        ...(spatialIndex.page.get(cellKey(pageX, pageY)) ?? []),
        ...(spatialIndex.fixed.get(cellKey(x, y)) ?? []),
      ];

      for (const index of candidates) {
        const box = boxes[index];
        if (!box) continue;
        const pointerX = box.fixed ? x : pageX;
        const pointerY = box.fixed ? y : pageY;

        if (
          pointerX < box.left - COARSE ||
          pointerX > box.left + box.width + COARSE ||
          pointerY < box.top - COARSE ||
          pointerY > box.top + box.height + COARSE
        ) {
          continue;
        }

        const element = spans[index];
        const rect = element.getBoundingClientRect();
        const dx = x - rect.left;
        const dy = y - rect.top;
        if (
          dx < -RADIUS ||
          dx > rect.width + RADIUS ||
          dy < -RADIUS ||
          dy > rect.height + RADIUS
        ) {
          continue;
        }

        const roundedX = `${dx.toFixed(0)}px`;
        const roundedY = `${dy.toFixed(0)}px`;
        next.add(element);
        nextPositions.push({
          element,
          dx: roundedX,
          dy: roundedY,
          key: `${roundedX}:${roundedY}`,
        });
      }

      for (const position of nextPositions) {
        if (paintedPositions.get(position.element) === position.key) continue;
        position.element.style.setProperty("--lx", position.dx);
        position.element.style.setProperty("--ly", position.dy);
        paintedPositions.set(position.element, position.key);
      }

      for (const element of inRange) {
        if (next.has(element)) continue;
        element.style.removeProperty("--lx");
        element.style.removeProperty("--ly");
        paintedPositions.delete(element);
      }
      inRange = next;
    };

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let easedX = targetX;
    let easedY = targetY;
    let idleTimer: ReturnType<typeof setTimeout> | undefined;
    let frame = 0;

    const setIdle = (idle: boolean) => {
      ringRef.current?.classList.toggle("is-idle", idle);
      discRef.current?.classList.toggle("is-idle", idle);
    };

    const tick = () => {
      frame = 0;
      easedX += (targetX - easedX) * EASE;
      easedY += (targetY - easedY) * EASE;

      const settled =
        Math.abs(targetX - easedX) < 0.1 && Math.abs(targetY - easedY) < 0.1;
      if (settled) {
        easedX = targetX;
        easedY = targetY;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${easedX}px, ${easedY}px, 0)`;
      }
      if (discRef.current) {
        discRef.current.style.transform = `translate3d(${easedX}px, ${easedY}px, 0)`;
      }

      paintLit(easedX, easedY);
      if (!settled) frame = requestAnimationFrame(tick);
    };

    const requestFrame = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      targetX = event.clientX;
      targetY = event.clientY;
      setIdle(false);
      if (idleTimer !== undefined) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => setIdle(true), IDLE_MS);
      requestFrame();
    };

    const handleOver = (event: PointerEvent) => {
      const target = event.target as Element | null;
      const nativeControl = target?.closest?.("select");
      const interactive = target?.closest?.("a, button, [role='button'], label");
      root.classList.toggle("cursor-native", Boolean(nativeControl));
      root.classList.toggle("cursor-active", Boolean(interactive));
    };

    const handleScroll = () => {
      requestFrame();
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("pointerover", handleOver, { passive: true });
    requestFrame();

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      if (idleTimer !== undefined) clearTimeout(idleTimer);
      if (recollectTimer !== undefined) clearTimeout(recollectTimer);
      if (measureTimer !== undefined) clearTimeout(measureTimer);
      contentObserver?.disconnect();
      themeObserver?.disconnect();
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", scheduleMeasure);
      document.removeEventListener("pointerover", handleOver);
      unwrap(spans);
      root.classList.remove(
        "cursor-fx",
        "cursor-active",
        "cursor-native",
        "lit-ready",
      );
    };
  }, [active]);

  if (!active) return null;

  return (
    <>
      <div ref={discRef} aria-hidden className="cursor-disc">
        <span />
      </div>
      <div ref={ringRef} aria-hidden className="cursor-ring">
        <span />
      </div>
      <div ref={dotRef} aria-hidden className="cursor-dot">
        <span />
      </div>
    </>
  );
}
