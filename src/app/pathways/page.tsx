"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { S, ROUTE_LABELS } from "@/data/strings";
import Breadcrumb from "@/components/Breadcrumb";
import PageMeta from "@/components/PageMeta";
import type { L } from "@/lib/types";

interface Family {
  anchor: string;
  label: L;
  covers: L;
  detail: L;
  exploreQuery: string;
}

const FAMILIES: Family[] = [
  {
    anchor: "university",
    label: ROUTE_LABELS.university,
    covers: {
      en: "O/L to A/L to UGC selection, degree programmes, Z-score, district basis, aptitude tests",
      ta: "சா/த → உ/த → UGC தேர்வு, பட்டப்படிப்புகள், Z-மதிப்பெண், மாவட்ட அடிப்படை, திறனாய்வுத் தேர்வுகள்",
    },
    detail: {
      en: "State university admission runs through the UGC using your Z-score, with a share of places allocated by district. Most degrees are English medium and take 3–4 years. Aptitude tests apply to some programmes. Private and open (OUSL) degrees are additional options with different entry rules.",
      ta: "அரச பல்கலைக்கழக அனுமதி UGC வழியாக Z-மதிப்பெண் அடிப்படையில் நடைபெறுகிறது; இடங்களில் ஒரு பகுதி மாவட்ட அடிப்படையில் ஒதுக்கப்படும். பெரும்பாலான பட்டங்கள் ஆங்கில மொழிமூலம்; 3–4 ஆண்டுகள். சில பாடநெறிகளுக்குத் திறனாய்வுத் தேர்வுகள் உண்டு. தனியார், திறந்த (OUSL) பட்டங்கள் வேறு நுழைவு விதிகளுடன் கூடுதல் வழிகள்.",
    },
    exploreQuery: "university",
  },
  {
    anchor: "tvet",
    label: ROUTE_LABELS.tvet,
    covers: {
      en: "NVQ Levels 1–6, DTET, VTA, UoVT, SLGTI, OUSL, recognition of prior learning, transitions to degree level",
      ta: "NVQ நிலைகள் 1–6, DTET, VTA, UoVT, SLGTI, OUSL, முன் கற்றல் அங்கீகாரம், பட்ட நிலைக்கு மாற்றம்",
    },
    detail: {
      en: "The NVQ ladder runs from Level 1 to Level 6, taught at VTA centres, technical colleges (DTET), and specialist institutes. Many courses are free and Tamil-medium up to NVQ 4; NVQ 5–6 diplomas can progress to degrees at UoVT. Work experience can be certified through RPL.",
      ta: "NVQ ஏணி நிலை 1 முதல் 6 வரை; VTA நிலையங்கள், தொழில்நுட்பக் கல்லூரிகள் (DTET), சிறப்பு நிறுவனங்களில் கற்பிக்கப்படுகிறது. பல பாடநெறிகள் இலவசம்; NVQ 4 வரை தமிழ் மொழிமூலம். NVQ 5–6 டிப்ளோமாக்கள் UoVT-இல் பட்டங்களுக்கு முன்னேறலாம். வேலை அனுபவத்திற்கு RPL மூலம் சான்றிதழ் பெறலாம்.",
    },
    exploreQuery: "tvet",
  },
  {
    anchor: "apprenticeship",
    label: ROUTE_LABELS.apprenticeship,
    covers: {
      en: "NAITA sectors, earn-while-you-learn routes, industrial training institutions, skill certification",
      ta: "NAITA துறைகள், சம்பாதித்துக் கற்கும் வழிகள், தொழிற்பயிற்சி நிறுவனங்கள், திறன் சான்றிதழ்",
    },
    detail: {
      en: "NAITA places school leavers with registered employers to learn a trade while being paid an allowance. Apprenticeships run six months to two years, end with a trade test, and lead to NVQ-recognised certification. No formal exam passes are required for many trades.",
      ta: "NAITA பாடசாலை விட்டவர்களைப் பதிவுசெய்யப்பட்ட முதலாளிகளுடன் இணைக்கிறது — கொடுப்பனவுடன் தொழில் கற்கலாம். பயிற்சிகள் 6 மாதம் – 2 ஆண்டுகள்; தொழில் தேர்வுடன் முடிந்து NVQ அங்கீகரிக்கப்பட்ட சான்றிதழுக்கு இட்டுச்செல்லும். பல தொழில்களுக்கு முறையான தேர்வுச் சித்திகள் தேவையில்லை.",
    },
    exploreQuery: "apprenticeship",
  },
  {
    anchor: "professional",
    label: ROUTE_LABELS.professional,
    covers: {
      en: "AAT, CA Sri Lanka, SLIM, CIMA, and other body-led ladders that cut across academic and vocational routes",
      ta: "AAT, CA Sri Lanka, SLIM, CIMA மற்றும் பிற அமைப்பு வழி ஏணிகள் — கல்வி, தொழிற்கல்வி வழிகளைக் கடந்து செல்பவை",
    },
    detail: {
      en: "Professional bodies run their own qualification ladders — many accept students straight from O/L or A/L, and most can be studied while working. They are a major route into accounting, marketing, HR, and IT, and often grant exemptions between each other and toward degrees.",
      ta: "தொழில்சார் அமைப்புகள் சொந்தத் தகைமை ஏணிகளை நடத்துகின்றன — பல சா/த அல்லது உ/த முடிந்தவுடன் ஏற்கும்; பெரும்பாலானவற்றை வேலையுடன் படிக்கலாம். கணக்கியல், சந்தைப்படுத்தல், HR, IT துறைகளுக்கான முக்கிய வழி; பட்டங்களை நோக்கிய விலக்குகளும் வழங்கப்படும்.",
    },
    exploreQuery: "professional",
  },
  {
    anchor: "workfirst",
    label: ROUTE_LABELS.workfirst,
    covers: {
      en: "Direct employment, informal-sector entry, self-employment, community roles, and routes back into formal training",
      ta: "நேரடி வேலை, முறைசாரா துறை நுழைவு, சுயதொழில், சமூகப் பணிகள், முறையான பயிற்சிக்குத் திரும்பும் வழிகள்",
    },
    detail: {
      en: "Starting work straight away is a real route, not a failure. Experience gained in work counts: RPL can convert it into NVQ certification, evening courses can add qualifications, and OUSL open-entry programmes keep degree doors open later in life.",
      ta: "உடனே வேலை தொடங்குவது உண்மையான வழி — தோல்வி அல்ல. வேலையில் பெறும் அனுபவம் கணக்கில் வரும்: RPL அதை NVQ சான்றிதழாக மாற்றலாம்; மாலைநேரப் பாடநெறிகள் தகைமைகளைச் சேர்க்கலாம்; OUSL திறந்த நுழைவுத் திட்டங்கள் பிற்காலத்திலும் பட்டக் கதவுகளைத் திறந்தே வைத்திருக்கும்.",
    },
    exploreQuery: "workfirst",
  },
];

