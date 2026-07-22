"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { BiText } from "@/data";

const TYPE_MS = 42;
const DELETE_MS = 22;
const HOLD_MS = 2400;

interface State {
  index: number;
  length: number;
  deleting: boolean;
}

export default function TypedText({ items }: { items: BiText[] }) {
  const { t } = useLanguage();
  const [state, setState] = useState<State>(() => ({
    index: 0,
    length: items[0].es.length,
    deleting: false,
  }));

  const full = t(items[state.index]);
  const shown = full.slice(0, Math.min(state.length, full.length));

  useEffect(() => {
    if (items.length < 2) return;

    const current = t(items[state.index]);
    const finishedTyping = !state.deleting && state.length >= current.length;
    const delay = finishedTyping ? HOLD_MS : state.deleting ? DELETE_MS : TYPE_MS;

    const id = setTimeout(() => {
      setState((prev) => {
        const text = t(items[prev.index]);
        if (!prev.deleting && prev.length >= text.length) {
          return { ...prev, deleting: true };
        }
        if (prev.deleting && prev.length <= 0) {
          return { index: (prev.index + 1) % items.length, length: 0, deleting: false };
        }
        return { ...prev, length: prev.length + (prev.deleting ? -1 : 1) };
      });
    }, delay);

    return () => clearTimeout(id);
  }, [state, items, t]);

  return (
    <span data-no-lit className="inline-flex items-baseline">
      <span>{shown}</span>
      <span aria-hidden className="caret ml-0.5 text-accent">
        _
      </span>
    </span>
  );
}
