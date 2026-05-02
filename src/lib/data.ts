export type FileLang =
  | "TypeScript React"
  | "HTML"
  | "JavaScript"
  | "JSON"
  | "TypeScript"
  | "CSS"
  | "Markdown"
  | "PDF";

export type FileItem = {
  id: string;
  name: string;
  folder: string;
  lang: FileLang;
  download?: boolean;
};

export const FILES: FileItem[] = [
  { id: "home", name: "home.tsx", folder: "src", lang: "TypeScript React" },
  { id: "about", name: "about.html", folder: "src", lang: "HTML" },
  { id: "projects", name: "projects.js", folder: "src", lang: "JavaScript" },
  { id: "skills", name: "skills.json", folder: "data", lang: "JSON" },
  { id: "experience", name: "experience.ts", folder: "src", lang: "TypeScript" },
  { id: "contact", name: "contact.css", folder: "src", lang: "CSS" },
  { id: "readme", name: "README.md", folder: "root", lang: "Markdown" },
  {
    id: "resume",
    name: "Manish_Lakhiwal_Resume.pdf",
    folder: "root",
    lang: "PDF",
    download: true,
  },
];

export const TAGLINES = [
  "Shipping fintech with Flutter + Django 💸",
  "Training ML models that catch DDoS in <100ms ⚡",
  "Turning 4-hour PDF jobs into 30-minute pipelines 🚀",
  "Always learning, always shipping ✨",
  "Full stack across mobile, backend & ML 🛠️",
];

export const PROFILE = {
  name: "Manish Kumar Lakhiwal",
  role: "Full Stack Developer & ML Engineer @ Finworks360",
  location: "Faridabad, Haryana 🇮🇳",
  phone: "+91 83839 54896",
  email: "lakhiwal43@gmail.com",
  bio: "Full Stack Developer and ML Engineer comfortable moving across backend APIs, mobile UI, and ML pipelines. I work in Java/Spring Boot, Python/Django, and Flutter. Currently building a Flutter + Django fintech platform at Finworks360 covering seller onboarding, invoice management, and wallets. On the research side I'm a published IEEE author on ML for network traffic classification and DDoS detection — my SDN ensemble hit 97.2% accuracy with sub-100ms inference. I love systems where solid backend, mobile polish, and ML actually meet.",
  links: {
    github: "https://github.com/Lakhiwal",
    linkedin: "https://linkedin.com/in/manishlakhiwal",
    medium: "",
    tableau: "",
    youtube: "",
    instagram: "",
    leetcode: "",
  },
};

export const ROLES = [
  { label: "Full Stack Developer", color: "#4ec9b0" },
  { label: "ML Engineer", color: "#c586c0" },
  { label: "IEEE Researcher", color: "#4fc1ff" },
  { label: "@ Finworks360", color: "#ff6fd8" },
];

export const STATS = [
  { label: "Years", value: "4+" },
  { label: "Projects", value: "5+" },
  { label: "IEEE Pubs", value: "4" },
  { label: "Always Learning", value: "↑" },
];

export const EDUCATION = [
  {
    id: 1,
    institution: "Manav Rachna International Institute Of Research & Studies",
    university: "Faridabad, Haryana",
    degree: "M.Tech in Computer Science & Engineering (AI/ML)",
    minor: "Thesis: DDoS Attack Detection in SDN using Ensemble ML (97.2% accuracy)",
    gpa: "",
    period: "2023 – 2025",
    location: "Faridabad, HR",
    icon: "🎓",
  },
  {
    id: 2,
    institution: "Maharshi Dayanand University, Rohtak",
    degree: "B.Tech in Computer Science & Engineering",
    gpa: "",
    period: "2016 – 2020",
    location: "Rohtak, HR",
    icon: "🏫",
  },
];

export type Project = {
  id: number;
  icon: string;
  accent: string;
  type: string;
  name: string;
  desc: string;
  tags: string[];
  link?: string;
  demo?: string;
  period: string;
};

