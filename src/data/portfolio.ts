export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  url: string;
  featured: boolean;
  tags: string[];
  gradient: string;
  image?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface EducationItem {
  period: string;
  title: string;
  institution: string;
  boardOrStream: string;
  status?: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  type: string;
  badge: string;
  color: string;
}

export const PERSONAL_INFO = {
  name: "MD Abdul Raheem",
  brand: "M.A.R Enterprise",
  role: "Graphic Designer & Web Developer",
  subRole: "AI & Automation Enthusiast",
  phone: "+91 9182835781",
  email: "marenterprise07@gmail.com",
  location: "India, Telangana, Hyderabad",
  currentYear: "2026",
  bioShort:
    "Passionate Graphic Designer, Web Developer and AI & Automation enthusiast crafting visually arresting, high-converting digital products and intelligent workflows.",
  bioLong:
    "I'm MD Abdul Raheem, a multi-disciplinary creator specializing in modern website architecture, brand identity design, and cutting-edge artificial intelligence automations. Through M.A.R Enterprise, I transform conceptual ideas into responsive, production-ready web experiences and automated business solutions.",
  stats: [
    { label: "Projects Completed", value: 16, suffix: "+" },
    { label: "Client Satisfaction", value: 100, suffix: "%" },
    { label: "Years Experience & Learning", value: 3, suffix: "+" },
    { label: "Specialized Skillsets", value: 16, suffix: "+" },
  ],
  socials: [
    { name: "Email", url: "mailto:marenterprise07@gmail.com", icon: "Mail" },
    { name: "Phone", url: "tel:+919182835781", icon: "Phone" },
    { name: "Telegram", url: "https://t.me/marenterprise07", icon: "Send" },
    { name: "GitHub", url: "https://github.com", icon: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
  ],
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    period: "2025 – 2027 (Present)",
    title: "Inter 2nd Year [CEC]",
    institution: "MS College",
    boardOrStream: "CEC Stream (Commerce, Economics, Civics)",
    status: "Present",
    description:
      "Deepening business fundamentals, economics, and commercial acumen while scaling enterprise web and digital design projects.",
  },
  {
    period: "2024 – 2025",
    title: "10th – ICSE Board",
    institution: "Mukarram Jah School",
    boardOrStream: "ICSE Board",
    status: "Completed",
    description:
      "Rigorous secondary school education with foundational technical problem-solving, science, and computer applications.",
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: "MS OFFICE",
    issuer: "SETWIN",
    type: "Certificate",
    badge: "Official Certification",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Graphic Designing",
    issuer: "ASDC",
    type: "Certificate",
    badge: "Professional Certificate",
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "AI Builder Mastery",
    issuer: "ASDC",
    type: "Certificate",
    badge: "Advanced AI Masterclass",
    color: "from-violet-600 to-fuchsia-600",
  },
];

export const GRAPHIC_DESIGN_SKILLS = [
  { name: "Adobe Illustrator", category: "Vector & Branding", level: 95 },
  { name: "Adobe Photoshop", category: "Photo & Raster Editing", level: 92 },
  { name: "Adobe Premiere", category: "Video & Motion Production", level: 86 },
  { name: "Canva", category: "Rapid Visual Assets", level: 96 },
  { name: "Photo Editing", category: "Retouching & Color Grading", level: 94 },
  { name: "Poster Designing", category: "Visual Communication", level: 95 },
  { name: "Logo Designing", category: "Brand Identity", level: 98 },
  { name: "Flyer Designing", category: "Commercial Print & Digital", level: 93 },
];

