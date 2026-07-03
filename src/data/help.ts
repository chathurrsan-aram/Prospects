import type { L } from "@/lib/types";

/** SAMPLE support directory data for design review — contacts are placeholders. */

const VERIFIED: L = { en: "10 June 2026", ta: "10 ஜூன் 2026" };

export interface CounsellorEntry {
  org: L;
  district: string;
  contact: string;
  languages: L;
  hours: L;
  source: string;
  verified: L;
}

export const COUNSELLORS: CounsellorEntry[] = [
  {
    org: { en: "MOE Zonal Education Office — Jaffna (guidance unit)", ta: "கல்வி வலயக் காரியாலயம் — யாழ்ப்பாணம் (வழிகாட்டல் பிரிவு)" },
    district: "jaffna",
    contact: "021-222-XXXX",
    languages: { en: "Tamil, English", ta: "தமிழ், ஆங்கிலம்" },
    hours: { en: "Mon–Fri 8.30–4.15", ta: "திங்கள்–வெள்ளி 8.30–4.15" },
    source: "MOE zonal directory (sample)",
    verified: VERIFIED,
  },
  {
    org: { en: "MOE Zonal Education Office — Kilinochchi (guidance unit)", ta: "கல்வி வலயக் காரியாலயம் — கிளிநொச்சி (வழிகாட்டல் பிரிவு)" },
    district: "kilinochchi",
    contact: "021-228-XXXX",
    languages: { en: "Tamil", ta: "தமிழ்" },
    hours: { en: "Mon–Fri 8.30–4.15", ta: "திங்கள்–வெள்ளி 8.30–4.15" },
    source: "MOE zonal directory (sample)",
    verified: VERIFIED,
  },
  {
    org: { en: "MOE Zonal Education Office — Batticaloa (guidance unit)", ta: "கல்வி வலயக் காரியாலயம் — மட்டக்களப்பு (வழிகாட்டல் பிரிவு)" },
    district: "batticaloa",
    contact: "065-222-XXXX",
    languages: { en: "Tamil, Sinhala", ta: "தமிழ், சிங்களம்" },
    hours: { en: "Mon–Fri 8.30–4.15", ta: "திங்கள்–வெள்ளி 8.30–4.15" },
    source: "MOE zonal directory (sample)",
    verified: VERIFIED,
  },
  {
    org: { en: "MOE Zonal Education Office — Trincomalee (guidance unit)", ta: "கல்வி வலயக் காரியாலயம் — திருகோணமலை (வழிகாட்டல் பிரிவு)" },
    district: "trincomalee",
    contact: "026-222-XXXX",
    languages: { en: "Tamil, Sinhala, English", ta: "தமிழ், சிங்களம், ஆங்கிலம்" },
    hours: { en: "Mon–Fri 8.30–4.15", ta: "திங்கள்–வெள்ளி 8.30–4.15" },
    source: "MOE zonal directory (sample)",
    verified: VERIFIED,
  },
  {
    org: { en: "MOE Zonal Education Office — Vavuniya (guidance unit)", ta: "கல்வி வலயக் காரியாலயம் — வவுனியா (வழிகாட்டல் பிரிவு)" },
    district: "vavuniya",
    contact: "024-222-XXXX",
    languages: { en: "Tamil, Sinhala", ta: "தமிழ், சிங்களம்" },
    hours: { en: "Mon–Fri 8.30–4.15", ta: "திங்கள்–வெள்ளி 8.30–4.15" },
    source: "MOE zonal directory (sample)",
    verified: VERIFIED,
  },
  {
    org: { en: "MOE Zonal Education Office — Mullaitivu (guidance unit)", ta: "கல்வி வலயக் காரியாலயம் — முல்லைத்தீவு (வழிகாட்டல் பிரிவு)" },
    district: "mullaitivu",
    contact: "021-229-XXXX",
    languages: { en: "Tamil", ta: "தமிழ்" },
    hours: { en: "Mon–Fri 8.30–4.15", ta: "திங்கள்–வெள்ளி 8.30–4.15" },
    source: "MOE zonal directory (sample)",
    verified: VERIFIED,
  },
];

export interface Scholarship {
  name: L;
  provider: L;
  eligibility: L;
  covers: L; // university / TVET / both
  deadline: L;
  applicationLanguage: L;
  source: string;
  verified: L;
}

