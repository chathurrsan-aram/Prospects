"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useLang } from "@/lib/i18n";
import { S, ROUTE_LABELS } from "@/data/strings";
import { QUIZ_QUESTIONS, CLUSTERS, INCOME_NOTE, TAMIL_MEDIUM_NOTE, type ClusterId } from "@/data/quiz";
import { getJob } from "@/data/jobs";
import Breadcrumb from "@/components/Breadcrumb";
import JobCard from "@/components/JobCard";

type Answers = Record<string, number>; // questionId -> option index

const RESULTS_KEY = "aram-quiz-results";

function computeResults(answers: Answers) {
  const scores = new Map<ClusterId, number>();
  const reasons = new Map<ClusterId, string[]>(); // store reason keys as "qId:optIdx"

  for (const q of QUIZ_QUESTIONS) {
    const idx = answers[q.id];
    if (idx === undefined || q.profile) continue;
    const opt = q.options[idx];
    for (const [cluster, weight] of Object.entries(opt.weights)) {
      const c = cluster as ClusterId;
      scores.set(c, (scores.get(c) ?? 0) + (weight ?? 0));
      if ((weight ?? 0) >= 2) {
        reasons.set(c, [...(reasons.get(c) ?? []), `${q.id}:${idx}`]);
      }
    }
  }

  const ranked = [...scores.entries()].sort((a, b) => b[1] - a[1]);
  return ranked.slice(0, 3).map(([id, score]) => ({
    cluster: CLUSTERS.find((c) => c.id === id)!,
    score,
    reasonRefs: reasons.get(id) ?? [],
  }));
}

export default function QuizPage() {
  const { t } = useLang();
  const [phase, setPhase] = useState<"intro" | "questions" | "results">("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [savedNote, setSavedNote] = useState(false);

  const total = QUIZ_QUESTIONS.length;
  const question = QUIZ_QUESTIONS[current];

  const results = useMemo(
    () => (phase === "results" ? computeResults(answers) : []),
    [phase, answers]
  );

  const incomeQ = QUIZ_QUESTIONS.findIndex((q) => q.profile === "income");
  const langQ = QUIZ_QUESTIONS.findIndex((q) => q.profile === "language");
  const incomeEssential = incomeQ >= 0 && answers[QUIZ_QUESTIONS[incomeQ].id] === 0;
  const prefersTamil = langQ >= 0 && answers[QUIZ_QUESTIONS[langQ].id] === 0;

  const select = (idx: number) => {
    setAnswers((a) => ({ ...a, [question.id]: idx }));
    if (current < total - 1) {
      setCurrent(current + 1);
    } else {
      setPhase("results");
    }
  };

  const restart = () => {
    setAnswers({});
    setCurrent(0);
    setSavedNote(false);
    setPhase("intro");
  };

  return (
    <div className="container">
      <Breadcrumb items={[{ label: S.quizTitle }]} />
      <h1>{t(S.quizTitle)}</h1>

      {phase === "intro" && (
        <>
          {/* Pre-quiz framing (spec 12.1) */}
          <div className="card fill" style={{ maxWidth: "44rem" }}>
            <p>{t(S.quizIntro1)}</p>
            <p>{t(S.quizIntro2)}</p>
            <button className="btn" onClick={() => setPhase("questions")}>
              {t(S.startQuiz)}
            </button>
          </div>
        </>
      )}

      {phase === "questions" && (
        <div style={{ maxWidth: "44rem" }}>
          {/* One question at a time with a progress indicator (spec 12.2) */}
          <p className="muted">
            {t(S.question)} {current + 1} {t(S.of)} {total}
          </p>
          <div className="quiz-progress" aria-hidden="true">
            <div style={{ width: `${((current + 1) / total) * 100}%` }} />
          </div>
          <h2>{t(question.text)}</h2>
          <div role="group" aria-label={t(question.text)}>
            {question.options.map((opt, i) => (
              <button
                key={i}
                className={`quiz-option ${answers[question.id] === i ? "selected" : ""}`}
                onClick={() => select(i)}
              >
                {t(opt.label)}
              </button>
            ))}
          </div>
          {current > 0 && (
            <button className="btn secondary small mt-1" onClick={() => setCurrent(current - 1)}>
              ← {t(S.back)}
            </button>
          )}
        </div>
      )}

      {phase === "results" && (
        <>
          <h2>{t(S.quizResultsTitle)}</h2>

          {/* Advisory notice — must appear on every results screen (spec 12.3) */}
          <div className="advisory" role="note">
            <p>
              <strong>{t(S.advisory1)}</strong>
            </p>
            <p>{t(S.advisory2)}</p>
            <p style={{ margin: 0 }}>{t(S.advisory3)}</p>
          </div>

          {incomeEssential && (
            <div className="info-box">
              <p style={{ margin: 0 }}>{t(INCOME_NOTE)}</p>
            </div>
          )}
          {prefersTamil && (
            <div className="info-box">
              <p style={{ margin: 0 }}>{t(TAMIL_MEDIUM_NOTE)}</p>
            </div>
          )}

          {results.map(({ cluster, reasonRefs }) => (
            <section key={cluster.id} className="card" style={{ marginBottom: "1.2rem" }}>
              <h2 style={{ marginBottom: "0.2rem" }}>{t(cluster.label)}</h2>
              <p className="muted">{t(cluster.blurb)}</p>

              <h3>{t(S.whyMatched)}</h3>
              <ul>
                {reasonRefs.length > 0 ? (
                  reasonRefs.map((ref) => {
                    const [qId, optIdx] = ref.split(":");
                    const q = QUIZ_QUESTIONS.find((x) => x.id === qId);
                    const reason = q?.options[Number(optIdx)]?.reason;
                    return reason ? <li key={ref}>{t(reason)}</li> : null;
                  })
                ) : (
                  <li>{t(cluster.blurb)}</li>
                )}
              </ul>

              <h3>{t(S.routesAvailable)}</h3>
              <div className="badges flex-wrap" style={{ marginBottom: "0.8rem" }}>
                {cluster.routeTypes.map((r) => (
                  <span key={r} className="badge gold">
                    {t(ROUTE_LABELS[r])}
                  </span>
                ))}
              </div>

              <div className="card-grid cols-2" style={{ marginBottom: "0.8rem" }}>
                {cluster.jobIds.slice(0, 3).map((id) => {
                  const job = getJob(id);
                  return job ? <JobCard key={id} job={job} /> : null;
                })}
              </div>

              <Link href={`/explore-careers?sector=${cluster.sector}`} className="btn secondary small">
                {t(S.exploreCluster)} →
              </Link>
            </section>
          ))}

          {/* Post-quiz actions (spec 12.4) */}
          <div className="info-box no-print">
            <h2 style={{ fontSize: "1.1rem" }}>{t(S.nextSteps)}</h2>
            <div className="flex-wrap">
              <button
                className="btn secondary small"
                onClick={() => {
                  window.sessionStorage.setItem(
                    RESULTS_KEY,
                    JSON.stringify({ answers, clusters: results.map((r) => r.cluster.id) })
                  );
                  setSavedNote(true);
                }}
              >
                {savedNote ? `✓ ${t(S.saved)}` : `☆ ${t(S.saveResults)}`}
              </button>
              <button className="btn secondary small" onClick={restart}>
                ↻ {t(S.startAgain)}
              </button>
              <Link href="/get-help#mentor" className="btn secondary small">
                {t(S.talkToMentor)}
              </Link>
              <Link href="/training-finder" className="btn secondary small">
                {t(S.findProvider)}
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
