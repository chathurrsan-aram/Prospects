"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { S } from "@/data/strings";
import Breadcrumb from "@/components/Breadcrumb";
import PageMeta from "@/components/PageMeta";

const T = {
  orientTitle: { en: "What do O/L results mean?", ta: "சா/த முடிவுகள் என்ன அர்த்தம்?" },
  orient1: {
    en: "O/L subjects are graded A, B, C, S, and W. A grade of S or better is a pass. Different routes ask for different passes: A/L entry usually needs six passes including maths and your first language; many NVQ courses ask only for basic passes — and some accept students without them.",
    ta: "சா/த பாடங்கள் A, B, C, S, W எனத் தரப்படுத்தப்படும். S அல்லது அதற்கு மேல் சித்தி. வெவ்வேறு வழிகளுக்கு வெவ்வேறு சித்திகள் தேவை: உ/த நுழைவுக்குப் பொதுவாகக் கணிதம், தாய்மொழி உட்பட ஆறு சித்திகள்; பல NVQ பாடநெறிகளுக்கு அடிப்படைச் சித்திகள் மட்டுமே — சில அவை இல்லாமலும் ஏற்கும்.",
  },
  orient2: {
    en: "Your O/L results do not close off all options. Whatever your results, there is a route from here — this page shows the three main ones.",
    ta: "உங்கள் சா/த முடிவுகள் எல்லா வாய்ப்புகளையும் மூடிவிடாது. முடிவுகள் எப்படியிருந்தாலும், இங்கிருந்து ஒரு வழி உண்டு — முக்கிய மூன்றை இப்பக்கம் காட்டுகிறது.",
  },
  threeTitle: { en: "What can you do after O/L?", ta: "சா/த க்குப் பிறகு என்ன செய்யலாம்?" },
  threeSub: {
    en: "Three primary paths, each an equal option — not a ranking.",
    ta: "மூன்று முதன்மைப் பாதைகள்; ஒவ்வொன்றும் சம வாய்ப்பு — தரவரிசை அல்ல.",
  },
  p1Title: { en: "Continue to A/L", ta: "உ/த (A/L) தொடருங்கள்" },
  p1Body: {
    en: "Choose a stream (Science, Arts, Commerce, or Technology) based on your O/L results and interests. A/L leads to university selection, but also to NVQ 5–6 diplomas and professional qualifications. Example routes: Science stream → nursing or engineering; Commerce → accounting.",
    ta: "உங்கள் சா/த முடிவுகள், ஆர்வங்களின் அடிப்படையில் ஒரு பிரிவைத் (விஞ்ஞானம், கலை, வர்த்தகம், தொழில்நுட்பம்) தேர்ந்தெடுங்கள். உ/த பல்கலைக்கழகத் தேர்வுக்கும், NVQ 5–6 டிப்ளோமாக்கள், தொழில்சார் தகைமைகளுக்கும் இட்டுச்செல்லும். எடுத்துக்காட்டு: விஞ்ஞானம் → தாதியம்/பொறியியல்; வர்த்தகம் → கணக்கியல்.",
  },
  p2Title: { en: "Enter TVET or NVQ training", ta: "தொழிற்கல்வி / NVQ பயிற்சியில் சேருங்கள்" },
  p2Body: {
    en: "Entry-level NVQ courses (Levels 2–4) accept O/L results — many are free, Tamil-medium, and 6–18 months long. Fields include ICT, electrical, automotive, hospitality, and graphic design. NVQ can lead all the way to degree level at UoVT.",
    ta: "தொடக்க நிலை NVQ பாடநெறிகள் (நிலை 2–4) சா/த முடிவுகளை ஏற்கும் — பல இலவசம், தமிழ் மொழிமூலம், 6–18 மாதங்கள். ICT, மின்வேலை, வாகனம், விருந்தோம்பல், வரைகலை உட்பட. NVQ, UoVT-இல் பட்ட நிலை வரை இட்டுச்செல்லலாம்.",
  },
  p3Title: { en: "Other routes", ta: "பிற வழிகள்" },
  p3Body: {
    en: "NAITA apprenticeships pay an allowance while you learn a trade. Professional bodies like AAT accept students straight after O/L. Direct employment is also a real path — work experience can later be certified through RPL.",
    ta: "NAITA பயிலுநர் பயிற்சிகள் தொழில் கற்கும்போதே கொடுப்பனவு வழங்கும். AAT போன்ற தொழில்சார் அமைப்புகள் சா/த முடிந்தவுடன் ஏற்கும். நேரடி வேலையும் உண்மையான பாதை — வேலை அனுபவத்திற்கு பின்னர் RPL மூலம் சான்றிதழ் பெறலாம்.",
  },
  streamTitle: { en: "A/L stream guidance", ta: "உ/த பிரிவு வழிகாட்டல்" },
  streamNote: {
    en: "Stream structures are affected by the MOE reform programme; the table below reflects the current system.",
    ta: "பிரிவு அமைப்புகள் கல்வி அமைச்சின் சீர்திருத்தத் திட்டத்தால் மாறலாம்; கீழுள்ள அட்டவணை தற்போதைய முறையைக் காட்டுகிறது.",
  },
  colStream: { en: "Stream", ta: "பிரிவு" },
  colNeeds: { en: "Typical O/L requirement", ta: "வழக்கமான சா/த தேவை" },
  colLeads: { en: "Typically leads to", ta: "பொதுவாக இட்டுச்செல்வது" },
  colMedium: { en: "Language medium", ta: "மொழிமூலம்" },
  checklistTitle: { en: "After O/L: your next steps", ta: "சா/த க்குப் பிறகு: உங்கள் அடுத்த படிகள்" },
  checklist: [
    { en: "Collect your results and check them against each route's entry requirements", ta: "முடிவுகளைப் பெற்று, ஒவ்வொரு வழியின் நுழைவுத் தேவைகளுடன் ஒப்பிடுங்கள்" },
    { en: "Talk to your class teacher or a guidance counsellor about your options", ta: "வகுப்பு ஆசிரியர் அல்லது வழிகாட்டல் ஆலோசகருடன் உங்கள் வாய்ப்புகளைப் பேசுங்கள்" },
    { en: "If choosing A/L: confirm stream entry requirements at your school", ta: "உ/த என்றால்: உங்கள் பாடசாலையில் பிரிவு நுழைவுத் தேவைகளை உறுதிப்படுத்துங்கள்" },
    { en: "If choosing TVET: visit your nearest training centre and ask about intakes", ta: "தொழிற்கல்வி என்றால்: அருகிலுள்ள பயிற்சி நிலையம் சென்று அனுமதிகள் பற்றிக் கேளுங்கள்" },
    { en: "Note key deadlines — A/L registration and NVQ intakes have dates", ta: "முக்கிய காலக்கெடுகளைக் குறியுங்கள் — உ/த பதிவு, NVQ அனுமதிகளுக்குத் திகதிகள் உண்டு" },
    { en: "Ask about allowances and scholarships before assuming you cannot afford a course", ta: "செலவுக்கு முடியாது என நினைக்கும் முன் கொடுப்பனவுகள், புலமைப்பரிசில்கள் பற்றிக் கேளுங்கள்" },
  ],
  printChecklist: { en: "Download checklist (PDF)", ta: "சரிபார்ப்புப் பட்டியலைப் பதிவிறக்க (PDF)" },
  supportTitle: { en: "Support", ta: "ஆதரவு" },
  supportCounsellor: { en: "Find a guidance counsellor in your district", ta: "உங்கள் மாவட்டத்தில் வழிகாட்டல் ஆலோசகரைத் தேடுங்கள்" },
  supportTvet: { en: "Explore TVET options near you", ta: "அருகிலுள்ள தொழிற்கல்வி வாய்ப்புகளை ஆராயுங்கள்" },
} as const;