export const COURSES_DATA = [
  { name: "AI", icon: "Cpu", category: "Artificial Intelligence" },
  { name: "Generative AI", icon: "Sparkles", category: "Artificial Intelligence" },
  { name: "Digital Marketing", icon: "TrendingUp", category: "Growth & Marketing" },
  { name: "Website Designing", icon: "Palette", category: "Web Design" },
  { name: "Website Developing", icon: "Code2", category: "Engineering" },
  { name: "Website Deployment", icon: "Rocket", category: "DevOps & Cloud" },
  { name: "Web Application", icon: "Globe", category: "Engineering" },
  { name: "Mobile Application", icon: "Smartphone", category: "Mobile" },
  { name: "Automation", icon: "Zap", category: "Automation" },
  { name: "AI Automation", icon: "Bot", category: "Automation" },
  { name: "How to Make AI Agents", icon: "Brain", category: "Agentic AI" },
  { name: "YouTube Automation", icon: "Video", category: "Media Automation" },
  { name: "Job Search Automation", icon: "Briefcase", category: "Workflows" },
  { name: "Telegram Chat Bot", icon: "MessageSquare", category: "Bot Architecture" },
  { name: "Voice Agent", icon: "Mic", category: "Conversational AI" },
  { name: "Meeting Schedule Automation", icon: "Calendar", category: "Enterprise Workflows" },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "cafe-story",
    title: "Cafe Story",
    tagline: "Artisanal Cafe & Interactive Culinary Web Experience",
    category: "Web Design",
    description:
      "An experiential culinary and cafe web ecosystem featuring artisanal beverage showcases, interactive gourmet menus, ambience storytelling, and digital customer reservation flows.",
    url: "https://cafestory.ai.studio",
    featured: true,
    tags: ["Google AI Studio", "Culinary Web", "Interactive Menu", "Brand Experience"],
    gradient: "from-amber-950/70 via-purple-950/50 to-stone-950/80",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mar-enterprise",
    title: "Mar Enterprise",
    tagline: "Flagship Corporate & Digital Services Hub",
    category: "Web Design",
    description:
      "The premier corporate web ecosystem for M.A.R Enterprise showcasing modern digital creative services, agency portfolio, and brand solutions.",
    url: "https://marenterprise.lovable.app",
    featured: true,
    tags: ["React", "Tailwind CSS", "Enterprise UI", "Brand Identity"],
    gradient: "from-purple-900/60 via-violet-800/40 to-indigo-950/80",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mar-watch-enterprise",
    title: "Mar Watch Enterprise",
    tagline: "Luxury Timepiece E-Commerce Boutique",
    category: "E-Commerce",
    description:
      "A high-end luxury horology storefront crafted with editorial typography, product showcasing, interactive catalogue, and sleek checkout experience.",
    url: "https://marwatchenterprise.lovable.app",
    featured: true,
    tags: ["E-Commerce", "Luxury UI", "Product Showcase", "Modern Web"],
    gradient: "from-indigo-900/60 via-slate-800/40 to-purple-950/80",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mar-cloths",
    title: "Mar Cloths",
    tagline: "Modern Apparel & Fashion Storefront",
    category: "E-Commerce",
    description:
      "Contemporary fashion apparel destination designed with responsive lookbooks, seasonal collections, trend filters, and seamless customer shopping flow.",
    url: "https://marcloths.lovable.app",
    featured: true,
    tags: ["Apparel", "Fashion E-Commerce", "Responsive Design", "Creative UI"],
    gradient: "from-fuchsia-950/60 via-purple-900/40 to-slate-950/80",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mar-tourism",
    title: "Mar Tourism",
    tagline: "Global Travel & Destination Gateway",
    category: "Web Design",
    description:
      "An immersive travel portal featuring destination discovery, custom itinerary highlights, interactive tour booking, and vibrant imagery curation.",
    url: "https://martourism.base44.app",
    featured: true,
    tags: ["Travel & Tourism", "Destination Booking", "Full-Stack App", "UX"],
    gradient: "from-blue-950/60 via-violet-900/40 to-purple-950/80",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "raheem-cursor",
    title: "Raheem Cursor",
    tagline: "Interactive AI Developer Suite & Tools",
    category: "AI & Tools",
    description:
      "An interactive developer showcase and modern productivity interface demonstrating fluid micro-interactions, responsive tools, and AI workflows.",
    url: "https://raheemcursor.lovable.app",
    featured: true,
    tags: ["AI Tools", "Developer Suite", "Next-Gen UI", "Automation"],
    gradient: "from-violet-950/60 via-purple-900/40 to-fuchsia-950/80",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "footwear-emporium",
    title: "Footwear Emporium",
    tagline: "Premium Footwear & Sneaker Emporium",
    category: "E-Commerce",
    description:
      "Specialty sneaker and athletic footwear e-commerce application highlighting dynamic product 360 styling, filter matrices, and rapid cart ordering.",
    url: "https://footwearemporium.lovable.app",
    featured: true,
    tags: ["E-Commerce", "Sneaker Boutique", "Dynamic Filtering", "Modern UI"],
    gradient: "from-purple-950/60 via-indigo-900/40 to-violet-950/80",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "asdc-commercial-branding",
    title: "Commercial Posters & Brand Identity",
    tagline: "High-Impact Commercial Posters & Visual Creatives",
    category: "Graphic Design",
    description:
      "Professional commercial poster designs, corporate branding collateral, flyer campaigns, and digital assets designed using Adobe Photoshop and Illustrator.",
    url: "https://marenterprise.lovable.app",
    featured: true,
    tags: ["Photoshop", "Illustrator", "Poster Design", "Brand Guidelines"],
    gradient: "from-pink-950/60 via-purple-900/40 to-slate-950/80",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ai-telegram-agents",
    title: "AI Autonomous Agents & Bots",
    tagline: "Intelligent Workflows & Automated Lead Channels",
    category: "AI & Tools",
    description:
      "Autonomous Telegram chat bots, calendar scheduling automation, and YouTube pipeline automations delivering 24/7 client response and automated productivity.",
    url: "https://t.me/marenterprise07",
    featured: true,
    tags: ["Telegram Bot", "Agentic AI", "Automation", "Workflows"],
    gradient: "from-blue-950/60 via-violet-900/40 to-purple-950/80",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
  },
];

