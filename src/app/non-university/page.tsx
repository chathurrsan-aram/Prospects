"use client";

import StubPage from "@/components/StubPage";
import { S } from "@/data/strings";

export default function NonUniversityPage() {
  return (
    <StubPage
      title={S.stageNonUni}
      intro={{
        en: "The routes most Sri Lankan young people actually take: NVQ and TVET, apprenticeships, professional certificates, and work-first paths — presented as first-choice options, not fallbacks.",
        ta: "பெரும்பாலான இலங்கை இளையோர் உண்மையில் எடுக்கும் வழிகள்: NVQ, தொழிற்கல்வி, பயிலுநர் பயிற்சி, தொழில்சார் சான்றிதழ்கள், வேலை-முதல் பாதைகள் — மாற்று அல்ல, முதல் தேர்வுகளாக.",
      }}
    />
  );
}
