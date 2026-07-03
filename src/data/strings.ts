import type { L, RouteType, StudyLevel, WorkLanguage, FeeRange } from "@/lib/types";

/**
 * All UI strings, bilingual. Tamil values are DRAFT translations written for
 * prototyping — they must go through subject-expert review before launch
 * (spec 17.4). See TRANSLATIONS.md.
 */
export const S = {
  siteName: { en: "ARAM Initiative", ta: "ஆரம் முன்னெடுப்பு" },
  tagline: {
    en: "Careers guidance for Sri Lankan students",
    ta: "இலங்கை மாணவர்களுக்கான தொழில் வழிகாட்டல்",
  },
  mission: {
    en: "ARAM connects students in Northern and Eastern Sri Lanka with clear, verified information and mentors — so every young person can choose their own path.",
    ta: "வட, கிழக்கு இலங்கை மாணவர்களுக்கு தெளிவான, சரிபார்க்கப்பட்ட தகவலையும் வழிகாட்டிகளையும் ஆரம் இணைக்கிறது — ஒவ்வொரு இளையவரும் தமது சொந்தப் பாதையைத் தேர்ந்தெடுக்க.",
  },

  // Navigation
  navHome: { en: "Home", ta: "முகப்பு" },
  navExplore: { en: "Explore Careers", ta: "தொழில்களை ஆராய" },
  navPathways: { en: "Pathways", ta: "பாதைகள்" },
  navTraining: { en: "Training Finder", ta: "பயிற்சி தேடல்" },
  navQuiz: { en: "Career Quiz", ta: "தொழில் வினாடி வினா" },
  navHelp: { en: "Get Help", ta: "உதவி பெற" },
  navSaved: { en: "Your saved roles", ta: "சேமித்த தொழில்கள்" },
  menu: { en: "Menu", ta: "பட்டியல்" },
  skipToContent: { en: "Skip to main content", ta: "முதன்மை உள்ளடக்கத்திற்குச் செல்ல" },

  // Accessibility panel
  a11yTitle: { en: "Display settings", ta: "காட்சி அமைப்புகள்" },
  a11yDark: { en: "Dark mode", ta: "இருண்ட பயன்முறை" },
  a11yContrast: { en: "High contrast", ta: "உயர் மாறுபாடு" },
  a11yInvert: { en: "Invert colours", ta: "நிறங்களை மாற்று" },
  a11yTextSize: { en: "Text size", ta: "எழுத்து அளவு" },
  a11yNormal: { en: "Normal", ta: "இயல்பு" },
  a11yLarge: { en: "Large", ta: "பெரியது" },
  a11yXLarge: { en: "Extra large", ta: "மிகப் பெரியது" },

  // Footer
  footerAbout: { en: "About", ta: "எம்மைப் பற்றி" },
  footerSources: { en: "Source policy", ta: "மூலக் கொள்கை" },
  footerPrivacy: { en: "Privacy notice", ta: "தனியுரிமை அறிவிப்பு" },
  footerSafeguarding: { en: "Safeguarding", ta: "பாதுகாப்பு" },
  footerContact: { en: "Contact", ta: "தொடர்பு" },
  footerReview: { en: "Last site-wide review", ta: "கடைசி முழுதள மீளாய்வு" },
  footerNextReview: { en: "Next scheduled review", ta: "அடுத்த திட்டமிட்ட மீளாய்வு" },
  footerVersion: { en: "Version", ta: "பதிப்பு" },
  footerPartners: { en: "Partners", ta: "பங்காளர்கள்" },
  footerCopyright: {
    en: "© 2026 ARAM Initiative. Prototype for internal review — sample data only.",
    ta: "© 2026 ஆரம் முன்னெடுப்பு. உள்ளக மீளாய்வுக்கான முன்மாதிரி — மாதிரித் தரவுகள் மட்டும்.",
  },
  dataProtection: { en: "Data protection notice", ta: "தரவுப் பாதுகாப்பு அறிவிப்பு" },

  // Governance meta line
  lastVerified: { en: "Last verified", ta: "கடைசியாகச் சரிபார்க்கப்பட்டது" },
  nextReview: { en: "Next review", ta: "அடுத்த மீளாய்வு" },

  // Common actions
  save: { en: "Save", ta: "சேமி" },
  saved: { en: "Saved", ta: "சேமிக்கப்பட்டது" },
  compare: { en: "Compare", ta: "ஒப்பிடு" },
  share: { en: "Share", ta: "பகிர்" },
  search: { en: "Search", ta: "தேடு" },
  resetAll: { en: "Reset all", ta: "அனைத்தையும் மீட்டமை" },
  viewDetails: { en: "View details", ta: "விவரங்களைப் பார்க்க" },
  seeAll: { en: "See all", ta: "அனைத்தையும் பார்க்க" },
  back: { en: "Back", ta: "பின்செல்" },
  next: { en: "Next", ta: "அடுத்து" },
  startAgain: { en: "Start again", ta: "மீண்டும் தொடங்கு" },
  downloadPdf: { en: "Download as PDF", ta: "PDF ஆகப் பதிவிறக்க" },
  comingSoon: { en: "Coming soon", ta: "விரைவில்" },
  transcript: { en: "Transcript", ta: "எழுத்து வடிவம்" },
  results: { en: "results", ta: "முடிவுகள்" },
  showing: { en: "Showing", ta: "காட்டப்படுவது" },
  of: { en: "of", ta: "இல்" },
  filters: { en: "Filters", ta: "வடிப்பான்கள்" },
  close: { en: "Close", ta: "மூடு" },
  remove: { en: "Remove", ta: "நீக்கு" },

  // Filter labels
  filterSector: { en: "Sector", ta: "துறை" },
  filterRoute: { en: "Route type", ta: "பாதை வகை" },
  filterDistrict: { en: "District", ta: "மாவட்டம்" },
  filterWorkLanguage: { en: "Language required at work", ta: "வேலையில் தேவையான மொழி" },
  filterStudyLevel: { en: "Study level required", ta: "தேவையான கல்வி நிலை" },
  allDistricts: { en: "All districts", ta: "அனைத்து மாவட்டங்களும்" },
  any: { en: "Any", ta: "எதுவும்" },
  noResults: {
    en: "No roles match these filters. Try removing one filter, or try a neighbouring district.",
    ta: "இந்த வடிப்பான்களுக்குப் பொருந்தும் தொழில்கள் இல்லை. ஒரு வடிப்பானை நீக்கவும், அல்லது அயல் மாவட்டத்தை முயற்சிக்கவும்.",
  },

  // Job profile blocks
  aboutRole: { en: "About this role", ta: "இந்தத் தொழிலைப் பற்றி" },
  skillsLanguages: { en: "Skills and languages", ta: "திறன்களும் மொழிகளும்" },
  keySkills: { en: "Key skills", ta: "முக்கிய திறன்கள்" },
  workplaceLanguages: { en: "Workplace languages", ta: "பணியிட மொழிகள்" },
  digitalSkills: { en: "Digital skills", ta: "டிஜிட்டல் திறன்கள்" },
  softSkills: { en: "Soft skills", ta: "மென் திறன்கள்" },
  typicalWorkplaces: { en: "Typical workplaces", ta: "வழக்கமான பணியிடங்கள்" },
  demandNote: { en: "Demand note", ta: "தேவை குறிப்பு" },
  demandExpiry: { en: "This note expires for review on", ta: "இக்குறிப்பு மீளாய்வுக்குரிய திகதி" },
  pathwayMap: { en: "Pathway map", ta: "பாதை வரைபடம்" },
  pathwayIntro: {
    en: "Realistic routes from where you are now to this role. Follow one track from top to bottom.",
    ta: "நீங்கள் இப்போது இருக்கும் இடத்திலிருந்து இந்தத் தொழிலுக்கான நடைமுறை வழிகள். ஒரு பாதையை மேலிருந்து கீழாகப் பின்பற்றுங்கள்.",
  },
  downloadPathway: { en: "Download this pathway as PDF", ta: "இந்தப் பாதையை PDF ஆகப் பதிவிறக்க" },
  trainingProviders: { en: "Training providers for this role", ta: "இத்தொழிலுக்கான பயிற்சி நிறுவனங்கள்" },
  seeAllProviders: { en: "See all providers", ta: "அனைத்து நிறுவனங்களையும் பார்க்க" },
  videoInterview: { en: "Video interview", ta: "காணொளி நேர்காணல்" },
  videoComingSoon: {
    en: "No video for this role yet. Are you working in this role? Ask us about recording an interview.",
    ta: "இத்தொழிலுக்கான காணொளி இன்னும் இல்லை. நீங்கள் இத்தொழிலில் இருக்கிறீர்களா? நேர்காணல் பதிவு பற்றி எங்களைக் கேளுங்கள்.",
  },
  nextSteps: { en: "Your next step", ta: "உங்கள் அடுத்த படி" },
  saveRole: { en: "Save this role", ta: "இத்தொழிலைச் சேமி" },
  compareRole: { en: "Compare with another role", ta: "வேறொரு தொழிலுடன் ஒப்பிடு" },
  findProvider: { en: "Find a training provider", ta: "பயிற்சி நிறுவனத்தைத் தேடு" },
  askAram: { en: "Ask ARAM (mentoring)", ta: "ஆரம்-இடம் கேளுங்கள் (வழிகாட்டல்)" },
  getHelp: { en: "Get help", ta: "உதவி பெற" },
  barrier: { en: "Barrier", ta: "தடை" },
  currentBadge: { en: "CURRENT", ta: "தற்போதைய" },
  reformBadge: { en: "REFORM", ta: "சீர்திருத்தம்" },
  minimumEntry: { en: "Minimum entry", ta: "குறைந்தபட்ச நுழைவு" },
  chooseRoleToCompare: { en: "Choose a role to compare", ta: "ஒப்பிட ஒரு தொழிலைத் தேர்ந்தெடுங்கள்" },

  // Home page
  heroHeadline: {
    en: "Find your path — school, training, or work in Sri Lanka",
    ta: "உங்கள் பாதையைக் கண்டறியுங்கள் — இலங்கையில் கல்வி, பயிற்சி அல்லது வேலை",
  },
  heroSub: {
    en: "Free, verified guidance on careers, courses, and training for students and school leavers — in Tamil and English.",
    ta: "மாணவர்களுக்கும் பாடசாலை விட்டவர்களுக்கும் தொழில்கள், படிப்புகள், பயிற்சிகள் பற்றிய இலவச, சரிபார்க்கப்பட்ட வழிகாட்டல் — தமிழிலும் ஆங்கிலத்திலும்.",
  },
  heroExplore: { en: "Explore careers", ta: "தொழில்களை ஆராய" },
  heroQuiz: { en: "Take the career quiz", ta: "தொழில் வினாடி வினா எடுக்க" },
  chooseStage: { en: "Choose your stage", ta: "உங்கள் நிலையைத் தேர்ந்தெடுங்கள்" },
  chooseStageSub: {
    en: "Start from where you are right now — we will show you the routes that apply to you.",
    ta: "நீங்கள் இப்போது இருக்கும் நிலையிலிருந்து தொடங்குங்கள் — உங்களுக்குப் பொருந்தும் வழிகளைக் காட்டுவோம்.",
  },
  featuredSectors: { en: "Explore by sector", ta: "துறை வாரியாக ஆராயுங்கள்" },
  quizBlockTitle: { en: "Not sure where to start?", ta: "எங்கு தொடங்குவது எனத் தெரியவில்லையா?" },
  quizBlockText: {
    en: "Answer 10 short questions about what you enjoy and your situation. You will get a starting list of sectors and roles to explore — suggestions, not a final label.",
    ta: "உங்கள் விருப்பங்களும் சூழ்நிலையும் பற்றிய 10 சிறு கேள்விகளுக்குப் பதிலளியுங்கள். ஆராய்வதற்கான துறைகள், தொழில்களின் தொடக்கப் பட்டியல் கிடைக்கும் — இவை பரிந்துரைகள் மட்டுமே, இறுதி முடிவு அல்ல.",
  },
  startQuiz: { en: "Start the quiz", ta: "வினாடி வினாவைத் தொடங்கு" },
  videoStories: { en: "Video stories", ta: "காணொளிக் கதைகள்" },
  videoStoriesSub: {
    en: "Hear from people doing these jobs across Sri Lanka. Videos load only when you tap play. Transcripts available.",
    ta: "இலங்கை முழுவதும் இத்தொழில்களைச் செய்பவர்களிடமிருந்து கேளுங்கள். Play அழுத்தினால் மட்டுமே காணொளி பதிவிறக்கும். எழுத்து வடிவமும் உண்டு.",
  },
  helpBlockTitle: { en: "Need help or advice?", ta: "உதவி அல்லது ஆலோசனை தேவையா?" },
  helpFindGuidance: { en: "Find guidance and providers", ta: "வழிகாட்டலும் சேவைகளும் தேட" },
  helpUrgent: { en: "Urgent support", ta: "அவசர உதவி" },

  // Stage cards
  stageAfterOl: { en: "After O/L", ta: "சா/த (O/L) க்குப் பிறகு" },
  stageAfterOlDesc: {
    en: "Deciding what to do after Ordinary Level exams",
    ta: "சாதாரண தரப் பரீட்சைக்குப் பிறகு என்ன செய்வது என்பதைத் தீர்மானித்தல்",
  },
  stageAfterAl: { en: "After A/L", ta: "உ/த (A/L) க்குப் பிறகு" },
  stageAfterAlDesc: {
    en: "Choosing between university, TVET, and other routes after Advanced Level",
    ta: "உயர் தரத்திற்குப் பிறகு பல்கலைக்கழகம், தொழிற்கல்வி, பிற வழிகளில் தேர்வு",
  },
  stageUni: { en: "University route", ta: "பல்கலைக்கழகப் பாதை" },
  stageUniDesc: {
    en: "How to apply through UGC, select degrees, and understand district rules",
    ta: "UGC மூலம் விண்ணப்பிப்பது, பட்டப்படிப்புத் தேர்வு, மாவட்ட விதிகளைப் புரிந்துகொள்வது",
  },
  stageNonUni: { en: "No-university route", ta: "பல்கலைக்கழகம் அல்லாத பாதை" },
  stageNonUniDesc: {
    en: "Apprenticeships, NVQ, professional qualifications, and work-first options",
    ta: "பயிலுநர் பயிற்சி, NVQ, தொழில்சார் தகைமைகள், வேலை-முதல் வழிகள்",
  },
  stageWorking: { en: "Already working", ta: "ஏற்கனவே வேலையில்" },
  stageWorkingDesc: {
    en: "Professional qualifications, upskilling, and sector change",
    ta: "தொழில்சார் தகைமைகள், திறன் மேம்பாடு, துறை மாற்றம்",
  },
  stageNotSure: { en: "Not sure yet", ta: "இன்னும் உறுதியில்லை" },
  stageNotSureDesc: { en: "Start with the career quiz", ta: "தொழில் வினாடி வினாவுடன் தொடங்குங்கள்" },

  // Quiz UI
  quizTitle: { en: "Career Quiz", ta: "தொழில் வினாடி வினா" },
  quizIntro1: {
    en: "This quiz helps you generate starting suggestions — it is not a test and there are no wrong answers.",
    ta: "இந்த வினாடி வினா தொடக்கப் பரிந்துரைகளை உருவாக்க உதவுகிறது — இது ஒரு பரீட்சை அல்ல; தவறான பதில்கள் இல்லை.",
  },
  quizIntro2: {
    en: "Results are based on your interests and circumstances, not a personality test. You can start again any time.",
    ta: "முடிவுகள் உங்கள் ஆர்வங்களையும் சூழ்நிலைகளையும் அடிப்படையாகக் கொண்டவை; ஆளுமைச் சோதனை அல்ல. எப்போது வேண்டுமானாலும் மீண்டும் தொடங்கலாம்.",
  },
  question: { en: "Question", ta: "கேள்வி" },
  quizResultsTitle: { en: "Your starting suggestions", ta: "உங்கள் தொடக்கப் பரிந்துரைகள்" },
  whyMatched: { en: "Why this matched", ta: "ஏன் இது பொருந்தியது" },
  exploreCluster: { en: "Explore this cluster", ta: "இத்தொகுப்பை ஆராய" },
  routesAvailable: { en: "Route types available", ta: "கிடைக்கும் பாதை வகைகள்" },
  advisory1: {
    en: "These results are suggestions to help you start exploring — not a final answer about what you should do.",
    ta: "இம்முடிவுகள் நீங்கள் ஆராயத் தொடங்க உதவும் பரிந்துரைகள் மட்டுமே — நீங்கள் என்ன செய்ய வேண்டும் என்பதற்கான இறுதிப் பதில் அல்ல.",
  },
  advisory2: {
    en: "Your real circumstances, interests, and opportunities may lead you in a different direction.",
    ta: "உங்கள் உண்மையான சூழ்நிலைகள், ஆர்வங்கள், வாய்ப்புகள் உங்களை வேறு திசையில் கொண்டு செல்லலாம்.",
  },
  advisory3: {
    en: "Use these results as a starting point. Talk to a mentor or guidance counsellor before making any major decisions.",
    ta: "இம்முடிவுகளைத் தொடக்கப் புள்ளியாகப் பயன்படுத்துங்கள். பெரிய முடிவுகளுக்கு முன் வழிகாட்டி அல்லது ஆலோசகருடன் பேசுங்கள்.",
  },
  saveResults: { en: "Save my results", ta: "என் முடிவுகளைச் சேமி" },
  talkToMentor: { en: "Talk to a mentor", ta: "வழிகாட்டியுடன் பேச" },

  // Pathways hub
  pathwaysTitle: { en: "Pathways", ta: "பாதைகள்" },
  pathwaysIntro: {
    en: "Sri Lanka has several parallel education and training systems. No route is more legitimate than another — this page helps you understand the differences before you choose.",
    ta: "இலங்கையில் பல இணையான கல்வி, பயிற்சி முறைகள் உள்ளன. எந்த வழியும் மற்றொன்றை விடக் குறைந்ததல்ல — தேர்வதற்கு முன் வேறுபாடுகளைப் புரிந்துகொள்ள இப்பக்கம் உதவும்.",
  },
  currentVsReform: { en: "Important: current rules vs. planned reforms", ta: "முக்கியம்: தற்போதைய விதிகள் மற்றும் திட்டமிடப்பட்ட சீர்திருத்தங்கள்" },
  currentExplain: {
    en: "CURRENT — rules that apply now, based on the current UGC handbook, TVEC manual, and MOE structures.",
    ta: "தற்போதைய — தற்போதைய UGC கையேடு, TVEC கையேடு, கல்வி அமைச்சு கட்டமைப்புகளின் அடிப்படையில் இப்போது பொருந்தும் விதிகள்.",
  },
  reformExplain: {
    en: "REFORM — changes announced or piloted under the MOE Education Reforms programme, not yet in full effect.",
    ta: "சீர்திருத்தம் — கல்வி அமைச்சின் சீர்திருத்தத் திட்டத்தின் கீழ் அறிவிக்கப்பட்ட அல்லது சோதனையிலுள்ள மாற்றங்கள்; இன்னும் முழுமையாக நடைமுறையில் இல்லை.",
  },
  reformApplyNow: {
    en: "If you are applying now, follow CURRENT guidance.",
    ta: "நீங்கள் இப்போது விண்ணப்பிக்கிறீர்கள் என்றால், தற்போதைய வழிகாட்டலைப் பின்பற்றுங்கள்.",
  },
  routeComparison: { en: "Compare route families", ta: "பாதை வகைகளை ஒப்பிடுங்கள்" },
  variable: { en: "Variable", ta: "அம்சம்" },
  duration: { en: "Duration", ta: "காலம்" },
  incomeDuring: { en: "Income during", ta: "பயிற்சியின்போது வருமானம்" },
  medium: { en: "Medium of instruction", ta: "கற்பித்தல் மொழி" },

  // Misc
  sampleDataNote: {
    en: "Prototype note: all roles, providers, and contact details on this page are sample data for design review.",
    ta: "முன்மாதிரிக் குறிப்பு: இப்பக்கத்திலுள்ள தொழில்கள், நிறுவனங்கள், தொடர்பு விவரங்கள் அனைத்தும் வடிவமைப்பு மீளாய்வுக்கான மாதிரித் தரவுகள்.",
  },
  breadcrumbHome: { en: "Home", ta: "முகப்பு" },
} as const;

