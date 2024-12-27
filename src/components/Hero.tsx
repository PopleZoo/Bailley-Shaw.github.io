import { motion } from 'framer-motion';
import { Gamepad, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f')] opacity-10 bg-cover bg-center" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 pt-32 relative z-10"
      >
        <div className="flex flex-col items-center text-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="mb-8"
          >
            <Gamepad size={64} className="text-purple-400" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Bailley Shaw{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Game Programmer
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mb-12">
            Game developer and digital artist creating immersive experiences that push the boundaries of interactive entertainment
          </p>
          
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-3 bg-purple-600 text-white rounded-lg overflow-hidden transition-all hover:bg-purple-700"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects <Sparkles className="w-4 h-4" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity" />
          </motion.a>
        </div>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
}