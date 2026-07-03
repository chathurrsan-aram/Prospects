"use client";

import StubPage from "@/components/StubPage";
import { S } from "@/data/strings";

export default function TrainingFinderPage() {
  return (
    <StubPage
      title={S.navTraining}
      intro={{
        en: "Find a training provider in your district by field, NVQ level, medium of instruction, and cost — with a shortlist you can compare and print.",
        ta: "துறை, NVQ நிலை, கற்பித்தல் மொழி, செலவு அடிப்படையில் உங்கள் மாவட்டத்தில் பயிற்சி நிறுவனத்தைத் தேடுங்கள் — ஒப்பிட்டு அச்சிடக்கூடிய பட்டியலுடன்.",
      }}
    />
  );
}
