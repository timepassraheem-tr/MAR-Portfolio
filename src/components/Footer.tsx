import React from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ArrowUp, Heart } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { NavRoute } from './Navbar';
import { PERSONAL_INFO } from '../data/portfolio';

interface FooterProps {
  onRouteChange: (route: NavRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { label: string; route: NavRoute }[] = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Services', route: '/services' },
    { label: 'Work with M.A.R', route: '/work-with-mar' },
    { label: 'Works', route: '/works' },
    { label: 'Resume', route: '/resume' },
    { label: 'Contact', route: '/contact' },
  ];

  return (
    <footer className="relative mt-24 border-t border-purple-900/30 bg-[#070712] overflow-hidden">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand & Monogram Column */}
          <div className="space-y-4 lg:col-span-1">
            <button
              onClick={() => {
                onRouteChange('/');
                scrollToTop();
              }}
              className="focus:outline-none"
            >
              <BrandLogo size="md" />
            </button>
            <p className="text-sm text-slate-400 leading-relaxed">
              M.A.R Enterprise — Premium digital portfolio of MD Abdul Raheem. Fusing creative graphic design, modern web platforms, and intelligent automation.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="mailto:marenterprise07@gmail.com"
                className="w-9 h-9 rounded-lg bg-purple-950/40 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400 hover:bg-purple-900/50 flex items-center justify-center transition-all shadow-[0_0_10px_rgba(168,85,247,0.15)]"
                aria-label="Email MD Abdul Raheem"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+919182835781"
                className="w-9 h-9 rounded-lg bg-purple-950/40 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400 hover:bg-purple-900/50 flex items-center justify-center transition-all shadow-[0_0_10px_rgba(168,85,247,0.15)]"
                aria-label="Call MD Abdul Raheem"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/marenterprise07"
                target="_blank"
                rel="noreferrer noopener"
                className="w-9 h-9 rounded-lg bg-purple-950/40 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400 hover:bg-purple-900/50 flex items-center justify-center transition-all shadow-[0_0_10px_rgba(168,85,247,0.15)]"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer noopener"
                className="w-9 h-9 rounded-lg bg-purple-950/40 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400 hover:bg-purple-900/50 flex items-center justify-center transition-all shadow-[0_0_10px_rgba(168,85,247,0.15)]"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                className="w-9 h-9 rounded-lg bg-purple-950/40 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400 hover:bg-purple-900/50 flex items-center justify-center transition-all shadow-[0_0_10px_rgba(168,85,247,0.15)]"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-300 font-display">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.route}>
                  <button
                    onClick={() => {
                      onRouteChange(link.route);
                      scrollToTop();
                    }}
                    className="text-sm text-slate-400 hover:text-purple-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 group-hover:scale-125 transition-all" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-300 font-display">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>{PERSONAL_INFO.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-purple-300 transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-purple-300 transition-colors truncate">
                  {PERSONAL_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Working Status & Scroll to top */}
          <div className="space-y-4 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-300 font-display">
                Current Availability
              </h4>
              <div className="mt-2.5 p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/25">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-emerald-300">Available for Freelance & Projects</span>
                </div>
                <p className="text-xs text-slate-400 mt-1.5">
                  Open for new website commissions, brand redesigns, and AI automation setups.
                </p>
              </div>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#141228] border border-purple-500/30 text-purple-200 hover:text-white hover:border-purple-400 hover:bg-purple-900/30 transition-all text-xs font-semibold group shadow-[0_0_12px_rgba(0,0,0,0.5)]"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with exact required copyright */}
        <div className="mt-12 pt-8 border-t border-purple-900/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 MD Abdul Raheem. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-purple-400 fill-purple-400/40 inline" />
            <span>at</span>
            <span className="text-purple-300 font-medium">M.A.R Enterprise</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
