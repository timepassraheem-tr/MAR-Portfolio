import React from 'react';
import { motion } from 'motion/react';
import {
  Palette,
  Globe,
  Bot,
  Smartphone,
  TrendingUp,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
} from 'lucide-react';
import { SERVICES_DATA, QUALITIES_LIST, PERSONAL_INFO } from '../data/portfolio';
import { SpotlightCard } from '../components/SpotlightCard';
import { SectionReveal } from '../components/SectionReveal';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { NavRoute } from '../components/Navbar';

interface ServicesProps {
  onRouteChange: (route: NavRoute) => void;
}

export const Services: React.FC<ServicesProps> = ({ onRouteChange }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-6 h-6 text-purple-300" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-purple-300" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-purple-300" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-purple-300" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-purple-300" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-purple-300" />;
      default:
        return <Zap className="w-6 h-6 text-purple-300" />;
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 overflow-hidden">
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15102d] border border-purple-500/35 text-xs font-semibold text-purple-300 uppercase tracking-widest shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>My Quality Offerings</span>
              </div>
              <span className="font-handwriting text-2xl text-purple-300 font-bold hidden sm:inline-block">
                Solutions that scale
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display leading-tight">
              Services Tailored to{' '}
              <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent">
                Elevate Your Brand
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Comprehensive digital creative solutions combining aesthetic brand identity, modern full-stack web engineering, and autonomous AI automation.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              onClick={() => onRouteChange('/contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.35)] border border-purple-400/30 transition-all"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 3-COLUMN SERVICE CARDS + RIGHT QUALITY PANEL LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main 3-Column Service Grid (8 or 9 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES_DATA.map((service, idx) => (
              <SectionReveal key={service.id} delay={idx * 0.08}>
                <SpotlightCard className="p-6 h-full flex flex-col justify-between border-purple-500/25 hover:border-purple-400/60 group">
                  <div>
                    {/* Top Row: Icon & Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-900/60 to-[#140e2b] border border-purple-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.2)] group-hover:scale-110 group-hover:border-purple-400 transition-all">
                        {getIcon(service.icon)}
                      </div>
                      <span className="font-display text-2xl font-bold text-purple-400/40 group-hover:text-purple-300/80 transition-colors">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white font-display group-hover:text-purple-300 transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <ul className="space-y-2 border-t border-purple-900/30 pt-3">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-purple-900/20 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-purple-300">
                      M.A.R Enterprise
                    </span>
                    <button
                      onClick={() => onRouteChange('/contact')}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-purple-400 group-hover:text-white transition-colors"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </SpotlightCard>
              </SectionReveal>
            ))}
          </div>

          {/* Right Quality & Standards Panel (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <SectionReveal delay={0.2}>
              <div className="p-7 rounded-3xl glass-panel border-purple-500/30 space-y-6">
                <div>
                  <p className="font-handwriting text-2xl text-purple-300 font-bold">
                    Why Choose Me?
                  </p>
                  <h3 className="text-xl font-bold text-white font-display">
                    Guaranteed Value & Delivery
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Every engagement with MD Abdul Raheem adheres to rigorous standards of excellence.
                  </p>
                </div>

                <div className="space-y-4">
                  {QUALITIES_LIST.map((q, idx) => (
                    <motion.div
                      key={q.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 }}
                      className="p-3.5 rounded-xl bg-[#120f28] border border-purple-500/20 flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-lg bg-purple-900/50 border border-purple-400/40 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-purple-300" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">
                          {q.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                          {q.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Direct CTA inside panel */}
                <div className="pt-2">
                  <button
                    onClick={() => onRouteChange('/contact')}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-[0_0_18px_rgba(147,51,234,0.35)] transition-all"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </SectionReveal>
          </div>

        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {PERSONAL_INFO.stats.map((stat) => (
            <SpotlightCard
              key={stat.label}
              className="p-6 text-center border-purple-500/20 hover:border-purple-400/50"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-300 mt-2">{stat.label}</p>
            </SpotlightCard>
          ))}
        </div>
      </section>
    </div>
  );
};
