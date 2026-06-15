import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    { name: 'React JS', color: 'text-[#61DAFB]', border: 'hover:border-[#61DAFB]' },
    { name: 'Tailwind CSS', color: 'text-[#38B2AC]', border: 'hover:border-[#38B2AC]' },
    { name: 'JavaScript', color: 'text-[#F7DF1E]', border: 'hover:border-[#F7DF1E]' },
    { name: 'Java', color: 'text-[#f89820]', border: 'hover:border-[#f89820]' },
    { name: 'Spring Boot', color: 'text-[#6DB33F]', border: 'hover:border-[#6DB33F]' },
    { name: 'MySQL', color: 'text-[#4479A1]', border: 'hover:border-[#4479A1]' },
    { name: 'Git', color: 'text-[#F05032]', border: 'hover:border-[#F05032]' },
    { name: 'Figma', color: 'text-[#F24E1E]', border: 'hover:border-[#F24E1E]' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-light/50 dark:bg-deepDark/50 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fpt to-electric">Tech Stack</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 transition-colors duration-500">Những công nghệ tôi sử dụng để hiện thực hóa ý tưởng.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
              className={`glass-panel px-6 py-4 rounded-xl cursor-default transition-colors duration-300 ${tech.border}`}
            >
              <span className={`text-xl font-bold ${tech.color} tracking-wider drop-shadow-md`}>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-fpt/10 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
};

export default TechStack;
