"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { S } from "@/data/strings";
import Breadcrumb from "@/components/Breadcrumb";
import PageMeta from "@/components/PageMeta";

const T = {
  missionTitle: { en: "What is ARAM?", ta: "ஆரம் என்றால் என்ன?" },
  mission1: {
    en: "ARAM is a volunteer organisation connected to the Sri Lankan diaspora. We work with students in Northern and Eastern Sri Lanka who want clear information about school, training, and work — and mentors who can help them think it through.",
    ta: "ஆரம் இலங்கைப் புலம்பெயர் சமூகத்துடன் இணைந்த தன்னார்வ அமைப்பு. கல்வி, பயிற்சி, வேலை பற்றித் தெளிவான தகவல் விரும்பும் வட, கிழக்கு இலங்கை மாணவர்களுடனும், அவர்களுக்கு சிந்திக்க உதவும் வழிகாட்டிகளுடனும் செயல்படுகிறோம்.",
  },
  mission2: {
    en: "This site is free, has no ads, and does not sell anything. It exists so that every student can see their real options — whichever route they choose.",
    ta: "இத்தளம் இலவசம்; விளம்பரங்கள் இல்லை; எதையும் விற்பதில்லை. ஒவ்வொரு மாணவரும் — எந்த வழியைத் தேர்ந்தாலும் — தமது உண்மையான வாய்ப்புகளைக் காண்பதற்காகவே இது உள்ளது.",
  },
  howTitle: { en: "How this site works", ta: "இத்தளம் எப்படி இயங்குகிறது" },
  how1: {
    en: "Content is written from official sources, checked by our team, and reviewed on a schedule. Every page shows a last-verified date and a next-review date below its title. Demand notes carry an explicit expiry date and are never published without one.",
    ta: "உள்ளடக்கம் உத்தியோகபூர்வ மூலங்களிலிருந்து எழுதப்பட்டு, எங்கள் குழுவால் சரிபார்க்கப்பட்டு, கால அட்டவணைப்படி மீளாய்வு செய்யப்படும். ஒவ்வொரு பக்கமும் தலைப்பின் கீழ் கடைசிச் சரிபார்ப்பு, அடுத்த மீளாய்வுத் திகதிகளைக் காட்டும். தேவை குறிப்புகள் காலாவதி திகதியுடன் மட்டுமே வெளியிடப்படும்.",
  },
  how2: {
    en: "Because Sri Lanka's education system is being reformed, pathway stages are labelled CURRENT (rules that apply now) or REFORM (announced changes not yet in effect). If you are applying now, follow CURRENT guidance.",
    ta: "இலங்கையின் கல்வி முறை சீர்திருத்தத்தில் இருப்பதால், பாதை நிலைகள் தற்போதைய (இப்போது பொருந்தும் விதிகள்) அல்லது சீர்திருத்தம் (அறிவிக்கப்பட்ட, இன்னும் நடைமுறைக்கு வராத மாற்றங்கள்) எனக் குறியிடப்படும். இப்போது விண்ணப்பிக்கிறீர்கள் என்றால் தற்போதைய வழிகாட்டலைப் பின்பற்றுங்கள்.",
  },
  sourcesTitle: { en: "Source policy", ta: "மூலக் கொள்கை" },
  sources1: {
    en: "Our source hierarchy: official government handbooks and statistics first (UGC handbook, TVEC manuals, DCS Labour Force Survey, MOE circulars); then verified provider information; then field-verified contacts. Older foundational documents are treated as contextual baselines, not current guidance.",
    ta: "எங்கள் மூல வரிசை: முதலில் உத்தியோகபூர்வ அரச கையேடுகளும் புள்ளிவிவரங்களும் (UGC கையேடு, TVEC கையேடுகள், DCS தொழிலாளர் ஆய்வு, கல்வி அமைச்சு சுற்றறிக்கைகள்); பின்னர் சரிபார்க்கப்பட்ட நிறுவனத் தகவல்; பின்னர் களத்தில் சரிபார்க்கப்பட்ட தொடர்புகள். பழைய அடிப்படை ஆவணங்கள் சூழல் குறிப்புகளாகவே கருதப்படும்; தற்போதைய வழிகாட்டலாக அல்ல.",
  },
  privacyTitle: { en: "Privacy notice", ta: "தனியுரிமை அறிவிப்பு" },
  privacy1: {
    en: "We collect only what we need to help you (triage-relevant fields on the mentor form — no unnecessary personal data). Under-18 data requires parent/guardian consent. Quiz results are advisory and never stored against a profile without explicit consent. Processing follows the Sri Lanka Personal Data Protection Act; a UK GDPR assessment applies where ARAM operates as a UK entity.",
    ta: "உங்களுக்கு உதவத் தேவையானதை மட்டுமே சேகரிக்கிறோம் (வழிகாட்டிப் படிவத்தில் தேவையான புலங்கள் மட்டும் — தேவையற்ற தனிப்பட்ட தரவு இல்லை). 18க்குக் கீழான தரவுக்குப் பெற்றோர்/பாதுகாவலர் ஒப்புதல் அவசியம். வினாடி வினா முடிவுகள் ஆலோசனை மட்டுமே; வெளிப்படையான ஒப்புதல் இன்றி எந்தச் சுயவிவரத்திலும் சேமிக்கப்படாது. தரவு செயலாக்கம் இலங்கை தனிநபர் தரவு பாதுகாப்புச் சட்டத்தைப் பின்பற்றும்; ஆரம் UK அமைப்பாகச் செயல்படும் இடத்தில் UK GDPR மதிப்பீடும் பொருந்தும்.",
  },
  safeTitle: { en: "Safeguarding", ta: "பாதுகாப்பு" },
  safe1: {
    en: "Mentors are 18+, identity-verified, and trained before any student contact. There is no private 1:1 messaging with minors outside logged, coordinator-supervised channels. Students who indicate urgent wellbeing needs are routed to urgent support immediately, not queued for mentoring.",
    ta: "வழிகாட்டிகள் 18+, அடையாளம் சரிபார்க்கப்பட்டவர்கள், மாணவர் தொடர்புக்கு முன் பயிற்சி பெற்றவர்கள். பதிவு செய்யப்பட்ட, ஒருங்கிணைப்பாளர் மேற்பார்வையிலான வழிகள் தவிர சிறார்களுடன் தனிப்பட்ட 1:1 செய்தி பரிமாற்றம் இல்லை. அவசர நல்வாழ்வுத் தேவையைக் குறிப்பிடும் மாணவர்கள் உடனடியாக அவசர உதவிக்கு அனுப்பப்படுவர்; வழிகாட்டல் வரிசையில் காத்திருக்க வைக்கப்படமாட்டார்கள்.",
  },
  partnersTitle: { en: "Partners and acknowledgements", ta: "பங்காளர்களும் நன்றியுரைகளும்" },
  contactTitle: { en: "Contact and feedback", ta: "தொடர்பும் கருத்துகளும்" },
  contactIntro: {
    en: "For teachers, parents, and organisations: report outdated content, suggest a practitioner for a video interview, or enquire about partnership. (Students: please use Get Help instead.)",
    ta: "ஆசிரியர்கள், பெற்றோர், அமைப்புகளுக்கு: காலாவதியான உள்ளடக்கத்தைத் தெரிவிக்க, காணொளி நேர்காணலுக்கு ஒருவரைப் பரிந்துரைக்க, அல்லது கூட்டாண்மை பற்றி விசாரிக்க. (மாணவர்கள்: உதவி பெற பக்கத்தைப் பயன்படுத்துங்கள்.)",
  },
  fTopic: { en: "Topic", ta: "தலைப்பு" },
  fTopics: [
    { en: "Outdated content", ta: "காலாவதியான உள்ளடக்கம்" },
    { en: "Suggest a video interview", ta: "காணொளி நேர்காணல் பரிந்துரை" },
    { en: "Partnership enquiry", ta: "கூட்டாண்மை விசாரணை" },
    { en: "Other feedback", ta: "பிற கருத்து" },
  ],
  fMessage: { en: "Message", ta: "செய்தி" },
  fEmail: { en: "Email or phone (for reply)", ta: "மின்னஞ்சல் அல்லது தொலைபேசி (பதிலுக்கு)" },
  fSend: { en: "Send", ta: "அனுப்பு" },
  sent: {
    en: "Thank you. In the live site this would reach the ARAM content team. (Prototype: nothing was sent.)",
    ta: "நன்றி. நேரடித் தளத்தில் இது ஆரம் உள்ளடக்கக் குழுவை அடையும். (முன்மாதிரி: எதுவும் அனுப்பப்படவில்லை.)",
  },
} as const;

