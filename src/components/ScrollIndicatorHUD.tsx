import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useSmoothScroll } from './SmoothScroll';

export const ScrollIndicatorHUD: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [percent, setPercent] = useState(0);
  const { scrollYProgress } = useScroll();
  const { scrollTo } = useSmoothScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setPercent(Math.round(latest * 100));
      setIsVisible(latest > 0.08); // Reveal after 8% scroll depth
    });
  }, [scrollYProgress]);

  const handleScrollTop = () => {
    scrollTo(0, { duration: 1.2 });
  };

  // SVG ring parameters
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 select-none"
        >
          <button
            onClick={handleScrollTop}
            aria-label="Scroll to top"
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#0c0a1f]/90 backdrop-blur-xl border border-purple-500/30 hover:border-purple-400 shadow-[0_8px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {/* SVG Circular Progress Ring */}
            <svg className="w-12 h-12 -rotate-90 transform" viewBox="0 0 44 44">
              {/* Background circle track */}
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-purple-950/50"
                strokeWidth="2.5"
                fill="none"
              />
              {/* Animated Progress circle */}
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-purple-400 group-hover:stroke-fuchsia-400 transition-colors duration-300"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            {/* Centered Arrow & Percentage hover swap */}
            <div className="absolute inset-0 flex items-center justify-center">
              <ArrowUp className="w-4 h-4 text-purple-300 group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-200" />
            </div>

            {/* Hover Tooltip showing percentage */}
            <div className="absolute -top-9 right-0 px-2.5 py-1 rounded-md bg-[#16122d] border border-purple-400/30 text-[10px] font-semibold text-purple-200 shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
              {percent}% · Back to top
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
