// ============================================================
// portfolioData.js — Portfolio Data Configuration
// Contains all data, personal information, skills, and projects
// ============================================================

export const personalInfo = {
  name: "CHINAKAMPALLE GANGOLI",
  firstName: "CHINAKAMPALLE GANGOLI",
  brandName: "CHINAKAMPALLE GANGOLI", // shown in the preloader, navbar and footer
  title: "DATA ANALYST",
  location: "Banglore",
  phone: "6303821230",
  emails: {
    primary: "gangoli112005@gmail.com",
    secondary: "",
  },
  summary: "I am a Data Analyst where I can perform operations on data to extract actionable insights and drive business value.",
  resumeUrl: "/resume.pdf",
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/Gangoli2005",
  linkedin: "https://www.linkedin.com/in/chinakampalle-gangoli-273314314/",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm CHINAKAMPALLE GANGOLI",
  titleHighlight: "DATA ANALYST",
  subtitle: "Transforming complex datasets into actionable business insights with SQL, Python, Power BI, and Tableau.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:gangoli112005@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML)
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">CHINAKAMPALLE GANGOLI</span>, an aspiring Data Analyst based in Banglore. I became a data analyst to get a job in a good company with a good position, sharpening my skills through the placement training program at TAP Academy.`,
  techStack: ["Python", "MySQL", "Pandas", "NumPy", "Power BI", "Tableau"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A structured, end-to-end analytical approach to solve data-driven challenges.",
  cards: [
    { number: "01", title: "Research", text: "Identify key business questions, data sources, and analytical metrics." },
    { number: "02", title: "Design", text: "Structure relational schemas, clean raw inputs, and plan visual dashboard layouts." },
    { number: "03", title: "Develop", text: "Process datasets with Python, query with SQL, and craft rich visual charts." },
    { number: "04", title: "Deploy", text: "Deliver intuitive dashboards and clear reports that empower data-backed decisions." },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Python" }],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL" }, { name: "SQL" }],
    },
    {
      title: "External Libraries",
      skills: [{ name: "Pandas" }, { name: "NumPy" }],
    },
    {
      title: "Data Visualization",
      skills: [{ name: "Matplotlib" }, { name: "Seaborn" }, { name: "Power BI" }, { name: "Tableau" }],
    },
  ],
};

export const leadershipList = [
  {
    title: "PEC ACM Student Chapter",
    description: "Organized technical events, workshops, and student activities as chairperson to promote computer science education and community engagement.",
    role: "Chairperson",
    badge: "Leadership",
  },
];

export const internshipsList = [];

export const softSkillsList = [
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating with cross-functional team members to align data solutions with user needs." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex data challenges into structured, actionable problem-solving workflows." },
  { name: "Communication", icon: "💬", desc: "Articulating technical data findings into clear, impactful visual stories for decision makers." },
  { name: "Leadership", icon: "🎯", desc: "Leading student initiatives, organizing technical events, and guiding teams toward shared goals." },
];

export const projects = [
  {
    id: "sales-performance-dashboard",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Sales Performance & Customer Insights Dashboard",
    description: "Built interactive dashboards to analyze multi-channel sales performance, track key metrics, and uncover actionable customer insights.",
    techTags: ["Power BI", "MySQL", "Advanced Excel"],
    links: { github: "https://github.com/Gangoli2005", demo: "" },
    isFlagship: true,
  },
  {
    id: "ecommerce-customer-segmentation",
    number: "02",
    badge: null,
    title: "E-Commerce Customer Segmentation & Churn Analysis",
    description: "Segmented customers and evaluated churn risk using statistical distributions to optimize retention strategies.",
    techTags: ["Python", "Pandas", "Seaborn", "Tableau", "SQL"],
    links: { github: "https://github.com/Gangoli2005", demo: "" },
    isFlagship: false,
  },
  {
    id: "healthcare-operations-dashboard",
    number: "03",
    badge: null,
    title: "Healthcare Operations & Patient Wait-Time Optimization Dashboard",
    description: "Analyzed clinical operations, patient flow patterns, and resource allocation to optimize hospital wait times.",
    techTags: ["MySQL", "Tableau", "Advanced Excel", "Python"],
    links: { github: "https://github.com/Gangoli2005", demo: "" },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component
export const certificates = {
  featured: [],
  viewAllUrl: "https://www.linkedin.com/in/chinakampalle-gangoli-273314314/",
};

export const education = {
  degree: "B.E Computer Science",
  institution: "Prathyusha Engineering College",
  cgpa: "",
  graduation: "",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: ["DATA ANALYST", "Python · MySQL · Power BI · Tableau", "Transforming Data into Decisions"],
  credential: "B.E Computer Science",
  copyright: `© ${new Date().getFullYear()} CHINAKAMPALLE GANGOLI | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
