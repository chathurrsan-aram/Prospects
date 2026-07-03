import type { L, Provider, ProviderType } from "@/lib/types";

/** SAMPLE provider data for design review — names modelled on real provider
 *  types, but contact details are placeholders. Verify before publication. */

const VERIFIED: L = { en: "10 June 2026", ta: "10 ஜூன் 2026" };

export const PROVIDER_TYPE_LABELS: Record<ProviderType, L> = {
  VTA: { en: "VTA", ta: "VTA (தொழிற்பயிற்சி அதிகார சபை)" },
  DTET: { en: "DTET Technical College", ta: "DTET தொழில்நுட்பக் கல்லூரி" },
  NAITA: { en: "NAITA", ta: "NAITA" },
  UoVT: { en: "UoVT", ta: "UoVT (தொழில்நுட்பப் பல்கலைக்கழகம்)" },
  OUSL: { en: "OUSL", ta: "OUSL (திறந்த பல்கலைக்கழகம்)" },
  NCOE: { en: "National College of Education", ta: "தேசிய கல்வியியல் கல்லூரி" },
  "health-institute": { en: "Health training institute", ta: "சுகாதாரப் பயிற்சி நிறுவனம்" },
  private: { en: "Private accredited", ta: "தனியார் (அங்கீகரிக்கப்பட்டது)" },
};