export const SCHOLARSHIPS: Scholarship[] = [
  {
    name: { en: "Mahapola Scholarship", ta: "மகாபொல புலமைப்பரிசில்" },
    provider: { en: "Mahapola Trust Fund", ta: "மகாபொல நம்பிக்கை நிதியம்" },
    eligibility: {
      en: "UGC-admitted undergraduates, selected on merit and family income",
      ta: "UGC அனுமதி பெற்ற இளங்கலை மாணவர்கள்; தகுதி, குடும்ப வருமான அடிப்படையில்",
    },
    covers: { en: "University", ta: "பல்கலைக்கழகம்" },
    deadline: { en: "After UGC registration each intake", ta: "ஒவ்வொரு அனுமதியிலும் UGC பதிவுக்குப் பின்" },
    applicationLanguage: { en: "Sinhala / Tamil / English forms", ta: "சிங்களம் / தமிழ் / ஆங்கிலப் படிவங்கள்" },
    source: "Mahapola Trust notices (sample)",
    verified: VERIFIED,
  },
  {
    name: { en: "UGC Bursary", ta: "UGC உதவுதொகை (Bursary)" },
    provider: { en: "University Grants Commission", ta: "பல்கலைக்கழக மானியங்கள் ஆணைக்குழு" },
    eligibility: {
      en: "Undergraduates with low family income who do not hold Mahapola",
      ta: "மகாபொல பெறாத, குறைந்த குடும்ப வருமானமுள்ள இளங்கலை மாணவர்கள்",
    },
    covers: { en: "University", ta: "பல்கலைக்கழகம்" },
    deadline: { en: "With university registration", ta: "பல்கலைக்கழகப் பதிவுடன்" },
    applicationLanguage: { en: "Sinhala / Tamil / English forms", ta: "சிங்களம் / தமிழ் / ஆங்கிலப் படிவங்கள்" },
    source: "UGC circulars (sample)",
    verified: VERIFIED,
  },
  {
    name: { en: "TVEC / Ministry skills-training allowances", ta: "TVEC / அமைச்சு திறன் பயிற்சிக் கொடுப்பனவுகள்" },
    provider: { en: "TVEC and training ministries", ta: "TVEC மற்றும் பயிற்சி அமைச்சுகள்" },
    eligibility: {
      en: "Students on selected NVQ and apprenticeship programmes (varies by scheme)",
      ta: "தேர்ந்தெடுக்கப்பட்ட NVQ, பயிலுநர் திட்ட மாணவர்கள் (திட்டம் வாரியாக மாறும்)",
    },
    covers: { en: "TVET", ta: "தொழிற்கல்வி" },
    deadline: { en: "With course enrolment", ta: "பாடநெறி சேர்க்கையுடன்" },
    applicationLanguage: { en: "Sinhala / Tamil forms", ta: "சிங்களம் / தமிழ் படிவங்கள்" },
    source: "TVEC gazette (sample)",
    verified: VERIFIED,
  },
];

export interface OfficialContact {
  name: L;
  role: L;
  contact: string;
  districts: L;
  languages: L;
  verified: L;
}

export const OFFICIAL_CONTACTS: OfficialContact[] = [
  {
    name: { en: "UGC application support", ta: "UGC விண்ணப்ப உதவி" },
    role: { en: "University admission questions and preference-form help", ta: "பல்கலைக்கழக அனுமதி கேள்விகள், விருப்பப் படிவ உதவி" },
    contact: "011-269-XXXX · www.ugc.ac.lk",
    districts: { en: "Island-wide", ta: "நாடு முழுவதும்" },
    languages: { en: "Sinhala, Tamil, English", ta: "சிங்களம், தமிழ், ஆங்கிலம்" },
    verified: VERIFIED,
  },
  {
    name: { en: "TVEC provider registry", ta: "TVEC நிறுவனப் பதிவகம்" },
    role: { en: "Check whether a training provider is registered and accredited", ta: "பயிற்சி நிறுவனம் பதிவு, அங்கீகாரம் பெற்றதா எனச் சரிபார்க்க" },
    contact: "011-555-XXXX · www.tvec.gov.lk",
    districts: { en: "Island-wide", ta: "நாடு முழுவதும்" },
    languages: { en: "Sinhala, Tamil, English", ta: "சிங்களம், தமிழ், ஆங்கிலம்" },
    verified: VERIFIED,
  },
  {
    name: { en: "NAITA regional office — Northern Province", ta: "NAITA பிராந்திய அலுவலகம் — வட மாகாணம்" },
    role: { en: "Apprenticeship placement and trade-test questions", ta: "பயிலுநர் பயிற்சி இடம், தொழில் தேர்வு கேள்விகள்" },
    contact: "021-222-XXXX",
    districts: { en: "Jaffna, Kilinochchi, Mullaitivu, Mannar, Vavuniya", ta: "யாழ்ப்பாணம், கிளிநொச்சி, முல்லைத்தீவு, மன்னார், வவுனியா" },
    languages: { en: "Tamil, Sinhala", ta: "தமிழ், சிங்களம்" },
    verified: VERIFIED,
  },
  {
    name: { en: "OUSL regional centres", ta: "OUSL பிராந்திய நிலையங்கள்" },
    role: { en: "Open-entry degree guidance and application-season support", ta: "திறந்த நுழைவுப் பட்ட வழிகாட்டல், விண்ணப்ப கால உதவி" },
    contact: "011-288-XXXX · www.ou.ac.lk",
    districts: { en: "Jaffna, Batticaloa, Trincomalee + island-wide", ta: "யாழ்ப்பாணம், மட்டக்களப்பு, திருகோணமலை + நாடு முழுவதும்" },
    languages: { en: "Tamil, Sinhala, English", ta: "தமிழ், சிங்களம், ஆங்கிலம்" },
    verified: VERIFIED,
  },
];
