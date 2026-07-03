"use client";

import StubPage from "@/components/StubPage";
import { S } from "@/data/strings";

export default function AfterAlPage() {
  return (
    <StubPage
      title={S.stageAfterAl}
      intro={{
        en: "How UGC university application works (Z-score, district basis, preference form, aptitude tests) — plus strong TVET, professional, and open-study alternatives with A/L results.",
        ta: "UGC பல்கலைக்கழக விண்ணப்பம் எப்படி இயங்குகிறது (Z-மதிப்பெண், மாவட்ட அடிப்படை, விருப்பப் படிவம், திறனாய்வுத் தேர்வுகள்) — உ/த முடிவுகளுடன் வலுவான தொழிற்கல்வி, தொழில்சார், திறந்த கல்வி மாற்று வழிகளும்.",
      }}
    />
  );
}