export const PROVIDERS: Provider[] = [
  {
    id: "vta-jaffna",
    name: { en: "VTA District Vocational Training Centre — Jaffna", ta: "VTA மாவட்ட தொழிற்பயிற்சி நிலையம் — யாழ்ப்பாணம்" },
    type: "VTA",
    district: "jaffna",
    town: { en: "Jaffna town", ta: "யாழ்ப்பாண நகரம்" },
    contact: "021-222-XXXX",
    address: { en: "Kandy Road, Jaffna (sample address)", ta: "கண்டி வீதி, யாழ்ப்பாணம் (மாதிரி முகவரி)" },
    applicationMode: ["walkin", "school-referral"],
    hostel: "no",
    verified: VERIFIED,
    courses: [
      { name: { en: "NVQ 3 Electrician", ta: "NVQ 3 மின் தொழில்" }, nvqLevel: 3, medium: ["tamil"], fee: "free", jobIds: ["electrician"], entry: "ol" },
      { name: { en: "NVQ 4 ICT Technician", ta: "NVQ 4 ICT தொழில்நுட்பம்" }, nvqLevel: 4, medium: ["tamil", "english"], fee: "free", jobIds: ["software-developer"], entry: "ol" },
      { name: { en: "NVQ 4 Graphic Design", ta: "NVQ 4 வரைகலை வடிவமைப்பு" }, nvqLevel: 4, medium: ["tamil"], fee: "low", jobIds: ["graphic-designer"], entry: "ol" },
    ],
  },
  {
    id: "dtet-jaffna",
    name: { en: "College of Technology — Jaffna (DTET)", ta: "தொழில்நுட்பக் கல்லூரி — யாழ்ப்பாணம் (DTET)" },
    type: "DTET",
    district: "jaffna",
    town: { en: "Jaffna", ta: "யாழ்ப்பாணம்" },
    contact: "021-222-XXXX",
    address: { en: "Brown Road, Jaffna (sample address)", ta: "பிரவுண் வீதி, யாழ்ப்பாணம் (மாதிரி முகவரி)" },
    applicationMode: ["online", "walkin"],
    hostel: "yes",
    verified: VERIFIED,
    courses: [
      { name: { en: "NVQ 5/6 Diploma in Quantity Surveying", ta: "NVQ 5/6 அளவை மதிப்பீட்டு டிப்ளோமா" }, nvqLevel: 5, medium: ["english"], fee: "low", jobIds: ["quantity-surveyor"], entry: "al" },
      { name: { en: "NVQ 5 Higher Certificate in ICT", ta: "NVQ 5 உயர் சான்றிதழ் ICT" }, nvqLevel: 5, medium: ["english"], fee: "low", jobIds: ["software-developer"], entry: "ol" },
      { name: { en: "NVQ 4 Automobile Technology", ta: "NVQ 4 வாகன தொழில்நுட்பம்" }, nvqLevel: 4, medium: ["tamil"], fee: "free", jobIds: ["automotive-technician"], entry: "ol" },
    ],
  },
  {
    id: "naita-kilinochchi",
    name: { en: "NAITA Training Centre — Kilinochchi", ta: "NAITA பயிற்சி நிலையம் — கிளிநொச்சி" },
    type: "NAITA",
    district: "kilinochchi",
    town: { en: "Kilinochchi", ta: "கிளிநொச்சி" },
    contact: "021-228-XXXX",
    address: { en: "A9 Road, Kilinochchi (sample address)", ta: "A9 வீதி, கிளிநொச்சி (மாதிரி முகவரி)" },
    applicationMode: ["walkin", "school-referral"],
    hostel: "unknown",
    verified: VERIFIED,
    courses: [
      { name: { en: "Apprenticeship — Electrician", ta: "பயிலுநர் பயிற்சி — மின் தொழில்" }, nvqLevel: 3, medium: ["tamil"], fee: "free", jobIds: ["electrician"], entry: "none" },
      { name: { en: "Apprenticeship — Automobile Mechanic", ta: "பயிலுநர் பயிற்சி — வாகனப் பழுதுநீக்கம்" }, nvqLevel: 3, medium: ["tamil"], fee: "free", jobIds: ["automotive-technician"], entry: "none" },
    ],
  },
  {
    id: "vta-batticaloa",
    name: { en: "VTA District Vocational Training Centre — Batticaloa", ta: "VTA மாவட்ட தொழிற்பயிற்சி நிலையம் — மட்டக்களப்பு" },
    type: "VTA",
    district: "batticaloa",
    town: { en: "Batticaloa", ta: "மட்டக்களப்பு" },
    contact: "065-222-XXXX",
    address: { en: "Trinco Road, Batticaloa (sample address)", ta: "திருகோணமலை வீதி, மட்டக்களப்பு (மாதிரி முகவரி)" },
    applicationMode: ["walkin"],
    hostel: "no",
    verified: VERIFIED,
    courses: [
      { name: { en: "NVQ 3 Electrician", ta: "NVQ 3 மின் தொழில்" }, nvqLevel: 3, medium: ["tamil"], fee: "free", jobIds: ["electrician"], entry: "ol" },
      { name: { en: "NVQ 4 Front Office (Hospitality)", ta: "NVQ 4 முன்னணி அலுவலகம் (விருந்தோம்பல்)" }, nvqLevel: 4, medium: ["tamil", "english"], fee: "free", jobIds: ["hotel-front-office"], entry: "ol" },
    ],
  },
  {
    id: "slithm-trinco",
    name: { en: "Hotel School — Trincomalee (SLITHM)", ta: "ஹோட்டல் பாடசாலை — திருகோணமலை (SLITHM)" },
    type: "private",
    district: "trincomalee",
    town: { en: "Trincomalee", ta: "திருகோணமலை" },
    contact: "026-222-XXXX",
    address: { en: "Dockyard Road, Trincomalee (sample address)", ta: "கப்பல்துறை வீதி, திருகோணமலை (மாதிரி முகவரி)" },
    applicationMode: ["online", "walkin"],
    hostel: "yes",
    verified: VERIFIED,
    courses: [
      { name: { en: "Front Office Operations Certificate (NVQ 4)", ta: "முன்னணி அலுவலக செயற்பாட்டுச் சான்றிதழ் (NVQ 4)" }, nvqLevel: 4, medium: ["english"], fee: "low", jobIds: ["hotel-front-office"], entry: "ol" },
    ],
  },
  {
    id: "ousl-jaffna",
    name: { en: "Open University of Sri Lanka — Jaffna Regional Centre", ta: "இலங்கை திறந்த பல்கலைக்கழகம் — யாழ். பிராந்திய நிலையம்" },
    type: "OUSL",
    district: "jaffna",
    town: { en: "Kokuvil", ta: "கொக்குவில்" },
    contact: "021-222-XXXX",
    address: { en: "Kokuvil, Jaffna (sample address)", ta: "கொக்குவில், யாழ்ப்பாணம் (மாதிரி முகவரி)" },
    applicationMode: ["online"],
    hostel: "no",
    verified: VERIFIED,
    courses: [
      { name: { en: "BSc Nursing top-up (for qualified nurses)", ta: "BSc தாதிய மேற்படிப்பு (தகுதியுள்ள தாதியர்களுக்கு)" }, nvqLevel: null, medium: ["english"], fee: "moderate", jobIds: ["nursing-officer"], entry: "certificate" },
      { name: { en: "B.Ed top-up for serving teachers", ta: "சேவை ஆசிரியர்களுக்கான B.Ed மேற்படிப்பு" }, nvqLevel: null, medium: ["tamil", "english"], fee: "moderate", jobIds: ["primary-teacher"], entry: "certificate" },
      { name: { en: "BA Social Sciences (open entry foundation)", ta: "BA சமூக விஞ்ஞானம் (திறந்த நுழைவு அடிப்படை)" }, nvqLevel: null, medium: ["tamil", "english"], fee: "moderate", jobIds: ["community-development-officer"], entry: "ol" },
    ],
  },
  {
    id: "ncoe-vavuniya",
    name: { en: "National College of Education — Vavuniya (Tamil medium)", ta: "தேசிய கல்வியியல் கல்லூரி — வவுனியா (தமிழ் மொழிமூலம்)" },
    type: "NCOE",
    district: "vavuniya",
    town: { en: "Vavuniya", ta: "வவுனியா" },
    contact: "024-222-XXXX",
    address: { en: "Station Road, Vavuniya (sample address)", ta: "நிலைய வீதி, வவுனியா (மாதிரி முகவரி)" },
    applicationMode: ["online", "school-referral"],
    hostel: "yes",
    verified: VERIFIED,
    courses: [
      { name: { en: "National Diploma in Teaching — Primary (3 years)", ta: "தேசிய கற்பித்தல் டிப்ளோமா — ஆரம்பப் பிரிவு (3 ஆண்டுகள்)" }, nvqLevel: null, medium: ["tamil"], fee: "free", jobIds: ["primary-teacher"], entry: "al" },
    ],
  },
  {
    id: "nursing-school-jaffna",
    name: { en: "School of Nursing — Jaffna (Ministry of Health)", ta: "தாதியர் பயிற்சிப் பாடசாலை — யாழ்ப்பாணம் (சுகாதார அமைச்சு)" },
    type: "health-institute",
    district: "jaffna",
    town: { en: "Jaffna", ta: "யாழ்ப்பாணம்" },
    contact: "021-222-XXXX",
    address: { en: "Hospital Road, Jaffna (sample address)", ta: "மருத்துவமனை வீதி, யாழ்ப்பாணம் (மாதிரி முகவரி)" },
    applicationMode: ["online"],
    hostel: "yes",
    verified: VERIFIED,
    courses: [
      { name: { en: "Diploma in Nursing (3 years, free + allowance)", ta: "தாதிய டிப்ளோமா (3 ஆண்டுகள், இலவசம் + கொடுப்பனவு)" }, nvqLevel: null, medium: ["english", "tamil"], fee: "free", jobIds: ["nursing-officer"], entry: "al" },
      { name: { en: "Midwifery training (18 months)", ta: "மருத்துவச்சி பயிற்சி (18 மாதங்கள்)" }, nvqLevel: null, medium: ["tamil"], fee: "free", jobIds: ["midwife"], entry: "al" },
    ],
  },
  {
    id: "aat-batticaloa",
    name: { en: "AAT Study Centre — Batticaloa (registered private)", ta: "AAT கற்கை நிலையம் — மட்டக்களப்பு (பதிவு தனியார்)" },
    type: "private",
    district: "batticaloa",
    town: { en: "Batticaloa", ta: "மட்டக்களப்பு" },
    contact: "065-222-XXXX",
    address: { en: "Main Street, Batticaloa (sample address)", ta: "பிரதான வீதி, மட்டக்களப்பு (மாதிரி முகவரி)" },
    applicationMode: ["walkin", "online"],
    hostel: "no",
    verified: VERIFIED,
    courses: [
      { name: { en: "AAT Sri Lanka Levels 1–3", ta: "AAT இலங்கை நிலைகள் 1–3" }, nvqLevel: null, medium: ["tamil", "english"], fee: "moderate", jobIds: ["accounting-technician"], entry: "ol" },
    ],
  },
  {
    id: "yarl-it-hub",
    name: { en: "Yarl IT Hub — Uki Coding School", ta: "Yarl IT Hub — Uki நிரலாக்கப் பாடசாலை" },
    type: "private",
    district: "jaffna",
    town: { en: "Jaffna", ta: "யாழ்ப்பாணம்" },
    contact: "021-222-XXXX",
    address: { en: "Jaffna (sample address)", ta: "யாழ்ப்பாணம் (மாதிரி முகவரி)" },
    applicationMode: ["online"],
    hostel: "no",
    verified: VERIFIED,
    courses: [
      { name: { en: "Uki full-time coding bootcamp (6 months, free)", ta: "Uki முழுநேர நிரலாக்க bootcamp (6 மாதங்கள், இலவசம்)" }, nvqLevel: null, medium: ["tamil", "english"], fee: "free", jobIds: ["software-developer"], entry: "ol" },
    ],
  },
  {
    id: "vta-mullaitivu",
    name: { en: "VTA Rural Vocational Training Centre — Mullaitivu", ta: "VTA கிராமிய தொழிற்பயிற்சி நிலையம் — முல்லைத்தீவு" },
    type: "VTA",
    district: "mullaitivu",
    town: { en: "Mullaitivu", ta: "முல்லைத்தீவு" },
    contact: "021-229-XXXX",
    address: { en: "Puthukkudiyiruppu Road (sample address)", ta: "புதுக்குடியிருப்பு வீதி (மாதிரி முகவரி)" },
    applicationMode: ["walkin", "school-referral"],
    hostel: "unknown",
    verified: VERIFIED,
    courses: [
      { name: { en: "NVQ 3 Automobile Repair", ta: "NVQ 3 வாகனப் பழுதுநீக்கம்" }, nvqLevel: 3, medium: ["tamil"], fee: "free", jobIds: ["automotive-technician"], entry: "none" },
      { name: { en: "NVQ 3 Electrician", ta: "NVQ 3 மின் தொழில்" }, nvqLevel: 3, medium: ["tamil"], fee: "free", jobIds: ["electrician"], entry: "ol" },
    ],
  },
  {
    id: "ictjaffna-private",
    name: { en: "Northern Tech Academy (private accredited)", ta: "வடக்கு தொழில்நுட்பக் கல்விக்கூடம் (தனியார், அங்கீகரிக்கப்பட்டது)" },
    type: "private",
    district: "jaffna",
    town: { en: "Nallur", ta: "நல்லூர்" },
    contact: "021-222-XXXX",
    address: { en: "Point Pedro Road, Nallur (sample address)", ta: "பருத்தித்துறை வீதி, நல்லூர் (மாதிரி முகவரி)" },
    applicationMode: ["online", "walkin"],
    hostel: "no",
    verified: VERIFIED,
    courses: [
      { name: { en: "Certificate in Graphic Design", ta: "வரைகலை வடிவமைப்புச் சான்றிதழ்" }, nvqLevel: null, medium: ["tamil"], fee: "moderate", jobIds: ["graphic-designer"], entry: "ol" },
      { name: { en: "Diploma in Software Engineering", ta: "மென்பொருள் பொறியியல் டிப்ளோமா" }, nvqLevel: null, medium: ["english"], fee: "high", jobIds: ["software-developer"], entry: "ol" },
    ],
  },
];

export function providersForJob(jobId: string, limit = 5): Provider[] {
  return PROVIDERS.filter((p) => p.courses.some((c) => c.jobIds.includes(jobId))).slice(0, limit);
}

export function getProvider(id: string) {
  return PROVIDERS.find((p) => p.id === id);
}