export const PROJECTS: Project[] = [
  {
    id: 0,
    icon: "🎙️",
    accent: "#4ec9b0",
    type: "Local AI · ASR · Privacy-first",
    name: "ai-meeting — Local AI Meeting Transcription",
    desc: "Fully on-device meeting transcription and summarization app. Runs Whisper for ASR, Pyannote for speaker diarization, and DistilBART for summarization — no cloud calls, no leaked transcripts. Added Hindi and Devanagari script support with custom Unicode handling so non-English meetings transcribe cleanly.",
    tags: ["Flask", "Whisper", "Pyannote", "DistilBART", "Python", "Hugging Face"],
    link: "https://github.com/Lakhiwal",
    period: "2025",
  },
  {
    id: 1,
    icon: "🛡️",
    accent: "#ff6fd8",
    type: "ML · SDN · Network Security",
    name: "DDoS Attack Detection in SDN using ML",
    desc: "M.Tech thesis. Trained ensemble models (Random Forest, XGBoost, Deep Neural Networks) on 2.67M traffic records, hitting 97.2% accuracy and 0.93 F1 classifying DDoS attacks. Used RFE, SMOTE, and information-gain feature selection to reduce false positives, then deployed on a Ryu SDN controller for real-time packet inspection at sub-100ms latency. Published in IEEE ICCSC-2026.",
    tags: ["Python", "TensorFlow", "Scikit-learn", "XGBoost", "Ryu SDN", "IEEE Pub"],
    link: "https://github.com/Lakhiwal",
    period: "2024 – 2025",
  },
  {
    id: 2,
    icon: "💸",
    accent: "#4fc1ff",
    type: "Fintech · Mobile · Backend",
    name: "Finworks360 Invoice Discounting Platform",
    desc: "Production fintech platform under active build. Flutter mobile app + Django REST backend covering seller onboarding, invoice management, and a wallet/settlement system. Handles transaction concurrency with Django select_for_update() to prevent duplicate settlements. Mobile UI uses Material 3 dynamic theming with Hero transitions and Impeller-optimized rendering.",
    tags: ["Flutter", "Django", "DRF", "PostgreSQL", "Material 3", "JWT"],
    period: "Jan 2026 – Present",
  },
  {
    id: 3,
    icon: "🌫️",
    accent: "#c586c0",
    type: "Time Series · Air Quality · Forecasting",
    name: "PM2.5 / NO2 Forecasting in Gurugram",
    desc: "Forecasting urban air-pollutant concentrations using Facebook Prophet on multi-year monitoring data. Modeled seasonality and event spikes; published as a book chapter with CRC Press (Taylor & Francis).",
    tags: ["Python", "Prophet", "Pandas", "Time Series", "Book Chapter"],
    period: "2024",
  },
  {
    id: 4,
    icon: "☀️",
    accent: "#dcdcaa",
    type: "Hybrid ML · Solar · NSRDB",
    name: "GHI Forecasting with Hybrid ML + Time Series",
    desc: "Forecasted Global Horizontal Irradiance using NSRDB data with a hybrid of classical time-series and ML models. Published in IEEE ICCSC-2026.",
    tags: ["Python", "TensorFlow", "Time Series", "NSRDB", "IEEE Pub"],
    period: "2025",
  },
  {
    id: 5,
    icon: "📄",
    accent: "#ce9178",
    type: "Java · ETL · Fintech",
    name: "Bank Statement ETL Pipeline",
    desc: "Java-based ETL extracting structured financial data from 1000+ PDF bank statements daily for a credit-assessment platform. Cut a 4-hour manual process to ~30 minutes, unblocking same-day credit decisioning.",
    tags: ["Java", "Spring Boot", "ETL", "PDF Parsing"],
    period: "2021",
  },
];

export type SkillGroup = {
  group: string;
  items: { name: string; pct: number; color: string }[];
};

export const SKILLS: SkillGroup[] = [
  {
    group: "Languages",
    items: [
      { name: "Python", pct: 92, color: "#4fc1ff" },
      { name: "Java", pct: 85, color: "#f97316" },
      { name: "Dart", pct: 82, color: "#38bdf8" },
      { name: "SQL", pct: 86, color: "#a855f7" },
      { name: "JavaScript (ES6+)", pct: 80, color: "#facc15" },
    ],
  },
  {
    group: "Backend & Web",
    items: [
      { name: "Django", pct: 90, color: "#34d399" },
      { name: "Django REST Framework", pct: 88, color: "#22c55e" },
      { name: "Spring Boot", pct: 85, color: "#65a30d" },
      { name: "Flask", pct: 82, color: "#6366f1" },
      { name: "REST APIs / JWT Auth", pct: 88, color: "#38bdf8" },
    ],
  },
  {
    group: "Mobile",
    items: [
      { name: "Flutter", pct: 85, color: "#38bdf8" },
      { name: "Material 3", pct: 82, color: "#a855f7" },
      { name: "Mobile UI / Animations", pct: 80, color: "#34d399" },
    ],
  },
  {
    group: "ML / AI",
    items: [
      { name: "TensorFlow", pct: 88, color: "#f97316" },
      { name: "PyTorch", pct: 80, color: "#ef4444" },
      { name: "Scikit-learn", pct: 90, color: "#facc15" },
      { name: "XGBoost", pct: 86, color: "#22c55e" },
      { name: "Whisper / Pyannote", pct: 82, color: "#38bdf8" },
      { name: "Hugging Face Transformers", pct: 80, color: "#fbbf24" },
    ],
  },
  {
    group: "Databases",
    items: [
      { name: "PostgreSQL", pct: 88, color: "#38bdf8" },
      { name: "MongoDB", pct: 78, color: "#22c55e" },
      { name: "MySQL", pct: 80, color: "#fbbf24" },
      { name: "SQLite", pct: 82, color: "#3b82f6" },
    ],
  },
  {
    group: "Tools / DevOps",
    items: [
      { name: "Git", pct: 92, color: "#f97316" },
      { name: "Docker", pct: 80, color: "#38bdf8" },
      { name: "AWS", pct: 72, color: "#facc15" },
      { name: "Render", pct: 75, color: "#a855f7" },
      { name: "Cloudinary", pct: 70, color: "#3b82f6" },
    ],
  },
  {
    group: "Data / BI",
    items: [
      { name: "Pandas", pct: 90, color: "#6366f1" },
      { name: "NumPy", pct: 88, color: "#38bdf8" },
      { name: "Tableau", pct: 78, color: "#f97316" },
      { name: "Power BI", pct: 75, color: "#facc15" },
    ],
  },
];

