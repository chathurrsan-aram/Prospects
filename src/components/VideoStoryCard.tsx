"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { S, ROUTE_LABELS } from "@/data/strings";
import type { VideoStory } from "@/lib/types";

/**
 * Video story card (spec 3.5 / 6.8): static thumbnail, no autoplay, videos
 * load on tap only, transcript link below. In the prototype the play button
 * is a placeholder — no real footage exists yet.
 */
export default function VideoStoryCard({
  video,
  href,
}: {
  video: VideoStory;
  href?: string;
}) {
  const { t } = useLang();
  return (
    <article className="video-card">
      <div className="video-thumb">
        <button
          className="play"
          aria-label={`${t(S.videoStories)}: ${t(video.role)}`}
          onClick={() => alert(t(S.sampleDataNote))}
        >
          ▶
        </button>
        {video.duration && <span className="small">{video.duration}</span>}
      </div>
      <div className="body">
        <strong>{href ? <Link href={href}>{t(video.role)}</Link> : t(video.role)}</strong>
        <p className="meta" style={{ margin: "0.3rem 0" }}>
          {t(video.district)} · {t(ROUTE_LABELS[video.route])} · {t(video.language)} ·{" "}
          {t(video.subtitles)}
        </p>
        <a href="#" onClick={(e) => e.preventDefault()} className="small">
          📄 {t(S.transcript)}
        </a>
      </div>
    </article>
  );
}
