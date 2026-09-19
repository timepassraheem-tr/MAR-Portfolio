export interface WebsitePackage {
  id: string;
  name: string;
  websiteType: string;
  price: string;
  priceRaw: number;
  description: string;
  features: string[];
  ctaText: string;
  highlight?: boolean;
  badge?: string;
}

export interface MarketingService {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  price?: string;
  priceRaw?: number;
  priceNote?: string;
  ctaText: string;
  isCombinedPackage?: boolean;
  badge?: string;
}

export const WEBSITE_PACKAGES: WebsitePackage[] = [
  {
    id: 'general',
    name: 'GENERAL',
    websiteType: 'Simple Website',
    price: '₹3,000',
    priceRaw: 3000,
    description: 'Clean, fast single-page static website to establish your business online presence.',
    features: [
      'Simple website',
      'Single-page website',
      '2–3 images limit',
      'Static website',
    ],
    ctaText: 'Get Started',
    highlight: false,
  },
  {
    id: 'standard',
    name: 'STANDARD',
    websiteType: 'Professional Website',
    price: '₹6,000',
    priceRaw: 6000,
    description: 'Multi-page professional website packed with smooth transitions, WhatsApp chat, and hosting.',
    features: [
      'Everything included in General',
      'Professional website',
      'Multi-page website',
      'Includes pages such as About, Contact, Services, etc.',
      '10–15 images limit',
      'Responsive on all devices',
      'Animation effects',
      'Transition effects',
      'WhatsApp integration',
      'Domain and Hosting',
      'Static website',
      'Professional layout and design',
    ],
    ctaText: 'Get Started',
    highlight: false,
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    websiteType: 'Premium Website',
    price: '₹10,000',
    priceRaw: 10000,
    badge: 'Most Comprehensive',
    description: 'Bespoke dynamic web ecosystem with complete social media integrations, SEO, and advanced functionality.',
    features: [
      'Everything included in Standard',
      'Premium website',
      'Multi-page website as per client\'s requirements',
      'Images limit as per client\'s requirements',
      'Fully responsive on all devices',
      'Premium animations',
      'Premium transition effects',
      'WhatsApp integration',
      'Instagram integration',
      'YouTube integration',
      'All major social media integrations',
      'Domain and Hosting',
      'Dynamic website',
      'SEO',
      'Premium design and development',
      'Advanced functionality as required',
    ],
    ctaText: 'Get Started',
    highlight: true,
  },
];

export const MARKETING_SERVICES: MarketingService[] = [
  {
    id: 'social-media',
    title: 'Social Media Posting & Handling',
    category: 'Social Media Management',
    description: 'Build your brand authority, maintain active feeds, and foster meaningful audience engagement.',
    features: [
      'Social media account handling',
      'Social media posting',
      'Content planning',
      'Professional post designs',
      'Consistent posting',
      'Social media page management',
      'Audience engagement',
      'Brand-focused content',
    ],
    ctaText: 'Contact Us',
    isCombinedPackage: false,
  },
  {
    id: 'google-meta-ads',
    title: 'Google & Meta Ads',
    category: 'Paid Advertising Campaigns',
    description: 'Targeted high-intent search and social campaigns engineered to capture qualified leads and revenue.',
    features: [
      'Google Ads',
      'Meta Ads',
      'Facebook Ads',
      'Instagram Ads',
      'Ad campaign setup',
      'Audience targeting',
      'Campaign management',
      'Performance monitoring',
      'Ad optimization',
    ],
    ctaText: 'Contact Us',
    isCombinedPackage: false,
  },
  {
    id: 'complete-growth',
    title: 'Website + Social Media + Google & Meta Ads',
    category: 'Complete Combined Growth Package',
    badge: 'Complete Digital Growth',
    description: 'Our all-in-one digital growth solution combining custom website development, daily social media handling, and full Google & Meta ad campaigns.',
    price: '₹20,000',
    priceRaw: 20000,
    priceNote: 'All-inclusive combined package pricing',
    features: [
      'Website development',
      'Social media posting and handling',
      'Google Ads',
      'Meta Ads',
    ],
    ctaText: 'Get Started',
    isCombinedPackage: true,
  },
];

export const WHATSAPP_PHONE_RAW = '919182835781';

export function getWhatsAppUrl(packageName: string, price?: string): string {
  let message = '';
  if (price) {
    message = `Hello MD Abdul Raheem, I want to get started with the ${packageName} (${price}) package with M.A.R Enterprise.`;
  } else {
    message = `Hello MD Abdul Raheem, I would like to inquire about the ${packageName} service with M.A.R Enterprise.`;
  }
  return `https://wa.me/${WHATSAPP_PHONE_RAW}?text=${encodeURIComponent(message)}`;
}
