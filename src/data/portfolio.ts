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
  year?: string;
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
  brand: "MAR Enterprise",
  tagline: "YOUR DIGITAL GROWTH PARTNER",
  taglineSecondary: "YOUR BUSINESS OUR DIGITAL SOLUTIONS",
  role: "Digital Marketing | AI Automation | AI Agents | Web & Digital Creative",
  subRole: "Web & Graphic Design Project Specialist",
  phone: "+91 78429 06002",
  email: "mdabdulraheemmar@gmail.com",
  portfolioUrl: "https://mar-portfolio-one.vercel.app",
  location: "Hyderabad, Telangana, India",
  currentYear: "2026",
  bioShort:
    "Digital-focused hands-on experience across Digital Marketing, AI automation, AI agents, Web Development, Graphic Design, and Digital growth solutions.",
  bioLong:
    "Digital-focused hands-on experience across Digital Marketing, AI automation, AI agents, Web Development, Graphic Design, and Digital growth solutions. Experienced in building Automation Workflows and agent-based solutions for Telegram, WhatsApp, Calendar scheduling, YouTube, Instagram, Facebook/Content Workflows, and job-search/outreach processes. Also experienced in Social Media management, Google Ads, Meta Ads, Campaign Creatives, Content Planning, Website development, SEO, GEO, AEO and Responsive digital experiences. Currently pursuing Intermediate 2nd Year (CEC), With Certified Training in Digital Marketing, AI Builder Mastery, Graphic Designing, and MS Office.",
  stats: [
    { label: "Projects Completed", value: 16, suffix: "+" },
    { label: "Client Satisfaction", value: 100, suffix: "%" },
    { label: "Years Experience & Learning", value: 3, suffix: "+" },
    { label: "Specialized Skillsets", value: 16, suffix: "+" },
  ],
  socials: [
    { name: "Email", url: "mailto:mdabdulraheemmar@gmail.com", icon: "Mail" },
    { name: "Phone", url: "tel:+917842906002", icon: "Phone" },
    { name: "WhatsApp", url: "https://wa.me/917842906002", icon: "MessageCircle" },
    { name: "Telegram", url: "https://t.me/marenterprise07", icon: "Send" },
    { name: "GitHub", url: "https://github.com", icon: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
  ],
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    period: "2025 – 2027 (Present)",
    title: "Intermediate 2nd Year [CEC]",
    institution: "MS Junior College",
    boardOrStream: "Commerce, Economics, Civics",
    status: "Present",
    description: "Commerce, Economics, Civics",
  },
  {
    period: "2024 – 2025",
    title: "10th – ICSE Board",
    institution: "Mukarram Jah School",
    boardOrStream: "ICSE Board",
    status: "Completed",
    description: "ICSE Board",
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: "Masters in Digital Marketing",
    issuer: "ASDC",
    type: "Certificate",
    badge: "Advanced and Mastry Certficate",
    color: "from-fuchsia-600 to-pink-600",
  },
  {
    title: "AI Builder Mastery",
    issuer: "ASDC",
    type: "Certificate",
    badge: "Advanced AI Masterclass",
    color: "from-violet-600 to-fuchsia-600",
  },
  {
    title: "Graphic Designing",
    issuer: "ASDC",
    type: "Certificate",
    badge: "Professional Certificate",
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "MS Office",
    issuer: "SETWIN",
    type: "Certificate",
    badge: "Official Certification",
    color: "from-blue-500 to-indigo-600",
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
  { name: "Google and Meta Ads", icon: "TrendingUp", category: "Digital Marketing" },
  { name: "Digital Marketing", icon: "TrendingUp", category: "Growth & Marketing" },
  { name: "Website Designing", icon: "Palette", category: "Web Design" },
  { name: "Website Developing", icon: "Code2", category: "Engineering" },
  { name: "Website Deployment", icon: "Rocket", category: "DevOps & Cloud" },
  { name: "Web Application", icon: "Globe", category: "Engineering" },
  { name: "Mobile Application", icon: "Smartphone", category: "Mobile" },
  { name: "Automation", icon: "Zap", category: "Automation" },
  { name: "AI Automation", icon: "Bot", category: "Automation" },
  { name: "How to Make AI Agents", icon: "Brain", category: "Agentic AI" },
  { name: "YouTube, Instagram, Facebook Automation & Posting", icon: "Video", category: "Media Automation" },
  { name: "Job Search Automation", icon: "Briefcase", category: "Workflows" },
  { name: "Telegram Chat Bot", icon: "MessageSquare", category: "Bot Architecture" },
  { name: "Voice Agent", icon: "Mic", category: "Conversational AI" },
  { name: "Meeting Schedule Automation", icon: "Calendar", category: "Enterprise Workflows" },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "ai-autonomous-agents",
    title: "AI Autonomous Agents & Bots",
    tagline: "Autonomous Telegram chatbots, Calendar Scheduling & YouTube pipeline automations",
    category: "AI & Tools",
    year: "2026",
    description:
      "Autonomous Telegram chatbots, Calendar Scheduling Automation, and YouTube pipeline automations designed for 24/7 client response and automated productivity.",
    url: "https://t.me/marenterprise07",
    featured: true,
    tags: ["Telegram Bot", "Agentic AI", "Automation", "Workflows"],
    gradient: "from-blue-950/80 via-violet-900/60 to-purple-950/80",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "commercial-posters-branding",
    title: "Commercial Posters & Brand Identity",
    tagline: "Commercial poster designs, corporate branding collateral & flyer campaigns",
    category: "Graphic Design",
    year: "2026",
    description:
      "Commercial poster designs, corporate branding collateral, flyer campaigns, and digital assets created using Adobe Photoshop and Illustrator.",
    url: "https://marenterprise.lovable.app",
    featured: true,
    tags: ["Photoshop", "Illustrator", "Poster Design", "Brand Guidelines"],
    gradient: "from-pink-950/70 via-purple-900/50 to-slate-950/80",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mar-architectural-studio",
    title: "MAR Architectural Studio",
    tagline: "Architecture studio website presenting architectural design and structural engineering services",
    category: "Architecture & Design",
    year: "2026",
    description:
      "Architecture studio website presenting architectural design and structural engineering services in a professional, service-focused digital presence.",
    url: "https://mar-architectural-studio.vercel.app",
    featured: true,
    tags: ["Architecture", "Service Presentation", "Responsive Web Design", "SEO"],
    gradient: "from-purple-950/80 via-slate-900/60 to-violet-950/80",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mar-cloths-vercel",
    title: "Mar Cloths",
    tagline: "Premium fashion showroom website focused on clothing collections and bespoke apparel",
    category: "Fashion & Retail",
    year: "2026",
    description:
      "Premium fashion showroom website focused on clothing collections and bespoke apparel, with a polished brand presentation for customer discovery.",
    url: "https://marcloths.vercel.app",
    featured: true,
    tags: ["Fashion Retail", "Clothing Showcase", "Brand Identity", "Responsive Design"],
    gradient: "from-fuchsia-950/60 via-purple-900/40 to-slate-950/80",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "kage-sage",
    title: "Kage Sage",
    tagline: "Atmospheric digital experience: Where stillness reveals the unseen",
    category: "Web Design",
    year: "2026",
    description:
      "Atmospheric digital experience built around the theme “Where stillness reveals the unseen,” emphasizing visual storytelling and a distinctive brand presentation.",
    url: "https://kage-sage.vercel.app",
    featured: true,
    tags: ["Visual Storytelling", "Brand Experience", "Responsive UI", "Web Design"],
    gradient: "from-slate-950 via-zinc-900 to-purple-950",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "footwear-emporium",
    title: "Footwear Emporium",
    tagline: "Sneaker and athletic footwear e-commerce application concept",
    category: "E-Commerce",
    year: "2026",
    description:
      "Sneaker and athletic footwear e-commerce application concept with product styling, filtering, and cart ordering.",
    url: "https://footwearemporium.lovable.app",
    featured: true,
    tags: ["E-Commerce", "Sneaker Boutique", "Dynamic Filtering", "Modern UI"],
    gradient: "from-purple-950/60 via-indigo-900/40 to-violet-950/80",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mar-enterprise",
    title: "Mar Enterprise",
    tagline: "Corporate web ecosystem for M.A.R Enterprise showcasing digital creative services",
    category: "Web Design",
    year: "2025",
    description:
      "Corporate web ecosystem for M.A.R Enterprise showcasing digital creative services, agency portfolio, and brand solutions.",
    url: "https://marenterprise.lovable.app",
    featured: true,
    tags: ["React", "Tailwind CSS", "Enterprise UI", "Brand Identity"],
    gradient: "from-purple-900/60 via-violet-800/40 to-indigo-950/80",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "cafe-story",
    title: "Cafe Story",
    tagline: "Culinary and cafe web ecosystem featuring beverage showcases and interactive menus",
    category: "Web Design",
    year: "2026",
    description:
      "Culinary and cafe web ecosystem featuring beverage showcases, interactive menus, ambience storytelling, and digital customer reservation flows.",
    url: "https://cafestory.ai.studio",
    featured: true,
    tags: ["Google UI", "Culinary Web", "Interactive Menu", "Brand Experience"],
    gradient: "from-amber-950/70 via-purple-950/50 to-stone-950/80",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mar-watch-enterprise",
    title: "Mar Watch Enterprise",
    tagline: "Luxury horology storefront concept with editorial typography & product showcasing",
    category: "E-Commerce",
    year: "2026",
    description:
      "Luxury horology storefront concept with editorial typography, product showcasing, interactive catalogue, and checkout experience.",
    url: "https://marwatchenterprise.lovable.app",
    featured: true,
    tags: ["E-Commerce", "Luxury UI", "Product Showcase", "Modern Web"],
    gradient: "from-indigo-900/60 via-slate-800/40 to-purple-950/80",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mar-cloths-lovable",
    title: "Mar Cloths",
    tagline: "Fashion apparel destination concept with responsive lookbooks & trend filters",
    category: "E-Commerce",
    year: "2026",
    description:
      "Fashion apparel destination concept with responsive lookbooks, seasonal collections, trend filters, and customer shopping flow.",
    url: "https://marcloths.lovable.app",
    featured: true,
    tags: ["Apparel", "Fashion E-Commerce", "Responsive Design", "Creative UI"],
    gradient: "from-violet-950/70 via-purple-900/40 to-pink-950/70",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mar-tourism",
    title: "Mar Tourism",
    tagline: "Travel portal concept featuring destination discovery & interactive tour booking",
    category: "Web Design",
    year: "2026",
    description:
      "Travel portal concept featuring destination discovery, itinerary highlights, interactive tour booking, and imagery curation.",
    url: "https://martourism.base44.app",
    featured: true,
    tags: ["Travel & Tourism", "Destination Booking", "Full-Stack App", "UX"],
    gradient: "from-blue-950/60 via-violet-900/40 to-purple-950/80",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "raheem-cursor",
    title: "Raheem Cursor",
    tagline: "Developer showcase and productivity interface with micro-interactions & AI workflows",
    category: "AI & Tools",
    year: "2026",
    description:
      "Developer showcase and productivity interface demonstrating micro-interactions, responsive tools, and AI workflows.",
    url: "https://raheemcursor.lovable.app",
    featured: true,
    tags: ["AI Tools", "Developer Suite", "Next-Gen UI", "Automation"],
    gradient: "from-violet-950/60 via-purple-900/40 to-fuchsia-950/80",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  },
];

