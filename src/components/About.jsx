import { motion } from 'framer-motion';
import { Database, Server, Layout } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Database className="w-8 h-8 text-cyan" />,
      title: 'Database Design',
      desc: 'Thiết kế cơ sở dữ liệu chuẩn hóa, tối ưu truy vấn với MySQL.',
      delay: 0.2
    },
    {
      icon: <Server className="w-8 h-8 text-fpt" />,
      title: 'Backend Logic',
      desc: 'Xây dựng API mạnh mẽ, bảo mật và mở rộng với Java Spring Boot.',
      delay: 0.4
    },
    {
      icon: <Layout className="w-8 h-8 text-electric" />,
      title: 'Frontend UI/UX',
      desc: 'Sáng tạo giao diện hiện đại, tương tác mượt mà với React JS.',
      delay: 0.6
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-dark dark:to-white">Về Bản Thân</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-500">
            Là một sinh viên <span className="text-fpt font-semibold">K18 chuyên ngành Software Engineering</span> tại <span className="text-fpt font-semibold">Đại học FPT Hà Nội</span>, 
            tôi mang trong mình niềm đam mê mãnh liệt với việc kiến tạo những sản phẩm công nghệ hoàn chỉnh. Hành trình của tôi đi từ việc 
            thiết kế các hệ cơ sở dữ liệu chặt chẽ, xử lý logic nghiệp vụ phức tạp ở Backend, cho đến việc "vẽ" lên những giao diện 
            tương tác đầy tính thẩm mỹ ở Frontend.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: card.delay }}
              whileHover={{ y: -10 }}
              className="glass-panel p-8 rounded-2xl group transition-all duration-300 hover:border-cyan/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-0"></div>
              <div className="mb-6 p-4 bg-white/5 dark:bg-white/10 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-dark dark:text-white mb-4 transition-colors duration-500">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-500">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
