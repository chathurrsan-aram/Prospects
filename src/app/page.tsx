"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { S } from "@/data/strings";
import { SECTORS } from "@/data/sectors";
import { JOBS } from "@/data/jobs";
import { DISTRICTS } from "@/data/districts";
import VideoStoryCard from "@/components/VideoStoryCard";
import {
  STAGE_ICONS,
  SECTOR_ICONS,
  SearchIcon,
  CompassIcon,
  HeartHandIcon,
  WarnIcon,
} from "@/components/icons";

const STAGES = [
  { href: "/after-ol", label: S.stageAfterOl, desc: S.stageAfterOlDesc, icon: STAGE_ICONS["after-ol"] },
  { href: "/after-al", label: S.stageAfterAl, desc: S.stageAfterAlDesc, icon: STAGE_ICONS["after-al"] },
  { href: "/pathways#university", label: S.stageUni, desc: S.stageUniDesc, icon: STAGE_ICONS.university },
  { href: "/non-university", label: S.stageNonUni, desc: S.stageNonUniDesc, icon: STAGE_ICONS["non-university"] },
  { href: "/pathways#professional", label: S.stageWorking, desc: S.stageWorkingDesc, icon: STAGE_ICONS.working },
  { href: "/career-quiz", label: S.stageNotSure, desc: S.stageNotSureDesc, icon: STAGE_ICONS["not-sure"] },
];

/* Dotted lattice, drawn once and tiled — decorative, static (WCAG 2.3.3: no motion) */
function HeroPattern() {
  return (
    <svg className="pattern" aria-hidden="true" width="100%" height="100%">
      <defs>
        <pattern id="kolam" width="56" height="56" patternUnits="userSpaceOnUse">
          <circle cx="28" cy="28" r="2" fill="currentColor" />
          <circle cx="0" cy="0" r="2" fill="currentColor" />
          <circle cx="56" cy="0" r="2" fill="currentColor" />
          <circle cx="0" cy="56" r="2" fill="currentColor" />
          <circle cx="56" cy="56" r="2" fill="currentColor" />
          <path d="M28 10a18 18 0 0 1 0 36 18 18 0 0 1 0-36z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#kolam)" />
    </svg>
  );
}

export default function HomePage() {
  const { t, lang } = useLang();
  const videoJobs = JOBS.filter((j) => j.video?.available).slice(0, 3);

  const stats: { n: string; l: { en: string; ta: string } }[] = [
    { n: String(JOBS.length), l: { en: "role guides", ta: "தொழில் வழிகாட்டிகள்" } },
    { n: "5", l: { en: "route families", ta: "பாதை வகைகள்" } },
    { n: String(DISTRICTS.length), l: { en: "districts covered", ta: "மாவட்டங்கள்" } },
    { n: "2", l: { en: "languages", ta: "மொழிகள்" } },
  ];

  return (
    <>
      {/* Hero (spec 3.1): no carousel, no autoplay, static decorative pattern */}
      <section className="hero">
        <HeroPattern />
        <div className="container">
          <h1>
            {lang === "en" ? (
              <>
                <span className="accent">Find your path</span> — school, training, or work in Sri Lanka
              </>
            ) : (
              <>
                <span className="accent">உங்கள் பாதையைக் கண்டறியுங்கள்</span> — இலங்கையில் கல்வி, பயிற்சி அல்லது வேலை
              </>
            )}
          </h1>
          <p>{t(S.heroSub)}</p>
          <div className="actions">
            <Link href="/explore-careers" className="btn">
              <SearchIcon size={20} /> {t(S.heroExplore)}
            </Link>
            <Link href="/career-quiz" className="btn outline">
              <CompassIcon size={20} /> {t(S.heroQuiz)}
            </Link>
          </div>
          <div className="hero-stats" aria-hidden="false">
            {stats.map((s, i) => (
              <div key={i} className="stat">
                <span className="n">{s.n}</span>
                <span className="l">{t(s.l)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose your stage (spec 3.2) — the most important navigation block */}
      <section className="section container" aria-labelledby="stage-h">
        <span className="kicker">{t({ en: "Start here", ta: "இங்கே தொடங்குங்கள்" })}</span>
        <h2 id="stage-h">{t(S.chooseStage)}</h2>
        <p className="section-sub">{t(S.chooseStageSub)}</p>
        <div className="card-grid cols-3">
          {STAGES.map((s) => {
            const Icon = s.icon;
            return (
              <Link key={s.href} href={s.href} className="stage-card">
                <span className="icon-chip">
                  <Icon size={28} />
                </span>
                <span>
                  <h3>{t(s.label)}</h3>
                  <p>{t(s.desc)}</p>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured sectors strip (spec 3.3) */}
      <div className="band">
        <section className="container" aria-labelledby="sectors-h">
          <span className="kicker">{t({ en: "Six sectors, many routes", ta: "ஆறு துறைகள், பல வழிகள்" })}</span>
          <h2 id="sectors-h">{t(S.featuredSectors)}</h2>
          <div className="strip">
            {SECTORS.filter((s) => s.featured).map((s) => {
              const Icon = SECTOR_ICONS[s.id];
              return (
                <Link key={s.id} href={`/sectors/${s.id}`} className="stage-card">
                  <span className="icon-chip gold">
                    <Icon size={28} />
                  </span>
                  <span>
                    <h3>{t(s.name)}</h3>
                    <p>{t(s.short)}</p>
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      </div>

      {/* Career quiz entry (spec 3.4) */}
      <section className="section container" aria-labelledby="quiz-h">
        <div className="info-box" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <span className="icon-chip" aria-hidden="true">
            <CompassIcon size={30} />
          </span>
          <div>
            <h2 id="quiz-h">{t(S.quizBlockTitle)}</h2>
            <p>{t(S.quizBlockText)}</p>
            <Link href="/career-quiz" className="btn">
              {t(S.startQuiz)}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured video stories (spec 3.5) */}
      <section className="section container" aria-labelledby="videos-h">
        <span className="kicker">{t({ en: "Real people, real routes", ta: "உண்மை மனிதர்கள், உண்மை வழிகள்" })}</span>
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
        <div className="card fill" style={{ display: "flex", gap: "1rem", alignItems: "flex-start", flexWrap: "wrap" }}>
          <span className="icon-chip gold" aria-hidden="true">
            <HeartHandIcon size={30} />
          </span>
          <div style={{ flex: 1, minWidth: "min(100%, 260px)" }}>
            <h2 id="help-h">{t(S.helpBlockTitle)}</h2>
            <div className="flex-wrap">
              <Link href="/get-help" className="btn secondary">
                {t(S.helpFindGuidance)}
              </Link>
              <Link href="/get-help#urgent" className="btn gold">
                <WarnIcon size={20} /> {t(S.helpUrgent)}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
