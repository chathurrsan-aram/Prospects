"use client";

import StubPage from "@/components/StubPage";
import { S } from "@/data/strings";

export default function AfterOlPage() {
  return (
    <StubPage
      title={S.stageAfterOl}
      intro={{
        en: "What your O/L results mean, and the three main paths from here: continuing to A/L, entering TVET or NVQ training, and other routes including apprenticeships and work.",
        ta: "உங்கள் சா/த முடிவுகள் என்ன அர்த்தம், இங்கிருந்து மூன்று முக்கிய பாதைகள்: உ/த தொடர்தல், தொழிற்கல்வி/NVQ பயிற்சியில் சேர்தல், பயிலுநர் பயிற்சி, வேலை உட்பட பிற வழிகள்.",
      }}
    />
  );
}
