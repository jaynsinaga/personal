/**
 * Centralized Portfolio Data
 * All personal, professional, project, and skill content is centralized here.
 * Easy to update, customize, and extend.
 */

export const personalInfo = {
  name: "Rehan",
  role: "Fullstack Web Developer & Data Analyst",
  eyebrow: "FULLSTACK WEB DEVELOPER / DATA ANALYST",
  headline: "I BUILD DIGITAL SYSTEMS THAT TURN DATA INTO SOMETHING USEFUL.",
  bio: "A developer focused on building useful web applications, database-driven systems, dashboards, and data-driven digital solutions. Dedicated to translating operational complexity into clean, structured software.",
  location: "Klaten, Jawa Tengah, Indonesia",
  shortLocation: "Klaten, Indonesia",
  status: "OPEN TO WORK",
  statusDetail: "AVAILABLE FOR SELECTED PROJECTS",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  profileImage: "/images/profile.jpg",
  cv: "/Rehan-CV.pdf",
};

export const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const aboutInfo = {
  sectionNumber: "01",
  title: "ABOUT ME",
  lead: "I’m a Fullstack Web Developer and Data Analyst focused on building practical digital systems—from database-driven web applications to dashboards that make operational data easier to understand.",
  description: [
    "My engineering philosophy centers on utility and structure. I design systems that solve tangible problems: organizing unorganized records, streamlining manual administrative workflows, and turning fragmented metrics into clear visual intelligence.",
    "Graduated Cum Laude with a solid foundation in computer science, I blend analytical precision with modern web technologies. Whether building multi-tier relational databases or crafting responsive interfaces, I focus on clean architecture, practical performance, and longevity.",
  ],
  academicHighlights: [
    {
      title: "Cum Laude Graduate",
      desc: "Distinguished academic honors with strong focus on software engineering & data systems.",
    },
    {
      title: "Web Application Systems",
      desc: "Robust fullstack architectures, RESTful communication, and operational efficiency.",
    },
    {
      title: "Database Architecture",
      desc: "Normalized relational schemas, index optimization, and reliable CRUD transactions.",
    },
    {
      title: "Data Analytics & Dashboards",
      desc: "Data cleaning, statistical synthesis, and intuitive visual storytelling with Chart.js.",
    },
  ],
  stats: [
    {
      value: "4+",
      numeric: 4,
      suffix: "+",
      label: "Years of learning & building",
    },
    {
      value: "10+",
      numeric: 10,
      suffix: "+",
      label: "Projects / Systems",
    },
    {
      value: "3",
      numeric: 3,
      suffix: "",
      label: "Core Specializations",
    },
  ],
};

export const skillCategories = [
  {
    category: "FRONTEND",
    description: "Responsive interfaces, semantic markup, and dynamic state management.",
    skills: [
      { name: "HTML", level: "Semantic Markup" },
      { name: "CSS", level: "Custom Architecture" },
      { name: "JavaScript", level: "ES6+ / Async" },
      { name: "React", level: "Component Systems" },
      { name: "Tailwind CSS", level: "Design Systems" },
      { name: "Bootstrap", level: "Rapid Prototyping" },
    ],
  },
  {
    category: "BACKEND",
    description: "Server-side logic, API development, and request orchestration.",
    skills: [
      { name: "PHP", level: "Core Architecture" },
      { name: "Laravel", level: "MVC Framework" },
      { name: "CodeIgniter", level: "Lightweight MVC" },
      { name: "REST API", level: "JSON Endpoints" },
    ],
  },
  {
    category: "DATABASE & ANALYTICS",
    description: "Relational storage, data modeling, reporting, and visualization.",
    skills: [
      { name: "MySQL", level: "Relational DB" },
      { name: "SQL", level: "Queries & Joins" },
      { name: "Microsoft Excel", level: "Modeling & Formulas" },
      { name: "Data Cleaning", level: "Normalization & Prep" },
      { name: "Data Visualization", level: "Charts & Trends" },
      { name: "Dashboard Development", level: "KPI Monitoring" },
    ],
  },
  {
    category: "TOOLS & WORKFLOW",
    description: "Version control, design inspection, and modern developer tooling.",
    skills: [
      { name: "Git", level: "Version Control" },
      { name: "GitHub", level: "Collaboration & CI" },
      { name: "VS Code", level: "Primary IDE" },
      { name: "Figma", level: "UI/UX Inspection" },
      { name: "Vercel", level: "Deployment & Edge" },
    ],
  },
];