export type Experience = {
  date: string;
  current: boolean;
  role: string;
  company: string;
  location: string;
  desc: string;
  tags: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    date: "Jan 2026 – Present",
    current: true,
    role: "Full Stack Developer",
    company: "Finworks360",
    location: "New Delhi",
    desc: "Building a Flutter mobile app and Django backend for a fintech invoice discounting platform — seller onboarding flow, invoice management, and wallet system. Wrote DRF + PostgreSQL APIs handling transaction concurrency with select_for_update() to prevent duplicate settlements. Implemented Flutter UI with Material 3 dynamic theming, skeleton loaders, Hero transitions, and page route animations; optimized rendering with RepaintBoundary and Impeller. Refactored legacy Django template architecture, consolidated CSS/JS, and contributed to backend security (OTP password reset, session management).",
    tags: ["Flutter", "Django", "DRF", "PostgreSQL", "Material 3", "JWT", "Impeller"],
  },
  {
    date: "Jul 2025 – Dec 2025",
    current: false,
    role: "Assistant Professor",
    company: "Shivalik College of Engineering",
    location: "Dehradun",
    desc: "Taught Machine Learning, Data Science, Python, and DBMS to 100+ undergraduates. Designed labs on Scikit-learn, TensorFlow, feature engineering, and model evaluation. Contributed to NBA accreditation documentation.",
    tags: ["ML", "Data Science", "Python", "DBMS", "Teaching", "NBA Docs"],
  },
  {
    date: "Apr 2025 – Jul 2025",
    current: false,
    role: "Data Analyst",
    company: "Keptra Technologies",
    location: "Remote",
    desc: "Built Python ETL pipelines (Pandas, NumPy) processing 100K+ firewall and network traffic records. Developed anomaly detection scripts with real-time alerting and Tableau dashboards that surfaced security insights to stakeholders.",
    tags: ["Python", "Pandas", "NumPy", "Tableau", "ETL", "Anomaly Detection"],
  },
  {
    date: "Jun 2021 – Nov 2021",
    current: false,
    role: "Software Developer",
    company: "ScoreMe Solutions",
    location: "Gurugram",
    desc: "Built REST APIs in Spring Boot (Java) handling 10K+ daily requests for a credit-assessment platform — JWT auth, microservices via Spring Cloud. Engineered a Java-based ETL pipeline extracting structured data from 1000+ PDF bank statements daily, cutting a 4-hour manual process to ~30 minutes and enabling same-day credit decisioning.",
    tags: ["Java", "Spring Boot", "Spring Cloud", "JWT", "Microservices", "ETL"],
  },
];

export const ABOUT_FOCUS = [
  { icon: "🛠️", text: "Building a Flutter + Django fintech platform at Finworks360" },
  { icon: "🤖", text: "ML for network security, time-series forecasting, on-device ASR" },
  { icon: "📡", text: "Real-time DDoS detection on Ryu SDN with sub-100ms inference" },
  { icon: "📚", text: "Talk to me about Spring Boot, DRF, Flutter, or PyTorch" },
  { icon: "📰", text: "Published IEEE & Taylor & Francis researcher (4 papers)" },
  { icon: "✨", text: "Always learning, always shipping" },
];

export type Theme = {
  id: string;
  name: string;
  icon: string;
  accent: string;
};

