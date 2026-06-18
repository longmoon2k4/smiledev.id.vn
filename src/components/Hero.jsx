
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Download, ChevronRight, Gamepad2 } from "lucide-react";
import HeroProfileCard from "./HeroProfileCard";
import Magnetic from "./Magnetic";

const Hero = () => {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-center lg:text-left mt-10 lg:mt-0"
        >
          <h2 className="text-xl md:text-2xl text-fpt font-medium mb-4 tracking-wide uppercase">
            Welcome to my universe
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-dark dark:text-white mb-6 leading-tight transition-colors duration-500">
            Hi, I'm <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fpt to-yellow-500 text-glow-fpt uppercase">Ha Vu Long</span>
          </h1>
          <div className="text-2xl md:text-4xl font-semibold text-gray-600 dark:text-gray-300 mb-10 h-12 lg:h-auto transition-colors duration-500">
            I'm a{' '}
            <span className="text-cyan block lg:inline mt-2 lg:mt-0">
              <Typewriter
                words={['Software Engineering Student', 'Java Backend Developer', 'React Frontend Developer']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Magnetic>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-transparent border border-fpt text-fpt rounded-full overflow-hidden transition-all duration-300 box-glow-fpt flex items-center gap-2"
              >
                <div className="absolute inset-0 bg-fpt/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                <span className="relative z-10 font-medium">Khám phá dự án</span>
                <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </Magnetic>

            <Magnetic>
              <motion.a
                href="/cv.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-cyan text-white rounded-full overflow-hidden transition-all duration-300 box-glow-cyan flex items-center gap-2"
              >
                <div className="absolute inset-0 bg-dark/10 dark:bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                <span className="relative z-10 font-bold dark:text-dark">Tải CV</span>
                <Download className="w-5 h-5 relative z-10 group-hover:-translate-y-1 transition-transform dark:text-dark" />
              </motion.a>
            </Magnetic>

            <Magnetic>
              <motion.a
                href="/minecraft"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-transparent border border-emerald-500 text-emerald-500 dark:text-emerald-400 rounded-full overflow-hidden transition-all duration-300 box-glow-emerald flex items-center gap-2"
              >
                <div className="absolute inset-0 bg-emerald-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                <span className="relative z-10 font-medium">Minecraft</span>
                <Gamepad2 className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
              </motion.a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Right Side: Profile Card (Replaces 3D) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex-1 w-full max-w-[500px] hidden lg:block"
        >
          <HeroProfileCard />
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-widest hidden md:block transition-colors duration-500">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-cyan rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
