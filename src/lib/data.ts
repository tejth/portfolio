// src/lib/data.ts
// All portfolio data — Tejendra Pal Singh

export const personalInfo = {
  name: "Tejendra Pal Singh",
  title: "Software Developer & ML Engineer",
  tagline: "Turning data into decisions and ideas into impactful software.",
  email: "ptejendra91@gmail.com",
  phone: "+91 6399284807",
  location: "Jaipur, Rajasthan, India",
  github: "https://github.com/tejth",
  linkedin: "https://linkedin.com/in/tejth",
  twitter: "https://x.com/CodeLustX",
  avatar: "https://avatars.githubusercontent.com/u/1?v=4",
  resumeUrl: "https://drive.google.com/file/d/17qc46CNj9ESt0DSxO3mA518DCpW6MbUO/view?usp=drive_link",
  bio: `I'm a passionate Software Developer and ML Engineer pursuing B.Tech in Computer Science 
  at JECRC University (CGPA 9.4/10). I specialize in building intelligent web applications, 
  predictive ML models, and interactive data dashboards. From SaaS AI platforms to satellite-based 
  fire detection systems — I love solving real-world problems with clean code and data-driven thinking.`,
  shortBio: "Building intelligent software, one model at a time.",
};

export const skills = {
  frontend: [
    { name: "React.js / Next.js", level: 88, icon: "⚛️" },
    { name: "HTML / CSS / JavaScript", level: 92, icon: "🌐" },
    { name: "Sass / Tailwind CSS", level: 82, icon: "🎨" },
    { name: "Framer Motion / Animations", level: 75, icon: "✨" },
    { name: "Firebase / MongoDB", level: 78, icon: "🔥" },
  ],
  backend: [
    { name: "Python", level: 90, icon: "🐍" },
    { name: "SQL", level: 85, icon: "🗄️" },
    { name: "Scikit-Learn / ML", level: 88, icon: "🤖" },
    { name: "Pandas / NumPy", level: 87, icon: "📊" },
    { name: "Streamlit", level: 80, icon: "⚡" },
  ],
  tools: [
    { name: "LangChain", level: 82, icon: "📈" },
    { name: "LangGraph", level: 82, icon: "📈" },
    { name: "Power BI", level: 82, icon: "📈" },
    { name: "Git / GitHub", level: 88, icon: "🔀" },
    { name: "Jupyter Notebook", level: 85, icon: "📓" },
    { name: "Excel / Data Analysis", level: 80, icon: "📋" },
    { name: "VS Code", level: 92, icon: "💻" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "YT-InSight Chrome PlugIn",
    description:
      "YT Insight is a Chrome Extension + Flask backend that lets you have a full AI conversation about any YouTube video. Paste a video URL, hit Load, and ask anything — summaries, key points, specific concepts explained, timestamps — all answered from the actual video transcript using a RAG (Retrieval-Augmented Generation) pipeline.",
    image: "https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?q=80&w=1086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Python" , "LangChain" , "GenAi" , "JavaScript"],
    github: "https://github.com/tejth/YT-INSIGHT",
    featured: true,
    color: "from-blue-600 to-cyan-500",
  },
  {
    id: 2,
    title: "Support AI — SaaS Chatbot Platform",
    description:
      "A SaaS-based AI customer support platform enabling businesses to generate and embed customized AI chatbots into their websites via a simple JavaScript script. Reduced manual support workload by an estimated 40%.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tags: ["Next.js", "MongoDB", "Gemini API", "ScaleKit", "Sass"],
    github: "https://github.com/tejth/AI-Customer-Support",
    live: " https://supportai-lac.vercel.app/",
    featured: true,
    color: "from-blue-600 to-cyan-500",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with React.js and Firebase, featuring React-Reveal animations, smooth scrolling, and a vertical timeline. Improved project visibility by 40% and boosted user engagement by 35%.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    tags: ["React.js", "JavaScript", "Firebase", "CSS", "NPM"],
    github: "https://github.com/tejth/tejthPortfolio",
    live: "https://tejthv1.netlify.app/",
    featured: true,
    color: "from-indigo-600 to-blue-500",
  },
  {
    id: 4,
    title: "SymptoCare — Medical Recommendation System",
    description:
      "ML-powered medical recommendation system that predicts medicines and precautions based on user-input symptoms using Naive Bayes and Decision Trees. Improved prediction accuracy by 25%.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Python", "Scikit-Learn", "Pandas", "NumPy", "SQLite", "HTML/CSS"],
    github: "https://github.com/tejth/SymptoCare",
    live: "#",
    featured: false,
    color: "from-sky-600 to-blue-700",
  },
  {
    id: 5,
    title: "SmartData OS",
    description:
      "A full-stack data analytics web application built with pure Python , Upload any CSV or JSON dataset — get statistics, charts, AI insights, health scores, correlation heatmaps, preprocessing tools, filtering, merging and downloadable reports.",
    image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Python", "Scikit-Learn", "Streamlit", "MODIS Data", "ML"],
    github: "https://github.com/tejth/SmartDataOs",
    live: "#",
    featured: false,
    color: "from-blue-500 to-orange-500",
  },

   {
    id: 6,
    title: "Data Visulization Dashboard - Power BI",
    description:
      " Power BI dashboards  that visualizes key performance metrics for a fictional e-commerce company. The dashboard includes interactive charts, filters, and AI-generated insights to help stakeholders make data-driven decisions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Microsoft Power BI", "Data Visualization", "DAX", "Excel", "Data Analysis"],
    github: "https://github.com/tejth/Data-visualization-Tata-Tasks",
    live: "#",
    featured: false,
    color: "from-blue-500 to-orange-500",
  },
];

