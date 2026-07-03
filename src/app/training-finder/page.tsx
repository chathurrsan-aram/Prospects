"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useLang } from "@/lib/i18n";
import { useSavedList, SHORTLIST_KEY } from "@/lib/saved";
import { S, FEE_LABELS, WORK_LANGUAGE_LABELS } from "@/data/strings";
import { PROVIDERS, PROVIDER_TYPE_LABELS } from "@/data/providers";
import { DISTRICTS, getDistrict } from "@/data/districts";
import { getJob } from "@/data/jobs";
import { getSector, SECTORS } from "@/data/sectors";
import Breadcrumb from "@/components/Breadcrumb";
import PageMeta from "@/components/PageMeta";
import type { L, Provider, ProviderCourse, ProviderType, SectorId } from "@/lib/types";

const T = {
  intro: {
    en: "Filter by district, field, level, medium, and cost to build a shortlist of providers to contact. Select your district first for useful results.",
    ta: "மாவட்டம், துறை, நிலை, மொழிமூலம், செலவு அடிப்படையில் வடிகட்டி, தொடர்புகொள்ள வேண்டிய நிறுவனங்களின் பட்டியலை உருவாக்குங்கள். பயனுள்ள முடிவுகளுக்கு முதலில் உங்கள் மாவட்டத்தைத் தேர்ந்தெடுங்கள்.",
  },
  field: { en: "Field of study", ta: "கற்கை துறை" },
  nvqLevel: { en: "NVQ level", ta: "NVQ நிலை" },
  nonNvq: { en: "Non-NVQ certificate", ta: "NVQ அல்லாத சான்றிதழ்" },
  providerType: { en: "Provider type", ta: "நிறுவன வகை" },
  medium: { en: "Medium of instruction", ta: "கற்பித்தல் மொழி" },
  bilingual: { en: "Bilingual", ta: "இருமொழி" },
  fee: { en: "Fee range", ta: "கட்டண வரம்பு" },
  hostel: { en: "Hostel available", ta: "விடுதி வசதி" },
  yes: { en: "Yes", ta: "ஆம்" },
  no: { en: "No", ta: "இல்லை" },
  unknown: { en: "Unknown", ta: "தெரியவில்லை" },
  applicationMode: { en: "Application mode", ta: "விண்ணப்ப முறை" },
  walkin: { en: "Walk-in", ta: "நேரில் செல்லல்" },
  online: { en: "Online (PC required)", ta: "இணையம் (கணினி தேவை)" },
  schoolReferral: { en: "School referral", ta: "பாடசாலை பரிந்துரை" },
  pcNote: { en: "laptop/PC required", ta: "மடிக்கணினி/கணினி தேவை" },
  zeroHint: {
    en: "No providers match. Try a neighbouring district or remove the medium filter.",
    ta: "பொருந்தும் நிறுவனங்கள் இல்லை. அயல் மாவட்டத்தை முயற்சிக்கவும் அல்லது மொழிமூல வடிப்பானை நீக்கவும்.",
  },
  saveShortlist: { en: "Save to shortlist", ta: "பட்டியலில் சேமி" },
  inShortlist: { en: "In shortlist", ta: "பட்டியலில் உள்ளது" },
  shortlist: { en: "Your shortlist", ta: "உங்கள் பட்டியல்" },
  shortlistMax: {
    en: "You can shortlist up to five providers.",
    ta: "அதிகபட்சம் ஐந்து நிறுவனங்களைப் பட்டியலிடலாம்.",
  },
  compareShortlist: { en: "Compare shortlist", ta: "பட்டியலை ஒப்பிடு" },
  downloadShortlist: { en: "Download shortlist as PDF", ta: "பட்டியலை PDF ஆகப் பதிவிறக்க" },
  enableMap: { en: "Enable map", ta: "வரைபடத்தை இயக்கு" },
  mapNote: {
    en: "Map view is off by default to save data.",
    ta: "தரவைச் சேமிக்க வரைபடம் இயல்பாக முடக்கப்பட்டுள்ளது.",
  },
  mapPlaceholder: {
    en: "Map placeholder — provider pins will render here once a low-data map source is confirmed.",
    ta: "வரைபட இடம் — குறைந்த தரவு வரைபட மூலம் உறுதியானதும் நிறுவனக் குறியீடுகள் இங்கே தோன்றும்.",
  },
  courses: { en: "Courses", ta: "பாடநெறிகள்" },
  contact: { en: "Contact", ta: "தொடர்பு" },
  town: { en: "Town", ta: "நகரம்" },
} satisfies Record<string, L>;

const PROVIDER_TYPES: ProviderType[] = ["VTA", "DTET", "NAITA", "UoVT", "OUSL", "NCOE", "health-institute", "private"];

