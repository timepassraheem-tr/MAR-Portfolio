import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Download,
  Eye,
  X,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Award,
  Sparkles,
  FileCheck,
  Mail,
  Phone,
  MapPin,
  Globe,
  Code2,
  Bot,
  Megaphone,
  Palette,
  Printer,
  ChevronRight,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  EDUCATION_DATA,
  CERTIFICATIONS_DATA,
  GRAPHIC_DESIGN_SKILLS,
  COURSES_DATA,
  PROJECTS_DATA,
  SERVICES_DATA,
  EXPERIENCE_DATA,
} from '../data/portfolio';
import { SpotlightCard } from '../components/SpotlightCard';
import { SectionReveal } from '../components/SectionReveal';
import { NavRoute } from '../components/Navbar';

interface ResumeProps {
  onRouteChange: (route: NavRoute) => void;
}

export const Resume: React.FC<ResumeProps> = ({ onRouteChange }) => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleDownloadCV = () => {
    // 1. Trigger actual file download
    const link = document.createElement('a');
    link.href = '/MD_Abdul_Raheem_Resume.docx';
    link.download = 'MD_Abdul_Raheem_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 2. Also automatically open and show the resume on screen
    setIsResumeModalOpen(true);
  };

  const handleOpenResumeModal = () => {
    setIsResumeModalOpen(true);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 overflow-hidden">
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15102d] border border-purple-500/35 text-xs font-semibold text-purple-300 uppercase tracking-widest shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <FileCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>Official Curriculum Vitae</span>
              </div>
              <span className="font-handwriting text-2xl text-purple-300 font-bold hidden sm:inline-block">
                Word-for-Word Verified
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display leading-tight">
              Resume &amp;{' '}
              <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent">
                Professional Credentials
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Complete professional resume for MD ABDUL RAHEEM spanning Digital Marketing, AI Automation, AI Agents, Web Development, and Graphic Design.
            </p>
          </div>

          {/* DUAL ACTION BUTTONS: CLICK TO SEE RESUME + DOWNLOAD CV */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleOpenResumeModal}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-500 hover:to-violet-500 shadow-[0_0_25px_rgba(168,85,247,0.45)] border border-purple-300/40 transition-all active:scale-95 group"
            >
              <Eye className="w-4 h-4 text-purple-200 group-hover:scale-110 transition-transform" />
              <span>Click to See Resume</span>
            </button>

            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-purple-200 bg-[#14102d] hover:bg-purple-950/60 border border-purple-500/30 hover:border-purple-400/60 shadow-[0_0_15px_rgba(0,0,0,0.4)] transition-all active:scale-95"
            >
              <Download className="w-4 h-4 text-purple-400" />
              <span>Download CV (.docx)</span>
            </button>
          </div>
        </div>
      </section>

      {/* PROMINENT "CLICK TO SEE RESUME" BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <SectionReveal>
          <div
            onClick={handleOpenResumeModal}
            className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#170e36] via-[#100a26] to-[#170e36] border border-purple-500/40 shadow-[0_0_25px_rgba(168,85,247,0.25)] hover:border-purple-400 cursor-pointer transition-all flex flex-col md:flex-row items-center justify-between gap-4 group"
          >
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-200 group-hover:scale-110 shadow-[0_0_18px_rgba(168,85,247,0.3)] transition-all shrink-0">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display group-hover:text-purple-200 transition-colors">
                    Official Complete Resume Document
                  </h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                    Interactive
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                  Click to see the full resume on screen with live clickable project links, complete experience breakdown &amp; certifications.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-purple-900/60 border border-purple-400/40 group-hover:bg-purple-800/80 transition-colors">
                <span>Click to Open Resume</span>
                <ChevronRight className="w-4 h-4 text-purple-300 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* MAIN RESUME PAGE ON-PAGE SECTIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* SECTION 1: HEADER & CONTACT INFO */}
        <SectionReveal delay={0.05}>
          <SpotlightCard className="p-7 sm:p-8 border-purple-500/35">
            <div className="text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-purple-900/30">
              <div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display uppercase tracking-wide">
                  MD ABDUL RAHEEM
                </h2>
                <p className="text-xs sm:text-sm font-bold text-purple-300 uppercase tracking-widest mt-1">
                  DIGITAL MARKETING | AI AUTOMATION | AI AGENTS | WEB &amp; DIGITAL CREATIVE
                </p>
              </div>
              <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-purple-400" />
                  <a href="tel:+917842906002" className="hover:text-purple-300 transition-colors font-mono font-semibold">+91 78429 06002</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-purple-400" />
                  <a href="mailto:mdabdulraheemmar@gmail.com" className="hover:text-purple-300 transition-colors font-mono">mdabdulraheemmar@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  <span>Hyderabad, Telangana, India</span>
                </div>
              </div>
            </div>

            {/* PROFESSIONAL SUMMARY */}
            <div className="mt-6">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-purple-300 mb-2.5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>PROFESSIONAL SUMMARY</span>
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed">
                Digital-focused hands-on experience across Digital Marketing, AI automation, AI agents, Web Development, Graphic Design, and Digital growth solutions. Experienced in building Automation Workflows and agent-based solutions for Telegram, WhatsApp, Calendar scheduling, YouTube, Instagram, Facebook/Content Workflows, and job-search/outreach processes. Also experienced in Social Media management, Google Ads, Meta Ads, Campaign Creatives, Content Planning, Website development, SEO, GEO, AEO and Responsive digital experiences. Currently pursuing Intermediate 2nd Year (CEC), With Certified Training in Digital Marketing, AI Builder Mastery, Graphic Designing, and MS Office.
              </p>
            </div>
          </SpotlightCard>
        </SectionReveal>

        {/* SECTION 2: CORE COMPETENCIES */}
        <SectionReveal delay={0.1}>
          <SpotlightCard className="p-7 sm:p-8 border-purple-500/30">
            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-purple-900/30">
              <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-400/40 flex items-center justify-center">
                <Award className="w-5 h-5 text-purple-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  CORE COMPETENCIES
                </h3>
                <p className="text-xs text-purple-300 font-medium">Four Specialized Disciplines</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/20">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-1.5 flex items-center gap-1.5">
                  <Megaphone className="w-4 h-4 text-purple-400" />
                  <span>Digital Marketing:</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Digital Marketing | Social Media Management &amp; Posting | Social Media Content Planning | Google Ads | Meta Ads | Facebook Ads | Instagram Ads | Campaign Management | Ad Optimization | Audience Targeting | Performance Monitoring | SEO, GEO, AEO.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/20">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-1.5 flex items-center gap-1.5">
                  <Bot className="w-4 h-4 text-purple-400" />
                  <span>AI Automation &amp; Agents:</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  AI Automation | AI Agents | Agentic AI Workflows | Workflow Automation | Telegram Chatbots | WhatsApp Chatbots | Calendar &amp; Meeting Scheduling Automation | YouTube, Instagram, Facebook Automation | Job Search Automation &amp; Outreach | Voice Agents
                </p>
              </div>

              <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/20">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-1.5 flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-purple-400" />
                  <span>Web Development:</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Web Development | Responsive Web Design | React | Next.js | Tailwind CSS | Mobile App | Web Applications | Progressive Web Apps (PWA) | API Integrations | Cloud Deployment
                </p>
              </div>

              <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/20">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-1.5 flex items-center gap-1.5">
                  <Palette className="w-4 h-4 text-purple-400" />
                  <span>Graphic Design &amp; Branding:</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Graphic Design | Brand Identity | Adobe Illustrator | Adobe Photoshop | Adobe Premiere | Canva | Photo Editing &amp; Video Editing | Poster Design | Logo Design | Flyer Design
                </p>
              </div>
            </div>
          </SpotlightCard>
        </SectionReveal>

        {/* SECTION 3: PROFESSIONAL EXPERIENCE */}
        <SectionReveal delay={0.15}>
          <SpotlightCard className="p-7 sm:p-8 border-purple-500/30">
            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-purple-900/30">
              <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-400/40 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-purple-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  PROFESSIONAL EXPERIENCE
                </h3>
                <p className="text-xs text-purple-300 font-medium">Commercial Projects &amp; Digital Leadership</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <ul className="space-y-2.5 text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span>Lead digital projects spanning Digital Marketing, AI automation, AI-agent workflows, Web Platforms, Branding, and creative assets for business use cases.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span>Build and deploy automation solutions including Telegram and WhatsApp chatbot concepts, Meeting/Calendar scheduling workflows, YouTube, Instagram, Facebook/Content automations, and job-search/outreach automation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span>Develop digital marketing solutions covering Social Media account handling and Posting, content planning, professional social creatives, Google Ads, Meta Ads, Audience Targeting, campaign management, performance monitoring, and Ad optimization.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span>Design and develop responsive web platforms using modern web architecture, with experience across React/Next.js concepts, Tailwind CSS, e-commerce interfaces, SEO, GEO, AEO, Animations, API integrations, and Cloud deployment.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span>Created and managed a portfolio of live web and Digital Projects.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span>Produced 50+ commercial graphic design assets across Photoshop, Illustrator, and Canva, according to the portfolio.</span>
                  </li>
                </ul>
              </div>

              {/* Web & Graphic Design Project Specialist */}
              <div className="pt-4 border-t border-purple-900/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-white font-bold mb-2">
                  <span className="text-base text-purple-200">
                    Web &amp; Graphic Design Project Specialist | Freelance &amp; Creative Labs | Hyderabad, India
                  </span>
                  <span className="text-xs text-purple-300 font-mono mt-1 sm:mt-0">2024 – 2025</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-300 mt-2">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span>Executed end-to-end poster campaigns, corporate stationery, Digital Marketing Banners, Logos, flyers, and Customized front-end interfaces.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span>Applied graphic design and office-software skills to business and event-oriented creative work.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span>Completed specialized certifications in Graphic Designing and MS Office Professional.</span>
                  </li>
                </ul>
              </div>
            </div>
          </SpotlightCard>
        </SectionReveal>

        {/* SECTION 4: DIGITAL MARKETING & AI AUTOMATION FOCUS */}
        <SectionReveal delay={0.2}>
          <SpotlightCard className="p-6 sm:p-7 border-purple-500/30 bg-gradient-to-r from-purple-950/30 via-[#100a26] to-purple-950/30">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-purple-300 mb-2">
              DIGITAL MARKETING &amp; AI AUTOMATION FOCUS
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              Primary focus areas: Digital Marketing strategy and execution, Social Media Management, Google Ads, Meta Ads, campaign optimization, AI automation, AI agents, Chatbot Workflows, Scheduling automation, Content/YouTube, Instagram, Facebook automation, and job-search/outreach automation.
            </p>
          </SpotlightCard>
        </SectionReveal>

        {/* SECTION 5: SELECTED PROJECTS (ALL 12 PROJECTS WITH LIVE LINKS) */}
        <SectionReveal delay={0.25}>
          <SpotlightCard className="p-7 sm:p-8 border-purple-500/30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-purple-900/30 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-400/40 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    SELECTED PROJECTS
                  </h3>
                  <p className="text-xs text-purple-300 font-medium">12 Featured Projects with Live Links &amp; Descriptions</p>
                </div>
              </div>
              <span className="text-xs text-purple-300 font-mono">2025 – 2026</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROJECTS_DATA.map((proj, idx) => (
                <div
                  key={proj.id}
                  className="p-4 rounded-xl bg-[#120e29] border border-purple-500/25 flex flex-col justify-between hover:border-purple-400/60 transition-all group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h4 className="text-sm font-bold text-white font-display group-hover:text-purple-300 transition-colors">
                        {idx + 1}. {proj.title}
                      </h4>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-purple-900/60 text-purple-300 shrink-0">
                        {proj.category} | {proj.year || '2026'}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      {proj.description}
                    </p>

                    <div className="text-[11px] text-purple-300/80 mb-3 font-mono">
                      <strong className="text-purple-200">Technologies / Focus:</strong> {proj.tags.join(', ')}
                    </div>
                  </div>

                  {proj.url && proj.url.startsWith('http') && (
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 shadow-[0_0_10px_rgba(168,85,247,0.3)] transition-all w-fit mt-1"
                    >
                      <span>Click to Open Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </SpotlightCard>
        </SectionReveal>

        {/* SECTION 6: SERVICES & CAPABILITIES */}
        <SectionReveal delay={0.3}>
          <SpotlightCard className="p-7 sm:p-8 border-purple-500/30">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-purple-900/30">
              <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-400/40 flex items-center justify-center">
                <Layers className="w-5 h-5 text-purple-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  SERVICES &amp; CAPABILITIES
                </h3>
                <p className="text-xs text-purple-300 font-medium">Six Core Competency Areas</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES_DATA.map((srv) => (
                <div
                  key={srv.id}
                  className="p-4 rounded-xl bg-[#120e29] border border-purple-500/20 hover:border-purple-400/40 transition-colors"
                >
                  <h4 className="text-sm font-bold text-purple-300 mb-2 font-display">
                    {srv.title}
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {srv.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-purple-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </SectionReveal>

        {/* SECTION 7: EDUCATION & CERTIFICATIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* EDUCATION */}
          <SectionReveal delay={0.35}>
            <SpotlightCard className="p-7 sm:p-8 h-full border-purple-500/30">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-purple-900/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-400/40 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">EDUCATION</h3>
                    <p className="text-xs text-purple-300 font-medium">Academic Track Record</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-purple-300">2024 – 2027</span>
              </div>

              <div className="space-y-4">
                {EDUCATION_DATA.map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-[#120e29] border border-purple-500/20">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono text-purple-300 font-semibold">{item.period}</span>
                      {item.status && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                          {item.status}
                        </span>
                      )}
                    </div>
                    <h4 className="text-base font-bold text-white font-display">{item.title}</h4>
                    <p className="text-xs text-purple-300 mt-0.5">
                      {item.institution} — <span className="text-slate-400">{item.boardOrStream}</span>
                    </p>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </SectionReveal>

          {/* CERTIFICATIONS */}
          <SectionReveal delay={0.4}>
            <SpotlightCard className="p-7 sm:p-8 h-full border-purple-500/30">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-purple-900/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-400/40 flex items-center justify-center">
                    <Award className="w-5 h-5 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">CERTIFICATIONS</h3>
                    <p className="text-xs text-purple-300 font-medium">Accredited Professional Credentials</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-purple-300">Verified</span>
              </div>

              <div className="space-y-3">
                {CERTIFICATIONS_DATA.map((cert) => (
                  <div
                    key={cert.title}
                    className="p-3.5 rounded-xl bg-[#120e29] border border-purple-500/20 flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-white font-display">{cert.title}</h4>
                      <p className="text-xs text-purple-300 mt-0.5">{cert.issuer} | {cert.badge}</p>
                    </div>
                    <span className="text-[10px] px-2.5 py-1 rounded-full bg-purple-900/50 text-purple-200 border border-purple-400/30 font-semibold">
                      Certified
                    </span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </SectionReveal>
        </div>

        {/* SECTION 8: DESIGN & CREATIVE SKILLS */}
        <SectionReveal delay={0.45}>
          <SpotlightCard className="p-7 sm:p-8 border-purple-500/30">
            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-purple-900/30">
              <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-400/40 flex items-center justify-center">
                <Palette className="w-5 h-5 text-purple-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  DESIGN &amp; CREATIVE SKILLS
                </h3>
                <p className="text-xs text-purple-300 font-medium">Software Mastery &amp; Production Competencies</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {GRAPHIC_DESIGN_SKILLS.map((skill) => (
                <div key={skill.name} className="p-3 rounded-xl bg-[#120e29] border border-purple-500/20 text-center">
                  <div className="text-sm font-bold text-white">{skill.name}</div>
                  <div className="text-xs text-purple-300 font-semibold mt-1">({skill.level}%)</div>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </SectionReveal>

        {/* SECTION 9: COURSES & CONTINUOUS LEARNING */}
        <SectionReveal delay={0.5}>
          <SpotlightCard className="p-7 sm:p-8 border-purple-500/30">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-purple-900/30">
              <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-400/40 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-purple-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  COURSES &amp; CONTINUOUS LEARNING
                </h3>
                <p className="text-xs text-purple-300 font-medium">Ongoing Technical &amp; Growth Disciplines</p>
              </div>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed">
              AI | Generative AI | Google and Meta Ads | Digital Marketing | Website Designing | Website Developing | Website Deployment | Web Application | Mobile Application | Automation | AI Automation | How to Make AI Agents | YouTube, Instagram, Facebook Automation &amp; Posting | Job Search Automation | Telegram Chat Bot | Voice Agent | Meeting Schedule Automation.
            </p>
          </SpotlightCard>
        </SectionReveal>

      </div>

      {/* FULL RESUME MODAL VIEWER ("CLICK TO SEE RESUME") */}
      <AnimatePresence>
        {isResumeModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c081e] border border-purple-400/50 rounded-3xl shadow-[0_0_60px_rgba(168,85,247,0.35)] flex flex-col overflow-hidden text-left"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-purple-500/30 bg-[#140e2e]/95">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-200">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white font-display">
                      MD ABDUL RAHEEM — Complete Official Resume
                    </h3>
                    <p className="text-[11px] text-purple-300">
                      Digital Marketing | AI Automation | AI Agents | Web &amp; Digital Creative
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleDownloadCV}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Download (.docx)</span>
                  </button>

                  <a
                    href="/MD_Abdul_Raheem_Resume.html"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-purple-200 bg-purple-950/70 border border-purple-500/30 hover:border-purple-400 transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Print / PDF</span>
                  </a>

                  <button
                    onClick={() => setIsResumeModalOpen(false)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-purple-900/50 transition-colors ml-1"
                    aria-label="Close Resume"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Scrollable Resume Content */}
              <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-200 text-xs sm:text-sm leading-relaxed">
                {/* Header Information */}
                <div className="text-center pb-5 border-b border-purple-500/25">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display uppercase tracking-wide">
                    MD ABDUL RAHEEM
                  </h2>
                  <p className="text-xs sm:text-sm font-bold text-purple-300 uppercase tracking-widest mt-1">
                    DIGITAL MARKETING | AI AUTOMATION | AI AGENTS | WEB &amp; DIGITAL CREATIVE
                  </p>
                  <p className="text-xs text-slate-300 mt-2">
                    +91 78429 06002 | mdabdulraheemmar@gmail.com | Hyderabad, Telangana, India
                  </p>
                </div>

                {/* Professional Summary */}
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-purple-300 mb-2 border-b border-purple-500/20 pb-1">
                    PROFESSIONAL SUMMARY
                  </h4>
                  <p className="text-slate-300">
                    Digital-focused hands-on experience across Digital Marketing, AI automation, AI agents, Web Development, Graphic Design, and Digital growth solutions. Experienced in building Automation Workflows and agent-based solutions for Telegram, WhatsApp, Calendar scheduling, YouTube, Instagram, Facebook/Content Workflows, and job-search/outreach processes. Also experienced in Social Media management, Google Ads, Meta Ads, Campaign Creatives, Content Planning, Website development, SEO, GEO, AEO and Responsive digital experiences. Currently pursuing Intermediate 2nd Year (CEC), With Certified Training in Digital Marketing, AI Builder Mastery, Graphic Designing, and MS Office.
                  </p>
                </div>

                {/* Core Competencies */}
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-purple-300 mb-2 border-b border-purple-500/20 pb-1">
                    CORE COMPETENCIES
                  </h4>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                    <li><strong className="text-white">Digital Marketing:</strong> Digital Marketing | Social Media Management &amp; Posting | Social Media Content Planning | Google Ads | Meta Ads | Facebook Ads | Instagram Ads | Campaign Management | Ad Optimization | Audience Targeting | Performance Monitoring | SEO, GEO, AEO.</li>
                    <li><strong className="text-white">AI Automation &amp; Agents:</strong> AI Automation | AI Agents | Agentic AI Workflows | Workflow Automation | Telegram Chatbots | WhatsApp Chatbots | Calendar &amp; Meeting Scheduling Automation | YouTube, Instagram, Facebook Automation | Job Search Automation &amp; Outreach | Voice Agents</li>
                    <li><strong className="text-white">Web Development:</strong> Web Development | Responsive Web Design | React | Next.js | Tailwind CSS | Mobile App | Web Applications | Progressive Web Apps (PWA) | API Integrations | Cloud Deployment</li>
                    <li><strong className="text-white">Graphic Design &amp; Branding:</strong> Graphic Design | Brand Identity | Adobe Illustrator | Adobe Photoshop | Adobe Premiere | Canva | Photo Editing &amp; Video Editing | Poster Design | Logo Design | Flyer Design</li>
                  </ul>
                </div>

                {/* Professional Experience */}
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-purple-300 mb-2 border-b border-purple-500/20 pb-1">
                    PROFESSIONAL EXPERIENCE
                  </h4>
                  <div className="space-y-3">
                    <ul className="list-disc list-inside space-y-1 text-slate-300">
                      <li>Lead digital projects spanning Digital Marketing, AI automation, AI-agent workflows, Web Platforms, Branding, and creative assets for business use cases.</li>
                      <li>Build and deploy automation solutions including Telegram and WhatsApp chatbot concepts, Meeting/Calendar scheduling workflows, YouTube, Instagram, Facebook/Content automations, and job-search/outreach automation.</li>
                      <li>Develop digital marketing solutions covering Social Media account handling and Posting, content planning, professional social creatives, Google Ads, Meta Ads, Audience Targeting, campaign management, performance monitoring, and Ad optimization.</li>
                      <li>Design and develop responsive web platforms using modern web architecture, with experience across React/Next.js concepts, Tailwind CSS, e-commerce interfaces, SEO, GEO, AEO, Animations, API integrations, and Cloud deployment.</li>
                      <li>Created and managed a portfolio of live web and Digital Projects.</li>
                      <li>Produced 50+ commercial graphic design assets across Photoshop, Illustrator, and Canva, according to the portfolio.</li>
                    </ul>

                    <div className="pt-2">
                      <div className="flex items-center justify-between text-white font-bold">
                        <span>Web &amp; Graphic Design Project Specialist | Freelance &amp; Creative Labs | Hyderabad, India</span>
                        <span className="text-xs text-purple-300 font-mono">2024 – 2025</span>
                      </div>
                      <ul className="list-disc list-inside mt-1 space-y-1 text-slate-300">
                        <li>Executed end-to-end poster campaigns, corporate stationery, Digital Marketing Banners, Logos, flyers, and Customized front-end interfaces.</li>
                        <li>Applied graphic design and office-software skills to business and event-oriented creative work.</li>
                        <li>Completed specialized certifications in Graphic Designing and MS Office Professional.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Digital Marketing & AI Automation Focus */}
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-purple-300 mb-2 border-b border-purple-500/20 pb-1">
                    DIGITAL MARKETING &amp; AI AUTOMATION FOCUS
                  </h4>
                  <p className="text-slate-300">
                    Primary focus areas: Digital Marketing strategy and execution, Social Media Management, Google Ads, Meta Ads, campaign optimization, AI automation, AI agents, Chatbot Workflows, Scheduling automation, Content/YouTube, Instagram, Facebook automation, and job-search/outreach automation.
                  </p>
                </div>

                {/* Selected Projects */}
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-purple-300 mb-2 border-b border-purple-500/20 pb-1">
                    SELECTED PROJECTS
                  </h4>
                  <div className="space-y-2.5">
                    {/* 1 */}
                    <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/25">
                      <div className="font-bold text-white">AI Autonomous Agents &amp; Bots | AI &amp; Tools | 2026</div>
                      <p className="text-xs text-slate-300 mt-1">Autonomous Telegram chatbots, Calendar Scheduling Automation, and YouTube pipeline automations designed for 24/7 client response and automated productivity. | <em>Technologies / Focus: Telegram Bot, Agentic AI, Automation, Workflows</em></p>
                    </div>

                    {/* 2 */}
                    <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/25">
                      <div className="font-bold text-white">Commercial Posters &amp; Brand Identity | Graphic Design | 2026</div>
                      <p className="text-xs text-slate-300 mt-1">Commercial poster designs, corporate branding collateral, flyer campaigns, and digital assets created using Adobe Photoshop and Illustrator. | <em>Technologies / Focus: Photoshop, Illustrator, Poster Design, Brand Guidelines</em></p>
                    </div>

                    {/* 3 */}
                    <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-bold text-white">MAR Architectural Studio | Architecture &amp; Design | 2026</span>
                        <p className="text-xs text-slate-300 mt-0.5">Architecture studio website presenting architectural design and structural engineering services in a professional, service-focused digital presence. | <em>Technologies / Focus: Architecture, Service Presentation, Responsive Web Design, SEO</em></p>
                      </div>
                      <a
                        href="https://mar-architectural-studio.vercel.app"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shrink-0"
                      >
                        <span>Click to Open Website</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    {/* 4 */}
                    <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-bold text-white">Mar Cloths | Fashion &amp; Retail | 2026</span>
                        <p className="text-xs text-slate-300 mt-0.5">Premium fashion showroom website focused on clothing collections and bespoke apparel, with a polished brand presentation for customer discovery. | <em>Technologies / Focus: Fashion Retail, Clothing Showcase, Brand Identity, Responsive Design</em></p>
                      </div>
                      <a
                        href="https://marcloths.vercel.app"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shrink-0"
                      >
                        <span>Click to Open Website</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    {/* 5 */}
                    <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-bold text-white">Kage Sage | Web Design | 2026</span>
                        <p className="text-xs text-slate-300 mt-0.5">Atmospheric digital experience built around the theme “Where stillness reveals the unseen,” emphasizing visual storytelling and a distinctive brand presentation. | <em>Technologies / Focus: Visual Storytelling, Brand Experience, Responsive UI, Web Design</em></p>
                      </div>
                      <a
                        href="https://kage-sage.vercel.app"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shrink-0"
                      >
                        <span>Click to Open Website</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    {/* 6 */}
                    <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-bold text-white">Footwear Emporium | E-Commerce | 2026</span>
                        <p className="text-xs text-slate-300 mt-0.5">Sneaker and athletic footwear e-commerce application concept with product styling, filtering, and cart ordering. | <em>Technologies / Focus: E-Commerce, Sneaker Boutique, Dynamic Filtering, Modern UI</em></p>
                      </div>
                      <a
                        href="https://footwearemporium.lovable.app"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shrink-0"
                      >
                        <span>Click to Open Website</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    {/* 7 */}
                    <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-bold text-white">Mar Enterprise | Web Design | 2025</span>
                        <p className="text-xs text-slate-300 mt-0.5">Corporate web ecosystem for M.A.R Enterprise showcasing digital creative services, agency portfolio, and brand solutions. | <em>Technologies / Focus: React, Tailwind CSS, Enterprise UI, Brand Identity</em></p>
                      </div>
                      <a
                        href="https://marenterprise.lovable.app"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shrink-0"
                      >
                        <span>Click to Open Website</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    {/* 8 */}
                    <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-bold text-white">Cafe Story | Web Design | 2026</span>
                        <p className="text-xs text-slate-300 mt-0.5">Culinary and cafe web ecosystem featuring beverage showcases, interactive menus, ambience storytelling, and digital customer reservation flows. | <em>Technologies / Focus: Google UI, Culinary Web, Interactive Menu, Brand Experience</em></p>
                      </div>
                      <a
                        href="https://cafestory.ai.studio"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shrink-0"
                      >
                        <span>Click to Open Website</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    {/* 9 */}
                    <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-bold text-white">Mar Watch Enterprise | E-Commerce | 2026</span>
                        <p className="text-xs text-slate-300 mt-0.5">Luxury horology storefront concept with editorial typography, product showcasing, interactive catalogue, and checkout experience. | <em>Technologies / Focus: E-Commerce, Luxury UI, Product Showcase, Modern Web</em></p>
                      </div>
                      <a
                        href="https://marwatchenterprise.lovable.app"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shrink-0"
                      >
                        <span>Click to Open Website</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    {/* 10 */}
                    <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-bold text-white">Mar Cloths | E-Commerce | 2026</span>
                        <p className="text-xs text-slate-300 mt-0.5">Fashion apparel destination concept with responsive lookbooks, seasonal collections, trend filters, and customer shopping flow. | <em>Technologies / Focus: Apparel, Fashion E-Commerce, Responsive Design, Creative UI</em></p>
                      </div>
                      <a
                        href="https://marcloths.lovable.app"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shrink-0"
                      >
                        <span>Click to Open Website</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    {/* 11 */}
                    <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-bold text-white">Mar Tourism | Web Design | 2026</span>
                        <p className="text-xs text-slate-300 mt-0.5">Travel portal concept featuring destination discovery, itinerary highlights, interactive tour booking, and imagery curation. | <em>Technologies / Focus: Travel &amp; Tourism, Destination Booking, Full-Stack App, UX</em></p>
                      </div>
                      <a
                        href="https://martourism.base44.app"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shrink-0"
                      >
                        <span>Click to Open Website</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    {/* 12 */}
                    <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-bold text-white">Raheem Cursor | AI &amp; Tools | 2026</span>
                        <p className="text-xs text-slate-300 mt-0.5">Developer showcase and productivity interface demonstrating micro-interactions, responsive tools, and AI workflows. | <em>Technologies / Focus: AI Tools, Developer Suite, Next-Gen UI, Automation</em></p>
                      </div>
                      <a
                        href="https://raheemcursor.lovable.app"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shrink-0"
                      >
                        <span>Click to Open Website</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Services & Capabilities */}
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-purple-300 mb-2 border-b border-purple-500/20 pb-1">
                    SERVICES &amp; CAPABILITIES
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                    <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-500/20">
                      <strong className="text-white block mb-1">Digital Marketing &amp; Creative Assets</strong>
                      High-converting ad creatives | Social media visual strategy | Campaign banners &amp; thumbnails | Brand style guides &amp; assets | Growth metric tracking
                    </div>
                    <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-500/20">
                      <strong className="text-white block mb-1">AI Agents &amp; Workflow Automation</strong>
                      Custom AI autonomous agents | Telegram &amp; WhatsApp chatbots | Meeting &amp; calendar scheduling bots | YouTube, Instagram, Facebook&amp; content automations | Automated job search &amp; outreach
                    </div>
                    <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-500/20">
                      <strong className="text-white block mb-1">Website Design &amp; Development</strong>
                      Mobile-first responsive layouts | React &amp; Next.js architecture | E-commerce/storefront platforms | Interactive UI micro-animations | Performance &amp; SEO optimization
                    </div>
                    <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-500/20">
                      <strong className="text-white block mb-1">Web &amp; Mobile Applications</strong>
                      Progressive Web Apps (PWA) | Cross-platform mobile experiences | API integrations &amp; cloud backends | Real-time dashboard analytics | Secure authentication &amp; user states
                    </div>
                    <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-500/20">
                      <strong className="text-white block mb-1">Website Deployment &amp; Support</strong>
                      Cloud deployment &amp; CDN setup | Domain DNS &amp; SSL configuration | Performance monitoring &amp; backups | Security audits &amp; patch updates | Dedicated client support
                    </div>
                    <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-500/20">
                      <strong className="text-white block mb-1">Graphic Designing &amp; Branding</strong>
                      Custom logo &amp; brand identity | Event posters &amp; social creatives | Corporate flyers &amp; stationery | Advanced Photoshop retouching | Adobe Illustrator vector graphics
                    </div>
                  </div>
                </div>

                {/* Education & Certifications */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-purple-300 mb-2 border-b border-purple-500/20 pb-1">
                      EDUCATION
                    </h4>
                    <ul className="space-y-1.5 text-slate-300 text-xs">
                      <li><strong>Intermediate 2nd Year [CEC]</strong> | MS Junior College | 2025 – 2027 (Present) — Commerce, Economics, Civics</li>
                      <li><strong>10th – ICSE Board</strong> | Mukarram Jah School | 2024 – 2025 — ICSE Board</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-purple-300 mb-2 border-b border-purple-500/20 pb-1">
                      CERTIFICATIONS
                    </h4>
                    <ul className="space-y-1.5 text-slate-300 text-xs">
                      <li><strong>Masters in Digital Marketing</strong> | ASDC | Advanced and Mastry Certficate</li>
                      <li><strong>AI Builder Mastery</strong> | ASDC | Advanced AI Masterclass</li>
                      <li><strong>Graphic Designing</strong> | ASDC | Professional Certificate</li>
                      <li><strong>MS Office</strong> | SETWIN | Official Certification</li>
                    </ul>
                  </div>
                </div>

                {/* Design & Creative Skills */}
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-purple-300 mb-2 border-b border-purple-500/20 pb-1">
                    DESIGN &amp; CREATIVE SKILLS
                  </h4>
                  <p className="text-slate-300 text-xs">
                    Adobe Illustrator (95%) | Adobe Photoshop (92%) | Adobe Premiere (86%) | Canva (96%) | Photo Editing (94%) | Poster Designing (95%) | Logo Designing (98%) | Flyer Designing (93%)
                  </p>
                </div>

                {/* Courses & Continuous Learning */}
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-purple-300 mb-2 border-b border-purple-500/20 pb-1">
                    COURSES &amp; CONTINUOUS LEARNING
                  </h4>
                  <p className="text-slate-300 text-xs">
                    AI | Generative AI | Google and Meta Ads | Digital Marketing | Website Designing | Website Developing | Website Deployment | Web Application | Mobile Application | Automation | AI Automation | How to Make AI Agents | YouTube, Instagram, Facebook Automation &amp; Posting | Job Search Automation | Telegram Chat Bot | Voice Agent | Meeting Schedule Automation.
                  </p>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-purple-500/30 bg-[#140e2e]/95 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">MD ABDUL RAHEEM • Hyderabad, India</span>
                <button
                  onClick={() => setIsResumeModalOpen(false)}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-purple-900/60 hover:bg-purple-800/80 border border-purple-400/30 transition-all"
                >
                  Close Resume
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
