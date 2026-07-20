// ============================================================================
// ALL REAL CONTENT LIVES HERE. Components import from this file — never
// hardcode resume text directly into a section component.
// ============================================================================

export const personal = {
  name: "Vraj Soni",
  firstName: "Vraj",
  tagline: "Computer Engineering Undergraduate",
  role: "AI/ML · Computer Vision · Full-Stack Development",
  cgpa: "8.98",
  phone: "+91 84879 61448",
  email: "svraj1116@gmail.com",
  linkedin: "https://www.linkedin.com/in/vraj-soni-912ab1284/",
  github: "https://github.com/VrajSoni11",
  location: "Anand, Gujarat, India",
  summary:
    "Computer Engineering undergraduate passionate about building intelligent, real-world software. Experienced in AI/ML, Computer Vision, full-stack development, and data analytics, with hands-on work ranging from real-time vision systems for national-level robotics to scalable web applications and enterprise-grade backend architectures. Driven by solving complex problems through practical engineering and continuous learning.",
};

export const heroWords = ["AI/ML", "Computer Vision", "Full-Stack"];

export interface EducationEntry {
  stage: string;
  board: string;
  detail: string;
  date: string;
}

export const education: EducationEntry[] = [
  {
    stage: "SSC",
    board: "GSEB Gujarat",
    detail: "Percentile Rank: 99.93",
    date: "May 2021",
  },
  {
    stage: "HSC",
    board: "GSEB Gujarat — Science Stream",
    detail: "Percentile Rank: 96.67",
    date: "March 2023",
  },
  {
    stage: "B.Tech",
    board: "G.H. Patel College of Engineering & Technology (GCET)",
    detail: "Computer Engineering | Minor: Robotics Technology | CGPA: 8.98",
    date: "2023 – Present",
  },
];

export interface SkillCategory {
  label: string;
  skills: string[];
}

export const languages: string[] = ["C", "C++", "Java", "Python", "JavaScript", "PHP", "SQL"];

export const technicalSkills: SkillCategory[] = [
  {
    label: "AI / ML & CV",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Object Detection",
      "Real-Time Tracking",
      "YOLO",
      "Generative AI",
      "Prompt Engineering",
      "LLM Applications",
    ],
  },
  {
    label: "Web & Backend",
    skills: [
      "MERN Stack",
      "REST APIs",
      "OAuth2 / OpenID Connect",
      "Microsoft Graph API",
      "Azure MSSQL",
      "Cookie-based Auth",
      "CSRF Protection",
    ],
  },
  {
    label: "Libraries & Frameworks",
    skills: ["OpenCV", "MediaPipe", "TensorFlow", "PyTorch", "Scikit-learn", "NumPy", "Pandas", "Flask"],
  },
  {
    label: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "ChatGPT", "Gemini", "Claude", "GitHub Copilot"],
  },
];

export interface ExperienceEntry {
  role: string;
  org: string;
  location: string;
  date: string;
  points: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Software Development Intern",
    org: "Acorn Universal Consultancy LLP",
    location: "Anand, Gujarat",
    date: "May 2026 – June 2026",
    points: [
      "Built a framework-free Node.js HTTP server from scratch — hand-rolling routing, cookie parsing, MIME handling, and CSRF-protected OAuth2 PKCE flow (state token generation, time-bounded validation) without any auth library; integrated Microsoft Graph API post-auth to hydrate user sessions.",
      "Designed a rate-limit-aware chunked polling engine against a third-party REST API, streaming partial results progressively while pacing inter-request delays — backed by Azure MSSQL with SQL MERGE-based upsert for sliding-expiry sessions and silent in-memory failover.",
    ],
  },
  {
    role: "Junior CV/ML Engineer",
    org: "Team GCET Robocon",
    location: "Vallabh Vidyanagar, Gujarat",
    date: "August 2024 – May 2025",
    points: [
      "Developed real-time Computer Vision pipelines for basketball detection using YOLO, OpenCV, TensorFlow, and PyTorch. Collaborated closely with the robotics team to optimize detection accuracy and inference speed for competition environments. Contributed to Team GCET Robocon's qualification to the Final Stage of the ABU Robocon national-level competition.",
    ],
  },
];

