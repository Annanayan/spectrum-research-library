import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'base' | 'soft' | 'yellow';
  padding?: 'normal' | 'large';
}

const backgroundClasses = {
  base: 'bg-sr-bg-base',
  soft: 'bg-sr-bg-soft',
  yellow: 'bg-sr-bg-yellow',
};

const paddingClasses = {
  normal: 'py-16',
  large: 'py-24',
};

export default function Section({
  children,
  className = '',
  background = 'base',
  padding = 'normal'
}: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </motion.section>
  );
}