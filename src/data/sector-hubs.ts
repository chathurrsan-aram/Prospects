import type { L, SectorId } from "@/lib/types";

/** Sector Hub content (spec 5) for the six featured sectors. Sample data. */

export interface SectorHub {
  overview: L;
  localNote: L;
  localSource: string;
  verified: L;
}

const VERIFIED: L = { en: "15 June 2026", ta: "15 ஜூன் 2026" };

export const SECTOR_HUBS: Partial<Record<SectorId, SectorHub>> = {
  education: {
    overview: {
      en: "Education covers teaching in government and private schools, preschool and early childhood care, and education support roles in NGOs and community programmes. The government is the biggest employer, with structured recruitment and a clear service ladder. Informal tutoring is also a significant income source in most towns.",
      ta: "கல்வித் துறை அரச, தனியார் பாடசாலைகளில் கற்பித்தல், முன்பள்ளி மற்றும் சிறுவயதுப் பராமரிப்பு, NGO-க்கள், சமூகத் திட்டங்களில் கல்வி உதவிப் பணிகளை உள்ளடக்கும். அரசே பெரிய முதலாளி; முறையான ஆட்சேர்ப்பும் தெளிவான சேவை ஏணியும் உண்டு. பெரும்பாலான நகரங்களில் தனியார் வகுப்புகளும் குறிப்பிடத்தக்க வருமான மூலம்.",
    },
    localNote: {
      en: "Teacher shortages persist in Tamil-medium schools across Northern and Eastern provinces, particularly for maths, science, and English.",
      ta: "வட, கிழக்கு மாகாணங்களின் தமிழ் மொழிப் பாடசாலைகளில் — குறிப்பாகக் கணிதம், விஞ்ஞானம், ஆங்கிலத்தில் — ஆசிரியர் பற்றாக்குறை நீடிக்கிறது.",
    },
    localSource: "MOE school census 2025 (sample reference)",
    verified: VERIFIED,
  },
  health: {
    overview: {
      en: "Health includes hospital roles (nursing, pharmacy, lab work), community roles (midwifery, public health inspection), and support roles. Government training is free with allowances, and postings for community roles are usually within your home region. Private hospitals and overseas demand add further options.",
      ta: "சுகாதாரத் துறை மருத்துவமனைப் பணிகள் (தாதியம், மருந்தகம், ஆய்வகம்), சமூகப் பணிகள் (மருத்துவச்சி, பொது சுகாதாரப் பரிசோதனை), உதவிப் பணிகளை உள்ளடக்கும். அரச பயிற்சி இலவசம்; கொடுப்பனவும் உண்டு. சமூகப் பணிகளுக்கான நியமனங்கள் பொதுவாகச் சொந்தப் பிரதேசத்திலேயே. தனியார் மருத்துவமனைகளும் வெளிநாட்டுத் தேவையும் கூடுதல் வாய்ப்புகள்.",
    },
    localNote: {
      en: "Nursing and midwifery vacancies recur island-wide, including Northern and Eastern provinces; regional hospitals recruit locally.",
      ta: "தாதிய, மருத்துவச்சி வெற்றிடங்கள் வட, கிழக்கு உட்பட நாடு முழுவதும் தொடர்கின்றன; பிராந்திய மருத்துவமனைகள் உள்ளூரில் ஆட்சேர்க்கின்றன.",
    },
    localSource: "Ministry of Health recruitment notices 2025 (sample reference)",
    verified: VERIFIED,
  },
  ict: {
    overview: {
      en: "ICT spans software development, IT support, data work, design, and digital services. Employers range from Colombo software companies to regional hubs and fully remote international teams. Portfolios and demonstrated skill often matter as much as certificates, and free community training exists in the North.",
      ta: "ICT மென்பொருள் உருவாக்கம், IT உதவி, தரவுப் பணிகள், வடிவமைப்பு, டிஜிட்டல் சேவைகளை உள்ளடக்கும். கொழும்பு மென்பொருள் நிறுவனங்கள் முதல் பிராந்திய மையங்கள், முழு தொலைநிலை சர்வதேசக் குழுக்கள் வரை முதலாளிகள். சான்றிதழ்களை விட portfolio-வும் திறனும் முக்கியம்; வடக்கில் இலவச சமூகப் பயிற்சிகளும் உண்டு.",
    },
    localNote: {
      en: "Remote work makes ICT one of the few sectors where Northern and Eastern location is not a barrier — reliable connectivity is the key constraint.",
      ta: "தொலைநிலை வேலை காரணமாக, வட, கிழக்கு அமைவிடம் தடையாக இல்லாத சில துறைகளில் ICT ஒன்று — நம்பகமான இணைப்பே முக்கிய வரம்பு.",
    },
    localSource: "ICTA workforce survey 2025 (sample reference)",
    verified: VERIFIED,
  },
  construction: {
    overview: {
      en: "Construction and trades cover electrical, plumbing, masonry, welding, carpentry, and professional roles like quantity surveying. Work is available in every district, with significant informal employment. Certification (NVQ, NAITA) is the main route to steadier income, bigger contracts, and overseas work.",
      ta: "கட்டுமானமும் தொழில்களும் மின்வேலை, குழாய்வேலை, கொத்துவேலை, வெல்டிங், தச்சுவேலை, அளவை மதிப்பீடு போன்ற தொழில்சார் பணிகளை உள்ளடக்கும். ஒவ்வொரு மாவட்டத்திலும் வேலை உண்டு; முறைசாரா வேலை கணிசம். சான்றிதழே (NVQ, NAITA) நிலையான வருமானம், பெரிய ஒப்பந்தங்கள், வெளிநாட்டு வேலைக்கான முக்கிய வழி.",
    },
    localNote: {
      en: "Skilled-trades shortages are reported island-wide, partly due to overseas migration of experienced workers; reconstruction and housing projects sustain Northern and Eastern demand.",
      ta: "அனுபவத் தொழிலாளர்களின் வெளிநாட்டு இடம்பெயர்வால் திறன் தொழிலாளர் பற்றாக்குறை நாடு முழுவதும் உள்ளது; மறுசீரமைப்பு, வீட்டுத் திட்டங்கள் வட, கிழக்குத் தேவையைத் தக்கவைக்கின்றன.",
    },
    localSource: "DCS Labour Force Survey Q4 2025 (sample reference)",
    verified: VERIFIED,
  },
  finance: {
    overview: {
      en: "Accounting and finance covers bookkeeping, audit, banking, insurance, and finance roles inside every kind of organisation. Professional-body ladders (AAT, CA Sri Lanka, CIMA) make this one of the most accessible office careers from O/L — no degree needed to start, and study continues alongside work.",
      ta: "கணக்கியலும் நிதியும் பதிவேடு, கணக்காய்வு, வங்கி, காப்புறுதி, ஒவ்வொரு அமைப்பினுள்ளும் நிதிப் பணிகளை உள்ளடக்கும். தொழில்சார் அமைப்பு ஏணிகள் (AAT, CA Sri Lanka, CIMA) இதை சா/த-இலிருந்து மிக அணுகக்கூடிய அலுவலகத் தொழிலாக்குகின்றன — தொடங்கப் பட்டம் தேவையில்லை; வேலையுடன் படிப்பும் தொடரும்.",
    },
    localNote: {
      en: "Accounting support demand is steady in every district; audit season creates recurring trainee openings at regional firms.",
      ta: "ஒவ்வொரு மாவட்டத்திலும் கணக்கியல் உதவித் தேவை நிலையானது; கணக்காய்வுப் பருவம் பிராந்திய நிறுவனங்களில் தொடர் பயிற்சியாளர் வாய்ப்புகளை உருவாக்குகிறது.",
    },
    localSource: "AAT Sri Lanka placement reports 2025 (sample reference)",
    verified: VERIFIED,
  },
  tourism: {
    overview: {
      en: "Tourism and hospitality includes hotels, guesthouses, restaurants, travel services, and guiding. Entry is possible without A/L, English matters more than exam results, and progression can be fast for reliable staff. Seasonal variation is real — many workers combine tourism with other income.",
      ta: "சுற்றுலாவும் விருந்தோம்பலும் ஹோட்டல்கள், விருந்தினர் இல்லங்கள், உணவகங்கள், பயணச் சேவைகள், வழிகாட்டலை உள்ளடக்கும். உ/த இல்லாமலும் நுழையலாம்; தேர்வு முடிவுகளை விட ஆங்கிலம் முக்கியம்; நம்பகமான ஊழியர்களுக்கு விரைவான முன்னேற்றம். பருவகால மாற்றம் உண்மை — பலர் சுற்றுலாவுடன் பிற வருமானத்தையும் இணைப்பர்.",
    },
    localNote: {
      en: "Employment is concentrated in Southern, Western, and Central provinces, with growing seasonal demand on the East coast (Trincomalee, Batticaloa, Arugam Bay) and around Jaffna's heritage sites.",
      ta: "வேலைவாய்ப்பு தெற்கு, மேற்கு, மத்திய மாகாணங்களில் குவிந்துள்ளது; கிழக்குக் கரையில் (திருகோணமலை, மட்டக்களப்பு, அறுகம்பே) மற்றும் யாழ்ப்பாண மரபுத் தளங்களைச் சுற்றிப் பருவகாலத் தேவை வளர்கிறது.",
    },
    localSource: "SLTDA employment statistics 2025 (sample reference)",
    verified: VERIFIED,
  },
};
