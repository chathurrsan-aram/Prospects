"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { A11Y_COOKIE, a11yClasses, type A11ySettings } from "./prefs";

interface A11yContextValue {
  settings: A11ySettings;
  update: (patch: Partial<A11ySettings>) => void;
}

const A11yContext = createContext<A11yContextValue | null>(null);

export function A11yProvider({
  initial,
  children,
}: {
  initial: A11ySettings;
  children: React.ReactNode;
}) {
  const [settings, setSettings] = useState<A11ySettings>(initial);

  const update = useCallback((patch: Partial<A11ySettings>) => {
    setSettings((prev) => {
      const next = { ...prev, ...patch };
      document.documentElement.className = a11yClasses(next);
      document.cookie = `${A11Y_COOKIE}=${encodeURIComponent(
        JSON.stringify(next)
      )};path=/;max-age=31536000;samesite=lax`;
      return next;
    });
  }, []);

  const value = useMemo(() => ({ settings, update }), [settings, update]);

  return <A11yContext.Provider value={value}>{children}</A11yContext.Provider>;
}

export function useA11y(): A11yContextValue {
  const ctx = useContext(A11yContext);
  if (!ctx) throw new Error("useA11y must be used inside A11yProvider");
  return ctx;
}