export const SERVICES_DATA: Service[] = [
  {
    id: "graphic-design",
    number: "01",
    title: "Graphic Designing & Branding",
    description:
      "Complete visual identity creation, including logo design, commercial posters, promotional flyers, photo retouching, and vector illustration.",
    icon: "Palette",
    features: [
      "Custom Logo & Brand Identity",
      "Event Posters & Social Creatives",
      "Corporate Flyers & Stationery",
      "Advanced Photoshop Retouching",
      "Adobe Illustrator Vector Graphics",
    ],
  },
  {
    id: "web-development",
    number: "02",
    title: "Website Design & Development",
    description:
      "Bespoke, blazing-fast responsive websites and web applications built with modern frameworks, high-conversion layouts, and clean animations.",
    icon: "Globe",
    features: [
      "Mobile-First Responsive Layouts",
      "Modern React & Next.js Architecture",
      "E-Commerce & Storefront Platforms",
      "Interactive UI Micro-animations",
      "Performance & SEO Optimization",
    ],
  },
  {
    id: "ai-automation",
    number: "03",
    title: "AI Agents & Workflow Automation",
    description:
      "Automating repetitive operations, customer engagement, and lead processing using autonomous AI agents, chat bots, and custom automations.",
    icon: "Bot",
    features: [
      "Custom AI Autonomous Agents",
      "Telegram & WhatsApp Chatbots",
      "Meeting & Calendar Scheduling Bots",
      "YouTube & Content Automations",
      "Automated Job Search & Outreach",
    ],
  },
  {
    id: "web-mobile-apps",
    number: "04",
    title: "Web & Mobile Applications",
    description:
      "Full-featured progressive web apps and mobile interfaces engineered for seamless touch interaction, data synchronization, and high user retention.",
    icon: "Smartphone",
    features: [
      "Progressive Web Apps (PWA)",
      "Cross-Platform Mobile Experiences",
      "API Integrations & Cloud Backends",
      "Real-time Dashboard Analytics",
      "Secure Authentication & User States",
    ],
  },
  {
    id: "digital-marketing",
    number: "05",
    title: "Digital Marketing & Creative Assets",
    description:
      "Strategic visual assets tailored for digital advertising, social media campaigns, brand awareness, and user conversion funnels.",
    icon: "TrendingUp",
    features: [
      "High-converting Ad Creatives",
      "Social Media Visual Strategy",
      "Campaign Banners & Thumbnails",
      "Brand Style Guides & Assets",
      "Growth Metric Tracking",
    ],
  },
  {
    id: "cloud-deployment",
    number: "06",
    title: "Website Deployment & Support",
    description:
      "End-to-end cloud deployment, domain configuration, continuous performance monitoring, and dependable ongoing maintenance.",
    icon: "Rocket",
    features: [
      "Cloud Deployment & CDN Setup",
      "Domain DNS & SSL Configuration",
      "Performance Monitoring & Backups",
      "Security Audits & Patch Updates",
      "Dedicated 24/7 Client Support",
    ],
  },
];

export const QUALITIES_LIST = [
  {
    title: "Pixel-Perfect Precision",
    description: "Every layout, margin, gradient, and font hierarchy is aligned with microscopic care.",
  },
  {
    title: "Modern AI Integration",
    description: "Leveraging state-of-the-art AI workflows and intelligent automation engines.",
  },
  {
    title: "Lightning Fast Delivery",
    description: "Rapid turnaround times without ever compromising on quality, security, or polish.",
  },
  {
    title: "Clean, Scalable Architecture",
    description: "Engineered using modern TypeScript, modular components, and maintainable standards.",
  },
  {
    title: "Client-Centric Mindset",
    description: "Direct collaboration, responsive communication, and 100% satisfaction commitment.",
  },
];

export const EXPERIENCE_DATA = [
  {
    period: "2024 – Present",
    role: "Founder & Lead Digital Creator",
    company: "M.A.R Enterprise",
    location: "Hyderabad, India",
    type: "Independent Agency & Projects",
    description:
      "Spearheading digital design, commercial web platforms, and automated workflow solutions for diverse business clients. Delivered 6+ live interactive web platforms and multiple brand identity packages.",
    highlights: [
      "Architected and deployed 6 live web platforms including Mar Enterprise, Mar Watch, and Footwear Emporium.",
      "Produced 50+ commercial graphic design assets across Photoshop, Illustrator, and Canva.",
      "Engineered automated Telegram bots and workflow scripts saving client hours weekly.",
    ],
  },
  {
    period: "2024 – 2025",
    role: "Web & Graphic Design Project Specialist",
    company: "Freelance & Creative Labs",
    location: "Hyderabad, India",
    type: "Project-Based",
    description:
      "Executed end-to-end poster campaigns, corporate stationery, and customized front-end interfaces while completing specialized certifications in Graphic Design and Office Systems.",
    highlights: [
      "Completed ASDC Graphic Designing and SETWIN MS Office Professional Certifications.",
      "Designed logos, flyers, and digital marketing banners for local businesses and events.",
    ],
  },
];
