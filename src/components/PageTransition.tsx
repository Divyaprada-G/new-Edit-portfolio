import React from 'react';
import { motion } from 'motion/react';

export const PageTransition: React.FC<{ children: React.ReactNode; pageKey: string }> = ({ children, pageKey }) => {
  return (
    <motion.div
      key={pageKey}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      className="w-full min-h-[calc(100vh-4rem)] flex flex-col"
    >
      {children}
    </motion.div>
  );
};
