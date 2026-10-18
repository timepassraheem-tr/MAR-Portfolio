export interface WebsitePackage {
  id: string;
  name: string;
  tagline: string;
  websiteType: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  highlight?: boolean;
  badge?: string;
}

export interface MarketingPackage {
  id: string;
  optionLabel: string;
  title: string;
  tagline: string;
  price: string;
  pricePeriod?: string;
  description: string;
  features: string[];
  ctaText: string;
  isCombined?: boolean;
  breakdown?: {
    item1: { title: string; price: string; details: string[] };
    item2: { title: string; price: string; details: string[] };
    total: { formula: string; finalPrice: string };
  };
}

export interface AutomationPackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  highlight?: boolean;
  badge?: string;
}

export const WEBSITE_PACKAGES: WebsitePackage[] = [
  {
    id: 'simple',
    name: 'SIMPLE',
    tagline: 'IDEAL FOR INDIVIDUALS & SMALL BUSINESSES',
    websiteType: '1 Page Website (Home Page)',
    price: '₹ 4,000',
    description: 'A clean and simple website to establish your online presence.',
    features: [
      '1 Page Website (Home Page)',
      'Clean & Minimal Design',
      'Mobile Responsive',
      'Basic Contact Form (Email Submissions)',
      'Logo Creation',
      'Social Media Links',
      'Free Hosting on Vercel (1 Month) (yoursite.vercel.app)',
      'Basic Support (1 Month)',
    ],
    ctaText: 'Get Started',
    highlight: false,
  },
  {
    id: 'standard',
    name: 'STANDARD',
    tagline: 'PERFECT FOR GROWING BUSINESSES',
    websiteType: '5 Pages Website',
    price: '₹ 8,000',
    badge: '👑 Most Recommended',
    description: 'A professional and feature-rich website for better engagement and growth.',
    features: [
      '5 Pages Website (Home, About, Services, Blog, Contact)',
      'Modern & Professional Design',
      'Mobile Responsive (All Devices)',
      'Advanced Contact Form (with Email Notifications)',
      'Logo Creation',
      'Social Media Integration',
      'Image Gallery / Portfolio Section',
      'Blog / News Section',
      'Free Hosting on Vercel (1 Month) (yoursite.vercel.app)',
      'Security Setup (SSL Certificate)',
      'Basic Support (3 Months)',
    ],
    ctaText: 'Get Started',
    highlight: true,
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    tagline: 'BEST FOR BRANDS & HIGH-GROWTH BUSINESSES',
    websiteType: '10 or 10+ Pages Website',
    price: '₹ 10,000 & ABOVE',
    description: 'A high-end, fully customized website with advanced features and premium design.',
    features: [
      '10 or 10+ Pages Website (Fully Custom Structure)',
      'Premium & Unique UI/UX Design',
      'Mobile, Tablet & Desktop Responsive',
      'Advanced Contact Forms (CRM Integration)',
      'Dynamic Content / CMS (Easy to Edit)',
      'Blog / News Section',
      'Portfolio / Project Showcase',
      'Animations & Scroll Effects (Parallax, 3D Elements, Micro Interactions)',
      'Logo Creation',
      'Social Media Integration',
      'Lead Capture & Email Integration',
      'Free Hosting on Vercel (1 Month) (yoursite.vercel.app)',
      'Security Setup (SSL, Firewall, Backup)',
      'Training to Manage the Website',
      'Priority Support (6 Months)',
    ],
    ctaText: 'Get Started',
    highlight: false,
  },
];