/** Fields available = sectors of the jobs each course leads to. */
function courseFields(course: ProviderCourse): SectorId[] {
  return [...new Set(course.jobIds.map((id) => getJob(id)?.sector).filter((s): s is SectorId => !!s))];
}

interface Filters {
  district: string;
  fields: string[];
  nvq: string; // "", "1".."6", "cert"
  types: string[];
  medium: string; // "", tamil/sinhala/english/bilingual
  fee: string;
  hostel: string;
  mode: string;
}

const EMPTY: Filters = { district: "", fields: [], nvq: "", types: [], medium: "", fee: "", hostel: "", mode: "" };

function courseMatches(c: ProviderCourse, f: Filters): boolean {
  if (f.fields.length && !courseFields(c).some((s) => f.fields.includes(s))) return false;
  if (f.nvq === "cert" && c.nvqLevel !== null) return false;
  if (f.nvq && f.nvq !== "cert" && c.nvqLevel !== Number(f.nvq)) return false;
  if (f.medium === "bilingual" && c.medium.length < 2) return false;
  if (f.medium && f.medium !== "bilingual" && !c.medium.includes(f.medium as never)) return false;
  if (f.fee && c.fee !== f.fee) return false;
  return true;
}

function providerMatches(p: Provider, f: Filters): boolean {
  if (f.district && p.district !== f.district) return false;
  if (f.types.length && !f.types.includes(p.type)) return false;
  if (f.hostel && p.hostel !== f.hostel) return false;
  if (f.mode && !p.applicationMode.includes(f.mode as never)) return false;
  return p.courses.some((c) => courseMatches(c, f));
}

