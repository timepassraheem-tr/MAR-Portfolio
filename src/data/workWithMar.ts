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
  clientNote?: string;
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
  extraPricing?: {
    imagePost: string;
    videoPost: string;
    note: string;
  };
  breakdown?: {
    item1: { title: string; subtitle: string; price?: string; details: string[] };
    item2: { title: string; subtitle: string; price?: string; details: string[] };
    total: { formula: string; finalPrice: string; period: string };
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
    tagline: 'Ideal for Individuals & Small Businesses',
    websiteType: '1 Page Website (Home Page)',
    price: '₹4,000',
    description: 'Modern, responsive and high-performing 1-page website to establish your business online.',
    features: [
      '1 Page Website (Home Page)',
      'Clean & Minimal Design',
      'Mobile Responsive',
      'Basic Contact Form (Email Submissions)',
      'Logo Creation',
      'Social Media Links',
      'Basic Support (1 Month)',
    ],
    clientNote: 'Domain & Hosting need to be purchased by the client.',
    ctaText: 'Get Simple Website',
    highlight: false,
  },
  {
    id: 'standard',
    name: 'STANDARD',
    tagline: 'Best for Growing Businesses',
    websiteType: '5 Pages Website',
    price: '₹8,000',
    badge: '👑 STANDARD',
    description: 'A complete multi-page commercial website with contact automations and workflow integration.',
    features: [
      '5 Pages Website (Home, About, Services, Blog, Contact)',
      'Modern & Professional Design',
      'Mobile Responsive (All Devices)',
      'Advanced Contact Form (with Email Notifications)',
      'Logo Creation',
      'Social Media Integration',
      'Image Gallery / Portfolio Section',
      'Blog / News Section',
      'Payment Reminders (For pending payments)',
      'Customer Support Automation (24/7 automated responses)',
      'Custom Workflows (As per your business requirements)',
    ],
    clientNote: 'Domain & Hosting need to be purchased by the client.',
    ctaText: 'Get Standard Website',
    highlight: true,
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    tagline: 'Best for Brands & High-Growth Businesses',
    websiteType: '10 or 10+ Pages Website',
    price: '₹10,000+',
    badge: '👑 PREMIUM',
    description: 'High-end fully custom corporate architecture with advanced CRM integrations and micro-interactions.',
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
      'Security Setup (SSL, Firewall, Backup)',
      'Training to Manage the Website',
      'Priority Support (6 Months)',
    ],
    clientNote: 'Domain & Hosting need to be purchased by the client.',
    ctaText: 'Get Premium Website',
    highlight: false,
  },
];

