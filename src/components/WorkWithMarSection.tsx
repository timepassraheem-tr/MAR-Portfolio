import React from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Globe,
  Share2,
  Megaphone,
  Layers,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';
import {
  WEBSITE_PACKAGES,
  MARKETING_SERVICES,
  getWhatsAppUrl,
  WebsitePackage,
  MarketingService,
} from '../data/workWithMar';
import { SpotlightCard } from './SpotlightCard';
import { SectionReveal } from './SectionReveal';
import { NavRoute } from './Navbar';

interface WorkWithMarSectionProps {
  onRouteChange: (route: NavRoute) => void;
  isHomePage?: boolean;
}

export const WorkWithMarSection: React.FC<WorkWithMarSectionProps> = ({
  onRouteChange,
  isHomePage = false,
}) => {
  const handleAction = (pkgTitle: string, price?: string, isContact?: boolean) => {
    const url = getWhatsAppUrl(pkgTitle, price);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="work-with-mar-section" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* SECTION MAIN HEADER */}
      <SectionReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Services & Investment</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
              Work with M.A.R
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Choose the right solution for your business and take your digital presence to the next level.
            </p>
          </div>

          {isHomePage && (
            <div className="shrink-0">
              <button
                onClick={() => onRouteChange('/work-with-mar')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-500 hover:to-violet-500 shadow-[0_0_20px_rgba(168,85,247,0.35)] border border-purple-400/30 transition-all active:scale-95 group"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </SectionReveal>

      {/* CATEGORY A: WEBSITE DESIGNING */}
      <div id="website-designing" className="mb-20">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-900/50 border border-purple-500/30 flex items-center justify-center text-purple-300">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Website Designing
              </h3>
              <p className="text-xs sm:text-sm text-purple-300/80 font-medium">
                Solutions ranging from simple single-page websites to premium dynamic web platforms
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* 3 WEBSITE DESIGNING CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 items-stretch">
          {WEBSITE_PACKAGES.map((pkg: WebsitePackage, idx: number) => {
            const isPremium = pkg.highlight;

            return (
              <SectionReveal key={pkg.id} delay={idx * 0.1}>
                <SpotlightCard
                  className={`h-full flex flex-col justify-between p-6 sm:p-7 transition-all duration-300 ${
                    isPremium
                      ? 'border-purple-400/50 shadow-[0_0_35px_rgba(168,85,247,0.18)] bg-gradient-to-b from-[#161033] via-[#0f0c24] to-[#0a0818]'
                      : 'border-purple-500/25 bg-[#0d0a20]/90'
                  }`}
                >
                  <div className="flex flex-col h-full">
                    {/* Card Top Pill & Header */}
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
                      <h4 className="text-lg font-bold text-white font-display">
                        {pkg.websiteType}
                      </h4>
                    </div>

                    {/* Package Description */}
                    <p className="text-xs text-slate-300/90 leading-relaxed mb-5 min-h-[36px]">
                      {pkg.description}
                    </p>

                    {/* Price Block */}
                    <div className="py-4 px-4 rounded-xl bg-purple-950/40 border border-purple-500/20 mb-6 flex items-baseline justify-between">
                      <span className="text-xs font-medium text-slate-400">Fixed Investment</span>
                      <div className="text-right">
                        <span className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-purple-200">
                          {pkg.price}
                        </span>
                      </div>
                    </div>

                    {/* Feature List */}
                    <div className="flex-grow mb-6">
                      <p className="text-xs uppercase font-bold text-purple-300 tracking-wider mb-3">
                        Included Features:
                      </p>
                      <ul className="space-y-2.5">
                        {pkg.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button Block */}
                    <div className="pt-4 border-t border-purple-500/20 space-y-2">
                      <button
                        onClick={() => handleAction(pkg.name + ' Website (' + pkg.websiteType + ')', pkg.price)}
                        className={`w-full py-3 px-5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-md ${
                          isPremium
                            ? 'bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-500 hover:to-violet-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.35)] border border-purple-400/40'
                            : 'bg-purple-900/60 hover:bg-purple-800/80 text-white border border-purple-400/30'
                        }`}
                      >
                        <MessageCircle className="w-4 h-4 text-purple-200" />
                        <span>{pkg.ctaText}</span>
                      </button>

                      <button
                        onClick={() => onRouteChange('/contact')}
                        className="w-full text-center text-[11px] text-slate-400 hover:text-purple-300 transition-colors py-1"
                      >
                        Or inquire via contact form →
                      </button>
                    </div>
                  </div>
                </SpotlightCard>
              </SectionReveal>
            );
          })}
        </div>
      </div>

      {/* CATEGORY B: DIGITAL MARKETING */}
      <div id="digital-marketing" className="pt-6 border-t border-purple-900/30">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-purple-900/50 border border-purple-500/30 flex items-center justify-center text-purple-300">
              <Megaphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Digital Marketing
              </h3>
            </div>
          </div>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed mb-8">
            Build your online presence, reach the right audience, and grow your business with strategic digital marketing solutions.
          </p>
        </SectionReveal>

        {/* 3 DIGITAL MARKETING SERVICE OPTIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {MARKETING_SERVICES.map((service: MarketingService, idx: number) => {
            const isCombined = service.isCombinedPackage;

            return (
              <SectionReveal key={service.id} delay={idx * 0.1}>
                <SpotlightCard
                  className={`h-full flex flex-col justify-between p-6 sm:p-7 transition-all duration-300 ${
                    isCombined
                      ? 'border-fuchsia-500/40 shadow-[0_0_35px_rgba(217,70,239,0.15)] bg-gradient-to-b from-[#180f33] via-[#110c26] to-[#0b081a]'
                      : 'border-purple-500/25 bg-[#0d0a20]/90'
                  }`}
                >
                  <div className="flex flex-col h-full">
                    {/* Top Tag & Badge */}
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
                    <h4 className="text-xl font-bold text-white font-display mb-2 min-h-[56px] flex items-center">
                      {service.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-slate-300/90 leading-relaxed mb-5 min-h-[42px]">
                      {service.description}
                    </p>

                    {/* Price or Inquire Tag */}
                    <div className="py-4 px-4 rounded-xl bg-purple-950/40 border border-purple-500/20 mb-6 flex flex-col justify-center min-h-[76px]">
                      {isCombined ? (
                        <div>
                          <div className="flex items-baseline justify-between">
                            <span className="text-xs font-semibold text-fuchsia-300 uppercase tracking-wider">
                              Combined Package
                            </span>
                            <span className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-fuchsia-100 to-purple-200">
                              {service.price}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 mt-1">
                            *Price applies to the complete combined package
                          </p>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider block">
                              Tailored Pricing
                            </span>
                            <span className="text-[11px] text-slate-400">
                              Customized scope per business needs
                            </span>
                          </div>
                          <span className="text-xs px-2.5 py-1 rounded-md bg-purple-900/50 text-purple-200 border border-purple-500/30 font-medium">
                            Custom Quote
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Feature List */}
                    <div className="flex-grow mb-6">
                      <p className="text-xs uppercase font-bold text-purple-300 tracking-wider mb-3">
                        {isCombined ? 'Combined Capabilities:' : 'Included Services:'}
                      </p>
                      <ul className="space-y-2.5">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCombined ? 'text-fuchsia-400' : 'text-emerald-400'}`} />
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button Block */}
                    <div className="pt-4 border-t border-purple-500/20 space-y-2">
                      <button
                        onClick={() => handleAction(service.title, service.price, !isCombined)}
                        className={`w-full py-3 px-5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-md ${
                          isCombined
                            ? 'bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-600 hover:from-fuchsia-500 hover:to-purple-500 text-white shadow-[0_0_20px_rgba(217,70,239,0.35)] border border-fuchsia-400/40'
                            : 'bg-purple-900/60 hover:bg-purple-800/80 text-white border border-purple-400/30'
                        }`}
                      >
                        <MessageCircle className="w-4 h-4 text-purple-200" />
                        <span>{service.ctaText}</span>
                      </button>

                      <button
                        onClick={() => onRouteChange('/contact')}
                        className="w-full text-center text-[11px] text-slate-400 hover:text-purple-300 transition-colors py-1"
                      >
                        Or inquire via contact form →
                      </button>
                    </div>
                  </div>
                </SpotlightCard>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
