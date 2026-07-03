"use client";

import { useLang } from "@/lib/i18n";
import { S, ROUTE_LABELS } from "@/data/strings";
import type { PathwayRoute } from "@/lib/types";

/**
 * Pathway map (spec 6.6): one vertical track per route family, stages in
 * order, CURRENT/REFORM badges, and inline barrier notes. Renders as
 * stacked step lists on mobile and side-by-side tracks on desktop.
 */
export default function PathwayMap({ routes }: { routes: PathwayRoute[] }) {
  const { t } = useLang();
  const cols = routes.length >= 3 ? "n3" : routes.length === 2 ? "n2" : "";

  return (
    <div>
      <div className={`pathway-tracks ${cols}`}>
        {routes.map((route) => (
          <section key={route.type} className="pathway-track">
            <h3>{t(ROUTE_LABELS[route.type])}</h3>
            <ol>
              {route.stages.map((stage, i) => (
                <li key={i} className="pathway-stage">
                  <span className="step-no" aria-hidden="true">
                    {i + 1}
                  </span>
                  <h4>
                    {t(stage.title)}{" "}
                    {stage.badge && (
                      <span className={`badge ${stage.badge}`}>
                        {t(stage.badge === "current" ? S.currentBadge : S.reformBadge)}
                      </span>
                    )}
                  </h4>
                  <p>{t(stage.detail)}</p>
                  {stage.barriers?.map((b, j) => (
                    <p key={j} className="pathway-barrier">
                      ⚠ {t(S.barrier)}: {t(b)}
                    </p>
                  ))}
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
      <p className="mt-1 no-print">
        <button className="btn secondary small" onClick={() => window.print()}>
          ⬇ {t(S.downloadPathway)}
        </button>
      </p>
    </div>
  );
}
