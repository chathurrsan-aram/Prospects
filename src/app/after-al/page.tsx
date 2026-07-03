"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { S } from "@/data/strings";
import { SCHOLARSHIPS } from "@/data/help";
import Breadcrumb from "@/components/Breadcrumb";
import PageMeta from "@/components/PageMeta";

const T = {
  intro: {
    en: "With A/L results (or while waiting for them), you have more routes than the UGC list. This page explains how university application really works — and the strong alternatives beside it.",
    ta: "உ/த முடிவுகளுடன் (அல்லது அவற்றுக்காகக் காத்திருக்கும்போது), UGC பட்டியலை விட அதிக வழிகள் உங்களுக்கு உண்டு. பல்கலைக்கழக விண்ணப்பம் உண்மையில் எப்படி இயங்குகிறது என்பதையும், அதற்கு இணையான வலுவான மாற்று வழிகளையும் இப்பக்கம் விளக்குகிறது.",
  },
  ugcTitle: { en: "The UGC university route", ta: "UGC பல்கலைக்கழகப் பாதை" },
  zTitle: { en: "How the Z-score works", ta: "Z-மதிப்பெண் எப்படி இயங்குகிறது" },
  zBody: {
    en: "Your raw A/L marks are converted to a Z-score that compares your performance with everyone who sat the same subjects that year. Degree programmes fill their places in Z-score order, so the cutoff for each course changes every year and differs by district.",
    ta: "உங்கள் மூல உ/த புள்ளிகள், அதே ஆண்டு அதே பாடங்களை எழுதிய அனைவருடனும் ஒப்பிடும் Z-மதிப்பெண்ணாக மாற்றப்படும். பட்டப் பாடநெறிகள் Z-மதிப்பெண் வரிசையில் இடங்களை நிரப்பும்; எனவே ஒவ்வொரு பாடநெறியின் வரம்பும் ஆண்டுதோறும் மாறும், மாவட்டம் வாரியாகவும் வேறுபடும்.",
  },
  dTitle: { en: "How district basis affects allocation", ta: "மாவட்ட அடிப்படை ஒதுக்கீட்டை எப்படி பாதிக்கிறது" },
  dBody: {
    en: "A large share of places in most courses is allocated by district, based on where you sat O/L and A/L. This matters for students outside Colombo: your Z-score competes mainly within your own district's allocation, which can work in your favour in Northern and Eastern districts for some programmes.",
    ta: "பெரும்பாலான பாடநெறிகளில் கணிசமான இடங்கள், நீங்கள் சா/த, உ/த எழுதிய இடத்தின் அடிப்படையில் மாவட்ட வாரியாக ஒதுக்கப்படும். கொழும்புக்கு வெளியே உள்ள மாணவர்களுக்கு இது முக்கியம்: உங்கள் Z-மதிப்பெண் முக்கியமாக உங்கள் மாவட்ட ஒதுக்கீட்டுக்குள்ளேயே போட்டியிடும்; சில பாடநெறிகளில் வட, கிழக்கு மாவட்டங்களில் இது சாதகமாக அமையலாம்.",
  },
  pTitle: { en: "The order-of-preference form", ta: "விருப்ப வரிசைப் படிவம்" },
  pBody: {
    en: "You list degree programmes in your true order of preference. Common mistakes: listing 'safe' courses first (the system already handles this — list what you actually want first), leaving slots blank, and not checking course codes. Once allocated, changing is very difficult.",
    ta: "பட்டப் பாடநெறிகளை உங்கள் உண்மையான விருப்ப வரிசையில் எழுத வேண்டும். பொதுவான தவறுகள்: 'பாதுகாப்பான' பாடநெறிகளை முதலில் எழுதுவது (முறைமை இதை ஏற்கனவே கையாள்கிறது — உண்மையாக விரும்புவதையே முதலில் எழுதுங்கள்), இடங்களை வெறுமையாக விடுவது, பாடநெறிக் குறியீடுகளைச் சரிபார்க்காதது. ஒதுக்கீட்டுக்குப் பின் மாற்றுவது மிகக் கடினம்.",
  },
  aTitle: { en: "Aptitude test exceptions", ta: "திறனாய்வுத் தேர்வு விதிவிலக்குகள்" },
  aBody: {
    en: "Some programmes (e.g. architecture, design, IT at some universities, translation, physical education) require an aptitude test on top of your Z-score. Dates are published by each university — if you miss the test you cannot be selected, whatever your Z-score.",
    ta: "சில பாடநெறிகளுக்கு (எ.கா. கட்டடக்கலை, வடிவமைப்பு, சில பல்கலைக்கழகங்களில் IT, மொழிபெயர்ப்பு, உடற்கல்வி) Z-மதிப்பெண்ணுடன் திறனாய்வுத் தேர்வும் தேவை. திகதிகளை ஒவ்வொரு பல்கலைக்கழகமும் வெளியிடும் — தேர்வைத் தவறவிட்டால், Z-மதிப்பெண் எதுவாயினும் தேர்வாக முடியாது.",
  },
  wTitle: { en: "Application window and where to submit", ta: "விண்ணப்பக் காலமும் சமர்ப்பிக்கும் இடமும்" },
  wBody: {
    en: "UGC applications open after A/L results are released (typically for a few weeks). Applications are submitted online through the UGC portal — if you don't have a computer at home, OUSL centres, some schools, and Nenasala centres can help during application season.",
    ta: "உ/த முடிவுகள் வெளியான பின் UGC விண்ணப்பங்கள் திறக்கும் (பொதுவாக சில வாரங்களுக்கு). விண்ணப்பங்கள் UGC இணையதளம் வழியாக மட்டுமே — வீட்டில் கணினி இல்லையென்றால், விண்ணப்ப காலத்தில் OUSL நிலையங்கள், சில பாடசாலைகள், நெனசல நிலையங்கள் உதவும்.",
  },
  sTitle: { en: "In-person support points", ta: "நேரடி உதவி மையங்கள்" },
  sBody: {
    en: "OUSL regional centres and zonal education offices offer in-person guidance during application season. Take your results sheet and ID; staff can help you check course codes and submit correctly.",
    ta: "விண்ணப்ப காலத்தில் OUSL பிராந்திய நிலையங்களும் வலயக் கல்வி அலுவலகங்களும் நேரடி வழிகாட்டல் வழங்கும். முடிவுத் தாளையும் அடையாள அட்டையையும் எடுத்துச் செல்லுங்கள்; பாடநெறிக் குறியீடுகளைச் சரிபார்த்து சரியாகச் சமர்ப்பிக்க உதவுவார்கள்.",
  },
  reformNote: {
    en: "MOE reforms may change future A/L structures and admission processes. If you are applying now, follow the CURRENT guidance above.",
    ta: "கல்வி அமைச்சின் சீர்திருத்தங்கள் எதிர்கால உ/த அமைப்புகளையும் அனுமதி முறைகளையும் மாற்றலாம். இப்போது விண்ணப்பிக்கிறீர்கள் என்றால், மேலே உள்ள தற்போதைய வழிகாட்டலைப் பின்பற்றுங்கள்.",
  },
  altTitle: { en: "Private and open-study alternatives", ta: "தனியார், திறந்த கல்வி மாற்று வழிகள்" },
  altBody: {
    en: "Private degree-granting institutions (UGC-recognised), OUSL open-entry degrees, and professional qualification entry via A/L are legitimate routes — not consolation options. OUSL lets you study while working, in Tamil for several programmes.",
    ta: "தனியார் பட்ட நிறுவனங்கள் (UGC அங்கீகாரம் பெற்றவை), OUSL திறந்த நுழைவுப் பட்டங்கள், உ/த மூலம் தொழில்சார் தகைமை நுழைவு — இவை முறையான வழிகள்; ஆறுதல் தேர்வுகள் அல்ல. OUSL-இல் வேலை செய்துகொண்டே படிக்கலாம்; பல பாடநெறிகள் தமிழிலும் உண்டு.",
  },
  tvetTitle: { en: "TVET and professional routes that accept A/L", ta: "உ/த ஏற்கும் தொழிற்கல்வி, தொழில்சார் வழிகள்" },
  tvetBody: {
    en: "NVQ 5–6 higher diplomas (e.g. quantity surveying, ICT) and professional programmes (AAT, CA foundation, SLIM) accept A/L results and can lead to comparable employment outcomes — often faster and closer to home.",
    ta: "NVQ 5–6 உயர் டிப்ளோமாக்கள் (எ.கா. அளவை மதிப்பீடு, ICT), தொழில்சார் திட்டங்கள் (AAT, CA அடிப்படை, SLIM) உ/த முடிவுகளை ஏற்கும்; இணையான வேலை வாய்ப்புகளுக்கு — பெரும்பாலும் விரைவாகவும் வீட்டுக்கு அருகிலும் — இட்டுச்செல்லும்.",
  },
  scholTitle: { en: "Scholarships", ta: "புலமைப்பரிசில்கள்" },
  checklistTitle: { en: "After A/L: your options", ta: "உ/த க்குப் பிறகு: உங்கள் வாய்ப்புகள்" },
  checklist: [
    { en: "Check the UGC application window as soon as results are out", ta: "முடிவுகள் வெளியானதும் UGC விண்ணப்பக் காலத்தைச் சரிபாருங்கள்" },
    { en: "List degree preferences in your TRUE order — not 'safe first'", ta: "பட்ட விருப்பங்களை உண்மையான வரிசையில் எழுதுங்கள் — 'பாதுகாப்பானது முதலில்' அல்ல" },
    { en: "Check whether your chosen courses need an aptitude test", ta: "தேர்ந்த பாடநெறிகளுக்குத் திறனாய்வுத் தேர்வு தேவையா எனப் பாருங்கள்" },
    { en: "Apply for Mahapola / Bursary once registered", ta: "பதிவு செய்ததும் மகாபொல / உதவுதொகைக்கு விண்ணப்பியுங்கள்" },
    { en: "In parallel, shortlist one TVET or professional alternative", ta: "இணையாக, ஒரு தொழிற்கல்வி அல்லது தொழில்சார் மாற்றையும் பட்டியலிடுங்கள்" },
    { en: "If you need help applying, visit an OUSL centre or zonal office", ta: "விண்ணப்பிக்க உதவி தேவைப்பட்டால், OUSL நிலையம் அல்லது வலய அலுவலகம் செல்லுங்கள்" },
  ],
  printChecklist: { en: "Download checklist (PDF)", ta: "சரிபார்ப்புப் பட்டியலைப் பதிவிறக்க (PDF)" },
} as const;