export interface Project {
  title: string;
  stack: string[];
  github: string;
  isLiveDemo?: boolean;
  description: string;
}

export const projects: Project[] = [
  {
    title: "Linnworks Analytics Dashboard",
    stack: ["Node.js", "Azure SQL", "OAuth 2.0", "Linnworks REST API"],
    github: "https://linnworks-analysis.onrender.com",
    isLiveDemo: true,
    description:
      "Built a full-stack internal analytics and warehouse operations dashboard for a multi-channel e-commerce business using the Linnworks WMS platform. Designed and developed the entire application — from the authenticated Node.js server to the interactive browser UI — without any framework. Responsibilities included: implementing Microsoft OAuth 2.0 SSO with persistent 30-day sessions stored in Azure SQL; building five analytics modules (top products, slow movers, zero-movement inventory, WMS bin rack analysis, and grouped pack-size normalisation); integrating Linnworks REST APIs for real-time inventory and order data; designing a Pickwave dashboard with a two-column live/archived detail view, server-side background polling every two minutes, and DB snapshot persistence so completed wave data survives Linnworks purging it; and implementing an Excel export feature. Also optimised API efficiency with token caching and batch stock-level lookups.",
  },
  {
    title: "EcoSphere — ESG Management Platform",
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Prisma"],
    github: "https://github.com/VrajSoni11/ESGMS",
    description:
      "Full-stack ESG (Environmental, Social, Governance) management platform replacing scattered spreadsheets with a single live, weighted ESG score per organization. Tracks carbon transactions with automatic CO2e calculation, CSR activities with proof-of-evidence approval workflows, and compliance issues with mandatory ownership and automatic overdue flagging via a scheduled cron job. Layers in gamification — XP, badges, leaderboards, and a points-based reward catalog — to make ESG participation genuinely engaging for employees, alongside a custom report builder exporting to CSV, Excel, and PDF.",
  },
  {
    title: "LoadWatch",
    stack: ["Python", "scikit-learn", "XGBoost", "LightGBM", "SHAP", "Streamlit"],
    github: "https://github.com/VrajSoni11/LoadWatch",
    description:
      "A machine learning pipeline predicting the severity and length of a footballer's injury layoff, trained on 656 real injury events across 8 English Premier League clubs. Built as a full auditable pipeline — data cleaning, EDA, feature engineering, time-based train/val/test splitting, tuned gradient-boosted models, and SHAP explainability — culminating in a Streamlit web app for exploring injury history and simulating hypothetical injury scenarios on real 2025/26 players. The standout finding: the injury description text itself (e.g. 'rupture' vs. 'sprain') carried far more predictive signal than pre-injury match performance.",
  },
  {
    title: "Online Exam Proctoring System",
    stack: ["Python", "OpenCV", "MediaPipe", "HTML", "CSS", "JS"],
    github: "https://github.com/VrajSoni11/Online-Exam-Proctoring",
    description:
      "AI-powered real-time proctoring platform detecting gaze deviation, multiple faces, and tab-switching using OpenCV and MediaPipe facial landmark models, with timestamped alerts streamed to a live browser frontend. Automated violation reporting pipeline generating structured PDF audit logs — eliminating manual invigilation and providing institutions with transparent, tamper-evident exam records.",
  },
  {
    title: "Annavaya – Food Rescue Cluster",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/VrajSoni11/Annavaya",
    description:
      "Full-stack food rescue platform connecting donors with NGOs using geospatial K-Means clustering to optimise pickup routes; built on a scalable MERN architecture with real-time status updates via WebSockets. Dynamic proximity-based NGO assignment reduced logistics overhead and enabled measurable social impact in food redistribution across urban areas.",
  },
  {
    title: "Progress Tracker (ProgoV)",
    stack: ["PHP 8", "MySQL", "Chart.js", "PWA"],
    github: "https://github.com/VrajSoni11/Progress-Tracker",
    description:
      "AI-powered task management system — an enterprise-grade productivity web app combining task tracking, behavioral analytics, and AI-driven insights. Features an advanced analytics dashboard with 5 chart types, a gamification system (XP, streaks, 14 badges), a full PWA with offline support and push notifications, and automated PDF performance reports. Behavioral AI logic covers productivity pattern analysis, streak prediction, category balance, and consistency scoring, backed by 10+ normalized MySQL tables and REST endpoints for tasks, analytics, and dashboard stats.",
  },
  {
    title: "Core Inventory",
    stack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/VrajSoni11/CoreInventory",
    description:
      "A lightweight inventory management system for tracking stock levels, item details, and movement without the overhead of a full ERP. Built with plain JavaScript, HTML, and CSS to keep the whole stack transparent and easy to reason about — no build tooling, no black-box framework behavior. Designed around the core loop every small inventory system needs: add an item, track its quantity, see what's running low, act on it.",
  },
  {
    title: "Hisab",
    stack: ["JavaScript", "PHP", "CSS"],
    github: "https://github.com/VrajSoni11/Hisab",
    description:
      "A personal finance management app built to make everyday expense tracking less of a chore. Structured as a clean three-layer system — a PHP/MySQL API, a dedicated database layer, and a vanilla JS frontend — so income, expenses, and running balances stay in sync without a heavy framework in the way. Focused on fast entry and an at-a-glance view of where money is actually going, built the way a real personal tool should be: lightweight, dependency-free, and yours to extend.",
  },
  {
    title: "VelvetRoast – Café POS System",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "JWT", "RPi.GPIO"],
    github: "https://github.com/VrajSoni11/VelvetRoastPOSCafe",
    description:
      "A real-time Restaurant Point-of-Sale (POS) system that digitizes the entire dining experience—from QR-based table ordering and live kitchen updates to waiter coordination, payment processing, and restaurant management through dedicated role-based dashboards. Built for fast-paced restaurant environments, it ensures seamless communication between customers and staff while streamlining operations with real-time synchronization and analytics.",
  },
];

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  certificateUrl?: string;
}

