"use client";

import { useLang } from "@/lib/i18n";
import { S, GOV } from "@/data/strings";
import type { L } from "@/lib/types";

/**
 * Page-level governance line (spec 2.2): last-verified and next-review dates
 * shown immediately below the page title on every content page.
 */
export default function PageMeta({
  verified,
  reviewBy,
}: {
  verified?: L;
  reviewBy?: L;
}) {
  const { t } = useLang();
  return (
    <p className="page-meta">
      {t(S.lastVerified)}: {t(verified ?? GOV.siteReviewed)} · {t(S.nextReview)}:{" "}
      {t(reviewBy ?? GOV.siteNextReview)}
    </p>
  );
}