const UGC_SECTIONS = [
  { id: "z", title: T.zTitle, body: T.zBody },
  { id: "district", title: T.dTitle, body: T.dBody },
  { id: "pref", title: T.pTitle, body: T.pBody },
  { id: "apt", title: T.aTitle, body: T.aBody },
  { id: "window", title: T.wTitle, body: T.wBody },
  { id: "support", title: T.sTitle, body: T.sBody },
];

export default function AfterAlPage() {
  const { t } = useLang();

  return (
    <div className="container">
      <Breadcrumb items={[{ label: S.stageAfterAl }]} />
      <h1>{t(S.stageAfterAl)}</h1>
      <PageMeta />
      <p style={{ maxWidth: "75ch" }}>{t(T.intro)}</p>

      {/* UGC route card (spec 9.1) — all sub-sections CURRENT */}
      <section className="section" aria-labelledby="ugc-h">
        <h2 id="ugc-h">
          {t(T.ugcTitle)} <span className="badge current">{t(S.currentBadge)}</span>
        </h2>
        {UGC_SECTIONS.map((s) => (
          <details key={s.id} className="accordion">
            <summary>{t(s.title)}</summary>
            <div className="body">
              <p style={{ margin: 0 }}>{t(s.body)}</p>
            </div>
          </details>
        ))}
        <div className="info-box gold">
          <p style={{ margin: 0 }}>
            <span className="badge reform">{t(S.reformBadge)}</span> {t(T.reformNote)}
          </p>
        </div>
      </section>

      {/* Alternatives (spec 9.2, 9.3) */}
      <section className="section" aria-labelledby="alt-h">
        <h2 id="alt-h">{t(T.altTitle)}</h2>
        <p style={{ maxWidth: "75ch" }}>{t(T.altBody)}</p>
        <h2 className="mt-1">{t(T.tvetTitle)}</h2>
        <p style={{ maxWidth: "75ch" }}>{t(T.tvetBody)}</p>
        <div className="flex-wrap">
          <Link href="/explore-careers?route=tvet" className="btn secondary small">
            {t(S.heroExplore)}: {t({ en: "TVET routes", ta: "தொழிற்கல்வி வழிகள்" })} →
          </Link>
          <Link href="/explore-careers?route=professional" className="btn secondary small">
            {t(S.heroExplore)}: {t({ en: "Professional routes", ta: "தொழில்சார் வழிகள்" })} →
          </Link>
        </div>
      </section>

      {/* Scholarships block (spec 9.4) */}
      <section className="section" aria-labelledby="schol-h">
        <h2 id="schol-h">{t(T.scholTitle)}</h2>
        <div className="card-grid cols-3">
          {SCHOLARSHIPS.map((s, i) => (
            <div key={i} className="card">
              <h3 style={{ marginBottom: "0.2rem" }}>{t(s.name)}</h3>
              <p className="small" style={{ margin: "0 0 0.3rem" }}>{t(s.eligibility)}</p>
              <p className="small muted" style={{ margin: 0 }}>
                {s.source} · {t(S.lastVerified)}: {t(s.verified)}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-1">
          <Link href="/get-help#schol-h" className="btn secondary small">
            {t(S.seeAll)} →
          </Link>
        </p>
      </section>

      {/* Downloadable checklist (spec 9.5) */}
      <section className="section" aria-labelledby="check-h">
        <div className="checklist print-area">
          <h2 id="check-h">☑ {t(T.checklistTitle)}</h2>
          <ul>
            {T.checklist.map((item, i) => (
              <li key={i}>{t(item)}</li>
            ))}
          </ul>
        </div>
        <p className="mt-1 no-print">
          <button className="btn secondary small" onClick={() => window.print()}>
            ⬇ {t(T.printChecklist)}
          </button>
        </p>
      </section>
    </div>
  );
}
