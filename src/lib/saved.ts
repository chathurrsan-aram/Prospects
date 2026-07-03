"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * Session-based saved lists (spec 4.3, 11.3): stored in sessionStorage,
 * no account required. A custom event keeps the nav badge in sync.
 */
const EVENT = "aram-saved-change";

function read(key: string): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.sessionStorage.getItem(key);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function write(key: string, ids: string[]) {
  window.sessionStorage.setItem(key, JSON.stringify(ids));
  window.dispatchEvent(new CustomEvent(EVENT, { detail: { key } }));
}

export function useSavedList(key: string, max?: number) {
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    setIds(read(key));
    const onChange = () => setIds(read(key));
    window.addEventListener(EVENT, onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener(EVENT, onChange);
      window.removeEventListener("storage", onChange);
    };
  }, [key]);

  const toggle = useCallback(
    (id: string) => {
      const current = read(key);
      const next = current.includes(id)
        ? current.filter((x) => x !== id)
        : max && current.length >= max
          ? current
          : [...current, id];
      write(key, next);
    },
    [key, max]
  );

  const isSaved = useCallback((id: string) => ids.includes(id), [ids]);

  return { ids, toggle, isSaved };
}

export const SAVED_ROLES_KEY = "aram-saved-roles";
export const SHORTLIST_KEY = "aram-provider-shortlist";
