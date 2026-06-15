import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const HeroProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative w-full max-w-md mx-auto mt-10 md:mt-0"
    >
      {/* Glow effect behind the card */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan via-electric to-fpt rounded-2xl blur-xl opacity-30 animate-pulse"></div>
      
      <motion.div 
        className="relative bg-dark/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-3 border-b border-white/10 bg-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="mx-auto text-xs font-mono text-gray-400">developer.json</div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm leading-relaxed">
          <div className="text-gray-300">
            <span className="text-pink-400">const</span> <span className="text-blue-400">profile</span> <span className="text-pink-400">=</span> {'{'}
          </div>
          <div className="pl-6">
            <div><span className="text-cyan">"name"</span>: <span className="text-yellow-300">"Ha Vu Long"</span>,</div>
            <div><span className="text-cyan">"role"</span>: <span className="text-yellow-300">"Fullstack Developer"</span>,</div>
            <div><span className="text-cyan">"university"</span>: <span className="text-yellow-300">"FPT University (K18)"</span>,</div>
            <div><span className="text-cyan">"skills"</span>: [</div>
            <div className="pl-6 text-yellow-300">
              <Typewriter
                words={['"React JS", "Tailwind CSS", "Framer Motion"', '"Java", "Spring Boot", "MySQL"', '"Fullstack Development"']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={2000}
              />
            </div>
            <div>],</div>
            <div><span className="text-cyan">"status"</span>: <span className="text-green-400">"Open to work"</span></div>
          </div>
          <div className="text-gray-300">{'}'};</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroProfileCard;
