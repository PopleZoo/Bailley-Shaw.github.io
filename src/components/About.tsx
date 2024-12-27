import { motion } from 'framer-motion';
import { Award, Code, Gamepad2, Trophy } from 'lucide-react';
import { skills } from './About/skillsData'; // Importing skills data

const achievements = [
  {
    year: "2023",
    title: "3 Million Downlods Past",
    description: "Better Item Scan past 3 million downloads",
    icon: Trophy,
  },
];

export default function About() {
  return (
    <section className="py-20 bg-gray-800" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-6 bg-gray-900 rounded-xl border border-purple-500/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <Gamepad2 className="w-8 h-8 text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">About Me</h2>
              </div>
              
              <p className="text-gray-300 mb-6">
              A recent game development graduate, I have experience with Unity and Unreal Engine, creating engaging gameplay and solving technical challenges. 
              My projects demonstrate my ability to deliver polished results, meet deadlines, and continuously improve my skills.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6"> {/* Engines and Frameworks */}
                {skills.enginesFrameworks.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="p-3 bg-gray-800 rounded-lg text-center"
                  >
                    <p className="text-purple-400 font-medium">{skill.name}</p> {/* Accessing skill name */}
                  </motion.div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6"> {/* Engines and Frameworks */}
                {skills.languages.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="p-3 bg-gray-800 rounded-lg text-center"
                  >
                    <p className="text-purple-400 font-medium">{skill.name}</p> {/* Accessing skill name */}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Achievements</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 bg-gray-900 rounded-lg border border-purple-500/20"
                >
                  <div className="p-2 bg-purple-500/10 rounded-lg h-fit">
                    <achievement.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-purple-400 text-sm">{achievement.year}</p>
                    <h4 className="text-white font-medium mb-1">{achievement.title}</h4>
                    <p className="text-gray-400 text-sm">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}