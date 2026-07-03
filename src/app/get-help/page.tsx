"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { S } from "@/data/strings";
import { COUNSELLORS, SCHOLARSHIPS, OFFICIAL_CONTACTS } from "@/data/help";
import { DISTRICTS, getDistrict } from "@/data/districts";
import Breadcrumb from "@/components/Breadcrumb";
import PageMeta from "@/components/PageMeta";
import type { L } from "@/lib/types";

const T = {
  intro: {
    en: "Real human support: guidance counsellors, scholarships, official contacts, and ARAM mentoring.",
    ta: "உண்மையான மனித ஆதரவு: வழிகாட்டல் ஆலோசகர்கள், புலமைப்பரிசில்கள், உத்தியோகபூர்வ தொடர்புகள், ஆரம் வழிகாட்டல்.",
  },
  urgentTitle: {
    en: "URGENT SUPPORT — if you are in crisis or need immediate help, contact:",
    ta: "அவசர உதவி — நெருக்கடியில் இருந்தால் அல்லது உடனடி உதவி தேவைப்பட்டால், தொடர்புகொள்ளுங்கள்:",
  },
  urgentMh: {
    en: "National Mental Health Helpline (Directorate of Mental Health): 1926 — free, 24 hours",
    ta: "தேசிய மனநல உதவி இலக்கம் (மனநல இயக்ககம்): 1926 — இலவசம், 24 மணி நேரம்",
  },
  urgentCp: {
    en: "Child protection (NCPA Childline): 1929 — free, 24 hours",
    ta: "சிறுவர் பாதுகாப்பு (NCPA சிறுவர் உதவி): 1929 — இலவசம், 24 மணி நேரம்",
  },
  urgentDistrict: {
    en: "District mental health contacts: ask any government hospital or MOH office",
    ta: "மாவட்ட மனநலத் தொடர்புகள்: எந்த அரச மருத்துவமனை அல்லது MOH அலுவலகத்திலும் கேளுங்கள்",
  },
  counsellorTitle: { en: "Find a guidance counsellor", ta: "வழிகாட்டல் ஆலோசகரைத் தேடுங்கள்" },
  counsellorNone: {
    en: "No entries for this district yet in the prototype. Contact your school or nearest zonal education office.",
    ta: "இந்த மாவட்டத்திற்கான பதிவுகள் முன்மாதிரியில் இன்னும் இல்லை. உங்கள் பாடசாலை அல்லது அருகிலுள்ள வலயக் கல்வி அலுவலகத்தைத் தொடர்புகொள்ளுங்கள்.",
  },
  hours: { en: "Office hours", ta: "அலுவலக நேரம்" },
  languages: { en: "Languages", ta: "மொழிகள்" },
  scholarTitle: { en: "Scholarships and financial support", ta: "புலமைப்பரிசில்களும் நிதி உதவியும்" },
  eligibility: { en: "Eligibility", ta: "தகுதி" },
  covers: { en: "Covers", ta: "பொருந்தும் வழி" },
  deadline: { en: "Deadline pattern", ta: "காலக்கெடு முறை" },
  appLang: { en: "Application language", ta: "விண்ணப்ப மொழி" },
  contactsTitle: { en: "Official contacts and support points", ta: "உத்தியோகபூர்வ தொடர்புகளும் உதவி மையங்களும்" },
  mentorTitle: { en: "Ask ARAM — mentor request", ta: "ஆரம்-இடம் கேளுங்கள் — வழிகாட்டி கோரிக்கை" },
  mentorIntro: {
    en: "Request mentoring support from ARAM. We only ask for what we need to match you safely — you don't need to give your full name at first contact.",
    ta: "ஆரம்-இடமிருந்து வழிகாட்டல் ஆதரவைக் கோருங்கள். உங்களைப் பாதுகாப்பாக இணைக்கத் தேவையானதை மட்டுமே கேட்கிறோம் — முதல் தொடர்பில் முழுப் பெயர் தேவையில்லை.",
  },
  fName: { en: "Preferred name", ta: "விரும்பும் பெயர்" },
  fNameHint: { en: "Not your full legal name — what should we call you?", ta: "முழு சட்டப்பூர்வப் பெயர் அல்ல — உங்களை எப்படி அழைக்க வேண்டும்?" },
  fAge: { en: "Age band", ta: "வயதுப் பிரிவு" },
  fUnder18: { en: "Under 18", ta: "18க்குக் கீழ்" },
  f18to24: { en: "18–24", ta: "18–24" },
  fOver24: { en: "25 or older", ta: "25 அல்லது அதற்கு மேல்" },
  fDistrict: { en: "District and town", ta: "மாவட்டமும் நகரமும்" },
  fStage: { en: "Current stage", ta: "தற்போதைய நிலை" },
  fStageOpts: [
    { en: "O/L", ta: "சா/த" },
    { en: "A/L", ta: "உ/த" },
    { en: "Left school", ta: "பாடசாலை விட்டேன்" },
    { en: "TVET", ta: "தொழிற்கல்வி" },
    { en: "University", ta: "பல்கலைக்கழகம்" },
    { en: "Working", ta: "வேலையில்" },
    { en: "Seeking work", ta: "வேலை தேடுகிறேன்" },
  ],
  fLanguage: { en: "Preferred language", ta: "விரும்பும் மொழி" },
  fContactMethod: { en: "Contact method", ta: "தொடர்பு முறை" },
  fWhatsapp: { en: "WhatsApp", ta: "WhatsApp" },
  fPhone: { en: "Phone", ta: "தொலைபேசி" },
  fSchool: { en: "Through my school", ta: "என் பாடசாலை வழியாக" },
  fGuardian: { en: "Parent or guardian contact (required if under 18)", ta: "பெற்றோர் அல்லது பாதுகாவலர் தொடர்பு (18க்குக் கீழ் என்றால் அவசியம்)" },
  fInterests: { en: "Career interests", ta: "தொழில் ஆர்வங்கள்" },
  fHelpKind: { en: "What kind of help?", ta: "என்ன வகையான உதவி?" },
  fHelpOpts: [
    { en: "Subjects", ta: "பாடங்கள்" },
    { en: "Pathways", ta: "பாதைகள்" },
    { en: "Training", ta: "பயிற்சி" },
    { en: "CV", ta: "சுயவிவரம் (CV)" },
    { en: "Interview", ta: "நேர்முகத் தேர்வு" },
    { en: "Wellbeing", ta: "நல்வாழ்வு" },
    { en: "Urgent", ta: "அவசரம்" },
  ],
  fConsentPrivacy: { en: "I have read the privacy notice", ta: "தனியுரிமை அறிவிப்பை வாசித்தேன்" },
  fConsentContact: { en: "ARAM may contact me using the method above", ta: "மேலுள்ள முறையில் ஆரம் என்னைத் தொடர்புகொள்ளலாம்" },
  fConsentUpdates: { en: "Send me optional updates (you can say no)", ta: "விருப்பத் தகவல்களை அனுப்பலாம் (மறுக்கலாம்)" },
  fSubmit: { en: "Send request", ta: "கோரிக்கையை அனுப்பு" },
  urgentRedirect: {
    en: "You selected Urgent. Please use the urgent support contacts at the top of this page right now — do not wait for mentor matching.",
    ta: "அவசரம் என்பதைத் தேர்ந்தெடுத்தீர்கள். இப்போதே இப்பக்கத்தின் மேலேயுள்ள அவசர உதவித் தொடர்புகளைப் பயன்படுத்துங்கள் — வழிகாட்டி இணைப்புக்காகக் காத்திருக்க வேண்டாம்.",
  },
  submitted: {
    en: "Thank you. In the live site this request would go to the ARAM coordination team; under-18 requests require a parent or guardian contact before any mentor is assigned. (Prototype: nothing was sent.)",
    ta: "நன்றி. நேரடித் தளத்தில் இக்கோரிக்கை ஆரம் ஒருங்கிணைப்புக் குழுவுக்குச் செல்லும்; 18க்குக் கீழானவர்களுக்கு வழிகாட்டி நியமிக்கும் முன் பெற்றோர்/பாதுகாவலர் தொடர்பு அவசியம். (முன்மாதிரி: எதுவும் அனுப்பப்படவில்லை.)",
  },
  guardianRequired: {
    en: "Parent or guardian contact is required for under-18 requests.",
    ta: "18க்குக் கீழான கோரிக்கைகளுக்குப் பெற்றோர்/பாதுகாவலர் தொடர்பு அவசியம்.",
  },
} as const;