export const MARKETING_PACKAGES: MarketingPackage[] = [
  {
    id: 'digital-marketing-monthly',
    optionLabel: 'A',
    title: 'DIGITAL MARKETING',
    tagline: 'Monthly Package',
    price: '₹ 10,000 – ₹ 12,000',
    pricePeriod: 'per month',
    description: 'Grow your brand, reach more customers and increase your business with result-driven digital marketing.',
    features: [
      'Setting up the Google My Business Profile.',
      'Logo Creation.',
      'Creating Social media channels and pages.',
      'SEO (Search Engine Optimization)',
      'GEO (Generative Engine Optimization)',
      'AEO (Answer Engine Optimization)',
      'Running Ads: Google Ads, Meta Ads, etc.',
      'Posting on Social media: On Instagram, YouTube, Facebook, LinkedIn.',
      'Each Post (Image) for ₹ 100',
      'Each Post (Video) for ₹ 150 – ₹ 200',
      'Posting as per customer requirements (Daily, weekly, monthly, etc.).',
    ],
    ctaText: 'Book Package A',
    isCombined: false,
  },
  {
    id: 'digital-marketing-with-website',
    optionLabel: 'B',
    title: 'DIGITAL MARKETING WITH WEBSITE',
    tagline: 'Complete solution to build your online presence and grow your business.',
    price: '₹ 18,000 – ₹ 20,000',
    pricePeriod: 'total package',
    description: 'All-in-one comprehensive digital presence and active marketing package combining a professional 5-page website and full 1-month marketing engine.',
    features: [
      '1. STANDARD WEBSITE (₹ 8,000 Value): 5 Pages (Home, About, Services, Blog, Contact), Responsive Design, Advanced Contact Form, Free Hosting, SSL & 3 Months Support.',
      '2. DIGITAL MARKETING 1 MONTH (₹ 10,000 – ₹ 12,000 Value): Google My Business, Social Media Channels, SEO, GEO, AEO, Running Google & Meta Ads.',
      'Social Media Posting: Instagram, YouTube, Facebook, LinkedIn.',
      'Post Creatives: Each Post (Image) for ₹ 100 | Each Post (Video) for ₹ 150 – ₹ 200.',
      'Posting as per customer schedule (Daily, weekly, monthly, etc.).',
      'Logo Creation & Social Media Integration included.',
      'Free Hosting on Vercel (1 Month) (yoursite.vercel.app) & SSL Certificate.',
    ],
    ctaText: 'Book Total Package B',
    isCombined: true,
    breakdown: {
      item1: {
        title: '1. STANDARD WEBSITE',
        price: '₹ 8,000',
        details: [
          '5 Pages Website (Home, About, Services, Blog, Contact)',
          'Modern & Professional Design (All Devices)',
          'Advanced Contact Form (with Email Notifications)',
          'Blog / News & Portfolio Section',
          'Logo Creation & Social Media Integration',
          'Free Hosting on Vercel (1 Month) + SSL Certificate',
          'Basic Support (3 Months)',
        ],
      },
      item2: {
        title: '2. DIGITAL MARKETING (1 Month)',
        price: '₹ 10,000 – ₹ 12,000',
        details: [
          'Google My Business Profile Setup',
          'Social Media Channels & Pages Creation',
          'SEO, GEO (Generative Engine Optimization) & AEO',
          'Running Google Ads & Meta Ads',
          'Posting on Instagram, YouTube, Facebook, LinkedIn',
          'Each Post (Image) for ₹ 100 | Video for ₹ 150 – ₹ 200',
          'Posting as per customer requirements',
        ],
      },
      total: {
        formula: 'Standard Website ₹ 8,000 + Digital Marketing (1 Month) ₹ 10,000 – ₹ 12,000',
        finalPrice: '₹ 18,000 – ₹ 20,000',
      },
    },
  },
];

