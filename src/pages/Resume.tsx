import React from 'react';
import { motion } from 'motion/react';
import {
  Download,
  GraduationCap,
  Briefcase,
  Award,
  BookOpen,
  Layers,
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle2,
  FileCheck,
  Mail,
  Phone,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  EDUCATION_DATA,
  CERTIFICATIONS_DATA,
  GRAPHIC_DESIGN_SKILLS,
  COURSES_DATA,
  EXPERIENCE_DATA,
} from '../data/portfolio';
import { SpotlightCard } from '../components/SpotlightCard';
import { SectionReveal } from '../components/SectionReveal';
import { NavRoute } from '../components/Navbar';

interface ResumeProps {
  onRouteChange: (route: NavRoute) => void;
}

export const Resume: React.FC<ResumeProps> = ({ onRouteChange }) => {
  const handlePrintDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen pt-28 pb-20 overflow-hidden">
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15102d] border border-purple-500/35 text-xs font-semibold text-purple-300 uppercase tracking-widest shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <FileCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>Curriculum Vitae</span>
              </div>
              <span className="font-handwriting text-2xl text-purple-300 font-bold hidden sm:inline-block">
                Professional Credentials
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display leading-tight">
              Resume &{' '}
              <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent">
                Qualifications
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Comprehensive overview of academic background, professional certifications, agency project delivery, and specialized skillsets.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrintDownload}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.35)] border border-purple-400/30 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download / Print CV</span>
            </button>
          </div>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* ROW 1: EDUCATION & WORK/PROJECT EXPERIENCE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* EDUCATION PANEL (With Exact Correct Dates) */}
          <SectionReveal delay={0.1}>
            <SpotlightCard className="p-7 sm:p-8 h-full border-purple-500/30">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-purple-900/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-400/40 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">
                      Education
                    </h3>
                    <p className="text-xs text-purple-300 font-medium">Academic Track Record</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400">2024 – 2027</span>
              </div>

              {/* Education vertical timeline */}
              <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-purple-500 via-purple-600 before:to-purple-900">
                {EDUCATION_DATA.map((item) => (
                  <div key={item.title} className="relative group">
                    {/* Node Dot */}
                    <span className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-[#0e0a22] border-2 border-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.7)] group-hover:scale-125 transition-transform" />

                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-[11px] font-mono text-purple-300 font-semibold">
                        {item.period}
                      </span>
                      {item.status && (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                          {item.status}
                        </span>
                      )}
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white font-display group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h4>

                    <div className="flex items-center gap-2 text-xs text-purple-300 font-medium mt-0.5">
                      <span>{item.institution}</span>
                      <span>•</span>
                      <span className="text-slate-400">{item.boardOrStream}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </SectionReveal>

          {/* WORK / PROJECT EXPERIENCE PANEL */}
          <SectionReveal delay={0.2}>
            <SpotlightCard className="p-7 sm:p-8 h-full border-purple-500/30">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-purple-900/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-400/40 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">
                      Work & Project Experience
                    </h3>
                    <p className="text-xs text-purple-300 font-medium">Independent Practice & Studio</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400">2024 – Present</span>
              </div>

              {/* Experience vertical timeline */}
              <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-purple-500 via-violet-600 before:to-purple-900">
                {EXPERIENCE_DATA.map((exp) => (
                  <div key={exp.role} className="relative group">
                    <span className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-[#0e0a22] border-2 border-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.7)] group-hover:scale-125 transition-transform" />

                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-[11px] font-mono text-purple-300 font-semibold">
                        {exp.period}
                      </span>
                      <span className="text-[10px] text-slate-400 px-2 py-0.5 rounded bg-[#16122d] border border-purple-500/20">
                        {exp.type}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white font-display group-hover:text-purple-300 transition-colors">
                      {exp.role}
                    </h4>

                    <p className="text-xs text-purple-300 font-medium mt-0.5">
                      {exp.company} — {exp.location}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mt-2 mb-3">
                      {exp.description}
                    </p>

                    <ul className="space-y-1.5">
                      {exp.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </SectionReveal>

        </div>

        {/* ROW 2: MY CERTIFICATIONS (Exact 3 certifications) */}
        <section>
          <SectionReveal>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-purple-900/40 border border-purple-400/40 flex items-center justify-center">
                  <Award className="w-5 h-5 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    My Certifications
                  </h3>
                  <p className="text-xs text-slate-400">Verified official certifications completed</p>
                </div>
              </div>
              <span className="text-xs font-mono text-purple-300 bg-purple-950/50 px-3 py-1 rounded-full border border-purple-500/30">
                3 Accredited Certificates
              </span>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATIONS_DATA.map((cert, idx) => (
              <SectionReveal key={cert.title} delay={idx * 0.1}>
                <SpotlightCard className="p-6 border-purple-500/25 hover:border-purple-400/60 flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-purple-950/60 border border-purple-500/30 text-purple-300">
                        {cert.type}
                      </span>
                      <Award className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                    </div>

                    <h4 className="text-xl font-bold text-white font-display group-hover:text-purple-300 transition-colors">
                      {cert.title}
                    </h4>

                    <div className="flex items-center gap-2 mt-2 text-sm font-semibold text-purple-200">
                      <span>Authority / Institute:</span>
                      <span className="text-fuchsia-300 font-bold tracking-wide">{cert.issuer}</span>
                    </div>

                    <p className="text-xs text-slate-400 mt-2">
                      {cert.badge}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-purple-900/30 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified Completion
                    </span>
                    <span className="font-mono text-purple-300">Certified</span>
                  </div>
                </SpotlightCard>
              </SectionReveal>
            ))}
          </div>
        </section>

        {/* ROW 3: SKILLS & COURSES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Graphic Design Skills (5 cols) */}
          <div className="lg:col-span-5">
            <SectionReveal>
              <SpotlightCard className="p-7 border-purple-500/30 h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <Layers className="w-5 h-5 text-purple-400" />
                    <h3 className="text-xl font-bold text-white font-display">
                      My Design Skills
                    </h3>
                  </div>
                  <span className="text-xs text-purple-300 font-mono">ASDC Aligned</span>
                </div>

                <div className="space-y-3.5">
                  {GRAPHIC_DESIGN_SKILLS.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-[#120f26] border border-purple-500/20 hover:border-purple-400/40 transition-colors flex items-center justify-between"
                    >
                      <div>
                        <p className="text-xs font-bold text-white">{skill.name}</p>
                        <p className="text-[10px] text-slate-400">{skill.category}</p>
                      </div>
                      <span className="text-xs font-mono text-purple-300 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </SectionReveal>
          </div>

          {/* More Courses & Learning (7 cols) */}
          <div className="lg:col-span-7">
            <SectionReveal delay={0.15}>
              <SpotlightCard className="p-7 border-purple-500/30 h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                    <h3 className="text-xl font-bold text-white font-display">
                      More Courses & Learning
                    </h3>
                  </div>
                  <span className="text-xs text-purple-300 font-mono">16 Courses</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {COURSES_DATA.map((course) => (
                    <div
                      key={course.name}
                      className="p-3 rounded-xl bg-[#120f26] border border-purple-500/20 hover:border-purple-400/40 hover:bg-purple-950/30 transition-all flex items-center gap-2.5 group"
                    >
                      <div className="w-5 h-5 rounded-md bg-purple-900/50 border border-purple-400/30 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-purple-300" />
                      </div>
                      <span className="text-xs text-slate-200 font-medium group-hover:text-purple-200 transition-colors">
                        {course.name}
                      </span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </SectionReveal>
          </div>

        </div>

      </div>
    </div>
  );
};