const STREAMS = [
  {
    stream: { en: "Science", ta: "விஞ்ஞானம்" },
    needs: { en: "Good passes in maths and science", ta: "கணிதம், விஞ்ஞானத்தில் நல்ல சித்திகள்" },
    leads: {
      en: "Medicine, engineering, nursing, IT degrees; science-based NVQ 5–6",
      ta: "மருத்துவம், பொறியியல், தாதியம், IT பட்டங்கள்; விஞ்ஞான NVQ 5–6",
    },
    medium: { en: "Tamil/Sinhala at school; degrees mostly English", ta: "பாடசாலையில் தமிழ்/சிங்களம்; பட்டங்கள் பெரும்பாலும் ஆங்கிலம்" },
  },
  {
    stream: { en: "Arts / Humanities", ta: "கலை / மனிதவியல்" },
    needs: { en: "Six passes including first language", ta: "தாய்மொழி உட்பட ஆறு சித்திகள்" },
    leads: {
      en: "Teaching, law, social sciences, public service; community roles",
      ta: "கற்பித்தல், சட்டம், சமூக விஞ்ஞானம், அரச சேவை; சமூகப் பணிகள்",
    },
    medium: { en: "Tamil medium widely available through degree level", ta: "பட்ட நிலை வரை தமிழ் மொழிமூலம் பரவலாக உண்டு" },
  },
  {
    stream: { en: "Commerce / Technology", ta: "வர்த்தகம் / தொழில்நுட்பம்" },
    needs: { en: "Maths pass usually required", ta: "பொதுவாகக் கணித சித்தி தேவை" },
    leads: {
      en: "Accounting, management, engineering technology degrees; AAT and NVQ routes",
      ta: "கணக்கியல், முகாமைத்துவம், தொழில்நுட்பப் பட்டங்கள்; AAT, NVQ வழிகள்",
    },
    medium: { en: "Mixed; commerce degrees mostly English", ta: "கலப்பு; வர்த்தகப் பட்டங்கள் பெரும்பாலும் ஆங்கிலம்" },
  },
];

