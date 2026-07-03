import type { L, RouteType, SectorId } from "@/lib/types";

/**
 * Career quiz (spec 12): ~10 questions, one at a time, advisory results.
 * Options add weight to role clusters. Profile questions (stage, language,
 * income) don't score clusters — they shape the route notes on results.
 */

export type ClusterId =
  | "education-care"
  | "health-support"
  | "digital-ict"
  | "trades-technical"
  | "business-finance"
  | "service-tourism";

export interface QuizCluster {
  id: ClusterId;
  label: L;
  blurb: L;
  sector: SectorId;
  jobIds: string[];
  routeTypes: RouteType[];
}

export interface QuizOption {
  label: L;
  /** clusters this option adds weight to */
  weights: Partial<Record<ClusterId, number>>;
  /** shown under "Why this matched" when this option contributed */
  reason: L;
}

export interface QuizQuestion {
  id: string;
  text: L;
  options: QuizOption[];
  /** profile questions collect context instead of scoring */
  profile?: "stage" | "language" | "income";
}

export const CLUSTERS: QuizCluster[] = [
  {
    id: "education-care",
    label: { en: "Teaching and education roles", ta: "கற்பித்தல், கல்விப் பணிகள்" },
    blurb: {
      en: "Roles where you help others learn and grow — in schools, preschools, and community programmes.",
      ta: "மற்றவர்கள் கற்று வளர உதவும் பணிகள் — பாடசாலைகள், முன்பள்ளிகள், சமூகத் திட்டங்களில்.",
    },
    sector: "education",
    jobIds: ["primary-teacher", "community-development-officer"],
    routeTypes: ["university", "professional"],
  },
  {
    id: "health-support",
    label: { en: "Health and care roles", ta: "சுகாதார, பராமரிப்புப் பணிகள்" },
    blurb: {
      en: "Roles caring for people's health — in hospitals, clinics, and the community.",
      ta: "மக்களின் உடல்நலத்தைப் பராமரிக்கும் பணிகள் — மருத்துவமனைகள், கிளினிக்குகள், சமூகத்தில்.",
    },
    sector: "health",
    jobIds: ["nursing-officer", "midwife"],
    routeTypes: ["university", "tvet"],
  },
  {
    id: "digital-ict",
    label: { en: "Digital and ICT roles", ta: "டிஜிட்டல், ICT பணிகள்" },
    blurb: {
      en: "Roles built around computers and creativity — software, design, and digital services.",
      ta: "கணினியும் படைப்பாற்றலும் சார்ந்த பணிகள் — மென்பொருள், வடிவமைப்பு, டிஜிட்டல் சேவைகள்.",
    },
    sector: "ict",
    jobIds: ["software-developer", "graphic-designer"],
    routeTypes: ["university", "tvet", "professional", "workfirst"],
  },
  {
    id: "trades-technical",
    label: { en: "Technical and trades roles", ta: "தொழில்நுட்ப, கைத்தொழில் பணிகள்" },
    blurb: {
      en: "Skilled hands-on roles — electrical, automotive, and construction work with real earning routes.",
      ta: "திறன்மிக்க நேரடிக் கைவேலைப் பணிகள் — மின், வாகனம், கட்டுமானம்; உண்மையான வருமான வழிகளுடன்.",
    },
    sector: "construction",
    jobIds: ["electrician", "automotive-technician", "quantity-surveyor"],
    routeTypes: ["tvet", "apprenticeship", "workfirst"],
  },
  {
    id: "business-finance",
    label: { en: "Business and finance roles", ta: "வணிக, நிதிப் பணிகள்" },
    blurb: {
      en: "Roles working with numbers, money, and organisation — open from O/L through professional bodies.",
      ta: "எண்கள், பணம், ஒழுங்கமைப்பு சார்ந்த பணிகள் — சா/த முதல் தொழில்சார் அமைப்புகள் வழியாகத் திறந்தவை.",
    },
    sector: "finance",
    jobIds: ["accounting-technician"],
    routeTypes: ["professional", "university"],
  },
  {
    id: "service-tourism",
    label: { en: "Hospitality and service roles", ta: "விருந்தோம்பல், சேவைப் பணிகள்" },
    blurb: {
      en: "People-facing roles in hotels, travel, and services — with quick entry and fast progression.",
      ta: "ஹோட்டல், பயணம், சேவைகளில் மக்களை நேரடியாகச் சந்திக்கும் பணிகள் — விரைவான நுழைவும் முன்னேற்றமும்.",
    },
    sector: "tourism",
    jobIds: ["hotel-front-office", "community-development-officer"],
    routeTypes: ["tvet", "workfirst"],
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "subjects",
    text: { en: "Which school subjects do you enjoy most?", ta: "பாடசாலையில் எந்தப் பாடங்களை அதிகம் விரும்புகிறீர்கள்?" },
    options: [
      {
        label: { en: "Science and biology", ta: "விஞ்ஞானம், உயிரியல்" },
        weights: { "health-support": 2, "digital-ict": 1 },
        reason: { en: "you enjoy science subjects", ta: "விஞ்ஞானப் பாடங்களை விரும்புகிறீர்கள்" },
      },
      {
        label: { en: "Maths and commerce", ta: "கணிதம், வர்த்தகம்" },
        weights: { "business-finance": 2, "digital-ict": 1, "trades-technical": 1 },
        reason: { en: "you enjoy maths and commerce", ta: "கணிதம், வர்த்தகத்தை விரும்புகிறீர்கள்" },
      },
      {
        label: { en: "Languages, history, and religion", ta: "மொழிகள், வரலாறு, சமயம்" },
        weights: { "education-care": 2, "service-tourism": 1 },
        reason: { en: "you enjoy languages and humanities", ta: "மொழிகளும் மனிதவியலும் உங்களுக்குப் பிடிக்கும்" },
      },
      {
        label: { en: "Practical and technical subjects", ta: "நடைமுறை, தொழில்நுட்பப் பாடங்கள்" },
        weights: { "trades-technical": 2, "digital-ict": 1 },
        reason: { en: "you enjoy practical subjects", ta: "நடைமுறைப் பாடங்களை விரும்புகிறீர்கள்" },
      },
    ],
  },
  {
    id: "environment",
    text: { en: "Where would you most like to work?", ta: "எங்கு வேலை செய்ய அதிகம் விரும்புவீர்கள்?" },
    options: [
      {
        label: { en: "With people, face to face", ta: "மக்களுடன், நேருக்கு நேர்" },
        weights: { "education-care": 2, "health-support": 1, "service-tourism": 2 },
        reason: { en: "you like working with people", ta: "மக்களுடன் வேலை செய்வது பிடிக்கும்" },
      },
      {
        label: { en: "With my hands, on sites or outdoors", ta: "கைகளால், தளங்களில் அல்லது வெளியில்" },
        weights: { "trades-technical": 2 },
        reason: { en: "you like hands-on work", ta: "நேரடிக் கைவேலை பிடிக்கும்" },
      },
      {
        label: { en: "At a computer, in an office or at home", ta: "கணினியில், அலுவலகத்தில் அல்லது வீட்டில்" },
        weights: { "digital-ict": 2, "business-finance": 1 },
        reason: { en: "you like computer-based work", ta: "கணினி சார்ந்த வேலை பிடிக்கும்" },
      },
      {
        label: { en: "Moving around my community", ta: "என் சமூகத்தில் நடமாடியபடி" },
        weights: { "health-support": 2, "education-care": 1, "service-tourism": 1 },
        reason: { en: "you like being active in your community", ta: "சமூகத்தில் செயற்படுவது பிடிக்கும்" },
      },
    ],
  },
  {
    id: "satisfaction",
    text: { en: "What would feel most satisfying at the end of a day?", ta: "ஒரு நாளின் முடிவில் எது மிகுந்த திருப்தி தரும்?" },
    options: [
      {
        label: { en: "I helped someone learn something", ta: "ஒருவர் கற்க உதவினேன்" },
        weights: { "education-care": 2 },
        reason: { en: "helping people learn matters to you", ta: "மக்கள் கற்க உதவுவது உங்களுக்கு முக்கியம்" },
      },
      {
        label: { en: "I cared for someone who was unwell", ta: "உடல்நலமில்லாத ஒருவரைப் பராமரித்தேன்" },
        weights: { "health-support": 2 },
        reason: { en: "caring for others matters to you", ta: "மற்றவர்களைப் பராமரிப்பது உங்களுக்கு முக்கியம்" },
      },
      {
        label: { en: "I built or fixed something real", ta: "உண்மையான ஒன்றை உருவாக்கினேன் அல்லது சரி செய்தேன்" },
        weights: { "trades-technical": 2, "digital-ict": 1 },
        reason: { en: "building and fixing things satisfies you", ta: "உருவாக்குவதும் சரிசெய்வதும் திருப்தி தரும்" },
      },
      {
        label: { en: "I organised something so it ran smoothly", ta: "ஒன்றை ஒழுங்குபடுத்தி சீராக நடத்தினேன்" },
        weights: { "business-finance": 2, "service-tourism": 1 },
        reason: { en: "organising things well satisfies you", ta: "ஒழுங்குபடுத்துவது திருப்தி தரும்" },
      },
    ],
  },
  {
    id: "computers",
    text: { en: "How do you feel about working with computers all day?", ta: "நாள் முழுவதும் கணினியுடன் வேலை செய்வது பற்றி என்ன நினைக்கிறீர்கள்?" },
    options: [
      {
        label: { en: "I'd love it", ta: "மிகவும் விரும்புவேன்" },
        weights: { "digital-ict": 2 },
        reason: { en: "you want computer-centred work", ta: "கணினி மையமான வேலையை விரும்புகிறீர்கள்" },
      },
      {
        label: { en: "Fine as part of the job", ta: "வேலையின் ஒரு பகுதியாக இருந்தால் பரவாயில்லை" },
        weights: { "business-finance": 1, "education-care": 1 },
        reason: { en: "you're comfortable using computers", ta: "கணினிப் பயன்பாட்டில் வசதியாக உள்ளீர்கள்" },
      },
      {
        label: { en: "I'd rather do practical work", ta: "நடைமுறை வேலையே விரும்புவேன்" },
        weights: { "trades-technical": 2 },
        reason: { en: "you prefer practical work over screens", ta: "திரைகளை விட நடைமுறை வேலையை விரும்புகிறீர்கள்" },
      },
      {
        label: { en: "I'd rather be with people", ta: "மக்களுடன் இருப்பதையே விரும்புவேன்" },
        weights: { "health-support": 1, "service-tourism": 1, "education-care": 1 },
        reason: { en: "you prefer being with people", ta: "மக்களுடன் இருப்பதை விரும்புகிறீர்கள்" },
      },
    ],
  },
  {
    id: "pressure",
    text: { en: "Which situation would you handle best?", ta: "எந்தச் சூழலை நீங்கள் சிறப்பாகக் கையாள்வீர்கள்?" },
    options: [
      {
        label: { en: "A classroom of 30 children", ta: "30 பிள்ளைகள் கொண்ட வகுப்பறை" },
        weights: { "education-care": 2 },
        reason: { en: "you can hold a group's attention", ta: "ஒரு குழுவின் கவனத்தைத் தக்கவைக்க முடியும்" },
      },
      {
        label: { en: "An emergency where someone needs help", ta: "ஒருவருக்கு உதவி தேவைப்படும் அவசர நிலை" },
        weights: { "health-support": 2 },
        reason: { en: "you stay calm when others need help", ta: "பிறருக்கு உதவி தேவைப்படும்போது அமைதியாக இருப்பீர்கள்" },
      },
      {
        label: { en: "A machine that stopped working before a deadline", ta: "காலக்கெடுவுக்கு முன் நின்றுபோன இயந்திரம்" },
        weights: { "trades-technical": 2, "digital-ict": 1 },
        reason: { en: "you like solving urgent technical problems", ta: "அவசர தொழில்நுட்பச் சிக்கல்களைத் தீர்ப்பது பிடிக்கும்" },
      },
      {
        label: { en: "An unhappy customer who needs a solution", ta: "தீர்வு தேவைப்படும் அதிருப்தி வாடிக்கையாளர்" },
        weights: { "service-tourism": 2, "business-finance": 1 },
        reason: { en: "you're good at calming and helping customers", ta: "வாடிக்கையாளர்களை அமைதிப்படுத்தி உதவுவதில் திறமை" },
      },
    ],
  },
  {
    id: "travel",
    text: { en: "Would you move districts or work abroad for the right job?", ta: "சரியான வேலைக்காக மாவட்டம் மாறுவீர்களா அல்லது வெளிநாட்டில் வேலை செய்வீர்களா?" },
    options: [
      {
        label: { en: "Yes, I'd go anywhere", ta: "ஆம், எங்கும் செல்வேன்" },
        weights: { "trades-technical": 1, "service-tourism": 1, "health-support": 1 },
        reason: { en: "you're open to relocating for work", ta: "வேலைக்காக இடம் மாற தயாராக உள்ளீர்கள்" },
      },
      {
        label: { en: "Within Sri Lanka, yes", ta: "இலங்கைக்குள் என்றால் ஆம்" },
        weights: { "education-care": 1, "business-finance": 1 },
        reason: { en: "you're flexible within Sri Lanka", ta: "இலங்கைக்குள் நெகிழ்வாக உள்ளீர்கள்" },
      },
      {
        label: { en: "I want to stay near my home town", ta: "என் ஊருக்கு அருகிலேயே இருக்க விரும்புகிறேன்" },
        weights: { "health-support": 1, "education-care": 1, "trades-technical": 1 },
        reason: { en: "staying near home matters to you", ta: "ஊருக்கு அருகில் இருப்பது முக்கியம்" },
      },
      {
        label: { en: "I'd like work I can do from home", ta: "வீட்டிலிருந்து செய்யக்கூடிய வேலை வேண்டும்" },
        weights: { "digital-ict": 2 },
        reason: { en: "you want work that can be done remotely", ta: "தொலைநிலையில் செய்யக்கூடிய வேலையை விரும்புகிறீர்கள்" },
      },
    ],
  },
  {
    id: "study-length",
    text: { en: "How long are you willing to study or train before earning?", ta: "சம்பாதிக்கும் முன் எவ்வளவு காலம் படிக்க/பயிற்சி பெறத் தயார்?" },
    options: [
      {
        label: { en: "3–4 years for a degree is fine", ta: "பட்டத்திற்காக 3–4 ஆண்டுகள் பரவாயில்லை" },
        weights: { "education-care": 1, "health-support": 1, "business-finance": 1 },
        reason: { en: "you're ready for longer study", ta: "நீண்ட கல்விக்குத் தயாராக உள்ளீர்கள்" },
      },
      {
        label: { en: "1–2 years of focused training", ta: "1–2 ஆண்டுகள் குவிந்த பயிற்சி" },
        weights: { "trades-technical": 1, "digital-ict": 1, "service-tourism": 1 },
        reason: { en: "you want focused, shorter training", ta: "குறுகிய, குவிந்த பயிற்சியை விரும்புகிறீர்கள்" },
      },
      {
        label: { en: "I want to earn while I learn", ta: "கற்கும்போதே சம்பாதிக்க வேண்டும்" },
        weights: { "trades-technical": 2, "service-tourism": 1 },
        reason: { en: "earning while learning matters to you", ta: "கற்கும்போதே சம்பாதிப்பது முக்கியம்" },
      },
      {
        label: { en: "I want to start working right away", ta: "உடனே வேலை தொடங்க வேண்டும்" },
        weights: { "service-tourism": 2, "trades-technical": 1 },
        reason: { en: "you want to start working soon", ta: "விரைவில் வேலை தொடங்க விரும்புகிறீர்கள்" },
      },
    ],
  },
  {
    id: "income",
    profile: "income",
    text: { en: "Does earning an income during training matter for your family situation?", ta: "உங்கள் குடும்பச் சூழலுக்குப் பயிற்சிக் காலத்தில் வருமானம் முக்கியமா?" },
    options: [
      { label: { en: "Yes, it's essential", ta: "ஆம், அத்தியாவசியம்" }, weights: {}, reason: { en: "", ta: "" } },
      { label: { en: "It would help a lot", ta: "மிகவும் உதவியாக இருக்கும்" }, weights: {}, reason: { en: "", ta: "" } },
      { label: { en: "No, my family can support my study", ta: "இல்லை, குடும்பம் என் படிப்பை ஆதரிக்கும்" }, weights: {}, reason: { en: "", ta: "" } },
    ],
  },
  {
    id: "language",
    profile: "language",
    text: { en: "Which study language are you most comfortable in?", ta: "எந்த மொழியில் படிப்பது உங்களுக்கு வசதியானது?" },
    options: [
      { label: { en: "Tamil medium", ta: "தமிழ் மொழிமூலம்" }, weights: {}, reason: { en: "", ta: "" } },
      { label: { en: "Mixed — Tamil with some English", ta: "கலப்பு — தமிழுடன் சிறிது ஆங்கிலம்" }, weights: {}, reason: { en: "", ta: "" } },
      { label: { en: "English medium is fine", ta: "ஆங்கில மொழிமூலம் பரவாயில்லை" }, weights: {}, reason: { en: "", ta: "" } },
    ],
  },
  {
    id: "stage",
    profile: "stage",
    text: { en: "Where are you right now?", ta: "நீங்கள் இப்போது எந்த நிலையில் இருக்கிறீர்கள்?" },
    options: [
      { label: { en: "Doing or finished O/L", ta: "சா/த படிக்கிறேன் அல்லது முடித்தேன்" }, weights: {}, reason: { en: "", ta: "" } },
      { label: { en: "Doing or finished A/L", ta: "உ/த படிக்கிறேன் அல்லது முடித்தேன்" }, weights: {}, reason: { en: "", ta: "" } },
      { label: { en: "Left school / working", ta: "பாடசாலையை விட்டேன் / வேலையில்" }, weights: {}, reason: { en: "", ta: "" } },
      { label: { en: "Not sure", ta: "உறுதியில்லை" }, weights: {}, reason: { en: "", ta: "" } },
    ],
  },
];

/** Route-note shown on results when income-during-training was essential. */
export const INCOME_NOTE: L = {
  en: "You said earning during training matters: look first at apprenticeship and work-first routes, and at free residential courses with allowances.",
  ta: "பயிற்சியின்போது வருமானம் முக்கியம் என்றீர்கள்: முதலில் பயிலுநர் பயிற்சி, வேலை-முதல் வழிகளையும், கொடுப்பனவுடன் கூடிய இலவசப் பாடநெறிகளையும் பாருங்கள்.",
};

export const TAMIL_MEDIUM_NOTE: L = {
  en: "You prefer Tamil-medium study: check the medium-of-instruction note on each pathway — many NVQ courses run in Tamil up to Level 4.",
  ta: "தமிழ் மொழிமூலக் கல்வியை விரும்புகிறீர்கள்: ஒவ்வொரு பாதையிலும் கற்பித்தல் மொழிக் குறிப்பைப் பாருங்கள் — பல NVQ பாடநெறிகள் நிலை 4 வரை தமிழில் நடைபெறுகின்றன.",
};
