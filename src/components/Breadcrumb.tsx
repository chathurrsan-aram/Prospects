"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { S } from "@/data/strings";
import type { L } from "@/lib/types";

export interface Crumb {
  href?: string;
  label: L;
}

/** Breadcrumb (spec 2.4) — the primary back-navigation on mobile. */
export default function Breadcrumb({ items }: { items: Crumb[] }) {
  const { t } = useLang();
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link href="/">{t(S.breadcrumbHome)}</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} aria-current={i === items.length - 1 ? "page" : undefined}>
            {item.href ? <Link href={item.href}>{t(item.label)}</Link> : t(item.label)}
          </li>
        ))}
      </ol>
    </nav>
  );
}
