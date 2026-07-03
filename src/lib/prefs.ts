/**
 * Cookie names and pure helpers shared between the server layout (first-paint
 * application of language + accessibility prefs) and the client providers.
 * Must stay free of "use client" so the server can call these directly.
 */

export const LANG_COOKIE = "aram-lang";
export const A11Y_COOKIE = "aram-a11y";

export interface A11ySettings {
  dark: boolean;
  contrast: boolean;
  invert: boolean;
  textSize: "normal" | "large" | "xlarge";
}

export const DEFAULT_A11Y: A11ySettings = {
  dark: false,
  contrast: false,
  invert: false,
  textSize: "normal",
};

export function parseA11yCookie(raw: string | undefined): A11ySettings {
  if (!raw) return DEFAULT_A11Y;
  try {
    const parsed = JSON.parse(decodeURIComponent(raw));
    return {
      dark: !!parsed.dark,
      contrast: !!parsed.contrast,
      invert: !!parsed.invert,
      textSize: ["normal", "large", "xlarge"].includes(parsed.textSize)
        ? parsed.textSize
        : "normal",
    };
  } catch {
    return DEFAULT_A11Y;
  }
}

export function a11yClasses(s: A11ySettings): string {
  const classes: string[] = [];
  if (s.dark) classes.push("mode-dark");
  if (s.contrast) classes.push("mode-contrast");
  if (s.invert) classes.push("mode-invert");
  if (s.textSize !== "normal") classes.push(`text-${s.textSize}`);
  return classes.join(" ");
}