export default function GetHelpPage() {
  const { t } = useLang();
  const [district, setDistrict] = useState("");
  const [age, setAge] = useState("");
  const [helpKind, setHelpKind] = useState<string[]>([]);
  const [guardian, setGuardian] = useState("");
  const [formState, setFormState] = useState<"editing" | "error-guardian" | "sent">("editing");

  const counsellors = district ? COUNSELLORS.filter((c) => c.district === district) : COUNSELLORS;
  const urgentSelected = helpKind.includes("Urgent");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Safeguarding rule (spec 15.5): under-18 requires guardian contact.
    if (age === "under18" && !guardian.trim()) {
      setFormState("error-guardian");
      return;
    }
    setFormState("sent");
  };

  return (
    <div className="container">
      <Breadcrumb items={[{ label: S.navHelp }]} />
      <h1>{t(S.navHelp)}</h1>
      <PageMeta />
      <p style={{ maxWidth: "70ch" }}>{t(T.intro)}</p>

      {/* Urgent support block — top of page, never below the fold (spec 15.1) */}
      <div className="urgent-block" id="urgent">
        <h2>⚠ {t(T.urgentTitle)}</h2>
        <ul style={{ margin: 0, fontSize: "1.05rem" }}>
          <li><strong>{t(T.urgentMh)}</strong></li>
          <li><strong>{t(T.urgentCp)}</strong></li>
          <li>{t(T.urgentDistrict)}</li>
        </ul>
      </div>

      {/* Find a guidance counsellor (spec 15.2) */}
      <section className="section" aria-labelledby="couns-h">
        <h2 id="couns-h">{t(T.counsellorTitle)}</h2>
        <div className="form-field" style={{ maxWidth: "22rem" }}>
          <label htmlFor="help-district">{t(S.filterDistrict)}</label>
          <select id="help-district" value={district} onChange={(e) => setDistrict(e.target.value)}>
            <option value="">{t(S.allDistricts)}</option>
            {DISTRICTS.map((d) => (
              <option key={d.id} value={d.id}>{t(d.name)}</option>
            ))}
          </select>
        </div>
        {counsellors.length === 0 ? (
          <div className="info-box gold">
            <p style={{ margin: 0 }}>{t(T.counsellorNone)}</p>
          </div>
        ) : (
          <div className="card-grid cols-2">
            {counsellors.map((c, i) => {
              const d = getDistrict(c.district);
              return (
                <div key={i} className="card">
                  <h3 style={{ marginBottom: "0.2rem" }}>{t(c.org)}</h3>
                  <p className="small" style={{ margin: "0 0 0.3rem" }}>
                    {d ? t(d.name) : c.district} · {c.contact}
                  </p>
                  <p className="small" style={{ margin: "0 0 0.3rem" }}>
                    {t(T.languages)}: {t(c.languages)} · {t(T.hours)}: {t(c.hours)}
                  </p>
                  <p className="small muted" style={{ margin: 0 }}>
                    {c.source} · {t(S.lastVerified)}: {t(c.verified)}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Scholarships (spec 15.3) */}
      <section className="section" aria-labelledby="schol-h">
        <h2 id="schol-h">{t(T.scholarTitle)}</h2>
        <div className="card-grid cols-3">
          {SCHOLARSHIPS.map((s, i) => (
            <div key={i} className="card">
              <h3 style={{ marginBottom: "0.2rem" }}>{t(s.name)}</h3>
              <p className="small muted" style={{ margin: "0 0 0.4rem" }}>{t(s.provider)}</p>
              <p className="small" style={{ margin: "0 0 0.3rem" }}>
                <strong>{t(T.eligibility)}:</strong> {t(s.eligibility)}
              </p>
              <p className="small" style={{ margin: "0 0 0.3rem" }}>
                <strong>{t(T.covers)}:</strong> {t(s.covers)} · <strong>{t(T.deadline)}:</strong> {t(s.deadline)}
              </p>
              <p className="small" style={{ margin: "0 0 0.3rem" }}>
                <strong>{t(T.appLang)}:</strong> {t(s.applicationLanguage)}
              </p>
              <p className="small muted" style={{ margin: 0 }}>
                {s.source} · {t(S.lastVerified)}: {t(s.verified)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Official contacts (spec 15.4) */}
      <section className="section" aria-labelledby="contacts-h">
        <h2 id="contacts-h">{t(T.contactsTitle)}</h2>
        <div className="card-grid cols-2">
          {OFFICIAL_CONTACTS.map((c, i) => (
            <div key={i} className="card">
              <h3 style={{ marginBottom: "0.2rem" }}>{t(c.name)}</h3>
              <p className="small" style={{ margin: "0 0 0.3rem" }}>{t(c.role)}</p>
              <p className="small" style={{ margin: "0 0 0.3rem" }}>
                {c.contact} · {t(c.districts)}
              </p>
              <p className="small muted" style={{ margin: 0 }}>
                {t(T.languages)}: {t(c.languages)} · {t(S.lastVerified)}: {t(c.verified)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mentor intake (spec 15.5) */}
      <section className="section" aria-labelledby="mentor-h" id="mentor">
        <h2 id="mentor-h">{t(T.mentorTitle)}</h2>
        <p style={{ maxWidth: "70ch" }}>{t(T.mentorIntro)}</p>

        {formState === "sent" ? (
          <div className="info-box">
            <p style={{ margin: 0 }}>{t(T.submitted)}</p>
          </div>
        ) : (
          <form onSubmit={submit} style={{ maxWidth: "36rem" }}>
            <div className="form-field">
              <label htmlFor="m-name">{t(T.fName)} *</label>
              <span className="hint">{t(T.fNameHint)}</span>
              <input id="m-name" required maxLength={60} />
            </div>

            <div className="form-field">
              <label htmlFor="m-age">{t(T.fAge)} *</label>
              <select id="m-age" required value={age} onChange={(e) => setAge(e.target.value)}>
                <option value="">—</option>
                <option value="under18">{t(T.fUnder18)}</option>
                <option value="18-24">{t(T.f18to24)}</option>
                <option value="25plus">{t(T.fOver24)}</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="m-district">{t(T.fDistrict)} *</label>
              <input id="m-district" required maxLength={80} />
            </div>

            <div className="form-field">
              <label htmlFor="m-stage">{t(T.fStage)} *</label>
              <select id="m-stage" required>
                <option value="">—</option>
                {T.fStageOpts.map((o, i) => (
                  <option key={i} value={o.en}>{t(o)}</option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="m-lang">{t(T.fLanguage)} *</label>
              <select id="m-lang" required>
                <option value="">—</option>
                <option>{t({ en: "Tamil", ta: "தமிழ்" })}</option>
                <option>{t({ en: "English", ta: "ஆங்கிலம்" })}</option>
                <option>{t({ en: "Sinhala", ta: "சிங்களம்" })}</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="m-contact">{t(T.fContactMethod)} *</label>
              <select id="m-contact" required>
                <option value="">—</option>
                <option>{t(T.fWhatsapp)}</option>
                <option>{t(T.fPhone)}</option>
                <option>{t(T.fSchool)}</option>
              </select>
            </div>

            {age === "under18" && (
              <div className="form-field">
                <label htmlFor="m-guardian">{t(T.fGuardian)} *</label>
                <input
                  id="m-guardian"
                  required
                  value={guardian}
                  onChange={(e) => setGuardian(e.target.value)}
                  maxLength={100}
                />
              </div>
            )}

            <div className="form-field">
              <label htmlFor="m-interests">{t(T.fInterests)}</label>
              <textarea id="m-interests" rows={3} maxLength={500} />
            </div>

            <fieldset style={{ border: "none", padding: 0, margin: "0 0 1rem" }}>
              <legend className="label" style={{ fontWeight: "bold", marginBottom: "0.3rem" }}>
                {t(T.fHelpKind)} *
              </legend>
              {T.fHelpOpts.map((o, i) => (
                <div key={i} className="check-row">
                  <input
                    type="checkbox"
                    id={`m-help-${i}`}
                    checked={helpKind.includes(o.en)}
                    onChange={() =>
                      setHelpKind((k) =>
                        k.includes(o.en) ? k.filter((x) => x !== o.en) : [...k, o.en]
                      )
                    }
                  />
                  <label htmlFor={`m-help-${i}`}>{t(o)}</label>
                </div>
              ))}
            </fieldset>

            {/* Urgent selections route to urgent support, not the mentor queue (spec 15.5) */}
            {urgentSelected && (
              <div className="urgent-block" role="alert">
                <p style={{ margin: 0 }}>
                  <strong>{t(T.urgentRedirect)}</strong>{" "}
                  <a href="#urgent">⚠ {t(S.helpUrgent)}</a>
                </p>
              </div>
            )}

            <div className="check-row">
              <input type="checkbox" id="m-c1" required />
              <label htmlFor="m-c1">{t(T.fConsentPrivacy)} *</label>
            </div>
            <div className="check-row">
              <input type="checkbox" id="m-c2" required />
              <label htmlFor="m-c2">{t(T.fConsentContact)} *</label>
            </div>
            <div className="check-row" style={{ marginBottom: "1rem" }}>
              <input type="checkbox" id="m-c3" />
              <label htmlFor="m-c3">{t(T.fConsentUpdates)}</label>
            </div>

            {formState === "error-guardian" && (
              <div className="info-box gold" role="alert">
                <p style={{ margin: 0 }}>{t(T.guardianRequired)}</p>
              </div>
            )}

            <button type="submit" className="btn">{t(T.fSubmit)}</button>
          </form>
        )}
        <p className="small muted mt-1">{t(S.sampleDataNote)}</p>
      </section>
    </div>
  );
}
