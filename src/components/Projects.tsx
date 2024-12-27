import { motion } from 'framer-motion';
import { projectsData } from './Projects/projectsData';
import { ProjectCard } from './Projects/ProjectCard'; // Import the ProjectCard component

export default function Projects() {
  return (
    <section className="py-20 bg-gray-900" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className={`col-span-1 ${projectsData.length % 3 !== 0 && index === projectsData.length - 1 ? 'lg:col-start-2' : ''}`}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