export default function AfterOlPage() {
  const { t } = useLang();

  return (
    <div className="container">
      <Breadcrumb items={[{ label: S.stageAfterOl }]} />
      <h1>{t(S.stageAfterOl)}</h1>
      <PageMeta />

      {/* Orientation (spec 8.1) — not a pass/fail narrative */}
      <section aria-labelledby="orient-h">
        <h2 id="orient-h">{t(T.orientTitle)}</h2>
        <p style={{ maxWidth: "75ch" }}>{t(T.orient1)}</p>
        <p style={{ maxWidth: "75ch" }}>
          <strong>{t(T.orient2)}</strong>
        </p>
      </section>

      {/* Three paths as accordions (spec 8.2, mobile note) */}
      <section className="section" aria-labelledby="three-h">
        <h2 id="three-h">{t(T.threeTitle)}</h2>
        <p className="section-sub">{t(T.threeSub)}</p>
        <details className="accordion" open>
          <summary>{t(T.p1Title)}</summary>
          <div className="body">
            <p>{t(T.p1Body)}</p>
            <Link href="/after-al" className="btn secondary small">{t(S.stageAfterAl)} →</Link>
          </div>
        </details>
        <details className="accordion">
          <summary>{t(T.p2Title)}</summary>
          <div className="body">
            <p>{t(T.p2Body)}</p>
            <Link href="/training-finder" className="btn secondary small">{t(S.navTraining)} →</Link>
          </div>
        </details>
        <details className="accordion">
          <summary>{t(T.p3Title)}</summary>
          <div className="body">
            <p>{t(T.p3Body)}</p>
            <Link href="/non-university" className="btn secondary small">{t(S.stageNonUni)} →</Link>
          </div>
        </details>
      </section>

      {/* A/L stream guidance (spec 8.3) with CURRENT label + reform note */}
      <section className="section" aria-labelledby="stream-h">
        <h2 id="stream-h">
          {t(T.streamTitle)} <span className="badge current">{t(S.currentBadge)}</span>
        </h2>
        <p className="section-sub">
          <span className="badge reform">{t(S.reformBadge)}</span> {t(T.streamNote)}
        </p>
        <div className="table-scroll">
          <table className="data">
            <thead>
              <tr>
                <th>{t(T.colStream)}</th>
                <th>{t(T.colNeeds)}</th>
                <th>{t(T.colLeads)}</th>
                <th>{t(T.colMedium)}</th>
              </tr>
            </thead>
            <tbody>
              {STREAMS.map((s, i) => (
                <tr key={i}>
                  <th scope="row">{t(s.stream)}</th>
                  <td>{t(s.needs)}</td>
                  <td>{t(s.leads)}</td>
                  <td>{t(s.medium)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Downloadable checklist (spec 8.4) — printable, black-and-white friendly */}
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

      {/* Support links (spec 8.5) */}
      <section className="section no-print" aria-labelledby="support-h">
        <div className="info-box">
          <h2 id="support-h">{t(T.supportTitle)}</h2>
          <div className="flex-wrap">
            <Link href="/get-help" className="btn secondary small">{t(T.supportCounsellor)}</Link>
            <Link href="/get-help#mentor" className="btn secondary small">{t(S.talkToMentor)}</Link>
            <Link href="/training-finder" className="btn secondary small">{t(T.supportTvet)}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
