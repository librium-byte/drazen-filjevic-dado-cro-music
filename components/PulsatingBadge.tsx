'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const PulsatingBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="inline-block bg-black text-green-500 text-sm md:text-base font-bold py-2 px-4 rounded-full mb-4 border-2 border-green-500">
      <div className="flex items-center gap-2">
        <span>👋</span>
        <span>{children}</span>
      </div>
    </div>
  );
};
