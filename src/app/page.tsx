"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { S } from "@/data/strings";
import { SECTORS } from "@/data/sectors";
import { JOBS } from "@/data/jobs";
import VideoStoryCard from "@/components/VideoStoryCard";

const STAGES = [
  { href: "/after-ol", label: S.stageAfterOl, desc: S.stageAfterOlDesc },
  { href: "/after-al", label: S.stageAfterAl, desc: S.stageAfterAlDesc },
  { href: "/pathways#university", label: S.stageUni, desc: S.stageUniDesc },
  { href: "/non-university", label: S.stageNonUni, desc: S.stageNonUniDesc },
  { href: "/pathways#professional", label: S.stageWorking, desc: S.stageWorkingDesc },
  { href: "/career-quiz", label: S.stageNotSure, desc: S.stageNotSureDesc },
];

export default function HomePage() {
  const { t } = useLang();
  const videoJobs = JOBS.filter((j) => j.video?.available).slice(0, 3);

  return (
    <>
      {/* Hero (spec 3.1): solid teal, no carousel, no autoplay, no animation */}
      <section className="hero">
        <div className="container">
          <h1>{t(S.heroHeadline)}</h1>
          <p>{t(S.heroSub)}</p>
          <div className="actions">
            <Link href="/explore-careers" className="btn">
              {t(S.heroExplore)}
            </Link>
            <Link href="/career-quiz" className="btn outline">
              {t(S.heroQuiz)}
            </Link>
          </div>
        </div>
      </section>

      {/* Choose your stage (spec 3.2) — the most important navigation block */}
      <section className="section container" aria-labelledby="stage-h">
        <h2 id="stage-h">{t(S.chooseStage)}</h2>
        <p className="section-sub">{t(S.chooseStageSub)}</p>
        <div className="card-grid cols-3">
          {STAGES.map((s) => (
            <Link key={s.href} href={s.href} className="stage-card">
              <h3>{t(s.label)}</h3>
              <p>{t(s.desc)}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured sectors strip (spec 3.3) */}
      <section className="section container" aria-labelledby="sectors-h">
        <h2 id="sectors-h">{t(S.featuredSectors)}</h2>
        <div className="strip">
          {SECTORS.filter((s) => s.featured).map((s) => (
            <Link key={s.id} href={`/sectors/${s.id}`} className="stage-card">
              <h3>{t(s.name)}</h3>
              <p>{t(s.short)}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Career quiz entry (spec 3.4) */}
      <section className="section container" aria-labelledby="quiz-h">
        <div className="info-box">
          <h2 id="quiz-h">{t(S.quizBlockTitle)}</h2>
          <p>{t(S.quizBlockText)}</p>
          <Link href="/career-quiz" className="btn">
            {t(S.startQuiz)}
          </Link>
        </div>
      </section>

      {/* Featured video stories (spec 3.5) */}
      <section className="section container" aria-labelledby="videos-h">
        <h2 id="videos-h">{t(S.videoStories)}</h2>
        <p className="section-sub">{t(S.videoStoriesSub)}</p>
        <div className="card-grid cols-3">
          {videoJobs.map(
            (j) =>
              j.video && <VideoStoryCard key={j.id} video={j.video} href={`/jobs/${j.id}#video`} />
          )}
        </div>
      </section>

      {/* Get Help entry (spec 3.6): urgent link large, high-contrast, never buried */}
      <section className="section container" aria-labelledby="help-h">
        <div className="card fill">
          <h2 id="help-h">{t(S.helpBlockTitle)}</h2>
          <div className="flex-wrap">
            <Link href="/get-help" className="btn secondary">
              {t(S.helpFindGuidance)}
            </Link>
            <Link href="/get-help#urgent" className="btn gold">
              ⚠ {t(S.helpUrgent)}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
