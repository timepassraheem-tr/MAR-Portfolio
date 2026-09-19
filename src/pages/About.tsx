import React from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Calendar,
  GraduationCap,
  Sparkles,
  BookOpen,
  Layers,
  ArrowRight,
  Download,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  EDUCATION_DATA,
  GRAPHIC_DESIGN_SKILLS,
  COURSES_DATA,
  QUALITIES_LIST,
} from '../data/portfolio';
import { PortraitAsset } from '../components/PortraitAsset';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { SpotlightCard } from '../components/SpotlightCard';
import { SectionReveal } from '../components/SectionReveal';
import { NavRoute } from '../components/Navbar';
import aboutPortraitImg from '../assets/images/regenerated_image_1789484218837.png';

interface AboutProps {
  onRouteChange: (route: NavRoute) => void;
}

export const About: React.FC<AboutProps> = ({ onRouteChange }) => {
  return (
    <div className="min-h-screen pt-28 pb-20 overflow-hidden">
      {/* SECTION HEADER / TOP ROW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16">
        
        {/* Top Decorative Category */}
        <div className="flex items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15102d] border border-purple-500/35 text-xs font-semibold text-purple-300 uppercase tracking-widest shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Biography & Background</span>
          </div>
          <p className="font-handwriting text-2xl text-purple-300 font-bold hidden sm:inline-block">
            Meet MD Abdul Raheem
          </p>
        </div>

        {/* 3-Column Hero Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Col 1: Left Portrait (4 cols) */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-sm sticky top-28"
            >
              <PortraitAsset imageSrc={aboutPortraitImg} />

              {/* Quick Contact Card below portrait */}
              <div className="mt-6 p-5 rounded-2xl glass-card border-purple-500/25 space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-purple-300 transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-purple-300 transition-colors truncate">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Col 2: Center About Narrative (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-purple-400 font-bold mb-1.5">
                Who Am I
              </p>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display leading-tight">
                Crafting Digital Experiences with Passion & Precision
              </h1>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am <strong className="text-white font-semibold">MD Abdul Raheem</strong>, the founder of <strong className="text-purple-300 font-semibold">{PERSONAL_INFO.brand}</strong>. Operating from Hyderabad, Telangana, I specialize at the intersection of aesthetic graphic design, modern web architecture, and emerging generative AI technologies.
              </p>
              <p>
                My journey combines hands-on engineering across live e-commerce websites, corporate web platforms, and automated workflow agents with certified training in Graphic Design (ASDC), AI Builder Mastery, and Office Systems (SETWIN).
              </p>
              <p>
                Whether crafting high-converting brand identities, designing responsive and engaging web portals, or deploying autonomous AI bots to eliminate manual bottlenecks, I ensure every deliverable meets the highest standards of craft, performance, and reliability.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onRouteChange('/resume')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-[0_0_18px_rgba(147,51,234,0.35)] border border-purple-400/30 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>View My Resume</span>
              </button>
              <button
                onClick={() => onRouteChange('/works')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-purple-200 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 transition-colors"
              >
                <span>Browse Works</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Col 3: Right-Side Qualities Panel (3 cols) */}
          <div className="lg:col-span-3">
            <div className="p-6 rounded-2xl glass-panel border-purple-500/30 space-y-5">
              <div>
                <p className="font-handwriting text-xl text-purple-300 font-bold">
                  Guaranteed Standards
                </p>
                <h3 className="text-lg font-bold text-white font-display">
                  Core Qualities
                </h3>
              </div>

              <div className="space-y-4">
                {QUALITIES_LIST.map((q, idx) => (
                  <motion.div
                    key={q.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.5 }}
                    className="flex items-start gap-3 text-left group"
                  >
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-purple-900/50 border border-purple-400/40 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-purple-300 transition-all">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-300" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-100 group-hover:text-purple-300 transition-colors">
                        {q.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-normal mt-0.5">
                        {q.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Statistics Bar */}
        <div className="mt-14 pt-8 border-t border-purple-900/30 grid grid-cols-2 md:grid-cols-4 gap-6">
          {PERSONAL_INFO.stats.map((stat) => (
            <SpotlightCard
              key={stat.label}
              className="p-5 text-center border-purple-500/20 hover:border-purple-400/50"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs font-medium text-slate-300 mt-1.5">{stat.label}</p>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* THREE BOTTOM CARDS: MY SKILLS | COURSES COMPLETED | EDUCATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Card 1: My Graphic Design Skills */}
          <SectionReveal delay={0.1}>
            <SpotlightCard className="p-7 h-full border-purple-500/25 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-purple-400" />
                    <h3 className="text-xl font-bold text-white font-display">
                      My Skills
                    </h3>
                  </div>
                  <span className="text-xs text-purple-300 font-semibold px-2.5 py-0.5 rounded-full bg-purple-950/60 border border-purple-500/30">
                    Graphic Design
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-6">
                  Core creative software and design disciplines mastered through ASDC and professional practice.
                </p>

                <div className="space-y-4">
                  {GRAPHIC_DESIGN_SKILLS.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200">{skill.name}</span>
                        <span className="text-purple-300 font-mono font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-purple-950/60 overflow-hidden border border-purple-500/20">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-400 shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-purple-900/30 text-xs text-slate-400 flex items-center justify-between">
                <span>Certified by ASDC</span>
                <span className="text-purple-300 font-medium">8 Disciplines</span>
              </div>
            </SpotlightCard>
          </SectionReveal>

          {/* Card 2: Courses & Learning */}
          <SectionReveal delay={0.2}>
            <SpotlightCard className="p-7 h-full border-purple-500/25 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                    <h3 className="text-xl font-bold text-white font-display">
                      Courses & Learning
                    </h3>
                  </div>
                  <span className="text-xs text-purple-300 font-semibold px-2.5 py-0.5 rounded-full bg-purple-950/60 border border-purple-500/30">
                    16 Topics
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-5">
                  Extensive continuous learning spanning AI, Agentic workflows, web deployment, and automations.
                </p>

                <div className="grid grid-cols-2 gap-2.5">
                  {COURSES_DATA.map((course) => (
                    <div
                      key={course.name}
                      className="p-2.5 rounded-xl bg-[#110e26] border border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-950/30 transition-all flex items-start gap-2 group"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5 group-hover:text-purple-200 transition-colors" />
                      <span className="text-xs text-slate-200 font-medium leading-tight line-clamp-2">
                        {course.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-purple-900/30 text-xs text-slate-400 flex items-center justify-between">
                <span>AI Builder Mastery</span>
                <span className="text-purple-300 font-medium">100% Completed</span>
              </div>
            </SpotlightCard>
          </SectionReveal>

          {/* Card 3: Education Timeline */}
          <SectionReveal delay={0.3}>
            <SpotlightCard className="p-7 h-full border-purple-500/25 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-purple-400" />
                    <h3 className="text-xl font-bold text-white font-display">
                      Education
                    </h3>
                  </div>
                  <span className="text-xs text-purple-300 font-semibold px-2.5 py-0.5 rounded-full bg-purple-950/60 border border-purple-500/30">
                    Academic
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-6">
                  Verified educational background with approved dates and institutions.
                </p>

                {/* Timeline nodes */}
                <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-purple-500 before:via-violet-600 before:to-purple-900">
                  {EDUCATION_DATA.map((edu, idx) => (
                    <div key={edu.title} className="relative group">
                      {/* Timeline dot */}
                      <span className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-[#0d091e] border-2 border-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)] group-hover:scale-125 transition-transform" />

                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-[11px] font-mono text-purple-300 mb-1.5">
                        <Calendar className="w-3 h-3" />
                        <span>{edu.period}</span>
                      </div>

                      <h4 className="text-base font-bold text-white font-display group-hover:text-purple-300 transition-colors">
                        {edu.title}
                      </h4>
                      <p className="text-xs text-purple-300 font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-purple-900/30 text-xs text-slate-400 flex items-center justify-between">
                <span>Mukarram Jah & MS College</span>
                <span className="text-emerald-400 font-medium">Current Status: Present</span>
              </div>
            </SpotlightCard>
          </SectionReveal>

        </div>
      </section>
    </div>
  );
};
