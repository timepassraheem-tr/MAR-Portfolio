import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavRoute } from './Navbar';

interface PageTransitionProps {
  currentRoute: NavRoute;
  children: ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({
  currentRoute,
  children,
}) => {
  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentRoute}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full"
        >
          {/* Subtle violet sweep accent across transition */}
          <motion.div
            initial={{ scaleX: 1, originX: 0 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 1, originX: 1 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-0 bg-gradient-to-r from-[#140b28] via-[#241348] to-[#120a24] z-50 pointer-events-none opacity-60"
          />

          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
