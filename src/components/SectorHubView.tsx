"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { S, ROUTE_LABELS } from "@/data/strings";
import { getSector } from "@/data/sectors";
import { SECTOR_HUBS } from "@/data/sector-hubs";
import { JOBS } from "@/data/jobs";
import JobCard from "@/components/JobCard";
import VideoStoryCard from "@/components/VideoStoryCard";
import Breadcrumb from "@/components/Breadcrumb";
import PageMeta from "@/components/PageMeta";
import type { L, SectorId } from "@/lib/types";

const T = {
  qualMixTitle: { en: "How people enter this sector", ta: "இத்துறையில் மக்கள் எப்படி நுழைகிறார்கள்" },
  qualMixSub: {
    en: "The main routes in, at a glance — see each job profile for the full pathway map.",
    ta: "முக்கிய நுழைவு வழிகள், ஒரே பார்வையில் — முழுப் பாதை வரைபடத்திற்கு ஒவ்வொரு தொழில் பக்கத்தையும் பாருங்கள்.",
  },
  colRoute: { en: "Route type", ta: "பாதை வகை" },
  colEntry: { en: "Typical entry point", ta: "வழக்கமான நுழைவுப் புள்ளி" },
  colProgression: { en: "Progression available", ta: "கிடைக்கும் முன்னேற்றம்" },
  localTitle: { en: "Where this sector is active", ta: "இத்துறை எங்கு செயலில் உள்ளது" },
  rolesTitle: { en: "Roles in this sector", ta: "இத்துறையின் தொழில்கள்" },
  videoTitle: { en: "From someone in this sector", ta: "இத்துறையில் உள்ள ஒருவரிடமிருந்து" },
  allSector: { en: "See all roles in this sector", ta: "இத்துறையின் அனைத்துத் தொழில்களையும் பார்க்க" },
} satisfies Record<string, L>;

const QUAL_MIX: { route: L; entry: L; progression: L }[] = [
  {
    route: ROUTE_LABELS.university,
    entry: { en: "A/L pass, UGC selection, relevant stream", ta: "உ/த சித்தி, UGC தேர்வு, பொருந்தும் பிரிவு" },
    progression: { en: "Postgraduate, professional registration", ta: "பட்டப்பின் படிப்பு, தொழில்சார் பதிவு" },
  },
  {
    route: ROUTE_LABELS.tvet,
    entry: { en: "O/L pass or relevant NVQ level", ta: "சா/த சித்தி அல்லது பொருந்தும் NVQ நிலை" },
    progression: { en: "NVQ 1–6, Higher Diploma, degree via recognition", ta: "NVQ 1–6, உயர் டிப்ளோமா, அங்கீகாரம் வழி பட்டம்" },
  },
  {
    route: ROUTE_LABELS.apprenticeship,
    entry: { en: "School leaver; no minimum stated in some sectors", ta: "பாடசாலை விட்டவர்; சில துறைகளில் குறைந்தபட்சம் இல்லை" },
    progression: { en: "Skilled trade certification, NAITA recognition", ta: "திறன் தொழில் சான்றிதழ், NAITA அங்கீகாரம்" },
  },
  {
    route: ROUTE_LABELS.professional,
    entry: { en: "Varies by body; some allow O/L entry", ta: "அமைப்பு வாரியாக மாறும்; சில சா/த நுழைவை ஏற்கும்" },
    progression: { en: "Full membership, specialist pathways", ta: "முழு உறுப்புரிமை, சிறப்புப் பாதைகள்" },
  },
];

export default function SectorHubView({ sectorId }: { sectorId: string }) {
  const { t } = useLang();
  const sector = getSector(sectorId);
  const hub = SECTOR_HUBS[sectorId as SectorId];
  if (!sector || !hub) return null;

  // Priority job cards (spec 5.2): route-diverse roles first, not prestige
  const jobs = JOBS.filter((j) => j.sector === sector.id).sort(
    (a, b) => b.routeTypes.length - a.routeTypes.length
  );
  const videoJob = jobs.find((j) => j.video?.available);

  return (
    <div className="container">
      <Breadcrumb items={[{ href: "/explore-careers", label: S.navExplore }, { label: sector.name }]} />
      <h1>{t(sector.name)}</h1>
      <PageMeta verified={hub.verified} />

      {/* Sector overview (spec 5.1) */}
      <p style={{ maxWidth: "75ch" }}>{t(hub.overview)}</p>

      {/* Priority job cards (spec 5.2) */}
      <section className="section" aria-labelledby="roles-h">
        <h2 id="roles-h">{t(T.rolesTitle)}</h2>
        <div className="card-grid cols-3">
          {jobs.map((j) => (
            <JobCard key={j.id} job={j} />
          ))}
        </div>
        <p className="mt-1">
          <Link href={`/explore-careers?sector=${sector.id}`} className="btn secondary small">
            {t(T.allSector)} →
          </Link>
        </p>
      </section>

      {/* Qualification mix summary (spec 5.3) — digestible in 30 seconds */}
      <section className="section" aria-labelledby="qual-h">
        <h2 id="qual-h">{t(T.qualMixTitle)}</h2>
        <p className="section-sub">{t(T.qualMixSub)}</p>
        <div className="table-scroll">
          <table className="data">
            <thead>
              <tr>
                <th>{t(T.colRoute)}</th>
                <th>{t(T.colEntry)}</th>
                <th>{t(T.colProgression)}</th>
              </tr>
            </thead>
            <tbody>
              {QUAL_MIX.map((row, i) => (
                <tr key={i}>
                  <th scope="row">{t(row.route)}</th>
                  <td>{t(row.entry)}</td>
                  <td>{t(row.progression)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Local relevance note with inline source (spec 5.4) */}
      <section className="section" aria-labelledby="local-h">
        <h2 id="local-h">{t(T.localTitle)}</h2>
        <div className="info-box">
          <p>{t(hub.localNote)}</p>
          <p className="small muted" style={{ margin: 0 }}>
            {hub.localSource} · {t(S.lastVerified)}: {t(hub.verified)}
          </p>
        </div>
      </section>

      {/* Featured video story (spec 5.5) */}
      {videoJob?.video && (
        <section className="section" aria-labelledby="video-h">
          <h2 id="video-h">{t(T.videoTitle)}</h2>
          <div className="card-grid cols-3">
            <VideoStoryCard video={videoJob.video} href={`/jobs/${videoJob.id}#video`} />
          </div>
        </section>
      )}
    </div>
  );
}