const COMPARISON: { variable: L; values: Record<string, L> }[] = [
  {
    variable: { en: "Minimum entry", ta: "குறைந்தபட்ச நுழைவு" },
    values: {
      university: { en: "A/L pass", ta: "உ/த சித்தி" },
      tvet: { en: "O/L pass (some NVQ 1: none)", ta: "சா/த சித்தி (சில NVQ 1: தேவையில்லை)" },
      apprenticeship: { en: "School leaver", ta: "பாடசாலை விட்டவர்" },
      professional: { en: "Varies by body", ta: "அமைப்பு வாரியாக மாறும்" },
      workfirst: { en: "None stated", ta: "குறிப்பிடப்படவில்லை" },
    },
  },
  {
    variable: { en: "Duration", ta: "காலம்" },
    values: {
      university: { en: "3–4 years", ta: "3–4 ஆண்டுகள்" },
      tvet: { en: "6 months – 3 years", ta: "6 மாதம் – 3 ஆண்டுகள்" },
      apprenticeship: { en: "6 months – 2 years", ta: "6 மாதம் – 2 ஆண்டுகள்" },
      professional: { en: "1–4 years", ta: "1–4 ஆண்டுகள்" },
      workfirst: { en: "Immediate", ta: "உடனடி" },
    },
  },
  {
    variable: { en: "Income during", ta: "பயிற்சியின்போது வருமானம்" },
    values: {
      university: { en: "No", ta: "இல்லை" },
      tvet: { en: "Some (industrial training)", ta: "சில (தொழிற்பயிற்சி)" },
      apprenticeship: { en: "Yes (paid in some sectors)", ta: "ஆம் (சில துறைகளில் ஊதியம்)" },
      professional: { en: "No (can work alongside)", ta: "இல்லை (வேலையுடன் படிக்கலாம்)" },
      workfirst: { en: "Yes", ta: "ஆம்" },
    },
  },
  {
    variable: { en: "Medium of instruction", ta: "கற்பித்தல் மொழி" },
    values: {
      university: { en: "English (most degrees)", ta: "ஆங்கிலம் (பெரும்பாலான பட்டங்கள்)" },
      tvet: {
        en: "Tamil/Sinhala to NVQ 4; English NVQ 5–6 in some routes",
        ta: "NVQ 4 வரை தமிழ்/சிங்களம்; சில வழிகளில் NVQ 5–6 ஆங்கிலம்",
      },
      apprenticeship: { en: "Varies by sector and provider", ta: "துறை, நிறுவனம் வாரியாக மாறும்" },
      professional: { en: "Usually English", ta: "பொதுவாக ஆங்கிலம்" },
      workfirst: { en: "N/A", ta: "பொருந்தாது" },
    },
  },
];

