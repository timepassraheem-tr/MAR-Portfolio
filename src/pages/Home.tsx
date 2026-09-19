import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  Send,
  Github,
  Linkedin,
  Sparkles,
  Award,
  Layers,
  Code2,
  ExternalLink,
  User,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_DATA } from '../data/portfolio';
import { PortraitAsset } from '../components/PortraitAsset';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { SpotlightCard } from '../components/SpotlightCard';
import { SectionReveal } from '../components/SectionReveal';
import { WorkWithMarSection } from '../components/WorkWithMarSection';
import { NavRoute } from '../components/Navbar';
import heroPortraitImg from '../assets/images/regenerated_image_1789484218837.png';
import founderPortraitImg from '../assets/images/regenerated_image_1789484221607.png';

interface HomeProps {
  onRouteChange: (route: NavRoute) => void;
}

export const Home: React.FC<HomeProps> = ({ onRouteChange }) => {
  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <div className="min-h-screen pt-28 pb-20 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Top Label & Decorative Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#16102e]/80 border border-purple-500/35 backdrop-blur-md w-fit shadow-[0_0_15px_rgba(168,85,247,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-200">
                Available For New Projects & Commissions
              </span>
            </motion.div>

            {/* Handwritten style greeting accent */}
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-handwriting text-2xl sm:text-3xl text-purple-300 font-bold -mb-2"
            >
              Hello, I am
            </motion.p>

            {/* Main Display Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display text-white leading-[1.08]">
                MD Abdul{' '}
                <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(192,132,252,0.35)]">
                  Raheem
                </span>
              </h1>
            </motion.div>

            {/* Subtitle / Brand Banner */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap items-center gap-2 text-lg sm:text-xl font-medium text-slate-200"
            >
              <span className="text-purple-300 font-semibold">{PERSONAL_INFO.brand}</span>
              <span className="text-purple-500">•</span>
              <span>Graphic Designer & Web Developer</span>
            </motion.div>

            {/* Mobile & Tablet Visible Portrait (Appears immediately under title on screens < lg) */}
            <div className="lg:hidden my-2 max-w-sm mx-auto w-full">
              <PortraitAsset imageSrc={heroPortraitImg} />
            </div>

            {/* Supporting description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed"
            >
              {PERSONAL_INFO.bioShort}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => onRouteChange('/works')}
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-500 hover:to-violet-500 shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] border border-purple-400/40 transition-all duration-300 active:scale-95"
              >
                <span>Explore Works</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onRouteChange('/resume')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-purple-200 bg-[#141028]/80 hover:bg-[#1c1638] border border-purple-500/30 hover:border-purple-400/60 shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-200"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>View Resume</span>
              </button>

              <button
                onClick={() => onRouteChange('/contact')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-300 hover:text-white hover:bg-purple-950/40 transition-colors text-sm"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </button>
            </motion.div>

            {/* Social Icons Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex items-center gap-3 pt-4"
            >
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mr-2">
                Connect:
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-10 h-10 rounded-xl bg-[#120f26] border border-purple-500/30 hover:border-purple-400 text-purple-300 hover:text-white hover:bg-purple-900/40 flex items-center justify-center transition-all shadow-[0_0_12px_rgba(0,0,0,0.4)]"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="w-10 h-10 rounded-xl bg-[#120f26] border border-purple-500/30 hover:border-purple-400 text-purple-300 hover:text-white hover:bg-purple-900/40 flex items-center justify-center transition-all shadow-[0_0_12px_rgba(0,0,0,0.4)]"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/marenterprise07"
                target="_blank"
                rel="noreferrer noopener"
                className="w-10 h-10 rounded-xl bg-[#120f26] border border-purple-500/30 hover:border-purple-400 text-purple-300 hover:text-white hover:bg-purple-900/40 flex items-center justify-center transition-all shadow-[0_0_12px_rgba(0,0,0,0.4)]"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer noopener"
                className="w-10 h-10 rounded-xl bg-[#120f26] border border-purple-500/30 hover:border-purple-400 text-purple-300 hover:text-white hover:bg-purple-900/40 flex items-center justify-center transition-all shadow-[0_0_12px_rgba(0,0,0,0.4)]"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                className="w-10 h-10 rounded-xl bg-[#120f26] border border-purple-500/30 hover:border-purple-400 text-purple-300 hover:text-white hover:bg-purple-900/40 flex items-center justify-center transition-all shadow-[0_0_12px_rgba(0,0,0,0.4)]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Hero Portrait Asset (Desktop 5 cols, hidden on mobile to avoid duplicate) */}
          <div className="hidden lg:flex lg:col-span-5 relative justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-md lg:max-w-none"
            >
              <PortraitAsset imageSrc={heroPortraitImg} />
            </motion.div>
          </div>
        </div>

        {/* Hero Statistics Strip (Animated counters) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-16 pt-10 border-t border-purple-900/30 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
        >
          {PERSONAL_INFO.stats.map((stat, i) => (
            <SpotlightCard
              key={stat.label}
              className="p-6 text-center border-purple-500/20 hover:border-purple-400/50"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-300 mt-2">
                {stat.label}
              </p>
            </SpotlightCard>
          ))}
        </motion.div>

        {/* MotionSites-style interactive Scroll Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-12 flex flex-col items-center justify-center gap-2"
        >
          <button
            onClick={() => {
              const target = document.getElementById('featured-projects');
              target?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex flex-col items-center gap-2 text-slate-400 hover:text-purple-300 transition-colors focus:outline-none"
            aria-label="Scroll to featured works"
          >
            <span className="text-[11px] font-semibold tracking-widest uppercase text-purple-400/80 group-hover:text-purple-300 transition-colors">
              Scroll To Explore
            </span>
            <div className="w-5 h-8 rounded-full border-2 border-purple-500/40 group-hover:border-purple-400 flex items-start justify-center p-1 transition-colors">
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]"
              />
            </div>
          </button>
        </motion.div>
      </section>

      {/* FEATURED WORKS SNEAK PEEK */}
      <section id="featured-projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-3">
                <Layers className="w-3.5 h-3.5 text-purple-400" />
                <span>Selected Portfolio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight">
                Featured Projects
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
                Real production web ecosystems, e-commerce stores, and digital tools built under M.A.R Enterprise.
              </p>
            </div>

            <button
              onClick={() => onRouteChange('/works')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project, i) => (
            <SectionReveal key={project.id} delay={i * 0.1}>
              <SpotlightCard className="p-5 sm:p-6 flex flex-col justify-between h-full border-purple-500/25">
                <div>
                  {/* Project Image Photo Thumbnail */}
                  {project.image && (
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-4 border border-purple-500/20 group-hover:border-purple-400/40 transition-colors bg-purple-950/40">
                      <img
                        src={project.image}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a21] via-transparent to-transparent opacity-70" />
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-900/50 text-purple-300 border border-purple-400/30">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">2026</span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-display group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-purple-300/80 font-medium mt-1 mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-slate-300/90 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-purple-950/60 text-purple-300/90 border border-purple-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-purple-900/50 hover:bg-purple-800/80 border border-purple-400/30 transition-all shadow-[0_0_12px_rgba(147,51,234,0.2)]"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </SpotlightCard>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* WORK WITH M.A.R SERVICE & PRICING SECTION */}
      <div className="border-t border-purple-900/30">
        <WorkWithMarSection onRouteChange={onRouteChange} isHomePage={true} />
      </div>

      {/* MEET THE FOUNDER / ABOUT SPOTLIGHT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-purple-900/30">
        <SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Side Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm">
                <PortraitAsset imageSrc={founderPortraitImg} />
              </div>
            </div>

            {/* Right Side Bio Narrative */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-xs font-semibold text-purple-300 uppercase tracking-wider">
                <User className="w-3.5 h-3.5 text-purple-400" />
                <span>About The Founder</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
                Architecting Modern Web & Brand Experiences
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                I am <strong className="text-white font-semibold">MD Abdul Raheem</strong>, the founder of <strong className="text-purple-300 font-semibold">{PERSONAL_INFO.brand}</strong> based in Hyderabad, Telangana. I specialize in the convergence of graphic design, modern full-stack web development, and intelligent AI automations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/20 flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-purple-900/60 text-emerald-400 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">ASDC & SETWIN Certified</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Professional credentials in Graphic Design & Office Systems</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/20 flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-purple-900/60 text-fuchsia-400 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Production AI Builder</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Automating client workflows and building interactive web portals</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onRouteChange('/about')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-500 hover:to-violet-500 shadow-[0_0_20px_rgba(168,85,247,0.35)] border border-purple-400/30 transition-all"
                >
                  <span>Read Full Biography & Skills</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onRouteChange('/resume')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-purple-200 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 transition-colors text-sm"
                >
                  <Download className="w-4 h-4 text-purple-400" />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* CORE EXPERTISE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionReveal>
          <div className="rounded-3xl p-8 sm:p-12 glass-panel border border-purple-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
              <div className="lg:col-span-2 space-y-3">
                <p className="font-handwriting text-2xl text-purple-300 font-bold">
                  Let's Create Together
                </p>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                  Looking for bespoke Graphic Design, Web Development or AI Automation?
                </h3>
                <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                  Whether you need a high-converting e-commerce storefront, complete brand identity, or automated customer support bots, M.A.R Enterprise delivers with speed and precision.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center">
                <button
                  onClick={() => onRouteChange('/contact')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.4)] border border-purple-400/30 transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start a Conversation</span>
                </button>
                <button
                  onClick={() => onRouteChange('/services')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-purple-200 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 transition-colors text-sm"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
};