const PARTNERS: { name: string; role: { en: string; ta: string } }[] = [
  { name: "Tea Leaf Trust", role: { en: "Mentor sourcing and youth programme experience", ta: "வழிகாட்டி இணைப்பு, இளையோர் திட்ட அனுபவம்" } },
  { name: "Yarl IT Hub", role: { en: "ICT training pathways and smart classroom access", ta: "ICT பயிற்சிப் பாதைகள், ஸ்மார்ட் வகுப்பறை அணுக்கம்" } },
  { name: "Vanni Hope", role: { en: "Community outreach in Vanni districts", ta: "வன்னி மாவட்டங்களில் சமூக அணுகல்" } },
  { name: "DreamSpace Academy", role: { en: "Co-design and maker education in the East", ta: "கிழக்கில் இணை வடிவமைப்பு, உருவாக்கக் கல்வி" } },
];

export default function AboutPage() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  return (
    <div className="container">
      <Breadcrumb items={[{ label: S.footerAbout }]} />
      <h1>{t(S.footerAbout)}</h1>
      <PageMeta />

      {/* Mission (spec 16.1) — readable by a secondary school student */}
      <section aria-labelledby="mission-h">
        <h2 id="mission-h">{t(T.missionTitle)}</h2>
        <p style={{ maxWidth: "75ch" }}>{t(T.mission1)}</p>
        <p style={{ maxWidth: "75ch" }}>{t(T.mission2)}</p>
      </section>

      {/* How this site works (spec 16.2) */}
      <section className="section" aria-labelledby="how-h">
        <h2 id="how-h">{t(T.howTitle)}</h2>
        <p style={{ maxWidth: "75ch" }}>{t(T.how1)}</p>
        <p style={{ maxWidth: "75ch" }}>
          <span className="badge current">{t(S.currentBadge)}</span>{" "}
          <span className="badge reform">{t(S.reformBadge)}</span> — {t(T.how2)}
        </p>
      </section>

      {/* Source policy (spec 16.3) */}
      <section className="section" aria-labelledby="sources-h" id="sources">
        <h2 id="sources-h">{t(T.sourcesTitle)}</h2>
        <p style={{ maxWidth: "75ch" }}>{t(T.sources1)}</p>
      </section>

      {/* Privacy + safeguarding summaries (spec 17.3, footer links) */}
      <section className="section" aria-labelledby="privacy-h" id="privacy">
        <h2 id="privacy-h">{t(T.privacyTitle)}</h2>
        <p style={{ maxWidth: "75ch" }}>{t(T.privacy1)}</p>
      </section>
      <section className="section" aria-labelledby="safe-h" id="safeguarding">
        <h2 id="safe-h">{t(T.safeTitle)}</h2>
        <p style={{ maxWidth: "75ch" }}>{t(T.safe1)}</p>
      </section>

      {/* Partners (spec 16.4) — role shown, not just a logo */}
      <section className="section" aria-labelledby="partners-h">
        <h2 id="partners-h">{t(T.partnersTitle)}</h2>
        <div className="card-grid cols-2">
          {PARTNERS.map((p) => (
            <div key={p.name} className="card">
              <h3 style={{ marginBottom: "0.2rem" }}>{p.name}</h3>
              <p className="small" style={{ margin: 0 }}>{t(p.role)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact and feedback (spec 16.5) — not student-facing */}
      <section className="section" aria-labelledby="contact-h" id="contact">
        <h2 id="contact-h">{t(T.contactTitle)}</h2>
        <p style={{ maxWidth: "70ch" }}>{t(T.contactIntro)}</p>
        {sent ? (
          <div className="info-box">
            <p style={{ margin: 0 }}>{t(T.sent)}</p>
          </div>
        ) : (
          <form
            style={{ maxWidth: "36rem" }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="form-field">
              <label htmlFor="fb-topic">{t(T.fTopic)} *</label>
              <select id="fb-topic" required>
                <option value="">—</option>
                {T.fTopics.map((o, i) => (
                  <option key={i} value={o.en}>{t(o)}</option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="fb-msg">{t(T.fMessage)} *</label>
              <textarea id="fb-msg" rows={4} required maxLength={1000} />
            </div>
            <div className="form-field">
              <label htmlFor="fb-email">{t(T.fEmail)}</label>
              <input id="fb-email" maxLength={100} />
            </div>
            <button type="submit" className="btn">{t(T.fSend)}</button>
          </form>
        )}
      </section>
    </div>
  );
}
