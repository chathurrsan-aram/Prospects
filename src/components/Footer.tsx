"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { S, GOV } from "@/data/strings";

const PARTNERS = ["Tea Leaf Trust", "Yarl IT Hub", "Vanni Hope", "DreamSpace Academy"];

export default function Footer() {
  const { t } = useLang();
  return (
    <footer>
      <svg className="footer-wave" viewBox="0 0 1200 42" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0 42V22C150 2 300 2 450 16 600 30 750 34 900 24 1020 16 1120 10 1200 16v26z"
          fill="currentColor"
        />
      </svg>
      <div className="footer">
      <div className="container">
        <div className="row">
          <p style={{ maxWidth: "60ch", margin: 0 }}>{t(S.mission)}</p>
        </div>
        <div className="row">
          <nav aria-label="Footer">
            <Link href="/about">{t(S.footerAbout)}</Link>
            <Link href="/about#sources">{t(S.footerSources)}</Link>
            <Link href="/about#privacy">{t(S.footerPrivacy)}</Link>
            <Link href="/about#safeguarding">{t(S.footerSafeguarding)}</Link>
            <Link href="/about#contact">{t(S.footerContact)}</Link>
          </nav>
        </div>
        <div className="row meta">
          {t(S.footerReview)}: {t(GOV.siteReviewed)} · {t(S.footerNextReview)}: {t(GOV.siteNextReview)} · {t(S.footerVersion)}: {GOV.version}
        </div>
        <div className="row">
          <span className="meta" style={{ display: "block", marginBottom: "0.4rem" }}>
            {t(S.footerPartners)}
          </span>
          <div className="partners">
            {PARTNERS.map((p) => (
              <span key={p} className="partner">
                {p}
              </span>
            ))}
          </div>
        </div>
        <div className="row meta">
          {t(S.footerCopyright)} · <Link href="/about#privacy">{t(S.dataProtection)}</Link>
        </div>
      </div>
      </div>
    </footer>
  );
}