function FinderContent() {
  const { t } = useLang();
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<Filters>(EMPTY);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mapOn, setMapOn] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);
  const { ids: shortlist, toggle, isSaved } = useSavedList(SHORTLIST_KEY, 5);

  useEffect(() => {
    const d = searchParams.get("district");
    if (d) setFilters((f) => ({ ...f, district: d }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const results = useMemo(() => PROVIDERS.filter((p) => providerMatches(p, filters)), [filters]);
  const shortlisted = PROVIDERS.filter((p) => shortlist.includes(p.id));
  const anyActive = JSON.stringify(filters) !== JSON.stringify(EMPTY);

  const fieldOptions = useMemo(() => {
    const present = new Set(PROVIDERS.flatMap((p) => p.courses.flatMap(courseFields)));
    return SECTORS.filter((s) => present.has(s.id));
  }, []);

  const modeLabel = (m: string): L =>
    m === "walkin" ? T.walkin : m === "online" ? T.online : T.schoolReferral;

  return (
    <div className="container">
      <Breadcrumb items={[{ label: S.navTraining }]} />
      <h1>{t(S.navTraining)}</h1>
      <PageMeta />
      <p style={{ maxWidth: "70ch" }}>{t(T.intro)}</p>

      <div className="filter-bar">
        <button
          className="btn secondary small filter-toggle"
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          {t(S.filters)} {drawerOpen ? "▲" : "▼"}
        </button>
        <div className={`filter-groups ${drawerOpen ? "open" : ""}`}>
          <div className="filter-group">
            <label className="label" htmlFor="tf-district">{t(S.filterDistrict)}</label>
            <select
              id="tf-district"
              value={filters.district}
              onChange={(e) => setFilters((f) => ({ ...f, district: e.target.value }))}
            >
              <option value="">{t(S.allDistricts)}</option>
              {DISTRICTS.map((d) => (
                <option key={d.id} value={d.id}>{t(d.name)}</option>
              ))}
            </select>

            <label className="label mt-1" htmlFor="tf-nvq">{t(T.nvqLevel)}</label>
            <select
              id="tf-nvq"
              value={filters.nvq}
              onChange={(e) => setFilters((f) => ({ ...f, nvq: e.target.value }))}
            >
              <option value="">{t(S.any)}</option>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>NVQ {n}</option>
              ))}
              <option value="cert">{t(T.nonNvq)}</option>
            </select>

            <label className="label mt-1" htmlFor="tf-medium">{t(T.medium)}</label>
            <select
              id="tf-medium"
              value={filters.medium}
              onChange={(e) => setFilters((f) => ({ ...f, medium: e.target.value }))}
            >
              <option value="">{t(S.any)}</option>
              <option value="tamil">{t(WORK_LANGUAGE_LABELS.tamil)}</option>
              <option value="sinhala">{t(WORK_LANGUAGE_LABELS.sinhala)}</option>
              <option value="english">{t(WORK_LANGUAGE_LABELS.english)}</option>
              <option value="bilingual">{t(T.bilingual)}</option>
            </select>
          </div>

          <div className="filter-group">
            <fieldset>
              <legend>{t(T.field)}</legend>
              {fieldOptions.map((s) => (
                <div key={s.id} className="check-row">
                  <input
                    type="checkbox"
                    id={`tf-field-${s.id}`}
                    checked={filters.fields.includes(s.id)}
                    onChange={() =>
                      setFilters((f) => ({
                        ...f,
                        fields: f.fields.includes(s.id)
                          ? f.fields.filter((x) => x !== s.id)
                          : [...f.fields, s.id],
                      }))
                    }
                  />
                  <label htmlFor={`tf-field-${s.id}`}>{t(s.name)}</label>
                </div>
              ))}
            </fieldset>
          </div>

          <div className="filter-group">
            <fieldset>
              <legend>{t(T.providerType)}</legend>
              {PROVIDER_TYPES.map((pt) => (
                <div key={pt} className="check-row">
                  <input
                    type="checkbox"
                    id={`tf-type-${pt}`}
                    checked={filters.types.includes(pt)}
                    onChange={() =>
                      setFilters((f) => ({
                        ...f,
                        types: f.types.includes(pt)
                          ? f.types.filter((x) => x !== pt)
                          : [...f.types, pt],
                      }))
                    }
                  />
                  <label htmlFor={`tf-type-${pt}`}>{t(PROVIDER_TYPE_LABELS[pt])}</label>
                </div>
              ))}
            </fieldset>
          </div>

          <div className="filter-group">
            <label className="label" htmlFor="tf-fee">{t(T.fee)}</label>
            <select
              id="tf-fee"
              value={filters.fee}
              onChange={(e) => setFilters((f) => ({ ...f, fee: e.target.value }))}
            >
              <option value="">{t(S.any)}</option>
              {(["free", "low", "moderate", "high"] as const).map((fr) => (
                <option key={fr} value={fr}>{t(FEE_LABELS[fr])}</option>
              ))}
            </select>

            <label className="label mt-1" htmlFor="tf-hostel">{t(T.hostel)}</label>
            <select
              id="tf-hostel"
              value={filters.hostel}
              onChange={(e) => setFilters((f) => ({ ...f, hostel: e.target.value }))}
            >
              <option value="">{t(S.any)}</option>
              <option value="yes">{t(T.yes)}</option>
              <option value="no">{t(T.no)}</option>
              <option value="unknown">{t(T.unknown)}</option>
            </select>

            <label className="label mt-1" htmlFor="tf-mode">{t(T.applicationMode)}</label>
            <select
              id="tf-mode"
              value={filters.mode}
              onChange={(e) => setFilters((f) => ({ ...f, mode: e.target.value }))}
            >
              <option value="">{t(S.any)}</option>
              <option value="walkin">{t(T.walkin)}</option>
              <option value="online">{t(T.online)}</option>
              <option value="school-referral">{t(T.schoolReferral)}</option>
            </select>
          </div>
        </div>
        {anyActive && (
          <p style={{ margin: "0.8rem 0 0" }}>
            <button className="btn secondary small" onClick={() => setFilters(EMPTY)}>
              {t(S.resetAll)}
            </button>
          </p>
        )}
      </div>

      {/* Live results count (spec 11.1) */}
      <div className="results-meta" aria-live="polite">
        <span>
          {t(S.showing)} {results.length} {t(S.results)}
        </span>
        <span>
          <button className="btn secondary small" onClick={() => setMapOn(!mapOn)}>
            🗺 {t(T.enableMap)}
          </button>{" "}
          <span className="small">{t(T.mapNote)}</span>
        </span>
      </div>

      {mapOn && (
        <div className="card fill mb-1" style={{ minHeight: "180px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p className="muted" style={{ margin: 0, maxWidth: "45ch", textAlign: "center" }}>{t(T.mapPlaceholder)}</p>
        </div>
      )}

      {results.length === 0 ? (
        <div className="info-box gold">
          <p style={{ margin: 0 }}>{t(T.zeroHint)}</p>
        </div>
      ) : (
        <div className="card-grid cols-2">
          {results.map((p) => {
            const district = getDistrict(p.district);
            const matched = p.courses.filter((c) => courseMatches(c, filters));
            const saved = isSaved(p.id);
            return (
              <article key={p.id} className="card" id={p.id}>
                <h3 style={{ marginBottom: "0.2rem" }}>{t(p.name)}</h3>
                <div className="badges flex-wrap" style={{ marginBottom: "0.4rem" }}>
                  <span className="badge">{t(PROVIDER_TYPE_LABELS[p.type])}</span>
                  <span className="badge plain">
                    {district ? t(district.name) : p.district} · {t(p.town)}
                  </span>
                </div>
                <strong className="small">{t(T.courses)}:</strong>
                <ul className="small" style={{ margin: "0.2rem 0 0.6rem", paddingLeft: "1.2rem" }}>
                  {matched.map((c, i) => (
                    <li key={i}>
                      {t(c.name)} —{" "}
                      {c.nvqLevel ? `NVQ ${c.nvqLevel}` : t(T.nonNvq)} ·{" "}
                      {c.medium.map((m) => t(WORK_LANGUAGE_LABELS[m])).join("/")} ·{" "}
                      {t(FEE_LABELS[c.fee])}
                    </li>
                  ))}
                </ul>
                <p className="small" style={{ margin: "0 0 0.3rem" }}>
                  {p.applicationMode.map((m) => t(modeLabel(m))).join(" | ")}
                  {p.applicationMode.includes("online") && ` (${t(T.pcNote)})`}
                </p>
                <p className="small" style={{ margin: "0 0 0.3rem" }}>
                  {t(T.hostel)}: {t(p.hostel === "yes" ? T.yes : p.hostel === "no" ? T.no : T.unknown)}
                </p>
                <p className="small muted" style={{ margin: "0 0 0.3rem" }}>
                  {t(T.contact)}: {p.contact} · {t(p.address)}
                </p>
                <p className="small muted" style={{ margin: "0 0 0.6rem" }}>
                  {t(S.lastVerified)}: {t(p.verified)}
                </p>
                <button
                  className="btn secondary small"
                  aria-pressed={saved}
                  disabled={!saved && shortlist.length >= 5}
                  onClick={() => toggle(p.id)}
                >
                  {saved ? `★ ${t(T.inShortlist)}` : `☆ ${t(T.saveShortlist)}`}
                </button>
              </article>
            );
          })}
        </div>
      )}
      <p className="small muted mt-1">{t(S.sampleDataNote)}</p>

      {/* Shortlist + compare (spec 11.3) */}
      {shortlist.length > 0 && (
        <div className="shortlist-bar no-print">
          <strong>
            {t(T.shortlist)}: {shortlist.length}/5
          </strong>
          <span className="small">{t(T.shortlistMax)}</span>
          <button className="btn small" onClick={() => setCompareOpen(true)}>
            ⇄ {t(T.compareShortlist)}
          </button>
        </div>
      )}

      {compareOpen && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" onClick={() => setCompareOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="no-print" style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
              <h2 style={{ margin: 0 }}>{t(T.compareShortlist)}</h2>
              <button className="btn secondary small" onClick={() => setCompareOpen(false)}>
                ✕ {t(S.close)}
              </button>
            </div>
            <div className="table-scroll print-area mt-1">
              <table className="data">
                <thead>
                  <tr>
                    <th>{t(S.variable)}</th>
                    {shortlisted.map((p) => (
                      <th key={p.id}>{t(p.name)}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{t(S.filterDistrict)}</th>
                    {shortlisted.map((p) => {
                      const d = getDistrict(p.district);
                      return <td key={p.id}>{d ? t(d.name) : p.district} · {t(p.town)}</td>;
                    })}
                  </tr>
                  <tr>
                    <th scope="row">{t(T.courses)}</th>
                    {shortlisted.map((p) => (
                      <td key={p.id}>{p.courses.map((c) => t(c.name)).join("; ")}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">{t(T.medium)}</th>
                    {shortlisted.map((p) => (
                      <td key={p.id}>
                        {[...new Set(p.courses.flatMap((c) => c.medium))]
                          .map((m) => t(WORK_LANGUAGE_LABELS[m]))
                          .join(" / ")}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">{t(T.fee)}</th>
                    {shortlisted.map((p) => (
                      <td key={p.id}>
                        {[...new Set(p.courses.map((c) => t(FEE_LABELS[c.fee])))].join(" / ")}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">{t(T.hostel)}</th>
                    {shortlisted.map((p) => (
                      <td key={p.id}>{t(p.hostel === "yes" ? T.yes : p.hostel === "no" ? T.no : T.unknown)}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">{t(T.applicationMode)}</th>
                    {shortlisted.map((p) => (
                      <td key={p.id}>{p.applicationMode.map((m) => t(modeLabel(m))).join(" | ")}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">{t(T.contact)}</th>
                    {shortlisted.map((p) => (
                      <td key={p.id}>
                        {p.contact}
                        <br />
                        {t(p.address)}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="no-print mt-1" style={{ marginBottom: 0 }}>
              <button className="btn secondary small" onClick={() => window.print()}>
                ⬇ {t(T.downloadShortlist)}
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TrainingFinderPage() {
  return (
    <Suspense>
      <FinderContent />
    </Suspense>
  );
}
