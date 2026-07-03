"use client";

import { useLang } from "@/lib/i18n";
import { S } from "@/data/strings";
import StubPage from "@/components/StubPage";

export default function GetHelpPage() {
  const { t } = useLang();
  return (
    <StubPage
      title={S.navHelp}
      intro={{
        en: "Find guidance counsellors, scholarships, official contacts, and ARAM mentoring.",
        ta: "வழிகாட்டல் ஆலோசகர்கள், புலமைப்பரிசில்கள், உத்தியோகபூர்வ தொடர்புகள், ஆரம் வழிகாட்டலைக் காணுங்கள்.",
      }}
    >
      {/* Urgent support must be at the top, above the fold, on every version
          of this page (spec 15.1) — present even in the interim version. */}
      <div className="urgent-block" id="urgent">
        <h2>
          ⚠{" "}
          {t({
            en: "URGENT SUPPORT — if you are in crisis or need immediate help",
            ta: "அவசர உதவி — நெருக்கடியில் இருந்தால் அல்லது உடனடி உதவி தேவைப்பட்டால்",
          })}
        </h2>
        <ul style={{ margin: 0 }}>
          <li>
            {t({
              en: "National Mental Health Helpline (Directorate of Mental Health): 1926",
              ta: "தேசிய மனநல உதவி இலக்கம் (மனநல இயக்ககம்): 1926",
            })}
          </li>
          <li>
            {t({
              en: "Child protection (NCPA Childline): 1929",
              ta: "சிறுவர் பாதுகாப்பு (NCPA சிறுவர் உதவி): 1929",
            })}
          </li>
        </ul>
      </div>
    </StubPage>
  );
}