export const THEMES: Theme[] = [
  { id: "default", name: "Manish Dark", icon: "💜", accent: "#007acc" },
  { id: "rose-pine", name: "Rosé Pine", icon: "🌸", accent: "#eb6f92" },
  { id: "tokyo-night", name: "Tokyo Night", icon: "🌃", accent: "#7aa2f7" },
  { id: "catppuccin", name: "Catppuccin", icon: "🐱", accent: "#cba6f7" },
  { id: "nord", name: "Nord", icon: "🧊", accent: "#88c0d0" },
  { id: "gruvbox", name: "Gruvbox", icon: "🔥", accent: "#fabd2f" },
];

export const CONTACTS = [
  {
    id: "email",
    label: "EMAIL",
    value: "lakhiwal43@gmail.com",
    color: "#ff6fd8",
    href: "mailto:lakhiwal43@gmail.com",
  },
  {
    id: "phone",
    label: "PHONE",
    value: "+91 83839 54896",
    color: "#4ec9b0",
    href: "tel:+918383954896",
  },
  {
    id: "linkedin",
    label: "LINKEDIN",
    value: "linkedin.com/in/manishlakhiwal",
    color: "#4fc1ff",
    href: "https://linkedin.com/in/manishlakhiwal",
  },
  {
    id: "github",
    label: "GITHUB",
    value: "github.com/Lakhiwal",
    color: "#cccccc",
    href: "https://github.com/Lakhiwal",
  },
];

export const SOCIAL_PILLS = [
  { id: "github", label: "GitHub" },
  { id: "linkedin", label: "LinkedIn" },
  { id: "email", label: "Email" },
  { id: "phone", label: "Phone" },
] as const;

export type Publication = {
  title: string;
  venue: string;
  year: string;
};

export type CopilotPrompt = {
  question: string;
  answer: string;
};

export const COPILOT_PROMPTS: CopilotPrompt[] = [
  {
    question: "Tell me about Manish?",
    answer:
      "Manish is a Full Stack Developer & ML Engineer at Finworks360, building a Flutter + Django invoice-discounting fintech. He's a published IEEE researcher (4 papers) with an M.Tech in CSE (AI/ML), and works comfortably across backend, mobile, and ML pipelines. Outside of code he's into systems where solid backend, mobile polish, and ML actually meet. You can read more in the about.html tab 👋",
  },
  {
    question: "What projects has Manish built?",
    answer:
      "A few highlights: a fully on-device AI meeting transcription app (Whisper + Pyannote + DistilBART), an SDN DDoS-detection ensemble that hit 97.2% accuracy with sub-100ms inference, the Finworks360 fintech platform (Flutter + DRF + PostgreSQL), and a Java ETL pipeline that turned a 4-hour bank-statement job into 30 minutes. Open projects.js for the full list.",
  },
  {
    question: "Tell me about his work experience",
    answer:
      "Currently Full Stack @ Finworks360 (Jan 2026 – present). Before that: Assistant Professor at Shivalik (Jul–Dec 2025), Data Analyst at Keptra (Apr–Jul 2025), and Software Developer at ScoreMe Solutions (2021). The full timeline lives in experience.ts.",
  },
  {
    question: "What's his tech stack?",
    answer:
      "Python, Java, Dart, SQL on the language side. Django/DRF, Spring Boot, Flask on the backend. Flutter + Material 3 on mobile. TensorFlow, PyTorch, Scikit-learn, XGBoost, Whisper, and Hugging Face for ML. Postgres + Mongo for data. Open skills.json for the full breakdown.",
  },
  {
    question: "How can I contact Manish?",
    answer:
      "Easiest: email lakhiwal43@gmail.com or DM on LinkedIn (linkedin.com/in/manishlakhiwal). His GitHub is github.com/Lakhiwal. The contact.css tab has every channel in one place.",
  },
  {
    question: "How can I support Manish?",
    answer:
      "Best way is to share his work — drop the portfolio link with someone who's hiring full-stack/ML, or a star on github.com/Lakhiwal goes a long way. He's also open to collaboration on ML/SDN/fintech projects.",
  },
];

export const SCM_STATUS = {
  branch: "main",
  commitsAhead: 1,
  modified: 3,
  added: 1,
  deleted: 0,
  githubUrl: "https://github.com/Lakhiwal",
};

export const PUBLICATIONS: Publication[] = [
  {
    title: "Comparative Analysis of ML Techniques for Network Traffic Classification",
    venue: "IEEE ICCSC-2026",
    year: "2026",
  },
  {
    title: "Hybrid ML and Time Series Approaches for GHI Forecasting Using NSRDB Data",
    venue: "IEEE ICCSC-2026",
    year: "2026",
  },
  {
    title: "Forecasting PM2.5, NO2 in Gurugram Using Prophet",
    venue: "CRC Press (Taylor & Francis)",
    year: "2024",
  },
  {
    title: "Interface for Monitoring Pregnant Women's Fetal Health Based on Cardiotocogram",
    venue: "Taylor & Francis",
    year: "2024",
  },
];
