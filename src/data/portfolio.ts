// src/data/portfolio.ts
import type {
  Project,
  Education,
  Certification,
  ResearchPaper,
  SkillCategory,
  NavItem,
  Achievement,
} from "../types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const ACHIEVEMENTS: Achievement[] = [
  { value: "8.81", label: "M.Sc. CGPA", icon: "🎓" },
  { value: "8.37", label: "B.Sc. CGPA", icon: "📚" },
  { value: "2+", label: "Research Papers", icon: "🔬" },
  { value: "4+", label: "Projects Built", icon: "💻" },
];

export const EDUCATION: Education[] = [
  {
    degree: "M.Sc. in Computer Science (Honours)",
    institution: "Sambalpur University, Jyoti Vihar",
    location: "Odisha, India",
    duration: "2024 – 2026",
    cgpa: "8.81 / 10",
    highlights: [
      "Specialization in Artificial Intelligence & Machine Learning",
      "Active researcher in Computer Vision and Deep Learning",
      "Published research on dairy cow behaviour analysis using YOLO",
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Deep Learning",
      "Computer Networks",
      "Human Computer Interaction",
      "Database Management Systems",
    ],
  },
  {
    degree: "B.Sc. in Computer Science (Honours)",
    institution: "Dharanidhar Autonomous College",
    location: "Keonjhar, Odisha, India",
    duration: "2021 – 2024",
    cgpa: "8.37 / 10",
    highlights: [
      "Strong foundation in core CS fundamentals",
      "Developed Baker's Kitchen and HungR web platforms",
      "Focused coursework in Networking and Web Development",
    ],
    coursework: [
      "Object-Oriented Programming",
      "Operating Systems",
      "Computer Architecture",
      "Software Engineering",
      "Web Technologies",
      "Discrete Mathematics",
    ],
  },
  {
    degree: "Class XII — Science (CHSE)",
    institution: "Sri Aurobindo Science College",
    location: "Cuttack, Odisha, India",
    duration: "2019 – 2021",
    cgpa: "82.83%",
    highlights: ["Aggregate: 82.83%", "Stream: Science (PCM + Biology)"],
    coursework: [],
  },
  {
    degree: "Class X (BSE)",
    institution: "Dimiria G.P. High School",
    location: "Pallahara, Angul, Odisha, India",
    duration: "2018 – 2019",
    cgpa: "81%",
    highlights: ["Aggregate: 81%"],
    coursework: [],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "bakers-kitchen",
    title: "Baker's Kitchen",
    description:
      "Full-stack online food ordering web application with real-time order management and a clean, user-centric interface.",
    longDescription:
      "Baker's Kitchen is a full-stack food ordering platform enabling users to browse menus, place orders, and track deliveries. Built with a responsive UI and a Node.js backend, it demonstrates end-to-end web development skills including authentication, database design, and RESTful API integration.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
    githubUrl: "https://github.com/bipasa2003/bakers-kitchen",
    liveUrl: "https://bipasa2003.github.io/bakers-kitchen/#Gallery-Id", // [REPLACE: Add live URL when deployed]
    features: [
      "User authentication & session management",
      "Dynamic menu browsing with category filters",
      "Cart management and order placement flow",
      "MySQL-backed order and inventory management",
      "Fully responsive mobile-first design",
    ],
    impact:
      "Demonstrated full-stack development competency by shipping a functional e-commerce platform end-to-end, covering UI, API design, and database architecture.",
    status: "completed",
    year: "May 2022",
  },
  {
    id: "hungr",
    title: "HungR",
    description:
      "Community-driven web platform connecting local caterers with students for affordable, home-style meals near campuses.",
    longDescription:
      "HungR solves the affordability and discovery problem for student dining by creating a two-sided marketplace that connects local home caterers with university students. The platform supports caterer listings, meal browsing, and contact-based ordering with a lightweight, accessible interface.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
    githubUrl: "https://github.com/sannskaarr/HungR.git",
    liveUrl: "", // [REPLACE: Add live URL when deployed]
    features: [
      "Two-sided marketplace for caterers and students",
      "Caterer onboarding with menu listing management",
      "Location-based meal discovery",
      "MySQL-powered backend for listings and user data",
      "Lightweight, accessibility-focused UI",
    ],
    impact:
      "Addressed a real campus need by building a functional marketplace from scratch — demonstrating product thinking, backend design, and community-focused UX.",
    status: "completed",
    year: "Dec 2023",
  },
  {
    id: "medexa",
    title: "MEDEXA — Medical Search Engine",
    description:
      "Specialized medical search platform delivering verified, source-attributed healthcare information with intelligent result ranking.",
    longDescription:
      "MEDEXA is a full-stack medical search platform built with React and Node.js that indexes verified healthcare resources. It implements custom search ranking logic and presents results with source attribution to help users access credible medical information quickly. The platform prioritizes accuracy and readability over raw speed.",
    tech: ["React", "Node.js", "MySQL", "JavaScript"],
    githubUrl: "https://github.com/sannskaarr", // [REPLACE: Add exact repo URL]
    liveUrl: "", // [REPLACE: Add live URL when deployed]
    features: [
      "Custom search ranking algorithm for medical relevance",
      "Source-attributed results with credibility indicators",
      "Responsive React frontend with fast search UX",
      "MySQL-backed medical resource index",
      "Accessible design following WCAG guidelines",
    ],
    impact:
      "Built a domain-specific search platform that demonstrates ability to work on information retrieval systems — directly applicable to research and data engineering roles.",
    status: "completed",
    year: "2023",
  },
  {
    id: "iot-ipv6-rpl",
    title: "IPv6-Based IoT Routing (RPL Protocol)",
    description:
      "Architecture design and technical analysis of IPv6 mesh routing for low-power IoT networks using the RPL protocol (RFC 6550).",
    longDescription:
      "Designed and documented an IPv6-based IoT mesh routing architecture using the RPL protocol (RFC 6550), analyzing network topology, energy efficiency, and fault tolerance in low-power embedded environments. Produced technical documentation and comparative simulation analysis of routing strategies in constrained IoT nodes.",
    tech: ["IPv6", "RPL Protocol", "IoT", "Network Simulation", "Python"],
    githubUrl: "https://github.com/sannskaarr", // [REPLACE: Add exact repo URL]
    liveUrl: "",
    features: [
      "RFC 6550 RPL protocol implementation analysis",
      "Network topology simulation and fault tolerance testing",
      "Energy efficiency profiling for low-power nodes",
      "Comparative routing strategy documentation",
      "Technical report with simulation results",
    ],
    impact:
      "Developed hands-on expertise in IoT networking protocols, directly supporting research interests in distributed systems and embedded network architectures.",
    status: "research",
    year: "2023",
  },
];

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    title:
      "Multi-Behaviour Analysis of Dairy Cows for Thermotolerance Assessment",
    status: "under-review",
    area: [
      "Computer Vision",
      "Deep Learning",
      "Behaviour Analysis",
      "Machine Learning",
    ],
    date: "April 2026",
    abstract:
      "This research applies deep learning and computer vision techniques — including YOLO-based object detection — to analyze multi-dimensional behavioural patterns in dairy cattle as indicators of thermotolerance. The study develops a non-invasive, automated framework for livestock monitoring that can improve dairy farm productivity and animal welfare assessment.",
    url: "", // [REPLACE: Add paper URL when published]
  },
  {
    title:
      "AI-Based Traffic Control System with Real-Time Ambulance Priority",
    status: "ongoing",
    area: [
      "Artificial Intelligence",
      "Intelligent Transportation Systems",
      "Computer Vision",
    ],
    date: "May 2026 – Present",
    coAuthors: ["Bipasa Naik"],
    institution: "Utkal University",
    abstract:
      "An AI-driven adaptive traffic signal control system that integrates real-time ambulance detection and priority routing to reduce emergency vehicle response times. The system uses computer vision for vehicle classification and a dynamic signal optimization algorithm to clear traffic corridors on demand.",
    url: "", // [REPLACE: Add paper URL when published]
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Cloud Computing",
    issuer: "IIT Kharagpur",
    platform: "NPTEL",
    date: "April 2025",
    score: "55%",
    credentialUrl:
      "https://nptel.ac.in/", // [REPLACE: Add exact certificate URL]
    icon: "☁️",
  },
  {
    name: "Human Computer Interaction",
    issuer: "IIIT Delhi",
    platform: "NPTEL",
    date: "October 2025",
    score: "73%",
    credentialUrl:
      "https://nptel.ac.in/", // [REPLACE: Add exact certificate URL]
    icon: "🖥️",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", icon: "devicon-python-plain", level: 4, category: "Languages" },
      { name: "JavaScript", icon: "devicon-javascript-plain", level: 4, category: "Languages" },
      { name: "C++", icon: "devicon-cplusplus-plain", level: 3, category: "Languages" },
      { name: "C", icon: "devicon-c-plain", level: 3, category: "Languages" },
      { name: "Java", icon: "devicon-java-plain", level: 3, category: "Languages" },
      { name: "TypeScript", icon: "devicon-typescript-plain", level: 3, category: "Languages" },
    ],
  },
  {
    name: "Web Development",
    skills: [
      { name: "React", icon: "devicon-react-original", level: 4, category: "Web" },
      { name: "Node.js", icon: "devicon-nodejs-plain", level: 3, category: "Web" },
      { name: "HTML5", icon: "devicon-html5-plain", level: 5, category: "Web" },
      { name: "CSS3", icon: "devicon-css3-plain", level: 4, category: "Web" },
      { name: "MySQL", icon: "devicon-mysql-plain", level: 3, category: "Web" },
    ],
  },
  {
    name: "AI & Machine Learning",
    skills: [
      { name: "Machine Learning", icon: "devicon-python-plain", level: 4, category: "AI" },
      { name: "Deep Learning", icon: "devicon-tensorflow-original", level: 3, category: "AI" },
      { name: "OpenCV", icon: "devicon-opencv-plain", level: 3, category: "AI" },
      { name: "NumPy", icon: "devicon-numpy-original", level: 4, category: "AI" },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "devicon-git-plain", level: 4, category: "Tools" },
      { name: "GitHub", icon: "devicon-github-original", level: 4, category: "Tools" },
      { name: "VS Code", icon: "devicon-vscode-plain", level: 5, category: "Tools" },
      { name: "Linux", icon: "devicon-linux-plain", level: 3, category: "Tools" },
    ],
  },
];

export const RESEARCH_INTERESTS = [
  {
    title: "Artificial Intelligence & ML",
    icon: "🤖",
    description:
      "Deep learning architectures, computer vision, YOLO-based detection, and behaviour recognition systems for real-world applications.",
  },
  {
    title: "Computer Networks",
    icon: "🌐",
    description:
      "Network topology design, routing protocols, and performance optimization in distributed and high-availability systems.",
  },
  {
    title: "Internet of Things",
    icon: "📡",
    description:
      "IPv6-based mesh networking, RPL routing protocol, low-power embedded architectures, and smart sensor integration.",
  },
  {
    title: "Cyber Security",
    icon: "🔐",
    description:
      "Network security, cryptographic protocols, threat detection, and secure system design for distributed environments.",
  },
  {
    title: "Distributed Systems",
    icon: "⚡",
    description:
      "Fault-tolerant architectures, consensus algorithms, and scalable microservice design for large-scale applications.",
  },
  {
    title: "Intelligent Transportation",
    icon: "🚗",
    description:
      "AI-driven traffic optimization, emergency vehicle priority systems, and smart city infrastructure using computer vision.",
  },
];
