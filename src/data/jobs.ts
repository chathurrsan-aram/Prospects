import type { Job, L } from "@/lib/types";

/**
 * SAMPLE DATA for design review. Route details are drafted from public
 * knowledge of the Sri Lankan system and must be verified against the
 * current UGC handbook, TVEC manual, and provider registers before launch.
 * Tamil text is an unreviewed draft (see TRANSLATIONS.md).
 */

const VERIFIED: L = { en: "15 June 2026", ta: "15 ஜூன் 2026" };
const REVIEW: L = { en: "15 September 2026", ta: "15 செப்டெம்பர் 2026" };

export const JOBS: Job[] = [
  {
    id: "primary-teacher",
    title: { en: "Primary School Teacher", ta: "ஆரம்பப் பாடசாலை ஆசிரியர்" },
    sector: "education",
    routeTypes: ["university", "professional"],
    short: {
      en: "Teaches children in grades 1–5 the foundations of reading, writing, maths, and life skills.",
      ta: "தரம் 1–5 பிள்ளைகளுக்கு வாசிப்பு, எழுத்து, கணிதம், வாழ்க்கைத் திறன்களின் அடிப்படைகளைக் கற்பிக்கிறார்.",
    },
    languageNote: {
      en: "Tamil required for Tamil-medium schools | Sinhala or English useful for records",
      ta: "தமிழ் மொழிப் பாடசாலைகளுக்குத் தமிழ் அவசியம் | பதிவுகளுக்கு சிங்களம் அல்லது ஆங்கிலம் பயனுள்ளது",
    },
    workLanguages: ["tamil", "english"],
    minStudyLevel: "al",
    districts: "all",
    about: [
      {
        en: "Primary teachers plan lessons, teach a full class across subjects, track each child's progress, and work with parents. In most schools a primary teacher stays with one class for the whole year, so the relationship with pupils is central to the job.",
        ta: "ஆரம்ப ஆசிரியர்கள் பாடங்களைத் திட்டமிட்டு, பல பாடங்களில் முழு வகுப்புக்கும் கற்பித்து, ஒவ்வொரு பிள்ளையின் முன்னேற்றத்தையும் கண்காணித்து, பெற்றோருடன் இணைந்து செயல்படுவார்கள். பெரும்பாலான பாடசாலைகளில் ஆண்டு முழுவதும் ஒரே வகுப்புடன் இருப்பதால், மாணவர்களுடனான உறவு இப்பணியின் மையம்.",
      },
      {
        en: "Most primary teachers in Sri Lanka work in government schools under the Ministry of Education. There are also roles in private schools, international schools, and community education programmes. Government appointments follow a public recruitment process and postings can be outside your home district in the early years.",
        ta: "இலங்கையில் பெரும்பாலான ஆரம்ப ஆசிரியர்கள் கல்வி அமைச்சின் கீழ் அரச பாடசாலைகளில் பணிபுரிகிறார்கள். தனியார் பாடசாலைகள், சர்வதேசப் பாடசாலைகள், சமூகக் கல்வித் திட்டங்களிலும் வேலைகள் உண்டு. அரச நியமனங்கள் பொது ஆட்சேர்ப்பு முறையைப் பின்பற்றும்; ஆரம்ப ஆண்டுகளில் சொந்த மாவட்டத்திற்கு வெளியே நியமனம் கிடைக்கலாம்.",
      },
    ],
    keySkills: [
      { en: "Clear communication with children and parents", ta: "பிள்ளைகள், பெற்றோருடன் தெளிவான தொடர்பாடல்" },
      { en: "Lesson planning and classroom management", ta: "பாடத் திட்டமிடல், வகுப்பறை நிர்வாகம்" },
      { en: "Assessment and record-keeping", ta: "மதிப்பீடு, பதிவு வைத்தல்" },
      { en: "Patience and creativity with mixed-ability groups", ta: "பல்வேறு திறன் குழுக்களுடன் பொறுமையும் படைப்பாற்றலும்" },
    ],
    digitalSkills: {
      en: "Basic computer literacy required; smart classroom tools increasingly used",
      ta: "அடிப்படை கணினி அறிவு தேவை; ஸ்மார்ட் வகுப்பறை கருவிகள் அதிகரித்து வருகின்றன",
    },
    softSkills: {
      en: "Patience, reliability, empathy, teamwork with other staff",
      ta: "பொறுமை, நம்பகத்தன்மை, பரிவு, சக ஊழியர்களுடன் குழுப்பணி",
    },
    workplaces: [
      { en: "Government schools (Ministry of Education)", ta: "அரச பாடசாலைகள் (கல்வி அமைச்சு)" },
      { en: "Private and international schools", ta: "தனியார், சர்வதேசப் பாடசாலைகள்" },
      { en: "Community and NGO education programmes", ta: "சமூக, NGO கல்வித் திட்டங்கள்" },
    ],
    demand: {
      text: {
        en: "Teacher recruitment rounds continue regularly, with persistent shortages in Tamil-medium schools in several districts, especially for maths, science, and English at upper grades. Primary vacancies vary by zone.",
        ta: "ஆசிரியர் ஆட்சேர்ப்புச் சுற்றுகள் தொடர்ந்து நடைபெறுகின்றன; பல மாவட்டங்களில் தமிழ் மொழிப் பாடசாலைகளில் தொடர் பற்றாக்குறை உள்ளது. ஆரம்பப் பிரிவு வெற்றிடங்கள் வலயம் வாரியாக வேறுபடும்.",
      },
      source: "MOE school census 2025 (sample reference)",
      verified: VERIFIED,
      reviewBy: REVIEW,
    },
    pathway: [
      {
        type: "university",
        stages: [
          {
            title: { en: "A/L pass (any stream)", ta: "உ/த சித்தி (எந்தப் பிரிவும்)" },
            detail: {
              en: "Minimum three passes; Arts stream is the most common entry to teaching degrees.",
              ta: "குறைந்தது மூன்று பாடச் சித்திகள்; கலைப் பிரிவே கற்பித்தல் பட்டங்களுக்குப் பொதுவான நுழைவு.",
            },
            badge: "current",
          },
          {
            title: { en: "B.Ed or teaching degree via UGC", ta: "UGC வழி B.Ed அல்லது கற்பித்தல் பட்டம்" },
            detail: {
              en: "Apply through the UGC handbook process using your Z-score. District basis applies to allocation.",
              ta: "Z-மதிப்பெண் மூலம் UGC கையேட்டு முறையில் விண்ணப்பிக்கவும். மாவட்ட அடிப்படை ஒதுக்கீட்டுக்குப் பொருந்தும்.",
            },
            badge: "current",
            barriers: [
              { en: "District quota applies", ta: "மாவட்ட ஒதுக்கீடு பொருந்தும்" },
              { en: "Application is online only (PC or smartphone required)", ta: "விண்ணப்பம் இணையம் வழியே மட்டும் (கணினி அல்லது ஸ்மார்ட்போன் தேவை)" },
            ],
          },
          {
            title: { en: "Degree (3–4 years)", ta: "பட்டப்படிப்பு (3–4 ஆண்டுகள்)" },
            detail: {
              en: "Includes teaching practice placements in schools.",
              ta: "பாடசாலைகளில் கற்பித்தல் பயிற்சி இடங்கள் உட்பட.",
            },
            badge: "current",
          },
          {
            title: { en: "Government appointment or private school post", ta: "அரச நியமனம் அல்லது தனியார் பாடசாலைப் பதவி" },
            detail: {
              en: "Government recruitment via gazette notices; early postings may be outside your district.",
              ta: "அரச ஆட்சேர்ப்பு வர்த்தமானி அறிவிப்புகள் வழியாக; ஆரம்ப நியமனங்கள் உங்கள் மாவட்டத்திற்கு வெளியே இருக்கலாம்.",
            },
          },
          {
            title: { en: "Progression: sectional head, deputy principal", ta: "முன்னேற்றம்: பிரிவுத் தலைவர், பிரதி அதிபர்" },
            detail: {
              en: "Through the Sri Lanka Teachers' Service grade structure.",
              ta: "இலங்கை ஆசிரியர் சேவை தரக் கட்டமைப்பின் வழியாக.",
            },
          },
        ],
      },
      {
        type: "professional",
        stages: [
          {
            title: { en: "A/L pass", ta: "உ/த சித்தி" },
            detail: {
              en: "Three passes; merit and district considered in NCOE selection.",
              ta: "மூன்று சித்திகள்; NCOE தேர்வில் தகுதியும் மாவட்டமும் கருதப்படும்.",
            },
            badge: "current",
          },
          {
            title: { en: "National College of Education (NCOE) diploma", ta: "தேசிய கல்வியியல் கல்லூரி (NCOE) டிப்ளோமா" },
            detail: {
              en: "Three-year residential National Diploma in Teaching, including a paid internship year in a school.",
              ta: "மூன்றாண்டு தங்கும் வசதி கொண்ட தேசிய கற்பித்தல் டிப்ளோமா; ஒரு வருட ஊதியத்துடன் கூடிய பாடசாலை பயிற்சி உட்பட.",
            },
            badge: "current",
            barriers: [
              { en: "Limited intake per district and medium", ta: "மாவட்டம், மொழிமூலம் வாரியாக வரையறுக்கப்பட்ட அனுமதி" },
            ],
          },
          {
            title: { en: "Teacher appointment", ta: "ஆசிரியர் நியமனம்" },
            detail: {
              en: "NCOE graduates enter the Teachers' Service with an appointment on completion.",
              ta: "NCOE பட்டதாரிகள் படிப்பு முடிந்ததும் ஆசிரியர் சேவையில் நியமனம் பெறுவர்.",
            },
          },
          {
            title: { en: "Progression: B.Ed top-up, higher grades", ta: "முன்னேற்றம்: B.Ed மேற்படிப்பு, உயர் தரங்கள்" },
            detail: {
              en: "Serving teachers can upgrade to a degree through OUSL and university programmes.",
              ta: "சேவையிலுள்ள ஆசிரியர்கள் OUSL, பல்கலைக்கழகத் திட்டங்கள் மூலம் பட்டத்திற்கு மேம்படுத்தலாம்.",
            },
            badge: "reform",
          },
        ],
      },
    ],
    video: {
      available: true,
      role: { en: "Primary Teacher", ta: "ஆரம்ப ஆசிரியர்" },
      district: { en: "Kilinochchi", ta: "கிளிநொச்சி" },
      route: "professional",
      language: { en: "Tamil", ta: "தமிழ்" },
      subtitles: { en: "Tamil + English subtitles", ta: "தமிழ் + ஆங்கில வசனங்கள்" },
      duration: "4:10",
    },
    verified: VERIFIED,
    reviewBy: REVIEW,
    sourceBasis: {
      en: "Based on UGC 2024/25 handbook and MOE NCOE intake notices (sample references)",
      ta: "UGC 2024/25 கையேடு, கல்வி அமைச்சு NCOE அனுமதி அறிவிப்புகளின் அடிப்படையில் (மாதிரி மேற்கோள்கள்)",
    },
  },

  {
    id: "nursing-officer",
    title: { en: "Nursing Officer", ta: "தாதிய அலுவலர்" },
    sector: "health",
    routeTypes: ["university", "tvet"],
    short: {
      en: "Cares for patients in hospitals and clinics, giving medication, monitoring recovery, and supporting families.",
      ta: "மருத்துவமனைகளிலும் சிகிச்சை நிலையங்களிலும் நோயாளர்களைப் பராமரித்து, மருந்து வழங்கி, குணமடைதலைக் கண்காணித்து, குடும்பங்களுக்கு ஆதரவளிக்கிறார்.",
    },
    languageNote: {
      en: "Tamil or Sinhala required with patients | English required for medical records",
      ta: "நோயாளர்களுடன் தமிழ் அல்லது சிங்களம் அவசியம் | மருத்துவப் பதிவுகளுக்கு ஆங்கிலம் அவசியம்",
    },
    workLanguages: ["tamil", "sinhala", "english"],
    minStudyLevel: "al",
    districts: "all",
    about: [
      {
        en: "Nursing officers work in wards, clinics, operating theatres, and community health settings. The work is shift-based, physically active, and involves close contact with patients at difficult moments — it needs both technical skill and emotional steadiness.",
        ta: "தாதிய அலுவலர்கள் வார்டுகள், சிகிச்சை நிலையங்கள், அறுவைச் சிகிச்சை அரங்குகள், சமூக சுகாதார அமைப்புகளில் பணிபுரிகிறார்கள். இது மாற்று நேர அடிப்படையிலான, உடல் உழைப்பு மிக்க பணி; கடினமான தருணங்களில் நோயாளர்களுடன் நெருங்கிய தொடர்பு தேவை — தொழில்நுட்பத் திறனும் மன உறுதியும் அவசியம்.",
      },
      {
        en: "Most nurses work for the Ministry of Health in government hospitals, where training is free and a post is assigned after qualifying. Private hospitals also recruit, and there is growing international demand for Sri Lankan-trained nurses.",
        ta: "பெரும்பாலான தாதியர்கள் சுகாதார அமைச்சின் அரச மருத்துவமனைகளில் பணிபுரிகிறார்கள்; அங்கு பயிற்சி இலவசம், தகுதி பெற்றதும் பணியிடம் வழங்கப்படும். தனியார் மருத்துவமனைகளும் ஆட்சேர்க்கின்றன; இலங்கையில் பயிற்சி பெற்ற தாதியர்களுக்கு சர்வதேச தேவையும் அதிகரித்து வருகிறது.",
      },
    ],
    keySkills: [
      { en: "Patient care and observation", ta: "நோயாளர் பராமரிப்பு, கண்காணிப்பு" },
      { en: "Accurate record-keeping", ta: "துல்லியமான பதிவு வைத்தல்" },
      { en: "Physical stamina for shift work", ta: "மாற்று நேர வேலைக்கான உடல் தாங்குதிறன்" },
      { en: "Calm communication under pressure", ta: "அழுத்தத்தின் கீழ் அமைதியான தொடர்பாடல்" },
    ],
    digitalSkills: {
      en: "Basic computer literacy; hospital information systems used in larger hospitals",
      ta: "அடிப்படை கணினி அறிவு; பெரிய மருத்துவமனைகளில் தகவல் முறைமைகள் பயன்பாட்டில்",
    },
    softSkills: {
      en: "Empathy, attention to detail, teamwork, reliability",
      ta: "பரிவு, நுணுக்கமான கவனம், குழுப்பணி, நம்பகத்தன்மை",
    },
    workplaces: [
      { en: "Government hospitals and clinics (Ministry of Health)", ta: "அரச மருத்துவமனைகள், சிகிச்சை நிலையங்கள் (சுகாதார அமைச்சு)" },
      { en: "Private hospitals", ta: "தனியார் மருத்துவமனைகள்" },
      { en: "NGO and community health programmes", ta: "NGO, சமூக சுகாதாரத் திட்டங்கள்" },
    ],
    demand: {
      text: {
        en: "The health sector reports continuing nursing shortages in government hospitals, with recruitment rounds most years. Demand is island-wide, including Northern and Eastern provinces.",
        ta: "அரச மருத்துவமனைகளில் தாதியர் பற்றாக்குறை தொடர்வதாக சுகாதாரத் துறை அறிவிக்கிறது; பெரும்பாலான ஆண்டுகளில் ஆட்சேர்ப்பு நடைபெறுகிறது. வட, கிழக்கு மாகாணங்கள் உட்பட நாடு முழுவதும் தேவை உள்ளது.",
      },
      source: "Ministry of Health recruitment notices, 2025 (sample reference)",
      verified: VERIFIED,
      reviewBy: REVIEW,
    },
    pathway: [
      {
        type: "tvet",
        stages: [
          {
            title: { en: "A/L pass (science preferred)", ta: "உ/த சித்தி (விஞ்ஞானப் பிரிவு விரும்பத்தக்கது)" },
            detail: {
              en: "Biology stream A/L passes are required for the government nursing diploma.",
              ta: "அரச தாதிய டிப்ளோமாவுக்கு உயிரியல் பிரிவு உ/த சித்திகள் தேவை.",
            },
            badge: "current",
          },
          {
            title: { en: "School of Nursing diploma (3 years)", ta: "தாதியர் பயிற்சிப் பாடசாலை டிப்ளோமா (3 ஆண்டுகள்)" },
            detail: {
              en: "Free residential training at Ministry of Health nursing schools, with a monthly allowance.",
              ta: "சுகாதார அமைச்சின் தாதியர் பாடசாலைகளில் இலவச தங்கும் பயிற்சி; மாதாந்தக் கொடுப்பனவும் உண்டு.",
            },
            badge: "current",
            barriers: [
              { en: "Selection is competitive and interview-based", ta: "தேர்வு போட்டி நிறைந்தது; நேர்முகத் தேர்வும் உண்டு" },
              { en: "English-medium study materials from year 2", ta: "இரண்டாம் ஆண்டிலிருந்து ஆங்கில மொழிக் கற்றல் உபகரணங்கள்" },
            ],
          },
          {
            title: { en: "Government appointment as Nursing Officer", ta: "தாதிய அலுவலராக அரச நியமனம்" },
            detail: {
              en: "Posting assigned after final exam; may be outside your home district initially.",
              ta: "இறுதிப் பரீட்சைக்குப் பின் பணியிடம் வழங்கப்படும்; ஆரம்பத்தில் சொந்த மாவட்டத்திற்கு வெளியே இருக்கலாம்.",
            },
          },
          {
            title: { en: "Progression: ward sister, specialist nursing, BSc top-up", ta: "முன்னேற்றம்: வார்டு பொறுப்பாளர், சிறப்புத் தாதியம், BSc மேற்படிப்பு" },
            detail: {
              en: "Specialist training and degree top-up available through OUSL and universities.",
              ta: "OUSL, பல்கலைக்கழகங்கள் மூலம் சிறப்புப் பயிற்சியும் பட்ட மேற்படிப்பும் கிடைக்கும்.",
            },
          },
        ],
      },
      {
        type: "university",
        stages: [
          {
            title: { en: "A/L in Biology stream", ta: "உயிரியல் பிரிவில் உ/த" },
            detail: {
              en: "Z-score based selection through UGC.",
              ta: "UGC வழி Z-மதிப்பெண் அடிப்படையிலான தேர்வு.",
            },
            badge: "current",
            barriers: [{ en: "District quota applies", ta: "மாவட்ட ஒதுக்கீடு பொருந்தும்" }],
          },
          {
            title: { en: "BSc Nursing (4 years)", ta: "BSc தாதியம் (4 ஆண்டுகள்)" },
            detail: {
              en: "Offered at several state universities; English medium.",
              ta: "பல அரச பல்கலைக்கழகங்களில் வழங்கப்படுகிறது; ஆங்கில மொழிமூலம்.",
            },
            badge: "current",
            barriers: [{ en: "English-medium degree", ta: "ஆங்கில மொழிமூலப் பட்டம்" }],
          },
          {
            title: { en: "Nursing Officer (graduate grade)", ta: "தாதிய அலுவலர் (பட்டதாரி தரம்)" },
            detail: {
              en: "Graduates enter at a higher grade with faster progression to management.",
              ta: "பட்டதாரிகள் உயர் தரத்தில் நுழைவர்; நிர்வாகத்திற்கு விரைவான முன்னேற்றம்.",
            },
          },
        ],
      },
    ],
    video: {
      available: true,
      role: { en: "Nursing Officer", ta: "தாதிய அலுவலர்" },
      district: { en: "Jaffna", ta: "யாழ்ப்பாணம்" },
      route: "tvet",
      language: { en: "Tamil", ta: "தமிழ்" },
      subtitles: { en: "Tamil + English subtitles", ta: "தமிழ் + ஆங்கில வசனங்கள்" },
      duration: "5:02",
    },
    verified: VERIFIED,
    reviewBy: REVIEW,
    sourceBasis: {
      en: "Based on Ministry of Health training school notices and UGC 2024/25 handbook (sample references)",
      ta: "சுகாதார அமைச்சு பயிற்சிப் பாடசாலை அறிவிப்புகள், UGC 2024/25 கையேட்டின் அடிப்படையில் (மாதிரி மேற்கோள்கள்)",
    },
  },

  {
    id: "software-developer",
    title: { en: "Software Developer", ta: "மென்பொருள் உருவாக்குநர்" },
    sector: "ict",
    routeTypes: ["university", "tvet", "professional", "workfirst"],
    short: {
      en: "Builds and maintains websites, apps, and software systems for local and international clients.",
      ta: "உள்நாட்டு, சர்வதேச வாடிக்கையாளர்களுக்காக இணையதளங்கள், செயலிகள், மென்பொருள் அமைப்புகளை உருவாக்கிப் பராமரிக்கிறார்.",
    },
    languageNote: {
      en: "English required for code and documentation | Tamil/Sinhala used in local teams",
      ta: "நிரலாக்கத்திற்கும் ஆவணங்களுக்கும் ஆங்கிலம் அவசியம் | உள்ளூர் குழுக்களில் தமிழ்/சிங்களம் பயன்பாடு",
    },
    workLanguages: ["english", "mixed"],
    minStudyLevel: "ol",
    districts: "all",
    about: [
      {
        en: "Software developers write, test, and improve computer programs. The work ranges from building websites for small businesses to working in large teams on banking or export products. Remote work is common, which means developers in Jaffna or Batticaloa can work for companies in Colombo or abroad.",
        ta: "மென்பொருள் உருவாக்குநர்கள் கணினி நிரல்களை எழுதி, சோதித்து, மேம்படுத்துகிறார்கள். சிறு வணிகங்களுக்கான இணையதளங்கள் முதல் வங்கி அல்லது ஏற்றுமதி தயாரிப்புகளில் பெரிய குழுக்களுடன் பணிபுரிவது வரை இப்பணி விரிகிறது. தொலைநிலை வேலை பொதுவானது — யாழ்ப்பாணம் அல்லது மட்டக்களப்பிலிருந்து கொழும்பு அல்லது வெளிநாட்டு நிறுவனங்களுக்கு வேலை செய்யலாம்.",
      },
      {
        en: "This is one of the few careers where employers often care more about what you can build than which certificate you hold. A strong portfolio of real projects can open doors alongside — or sometimes instead of — formal qualifications.",
        ta: "எந்தச் சான்றிதழ் உள்ளது என்பதை விட நீங்கள் என்ன உருவாக்க முடியும் என்பதையே பல முதலாளிகள் கவனிக்கும் சில தொழில்களில் இதுவும் ஒன்று. உண்மையான திட்டங்களின் வலுவான தொகுப்பு, முறையான தகைமைகளுடன் — சில நேரங்களில் அவற்றுக்குப் பதிலாகவும் — வாய்ப்புகளைத் திறக்கும்.",
      },
    ],
    keySkills: [
      { en: "Programming (e.g. JavaScript, Python, Java)", ta: "நிரலாக்கம் (எ.கா. JavaScript, Python, Java)" },
      { en: "Problem-solving and logical thinking", ta: "சிக்கல் தீர்த்தல், தர்க்க சிந்தனை" },
      { en: "Reading technical documentation in English", ta: "ஆங்கிலத்தில் தொழில்நுட்ப ஆவணங்களை வாசித்தல்" },
      { en: "Working with version control and team tools", ta: "பதிப்புக் கட்டுப்பாடு, குழு கருவிகளுடன் பணிபுரிதல்" },
    ],
    digitalSkills: {
      en: "Advanced — this is a fully computer-based role; reliable device and connection needed",
      ta: "மேம்பட்டது — முழுமையாக கணினி சார்ந்த பணி; நம்பகமான கருவியும் இணைப்பும் தேவை",
    },
    softSkills: {
      en: "Persistence, self-directed learning, communication in remote teams",
      ta: "விடாமுயற்சி, சுயமாகக் கற்றல், தொலைநிலைக் குழுக்களில் தொடர்பாடல்",
    },
    workplaces: [
      { en: "Software companies (Colombo and regional hubs like Yarl IT Hub)", ta: "மென்பொருள் நிறுவனங்கள் (கொழும்பு மற்றும் Yarl IT Hub போன்ற பிராந்திய மையங்கள்)" },
      { en: "Remote work for foreign companies", ta: "வெளிநாட்டு நிறுவனங்களுக்கான தொலைநிலை வேலை" },
      { en: "Freelancing and self-employment", ta: "சுயதொழில், freelance பணிகள்" },
      { en: "Banks, telecoms, and government digital units", ta: "வங்கிகள், தொலைத்தொடர்பு, அரச டிஜிட்டல் பிரிவுகள்" },
    ],
    demand: {
      text: {
        en: "ICT remains a growth sector with continuing demand for developers, though entry-level competition has increased. Remote and freelance work extends opportunities beyond Colombo.",
        ta: "ICT தொடர்ந்து வளரும் துறை; உருவாக்குநர்களுக்கான தேவை நீடிக்கிறது, எனினும் தொடக்க நிலைப் போட்டி அதிகரித்துள்ளது. தொலைநிலை, freelance வேலைகள் வாய்ப்புகளைக் கொழும்புக்கு அப்பால் விரிவாக்குகின்றன.",
      },
      source: "ICTA workforce survey 2025 (sample reference)",
      verified: VERIFIED,
      reviewBy: REVIEW,
    },
    pathway: [
      {
        type: "university",
        stages: [
          {
            title: { en: "A/L (Physical Science or Technology stream)", ta: "உ/த (பௌதீக விஞ்ஞானம் அல்லது தொழில்நுட்பப் பிரிவு)" },
            detail: { en: "Z-score selection via UGC for computer science and IT degrees.", ta: "கணினி விஞ்ஞானம், IT பட்டங்களுக்கு UGC வழி Z-மதிப்பெண் தேர்வு." },
            badge: "current",
            barriers: [{ en: "District quota applies; aptitude test for some programmes", ta: "மாவட்ட ஒதுக்கீடு; சில பாடநெறிகளுக்குத் திறனாய்வுத் தேர்வு" }],
          },
          {
            title: { en: "BSc in Computer Science / IT (3–4 years)", ta: "BSc கணினி விஞ்ஞானம் / IT (3–4 ஆண்டுகள்)" },
            detail: { en: "English medium at all state universities.", ta: "அனைத்து அரச பல்கலைக்கழகங்களிலும் ஆங்கில மொழிமூலம்." },
            badge: "current",
            barriers: [{ en: "English-medium degree", ta: "ஆங்கில மொழிமூலப் பட்டம்" }],
          },
          {
            title: { en: "Internship, then junior developer", ta: "பயிற்சி, பின்னர் இளநிலை உருவாக்குநர்" },
            detail: { en: "Most degrees include an industry placement year.", ta: "பெரும்பாலான பட்டங்களில் ஒரு தொழில்துறை பயிற்சி ஆண்டு உண்டு." },
          },
        ],
      },
      {
        type: "tvet",
        stages: [
          {
            title: { en: "O/L pass", ta: "சா/த சித்தி" },
            detail: { en: "NVQ ICT courses accept O/L passes including maths.", ta: "கணிதம் உட்பட சா/த சித்திகளுடன் NVQ ICT பாடநெறிகளில் சேரலாம்." },
            badge: "current",
          },
          {
            title: { en: "NVQ 4–5 in ICT (VTA / DTET)", ta: "ICT-இல் NVQ 4–5 (VTA / DTET)" },
            detail: { en: "6 months – 2 years; Tamil medium available to NVQ 4 in many centres.", ta: "6 மாதம் – 2 ஆண்டுகள்; பல நிலையங்களில் NVQ 4 வரை தமிழ் மொழிமூலம் உண்டு." },
            badge: "current",
            barriers: [{ en: "NVQ 5–6 mostly English medium", ta: "NVQ 5–6 பெரும்பாலும் ஆங்கில மொழிமூலம்" }],
          },
          {
            title: { en: "HNDIT or UoVT degree top-up", ta: "HNDIT அல்லது UoVT பட்ட மேற்படிப்பு" },
            detail: { en: "NVQ 5/6 can progress to degree level at the University of Vocational Technology.", ta: "NVQ 5/6 இலிருந்து தொழில்நுட்பப் பல்கலைக்கழகத்தில் (UoVT) பட்ட நிலைக்கு முன்னேறலாம்." },
            badge: "current",
          },
          {
            title: { en: "Junior developer / IT support", ta: "இளநிலை உருவாக்குநர் / IT உதவி" },
            detail: { en: "Entry roles in local companies or regional tech hubs.", ta: "உள்ளூர் நிறுவனங்கள் அல்லது பிராந்திய தொழில்நுட்ப மையங்களில் தொடக்கப் பணிகள்." },
          },
        ],
      },
      {
        type: "workfirst",
        stages: [
          {
            title: { en: "Self-study and free online courses", ta: "சுயகற்றல், இலவச இணையப் பாடநெறிகள்" },
            detail: { en: "Free bootcamps and community programmes (e.g. Yarl IT Hub initiatives) teach practical coding.", ta: "இலவச bootcamp-களும் சமூகத் திட்டங்களும் (எ.கா. Yarl IT Hub முயற்சிகள்) நடைமுறை நிரலாக்கம் கற்பிக்கின்றன." },
            barriers: [{ en: "Reliable internet and device required", ta: "நம்பகமான இணையமும் கருவியும் தேவை" }],
          },
          {
            title: { en: "Build a portfolio of projects", ta: "திட்டங்களின் தொகுப்பை உருவாக்குங்கள்" },
            detail: { en: "Real projects on GitHub count as evidence of skill for employers.", ta: "GitHub-இல் உள்ள உண்மையான திட்டங்கள் முதலாளிகளுக்குத் திறனுக்கான சான்றாகும்." },
          },
          {
            title: { en: "Freelance work or junior role", ta: "Freelance வேலை அல்லது இளநிலைப் பணி" },
            detail: { en: "Start with small paid projects; progress to full-time roles or larger clients.", ta: "சிறிய ஊதியத் திட்டங்களுடன் தொடங்கி, முழுநேரப் பணிகள் அல்லது பெரிய வாடிக்கையாளர்களுக்கு முன்னேறுங்கள்." },
          },
          {
            title: { en: "RPL into NVQ certification", ta: "RPL வழி NVQ சான்றிதழ்" },
            detail: { en: "Work experience can be recognised toward formal NVQ levels later.", ta: "வேலை அனுபவம் பின்னர் முறையான NVQ நிலைகளுக்கு அங்கீகரிக்கப்படலாம்." },
          },
        ],
      },
    ],
    video: {
      available: true,
      role: { en: "Software Developer", ta: "மென்பொருள் உருவாக்குநர்" },
      district: { en: "Jaffna", ta: "யாழ்ப்பாணம்" },
      route: "workfirst",
      language: { en: "Tamil", ta: "தமிழ்" },
      subtitles: { en: "English subtitles", ta: "ஆங்கில வசனங்கள்" },
      duration: "6:24",
    },
    verified: VERIFIED,
    reviewBy: REVIEW,
    sourceBasis: {
      en: "Based on TVEC NVQ manual and UGC 2024/25 handbook (sample references)",
      ta: "TVEC NVQ கையேடு, UGC 2024/25 கையேட்டின் அடிப்படையில் (மாதிரி மேற்கோள்கள்)",
    },
  },

  {
    id: "electrician",
    title: { en: "Electrician", ta: "மின் தொழில்நுட்பவியலாளர்" },
    sector: "construction",
    routeTypes: ["tvet", "apprenticeship", "workfirst"],
    short: {
      en: "Installs and repairs electrical wiring and equipment in homes, buildings, and industry.",
      ta: "வீடுகள், கட்டடங்கள், தொழிற்சாலைகளில் மின் இணைப்புகளையும் உபகரணங்களையும் நிறுவிப் பழுதுபார்க்கிறார்.",
    },
    languageNote: {
      en: "Tamil sufficient for most local work | Sinhala useful for island-wide contracts",
      ta: "பெரும்பாலான உள்ளூர் வேலைகளுக்குத் தமிழ் போதும் | நாடு தழுவிய ஒப்பந்தங்களுக்கு சிங்களம் பயனுள்ளது",
    },
    workLanguages: ["tamil", "sinhala"],
    minStudyLevel: "ol",
    districts: "all",
    about: [
      {
        en: "Electricians wire new buildings, fix faults, install solar systems, and maintain machinery. The work is hands-on and mobile — many electricians travel between sites daily. Safety certification matters: licensed electricians can take on bigger contracts and government work.",
        ta: "மின் தொழிலாளர்கள் புதிய கட்டடங்களுக்கு மின் இணைப்பு அமைத்தல், பழுது நீக்கல், சூரிய மின் அமைப்பு நிறுவல், இயந்திரப் பராமரிப்பு ஆகியவற்றைச் செய்கிறார்கள். இது நேரடிக் கைவேலை; பலர் தினமும் தளங்களுக்கிடையே பயணிப்பர். பாதுகாப்புச் சான்றிதழ் முக்கியம் — உரிமம் பெற்றவர்கள் பெரிய ஒப்பந்தங்களையும் அரச வேலைகளையும் பெறலாம்.",
      },
      {
        en: "A large share of electrical work in Sri Lanka is informal or self-employed. Formal NVQ certification and NAITA apprenticeship records make a real difference to earnings, overseas opportunities, and eligibility for licensed work.",
        ta: "இலங்கையில் மின்வேலைகளில் பெரும் பகுதி முறைசாராதோ சுயதொழிலோ ஆகும். முறையான NVQ சான்றிதழும் NAITA பயிற்சிப் பதிவுகளும் வருமானம், வெளிநாட்டு வாய்ப்புகள், உரிமம் பெற்ற வேலைத் தகுதி ஆகியவற்றில் உண்மையான வேறுபாட்டை ஏற்படுத்தும்.",
      },
    ],
    keySkills: [
      { en: "Reading wiring diagrams and plans", ta: "மின் இணைப்பு வரைபடங்களையும் திட்டங்களையும் வாசித்தல்" },
      { en: "Safe working practices", ta: "பாதுகாப்பான வேலை நடைமுறைகள்" },
      { en: "Fault-finding and problem-solving", ta: "பழுது கண்டறிதல், சிக்கல் தீர்த்தல்" },
      { en: "Physical fitness and careful handwork", ta: "உடல் தகுதி, கவனமான கைவேலை" },
    ],
    digitalSkills: {
      en: "Basic phone use for job coordination; solar and smart systems need some technical reading",
      ta: "வேலை ஒருங்கிணைப்புக்கு அடிப்படை தொலைபேசிப் பயன்பாடு; சூரிய, ஸ்மார்ட் அமைப்புகளுக்குச் சில தொழில்நுட்ப வாசிப்பு",
    },
    softSkills: {
      en: "Reliability, customer communication, working in teams on sites",
      ta: "நம்பகத்தன்மை, வாடிக்கையாளர் தொடர்பாடல், தளங்களில் குழுப்பணி",
    },
    workplaces: [
      { en: "Construction companies and contractors", ta: "கட்டுமான நிறுவனங்கள், ஒப்பந்தக்காரர்கள்" },
      { en: "Self-employment (very common)", ta: "சுயதொழில் (மிகப் பொதுவானது)" },
      { en: "Ceylon Electricity Board and industrial plants", ta: "இலங்கை மின்சார சபை, தொழிற்சாலைகள்" },
      { en: "Overseas employment (Middle East, with NVQ 3+)", ta: "வெளிநாட்டு வேலை (மத்திய கிழக்கு, NVQ 3+ உடன்)" },
    ],
    informalNote: {
      en: "Much of this trade operates informally. Certification is the main route to higher, steadier income.",
      ta: "இத்தொழிலின் பெரும்பகுதி முறைசாராமல் இயங்குகிறது. சான்றிதழே உயர்ந்த, நிலையான வருமானத்திற்கான முக்கிய வழி.",
    },
    demand: {
      text: {
        en: "Construction trades report persistent skilled-worker shortages, partly due to overseas migration of experienced tradespeople. Solar installation is a growing sub-field.",
        ta: "அனுபவமுள்ள தொழிலாளர்களின் வெளிநாட்டு இடம்பெயர்வு காரணமாகவும், கட்டுமானத் தொழில்களில் திறன் தொழிலாளர் பற்றாக்குறை நீடிக்கிறது. சூரிய மின் நிறுவல் வளர்ந்து வரும் துணைத் துறை.",
      },
      source: "DCS Labour Force Survey Q4 2025 (sample reference)",
      verified: VERIFIED,
      reviewBy: REVIEW,
    },
    pathway: [
      {
        type: "tvet",
        stages: [
          {
            title: { en: "O/L (maths pass helpful)", ta: "சா/த (கணித சித்தி உதவியாகும்)" },
            detail: { en: "NVQ 2–3 electrician courses accept O/L leavers; some accept without full passes.", ta: "NVQ 2–3 மின்வேலைப் பாடநெறிகள் சா/த முடித்தவர்களை ஏற்கும்; சில முழு சித்தி இல்லாமலும் ஏற்கும்." },
            badge: "current",
          },
          {
            title: { en: "NVQ 3 Electrician (VTA / DTET, 1 year)", ta: "NVQ 3 மின் தொழில் (VTA / DTET, 1 ஆண்டு)" },
            detail: { en: "Tamil-medium courses available at district vocational training centres.", ta: "மாவட்ட தொழிற்பயிற்சி நிலையங்களில் தமிழ் மொழிமூலப் பாடநெறிகள் உண்டு." },
            badge: "current",
          },
          {
            title: { en: "NVQ 4 + industry experience", ta: "NVQ 4 + தொழில்துறை அனுபவம்" },
            detail: { en: "Higher certification for supervision and licensed work.", ta: "மேற்பார்வை, உரிம வேலைக்கான உயர் சான்றிதழ்." },
            badge: "current",
          },
          {
            title: { en: "Progression: supervisor, contractor, overseas work", ta: "முன்னேற்றம்: மேற்பார்வையாளர், ஒப்பந்தக்காரர், வெளிநாட்டு வேலை" },
            detail: { en: "NVQ 5–6 lead to site supervision; certification supports overseas placement.", ta: "NVQ 5–6 தள மேற்பார்வைக்கு இட்டுச்செல்லும்; சான்றிதழ் வெளிநாட்டு வேலைவாய்ப்புக்கு உதவும்." },
          },
        ],
      },
      {
        type: "apprenticeship",
        stages: [
          {
            title: { en: "School leaver (no minimum stated)", ta: "பாடசாலை விட்டவர் (குறைந்தபட்சத் தேவை இல்லை)" },
            detail: { en: "NAITA matches apprentices to registered workshops and contractors.", ta: "NAITA பயிலுநர்களைப் பதிவுசெய்யப்பட்ட பட்டறைகள், ஒப்பந்தக்காரர்களுடன் இணைக்கிறது." },
            badge: "current",
          },
          {
            title: { en: "NAITA apprenticeship (1–2 years, paid)", ta: "NAITA பயிலுநர் பயிற்சி (1–2 ஆண்டுகள், ஊதியத்துடன்)" },
            detail: { en: "Earn while you learn under an experienced electrician.", ta: "அனுபவமிக்க மின் தொழிலாளரின் கீழ் சம்பாதித்துக் கற்றுக்கொள்ளுங்கள்." },
            badge: "current",
          },
          {
            title: { en: "Trade test and NVQ certification", ta: "தொழில் தேர்வு, NVQ சான்றிதழ்" },
            detail: { en: "Apprenticeship completion leads to NAITA-recognised certification.", ta: "பயிற்சி நிறைவு NAITA அங்கீகரித்த சான்றிதழுக்கு இட்டுச்செல்லும்." },
          },
        ],
      },
      {
        type: "workfirst",
        stages: [
          {
            title: { en: "Helper / assistant to an electrician", ta: "மின் தொழிலாளரின் உதவியாளர்" },
            detail: { en: "Many start as informal helpers and learn on the job.", ta: "பலர் முறைசாரா உதவியாளர்களாகத் தொடங்கி வேலையிலேயே கற்றுக்கொள்கிறார்கள்." },
          },
          {
            title: { en: "RPL assessment for NVQ", ta: "NVQ-க்கான RPL மதிப்பீடு" },
            detail: { en: "Experience can be certified through Recognition of Prior Learning at TVEC centres.", ta: "TVEC நிலையங்களில் முன் கற்றல் அங்கீகாரம் (RPL) மூலம் அனுபவத்திற்குச் சான்றிதழ் பெறலாம்." },
            badge: "current",
          },
          {
            title: { en: "Certified electrician", ta: "சான்றிதழ் பெற்ற மின் தொழிலாளர்" },
            detail: { en: "Certification opens licensed work, bigger contracts, and overseas roles.", ta: "சான்றிதழ் உரிம வேலை, பெரிய ஒப்பந்தங்கள், வெளிநாட்டு வேலைகளைத் திறக்கும்." },
          },
        ],
      },
    ],
    verified: VERIFIED,
    reviewBy: REVIEW,
    sourceBasis: {
      en: "Based on TVEC NVQ manual and NAITA programme guides (sample references)",
      ta: "TVEC NVQ கையேடு, NAITA திட்ட வழிகாட்டிகளின் அடிப்படையில் (மாதிரி மேற்கோள்கள்)",
    },
  },

  {
    id: "accounting-technician",
    title: { en: "Accounting Technician", ta: "கணக்கியல் தொழில்நுட்பவியலாளர்" },
    sector: "finance",
    routeTypes: ["professional", "university"],
    short: {
      en: "Keeps financial records, prepares accounts, and supports audits for businesses and organisations.",
      ta: "வணிகங்கள், நிறுவனங்களுக்கு நிதிப் பதிவுகளைப் பேணி, கணக்குகளைத் தயாரித்து, கணக்காய்வுகளுக்கு உதவுகிறார்.",
    },
    languageNote: {
      en: "English required for accounts and reports | Tamil/Sinhala with local clients",
      ta: "கணக்குகள், அறிக்கைகளுக்கு ஆங்கிலம் அவசியம் | உள்ளூர் வாடிக்கையாளர்களுடன் தமிழ்/சிங்களம்",
    },
    workLanguages: ["english", "mixed"],
    minStudyLevel: "ol",
    districts: "all",
    about: [
      {
        en: "Accounting technicians handle the day-to-day financial work of organisations: recording transactions, preparing payroll, reconciling bank statements, and helping prepare tax returns and audit files. It is steady office work found in every town.",
        ta: "கணக்கியல் தொழில்நுட்பவியலாளர்கள் நிறுவனங்களின் அன்றாட நிதிப் பணிகளைச் செய்கிறார்கள்: பரிவர்த்தனைகளைப் பதிதல், சம்பளத் தயாரிப்பு, வங்கி இணக்கம், வரி, கணக்காய்வுக் கோப்புகள் தயாரிப்பில் உதவுதல். ஒவ்வொரு நகரிலும் கிடைக்கும் நிலையான அலுவலக வேலை இது.",
      },
      {
        en: "The AAT Sri Lanka qualification is the standard entry route and can be started straight after O/L — you do not need A/L or a degree to begin. Many senior accountants in Sri Lanka started as AAT-qualified technicians and progressed to CA Sri Lanka or CIMA while working.",
        ta: "AAT இலங்கை தகைமையே நிலையான நுழைவு வழி; சா/த முடிந்தவுடனேயே தொடங்கலாம் — தொடங்குவதற்கு உ/த அல்லது பட்டம் தேவையில்லை. இலங்கையின் பல மூத்த கணக்காளர்கள் AAT தகைமையுடன் தொடங்கி, வேலை செய்யும்போதே CA Sri Lanka அல்லது CIMA வரை முன்னேறியவர்கள்.",
      },
    ],
    keySkills: [
      { en: "Numeracy and accuracy", ta: "எண்ணறிவு, துல்லியம்" },
      { en: "Bookkeeping and double-entry accounts", ta: "பதிவேடு, இரட்டைப் பதிவு கணக்குகள்" },
      { en: "Spreadsheets and accounting software", ta: "Spreadsheet, கணக்கியல் மென்பொருள்" },
      { en: "Organised record-keeping", ta: "ஒழுங்கான பதிவு பராமரிப்பு" },
    ],
    digitalSkills: {
      en: "Excel/data entry essential; accounting packages (QuickBooks, Sage) widely used",
      ta: "Excel/தரவு உள்ளீடு அவசியம்; கணக்கியல் மென்பொருள்கள் (QuickBooks, Sage) பரவலாகப் பயன்பாட்டில்",
    },
    softSkills: {
      en: "Attention to detail, honesty, meeting deadlines",
      ta: "நுணுக்கமான கவனம், நேர்மை, காலக்கெடுவைக் கடைப்பிடித்தல்",
    },
    workplaces: [
      { en: "Audit firms and accounting practices", ta: "கணக்காய்வு நிறுவனங்கள், கணக்கியல் அலுவலகங்கள்" },
      { en: "Private companies of all sizes", ta: "அனைத்து அளவிலான தனியார் நிறுவனங்கள்" },
      { en: "Banks and finance companies", ta: "வங்கிகள், நிதி நிறுவனங்கள்" },
      { en: "NGOs and cooperatives", ta: "NGO-க்கள், கூட்டுறவு அமைப்புகள்" },
    ],
    demand: {
      text: {
        en: "Accounting support roles remain in steady demand across districts; audit season creates recurring vacancies. AAT-qualified candidates are regularly recruited by regional firms.",
        ta: "மாவட்டங்கள் முழுவதும் கணக்கியல் உதவிப் பணிகளுக்கு நிலையான தேவை உள்ளது; கணக்காய்வுப் பருவம் தொடர் வெற்றிடங்களை உருவாக்குகிறது. AAT தகைமையுடையவர்களைப் பிராந்திய நிறுவனங்கள் தொடர்ந்து ஆட்சேர்க்கின்றன.",
      },
      source: "AAT Sri Lanka placement reports 2025 (sample reference)",
      verified: VERIFIED,
      reviewBy: REVIEW,
    },
    pathway: [
      {
        type: "professional",
        stages: [
          {
            title: { en: "O/L pass (maths and English needed)", ta: "சா/த சித்தி (கணிதம், ஆங்கிலம் தேவை)" },
            detail: { en: "AAT Sri Lanka accepts students directly after O/L.", ta: "AAT இலங்கை சா/த-க்குப் பின் நேரடியாக மாணவர்களை ஏற்கிறது." },
            badge: "current",
          },
          {
            title: { en: "AAT Sri Lanka (levels 1–3, ~2 years)", ta: "AAT இலங்கை (நிலைகள் 1–3, ~2 ஆண்டுகள்)" },
            detail: { en: "Study at registered centres or by distance; exams in Tamil available at lower levels.", ta: "பதிவு நிலையங்களில் அல்லது தொலைநிலையில் கற்கலாம்; கீழ் நிலைகளில் தமிழில் தேர்வுகள் உண்டு." },
            badge: "current",
            barriers: [
              { en: "Higher levels are English medium", ta: "மேல் நிலைகள் ஆங்கில மொழிமூலம்" },
              { en: "Course and exam fees apply", ta: "பாடநெறி, தேர்வுக் கட்டணங்கள் உண்டு" },
            ],
          },
          {
            title: { en: "Trainee accountant role", ta: "பயிற்சி கணக்காளர் பணி" },
            detail: { en: "Audit firms recruit AAT passed finalists as trainees with a stipend.", ta: "கணக்காய்வு நிறுவனங்கள் AAT முடித்தவர்களை உதவித்தொகையுடன் பயிற்சியாளர்களாக ஆட்சேர்க்கின்றன." },
          },
          {
            title: { en: "Progression: CA Sri Lanka / CIMA while working", ta: "முன்னேற்றம்: வேலையுடன் CA Sri Lanka / CIMA" },
            detail: { en: "AAT gives exemptions toward chartered qualifications.", ta: "AAT பட்டயத் தகைமைகளுக்கான விலக்குகளை வழங்குகிறது." },
            badge: "current",
          },
        ],
      },
      {
        type: "university",
        stages: [
          {
            title: { en: "A/L Commerce stream", ta: "உ/த வர்த்தகப் பிரிவு" },
            detail: { en: "Z-score selection for management and commerce degrees.", ta: "முகாமைத்துவ, வர்த்தகப் பட்டங்களுக்கு Z-மதிப்பெண் தேர்வு." },
            badge: "current",
            barriers: [{ en: "District quota applies", ta: "மாவட்ட ஒதுக்கீடு பொருந்தும்" }],
          },
          {
            title: { en: "B.Com / Management degree (3–4 years)", ta: "B.Com / முகாமைத்துவப் பட்டம் (3–4 ஆண்டுகள்)" },
            detail: { en: "English medium; includes accounting specialisations.", ta: "ஆங்கில மொழிமூலம்; கணக்கியல் சிறப்புப் பிரிவுகள் உட்பட." },
            badge: "current",
          },
          {
            title: { en: "Accountant / audit trainee", ta: "கணக்காளர் / கணக்காய்வு பயிற்சியாளர்" },
            detail: { en: "Graduates typically pair the degree with a professional qualification.", ta: "பட்டதாரிகள் பொதுவாகப் பட்டத்துடன் தொழில்சார் தகைமையையும் இணைப்பர்." },
          },
        ],
      },
    ],
    verified: VERIFIED,
    reviewBy: REVIEW,
    sourceBasis: {
      en: "Based on AAT Sri Lanka prospectus and UGC 2024/25 handbook (sample references)",
      ta: "AAT இலங்கை அறிக்கை, UGC 2024/25 கையேட்டின் அடிப்படையில் (மாதிரி மேற்கோள்கள்)",
    },
  },

  {
    id: "hotel-front-office",
    title: { en: "Hotel Front Office Associate", ta: "ஹோட்டல் முன்னணி அலுவலக உதவியாளர்" },
    sector: "tourism",
    routeTypes: ["tvet", "workfirst"],
    short: {
      en: "Welcomes guests, manages check-in and bookings, and solves problems at hotels and guesthouses.",
      ta: "விருந்தினர்களை வரவேற்று, check-in மற்றும் முன்பதிவுகளை நிர்வகித்து, ஹோட்டல்கள், விருந்தினர் இல்லங்களில் சிக்கல்களைத் தீர்க்கிறார்.",
    },
    languageNote: {
      en: "English required with guests | Tamil/Sinhala with colleagues | Third languages valued",
      ta: "விருந்தினர்களுடன் ஆங்கிலம் அவசியம் | சக ஊழியர்களுடன் தமிழ்/சிங்களம் | கூடுதல் மொழிகள் மதிப்புமிக்கவை",
    },
    workLanguages: ["english", "mixed"],
    minStudyLevel: "ol",
    districts: ["colombo", "galle", "matara", "hambantota", "kandy", "trincomalee", "jaffna", "batticaloa"],
    about: [
      {
        en: "Front office staff are the face of a hotel: greeting guests, handling reservations and payments, coordinating with housekeeping, and helping visitors plan their stay. Shifts include evenings and weekends, and the busiest periods follow the tourist seasons.",
        ta: "முன்னணி அலுவலக ஊழியர்கள் ஹோட்டலின் முகம்: விருந்தினர்களை வரவேற்றல், முன்பதிவு, கட்டணங்களைக் கையாளுதல், அறை பராமரிப்புடன் ஒருங்கிணைத்தல், விருந்தினர்களின் தங்குமிடத் திட்டமிடலுக்கு உதவுதல். மாலை, வார இறுதி மாற்று நேரங்களும் உண்டு; சுற்றுலாப் பருவங்களில் வேலை மிகும்.",
      },
      {
        en: "Tourism is rebuilding across Sri Lanka, with growing guesthouse and homestay activity in the East and North alongside the established Southern and Western coast hotels. English opens the door here more than exam results do — and the sector offers fast progression for reliable staff.",
        ta: "இலங்கை முழுவதும் சுற்றுலா மீண்டும் வளர்கிறது; தெற்கு, மேற்கு கரையோர ஹோட்டல்களுடன் கிழக்கிலும் வடக்கிலும் விருந்தினர் இல்லங்கள், homestay நடவடிக்கைகள் வளர்கின்றன. இங்கு தேர்வு முடிவுகளை விட ஆங்கிலமே கதவைத் திறக்கிறது — நம்பகமான ஊழியர்களுக்கு விரைவான முன்னேற்றமும் உண்டு.",
      },
    ],
    keySkills: [
      { en: "Spoken English with guests", ta: "விருந்தினர்களுடன் பேச்சு ஆங்கிலம்" },
      { en: "Booking systems and payments", ta: "முன்பதிவு முறைமைகள், கட்டணங்கள்" },
      { en: "Calm problem-solving", ta: "அமைதியான சிக்கல் தீர்த்தல்" },
      { en: "Presentation and courtesy", ta: "தோற்றம், மரியாதை" },
    ],
    digitalSkills: {
      en: "Booking software and email required; training provided on the job",
      ta: "முன்பதிவு மென்பொருள், மின்னஞ்சல் தேவை; வேலையில் பயிற்சி வழங்கப்படும்",
    },
    softSkills: {
      en: "Friendliness, patience with difficult guests, teamwork across departments",
      ta: "நட்பு, கடினமான விருந்தினர்களுடன் பொறுமை, பிரிவுகளுக்கிடையிலான குழுப்பணி",
    },
    workplaces: [
      { en: "Hotels and resorts", ta: "ஹோட்டல்கள், ரிசார்ட்டுகள்" },
      { en: "Guesthouses and homestays", ta: "விருந்தினர் இல்லங்கள், homestay-கள்" },
      { en: "Travel companies", ta: "பயண நிறுவனங்கள்" },
      { en: "Cruise lines and overseas hotels (with experience)", ta: "கப்பல் சுற்றுலா, வெளிநாட்டு ஹோட்டல்கள் (அனுபவத்துடன்)" },
    ],
    demand: {
      text: {
        en: "Tourism employment is concentrated in Southern, Western, and Central provinces, with growing demand on the East coast (Trincomalee, Batticaloa, Arugam Bay) in season. Recovery continues after recent downturns; seasonal variation is significant.",
        ta: "சுற்றுலா வேலைவாய்ப்பு தெற்கு, மேற்கு, மத்திய மாகாணங்களில் குவிந்துள்ளது; பருவகாலத்தில் கிழக்குக் கரையில் (திருகோணமலை, மட்டக்களப்பு, அறுகம்பே) தேவை வளர்கிறது. சமீபத்திய சரிவுகளுக்குப் பின் மீட்சி தொடர்கிறது; பருவகால மாற்றம் கணிசமானது.",
      },
      source: "SLTDA employment statistics 2025 (sample reference)",
      verified: VERIFIED,
      reviewBy: REVIEW,
    },
    pathway: [
      {
        type: "tvet",
        stages: [
          {
            title: { en: "O/L pass", ta: "சா/த சித்தி" },
            detail: { en: "Hotel school entry with O/L; English tested at interview.", ta: "சா/த உடன் ஹோட்டல் பாடசாலை நுழைவு; நேர்முகத்தில் ஆங்கிலம் சோதிக்கப்படும்." },
            badge: "current",
          },
          {
            title: { en: "SLITHM / NVQ 4 front office course (6–12 months)", ta: "SLITHM / NVQ 4 முன்னணி அலுவலகப் பாடநெறி (6–12 மாதங்கள்)" },
            detail: { en: "Sri Lanka Institute of Tourism and Hotel Management campuses and VTA centres offer front office training with placements.", ta: "SLITHM வளாகங்கள், VTA நிலையங்கள் வேலை இடத்துடன் கூடிய முன்னணி அலுவலகப் பயிற்சி வழங்குகின்றன." },
            badge: "current",
            barriers: [{ en: "Mostly English medium", ta: "பெரும்பாலும் ஆங்கில மொழிமூலம்" }],
          },
          {
            title: { en: "Front office associate", ta: "முன்னணி அலுவலக உதவியாளர்" },
            detail: { en: "Placements often convert to jobs at training hotels.", ta: "பயிற்சி ஹோட்டல்களில் இடங்கள் அடிக்கடி வேலைகளாக மாறும்." },
          },
          {
            title: { en: "Progression: supervisor, front office manager", ta: "முன்னேற்றம்: மேற்பார்வையாளர், முன்னணி அலுவலக மேலாளர்" },
            detail: { en: "Experience plus NVQ 5–6 or hotel school diplomas.", ta: "அனுபவம் + NVQ 5–6 அல்லது ஹோட்டல் பாடசாலை டிப்ளோமாக்கள்." },
          },
        ],
      },
      {
        type: "workfirst",
        stages: [
          {
            title: { en: "Entry job at a guesthouse or restaurant", ta: "விருந்தினர் இல்லம் அல்லது உணவகத்தில் தொடக்க வேலை" },
            detail: { en: "Many start without qualifications and learn guest service on the job.", ta: "பலர் தகைமைகள் இன்றித் தொடங்கி, வேலையிலேயே விருந்தோம்பலைக் கற்கிறார்கள்." },
          },
          {
            title: { en: "Improve English + short courses", ta: "ஆங்கிலம் மேம்படுத்தல் + குறுகிய பாடநெறிகள்" },
            detail: { en: "Evening and weekend hospitality English courses raise options quickly.", ta: "மாலை, வார இறுதி விருந்தோம்பல் ஆங்கிலப் பாடநெறிகள் வாய்ப்புகளை விரைவாக உயர்த்தும்." },
          },
          {
            title: { en: "RPL into NVQ certification", ta: "RPL வழி NVQ சான்றிதழ்" },
            detail: { en: "Experience can be certified for formal roles in larger hotels.", ta: "பெரிய ஹோட்டல்களில் முறையான பணிகளுக்காக அனுபவத்திற்குச் சான்றிதழ் பெறலாம்." },
            badge: "current",
          },
        ],
      },
    ],
    video: {
      available: true,
      role: { en: "Front Office Supervisor", ta: "முன்னணி அலுவலக மேற்பார்வையாளர்" },
      district: { en: "Trincomalee", ta: "திருகோணமலை" },
      route: "workfirst",
      language: { en: "Tamil", ta: "தமிழ்" },
      subtitles: { en: "Tamil + English subtitles", ta: "தமிழ் + ஆங்கில வசனங்கள்" },
      duration: "3:45",
    },
    verified: VERIFIED,
    reviewBy: REVIEW,
    sourceBasis: {
      en: "Based on SLITHM prospectus and TVEC NVQ manual (sample references)",
      ta: "SLITHM அறிக்கை, TVEC NVQ கையேட்டின் அடிப்படையில் (மாதிரி மேற்கோள்கள்)",
    },
  },

  {
    id: "midwife",
    title: { en: "Public Health Midwife", ta: "பொது சுகாதார மருத்துவச்சி" },
    sector: "health",
    routeTypes: ["tvet"],
    short: {
      en: "Supports mothers and babies in the community — antenatal care, home visits, clinics, and health education.",
      ta: "சமூகத்தில் தாய்மார்களையும் குழந்தைகளையும் ஆதரிக்கிறார் — கர்ப்பகாலப் பராமரிப்பு, இல்ல விஜயங்கள், கிளினிக்குகள், சுகாதாரக் கல்வி.",
    },
    languageNote: {
      en: "Tamil required in Tamil-speaking areas | Sinhala useful for records and training",
      ta: "தமிழ் பேசும் பகுதிகளில் தமிழ் அவசியம் | பதிவுகள், பயிற்சிக்கு சிங்களம் பயனுள்ளது",
    },
    workLanguages: ["tamil", "sinhala"],
    minStudyLevel: "al",
    districts: "all",
    about: [
      {
        en: "Public health midwives are the backbone of Sri Lanka's community health system. Each midwife covers a defined area, visiting homes, running clinics, tracking every pregnancy and young child in her area, and connecting families to hospital care when needed.",
        ta: "பொது சுகாதார மருத்துவச்சிகள் இலங்கையின் சமூக சுகாதார முறைமையின் முதுகெலும்பு. ஒவ்வொருவரும் வரையறுக்கப்பட்ட பகுதியில் இல்ல விஜயங்கள் செய்து, கிளினிக்குகள் நடத்தி, தமது பகுதியின் ஒவ்வொரு கர்ப்பத்தையும் சிறு குழந்தையையும் கண்காணித்து, தேவைப்படும்போது குடும்பங்களை மருத்துவமனைப் பராமரிப்புடன் இணைக்கிறார்கள்.",
      },
      {
        en: "This is respected, stable government employment with deep community connection. Training is free through the Ministry of Health, and postings are usually within your home region — a key difference from many other government health roles.",
        ta: "இது மதிப்புமிக்க, நிலையான அரச வேலை; ஆழ்ந்த சமூகத் தொடர்பு கொண்டது. சுகாதார அமைச்சின் மூலம் பயிற்சி இலவசம்; நியமனங்கள் பொதுவாகச் சொந்தப் பிரதேசத்திலேயே கிடைக்கும் — பல பிற அரச சுகாதாரப் பணிகளிலிருந்து இது முக்கிய வேறுபாடு.",
      },
    ],
    keySkills: [
      { en: "Maternal and child health care", ta: "தாய், சேய் நலப் பராமரிப்பு" },
      { en: "Community engagement and home visiting", ta: "சமூக ஈடுபாடு, இல்ல விஜயம்" },
      { en: "Health record management", ta: "சுகாதாரப் பதிவு நிர்வாகம்" },
      { en: "Health education and counselling", ta: "சுகாதாரக் கல்வி, ஆலோசனை" },
    ],
    digitalSkills: {
      en: "Basic smartphone use; digital health records being introduced",
      ta: "அடிப்படை ஸ்மார்ட்போன் பயன்பாடு; டிஜிட்டல் சுகாதாரப் பதிவுகள் அறிமுகமாகி வருகின்றன",
    },
    softSkills: {
      en: "Trustworthiness, empathy, independence, cultural sensitivity",
      ta: "நம்பகத்தன்மை, பரிவு, சுயச்சார்பு, பண்பாட்டு உணர்திறன்",
    },
    workplaces: [
      { en: "MOH area offices and field clinics", ta: "MOH பிரதேச அலுவலகங்கள், கள கிளினிக்குகள்" },
      { en: "Community homes (field visits)", ta: "சமூக இல்லங்கள் (கள விஜயங்கள்)" },
    ],
    demand: {
      text: {
        en: "Midwife recruitment continues annually with area vacancies published by province; Northern and Eastern provinces have recurring vacancies.",
        ta: "மருத்துவச்சி ஆட்சேர்ப்பு ஆண்டுதோறும் தொடர்கிறது; மாகாண வாரியாக வெற்றிடங்கள் வெளியிடப்படுகின்றன. வட, கிழக்கு மாகாணங்களில் தொடர் வெற்றிடங்கள் உண்டு.",
      },
      source: "Ministry of Health recruitment gazette 2025 (sample reference)",
      verified: VERIFIED,
      reviewBy: REVIEW,
    },
    pathway: [
      {
        type: "tvet",
        stages: [
          {
            title: { en: "A/L (science subjects preferred)", ta: "உ/த (விஞ்ஞானப் பாடங்கள் விரும்பத்தக்கவை)" },
            detail: { en: "Female candidates aged 18–30 with A/L passes are eligible (per current gazette rules).", ta: "உ/த சித்தியுடன் 18–30 வயது பெண் விண்ணப்பதாரர்கள் தகுதியுடையவர்கள் (தற்போதைய வர்த்தமானி விதிகள்)." },
            badge: "current",
            barriers: [{ en: "Currently open to female applicants only", ta: "தற்போது பெண் விண்ணப்பதாரர்களுக்கு மட்டும்" }],
          },
          {
            title: { en: "Midwifery training (18 months, free)", ta: "மருத்துவச்சி பயிற்சி (18 மாதங்கள், இலவசம்)" },
            detail: { en: "MOH training schools with allowance; includes hospital and field placements.", ta: "கொடுப்பனவுடன் MOH பயிற்சிப் பாடசாலைகள்; மருத்துவமனை, கள பயிற்சிகள் உட்பட." },
            badge: "current",
          },
          {
            title: { en: "Public Health Midwife appointment", ta: "பொது சுகாதார மருத்துவச்சி நியமனம்" },
            detail: { en: "Assigned to an MOH area, usually within your province.", ta: "MOH பகுதிக்கு நியமனம்; பொதுவாக உங்கள் மாகாணத்திற்குள்." },
          },
          {
            title: { en: "Progression: supervising midwife, public health nursing", ta: "முன்னேற்றம்: மேற்பார்வை மருத்துவச்சி, பொது சுகாதாரத் தாதியம்" },
            detail: { en: "Further training routes into supervisory and nursing grades.", ta: "மேற்பார்வை, தாதிய தரங்களுக்கான மேலதிக பயிற்சி வழிகள்." },
          },
        ],
      },
    ],
    verified: VERIFIED,
    reviewBy: REVIEW,
    sourceBasis: {
      en: "Based on Ministry of Health training gazette notices (sample references)",
      ta: "சுகாதார அமைச்சு பயிற்சி வர்த்தமானி அறிவிப்புகளின் அடிப்படையில் (மாதிரி மேற்கோள்கள்)",
    },
  },

  {
    id: "quantity-surveyor",
    title: { en: "Quantity Surveyor", ta: "அளவை மதிப்பீட்டாளர் (QS)" },
    sector: "construction",
    routeTypes: ["university", "tvet", "professional"],
    short: {
      en: "Calculates the costs of construction projects and manages budgets from design to completion.",
      ta: "கட்டுமானத் திட்டங்களின் செலவுகளைக் கணக்கிட்டு, வடிவமைப்பு முதல் நிறைவு வரை வரவு-செலவை நிர்வகிக்கிறார்.",
    },
    languageNote: {
      en: "English required for contracts and reports | Tamil/Sinhala on sites",
      ta: "ஒப்பந்தங்கள், அறிக்கைகளுக்கு ஆங்கிலம் அவசியம் | தளங்களில் தமிழ்/சிங்களம்",
    },
    workLanguages: ["english", "mixed"],
    minStudyLevel: "al",
    districts: "all",
    about: [
      {
        en: "Quantity surveyors measure drawings, estimate material and labour costs, prepare tender documents, and track spending on construction projects. The role mixes office calculation work with site visits, and is in demand wherever building happens — including the Gulf region.",
        ta: "அளவை மதிப்பீட்டாளர்கள் வரைபடங்களை அளந்து, பொருள், தொழிலாளர் செலவுகளை மதிப்பிட்டு, டெண்டர் ஆவணங்களைத் தயாரித்து, கட்டுமானத் திட்டங்களின் செலவைக் கண்காணிக்கிறார்கள். அலுவலகக் கணக்கீடும் தள விஜயங்களும் கலந்த பணி; கட்டுமானம் நடக்கும் எல்லா இடங்களிலும் — வளைகுடா நாடுகள் உட்பட — தேவை உண்டு.",
      },
      {
        en: "There are several entry levels: NVQ diplomas lead to site QS assistant roles, while degrees and professional membership (e.g. IQSSL) lead to chartered status. Many start with an NVQ 5/6 diploma and upgrade while working.",
        ta: "பல நுழைவு நிலைகள் உண்டு: NVQ டிப்ளோமாக்கள் தள QS உதவியாளர் பணிகளுக்கும், பட்டங்களும் தொழில்சார் உறுப்புரிமையும் (எ.கா. IQSSL) பட்டய நிலைக்கும் இட்டுச்செல்லும். பலர் NVQ 5/6 டிப்ளோமாவுடன் தொடங்கி வேலையுடன் மேம்படுத்துகிறார்கள்.",
      },
    ],
    keySkills: [
      { en: "Measurement and cost calculation", ta: "அளவீடு, செலவுக் கணக்கீடு" },
      { en: "Reading construction drawings", ta: "கட்டுமான வரைபடங்களை வாசித்தல்" },
      { en: "Contract documentation", ta: "ஒப்பந்த ஆவணமாக்கல்" },
      { en: "Negotiation with suppliers and contractors", ta: "விநியோகஸ்தர்கள், ஒப்பந்தக்காரர்களுடன் பேச்சுவார்த்தை" },
    ],
    digitalSkills: {
      en: "Excel essential; QS software (CostX, Planswift) and AutoCAD reading valued",
      ta: "Excel அவசியம்; QS மென்பொருள் (CostX, Planswift), AutoCAD வாசிப்பு மதிப்புமிக்கவை",
    },
    softSkills: {
      en: "Accuracy, integrity with money, clear reporting",
      ta: "துல்லியம், பண நேர்மை, தெளிவான அறிக்கையிடல்",
    },
    workplaces: [
      { en: "Construction and consultancy firms", ta: "கட்டுமான, ஆலோசனை நிறுவனங்கள்" },
      { en: "Government departments (Buildings, RDA)", ta: "அரச திணைக்களங்கள் (கட்டடங்கள், RDA)" },
      { en: "Gulf region construction (major employer of Sri Lankan QS)", ta: "வளைகுடா கட்டுமானம் (இலங்கை QS-களுக்குப் பெரிய வேலைவாய்ப்பு)" },
    ],
    demand: {
      text: {
        en: "QS roles track construction activity, which fluctuates with the economy; overseas demand from the Gulf remains a consistent employer of Sri Lankan-qualified QS staff.",
        ta: "QS பணிகள் கட்டுமான நடவடிக்கையைப் பின்பற்றும்; இது பொருளாதாரத்துடன் ஏற்ற இறங்கும். வளைகுடா நாடுகளின் தேவை இலங்கைத் தகைமையுள்ள QS ஊழியர்களுக்கு நிலையான வேலைவாய்ப்பாக உள்ளது.",
      },
      source: "CIDA industry outlook 2025 (sample reference)",
      verified: VERIFIED,
      reviewBy: REVIEW,
    },
    pathway: [
      {
        type: "tvet",
        stages: [
          {
            title: { en: "O/L or A/L with maths", ta: "கணிதத்துடன் சா/த அல்லது உ/த" },
            detail: { en: "NVQ 5 QS diplomas typically ask for maths passes.", ta: "NVQ 5 QS டிப்ளோமாக்களுக்குப் பொதுவாகக் கணித சித்தி தேவை." },
            badge: "current",
          },
          {
            title: { en: "NVQ 5/6 Diploma in Quantity Surveying (2 years)", ta: "NVQ 5/6 அளவை மதிப்பீட்டு டிப்ளோமா (2 ஆண்டுகள்)" },
            detail: { en: "Offered at technical colleges (DTET) and UoVT-affiliated centres.", ta: "தொழில்நுட்பக் கல்லூரிகள் (DTET), UoVT இணைந்த நிலையங்களில் வழங்கப்படுகிறது." },
            badge: "current",
            barriers: [{ en: "English-medium from NVQ 5", ta: "NVQ 5 முதல் ஆங்கில மொழிமூலம்" }],
          },
          {
            title: { en: "Site QS assistant", ta: "தள QS உதவியாளர்" },
            detail: { en: "Entry roles on construction sites and in contractor offices.", ta: "கட்டுமானத் தளங்கள், ஒப்பந்தக்காரர் அலுவலகங்களில் தொடக்கப் பணிகள்." },
          },
          {
            title: { en: "Progression: UoVT degree, IQSSL membership", ta: "முன்னேற்றம்: UoVT பட்டம், IQSSL உறுப்புரிமை" },
            detail: { en: "Diploma holders can progress to degree and chartered status while working.", ta: "டிப்ளோமாதாரர்கள் வேலையுடன் பட்டம், பட்டய நிலைக்கு முன்னேறலாம்." },
          },
        ],
      },
      {
        type: "university",
        stages: [
          {
            title: { en: "A/L (Physical Science / Technology)", ta: "உ/த (பௌதீக விஞ்ஞானம் / தொழில்நுட்பம்)" },
            detail: { en: "Z-score selection for BSc QS at University of Moratuwa and others.", ta: "மொறட்டுவ முதலிய பல்கலைக்கழகங்களில் BSc QS-க்கு Z-மதிப்பெண் தேர்வு." },
            badge: "current",
            barriers: [{ en: "Very competitive Z-score cutoffs", ta: "மிக உயர்ந்த Z-மதிப்பெண் வரம்புகள்" }],
          },
          {
            title: { en: "BSc Quantity Surveying (4 years)", ta: "BSc அளவை மதிப்பீடு (4 ஆண்டுகள்)" },
            detail: { en: "Includes industrial placement.", ta: "தொழில்துறை பயிற்சி உட்பட." },
            badge: "current",
          },
          {
            title: { en: "Graduate QS, chartered pathway", ta: "பட்டதாரி QS, பட்டயப் பாதை" },
            detail: { en: "IQSSL / RICS professional membership after supervised experience.", ta: "மேற்பார்வை அனுபவத்திற்குப் பின் IQSSL / RICS தொழில்சார் உறுப்புரிமை." },
          },
        ],
      },
    ],
    verified: VERIFIED,
    reviewBy: REVIEW,
    sourceBasis: {
      en: "Based on TVEC NVQ manual and UGC 2024/25 handbook (sample references)",
      ta: "TVEC NVQ கையேடு, UGC 2024/25 கையேட்டின் அடிப்படையில் (மாதிரி மேற்கோள்கள்)",
    },
  },

  {
    id: "automotive-technician",
    title: { en: "Automotive Technician", ta: "வாகனத் தொழில்நுட்பவியலாளர்" },
    sector: "trades",
    routeTypes: ["tvet", "apprenticeship", "workfirst"],
    short: {
      en: "Services and repairs cars, motorcycles, three-wheelers, and commercial vehicles.",
      ta: "கார்கள், மோட்டார் சைக்கிள்கள், முச்சக்கர வண்டிகள், வர்த்தக வாகனங்களைப் பராமரித்துப் பழுதுபார்க்கிறார்.",
    },
    languageNote: {
      en: "Tamil sufficient for most workshops | Technical manuals often in English",
      ta: "பெரும்பாலான பட்டறைகளுக்குத் தமிழ் போதும் | தொழில்நுட்பக் கையேடுகள் பெரும்பாலும் ஆங்கிலத்தில்",
    },
    workLanguages: ["tamil", "mixed"],
    minStudyLevel: "none",
    districts: "all",
    about: [
      {
        en: "Automotive technicians diagnose faults, service engines, repair electrical systems, and increasingly work with hybrid and electric vehicles. Every town has workshops, and skilled technicians with diagnostic-computer skills are hard to find.",
        ta: "வாகனத் தொழில்நுட்பவியலாளர்கள் பழுதுகளைக் கண்டறிந்து, என்ஜின்களைப் பராமரித்து, மின் அமைப்புகளைப் பழுதுபார்க்கிறார்கள்; hybrid, மின்சார வாகனங்களுடன் வேலை அதிகரித்து வருகிறது. ஒவ்வொரு நகரிலும் பட்டறைகள் உண்டு; diagnostic கணினித் திறன் கொண்ட தொழிலாளர்கள் கிடைப்பது அரிது.",
      },
      {
        en: "Entry is possible with no formal qualifications as a workshop helper, but NVQ certification and NAITA apprenticeships lead to authorised-dealer jobs, higher pay, and overseas opportunities. Hybrid/EV certification is becoming the most valuable specialism.",
        ta: "முறையான தகைமைகள் இன்றி பட்டறை உதவியாளராக நுழையலாம்; ஆனால் NVQ சான்றிதழும் NAITA பயிற்சியும் அங்கீகரிக்கப்பட்ட விற்பனையாளர் வேலைகள், உயர் ஊதியம், வெளிநாட்டு வாய்ப்புகளுக்கு இட்டுச்செல்லும். Hybrid/EV சான்றிதழ் மிக மதிப்புமிக்க சிறப்புத் துறையாகி வருகிறது.",
      },
    ],
    keySkills: [
      { en: "Engine and mechanical repair", ta: "என்ஜின், இயந்திரப் பழுது நீக்கம்" },
      { en: "Electrical fault diagnosis", ta: "மின் பழுது கண்டறிதல்" },
      { en: "Use of diagnostic tools", ta: "Diagnostic கருவிகளின் பயன்பாடு" },
      { en: "Careful, methodical working", ta: "கவனமான, முறையான வேலை" },
    ],
    digitalSkills: {
      en: "Diagnostic computers used in modern workshops; basic apps for parts ordering",
      ta: "நவீன பட்டறைகளில் diagnostic கணினிகள்; உதிரிப்பாகங்களுக்கு அடிப்படை செயலிகள்",
    },
    softSkills: {
      en: "Honesty with customers, patience, willingness to keep learning new vehicle technology",
      ta: "வாடிக்கையாளர்களுடன் நேர்மை, பொறுமை, புதிய வாகன தொழில்நுட்பம் கற்கும் ஆர்வம்",
    },
    workplaces: [
      { en: "Local workshops and garages", ta: "உள்ளூர் பட்டறைகள், கராஜ்கள்" },
      { en: "Authorised dealer service centres", ta: "அங்கீகரிக்கப்பட்ட விற்பனையாளர் சேவை நிலையங்கள்" },
      { en: "Self-employment (own workshop)", ta: "சுயதொழில் (சொந்தப் பட்டறை)" },
      { en: "Transport fleets and overseas garages", ta: "போக்குவரத்து நிறுவனங்கள், வெளிநாட்டு கராஜ்கள்" },
    ],
    informalNote: {
      en: "A significant share of this trade is informal. RPL certification converts experience into recognised qualifications.",
      ta: "இத்தொழிலின் கணிசமான பகுதி முறைசாராதது. RPL சான்றிதழ் அனுபவத்தை அங்கீகரிக்கப்பட்ட தகைமைகளாக மாற்றும்.",
    },
    demand: {
      text: {
        en: "Vehicle repair demand is steady island-wide; hybrid and EV skills are increasingly requested as the vehicle fleet changes.",
        ta: "வாகனப் பழுது நீக்கத் தேவை நாடு முழுவதும் நிலையாக உள்ளது; வாகனத் தொகுப்பு மாறுவதால் hybrid, EV திறன்கள் அதிகமாகக் கேட்கப்படுகின்றன.",
      },
      source: "DCS Labour Force Survey Q4 2025 (sample reference)",
      verified: VERIFIED,
      reviewBy: REVIEW,
    },
    pathway: [
      {
        type: "apprenticeship",
        stages: [
          {
            title: { en: "School leaver", ta: "பாடசாலை விட்டவர்" },
            detail: { en: "NAITA automotive apprenticeships accept school leavers without formal passes.", ta: "NAITA வாகனப் பயிலுநர் பயிற்சிகள் முறையான சித்திகள் இன்றிப் பாடசாலை விட்டவர்களை ஏற்கும்." },
            badge: "current",
          },
          {
            title: { en: "NAITA apprenticeship (2 years, paid)", ta: "NAITA பயிலுநர் பயிற்சி (2 ஆண்டுகள், ஊதியத்துடன்)" },
            detail: { en: "Training in a registered workshop with a monthly allowance.", ta: "மாதாந்தக் கொடுப்பனவுடன் பதிவுசெய்யப்பட்ட பட்டறையில் பயிற்சி." },
            badge: "current",
          },
          {
            title: { en: "NVQ 3–4 certification", ta: "NVQ 3–4 சான்றிதழ்" },
            detail: { en: "Trade test on completion; opens dealer and fleet jobs.", ta: "நிறைவில் தொழில் தேர்வு; விற்பனையாளர், வாகனத் தொகுப்பு வேலைகள் திறக்கும்." },
          },
          {
            title: { en: "Progression: specialist (hybrid/EV), workshop owner", ta: "முன்னேற்றம்: சிறப்பு (hybrid/EV), பட்டறை உரிமையாளர்" },
            detail: { en: "Specialist short courses at DTET/private academies.", ta: "DTET/தனியார் கல்விக்கூடங்களில் சிறப்புக் குறுகிய பாடநெறிகள்." },
          },
        ],
      },
      {
        type: "tvet",
        stages: [
          {
            title: { en: "O/L (not always required)", ta: "சா/த (எப்போதும் தேவையில்லை)" },
            detail: { en: "NVQ 3 automotive courses at VTA centres accept O/L leavers.", ta: "VTA நிலையங்களின் NVQ 3 வாகனப் பாடநெறிகள் சா/த முடித்தவர்களை ஏற்கும்." },
            badge: "current",
          },
          {
            title: { en: "NVQ 3–4 Automobile Technology (1–2 years)", ta: "NVQ 3–4 வாகன தொழில்நுட்பம் (1–2 ஆண்டுகள்)" },
            detail: { en: "Tamil-medium available at Northern and Eastern centres.", ta: "வட, கிழக்கு நிலையங்களில் தமிழ் மொழிமூலம் உண்டு." },
            badge: "current",
          },
          {
            title: { en: "Technician role or self-employment", ta: "தொழில்நுட்டப் பணி அல்லது சுயதொழில்" },
            detail: { en: "Toolkits and startup support sometimes available through programmes.", ta: "சில திட்டங்கள் மூலம் கருவிகள், தொடக்க உதவி கிடைக்கலாம்." },
          },
        ],
      },
    ],
    verified: VERIFIED,
    reviewBy: REVIEW,
    sourceBasis: {
      en: "Based on TVEC NVQ manual and NAITA programme guides (sample references)",
      ta: "TVEC NVQ கையேடு, NAITA திட்ட வழிகாட்டிகளின் அடிப்படையில் (மாதிரி மேற்கோள்கள்)",
    },
  },

  {
    id: "graphic-designer",
    title: { en: "Graphic Designer", ta: "வரைகலை வடிவமைப்பாளர்" },
    sector: "ict",
    routeTypes: ["tvet", "professional", "workfirst"],
    short: {
      en: "Creates visual designs for brands, social media, packaging, and print — often freelance or remote.",
      ta: "வர்த்தக முத்திரைகள், சமூக ஊடகம், பொதி, அச்சு ஆகியவற்றுக்கான காட்சி வடிவமைப்புகளை உருவாக்குகிறார் — பெரும்பாலும் freelance அல்லது தொலைநிலை.",
    },
    languageNote: {
      en: "English useful for clients and tools | Tamil valuable for local campaigns",
      ta: "வாடிக்கையாளர்கள், கருவிகளுக்கு ஆங்கிலம் பயனுள்ளது | உள்ளூர் பிரச்சாரங்களுக்குத் தமிழ் மதிப்புமிக்கது",
    },
    workLanguages: ["mixed", "english"],
    minStudyLevel: "ol",
    districts: "all",
    about: [
      {
        en: "Graphic designers turn ideas into visuals: logos, posters, social media posts, product packaging, and app interfaces. Work comes from agencies, printing shops, businesses, and online freelance platforms serving clients worldwide.",
        ta: "வரைகலை வடிவமைப்பாளர்கள் யோசனைகளைக் காட்சிகளாக மாற்றுகிறார்கள்: இலச்சினைகள், சுவரொட்டிகள், சமூக ஊடகப் பதிவுகள், பொதி வடிவமைப்பு, செயலி இடைமுகங்கள். வேலைகள் agency-கள், அச்சகங்கள், வணிகங்கள், உலகளாவிய வாடிக்கையாளர்களுக்கான இணைய freelance தளங்களிலிருந்து வருகின்றன.",
      },
      {
        en: "Like software development, this field values portfolio over paper qualifications. A student with a good eye, consistent practice, and a strong portfolio can start earning while still studying — but competition on freelance platforms is global.",
        ta: "மென்பொருள் துறை போலவே, இத்துறையும் சான்றிதழ்களை விட portfolio-வையே மதிக்கிறது. நல்ல பார்வை, தொடர் பயிற்சி, வலுவான portfolio கொண்ட மாணவர் படிக்கும்போதே சம்பாதிக்கத் தொடங்கலாம் — ஆனால் freelance தளங்களில் போட்டி உலகளாவியது.",
      },
    ],
    keySkills: [
      { en: "Design software (Photoshop, Illustrator, Canva, Figma)", ta: "வடிவமைப்பு மென்பொருள் (Photoshop, Illustrator, Canva, Figma)" },
      { en: "Layout, colour, and typography", ta: "அமைப்பு, நிறம், எழுத்துக்கலை" },
      { en: "Understanding a client brief", ta: "வாடிக்கையாளர் தேவையைப் புரிதல்" },
      { en: "Meeting deadlines on multiple projects", ta: "பல திட்டங்களில் காலக்கெடு காத்தல்" },
    ],
    digitalSkills: {
      en: "Fully computer-based; a capable PC/laptop is a genuine startup cost",
      ta: "முழுமையாக கணினி சார்ந்தது; திறனுள்ள கணினி உண்மையான தொடக்கச் செலவு",
    },
    softSkills: {
      en: "Creativity, accepting feedback, self-promotion",
      ta: "படைப்பாற்றல், கருத்துகளை ஏற்றல், சுய விளம்பரம்",
    },
    workplaces: [
      { en: "Advertising and design agencies", ta: "விளம்பர, வடிவமைப்பு நிறுவனங்கள்" },
      { en: "Printing shops", ta: "அச்சகங்கள்" },
      { en: "Freelance platforms (global clients)", ta: "Freelance தளங்கள் (உலக வாடிக்கையாளர்கள்)" },
      { en: "In-house roles at companies and media", ta: "நிறுவனங்கள், ஊடகங்களில் உள்ளக வேலைகள்" },
    ],
    demand: {
      text: {
        en: "Steady demand from local businesses for social media and print design; global freelance demand is large but competitive. Tamil-language design skills are a niche advantage locally.",
        ta: "சமூக ஊடக, அச்சு வடிவமைப்புக்கு உள்ளூர் வணிகங்களிடமிருந்து நிலையான தேவை; உலக freelance தேவை பெரியது ஆனால் போட்டி மிக்கது. தமிழ்மொழி வடிவமைப்புத் திறன் உள்ளூரில் தனித்துவமான அனுகூலம்.",
      },
      source: "ICTA workforce survey 2025 (sample reference)",
      verified: VERIFIED,
      reviewBy: REVIEW,
    },
    pathway: [
      {
        type: "tvet",
        stages: [
          {
            title: { en: "O/L pass", ta: "சா/த சித்தி" },
            detail: { en: "NVQ 4 graphic design courses accept O/L leavers.", ta: "NVQ 4 வரைகலை வடிவமைப்புப் பாடநெறிகள் சா/த முடித்தவர்களை ஏற்கும்." },
            badge: "current",
          },
          {
            title: { en: "NVQ 4 Graphic Design (VTA, ~1 year)", ta: "NVQ 4 வரைகலை வடிவமைப்பு (VTA, ~1 ஆண்டு)" },
            detail: { en: "Covers design software and print production basics.", ta: "வடிவமைப்பு மென்பொருள், அச்சு உற்பத்தி அடிப்படைகள் உட்பட." },
            badge: "current",
          },
          {
            title: { en: "Junior designer at agency or print shop", ta: "Agency அல்லது அச்சகத்தில் இளநிலை வடிவமைப்பாளர்" },
            detail: { en: "Build a client portfolio in your first roles.", ta: "முதல் வேலைகளில் வாடிக்கையாளர் portfolio-வை உருவாக்குங்கள்." },
          },
        ],
      },
      {
        type: "workfirst",
        stages: [
          {
            title: { en: "Self-study with free tools", ta: "இலவசக் கருவிகளுடன் சுயகற்றல்" },
            detail: { en: "Free tutorials plus Canva/Figma cover the basics without fees.", ta: "இலவசப் பயிற்சிகள் + Canva/Figma கட்டணமின்றி அடிப்படைகளைக் கற்றுத்தரும்." },
            barriers: [{ en: "Capable computer and internet required", ta: "திறனுள்ள கணினியும் இணையமும் தேவை" }],
          },
          {
            title: { en: "Small local projects", ta: "சிறிய உள்ளூர் திட்டங்கள்" },
            detail: { en: "Posters, wedding cards, and shop branding build a real portfolio.", ta: "சுவரொட்டிகள், திருமண அட்டைகள், கடை branding உண்மையான portfolio-வை உருவாக்கும்." },
          },
          {
            title: { en: "Freelance platforms or agency role", ta: "Freelance தளங்கள் அல்லது agency பணி" },
            detail: { en: "Progress to steady clients or an in-house position.", ta: "நிலையான வாடிக்கையாளர்கள் அல்லது உள்ளக வேலைக்கு முன்னேறுங்கள்." },
          },
        ],
      },
    ],
    verified: VERIFIED,
    reviewBy: REVIEW,
    sourceBasis: {
      en: "Based on TVEC NVQ manual and provider prospectuses (sample references)",
      ta: "TVEC NVQ கையேடு, நிறுவன அறிக்கைகளின் அடிப்படையில் (மாதிரி மேற்கோள்கள்)",
    },
  },

  {
    id: "community-development-officer",
    title: { en: "Community Development Officer", ta: "சமூக மேம்பாட்டு அலுவலர்" },
    sector: "community",
    routeTypes: ["university", "professional", "workfirst"],
    short: {
      en: "Plans and runs programmes with communities — livelihoods, youth, women's groups, and local services.",
      ta: "சமூகங்களுடன் திட்டங்களைத் திட்டமிட்டு நடத்துகிறார் — வாழ்வாதாரம், இளையோர், மகளிர் குழுக்கள், உள்ளூர் சேவைகள்.",
    },
    languageNote: {
      en: "Tamil required for field work | English required for reports and donor communication",
      ta: "களப்பணிக்குத் தமிழ் அவசியம் | அறிக்கைகள், நிதியாளர் தொடர்புக்கு ஆங்கிலம் அவசியம்",
    },
    workLanguages: ["tamil", "english"],
    minStudyLevel: "al",
    districts: ["jaffna", "kilinochchi", "mullaitivu", "mannar", "vavuniya", "batticaloa", "trincomalee", "ampara"],
    about: [
      {
        en: "Community development officers work for NGOs, cooperatives, and government programmes. A typical week mixes field visits, group meetings, data collection, and writing reports for funders. The job needs both people skills in Tamil and writing skills in English.",
        ta: "சமூக மேம்பாட்டு அலுவலர்கள் NGO-க்கள், கூட்டுறவுகள், அரச திட்டங்களில் பணிபுரிகிறார்கள். வழக்கமான வாரத்தில் கள விஜயங்கள், குழுக் கூட்டங்கள், தரவு சேகரிப்பு, நிதியாளர்களுக்கான அறிக்கை எழுதுதல் அடங்கும். தமிழில் மக்கள் திறனும் ஆங்கிலத்தில் எழுத்துத் திறனும் தேவை.",
      },
      {
        en: "In Northern and Eastern provinces this is a significant employment sector. Entry is possible through volunteering and field assistant roles, with progression to officer and coordinator grades as experience and qualifications grow.",
        ta: "வட, கிழக்கு மாகாணங்களில் இது குறிப்பிடத்தக்க வேலைவாய்ப்புத் துறை. தன்னார்வப் பணி, கள உதவியாளர் பணிகள் வழியாக நுழையலாம்; அனுபவமும் தகைமையும் வளர, அலுவலர், ஒருங்கிணைப்பாளர் தரங்களுக்கு முன்னேறலாம்.",
      },
    ],
    keySkills: [
      { en: "Community facilitation and listening", ta: "சமூக ஒருங்கிணைப்பு, செவிமடுத்தல்" },
      { en: "Report writing in English", ta: "ஆங்கிலத்தில் அறிக்கை எழுதுதல்" },
      { en: "Basic data collection and surveys", ta: "அடிப்படை தரவு சேகரிப்பு, ஆய்வுகள்" },
      { en: "Planning small projects and budgets", ta: "சிறு திட்டங்கள், வரவு-செலவுத் திட்டமிடல்" },
    ],
    digitalSkills: {
      en: "Word, Excel, and email essential; mobile data collection apps common",
      ta: "Word, Excel, மின்னஞ்சல் அவசியம்; கைபேசி தரவு சேகரிப்புச் செயலிகள் பொதுவானவை",
    },
    softSkills: {
      en: "Trust-building, neutrality, cultural sensitivity, resilience",
      ta: "நம்பிக்கை கட்டமைத்தல், நடுநிலை, பண்பாட்டு உணர்திறன், மன உறுதி",
    },
    workplaces: [
      { en: "Local and international NGOs", ta: "உள்ளூர், சர்வதேச NGO-க்கள்" },
      { en: "Government programmes (Samurdhi, divisional secretariats)", ta: "அரச திட்டங்கள் (சமுர்த்தி, பிரதேச செயலகங்கள்)" },
      { en: "Cooperatives and community organisations", ta: "கூட்டுறவுகள், சமூக அமைப்புகள்" },
    ],
    demand: {
      text: {
        en: "NGO employment in Northern and Eastern provinces varies with funding cycles; government community programmes recruit periodically. English report-writing skill is the most common gap cited by employers.",
        ta: "வட, கிழக்கு மாகாணங்களில் NGO வேலைவாய்ப்பு நிதிச் சுழற்சிகளுடன் மாறுபடும்; அரச சமூகத் திட்டங்கள் அவ்வப்போது ஆட்சேர்க்கின்றன. ஆங்கில அறிக்கை எழுதும் திறனே முதலாளிகள் குறிப்பிடும் பொதுவான பற்றாக்குறை.",
      },
      source: "District NGO consortium listings 2025 (sample reference)",
      verified: VERIFIED,
      reviewBy: REVIEW,
    },
    pathway: [
      {
        type: "university",
        stages: [
          {
            title: { en: "A/L (Arts stream common)", ta: "உ/த (கலைப் பிரிவு பொதுவானது)" },
            detail: { en: "Sociology, economics, and social work degrees via UGC.", ta: "UGC வழி சமூகவியல், பொருளியல், சமூகப்பணி பட்டங்கள்." },
            badge: "current",
          },
          {
            title: { en: "BA in Social Sciences (3 years)", ta: "BA சமூக விஞ்ஞானம் (3 ஆண்டுகள்)" },
            detail: { en: "Jaffna and Eastern universities offer Tamil-medium social science degrees.", ta: "யாழ்ப்பாணம், கிழக்குப் பல்கலைக்கழகங்கள் தமிழ் மொழிமூலச் சமூக விஞ்ஞானப் பட்டங்களை வழங்குகின்றன." },
            badge: "current",
          },
          {
            title: { en: "Programme officer role", ta: "திட்ட அலுவலர் பணி" },
            detail: { en: "Graduates enter NGO and government programmes directly.", ta: "பட்டதாரிகள் NGO, அரச திட்டங்களில் நேரடியாக நுழைவர்." },
          },
        ],
      },
      {
        type: "workfirst",
        stages: [
          {
            title: { en: "Volunteer or field assistant", ta: "தன்னார்வலர் அல்லது கள உதவியாளர்" },
            detail: { en: "Local NGOs recruit school leavers for field data and mobilisation roles.", ta: "உள்ளூர் NGO-க்கள் கள தரவு, ஒருங்கிணைப்புப் பணிகளுக்குப் பாடசாலை விட்டவர்களை ஆட்சேர்க்கின்றன." },
          },
          {
            title: { en: "Short courses (project management, English)", ta: "குறுகிய பாடநெறிகள் (திட்ட முகாமைத்துவம், ஆங்கிலம்)" },
            detail: { en: "Evening certificates strengthen promotion prospects.", ta: "மாலைநேரச் சான்றிதழ்கள் பதவி உயர்வு வாய்ப்புகளை வலுப்படுத்தும்." },
          },
          {
            title: { en: "Community development officer", ta: "சமூக மேம்பாட்டு அலுவலர்" },
            detail: { en: "Progression with experience; OUSL degrees can be added part-time.", ta: "அனுபவத்துடன் முன்னேற்றம்; OUSL பட்டங்களைப் பகுதி நேரமாகச் சேர்க்கலாம்." },
          },
        ],
      },
    ],
    verified: VERIFIED,
    reviewBy: REVIEW,
    sourceBasis: {
      en: "Based on university prospectuses and NGO recruitment practice (sample references)",
      ta: "பல்கலைக்கழக அறிக்கைகள், NGO ஆட்சேர்ப்பு நடைமுறையின் அடிப்படையில் (மாதிரி மேற்கோள்கள்)",
    },
  },
];

export function getJob(id: string): Job | undefined {
  return JOBS.find((j) => j.id === id);
}
