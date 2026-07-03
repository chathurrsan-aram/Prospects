"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { S } from "@/data/strings";
import Breadcrumb from "@/components/Breadcrumb";
import type { L } from "@/lib/types";

/**
 * Interim page used while a section is scheduled for a later iteration.
 * Keeps navigation honest (no dead links) and always offers a next step.
 */
export default function StubPage({
  title,
  intro,
  children,
}: {
  title: L;
  intro: L;
  children?: React.ReactNode;
}) {
  const { t } = useLang();
  return (
    <div className="container">
      <Breadcrumb items={[{ label: title }]} />
      <h1>{t(title)}</h1>
      <p style={{ maxWidth: "70ch" }}>{t(intro)}</p>
      {children}
      <div className="info-box mt-1">
        <p style={{ margin: 0 }}>
          {t({
            en: "This page is being built in the next design iteration. In the meantime:",
            ta: "இப்பக்கம் அடுத்த வடிவமைப்புச் சுற்றில் உருவாக்கப்படுகிறது. இதற்கிடையில்:",
          })}
        </p>
        <div className="flex-wrap mt-1">
          <Link href="/explore-careers" className="btn secondary small">
            {t(S.navExplore)}
          </Link>
          <Link href="/pathways" className="btn secondary small">
            {t(S.navPathways)}
          </Link>
          <Link href="/career-quiz" className="btn secondary small">
            {t(S.navQuiz)}
          </Link>
        </div>
      </div>
    </div>
  );
}
