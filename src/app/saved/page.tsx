"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { useSavedList, SAVED_ROLES_KEY } from "@/lib/saved";
import { S } from "@/data/strings";
import { getJob } from "@/data/jobs";
import JobCard from "@/components/JobCard";
import Breadcrumb from "@/components/Breadcrumb";

export default function SavedPage() {
  const { t } = useLang();
  const { ids } = useSavedList(SAVED_ROLES_KEY);
  const jobs = ids.map(getJob).filter((j) => j !== undefined);

  return (
    <div className="container">
      <Breadcrumb items={[{ label: S.navSaved }]} />
      <h1>{t(S.navSaved)}</h1>
      {jobs.length === 0 ? (
        <div className="card fill">
          <p>
            {t({
              en: "No saved roles yet. Roles you save are kept for this visit only (no account needed).",
              ta: "இன்னும் சேமித்த தொழில்கள் இல்லை. சேமிக்கும் தொழில்கள் இந்த வருகைக்கு மட்டும் வைக்கப்படும் (கணக்கு தேவையில்லை).",
            })}
          </p>
          <Link href="/explore-careers" className="btn">
            {t(S.heroExplore)}
          </Link>
        </div>
      ) : (
        <div className="card-grid cols-3">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}
