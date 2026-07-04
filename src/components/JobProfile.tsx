"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { useSavedList, SAVED_ROLES_KEY } from "@/lib/saved";
import { S, ROUTE_LABELS, FEE_LABELS, WORK_LANGUAGE_LABELS } from "@/data/strings";
import { getJob } from "@/data/jobs";
import { getSector } from "@/data/sectors";
import { SECTOR_ICONS, ROUTE_ICONS } from "@/components/icons";
import { providersForJob, PROVIDER_TYPE_LABELS } from "@/data/providers";
import { getDistrict } from "@/data/districts";
import Breadcrumb from "@/components/Breadcrumb";
import PageMeta from "@/components/PageMeta";
import PathwayMap from "@/components/PathwayMap";
import VideoStoryCard from "@/components/VideoStoryCard";
import CompareModal from "@/components/CompareModal";

export default function JobProfile({ jobId }: { jobId: string }) {
  const { t } = useLang();
  const { toggle, isSaved } = useSavedList(SAVED_ROLES_KEY);
  const [compareOpen, setCompareOpen] = useState(false);
  const job = getJob(jobId);
  if (!job) return null;

  const sector = getSector(job.sector);
  const SectorIcon = SECTOR_ICONS[job.sector];
  const saved = isSaved(job.id);
  const providers = providersForJob(job.id);

  return (
    <div className="container">
      <Breadcrumb
        items={[{ href: "/explore-careers", label: S.navExplore }, { label: job.title }]}
      />

      {/* Role header (spec 6.1) */}
      <div className="print-area">
        <div style={{ display: "flex", alignItems: "center", gap: "0.9rem", marginBottom: "0.4rem" }}>
          <span className="icon-chip" aria-hidden="true">
            <SectorIcon size={30} />
          </span>
          <h1 style={{ margin: 0 }}>{t(job.title)}</h1>
        </div>
        <div className="badges flex-wrap" style={{ marginBottom: "0.5rem" }}>
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
        <p style={{ fontSize: "1.05rem", maxWidth: "70ch" }}>{t(job.short)}</p>
        <PageMeta verified={job.verified} reviewBy={job.reviewBy} />
        <p className="small muted">{t(job.sourceBasis)}</p>
        <div className="flex-wrap no-print" style={{ margin: "0.8rem 0 1.5rem" }}>
          <button className="btn secondary small" aria-pressed={saved} onClick={() => toggle(job.id)}>
            {saved ? `★ ${t(S.saved)}` : `☆ ${t(S.saveRole)}`}
          </button>
          <button className="btn secondary small" onClick={() => setCompareOpen(true)}>
            ⇄ {t(S.compareRole)}
          </button>
          <button
            className="btn secondary small"
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: t(job.title), url: window.location.href }).catch(() => {});
              } else {
                navigator.clipboard?.writeText(window.location.href);
              }
            }}
          >
            ↗ {t(S.share)}
          </button>
        </div>

        {/* About this role (spec 6.2) */}
        <section aria-labelledby="about-h">
          <h2 id="about-h">{t(S.aboutRole)}</h2>
          {job.about.map((p, i) => (
            <p key={i} style={{ maxWidth: "75ch" }}>
              {t(p)}
            </p>
          ))}
        </section>

        {/* Skills and languages (spec 6.3) */}
        <section aria-labelledby="skills-h" className="section" style={{ paddingTop: "1rem" }}>
          <h2 id="skills-h">{t(S.skillsLanguages)}</h2>
          <div className="card fill">
            <h3>{t(S.keySkills)}</h3>
            <ul>
              {job.keySkills.map((s, i) => (
                <li key={i}>{t(s)}</li>
              ))}
            </ul>
            <h3>{t(S.workplaceLanguages)}</h3>
            <p>{t(job.languageNote)}</p>
            <h3>{t(S.digitalSkills)}</h3>
            <p>{t(job.digitalSkills)}</p>
            <h3>{t(S.softSkills)}</h3>
            <p style={{ marginBottom: 0 }}>{t(job.softSkills)}</p>
          </div>
        </section>

        {/* Typical workplaces (spec 6.4) */}
        <section aria-labelledby="work-h" className="section" style={{ paddingTop: "1rem" }}>
          <h2 id="work-h">{t(S.typicalWorkplaces)}</h2>
          <ul>
            {job.workplaces.map((w, i) => (
              <li key={i}>{t(w)}</li>
            ))}
          </ul>
          {job.informalNote && (
            <div className="info-box gold">
              <p style={{ margin: 0 }}>{t(job.informalNote)}</p>
            </div>
          )}
        </section>

        {/* Demand note with explicit expiry (spec 6.5) */}
        <section aria-labelledby="demand-h" className="section" style={{ paddingTop: "1rem" }}>
          <h2 id="demand-h">{t(S.demandNote)}</h2>
          <div className="info-box">
            <p>{t(job.demand.text)}</p>
            <p className="small muted" style={{ margin: 0 }}>
              {job.demand.source} · {t(S.lastVerified)}: {t(job.demand.verified)} ·{" "}
              {t(S.demandExpiry)}: {t(job.demand.reviewBy)}
            </p>
          </div>
        </section>

        {/* Pathway map (spec 6.6) — the most important block on the page */}
        <section aria-labelledby="pathway-h" className="section" style={{ paddingTop: "1rem" }}>
          <h2 id="pathway-h">{t(S.pathwayMap)}</h2>
          <p className="section-sub">{t(S.pathwayIntro)}</p>
          <PathwayMap routes={job.pathway} />
        </section>
      </div>

      {/* Training provider links (spec 6.7) */}
      <section aria-labelledby="providers-h" className="section no-print" style={{ paddingTop: "1rem" }}>
        <h2 id="providers-h">{t(S.trainingProviders)}</h2>
        {providers.length > 0 ? (
          <div className="card-grid cols-2">
            {providers.map((p) => {
              const course = p.courses.find((c) => c.jobIds.includes(job.id));
              const district = getDistrict(p.district);
              return (
                <div key={p.id} className="card">
                  <h3 style={{ marginBottom: "0.2rem" }}>{t(p.name)}</h3>
                  <p className="small muted" style={{ margin: "0 0 0.4rem" }}>
                    {t(PROVIDER_TYPE_LABELS[p.type])} · {district ? t(district.name) : p.district}
                  </p>
                  {course && (
                    <p style={{ margin: "0 0 0.4rem" }}>
                      {t(course.name)}
                      <br />
                      <span className="small muted">
                        {course.medium.map((m) => t(WORK_LANGUAGE_LABELS[m])).join(" / ")} ·{" "}
                        {t(FEE_LABELS[course.fee])}
                      </span>
                    </p>
                  )}
                  <Link href={`/training-finder?district=${p.district}`} className="small">
                    {t(S.viewDetails)} →
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="muted">{t(S.comingSoon)}</p>
        )}
        <p className="mt-1">
          <Link href="/training-finder" className="btn secondary small">
            {t(S.seeAllProviders)} →
          </Link>
        </p>
      </section>

      {/* Video interview (spec 6.8) */}
      <section id="video" aria-labelledby="video-h" className="section no-print" style={{ paddingTop: "1rem" }}>
        <h2 id="video-h">{t(S.videoInterview)}</h2>
        {job.video?.available ? (
          <div className="card-grid cols-3">
            <VideoStoryCard video={job.video} />
          </div>
        ) : (
          <div className="card fill">
            <p style={{ margin: 0 }}>
              <strong>{t(S.comingSoon)}.</strong> {t(S.videoComingSoon)}
            </p>
          </div>
        )}
      </section>

      {/* Save, compare, next step (spec 6.9) — every page ends with a next step */}
      <section aria-labelledby="next-h" className="section no-print" style={{ paddingTop: "1rem" }}>
        <div className="info-box">
          <h2 id="next-h">{t(S.nextSteps)}</h2>
          <div className="flex-wrap">
            <button className="btn secondary small" aria-pressed={saved} onClick={() => toggle(job.id)}>
              {saved ? `★ ${t(S.saved)}` : `☆ ${t(S.saveRole)}`}
            </button>
            <button className="btn secondary small" onClick={() => setCompareOpen(true)}>
              ⇄ {t(S.compareRole)}
            </button>
            <Link href="/training-finder" className="btn secondary small">
              {t(S.findProvider)}
            </Link>
            <Link href="/get-help#mentor" className="btn secondary small">
              {t(S.askAram)}
            </Link>
            <Link href="/get-help" className="btn gold small">
              {t(S.getHelp)}
            </Link>
          </div>
        </div>
        <p className="small muted">{t(S.sampleDataNote)}</p>
      </section>

      {compareOpen && <CompareModal baseJob={job} onClose={() => setCompareOpen(false)} />}
    </div>
  );
}
