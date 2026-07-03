import type { L } from "@/lib/types";

/** All 25 districts of Sri Lanka. */
export const DISTRICTS: { id: string; name: L }[] = [
  { id: "ampara", name: { en: "Ampara", ta: "அம்பாறை" } },
  { id: "anuradhapura", name: { en: "Anuradhapura", ta: "அனுராதபுரம்" } },
  { id: "badulla", name: { en: "Badulla", ta: "பதுளை" } },
  { id: "batticaloa", name: { en: "Batticaloa", ta: "மட்டக்களப்பு" } },
  { id: "colombo", name: { en: "Colombo", ta: "கொழும்பு" } },
  { id: "galle", name: { en: "Galle", ta: "காலி" } },
  { id: "gampaha", name: { en: "Gampaha", ta: "கம்பஹா" } },
  { id: "hambantota", name: { en: "Hambantota", ta: "அம்பாந்தோட்டை" } },
  { id: "jaffna", name: { en: "Jaffna", ta: "யாழ்ப்பாணம்" } },
  { id: "kalutara", name: { en: "Kalutara", ta: "களுத்துறை" } },
  { id: "kandy", name: { en: "Kandy", ta: "கண்டி" } },
  { id: "kegalle", name: { en: "Kegalle", ta: "கேகாலை" } },
  { id: "kilinochchi", name: { en: "Kilinochchi", ta: "கிளிநொச்சி" } },
  { id: "kurunegala", name: { en: "Kurunegala", ta: "குருணாகல்" } },
  { id: "mannar", name: { en: "Mannar", ta: "மன்னார்" } },
  { id: "matale", name: { en: "Matale", ta: "மாத்தளை" } },
  { id: "matara", name: { en: "Matara", ta: "மாத்தறை" } },
  { id: "monaragala", name: { en: "Monaragala", ta: "மொணராகலை" } },
  { id: "mullaitivu", name: { en: "Mullaitivu", ta: "முல்லைத்தீவு" } },
  { id: "nuwara-eliya", name: { en: "Nuwara Eliya", ta: "நுவரெலியா" } },
  { id: "polonnaruwa", name: { en: "Polonnaruwa", ta: "பொலன்னறுவை" } },
  { id: "puttalam", name: { en: "Puttalam", ta: "புத்தளம்" } },
  { id: "ratnapura", name: { en: "Ratnapura", ta: "இரத்தினபுரி" } },
  { id: "trincomalee", name: { en: "Trincomalee", ta: "திருகோணமலை" } },
  { id: "vavuniya", name: { en: "Vavuniya", ta: "வவுனியா" } },
];

export function getDistrict(id: string) {
  return DISTRICTS.find((d) => d.id === id);
}
