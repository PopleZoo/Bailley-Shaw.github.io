import { motion, useMotionValue, animate } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { useEffect } from 'react';
import type { Project } from './types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export function ProjectCard({ project, index }: ProjectCardProps) {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);


  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }} // Move the card up when hovered
      className="relative bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Image Section with Gradient Overlay */}
      <div className="relative w-full h-64 overflow-hidden">
        {/* Apply the gradient overlay on top of the image */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" 
        />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="px-3 py-1 text-sm bg-purple-900/50 text-purple-300 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Play className="w-4 h-4" /> Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" /> Code
            </a>
          )}
          {project.detailsUrl && (
            <a
              href={project.detailsUrl}
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" /> Details
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