export const experience = [
  {
    id: 1,
    company: "Tata Consultancy Services",
    role: "System Engineer — Grade C1",
    duration: "Upcoming",
    location: "Full-time, India",
    description:
      "Working as a System Engineer Grade C1 at Tata Consultancy Services, contributing to software development, application support, system maintenance, and client-focused technology solutions across diverse projects and technologies.",
    achievements: [
      
    ],
    tech: ["Python", "Java"],
    color: "indigo",
  },
  {
    id: 2,
    company: "Global AI Technologies",
    role: "Associate Software Engineer — Intern",
    duration: "Jan 2026 — June 2026",
    location: "Remote",
    description:
      "Building machine learning models for predictive analytics and classification. Performing end-to-end data workflows using Python and SQL, and delivering AI-driven business solutions.",
    achievements: [
      "Built ML models for predictive analytics and classification used in business decision-making",
      "Performed end-to-end data workflows: extraction, cleaning, EDA, and statistical analysis using Python & SQL",
      "Developed interactive dashboards using Power BI, Matplotlib, and Seaborn to communicate data insights",
      "Collaborated with cross-functional teams to deliver optimization-driven AI recommendations",
    ],
    tech: ["Python", "SQL", "Scikit-Learn", "Power BI", "Matplotlib", "Seaborn"],
    color: "blue",
  },
  {
    id: 3,
    company: "Edunet Foundation",
    role: "Machine Learning Engineer",
    duration: "Jul 2025 — Aug 2025",
    location: "Virtual, India",
    description:
      "Developed and deployed an end-to-end ML model for satellite-based fire type classification in India, with a live Streamlit web application for real-time disaster management.",
    achievements: [
      "Developed fire type classification model using MODIS satellite data with Python and Scikit-learn",
      "Deployed model as an interactive Streamlit web app enabling real-time predictions on live satellite inputs",
      "Supported disaster management teams with accurate, data-driven fire detection insights",
      "Completed full ML pipeline: data preprocessing, model training, evaluation, and deployment",
    ],
    tech: ["Python", "Scikit-Learn", "Streamlit", "Pandas", "NumPy", "MODIS"],
    color: "indigo",
  },
];

