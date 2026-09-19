import React, { useRef, useState } from 'react';
import { ExternalLink, ArrowUpRight, Sparkles, Globe, Laptop } from 'lucide-react';
import { Project } from '../data/portfolio';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imageError, setImageError] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="spotlight-card group rounded-2xl glass-card border border-purple-500/20 hover:border-purple-400/60 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(147,51,234,0.2)] flex flex-col h-full overflow-hidden"
    >
      {/* Project Preview Image / Mockup Area */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-[#1b1433] via-[#100d24] to-[#0a0718] border-b border-purple-500/20">
        
        {/* Ambient glow in corner */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />

        {/* Clean Mockup UI / Photo Presentation */}
        {!imageError ? (
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={project.image || `/projects/${project.id}.png`}
              alt={project.title}
              onError={() => setImageError(true)}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.92] group-hover:brightness-100"
              loading="lazy"
            />
            {/* Gradient bottom shadow to ensure seamless contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0718] via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity" />
          </div>
        ) : null}

        {imageError && (
          <div className="absolute inset-0 p-5 flex flex-col justify-between select-none">
            {/* Browser top-bar mockup */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="px-2.5 py-0.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-[10px] text-purple-300 font-mono flex items-center gap-1">
                <Globe className="w-2.5 h-2.5" />
                <span>{project.url.replace('https://', '')}</span>
              </div>
            </div>

            {/* Centered App Identity */}
            <div className="flex flex-col items-center justify-center my-auto text-center px-4">
              <div className="w-12 h-12 rounded-xl bg-purple-900/50 border border-purple-400/40 flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform">
                <Laptop className="w-6 h-6 text-purple-300" />
              </div>
              <h4 className="text-lg font-bold text-white font-display tracking-tight group-hover:text-purple-200 transition-colors">
                {project.title}
              </h4>
              <p className="text-xs text-purple-300/80 font-medium line-clamp-1 mt-0.5">
                {project.tagline}
              </p>
            </div>

            {/* Footer status in mockup */}
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1 text-purple-400 font-medium">
                <Sparkles className="w-3 h-3" /> Live Application
              </span>
              <span className="text-[10px] text-slate-400">M.A.R Ecosystem</span>
            </div>
          </div>
        )}

        {/* Category Badge (Top Right) */}
        <div className="absolute top-3.5 right-3.5 z-10">
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-[#0b0819]/80 backdrop-blur-md border border-purple-400/40 text-purple-200 shadow-md">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex flex-col flex-grow justify-between gap-5 relative z-10">
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl font-bold text-white font-display group-hover:text-purple-300 transition-colors tracking-tight">
              {project.title}
            </h3>
            <span className="text-xs text-purple-400/80 font-mono font-medium">
              2026
            </span>
          </div>

          <p className="text-sm text-slate-300/90 leading-relaxed mt-2.5">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-purple-950/40 border border-purple-500/20 text-purple-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Button: View Project */}
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer noopener"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-700/80 via-violet-600/80 to-purple-800/80 hover:from-purple-600 hover:to-violet-600 border border-purple-400/30 shadow-[0_0_15px_rgba(147,51,234,0.25)] hover:shadow-[0_0_25px_rgba(168,85,247,0.45)] transition-all duration-200 group/btn"
          >
            <span>View Project</span>
            <ExternalLink className="w-4 h-4 text-purple-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};
