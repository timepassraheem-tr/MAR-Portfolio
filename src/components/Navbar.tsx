import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export type NavRoute = '/' | '/about' | '/services' | '/work-with-mar' | '/works' | '/resume' | '/contact';

interface NavbarProps {
  currentRoute: NavRoute;
  onRouteChange: (route: NavRoute) => void;
}

const NAV_ITEMS: { name: string; route: NavRoute }[] = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
  { name: 'Services', route: '/services' },
  { name: 'Work with M.A.R', route: '/work-with-mar' },
  { name: 'Works', route: '/works' },
  { name: 'Resume', route: '/resume' },
  { name: 'Contact', route: '/contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onRouteChange }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (route: NavRoute) => {
    onRouteChange(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#080816]/80 backdrop-blur-xl border-b border-purple-500/20 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram Logo */}
        <button
          onClick={() => handleNavClick('/')}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-xl"
          aria-label="Navigate to Home"
        >
          <BrandLogo size="md" />
        </button>

        {/* Desktop Navigation Links with animated sliding underline */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 px-2.5 py-1.5 rounded-full bg-[#0e0e1f]/70 border border-purple-500/20 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.4)]">
          {NAV_ITEMS.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`relative px-2.5 lg:px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium whitespace-nowrap transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-purple-950/30'
                }`}
              >
                {/* Smooth animated active pill/underline */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/30 via-violet-500/25 to-purple-600/30 border border-purple-400/50 shadow-[0_0_16px_rgba(168,85,247,0.35)] -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('/contact')}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.35)] hover:shadow-[0_0_28px_rgba(168,85,247,0.55)] border border-purple-400/30 transition-all duration-200 active:scale-95"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-[#121226] border border-purple-500/30 text-purple-200 hover:text-white hover:border-purple-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 transition-colors"
            aria-label="Toggle Mobile Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-[#0a0a18]/95 backdrop-blur-2xl border-b border-purple-500/25 px-4 pt-4 pb-6 shadow-2xl"
          >
            <div className="flex flex-col gap-1.5">
              {NAV_ITEMS.map((item, index) => {
                const isActive = currentRoute === item.route;
                return (
                  <motion.button
                    key={item.route}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    onClick={() => handleNavClick(item.route)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-purple-900/35 text-white border border-purple-400/40 shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                        : 'text-slate-300 hover:text-white hover:bg-[#15152b]'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc]" />
                    )}
                  </motion.button>
                );
              })}

              <div className="pt-3 mt-2 border-t border-purple-500/20">
                <button
                  onClick={() => handleNavClick('/contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 shadow-[0_0_18px_rgba(147,51,234,0.4)]"
                >
                  <Sparkles className="w-4 h-4 text-purple-200" />
                  <span>Get In Touch</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
