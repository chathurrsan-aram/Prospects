import type { Sector } from "@/lib/types";

export const SECTORS: Sector[] = [
  {
    id: "education",
    name: { en: "Education", ta: "கல்வி" },
    short: {
      en: "Teaching, early childhood care, and education support in schools and communities",
      ta: "பாடசாலைகளிலும் சமூகங்களிலும் கற்பித்தல், முன்பள்ளிப் பராமரிப்பு, கல்வி உதவி",
    },
    featured: true,
  },
  {
    id: "health",
    name: { en: "Health", ta: "சுகாதாரம்" },
    short: {
      en: "Nursing, midwifery, community health, and hospital support roles",
      ta: "தாதியம், மருத்துவச்சி சேவை, சமூக சுகாதாரம், மருத்துவமனை உதவிப் பணிகள்",
    },
    featured: true,
  },
  {
    id: "ict",
    name: { en: "ICT", ta: "தகவல் தொழில்நுட்பம்" },
    short: {
      en: "Software, IT support, data work, and digital services — including remote work",
      ta: "மென்பொருள், IT உதவி, தரவுப் பணிகள், டிஜிட்டல் சேவைகள் — தொலைநிலை வேலை உட்பட",
    },
    featured: true,
  },
  {
    id: "construction",
    name: { en: "Construction & Trades", ta: "கட்டுமானம் & தொழில்கள்" },
    short: {
      en: "Electrical, plumbing, masonry, welding, and site supervision — high demand island-wide",
      ta: "மின்வேலை, குழாய்வேலை, கொத்துவேலை, வெல்டிங், தள மேற்பார்வை — நாடு முழுவதும் அதிக தேவை",
    },
    featured: true,
  },
  {
    id: "finance",
    name: { en: "Accounting & Finance", ta: "கணக்கியல் & நிதி" },
    short: {
      en: "Accounts, audit, banking, and bookkeeping — strong professional-body routes",
      ta: "கணக்குகள், கணக்காய்வு, வங்கி, பதிவேடு — வலுவான தொழில்சார் அமைப்பு வழிகள்",
    },
    featured: true,
  },
  {
    id: "tourism",
    name: { en: "Tourism & Hospitality", ta: "சுற்றுலா & விருந்தோம்பல்" },
    short: {
      en: "Hotels, restaurants, travel, and guiding — entry possible without A/L",
      ta: "ஹோட்டல்கள், உணவகங்கள், பயணம், வழிகாட்டல் — உ/த இல்லாமலும் நுழையலாம்",
    },
    featured: true,
  },
  {
    id: "public-service",
    name: { en: "Public Service", ta: "அரச சேவை" },
    short: {
      en: "Government administration, Grama Niladhari, and local government roles",
      ta: "அரச நிர்வாகம், கிராம அலுவலர், உள்ளூராட்சிப் பணிகள்",
    },
    featured: false,
  },
  {
    id: "trades",
    name: { en: "Trades", ta: "கைத்தொழில்கள்" },
    short: {
      en: "Automotive, tailoring, carpentry, and other skilled trades",
      ta: "வாகனப் பழுது, தையல், தச்சுவேலை, பிற திறன் தொழில்கள்",
    },
    featured: false,
  },
  {
    id: "community",
    name: { en: "Community / NGO", ta: "சமூகம் / அரச சார்பற்ற" },
    short: {
      en: "Community development, social work, and NGO programme roles",
      ta: "சமூக மேம்பாடு, சமூகப் பணி, NGO திட்டப் பணிகள்",
    },
    featured: false,
  },
];

export function getSector(id: string) {
  return SECTORS.find((s) => s.id === id);
}
