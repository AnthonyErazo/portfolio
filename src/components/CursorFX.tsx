"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

const IDLE_MS = 900;
const EASE = 0.18;
const RADIUS = 110;
const COARSE = 260;
const ENABLE_QUERY = "(pointer: fine) and (min-width: 1024px)";
const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "SVG", "PATH", "INPUT", "TEXTAREA", "OPTION"]);

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

function isFixed(el: HTMLElement) {
  let node: HTMLElement | null = el;
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
      CSS.supports("background-clip", "text") || CSS.supports("-webkit-background-clip", "text");

    root.classList.add("cursor-fx");

    let spans: HTMLElement[] = [];
    let boxes: { left: number; top: number; width: number; height: number; fixed: boolean }[] = [];
    let inRange = new Set<HTMLElement>();

    const measure = () => {
      boxes = spans.map((el) => {
        const rect = el.getBoundingClientRect();
        const fixed = isFixed(el);
        return {
          left: rect.left + (fixed ? 0 : window.scrollX),
          top: rect.top + (fixed ? 0 : window.scrollY),
          width: rect.width,
          height: rect.height,
          fixed,
        };
      });
    };

    let measureTimer: ReturnType<typeof setTimeout>;
    const scheduleMeasure = () => {
      clearTimeout(measureTimer);
      measureTimer = setTimeout(measure, 150);
    };

    const paintBases = () => {
      for (const el of spans) el.classList.remove("lit");
      for (const el of spans) el.style.setProperty("--lit-base", getComputedStyle(el).color);
      for (const el of spans) el.classList.add("lit");
    };

    const collect = () => {
      unwrap(spans);
      spans = wrapTextNodes();
      paintBases();
      measure();
      inRange = new Set();
    };

    let contentObserver: MutationObserver | undefined;
    let themeObserver: MutationObserver | undefined;
    let recollectTimer: ReturnType<typeof setTimeout>;

    const observeContent = () => {
      for (const node of document.querySelectorAll("header, main, footer")) {
        contentObserver?.observe(node, { childList: true, subtree: true, characterData: true });
      }
    };

    if (supportsTextClip) {
      root.classList.add("lit-ready");
      collect();

      contentObserver = new MutationObserver((mutations) => {
        const relevante = mutations.some((m) => {
          const target = m.target.nodeType === Node.ELEMENT_NODE ? (m.target as Element) : m.target.parentElement;
          return !target?.closest("[data-no-lit]");
        });
        if (!relevante) return;
        clearTimeout(recollectTimer);
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
      themeObserver.observe(root, { attributes: true, attributeFilter: ["class"] });
      window.addEventListener("resize", scheduleMeasure);
    }

    const paintLit = (x: number, y: number) => {
      const next = new Set<HTMLElement>();

      for (let i = 0; i < spans.length; i++) {
        const box = boxes[i];
        if (!box) continue;
        const px = box.fixed ? x : x + window.scrollX;
        const py = box.fixed ? y : y + window.scrollY;

        if (
          px < box.left - COARSE ||
          px > box.left + box.width + COARSE ||
          py < box.top - COARSE ||
          py > box.top + box.height + COARSE
        ) {
          continue;
        }

        const el = spans[i];
        const rect = el.getBoundingClientRect();
        const dx = x - rect.left;
        const dy = y - rect.top;
        if (dx < -RADIUS || dx > rect.width + RADIUS || dy < -RADIUS || dy > rect.height + RADIUS) {
          continue;
        }

        el.style.setProperty("--lx", `${dx.toFixed(0)}px`);
        el.style.setProperty("--ly", `${dy.toFixed(0)}px`);
        next.add(el);
      }

      for (const el of inRange) {
        if (!next.has(el)) el.style.removeProperty("--lx");
      }
      inRange = next;
    };

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let easedX = targetX;
    let easedY = targetY;
    let idleTimer: ReturnType<typeof setTimeout>;
    let frame = 0;

    const setIdle = (idle: boolean) => {
      ringRef.current?.classList.toggle("is-idle", idle);
      discRef.current?.classList.toggle("is-idle", idle);
    };

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      targetX = event.clientX;
      targetY = event.clientY;
      setIdle(false);
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => setIdle(true), IDLE_MS);
    };

    const handleOver = (event: PointerEvent) => {
      const target = event.target as Element | null;
      const nativeControl = target?.closest?.("select");
      const interactive = target?.closest?.("a, button, [role='button'], label");
      root.classList.toggle("cursor-native", Boolean(nativeControl));
      root.classList.toggle("cursor-active", Boolean(interactive));
    };

    const loop = () => {
      easedX += (targetX - easedX) * EASE;
      easedY += (targetY - easedY) * EASE;

      if (dotRef.current) dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${easedX}px, ${easedY}px, 0)`;
      if (discRef.current) discRef.current.style.transform = `translate3d(${easedX}px, ${easedY}px, 0)`;

      paintLit(easedX, easedY);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    window.addEventListener("pointermove", handleMove, { passive: true });
    document.addEventListener("pointerover", handleOver, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(idleTimer);
      clearTimeout(recollectTimer);
      contentObserver?.disconnect();
      themeObserver?.disconnect();
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("resize", scheduleMeasure);
      clearTimeout(measureTimer);
      document.removeEventListener("pointerover", handleOver);
      unwrap(spans);
      root.classList.remove("cursor-fx", "cursor-active", "cursor-native", "lit-ready");
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