export const education = [
  {
    id: 1,
    degree: "B.Tech — Computer Science Engineering",
    institution: "JECRC University",
    year: "Aug 2022 — Aug 2026",
    gpa: "9.4/10",
    achievements: [
      "CGPA of 9.4/10 — Consistently top performer",
      "Participated in Innovate Hackathon — built real-world solution under time pressure",
      "Active contributor to ML and web development projects",
      "Strong foundation in algorithms, data structures, and applied ML",
    ],
    coursework: ["Machine Learning", "Data Structures & Algorithms", "Database Management", "Web Technologies"],
  },
  {
    id: 2,
    degree: "Senior Secondary (Class XII)",
    institution: "S.T. Francis Inter College",
    year: "Aug 2020 — Aug 2022",
    gpa: "82%",
    achievements: [
      "Scored 82% in Senior Secondary examinations",
      "Scored 84% in Secondary (Class X) examinations",
      "Developed early interest in programming and mathematics",
    ],
    coursework: ["Mathematics", "Physics", "Computer Science", "Chemistry"],
  },
];

export const certifications = [
  { name: "Claude 101", issuer: "Anthropic", year: "2026", icon: "🤖" },
  { name: "Generative AI", issuer: "Linked IN", year: "2025", icon: "👨‍💻" },
   { name: "Forage Data Visualization", issuer: "Tata Group", year: "2024", icon: "📊" },
  { name: "JavaScript Specialization Program", issuer: "Infosys", year: "2024", icon: "🟨" },
  { name: "Python for Data Science", issuer: "IBM SkillBuild", year: "2024", icon: "🐍" },
  { name: "Innovate Hackathon Participant", issuer: "Hackathon", year: "2024", icon: "🏆" },
  { name: "5-Star C++ Rating", issuer: "HackerRank", year: "2023", icon: "⭐" }
   
];

// AI chatbot knowledge base
export const aiKnowledge = `
You are Tejendra Pal Singh's personal AI assistant embedded in his portfolio website. 
Answer questions about Tejendra's background, skills, projects, and experience based on this information:

PERSONAL INFO:
- Name: Tejendra Pal Singh
- Role: Software Developer & ML Engineer
- Location: Jaipur, Rajasthan, India
- Email: ptejendra91@gmail.com
- Phone: +91 6399284807
- GitHub: tejth | LinkedIn: tejth
- Currently pursuing B.Tech CSE at JECRC University (CGPA 9.4/10)

SKILLS:
- Web: HTML, CSS, JavaScript, React.js, Next.js, Sass, Firebase, MongoDB
- ML/Data: Python, Scikit-Learn, Pandas, NumPy, Streamlit, Matplotlib, Seaborn
- Databases: SQL, SQLite, MongoDB
- Tools: Power BI, Git/GitHub, Jupyter Notebook, Excel, VS Code

PROJECTS:
1. Support AI — SaaS AI chatbot platform using Next.js, MongoDB, Google Gemini API, ScaleKit; reduced manual support workload by 40%
2. Portfolio Website — React.js + Firebase portfolio with animations and vertical timeline; improved visibility by 40%
3. SymptoCare — Medical recommendation ML system using Naive Bayes and Decision Trees; 25% accuracy improvement
4. Fire Type Classifier — MODIS satellite data ML model deployed as Streamlit app for disaster management

EXPERIENCE:
- Global AI Technologies (Jan 2026–Present): Associate Software Engineer Intern — ML models, Power BI dashboards, Python/SQL data workflows
- Edunet Foundation (Jul–Aug 2025): ML Engineer — satellite fire classification model deployed as Streamlit app

EDUCATION:
- JECRC University, B.Tech CSE, 2022–2026, CGPA 9.4/10
- S.T. Francis Inter College: 84% (Class X), 82% (Class XII)

CERTIFICATIONS:
- Infosys JavaScript Specialization, IBM SkillBuild Python for Data Science, HackerRank 5-star C++

AVAILABILITY: Open to software development, ML engineering roles, and exciting internship/project opportunities.

Be conversational, enthusiastic, and helpful. Keep answers concise (2-4 sentences). If asked something unknown, suggest contacting Tejendra directly at ptejendra91@gmail.com.
`;

