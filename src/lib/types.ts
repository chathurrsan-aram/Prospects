/** A bilingual string. Tamil values are unreviewed drafts — see TRANSLATIONS.md. */
export type L = { en: string; ta: string };

export type Lang = "en" | "ta";

export type RouteType =
  | "university"
  | "tvet"
  | "apprenticeship"
  | "professional"
  | "workfirst";

export type StudyLevel = "ol" | "al" | "degree" | "certificate" | "none";

export type WorkLanguage = "tamil" | "sinhala" | "english" | "mixed";

export type SectorId =
  | "education"
  | "health"
  | "ict"
  | "construction"
  | "finance"
  | "tourism"
  | "public-service"
  | "trades"
  | "community";

export interface Sector {
  id: SectorId;
  name: L;
  short: L; // one-line student-facing description
  featured: boolean; // appears on the home page strip
}

export type StageBadge = "current" | "reform";

export interface PathwayStage {
  title: L;
  detail: L;
  badge?: StageBadge;
  barriers?: L[];
}

export interface PathwayRoute {
  type: RouteType;
  stages: PathwayStage[];
}

export interface DemandNote {
  text: L;
  source: string;
  verified: L; // human-readable date
  reviewBy: L; // explicit expiry review date (governance requirement)
}

export interface VideoStory {
  available: boolean;
  role: L;
  district: L;
  route: RouteType;
  language: L; // language of interview
  subtitles: L;
  duration?: string;
}

export interface Job {
  id: string;
  title: L;
  sector: SectorId;
  routeTypes: RouteType[];
  short: L; // one-sentence description
  languageNote: L; // e.g. "Tamil required | Sinhala useful"
  workLanguages: WorkLanguage[];
  minStudyLevel: StudyLevel;
  /** districts where demand is concentrated; "all" = island-wide */
  districts: "all" | string[];
  about: L[];
  keySkills: L[];
  digitalSkills: L;
  softSkills: L;
  workplaces: L[];
  informalNote?: L; // shown where formal/informal split is significant
  demand: DemandNote;
  pathway: PathwayRoute[];
  video?: VideoStory;
  verified: L;
  reviewBy: L;
  sourceBasis: L; // e.g. "Based on UGC 2024/25 handbook and TVEC NVQ manual"
}

export type FeeRange = "free" | "low" | "moderate" | "high";

export type ProviderType =
  | "VTA"
  | "DTET"
  | "NAITA"
  | "UoVT"
  | "OUSL"
  | "NCOE"
  | "health-institute"
  | "private";

export type ApplicationMode = "walkin" | "online" | "school-referral";

export interface ProviderCourse {
  name: L;
  nvqLevel: number | null; // null = non-NVQ certificate
  medium: WorkLanguage[];
  fee: FeeRange;
  jobIds: string[]; // job profiles this course is relevant to
  entry: StudyLevel;
}

export interface Provider {
  id: string;
  name: L;
  type: ProviderType;
  district: string;
  town: L;
  courses: ProviderCourse[];
  contact: string;
  address: L;
  applicationMode: ApplicationMode[];
  hostel: "yes" | "no" | "unknown";
  verified: L;
}
