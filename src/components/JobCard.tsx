"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { useSavedList, SAVED_ROLES_KEY } from "@/lib/saved";
import { S, ROUTE_LABELS } from "@/data/strings";
import { getSector } from "@/data/sectors";
import { SECTOR_ICONS, ROUTE_ICONS, StarIcon } from "@/components/icons";
import type { Job } from "@/lib/types";

export default function JobCard({ job }: { job: Job }) {
  const { t } = useLang();
  const { toggle, isSaved } = useSavedList(SAVED_ROLES_KEY);
  const sector = getSector(job.sector);
  const SectorIcon = SECTOR_ICONS[job.sector];
  const saved = isSaved(job.id);

  return (
    <article className="job-card">
      <div className="head">
        <span className="icon-chip" aria-hidden="true">
          <SectorIcon size={24} />
        </span>
        <Link href={`/jobs/${job.id}`} className="title-link">
          {t(job.title)}
        </Link>
      </div>
      <div className="badges">
        {sector && <span className="badge">{t(sector.name)}</span>}
        {job.routeTypes.map((r) => {
          const RouteIcon = ROUTE_ICONS[r];
          return (
            <span key={r} className={`badge route-${r}`}>
              <RouteIcon size={13} /> {t(ROUTE_LABELS[r])}
            </span>
          );
        })}
      </div>
      <p className="desc">{t(job.short)}</p>
      <p className="lang-note">🗣 {t(job.languageNote)}</p>
      <div className="foot">
        <button
          className="btn secondary small"
          aria-pressed={saved}
          onClick={() => toggle(job.id)}
        >
          <StarIcon size={16} filled={saved} /> {saved ? t(S.saved) : t(S.save)}
        </button>
      </div>
    </article>
  );
}
