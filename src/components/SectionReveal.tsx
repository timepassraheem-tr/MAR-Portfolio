import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  id?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  blur?: boolean;
}

export const SectionReveal: React.FC<SectionRevealProps> = ({
  children,
  delay = 0,
  className = '',
  id,
  direction = 'up',
  blur = true,
}) => {
  const getOffset = () => {
    switch (direction) {
      case 'up':
        return { y: 35, x: 0 };
      case 'down':
        return { y: -35, x: 0 };
      case 'left':
        return { x: 35, y: 0 };
      case 'right':
        return { x: -35, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      id={id}
      initial={{
        opacity: 0,
        scale: 0.97,
        filter: blur ? 'blur(8px)' : 'none',
        ...offset,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.16, 1, 0.3, 1], // Award-winning spring-like inertia curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
