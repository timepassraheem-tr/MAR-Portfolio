import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  Globe,
  Megaphone,
  CheckCircle2,
  Phone,
  Mail,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { NavRoute } from '../components/Navbar';
import { SectionReveal } from '../components/SectionReveal';
import { SpotlightCard } from '../components/SpotlightCard';
import {
  WEBSITE_PACKAGES,
  MARKETING_SERVICES,
  getWhatsAppUrl,
  WebsitePackage,
  MarketingService,
} from '../data/workWithMar';
import { PERSONAL_INFO } from '../data/portfolio';

interface WorkWithMarProps {
  onRouteChange: (route: NavRoute) => void;
}

export const WorkWithMar: React.FC<WorkWithMarProps> = ({ onRouteChange }) => {
  const scrollToServices = () => {
    const el = document.getElementById('work-pricing-details');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAction = (pkgTitle: string, price?: string) => {
    const url = getWhatsAppUrl(pkgTitle, price);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen pt-28 pb-20 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 text-center">
        {/* Subtle Ambient Radial Backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16102e]/90 border border-purple-500/35 text-xs font-semibold text-purple-200 uppercase tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.25)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Official Service Offerings</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white font-display tracking-tight leading-[1.1]"
          >
            Work with{' '}
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent">
              M.A.R
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Websites, digital marketing, and digital growth solutions designed for your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={scrollToServices}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-500 hover:to-violet-500 shadow-[0_0_25px_rgba(168,85,247,0.4)] border border-purple-400/30 transition-all active:scale-95 text-base"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onRouteChange('/contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-purple-200 bg-[#14102d] hover:bg-purple-950/60 border border-purple-500/30 hover:border-purple-400/60 transition-all text-base"
            >
              <Mail className="w-4 h-4 text-purple-400" />
              <span>Contact Us</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES & PRICING CONTAINER */}
      <div id="work-pricing-details" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-24">
        
        {/* SECTION 1 — WEBSITE DESIGNING */}
        <section id="website-designing-full" className="scroll-mt-28">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-purple-900/30 gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-purple-900/50 border border-purple-500/30 flex items-center justify-center text-purple-300">
                    <Globe className="w-4 h-4" />
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                    Website Designing
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                  M.A.R provides website solutions ranging from simple single-page websites to premium dynamic websites. Every site is carefully engineered for responsiveness, high performance, and distinctive brand aesthetics.
                </p>
              </div>

              <div className="text-xs text-purple-300 font-mono bg-purple-950/40 px-3 py-1.5 rounded-lg border border-purple-500/20 w-fit">
                3 Structured Tiers • No Hidden Costs
              </div>
            </div>
          </SectionReveal>

          {/* 3 Website Designing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {WEBSITE_PACKAGES.map((pkg: WebsitePackage, idx: number) => {
              const isPremium = pkg.highlight;

              return (
                <SectionReveal key={pkg.id} delay={idx * 0.1}>
                  <SpotlightCard
                    className={`h-full flex flex-col justify-between p-6 sm:p-8 transition-all duration-300 ${
                      isPremium
                        ? 'border-purple-400/50 shadow-[0_0_35px_rgba(168,85,247,0.2)] bg-gradient-to-b from-[#181138] via-[#100d28] to-[#0a081a]'
                        : 'border-purple-500/25 bg-[#0d0a20]/90'
                    }`}
                  >
                    <div className="flex flex-col h-full">
                      {/* Top Header */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-purple-900/60 text-purple-300 border border-purple-400/30">
                          {pkg.name}
                        </span>

                        {pkg.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-gradient-to-r from-violet-600/60 to-fuchsia-600/60 text-purple-200 border border-fuchsia-400/40">
                            {pkg.badge}
                          </span>
                        )}
                      </div>

                      {/* Website Type */}
                      <div className="mb-2">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          Website Type:
                        </p>
                        <h3 className="text-xl font-bold text-white font-display">
                          {pkg.websiteType}
                        </h3>
                      </div>

                      <p className="text-xs text-slate-300/90 leading-relaxed mb-6 min-h-[36px]">
                        {pkg.description}
                      </p>

                      {/* Price Block */}
                      <div className="py-4 px-5 rounded-xl bg-purple-950/50 border border-purple-500/25 mb-6 flex items-baseline justify-between">
                        <span className="text-xs font-medium text-slate-400">Total Investment</span>
                        <div className="text-right">
                          <span className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-purple-200">
                            {pkg.price}
                          </span>
                        </div>
                      </div>

                      {/* Feature List */}
                      <div className="flex-grow mb-6">
                        <p className="text-xs uppercase font-bold text-purple-300 tracking-wider mb-3.5">
                          What's Included:
                        </p>
                        <ul className="space-y-3">
                          {pkg.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span className="leading-snug">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Buttons */}
                      <div className="pt-5 border-t border-purple-500/20 space-y-2.5">
                        <button
                          onClick={() => handleAction(pkg.name + ' Website (' + pkg.websiteType + ')', pkg.price)}
                          className={`w-full py-3.5 px-5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-md ${
                            isPremium
                              ? 'bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-500 hover:to-violet-500 text-white shadow-[0_0_22px_rgba(168,85,247,0.4)] border border-purple-400/40'
                              : 'bg-purple-900/60 hover:bg-purple-800/80 text-white border border-purple-400/30'
                          }`}
                        >
                          <MessageCircle className="w-4 h-4 text-purple-200" />
                          <span>{pkg.ctaText}</span>
                        </button>

                        <button
                          onClick={() => onRouteChange('/contact')}
                          className="w-full text-center text-xs text-slate-400 hover:text-purple-300 transition-colors py-1"
                        >
                          Have custom questions? Contact Us →
                        </button>
                      </div>
                    </div>
                  </SpotlightCard>
                </SectionReveal>
              );
            })}
          </div>
        </section>

        {/* SECTION 2 — DIGITAL MARKETING */}
        <section id="digital-marketing-full" className="scroll-mt-28">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-purple-900/30 gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-purple-900/50 border border-purple-500/30 flex items-center justify-center text-purple-300">
                    <Megaphone className="w-4 h-4" />
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                    Digital Marketing
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                  Build your online presence, reach the right audience, and grow your business with strategic digital marketing solutions.
                </p>
              </div>

              <div className="text-xs text-fuchsia-300 font-mono bg-purple-950/40 px-3 py-1.5 rounded-lg border border-purple-500/20 w-fit">
                Social Growth • Paid Ads • Full Growth Suite
              </div>
            </div>
          </SectionReveal>

          {/* 3 Digital Marketing Service Options */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {MARKETING_SERVICES.map((service: MarketingService, idx: number) => {
              const isCombined = service.isCombinedPackage;

              return (
                <SectionReveal key={service.id} delay={idx * 0.1}>
                  <SpotlightCard
                    className={`h-full flex flex-col justify-between p-6 sm:p-8 transition-all duration-300 ${
                      isCombined
                        ? 'border-fuchsia-500/40 shadow-[0_0_35px_rgba(217,70,239,0.18)] bg-gradient-to-b from-[#191038] via-[#120d2b] to-[#0a081a]'
                        : 'border-purple-500/25 bg-[#0d0a20]/90'
                    }`}
                  >
                    <div className="flex flex-col h-full">
                      {/* Top Pill & Badge */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-purple-900/60 text-purple-300 border border-purple-400/30">
                          {service.category}
                        </span>

                        {service.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-gradient-to-r from-fuchsia-600/50 to-purple-600/50 text-fuchsia-200 border border-fuchsia-400/40">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white font-display mb-2 min-h-[56px] flex items-center">
                        {service.title}
                      </h3>

                      <p className="text-xs text-slate-300/90 leading-relaxed mb-6 min-h-[42px]">
                        {service.description}
                      </p>

                      {/* Price Banner */}
                      <div className="py-4 px-5 rounded-xl bg-purple-950/50 border border-purple-500/25 mb-6 flex flex-col justify-center min-h-[82px]">
                        {isCombined ? (
                          <div>
                            <div className="flex items-baseline justify-between">
                              <span className="text-xs font-semibold text-fuchsia-300 uppercase tracking-wider">
                                Combined Package
                              </span>
                              <span className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-fuchsia-100 to-purple-200">
                                {service.price}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-400 mt-1">
                              *Note: ₹20,000 applies to the complete combined package (Website + Social Media + Google & Meta Ads), not each individual service.
                            </p>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider block">
                                Custom Scope
                              </span>
                              <span className="text-[11px] text-slate-400">
                                Tailored to your campaign goals
                              </span>
                            </div>
                            <span className="text-xs px-3 py-1 rounded-md bg-purple-900/50 text-purple-200 border border-purple-500/30 font-medium">
                              Contact for Quote
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Features */}
                      <div className="flex-grow mb-6">
                        <p className="text-xs uppercase font-bold text-purple-300 tracking-wider mb-3.5">
                          {isCombined ? 'Combined Growth Capabilities:' : 'Included Scope:'}
                        </p>
                        <ul className="space-y-3">
                          {service.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                              <CheckCircle2
                                className={`w-4 h-4 shrink-0 mt-0.5 ${
                                  isCombined ? 'text-fuchsia-400' : 'text-emerald-400'
                                }`}
                              />
                              <span className="leading-snug">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button Block */}
                      <div className="pt-5 border-t border-purple-500/20 space-y-2.5">
                        <button
                          onClick={() => handleAction(service.title, service.price)}
                          className={`w-full py-3.5 px-5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-md ${
                            isCombined
                              ? 'bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-600 hover:from-fuchsia-500 hover:to-purple-500 text-white shadow-[0_0_22px_rgba(217,70,239,0.4)] border border-fuchsia-400/40'
                              : 'bg-purple-900/60 hover:bg-purple-800/80 text-white border border-purple-400/30'
                          }`}
                        >
                          <MessageCircle className="w-4 h-4 text-purple-200" />
                          <span>{service.ctaText}</span>
                        </button>

                        <button
                          onClick={() => onRouteChange('/contact')}
                          className="w-full text-center text-xs text-slate-400 hover:text-purple-300 transition-colors py-1"
                        >
                          Or send inquiry via contact page →
                        </button>
                      </div>
                    </div>
                  </SpotlightCard>
                </SectionReveal>
              );
            })}
          </div>
        </section>

        {/* BOTTOM DIRECT CONTACT REASSURANCE BANNER */}
        <SectionReveal>
          <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#130f2e] via-[#0d0a21] to-[#080614] border border-purple-500/30 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Need a Custom Requirement or Strategy Consultation?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect directly with <strong className="text-white">{PERSONAL_INFO.name}</strong> to discuss your exact timeline, custom integrations, or tailored marketing budgets.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => handleAction('Custom Requirement Consultation')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-emerald-600/90 hover:bg-emerald-500 border border-emerald-400/40 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Direct: {PERSONAL_INFO.phone}</span>
                </button>
                <button
                  onClick={() => onRouteChange('/contact')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-purple-200 bg-purple-950/60 hover:bg-purple-900/80 border border-purple-500/30 transition-all text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Use Contact Form</span>
                </button>
              </div>
            </div>
          </div>
        </SectionReveal>

      </div>
    </div>
  );
};
