import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Snappy yet smooth spring physics
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none">
      {/* Background track indicator (very subtle) */}
      <div className="absolute inset-0 bg-purple-950/20" />

      {/* Primary Glowing Progress Beam */}
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-purple-600 via-fuchsia-500 to-violet-400 shadow-[0_0_12px_rgba(192,132,252,0.9)]"
        style={{ scaleX }}
      />

      {/* Accent Laser Glow Dot at current progress edge */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 -ml-1.5 w-3 h-3 rounded-full bg-white shadow-[0_0_14px_4px_rgba(232,121,249,0.9)] pointer-events-none"
        style={{
          left: useSpring(
            scrollYProgress,
            { stiffness: 140, damping: 30, restDelta: 0.001 }
          ),
          opacity: useSpring(
            scrollYProgress,
            { stiffness: 200, damping: 25 }
          ),
        }}
      />
    </div>
  );
};
