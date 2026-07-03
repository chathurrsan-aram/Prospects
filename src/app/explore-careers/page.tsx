"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useLang } from "@/lib/i18n";
import { S, ROUTE_LABELS, STUDY_LEVEL_LABELS, WORK_LANGUAGE_LABELS } from "@/data/strings";
import { SECTORS } from "@/data/sectors";
import { DISTRICTS } from "@/data/districts";
import { JOBS } from "@/data/jobs";
import JobCard from "@/components/JobCard";
import Breadcrumb from "@/components/Breadcrumb";
import PageMeta from "@/components/PageMeta";
import type { RouteType, SectorId, StudyLevel, WorkLanguage } from "@/lib/types";

const ROUTE_TYPES: RouteType[] = ["university", "tvet", "apprenticeship", "professional", "workfirst"];
const STUDY_LEVELS: StudyLevel[] = ["ol", "al", "degree", "certificate", "none"];
const WORK_LANGS: WorkLanguage[] = ["tamil", "sinhala", "english", "mixed"];
const FILTER_STATE_KEY = "aram-explore-filters";
const PAGE_SIZE = 20;

interface FilterState {
  q: string;
  sectors: string[];
  routes: string[];
  district: string;
  workLang: string;
  studyLevel: string;
}

const EMPTY: FilterState = { q: "", sectors: [], routes: [], district: "", workLang: "", studyLevel: "" };

function ExploreContent() {
  const { t } = useLang();
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<FilterState>(EMPTY);
  const [page, setPage] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [restored, setRestored] = useState(false);

  // Restore filter state on return (spec 4.1), unless a link pre-set a sector.
  useEffect(() => {
    const sectorParam = searchParams.get("sector");
    const routeParam = searchParams.get("route");
    if (sectorParam || routeParam) {
      setFilters({
        ...EMPTY,
        sectors: sectorParam ? sectorParam.split(",") : [],
        routes: routeParam ? routeParam.split(",") : [],
      });
    } else {
      try {
        const raw = window.sessionStorage.getItem(FILTER_STATE_KEY);
        if (raw) setFilters({ ...EMPTY, ...JSON.parse(raw) });
      } catch {
        /* keep defaults */
      }
    }
    setRestored(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!restored) return;
    window.sessionStorage.setItem(FILTER_STATE_KEY, JSON.stringify(filters));
    setPage(1);
  }, [filters, restored]);

  const results = useMemo(() => {
    const q = filters.q.trim().toLowerCase();
    return JOBS.filter((job) => {
      if (q) {
        const hay = `${job.title.en} ${job.title.ta} ${job.short.en} ${job.short.ta}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (filters.sectors.length && !filters.sectors.includes(job.sector)) return false;
      if (filters.routes.length && !filters.routes.some((r) => job.routeTypes.includes(r as RouteType)))
        return false;
      if (filters.district && job.districts !== "all" && !job.districts.includes(filters.district))
        return false;
      if (filters.workLang && !job.workLanguages.includes(filters.workLang as WorkLanguage))
        return false;
      if (filters.studyLevel && job.minStudyLevel !== filters.studyLevel) return false;
      return true;
    });
  }, [filters]);

  const anyActive =
    filters.q !== "" ||
    filters.sectors.length > 0 ||
    filters.routes.length > 0 ||
    filters.district !== "" ||
    filters.workLang !== "" ||
    filters.studyLevel !== "";

  const pageResults = results.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));

  const toggleMulti = (key: "sectors" | "routes", value: string) =>
    setFilters((f) => ({
      ...f,
      [key]: f[key].includes(value) ? f[key].filter((v) => v !== value) : [...f[key], value],
    }));

  return (
    <div className="container">
      <Breadcrumb items={[{ label: S.navExplore }]} />
      <h1>{t(S.navExplore)}</h1>
      <PageMeta />

      <div className="filter-bar">
        <div className="search-row">
          <input
            type="search"
            value={filters.q}
            placeholder={t(S.search)}
            aria-label={t(S.search)}
            onChange={(e) => setFilters((f) => ({ ...f, q: e.target.value }))}
          />
          {anyActive && (
            <button className="btn secondary small" onClick={() => setFilters(EMPTY)}>
              {t(S.resetAll)}
            </button>
          )}
        </div>

        <button
          className="btn secondary small filter-toggle"
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          {t(S.filters)} {drawerOpen ? "▲" : "▼"}
        </button>

        <div className={`filter-groups ${drawerOpen ? "open" : ""}`}>
          <div className="filter-group">
            <fieldset>
              <legend>{t(S.filterSector)}</legend>
              {SECTORS.map((s) => (
                <div key={s.id} className="check-row">
                  <input
                    type="checkbox"
                    id={`sector-${s.id}`}
                    checked={filters.sectors.includes(s.id)}
                    onChange={() => toggleMulti("sectors", s.id)}
                  />
                  <label htmlFor={`sector-${s.id}`}>{t(s.name)}</label>
                </div>
              ))}
            </fieldset>
          </div>

          <div className="filter-group">
            <fieldset>
              <legend>{t(S.filterRoute)}</legend>
              {ROUTE_TYPES.map((r) => (
                <div key={r} className="check-row">
                  <input
                    type="checkbox"
                    id={`route-${r}`}
                    checked={filters.routes.includes(r)}
                    onChange={() => toggleMulti("routes", r)}
                  />
                  <label htmlFor={`route-${r}`}>{t(ROUTE_LABELS[r])}</label>
                </div>
              ))}
            </fieldset>
          </div>

          <div className="filter-group">
            <label className="label" htmlFor="district-select">
              {t(S.filterDistrict)}
            </label>
            <select
              id="district-select"
              value={filters.district}
              onChange={(e) => setFilters((f) => ({ ...f, district: e.target.value }))}
            >
              <option value="">{t(S.allDistricts)}</option>
              {DISTRICTS.map((d) => (
                <option key={d.id} value={d.id}>
                  {t(d.name)}
                </option>
              ))}
            </select>

            <label className="label mt-1" htmlFor="worklang-select">
              {t(S.filterWorkLanguage)}
            </label>
            <select
              id="worklang-select"
              value={filters.workLang}
              onChange={(e) => setFilters((f) => ({ ...f, workLang: e.target.value }))}
            >
              <option value="">{t(S.any)}</option>
              {WORK_LANGS.map((w) => (
                <option key={w} value={w}>
                  {t(WORK_LANGUAGE_LABELS[w])}
                </option>
              ))}
            </select>

            <label className="label mt-1" htmlFor="study-select">
              {t(S.filterStudyLevel)}
            </label>
            <select
              id="study-select"
              value={filters.studyLevel}
              onChange={(e) => setFilters((f) => ({ ...f, studyLevel: e.target.value }))}
            >
              <option value="">{t(S.any)}</option>
              {STUDY_LEVELS.map((l) => (
                <option key={l} value={l}>
                  {t(STUDY_LEVEL_LABELS[l])}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="results-meta" aria-live="polite">
        <span>
          {t(S.showing)} {pageResults.length} {t(S.of)} {results.length} {t(S.results)}
        </span>
        {totalPages > 1 && (
          <span className="flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`btn small ${page === i + 1 ? "" : "secondary"}`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </span>
        )}
      </div>

      {results.length === 0 ? (
        <div className="info-box gold">
          <p style={{ margin: 0 }}>{t(S.noResults)}</p>
        </div>
      ) : (
        <div className="card-grid cols-3">
          {pageResults.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ExplorePage() {
  return (
    <Suspense>
      <ExploreContent />
    </Suspense>
  );
}
