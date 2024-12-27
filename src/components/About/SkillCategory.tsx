import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SkillCategoryProps {
  title: string;
  children: ReactNode;
}

export function SkillCategory({ title, children }: SkillCategoryProps) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold text-purple-400 mb-3">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {children}
      </div>
    </div>
  );
}