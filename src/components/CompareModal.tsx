"use client";

import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { S, ROUTE_LABELS, STUDY_LEVEL_LABELS } from "@/data/strings";
import { JOBS } from "@/data/jobs";
import { getSector } from "@/data/sectors";
import type { Job } from "@/lib/types";

/** Side-by-side role comparison (spec 6.9). */
export default function CompareModal({
  baseJob,
  onClose,
}: {
  baseJob: Job;
  onClose: () => void;
}) {
  const { t } = useLang();
  const [otherId, setOtherId] = useState<string>("");
  const other = JOBS.find((j) => j.id === otherId);
  const candidates = JOBS.filter((j) => j.id !== baseJob.id);

  const row = (label: string, render: (j: Job) => React.ReactNode) => (
    <tr>
      <th scope="row">{label}</th>
      <td>{render(baseJob)}</td>
      <td>{other ? render(other) : "—"}</td>
    </tr>
  );

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={t(S.compareRole)} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
          <h2 style={{ margin: 0 }}>{t(S.compareRole)}</h2>
          <button className="btn secondary small" onClick={onClose}>
            ✕ {t(S.close)}
          </button>
        </div>
        <div className="form-field mt-1">
          <label htmlFor="compare-select">{t(S.chooseRoleToCompare)}</label>
          <select id="compare-select" value={otherId} onChange={(e) => setOtherId(e.target.value)}>
            <option value="">—</option>
            {candidates.map((j) => (
              <option key={j.id} value={j.id}>
                {t(j.title)}
              </option>
            ))}
          </select>
        </div>
        <div className="table-scroll">
          <table className="data">
            <thead>
              <tr>
                <th>{t(S.variable)}</th>
                <th>{t(baseJob.title)}</th>
                <th>{other ? <Link href={`/jobs/${other.id}`}>{t(other.title)}</Link> : "—"}</th>
              </tr>
            </thead>
            <tbody>
              {row(t(S.filterSector), (j) => {
                const s = getSector(j.sector);
                return s ? t(s.name) : j.sector;
              })}
              {row(t(S.filterRoute), (j) => j.routeTypes.map((r) => t(ROUTE_LABELS[r])).join(" | "))}
              {row(t(S.minimumEntry), (j) => t(STUDY_LEVEL_LABELS[j.minStudyLevel]))}
              {row(t(S.workplaceLanguages), (j) => t(j.languageNote))}
              {row(t(S.keySkills), (j) => j.keySkills.slice(0, 3).map((s) => t(s)).join(" · "))}
              {row(t(S.demandNote), (j) => t(j.demand.text))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
