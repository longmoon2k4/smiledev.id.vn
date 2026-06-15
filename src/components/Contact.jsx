import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Magnetic from './Magnetic';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !message) {
      alert('Vui lòng nhập tên và nội dung tin nhắn!');
      return;
    }

    const subject = encodeURIComponent(`[Portfolio] Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:smile2004.dev@gmail.com?subject=${subject}&body=${body}`;

    setFormData({ name: '', email: '', message: '' });
  };

  const socials = [
    { icon: <FaGithub className="w-5 h-5" />, href: 'https://github.com/longmoon2k4' },
    { icon: <FaLinkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/vu-long-ha-1a4971335/' },
    { icon: <FaFacebook className="w-5 h-5" />, href: 'https://www.facebook.com/biusagi2507/' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:smile2004.dev@gmail.com' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-light/80 dark:bg-deepDark/80 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 glass-panel rounded-3xl p-8 md:p-12 backdrop-blur-xl relative z-10">

          {/* Left Side - Info */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-dark dark:text-white mb-4 transition-colors duration-500">Kết Nối Với Tôi</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed transition-colors duration-500">
                Bạn đang có ý tưởng thú vị hay một dự án tuyệt vời? Đừng ngần ngại liên hệ với tôi. Tôi luôn mở cửa để thảo luận về những cơ hội mới.
              </p>

              <div className="flex gap-4 mb-8">
                {socials.map((social, index) => (
                  <Magnetic key={index}>
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 bg-dark/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-fpt hover:border-fpt transition-colors"
                      whileHover={{
                        y: -8,
                        scale: 1.1,
                        transition: { type: 'spring', stiffness: 300, damping: 10 }
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  </Magnetic>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side - Form */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tên của bạn"
                  className="w-full bg-light dark:bg-dark/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-dark dark:text-white placeholder-gray-400 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors shadow-inner dark:shadow-none"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email liên hệ (tuỳ chọn)"
                  className="w-full bg-light dark:bg-dark/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-dark dark:text-white placeholder-gray-400 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors shadow-inner dark:shadow-none"
                />
              </div>
              <div>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Nội dung tin nhắn..."
                  className="w-full bg-light dark:bg-dark/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-dark dark:text-white placeholder-gray-400 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors resize-none shadow-inner dark:shadow-none"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-cyan text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-electric transition-colors box-glow-cyan"
              >
                Gửi Tin Nhắn <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* Decorative Blob */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -bottom-1/2 -left-1/4 w-[1000px] h-[1000px] bg-cyan/5 rounded-full blur-[150px]"></div>
      </div>
    </section>
  );
};

export default Contact;
