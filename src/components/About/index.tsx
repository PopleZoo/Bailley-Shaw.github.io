import { motion } from 'framer-motion';
import { Bio } from './Bio';
import { SkillCategory } from './SkillCategory';
import { SkillItem } from './SkillItem';
import { skills } from './skillsData';

export default function About() {
  return (
    <section className="py-20 bg-gray-800" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <Bio />
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
            
            <SkillCategory title="Languages">
              {skills.languages.map((skill, index) => (
                <SkillItem key={index} {...skill} />
              ))}
            </SkillCategory>
            
            <SkillCategory title="Engines & Frameworks">
              {skills.enginesFrameworks.map((skill, index) => (
                <SkillItem key={index} {...skill} />
              ))}
            </SkillCategory>
            
            <SkillCategory title="Tools">
              {skills.tools.map((skill, index) => (
                <SkillItem key={index} {...skill} />
              ))}
            </SkillCategory>
            
            <SkillCategory title="Fields">
              {skills.fields.map((skill, index) => (
                <SkillItem key={index} {...skill} />
              ))}
            </SkillCategory>
          </motion.div>
        </div>
      </div>
    </section>
  );
}