export const AUTOMATION_PACKAGES: AutomationPackage[] = [
  {
    id: 'simple-automations',
    name: 'SIMPLE AUTOMATIONS',
    tagline: 'Perfect for Small Businesses & Beginners',
    price: '₹ 10,000 – ₹ 15,000',
    description: 'Basic yet powerful automations to save time and manage your business efficiently.',
    features: [
      'Telegram Chat Bot (FAQ, Product Info, Lead Collection)',
      'Leads to Meeting (Automated Booking with Calendar)',
      'Leads Management (Store & Organize Leads in Google Sheets/CRM)',
      'Leads Conversions (Automated Follow-ups & Nurturing)',
      'Auto Email Responses (Welcome, Confirmation, Follow-up)',
      'Form Submissions to Leads (Website / Social Media Forms)',
      'Custom Notifications (Instant alerts on new leads)',
      'Basic Data Automation (Save data to Sheets/CRM)',
    ],
    ctaText: 'Get Simple Automations',
    highlight: false,
  },
  {
    id: 'standard-automations',
    name: 'STANDARD AUTOMATIONS',
    tagline: 'Best for Growing Businesses',
    price: '₹ 15,000 – ₹ 20,000',
    badge: '⚡ Most Popular',
    description: 'Advanced automations to handle leads, communication and customer engagement efficiently.',
    features: [
      'WhatsApp Chat Bot (FAQ, Lead Collection, Customer Support)',
      'Leads Filtering (Auto-categorize & qualify leads)',
      'Leads Reminding (Automated reminders via WhatsApp/Email)',
      'Leads Reply (Auto replies to common queries)',
      'CRM Integration (Organize and track leads)',
      'Meeting Scheduling (Automated calendar booking)',
      'Follow-up Sequences (WhatsApp, Email, SMS)',
      'Payment Reminders (For pending payments)',
      'Customer Support Automation (24/7 automated responses)',
      'Custom Workflows (As per your business requirements)',
    ],
    ctaText: 'Get Standard Automations',
    highlight: true,
  },
  {
    id: 'premium-automations',
    name: 'PREMIUM AUTOMATIONS',
    tagline: 'Complete Business Growth Automation',
    price: '₹ 25,000 – ₹ 30,000',
    description: 'Full-scale automations to manage your content, leads, marketing and operations end-to-end.',
    features: [
      'YouTube Automation (Daily Posting) (Video upload, titles, descriptions, thumbnails)',
      'Instagram Automation (Daily Posting) (Reels, Posts, Captions, Hashtags)',
      'Facebook Automation (Daily Posting) (Posts, Reels, Captions, Scheduling)',
      'LinkedIn Automation (Daily Posting) (Posts, Articles, Company Updates)',
      'Content Creation with AI (Images, Videos, Captions using AI)',
      'Lead Generation Automation (From Website, Social Media, Ads, etc.)',
      'Leads Nurturing & Follow-ups (Multi-channel: WhatsApp, Email, SMS)',
      'Sales & Conversion Automation (Track, Remind, and Close Leads)',
      'Analytics & Reports (Weekly/Monthly Performance Reports)',
      'Custom Automations (As per your business needs)',
    ],
    ctaText: 'Get Premium Automations',
    highlight: false,
  },
];

export const TRUST_FEATURES = [
  {
    title: 'Custom Designs as per Your Brand',
    desc: 'Every graphic, layout, and visual identity is bespoke and tailored to your company persona.',
    icon: 'Sparkles',
  },
  {
    title: 'Mobile Responsive & Fast Loading',
    desc: 'Optimized for lightning speed, mobile devices, tablets, and desktop screen sizes.',
    icon: 'Smartphone',
  },
  {
    title: 'Secure & Reliable Hosting on Vercel',
    desc: 'Free 1 month deployment on Vercel with modern SSL encryption and zero server friction.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Dedicated Support even After Delivery',
    desc: 'Ongoing maintenance, priority updates, and reliable support to keep your systems flying high.',
    icon: 'Headphones',
  },
];

export const WHY_CHOOSE_MAR = [
  { title: 'Custom Solutions as per Your Business' },
  { title: 'Save Time & Reduce Manual Work' },
  { title: 'Increase Leads & Sales' },
  { title: 'Cost-Effective Automation' },
  { title: 'Reliable Support Even After Setup' },
];

export const INDUSTRIES_SERVED = [
  'Real Estate',
  'Education',
  'Healthcare',
  'E-commerce',
  'Retail & Stores',
  'Professional Services',
  'NGOs & Events',
  'And More...',
];

export const WHATSAPP_PHONE_RAW = '917842906002';
export const DISPLAY_PHONE = '+91 78429 06002';
export const DISPLAY_EMAIL = 'marenterprise07@gmail.com';
export const DISPLAY_PORTFOLIO = 'mar-portfolio-one.vercel.app';

export function getWhatsAppUrl(serviceOrPkg: string, price?: string): string {
  let message = '';
  if (price) {
    message = `Hello MAR Enterprise, I am interested in the quotation for "${serviceOrPkg}" (${price}) as shown on your website. Please provide further details.`;
  } else {
    message = `Hello MAR Enterprise, I would like to get a quotation and consultation for "${serviceOrPkg}".`;
  }
  return `https://wa.me/${WHATSAPP_PHONE_RAW}?text=${encodeURIComponent(message)}`;
}
