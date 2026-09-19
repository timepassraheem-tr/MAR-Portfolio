import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Layers, Clock, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolio';
import { ProjectCard } from '../components/ProjectCard';
import { SectionReveal } from '../components/SectionReveal';
import { NavRoute } from '../components/Navbar';

interface WorksProps {
  onRouteChange: (route: NavRoute) => void;
}

const CATEGORIES = ['All', 'Web Design', 'E-Commerce', 'Graphic Design', 'AI & Tools'];

export const Works: React.FC<WorksProps> = ({ onRouteChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-28 pb-20 overflow-hidden">
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15102d] border border-purple-500/35 text-xs font-semibold text-purple-300 uppercase tracking-widest shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Featured Creations</span>
              </div>
              <span className="font-handwriting text-2xl text-purple-300 font-bold hidden sm:inline-block">
                Production-grade works
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display leading-tight">
              My Recent{' '}
              <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent">
                Projects & Ecosystem
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore live, production-ready web platforms, luxury e-commerce stores, and developer tools built under the M.A.R Enterprise umbrella.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#110e26]/80 border border-purple-500/30 backdrop-blur-md">
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none ${
                    isSelected
                      ? 'text-white'
                      : 'text-slate-300 hover:text-white hover:bg-purple-950/40'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="works-filter-pill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 border border-purple-400/40 shadow-[0_0_16px_rgba(168,85,247,0.45)] -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {category}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
              >
                <ProjectCard project={project} index={idx} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* MORE PROJECTS COMING SOON AREA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <SectionReveal>
          <div className="rounded-3xl p-8 sm:p-12 glass-panel border border-dashed border-purple-500/35 relative overflow-hidden text-center flex flex-col items-center justify-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-900/40 border border-purple-400/40 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              <Clock className="w-7 h-7 text-purple-300" />
            </div>

            <p className="font-handwriting text-2xl text-purple-300 font-bold">
              Continuous Expansion
            </p>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              More Projects Coming Soon
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              We are actively developing autonomous agent platforms, specialized e-commerce pipelines, and generative AI micro-apps under M.A.R Enterprise.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onRouteChange('/contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-purple-200 bg-purple-950/60 hover:bg-purple-900/80 border border-purple-500/40 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              >
                <span>Commission a Custom Build</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
};
