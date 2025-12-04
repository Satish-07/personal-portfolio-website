import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-slate-300 text-lg">
              Let's discuss how my skills can support your company's growth forward with strategic decision-making and data-driven insights using AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.a
              href="mailto:satish.dangeti07@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border border-slate-700 group"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="bg-blue-600 p-4 rounded-lg group-hover:bg-blue-500 transition-colors"
                >
                  <Mail size={24} />
                </motion.div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-slate-400 text-sm break-all">satish.dangeti07@gmail.com</p>
                </div>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-800 p-6 rounded-xl border border-slate-700"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-blue-600 p-4 rounded-lg"
                >
                  <MapPin size={24} />
                </motion.div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-slate-400 text-sm">Visakhapatnam, Andhra Pradesh</p>
                </div>
              </div>
            </motion.div>

            <motion.a
              href="https://www.linkedin.com/in/satishdangeti"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border border-slate-700 group"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  className="bg-blue-600 p-4 rounded-lg group-hover:bg-blue-500 transition-colors"
                >
                  <Linkedin size={24} />
                </motion.div>
                <div>
                  <h3 className="font-semibold mb-1">LinkedIn</h3>
                  <p className="text-slate-400 text-sm">linkedin.com/in/satishdangeti</p>
                </div>
              </div>
            </motion.a>

            <motion.a
              href="https://github.com/Satish-07"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border border-slate-700 group"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="bg-blue-600 p-4 rounded-lg group-hover:bg-blue-500 transition-colors"
                >
                  <Github size={24} />
                </motion.div>
                <div>
                  <h3 className="font-semibold mb-1">GitHub</h3>
                  <p className="text-slate-400 text-sm">github.com/Satish-07</p>
                </div>
              </div>
            </motion.a>
          </div>

        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-slate-700">
        <div className="container mx-auto px-6">
          <p className="text-center text-slate-400">
            © 2025 Satish Dangeti.ASPIRE TO INNOVATE & ANALYZE.
          </p>
        </div>
      </div>
    </section>
  );
}
