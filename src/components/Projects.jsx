import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'License Key E-commerce',
      desc: 'Hệ thống thương mại điện tử chuyên cung cấp Key License bản quyền cho các nhà phát triển phần mềm nhỏ lẻ.',
      techs: ['React', 'Spring Boot', 'MySQL', 'Tailwind CSS'],
      github: 'https://github.com/longmoon2k4/SWP391.B5',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Portfolio Website',
      desc: 'Trang web cá nhân mang phong cách tương lai, tích hợp hiệu ứng 3D và animations mượt mà.',
      techs: ['React', 'Framer Motion', 'Tailwind CSS'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark dark:text-white transition-colors duration-500">
            Các <span className="text-cyan dark:text-cyanBright">Dự Án</span> Nổi Bật
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan to-fpt mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                y: -10, 
                rotateX: 5, 
                rotateY: -5,
                boxShadow: '0 20px 40px rgba(0,255,255,0.1)'
              }}
              style={{ perspective: 1000 }}
              className="glass-panel rounded-2xl overflow-hidden group border border-black/5 dark:border-white/10 hover:border-cyan/50 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-light/20 dark:bg-deepDark/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-dark dark:text-white mb-2 group-hover:text-cyan transition-colors">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1 transition-colors duration-500">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-dark/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full text-gray-600 dark:text-gray-300 transition-colors duration-500">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4 border-t border-black/5 dark:border-white/10 transition-colors duration-500">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-dark dark:hover:text-white transition-colors">
                    <FaGithub className="w-4 h-4" /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-cyan dark:text-cyanBright hover:text-dark dark:hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
