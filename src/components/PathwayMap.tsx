"use client";

import { useLang } from "@/lib/i18n";
import { S, ROUTE_LABELS } from "@/data/strings";
import { ROUTE_ICONS, WarnIcon, DownloadIcon } from "@/components/icons";
import type { PathwayRoute } from "@/lib/types";

/**
 * Pathway map (spec 6.6): a journey diagram — one route-coloured track per
 * route family, milestone dots joined by a connector line, stages in order,
 * CURRENT/REFORM badges, and inline barrier notes. Stacks on mobile.
 */
export default function PathwayMap({ routes }: { routes: PathwayRoute[] }) {
  const { t } = useLang();
  const cols = routes.length >= 3 ? "n3" : routes.length === 2 ? "n2" : "";

  return (
    <div>
      <div className={`pathway-tracks ${cols}`}>
        {routes.map((route) => {
          const RouteIcon = ROUTE_ICONS[route.type];
          return (
            <section key={route.type} className={`pathway-track route-${route.type}`}>
              <h3>
                <RouteIcon size={22} />
                {t(ROUTE_LABELS[route.type])}
              </h3>
              <ol>
                {route.stages.map((stage, i) => (
                  <li key={i} className="pathway-stage">
                    <span className="step-no" aria-hidden="true">
                      {i + 1}
                    </span>
                    <h4>
                      {t(stage.title)}
                      {stage.badge && (
                        <span className={`badge ${stage.badge}`}>
                          {t(stage.badge === "current" ? S.currentBadge : S.reformBadge)}
                        </span>
                      )}
                    </h4>
                    <p>{t(stage.detail)}</p>
                    {stage.barriers?.map((b, j) => (
                      <p key={j} className="pathway-barrier">
                        <WarnIcon size={16} />
                        <span>
                          {t(S.barrier)}: {t(b)}
                        </span>
                      </p>
                    ))}
                  </li>
                ))}
              </ol>
            </section>
          );
        })}
      </div>
      <p className="mt-1 no-print">
        <button className="btn secondary small" onClick={() => window.print()}>
          <DownloadIcon size={17} /> {t(S.downloadPathway)}
        </button>
      </p>
    </div>
  );
}
