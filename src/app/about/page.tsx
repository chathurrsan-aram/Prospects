"use client";

import { useLang } from "@/lib/i18n";
import { S } from "@/data/strings";
import StubPage from "@/components/StubPage";

export default function AboutPage() {
  const { t } = useLang();
  return (
    <StubPage
      title={S.footerAbout}
      intro={S.mission}
    >
      <div className="card fill" id="sources">
        <p style={{ margin: 0 }}>
          {t({
            en: "Full sections on how this site works, our source policy, privacy notice, safeguarding commitments, and partner acknowledgements are part of the next iteration.",
            ta: "இத்தளம் எப்படி இயங்குகிறது, மூலக் கொள்கை, தனியுரிமை அறிவிப்பு, பாதுகாப்பு உறுதிமொழிகள், பங்காளர் நன்றியுரைகள் பற்றிய முழுப் பிரிவுகள் அடுத்த சுற்றில் சேர்க்கப்படும்.",
          })}
        </p>
      </div>
      <span id="privacy" />
      <span id="safeguarding" />
      <span id="contact" />
    </StubPage>
  );
}