export const SERVICES_DATA: Service[] = [
  {
    id: "digital-marketing",
    number: "01",
    title: "Digital Marketing & Creative Assets",
    description:
      "High-converting ad creatives | Social media visual strategy | Campaign banners & thumbnails | Brand style guides & assets | Growth metric tracking",
    icon: "TrendingUp",
    features: [
      "High-converting ad creatives",
      "Social media visual strategy",
      "Campaign banners & thumbnails",
      "Brand style guides & assets",
      "Growth metric tracking",
    ],
  },
  {
    id: "ai-agents-automation",
    number: "02",
    title: "AI Agents & Workflow Automation",
    description:
      "Custom AI autonomous agents | Telegram & WhatsApp chatbots | Meeting & calendar scheduling bots | YouTube, Instagram, Facebook& content automations | Automated job search & outreach",
    icon: "Bot",
    features: [
      "Custom AI autonomous agents",
      "Telegram & WhatsApp chatbots",
      "Meeting & calendar scheduling bots",
      "YouTube, Instagram, Facebook& content automations",
      "Automated job search & outreach",
    ],
  },
  {
    id: "website-design-development",
    number: "03",
    title: "Website Design & Development",
    description:
      "Mobile-first responsive layouts | React & Next.js architecture | E-commerce/storefront platforms | Interactive UI micro-animations | Performance & SEO optimization",
    icon: "Globe",
    features: [
      "Mobile-first responsive layouts",
      "React & Next.js architecture",
      "E-commerce/storefront platforms",
      "Interactive UI micro-animations",
      "Performance & SEO optimization",
    ],
  },
  {
    id: "web-mobile-applications",
    number: "04",
    title: "Web & Mobile Applications",
    description:
      "Progressive Web Apps (PWA) | Cross-platform mobile experiences | API integrations & cloud backends | Real-time dashboard analytics | Secure authentication & user states",
    icon: "Smartphone",
    features: [
      "Progressive Web Apps (PWA)",
      "Cross-platform mobile experiences",
      "API integrations & cloud backends",
      "Real-time dashboard analytics",
      "Secure authentication & user states",
    ],
  },
  {
    id: "website-deployment-support",
    number: "05",
    title: "Website Deployment & Support",
    description:
      "Cloud deployment & CDN setup | Domain DNS & SSL configuration | Performance monitoring & backups | Security audits & patch updates | Dedicated client support",
    icon: "Rocket",
    features: [
      "Cloud deployment & CDN setup",
      "Domain DNS & SSL configuration",
      "Performance monitoring & backups",
      "Security audits & patch updates",
      "Dedicated client support",
    ],
  },
  {
    id: "graphic-designing-branding",
    number: "06",
    title: "Graphic Designing & Branding",
    description:
      "Custom logo & brand identity | Event posters & social creatives | Corporate flyers & stationery | Advanced Photoshop retouching | Adobe Illustrator vector graphics",
    icon: "Palette",
    features: [
      "Custom logo & brand identity",
      "Event posters & social creatives",
      "Corporate flyers & stationery",
      "Advanced Photoshop retouching",
      "Adobe Illustrator vector graphics",
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
    role: "Lead Digital Projects",
    company: "MAR Enterprise",
    location: "Hyderabad, India",
    type: "Digital Marketing, AI & Web",
    description:
      "Lead digital projects spanning Digital Marketing, AI automation, AI-agent workflows, Web Platforms, Branding, and creative assets for business use cases.",
    highlights: [
      "Lead digital projects spanning Digital Marketing, AI automation, AI-agent workflows, Web Platforms, Branding, and creative assets for business use cases.",
      "Build and deploy automation solutions including Telegram and WhatsApp chatbot concepts, Meeting/Calendar scheduling workflows, YouTube, Instagram, Facebook/Content automations, and job-search/outreach automation.",
      "Develop digital marketing solutions covering Social Media account handling and Posting, content planning, professional social creatives, Google Ads, Meta Ads, Audience Targeting, campaign management, performance monitoring, and Ad optimization.",
      "Design and develop responsive web platforms using modern web architecture, with experience across React/Next.js concepts, Tailwind CSS, e-commerce interfaces, SEO, GEO, AEO, Animations, API integrations, and Cloud deployment.",
      "Created and managed a portfolio of live web and Digital Projects.",
      "Produced 50+ commercial graphic design assets across Photoshop, Illustrator, and Canva, according to the portfolio.",
    ],
  },
  {
    period: "2024 – 2025",
    role: "Web & Graphic Design Project Specialist",
    company: "Freelance & Creative Labs",
    location: "Hyderabad, India",
    type: "Project-Based",
    description:
      "Executed end-to-end poster campaigns, corporate stationery, Digital Marketing Banners, Logos, flyers, and Customized front-end interfaces.",
    highlights: [
      "Executed end-to-end poster campaigns, corporate stationery, Digital Marketing Banners, Logos, flyers, and Customized front-end interfaces.",
      "Applied graphic design and office-software skills to business and event-oriented creative work.",
      "Completed specialized certifications in Graphic Designing and MS Office Professional.",
    ],
  },
];
