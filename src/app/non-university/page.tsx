"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { S } from "@/data/strings";
import Breadcrumb from "@/components/Breadcrumb";
import PageMeta from "@/components/PageMeta";
import type { L } from "@/lib/types";

const T = {
  framing: {
    en: "Most employment in Sri Lanka — including much of the services and industry sectors — does not require a university degree (DCS Labour Force Survey). This page is not about what you could not achieve; it is about what you can access and build from, starting now.",
    ta: "இலங்கையின் பெரும்பாலான வேலைவாய்ப்புகளுக்கு — சேவை, தொழில்துறையின் பெரும்பகுதி உட்பட — பல்கலைக்கழகப் பட்டம் தேவையில்லை (DCS தொழிலாளர் ஆய்வு). இப்பக்கம் நீங்கள் அடைய முடியாதது பற்றியது அல்ல; இப்போதே தொடங்கி நீங்கள் அடையக்கூடியது, கட்டியெழுப்பக்கூடியது பற்றியது.",
  },
} as const;

const ROUTES: { title: L; body: L; href: string; linkLabel: L }[] = [
  {
    title: { en: "NVQ and TVET", ta: "NVQ மற்றும் தொழிற்கல்வி" },
    body: {
      en: "NVQ levels 1–6 at VTA, DTET, NAITA, and OUSL providers. Entry from O/L (some courses without passes), many courses free, Tamil medium widely available to NVQ 4. Progression runs to Higher Diploma and degree level via UoVT.",
      ta: "VTA, DTET, NAITA, OUSL நிறுவனங்களில் NVQ நிலைகள் 1–6. சா/த முதல் நுழைவு (சில பாடநெறிகள் சித்தி இல்லாமலும்), பல இலவசம், NVQ 4 வரை தமிழ் மொழிமூலம் பரவலாக உண்டு. UoVT வழியாக உயர் டிப்ளோமா, பட்ட நிலை வரை முன்னேற்றம்.",
    },
    href: "/training-finder",
    linkLabel: { en: "Find NVQ courses near you", ta: "அருகிலுள்ள NVQ பாடநெறிகளைத் தேடுங்கள்" },
  },
  {
    title: { en: "Apprenticeships", ta: "பயிலுநர் பயிற்சிகள்" },
    body: {
      en: "NAITA-regulated apprenticeships match you to a registered employer. You earn an allowance while you learn — a real advantage if your family needs income now. Six months to two years, ending with a trade test and a recognised qualification.",
      ta: "NAITA ஒழுங்குபடுத்தும் பயிலுநர் பயிற்சிகள் உங்களைப் பதிவுசெய்யப்பட்ட முதலாளியுடன் இணைக்கும். கற்கும்போதே கொடுப்பனவு கிடைக்கும் — குடும்பத்திற்கு இப்போதே வருமானம் தேவைப்பட்டால் உண்மையான அனுகூலம். 6 மாதம் – 2 ஆண்டுகள்; தொழில் தேர்வுடன் அங்கீகரிக்கப்பட்ட தகைமை.",
    },
    href: "/explore-careers?route=apprenticeship",
    linkLabel: { en: "See roles with apprenticeship routes", ta: "பயிலுநர் வழி உள்ள தொழில்களைப் பார்க்க" },
  },
  {
    title: { en: "Professional certificates", ta: "தொழில்சார் சான்றிதழ்கள்" },
    body: {
      en: "AAT, CA Sri Lanka foundation, SLIM and CIMA certificates accept O/L or school leavers. Fees apply, but these ladders lead to full professional membership — many of Sri Lanka's accountants and marketers started this way, studying while working.",
      ta: "AAT, CA Sri Lanka அடிப்படை, SLIM, CIMA சான்றிதழ்கள் சா/த அல்லது பாடசாலை விட்டவர்களை ஏற்கும். கட்டணங்கள் உண்டு; ஆனால் இவ்வேணிகள் முழு தொழில்சார் உறுப்புரிமைக்கு இட்டுச்செல்லும் — இலங்கையின் பல கணக்காளர்களும் சந்தைப்படுத்துநர்களும் வேலை செய்துகொண்டே இப்படித்தான் தொடங்கினர்.",
    },
    href: "/explore-careers?route=professional",
    linkLabel: { en: "See roles with professional routes", ta: "தொழில்சார் வழி உள்ள தொழில்களைப் பார்க்க" },
  },
  {
    title: { en: "Work-first routes", ta: "வேலை-முதல் வழிகள்" },
    body: {
      en: "Entry-level employment, informal-sector work, and self-employment are real starting points. Recognition of Prior Learning (RPL) can later convert your experience into NVQ certification, and OUSL open-entry keeps study options open at any age.",
      ta: "தொடக்க நிலை வேலை, முறைசாரா துறை வேலை, சுயதொழில் — இவை உண்மையான தொடக்கப் புள்ளிகள். முன் கற்றல் அங்கீகாரம் (RPL) பின்னர் உங்கள் அனுபவத்தை NVQ சான்றிதழாக மாற்றலாம்; OUSL திறந்த நுழைவு எந்த வயதிலும் கல்வி வாய்ப்புகளைத் திறந்தே வைத்திருக்கும்.",
    },
    href: "/explore-careers?route=workfirst",
    linkLabel: { en: "See work-first roles", ta: "வேலை-முதல் தொழில்களைப் பார்க்க" },
  },
];

export default function NonUniversityPage() {
  const { t } = useLang();
  return (
    <div className="container">
      <Breadcrumb items={[{ label: S.stageNonUni }]} />
      <h1>{t(S.stageNonUni)}</h1>
      <PageMeta />

      {/* Framing (spec 10.1): never reads as a fallback section */}
      <p style={{ maxWidth: "75ch", fontSize: "1.05rem" }}>{t(T.framing)}</p>

      {/* Route cards (spec 10.2) */}
      <div className="card-grid cols-2 section">
        {ROUTES.map((r, i) => (
          <div key={i} className="card">
            <h2 style={{ marginBottom: "0.3rem" }}>{t(r.title)}</h2>
            <p>{t(r.body)}</p>
            <Link href={r.href} className="btn secondary small">
              {t(r.linkLabel)} →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