export const projectCategories = ["ALL", "WEB APP", "DATA & ANALYTICS"];

export const projects = [
  {
    id: "project-01",
    number: "01",
    title: "Operational Management System",
    category: "Web App",
    filterCategory: "WEB APP",
    description: "A database-driven operational management platform designed to organize workflows, records, and reporting in one unified system.",
    details: "Built to replace scattered manual logs with centralized relational record-keeping, user role management, and automated exportable operational reports.",
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    githubUrl: "#",
    liveUrl: "#",
    image: "/images/project-01.jpg",
  },
  {
    id: "project-02",
    number: "02",
    title: "Gaming Laptop Decision Support System",
    category: "Web App",
    filterCategory: "WEB APP",
    description: "A decision support system that helps users compare gaming laptops using the Simple Additive Weighting (SAW) method.",
    details: "Implements multi-criteria decision algorithms allowing consumers to rank hardware alternatives based on customizable weighted criteria like GPU, CPU, thermal rating, and budget.",
    stack: ["CodeIgniter 4", "PHP", "MySQL", "SAW", "Bootstrap"],
    githubUrl: "#",
    liveUrl: "#",
    image: "/images/project-02.jpg",
  },
  {
    id: "project-03",
    number: "03",
    title: "Tourism Visitor Analytics Dashboard",
    category: "Data & Analytics",
    filterCategory: "DATA & ANALYTICS",
    description: "An interactive dashboard for analyzing visitor traffic trends across daily, monthly, and yearly periods.",
    details: "Aggregates regional ticketing datasets to compute seasonality fluctuations, peak occupancy intervals, and visitor demographic distributions.",
    stack: ["Excel", "SQL", "JavaScript", "Chart.js"],
    githubUrl: "#",
    liveUrl: "#",
    image: "/images/project-03.jpg",
  },
  {
    id: "project-04",
    number: "04",
    title: "Operational Performance Dashboard",
    category: "Data & Analytics",
    filterCategory: "DATA & ANALYTICS",
    description: "A visualization dashboard designed to transform operational records into clear performance indicators.",
    details: "Extracts key productivity metrics from operational logs, rendering real-time KPI progress rings, efficiency curves, and variance flags for management review.",
    stack: ["Excel", "Data Visualization", "JavaScript", "Chart.js"],
    githubUrl: "#",
    liveUrl: "#",
    image: "/images/project-04.jpg",
  },
  {
    id: "project-05",
    number: "05",
    title: "Location-Based Operational System",
    category: "Web App",
    filterCategory: "WEB APP",
    description: "A web application integrating location data into operational workflows and location selection.",
    details: "Combines relational asset databases with spatial KML rendering, enabling dispatchers and field inspectors to visualize operational boundaries and territory assignments.",
    stack: ["PHP", "MySQL", "JavaScript", "KML"],
    githubUrl: "#",
    liveUrl: "#",
    image: "/images/project-05.jpg",
  },
];

export const focusAreas = [
  {
    number: "01",
    title: "WEB OPERATIONAL SYSTEMS",
    tagline: "Workflows, Records & Core Architecture",
    description: "Building practical web applications for operational workflows, forms, records, and management processes. I focus on creating reliable business tools that eliminate paperwork friction and enforce business rules through intuitive interfaces.",
    highlights: ["Form validation & transactional integrity", "Role-based authorization & permission gates", "Responsive administrative interfaces", "Automated document & report generation"],
  },
  {
    number: "02",
    title: "DATABASE & MANAGEMENT SYSTEMS",
    tagline: "Relational Modeling & Structured Storage",
    description: "Designing structured relational databases and CRUD-based systems. Every useful digital application begins with a well-thought-out data model that maintains referential integrity, scales gracefully, and queries efficiently.",
    highlights: ["Third-normal form schema architecture", "Optimized indexing & join performance", "Secure parameterized query execution", "Data migration & audit logging"],
  },
  {
    number: "03",
    title: "DATA & VISUALIZATION",
    tagline: "Raw Intelligence to Actionable Clarity",
    description: "Transforming raw data into dashboards, charts, and useful performance insights. Data is only valuable when decision-makers can digest it in seconds. I convert raw spreadsheets and database dumps into communicative visual narratives.",
    highlights: ["Temporal trend & seasonality analysis", "Interactive multi-axis Chart.js visualizations", "Data sanitization & outlier detection", "Operational KPI threshold indicators"],
  },
];
