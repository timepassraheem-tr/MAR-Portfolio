import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Globe,
  Megaphone,
  Bot,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Headphones,
  Plus,
  ExternalLink,
  Crown,
  Zap,
  Building2,
  Image as ImageIcon,
  Video,
} from 'lucide-react';
import {
  WEBSITE_PACKAGES,
  MARKETING_PACKAGES,
  AUTOMATION_PACKAGES,
  TRUST_FEATURES,
  WHY_CHOOSE_MAR,
  INDUSTRIES_SERVED,
  getWhatsAppUrl,
  DISPLAY_PHONE,
  DISPLAY_EMAIL,
  DISPLAY_PORTFOLIO,
  WebsitePackage,
  MarketingPackage,
  AutomationPackage,
} from '../data/workWithMar';
import { SpotlightCard } from './SpotlightCard';
import { SectionReveal } from './SectionReveal';
import { NavRoute } from './Navbar';
import { BrandLogo } from './BrandLogo';

interface WorkWithMarSectionProps {
  onRouteChange: (route: NavRoute) => void;
  isHomePage?: boolean;
}

export const WorkWithMarSection: React.FC<WorkWithMarSectionProps> = ({
  onRouteChange,
  isHomePage = false,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'marketing' | 'automation'>('all');

  const handleWhatsApp = (serviceTitle: string, price?: string) => {
    const url = getWhatsAppUrl(serviceTitle, price);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="work-with-mar-section" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* SECTION MAIN HEADER - EXACT FROM QUOTATION PICTURE */}
      <SectionReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/35 text-xs font-semibold text-purple-300 uppercase tracking-widest shadow-[0_0_15px_rgba(168,85,247,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Official Quotations & Pricing</span>
            </div>

            <div className="flex items-center gap-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
                QUOTATION
              </h2>
              <span className="hidden sm:inline-block px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-purple-900/40 border border-purple-400/40 text-purple-200">
                2026 Verified
              </span>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
              Professional Digital Solutions for Your Business — Websites, Branding, Marketing & AI Automations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/quotation-web-marketing.jpg"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-purple-200 bg-[#14102d] hover:bg-purple-950/60 border border-purple-500/30 hover:border-purple-400/60 transition-all shadow-[0_0_15px_rgba(0,0,0,0.4)]"
            >
              <span>View Quotation Poster 1</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="/quotation-ai-automations.jpg"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-purple-200 bg-[#14102d] hover:bg-purple-950/60 border border-purple-500/30 hover:border-purple-400/60 transition-all shadow-[0_0_15px_rgba(0,0,0,0.4)]"
            >
              <span>View Poster 2</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </SectionReveal>

      {/* CATEGORY FILTER PILLS */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
        {[
          { id: 'all', label: 'All Quotations', count: '3 Categories' },
          { id: 'web', label: '1. Website Designing & Development', count: '3 Tiers' },
          { id: 'marketing', label: '2. Digital Marketing', count: 'Packages A & B' },
          { id: 'automation', label: '3. AI Automations', count: '3 Tiers' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-[0_0_18px_rgba(168,85,247,0.45)] border border-purple-400/50'
                : 'bg-[#100d24] text-slate-300 hover:text-white hover:bg-purple-950/40 border border-purple-500/20'
            }`}
          >
            <span>{tab.label}</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-purple-900/40 text-purple-300'}`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      <div className="space-y-20">
        {/* 1. WEBSITE DESIGNING & DEVELOPMENT */}
        {(activeTab === 'all' || activeTab === 'web') && (
          <div id="website-designing" className="scroll-mt-28">
            <SectionReveal>
              <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/60 via-[#140f2e] to-purple-950/40 border border-purple-500/30 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      1. WEBSITE DESIGNING & DEVELOPMENT
                    </h3>
                    <p className="text-xs sm:text-sm text-purple-200/90 mt-0.5">
                      Modern, responsive and high-performing websites for businesses, startups and professionals.
                    </p>
                  </div>
                </div>

                <div className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-purple-900/60 border border-purple-400/30 text-purple-200 shrink-0">
                  Fixed Pricing • 1 Month Free Vercel Hosting
                </div>
              </div>
            </SectionReveal>

            {/* 3 Website Designing Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {WEBSITE_PACKAGES.map((pkg: WebsitePackage, idx: number) => {
                const isRecommended = pkg.highlight;

                return (
                  <SectionReveal key={pkg.id} delay={idx * 0.1}>
                    <SpotlightCard
                      className={`h-full flex flex-col justify-between p-6 sm:p-7 transition-all duration-300 relative ${
                        isRecommended
                          ? 'border-purple-400 shadow-[0_0_35px_rgba(168,85,247,0.25)] bg-gradient-to-b from-[#1c123d] via-[#110d29] to-[#0a081a]'
                          : 'border-purple-500/25 bg-[#0d0a20]/90'
                      }`}
                    >
                      <div className="flex flex-col h-full">
                        {/* Top Recommended Badge cleanly positioned above title */}
                        {pkg.badge && (
                          <div className="flex justify-center mb-3">
                            <span className="px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 text-white shadow-[0_0_16px_rgba(168,85,247,0.6)] border border-white/30 flex items-center gap-1.5">
                              <Crown className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                              <span>{pkg.badge}</span>
                            </span>
                          </div>
                        )}
                        {/* Header */}
                        <div className="mb-2">
                          <h4 className="text-2xl font-extrabold text-white font-display tracking-tight">
                            {pkg.name}
                          </h4>
                          <p className="text-[11px] font-semibold text-purple-300 uppercase tracking-wider mt-0.5">
                            {pkg.tagline}
                          </p>
                        </div>

                        {/* Price Block - Exact from picture */}
                        <div className="my-4 py-3.5 px-4 rounded-xl bg-gradient-to-r from-purple-900/60 via-purple-950/70 to-purple-900/60 border border-purple-400/40 text-center shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                          <span className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300">
                            {pkg.price}
                          </span>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed mb-5 min-h-[36px]">
                          {pkg.description}
                        </p>

                        {/* Feature List */}
                        <div className="flex-grow mb-6">
                          <p className="text-[11px] uppercase font-bold text-purple-300 tracking-wider mb-3">
                            Included in this quotation:
                          </p>
                          <ul className="space-y-2.5">
                            {pkg.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                <span className="leading-snug">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA Button Block */}
                        <div className="pt-4 border-t border-purple-500/20 space-y-2">
                          <button
                            onClick={() => handleWhatsApp(`Website Designing - ${pkg.name}`, pkg.price)}
                            className={`w-full py-3 px-5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-md ${
                              isRecommended
                                ? 'bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-500 hover:to-violet-500 text-white shadow-[0_0_22px_rgba(168,85,247,0.45)] border border-purple-300/50'
                                : 'bg-purple-900/60 hover:bg-purple-800/80 text-white border border-purple-400/30'
                            }`}
                          >
                            <MessageCircle className="w-4 h-4 text-purple-200" />
                            <span>Select {pkg.name} ({pkg.price})</span>
                          </button>
                        </div>
                      </div>
                    </SpotlightCard>
                  </SectionReveal>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. DIGITAL MARKETING */}
        {(activeTab === 'all' || activeTab === 'marketing') && (
          <div id="digital-marketing" className="scroll-mt-28">
            <SectionReveal>
              <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/60 via-[#140f2e] to-purple-950/40 border border-purple-500/30 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <Megaphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      2. DIGITAL MARKETING
                    </h3>
                    <p className="text-xs sm:text-sm text-purple-200/90 mt-0.5">
                      Grow your brand, reach more customers and increase your business with result-driven digital marketing.
                    </p>
                  </div>
                </div>

                <div className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-fuchsia-950/60 border border-fuchsia-400/30 text-fuchsia-200 shrink-0">
                  Monthly Package & Combined Website Solution
                </div>
              </div>
            </SectionReveal>

            {/* 2 Digital Marketing Packages: A and B */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Option A: Digital Marketing (Monthly Package) - 5 cols */}
              <div className="lg:col-span-5">
                <SectionReveal delay={0.1}>
                  <SpotlightCard className="h-full flex flex-col justify-between p-6 sm:p-7 border-purple-500/30 bg-[#0d0a20]/95">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-lg bg-purple-900/60 border border-purple-400/40 text-purple-200 flex items-center justify-center font-display font-extrabold text-base">
                          A
                        </span>
                        <div>
                          <h4 className="text-xl font-bold text-white font-display">
                            DIGITAL MARKETING
                          </h4>
                          <span className="text-xs text-purple-300 font-semibold">
                            (Monthly Package)
                          </span>
                        </div>
                      </div>

                      <div className="my-3 py-3 px-4 rounded-xl bg-purple-950/60 border border-purple-500/30 text-center">
                        <span className="text-2xl sm:text-3xl font-extrabold text-white font-display text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300">
                          ₹ 10,000 – ₹ 12,000
                        </span>
                        <span className="block text-[11px] text-purple-300 font-medium mt-0.5">
                          per month
                        </span>
                      </div>

                      <div className="flex-grow mb-6 space-y-3">
                        <p className="text-[11px] uppercase font-bold text-purple-300 tracking-wider">
                          Scope of Work Included:
                        </p>
                        <ul className="space-y-2 text-xs text-slate-300">
                          {MARKETING_PACKAGES[0].features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Post rate highlight cards */}
                        <div className="pt-2 grid grid-cols-2 gap-2">
                          <div className="p-2.5 rounded-lg bg-[#140f2b] border border-purple-500/20 text-center">
                            <ImageIcon className="w-4 h-4 text-purple-300 mx-auto mb-1" />
                            <span className="text-[11px] text-slate-300 block">Each Post (Image)</span>
                            <span className="text-xs font-bold text-white">₹ 100</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-[#140f2b] border border-purple-500/20 text-center">
                            <Video className="w-4 h-4 text-purple-300 mx-auto mb-1" />
                            <span className="text-[11px] text-slate-300 block">Each Post (Video)</span>
                            <span className="text-xs font-bold text-white">₹ 150 – ₹ 200</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-purple-500/20">
                        <button
                          onClick={() => handleWhatsApp('Package A: Digital Marketing (Monthly Package)', '₹ 10,000 – ₹ 12,000 / month')}
                          className="w-full py-3 px-5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 bg-purple-900/60 hover:bg-purple-800/80 text-white border border-purple-400/30 transition-all shadow-md"
                        >
                          <MessageCircle className="w-4 h-4 text-purple-200" />
                          <span>Select Package A</span>
                        </button>
                      </div>
                    </div>
                  </SpotlightCard>
                </SectionReveal>
              </div>

              {/* Option B: Combined Digital Marketing With Website - 7 cols */}
              <div className="lg:col-span-7">
                <SectionReveal delay={0.2}>
                  <SpotlightCard className="h-full flex flex-col justify-between p-6 sm:p-7 border-purple-400/50 shadow-[0_0_35px_rgba(168,85,247,0.2)] bg-gradient-to-b from-[#181038] via-[#100d28] to-[#0a081a]">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-lg bg-fuchsia-900/60 border border-fuchsia-400/40 text-fuchsia-200 flex items-center justify-center font-display font-extrabold text-base">
                          B
                        </span>
                        <div>
                          <h4 className="text-xl sm:text-2xl font-bold text-white font-display">
                            DIGITAL MARKETING WITH WEBSITE
                          </h4>
                          <p className="text-xs text-purple-300">
                            Complete solution to build your online presence and grow your business.
                          </p>
                        </div>
                      </div>

                      {/* 2-Part Breakdown Columns */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                        {/* Part 1: Standard Website */}
                        <div className="p-4 rounded-xl bg-purple-950/50 border border-purple-500/30 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-bold text-purple-200 uppercase">
                                1. STANDARD WEBSITE
                              </span>
                              <span className="text-sm font-extrabold text-white">
                                ₹ 8,000
                              </span>
                            </div>
                            <p className="text-[11px] text-purple-300 font-medium mb-2">
                              Includes all features from Standard Website:
                            </p>
                            <ul className="space-y-1.5 text-[11px] text-slate-300">
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                                <span>5 Pages Website (Home, About, Services, Blog, Contact)</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                                <span>Modern & Professional Design</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                                <span>Mobile Responsive (All Devices)</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                                <span>Advanced Contact Form (Email Notifications)</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                                <span>Logo Creation & Social Media Integration</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                                <span>Free Hosting on Vercel (1 Month) + SSL</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                                <span>Basic Support (3 Months)</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* Part 2: Digital Marketing */}
                        <div className="p-4 rounded-xl bg-purple-950/50 border border-purple-500/30 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-bold text-fuchsia-200 uppercase">
                                2. DIGITAL MARKETING
                              </span>
                              <span className="text-xs font-extrabold text-white">
                                ₹ 10,000 – ₹ 12,000
                              </span>
                            </div>
                            <p className="text-[11px] text-fuchsia-300 font-medium mb-2">
                              Includes all Digital Marketing services (1 Month):
                            </p>
                            <ul className="space-y-1.5 text-[11px] text-slate-300">
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400 shrink-0 mt-0.5" />
                                <span>Google My Business Profile Setup</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400 shrink-0 mt-0.5" />
                                <span>Social Media Channels & Pages Creation</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400 shrink-0 mt-0.5" />
                                <span>SEO, GEO & AEO Strategy</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400 shrink-0 mt-0.5" />
                                <span>Running Ads: Google Ads, Meta Ads</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400 shrink-0 mt-0.5" />
                                <span>Posting on Instagram, YouTube, FB, LinkedIn</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400 shrink-0 mt-0.5" />
                                <span>Each Post (Image) ₹100 | Video ₹150–₹200</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400 shrink-0 mt-0.5" />
                                <span>Posting as per customer requirements</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Total Calculation Banner - Exact from picture */}
                      <div className="p-4 rounded-xl bg-gradient-to-r from-purple-900/80 via-violet-900/80 to-fuchsia-900/80 border border-purple-400/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-[0_0_20px_rgba(168,85,247,0.3)] my-2">
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-purple-200 block">
                            TOTAL PACKAGE (Website + Digital Marketing)
                          </span>
                          <span className="text-xs text-slate-200">
                            Standard Website ₹ 8,000 + Digital Marketing (1 Month) ₹ 10,000 – ₹ 12,000
                          </span>
                        </div>
                        <div className="sm:text-right">
                          <span className="text-[10px] uppercase font-bold text-purple-200 block">Total Investment</span>
                          <span className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                            ₹ 18,000 – ₹ 20,000
                          </span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-purple-500/20 mt-auto">
                        <button
                          onClick={() => handleWhatsApp('Package B: Digital Marketing With Website', 'Total: ₹ 18,000 – ₹ 20,000')}
                          className="w-full py-3.5 px-5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-500 hover:to-violet-500 text-white shadow-[0_0_22px_rgba(168,85,247,0.45)] border border-purple-300/50 transition-all"
                        >
                          <MessageCircle className="w-4 h-4 text-purple-200" />
                          <span>Select Total Package B (₹ 18,000 – ₹ 20,000)</span>
                        </button>
                      </div>
                    </div>
                  </SpotlightCard>
                </SectionReveal>
              </div>
            </div>
          </div>
        )}

        {/* 3. AI AUTOMATIONS */}
        {(activeTab === 'all' || activeTab === 'automation') && (
          <div id="ai-automations" className="scroll-mt-28">
            <SectionReveal>
              <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/60 via-[#140f2e] to-purple-950/40 border border-purple-500/30 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      3. AI AUTOMATIONS
                    </h3>
                    <p className="text-xs sm:text-sm text-purple-200/90 mt-0.5">
                      Save Time | Get More Leads | Automate Your Business — Custom AI Automations to Simplify, Scale and Grow.
                    </p>
                  </div>
                </div>

                <div className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-purple-900/60 border border-purple-400/30 text-purple-200 shrink-0">
                  Telegram • WhatsApp • CRM • Social Media
                </div>
              </div>
            </SectionReveal>

            {/* 3 AI Automations Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {AUTOMATION_PACKAGES.map((pkg: AutomationPackage, idx: number) => {
                const isPopular = pkg.highlight;

                return (
                  <SectionReveal key={pkg.id} delay={idx * 0.1}>
                    <SpotlightCard
                      className={`h-full flex flex-col justify-between p-6 sm:p-7 transition-all duration-300 relative ${
                        isPopular
                          ? 'border-purple-400 shadow-[0_0_35px_rgba(168,85,247,0.25)] bg-gradient-to-b from-[#1b123b] via-[#110d29] to-[#0a081a]'
                          : 'border-purple-500/25 bg-[#0d0a20]/90'
                      }`}
                    >
                      <div className="flex flex-col h-full">
                        {/* Popular Badge cleanly in flow */}
                        {pkg.badge && (
                          <div className="flex justify-center mb-3">
                            <span className="px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-[0_0_16px_rgba(168,85,247,0.6)] border border-white/30 flex items-center gap-1.5">
                              <Zap className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                              <span>{pkg.badge}</span>
                            </span>
                          </div>
                        )}
                        <div className="mb-2">
                          <h4 className="text-xl font-extrabold text-white font-display tracking-tight">
                            {pkg.name}
                          </h4>
                          <p className="text-[11px] font-semibold text-purple-300 uppercase tracking-wider mt-0.5">
                            {pkg.tagline}
                          </p>
                        </div>

                        {/* Price Block */}
                        <div className="my-4 py-3.5 px-4 rounded-xl bg-gradient-to-r from-purple-900/60 via-purple-950/70 to-purple-900/60 border border-purple-400/40 text-center shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                          <span className="text-2xl sm:text-3xl font-extrabold text-white font-display text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300">
                            {pkg.price}
                          </span>
                          <span className="block text-[11px] text-purple-300 font-medium mt-0.5">
                            per month
                          </span>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed mb-5 min-h-[36px]">
                          {pkg.description}
                        </p>

                        {/* Feature List */}
                        <div className="flex-grow mb-6">
                          <p className="text-[11px] uppercase font-bold text-purple-300 tracking-wider mb-3">
                            Included Automations:
                          </p>
                          <ul className="space-y-2.5">
                            {pkg.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                <span className="leading-snug">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA Button Block */}
                        <div className="pt-4 border-t border-purple-500/20 space-y-2">
                          <button
                            onClick={() => handleWhatsApp(`AI Automations - ${pkg.name}`, `${pkg.price} / month`)}
                            className={`w-full py-3 px-5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-md ${
                              isPopular
                                ? 'bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-500 hover:to-violet-500 text-white shadow-[0_0_22px_rgba(168,85,247,0.45)] border border-purple-300/50'
                                : 'bg-purple-900/60 hover:bg-purple-800/80 text-white border border-purple-400/30'
                            }`}
                          >
                            <MessageCircle className="w-4 h-4 text-purple-200" />
                            <span>Select {pkg.name}</span>
                          </button>
                        </div>
                      </div>
                    </SpotlightCard>
                  </SectionReveal>
                );
              })}
            </div>
          </div>
        )}

        {/* 4. VALUE STRIP & TRUST REASONS */}
        <SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {TRUST_FEATURES.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0f0b24] border border-purple-500/20 hover:border-purple-400/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-purple-900/40 border border-purple-400/30 flex items-center justify-center text-purple-300 mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h5 className="text-sm font-bold text-white font-display mb-1">
                  {item.title}
                </h5>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* 5. WHY CHOOSE MAR ENTERPRISE & INDUSTRIES SERVED */}
        <SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
            {/* Why Choose MAR Enterprise */}
            <div className="lg:col-span-6 p-7 rounded-3xl bg-gradient-to-br from-[#140e2e] via-[#0e0a24] to-[#090618] border border-purple-500/30 space-y-4">
              <h4 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span>WHY CHOOSE MAR ENTERPRISE?</span>
              </h4>
              <ul className="space-y-3">
                {WHY_CHOOSE_MAR.map((reason, idx) => (
                  <li key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-purple-950/40 border border-purple-500/20">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-200">{reason.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries We Serve */}
            <div className="lg:col-span-6 p-7 rounded-3xl bg-gradient-to-br from-[#140e2e] via-[#0e0a24] to-[#090618] border border-purple-500/30 space-y-4">
              <h4 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <Building2 className="w-5 h-5 text-purple-400" />
                <span>INDUSTRIES WE SERVE</span>
              </h4>
              <p className="text-xs text-slate-300">
                Tailored solutions developed for high-performing organizations across diverse sectors:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                {INDUSTRIES_SERVED.map((ind, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-center hover:border-purple-400/40 transition-colors"
                  >
                    <span className="text-xs font-semibold text-purple-200">{ind}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* 6. BOTTOM CONTACT BANNER FROM POSTER */}
        <SectionReveal>
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#170e36] via-[#100a26] to-[#170e36] border border-purple-500/40 shadow-[0_0_35px_rgba(168,85,247,0.25)] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <BrandLogo size="sm" showText={false} />
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                  YOUR DIGITAL GROWTH PARTNER
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-extrabold text-white font-display">
                Ready to Grow or Automate Your Business?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Get a Free Consultation: <strong className="text-white">{DISPLAY_PHONE}</strong> | Email: <strong className="text-white">{DISPLAY_EMAIL}</strong>
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                onClick={() => handleWhatsApp('Free Consultation & Quotation')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-500 hover:to-violet-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-purple-300/40 transition-all text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Let's Grow Your Business →</span>
              </button>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