export const ROUTE_LABELS: Record<RouteType, L> = {
  university: { en: "University", ta: "பல்கலைக்கழகம்" },
  tvet: { en: "TVET / NVQ", ta: "தொழிற்கல்வி / NVQ" },
  apprenticeship: { en: "Apprenticeship", ta: "பயிலுநர் பயிற்சி" },
  professional: { en: "Professional qualification", ta: "தொழில்சார் தகைமை" },
  workfirst: { en: "Work-first", ta: "வேலை-முதல்" },
};

export const STUDY_LEVEL_LABELS: Record<StudyLevel, L> = {
  ol: { en: "O/L pass", ta: "சா/த சித்தி" },
  al: { en: "A/L pass", ta: "உ/த சித்தி" },
  degree: { en: "Degree", ta: "பட்டம்" },
  certificate: { en: "Certificate", ta: "சான்றிதழ்" },
  none: { en: "No formal requirement", ta: "முறையான தேவை இல்லை" },
};

export const WORK_LANGUAGE_LABELS: Record<WorkLanguage, L> = {
  tamil: { en: "Tamil", ta: "தமிழ்" },
  sinhala: { en: "Sinhala", ta: "சிங்களம்" },
  english: { en: "English", ta: "ஆங்கிலம்" },
  mixed: { en: "Mixed", ta: "கலப்பு" },
};

export const FEE_LABELS: Record<FeeRange, L> = {
  free: { en: "Free", ta: "இலவசம்" },
  low: { en: "Low (under LKR 10,000)", ta: "குறைவு (ரூ. 10,000க்குக் கீழ்)" },
  moderate: { en: "Moderate", ta: "மிதமானது" },
  high: { en: "High", ta: "அதிகம்" },
};

/** Governance dates used across the prototype (sample values). */
export const GOV = {
  siteReviewed: { en: "15 June 2026", ta: "15 ஜூன் 2026" },
  siteNextReview: { en: "15 September 2026", ta: "15 செப்டெம்பர் 2026" },
  version: "0.2 (prototype)",
};
