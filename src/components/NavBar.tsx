"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/i18n";
import { useA11y } from "@/lib/a11y";
import { useSavedList, SAVED_ROLES_KEY } from "@/lib/saved";
import { S } from "@/data/strings";

const LINKS = [
  { href: "/", label: S.navHome },
  { href: "/explore-careers", label: S.navExplore },
  { href: "/pathways", label: S.navPathways },
  { href: "/training-finder", label: S.navTraining },
  { href: "/career-quiz", label: S.navQuiz },
  { href: "/get-help", label: S.navHelp },
];

export default function NavBar() {
  const { lang, setLang, t } = useLang();
  const { settings, update } = useA11y();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const { ids: savedIds } = useSavedList(SAVED_ROLES_KEY);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    setPanelOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!panelOpen) return;
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setPanelOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPanelOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [panelOpen]);

  return (
    <header className="navbar">
      <a href="#main" className="skip-link">
        {t(S.skipToContent)}
      </a>
      <div className="inner" style={{ position: "relative" }}>
        <Link href="/" className="nav-logo">
          ARAM
        </Link>

        <button
          className="icon-btn hamburger"
          aria-expanded={menuOpen}
          aria-label={t(S.menu)}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Language toggle stays visible at all viewport sizes (spec 2.1) */}
        <div className="nav-right">
          <div className="lang-toggle" role="group" aria-label="Language / மொழி">
            <button
              className={lang === "en" ? "active" : ""}
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
            >
              English
            </button>
            <button
              className={lang === "ta" ? "active" : ""}
              aria-pressed={lang === "ta"}
              onClick={() => setLang("ta")}
              lang="ta"
            >
              தமிழ்
            </button>
          </div>
          <button
            className="icon-btn"
            aria-expanded={panelOpen}
            aria-label={t(S.a11yTitle)}
            title={t(S.a11yTitle)}
            onClick={() => setPanelOpen(!panelOpen)}
          >
            Aa
          </button>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={pathname === l.href ? "active" : ""}>
                {t(l.label)}
              </Link>
            </li>
          ))}
          {savedIds.length > 0 && (
            <li>
              <Link href="/saved" className={pathname === "/saved" ? "active" : ""}>
                ★ {t(S.navSaved)} ({savedIds.length})
              </Link>
            </li>
          )}
        </ul>

        {panelOpen && (
          <div className="a11y-panel" ref={panelRef} role="dialog" aria-label={t(S.a11yTitle)}>
            <h2>{t(S.a11yTitle)}</h2>
            <div className="a11y-row">
              <span>{t(S.a11yDark)}</span>
              <button
                className="switch"
                aria-pressed={settings.dark}
                onClick={() => update({ dark: !settings.dark })}
              >
                {settings.dark ? "✓" : "–"}
              </button>
            </div>
            <div className="a11y-row">
              <span>{t(S.a11yContrast)}</span>
              <button
                className="switch"
                aria-pressed={settings.contrast}
                onClick={() => update({ contrast: !settings.contrast })}
              >
                {settings.contrast ? "✓" : "–"}
              </button>
            </div>
            <div className="a11y-row">
              <span>{t(S.a11yInvert)}</span>
              <button
                className="switch"
                aria-pressed={settings.invert}
                onClick={() => update({ invert: !settings.invert })}
              >
                {settings.invert ? "✓" : "–"}
              </button>
            </div>
            <div className="a11y-row">
              <span>{t(S.a11yTextSize)}</span>
              <span style={{ display: "flex", gap: "0.3rem" }}>
                {(
                  [
                    ["normal", S.a11yNormal],
                    ["large", S.a11yLarge],
                    ["xlarge", S.a11yXLarge],
                  ] as const
                ).map(([size, label]) => (
                  <button
                    key={size}
                    className="switch"
                    aria-pressed={settings.textSize === size}
                    onClick={() => update({ textSize: size })}
                  >
                    {t(label)}
                  </button>
                ))}
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
