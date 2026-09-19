import React, { useState, useEffect } from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import regeneratedPortrait1 from '../assets/images/regenerated_image_1789484218837.png';
import regeneratedPortrait2 from '../assets/images/regenerated_image_1789484221607.png';
import legacyPortrait from '../assets/images/raheem_portrait_1789044026754.jpg';

interface PortraitAssetProps {
  className?: string;
  showBadges?: boolean;
  imageSrc?: string;
}

// Candidate sources for MD Abdul Raheem's portrait
const CANDIDATE_SOURCES = [
  regeneratedPortrait1,
  regeneratedPortrait2,
  '/portrait.png',
  '/portrait.jpg',
  legacyPortrait,
];

export const PortraitAsset: React.FC<PortraitAssetProps> = ({
  className = '',
  showBadges = true,
  imageSrc,
}) => {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [imgSrc, setImgSrc] = useState<string>(imageSrc || CANDIDATE_SOURCES[0]);

  // Sync if imageSrc prop changes
  useEffect(() => {
    if (imageSrc) {
      setImgSrc(imageSrc);
    }
  }, [imageSrc]);

  // Clean any legacy localStorage photo overrides so this official portrait is permanently fixed
  useEffect(() => {
    try {
      localStorage.removeItem('mar_user_photo');
    } catch {
      // ignore
    }
  }, []);

  const handleImageError = () => {
    const nextIdx = candidateIndex + 1;
    if (nextIdx < CANDIDATE_SOURCES.length) {
      setCandidateIndex(nextIdx);
      setImgSrc(CANDIDATE_SOURCES[nextIdx]);
    }
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Outer ambient glow behind portrait */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-purple-600/30 via-violet-500/20 to-fuchsia-600/30 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

      {/* Main framed portrait container */}
      <div className="relative rounded-3xl overflow-hidden border-2 border-purple-500/35 group-hover:border-purple-400/60 bg-gradient-to-b from-[#18112e] via-[#100d24] to-[#0a0817] shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-300">
        {/* Subtle top glare / glass highlight */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-10" />

        <div className="relative w-full aspect-[3/4] min-h-[340px] sm:min-h-[420px] overflow-hidden">
          <img
            src={imgSrc}
            alt="MD Abdul Raheem - Founder, M.A.R Enterprise"
            onError={handleImageError}
            referrerPolicy="no-referrer"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
          />

          {/* Bottom dark vignette for typography & badge legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080614] via-transparent to-transparent opacity-60" />

          {/* Status indicator pill on top left */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 backdrop-blur-md border border-purple-400/40 shadow-lg text-[11px] font-semibold text-purple-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>MD Abdul Raheem</span>
          </div>
        </div>

        {/* Floating Verified Badge (Bottom Left) */}
        {showBadges && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0e0a22]/90 backdrop-blur-md border border-purple-400/35 shadow-[0_8px_20px_rgba(0,0,0,0.7)]"
          >
            <div className="w-7 h-7 rounded-lg bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Certified</p>
              <p className="text-xs font-bold text-white leading-tight">ASDC & SETWIN</p>
            </div>
          </motion.div>
        )}

        {/* Floating Innovation Badge (Bottom Right) */}
        {showBadges && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#120e2a]/90 backdrop-blur-md border border-fuchsia-500/30 shadow-[0_8px_20px_rgba(0,0,0,0.7)]"
          >
            <Award className="w-3.5 h-3.5 text-fuchsia-400" />
            <span className="text-[11px] font-semibold text-purple-200">Creative Tech</span>
          </motion.div>
        )}
      </div>
    </div>
  );
};
