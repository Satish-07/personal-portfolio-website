import { GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Education</h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <div className="flex items-start gap-6">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  className="bg-blue-500 p-4 rounded-xl flex-shrink-0"
                >
                  <GraduationCap className="text-white" size={32} />
                </motion.div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Bachelor's Degree in Computer Science
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    Surya Raya Degree College
                  </p>
                  <div className="flex items-center gap-2 text-slate-600">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Calendar size={18} />
                    </motion.div>
                    <span>June 2018 – August 2021</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <p className="text-slate-700 leading-relaxed">
                      Activities: In college, I built a strong foundation in computer science principles, database structures, and analytical thinking.
                      Developed skills in problem-solving and logical reasoning that form the basis of my analytical career.
                      Parallelly, I studied business case reports and analysed companies such as Reliance and Amazon, utilising my problem-solving and strategic thinking skills.
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