export const certifications: Certification[] = [
  {
    title: "Introduction to Internet of Things",
    issuer: "NPTEL (IIT Kharagpur)",
    date: "Jan – Apr 2026",
    description:
      "12-week Elite certification via NPTEL/Swayam, Govt. of India. Consolidated score of 83% (Online Assignments: 22.94/25, Proctored Exam: 60/75). 4 credits recommended.",
    certificateUrl: "/certificates/nptel-iot-certificate.pdf",
  },
  {
    title: "Tata GenAI Powered Data Analytics",
    issuer: "Forage",
    date: "Jan 2026",
    description:
      "Applied Generative AI to real-world financial data — built AI-driven delinquency prediction models, designed LLM-assisted collections strategies, and performed end-to-end EDA and risk profiling on structured datasets.",
    certificateUrl: "/certificates/TATA.pdf",
  },
  {
    title: "Deloitte Data Analytics",
    issuer: "Forage",
    date: "Jan 2026",
    description:
      "Completed a Deloitte Australia Data Analytics simulation involving machine downtime visualization and workplace pay-equity analysis. Used Tableau and Excel to transform raw datasets into client-ready insights and interactive dashboards.",
    certificateUrl: "/certificates/Deloitee.pdf",
  },
  {
    title: "Siemens Project Manager",
    issuer: "Forage",
    date: "Jan 2026",
    description:
      "Completed Siemens Mobility's Project Management Job Simulation, designing KPI dashboards to track project performance and operational risks. Simulated real-world project planning and decision-making in a large-scale rail infrastructure environment.",
    certificateUrl: "/certificates/SIEMENS.pdf",
  },
];