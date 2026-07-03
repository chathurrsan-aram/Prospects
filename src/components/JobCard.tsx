"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { useSavedList, SAVED_ROLES_KEY } from "@/lib/saved";
import { S, ROUTE_LABELS } from "@/data/strings";
import { getSector } from "@/data/sectors";
import type { Job } from "@/lib/types";

export default function JobCard({ job }: { job: Job }) {
  const { t } = useLang();
  const { toggle, isSaved } = useSavedList(SAVED_ROLES_KEY);
  const sector = getSector(job.sector);
  const saved = isSaved(job.id);

  return (
    <article className="job-card">
      <Link href={`/jobs/${job.id}`} className="title-link">
        {t(job.title)}
      </Link>
      <div className="badges">
        {sector && <span className="badge">{t(sector.name)}</span>}
        {job.routeTypes.map((r) => (
          <span key={r} className="badge gold">
            {t(ROUTE_LABELS[r])}
          </span>
        ))}
      </div>
      <p className="desc">{t(job.short)}</p>
      <p className="lang-note">🗣 {t(job.languageNote)}</p>
      <div className="foot">
        <button
          className="btn secondary small"
          aria-pressed={saved}
          onClick={() => toggle(job.id)}
        >
          {saved ? `★ ${t(S.saved)}` : `☆ ${t(S.save)}`}
        </button>
      </div>
    </article>
  );
}