export default function PathwaysPage() {
  const { t } = useLang();

  return (
    <div className="container">
      <Breadcrumb items={[{ label: S.pathwaysTitle }]} />
      <h1>{t(S.pathwaysTitle)}</h1>
      <PageMeta />

      {/* Intro (spec 7.1): no route is more legitimate than another */}
      <p style={{ maxWidth: "75ch", fontSize: "1.05rem" }}>{t(S.pathwaysIntro)}</p>

      {/* Current system note (spec 7.2) */}
      <div className="info-box gold" role="note">
        <h2 style={{ fontSize: "1.1rem" }}>{t(S.currentVsReform)}</h2>
        <p>
          <span className="badge current">{t(S.currentBadge)}</span> {t(S.currentExplain)}
        </p>
        <p>
          <span className="badge reform">{t(S.reformBadge)}</span> {t(S.reformExplain)}
        </p>
        <p style={{ margin: 0 }}>
          <strong>{t(S.reformApplyNow)}</strong>
        </p>
      </div>

      {/* Route comparison table (spec 7.4) */}
      <section className="section" aria-labelledby="compare-h" style={{ paddingTop: "1rem" }}>
        <h2 id="compare-h">{t(S.routeComparison)}</h2>
        <div className="table-scroll">
          <table className="data">
            <thead>
              <tr>
                <th>{t(S.variable)}</th>
                {FAMILIES.map((f) => (
                  <th key={f.anchor}>
                    <a href={`#${f.anchor}`}>{t(f.label)}</a>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row, i) => (
                <tr key={i}>
                  <th scope="row">{t(row.variable)}</th>
                  {FAMILIES.map((f) => (
                    <td key={f.anchor}>{t(row.values[f.anchor])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Route family cards (spec 7.3) */}
      <section className="section" aria-labelledby="families-h">
        <h2 id="families-h" className="visually-hidden">
          {t(S.pathwaysTitle)}
        </h2>
        {FAMILIES.map((f) => (
          <div key={f.anchor} id={f.anchor} className="card" style={{ marginBottom: "1rem" }}>
            <h2 style={{ marginBottom: "0.3rem" }}>{t(f.label)}</h2>
            <p className="small muted">{t(f.covers)}</p>
            <p style={{ maxWidth: "75ch" }}>{t(f.detail)}</p>
            <Link href={`/explore-careers?route=${f.exploreQuery}`} className="btn secondary small">
              {t(S.heroExplore)} →
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
