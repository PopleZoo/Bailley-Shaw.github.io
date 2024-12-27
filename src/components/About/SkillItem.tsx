import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface SkillItemProps {
  name: string;
  icon: LucideIcon;
}

export function SkillItem({ name, icon: Icon }: SkillItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-3 bg-gray-800 rounded-lg flex items-center gap-2"
    >
      <Icon className="w-5 h-5 text-purple-400" />
      <span className="text-gray-200">{name}</span>
    </motion.div>
  );
}