export const MARKETING_PACKAGES: MarketingPackage[] = [
  {
    id: 'digital-marketing-only',
    optionLabel: 'A',
    title: 'DIGITAL MARKETING',
    tagline: '(ONLY PACKAGE)',
    price: '₹10,000 – ₹12,000',
    pricePeriod: '/ MONTH',
    description: 'Grow your brand, reach more customers and increase your business with result-driven digital marketing.',
    features: [
      'Setting up the Google My Business Profile.',
      'Logo Creation.',
      'Creating Social media channels and pages.',
      'SEO (Search Engine Optimization)',
      'GEO (Generative Engine Optimization)',
      'AEO (Answer Engine Optimization)',
      'Running Ads: Google Ads, Meta Ads, etc.',
      'Posting on Social media (Instagram, YouTube, Facebook, LinkedIn).',
    ],
    extraPricing: {
      imagePost: '₹ 100',
      videoPost: '₹ 150 – ₹ 200',
      note: 'Posting as per customer requirements (Daily, weekly, monthly, etc).',
    },
    ctaText: 'Select Package A',
    isCombined: false,
  },
  {
    id: 'digital-marketing-with-standard-website',
    optionLabel: 'B',
    title: 'DIGITAL MARKETING WITH STANDARD WEBSITE',
    tagline: 'Complete solution to build your online presence and grow your business.',
    price: '₹18,000 – ₹20,000',
    pricePeriod: '(for 1 month)',
    description: 'Complete digital ecosystem combining a 5-page standard website and full 1-month marketing campaign.',
    features: [
      '1. STANDARD WEBSITE: 5 Pages, Responsive Design, Advanced Form, Logo Creation, Social Integration, SSL & 3 Months Support.',
      '2. DIGITAL MARKETING (1 Month): Google My Business, Social Channels, SEO, GEO, AEO, Google & Meta Ads, Social Posting.',
      'Each Post (Image) for ₹ 100 | Each Post (Video) for ₹ 150 – ₹ 200',
      'Posting as per customer requirements (Daily, weekly, monthly, etc).',
    ],
    ctaText: 'Select Total Package B',
    isCombined: true,
    breakdown: {
      item1: {
        title: '1. STANDARD WEBSITE',
        subtitle: 'Includes all features from Standard Website:',
        details: [
          '5 Pages Website (Home, About, Services, Blog, Contact)',
          'Modern & Professional Design',
          'Mobile Responsive (All Devices)',
          'Advanced Contact Form (with Email Notifications)',
          'Logo Creation',
          'Social Media Integration',
          'Security Setup (SSL, Certificate)',
          'Basic Support (3 Months)',
        ],
      },
      item2: {
        title: '2. DIGITAL MARKETING (1 Month)',
        subtitle: 'Includes all Digital Marketing services:',
        details: [
          'Google My Business Profile',
          'Logo Creation',
          'Social Media Channels & Pages',
          'SEO, GEO, AEO',
          'Running Ads (Google Ads, Meta Ads)',
          'Social Media Posting (Instagram, YouTube, Facebook, LinkedIn)',
          'Each Post (Image) for ₹ 100',
          'Each Post (Video) for ₹ 150 – ₹ 200',
          'Posting as per customer requirements (Daily, weekly, monthly, etc).',
        ],
      },
      total: {
        formula: 'Standard Website + 1 Month Digital Marketing Engine',
        finalPrice: '₹18,000 – ₹20,000',
        period: '(for 1 month)',
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
    description: 'Basic yet powerful automations to save time and manage your Business efficiently.',
    features: [
      'Telegram Chat Bot (FAQ, Product Info, Lead Collection)',
      'Leads to Meeting (Automated Booking with Calendar)',
      'Leads Management (Save & Organize leads in Google Sheets/CRM)',
      'Leads\' Conversions (Automated Follow-ups & Nurturing)',
      'Auto Email Responses (Welcome, Confirmation, Follow-ups)',
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
    badge: '👑 STANDARD AUTOMATIONS',
    description: 'Advanced automations to handle leads, communication and customer engagement efficiently.',
    features: [
      'WhatsApp Chat Bot (FAQ, Lead Capture, Customer Support)',
      'Leads Filtering (Auto-categorize & qualify leads)',
      'Leads Reminding (Automated reminders via WhatsApp/Email)',
      'Leads Reply (Auto replies to common questions)',
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
    badge: '👑 PREMIUM AUTOMATIONS',
    description: 'Full-scale automations to manage your content, leads, marketing and operations end-to-end.',
    features: [
      'YouTube Automation (Daily Posting) (Video upload, titles, descriptions, thumbnails)',
      'Instagram Automation (Daily Posting) (Reels, Posts, Stories, Hashtags)',
      'Facebook Automation (Daily Posting) (Posts, Reels, Captions, Scheduling)',
      'LinkedIn Automation (Daily Posting) (Posts, Articles, Company Updates)',
      'Content Creation with AI (Parallax, 3D Elements, Micro Interactions)',
      'Logo Creation (Branding & Visual Identity)',
      'Lead Generation & Email Integration (Multi-channel: WhatsApp, Email, SMS)',
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
    desc: 'Bespoke layouts, typography, and visual assets crafted uniquely for your company.',
    icon: 'Sparkles',
  },
  {
    title: 'Mobile Responsive & Fast Loading',
    desc: 'Optimized for lightning speed, mobile phones, tablets, and modern desktop browsers.',
    icon: 'Smartphone',
  },
  {
    title: 'Secure & Reliable Hosting on Vercel',
    desc: 'Modern cloud infrastructure with SSL encryption, fast CDN nodes, and 99.9% uptime.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Dedicated Support even After Delivery',
    desc: 'Continuous post-delivery technical support, guidance, and ongoing maintenance.',
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

export const WEBSITE_DISCLAIMER =
  'WEBSITE PACKAGE PRICES EXCLUDE DOMAIN & HOSTING. DOMAIN AND HOSTING MUST BE PURCHASED SEPARATELY BY THE CLIENT.';

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
