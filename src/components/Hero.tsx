import { Github, Linkedin, Mail, ChevronDown, FileText, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzFmMmQzZCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMiIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              Satish Dangeti
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 bg-blue-500 mx-auto mb-6"
            ></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-blue-400 font-medium mb-6">
              Aspiring Analyst | Data-Driven Strategic Insights
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transforming complex datasets into strategic insights that drive impactful business decisions.
              Proficient in AI, Business Analysis, and Process Optimization.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:satish.dangeti07@gmail.com"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatDelay: 2 }}
              >
                <Mail size={20} />
              </motion.div>
              <span>Contact Me</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1As4RGN7vk93lUcn_EJ0-onSeUPE5JPhp/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.6, delay: 1.4, repeat: Infinity, repeatDelay: 2 }}
              >
                <FileText size={20} />
              </motion.div>
              <span>My Resume</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/satishdangeti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, delay: 1.6, repeat: Infinity, repeatDelay: 2 }}
              >
                <Linkedin size={20} />
              </motion.div>
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Satish-07"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 0.6, delay: 1.8, repeat: Infinity, repeatDelay: 2 }}
              >
                <Github size={20} />
              </motion.div>
              <span>GitHub</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1MBcLvedD867Qbmcwc2mVBwOcBSbfmEKX/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 0.6, delay: 2.0, repeat: Infinity, repeatDelay: 2 }}
              >
                <FileCheck size={20} />
              </motion.div>
              <span>My Cover Letter</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center gap-6 text-slate-400"
          >
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-sm">Projects Completed</div>
            </motion.div>
            <div className="w-px bg-slate-700"></div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-3xl font-bold text-white">9+</div>
              <div className="text-sm">Certifications</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={() => scrollToSection('about')}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer hover:text-blue-400 transition-colors"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}
