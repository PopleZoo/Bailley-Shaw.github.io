import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export function Bio() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="p-6 bg-gray-800 rounded-xl border border-purple-500/20"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-purple-500/10 rounded-lg">
          <GraduationCap className="w-8 h-8 text-purple-400" />
        </div>
        <h2 className="text-3xl font-bold text-white">About Me</h2>
      </div>
      
      <p className="text-gray-300 mb-6">
        As a graduate of UCLAN with a BSc in Computer Games, I am passionate about designing 
        and creating immersive experiences that captivate players. My education has equipped 
        me with a strong foundation in game development, and my hands-on experience has honed 
        my skills in both independent and collaborative settings. I am dedicated to delivering 
        high-quality results that not only meet but exceed the expectations of my clients. 
        My goal is to combine creativity with technical expertise to craft engaging and 
        memorable gaming experiences.
      </p>
    </motion.div>
  );
}