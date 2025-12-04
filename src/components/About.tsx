import { Briefcase, Target, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">About Me</h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Professional Summary</h3>
              <p className="text-slate-700 leading-relaxed mb-6">
               Aspiring Analyst with a proven record of transforming complex datasets into strategic insights that drive impactful business decisions with hands-on experience in business analysis, market research, product management, and strategic consulting.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
               I specialise in leveraging advanced analytical tools like SQL, Tableau, Excel, and Google Analytics to optimise processes, reduce costs, and identify growth opportunities.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
               My journey includes successful internships with leading organisations, where I contributed to product roadmaps and reporting processes and uncovered operational efficiencies that resulted in cost reductions of up to 15%. Experience in product lifecycle support, stakeholder collaboration, and process optimisation was gained through internships and projects.
              </p>
              <p className="text-slate-700 leading-relaxed">
               My goal is to bridge the gap between business needs and technical solutions, helping organisations innovate and succeed in competitive markets and pushing my boundaries for impactful outcomes in the ever-evolving landscape of business analysis using AI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
                className="flex gap-4 items-start group"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors"
                >
                  <Briefcase className="text-blue-600" size={24} />
                </motion.div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Expertise</h4>
                  <p className="text-slate-700">
                    Experience in Business Analysis, Product Management, and Strategic Consulting
                    across multiple industries.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
                className="flex gap-4 items-start group"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors"
                >
                  <Target className="text-blue-600" size={24} />
                </motion.div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Focus Areas</h4>
                  <p className="text-slate-700">
                    Process optimization, cost reduction strategies, data-driven decision making, and stakeholder
                    collaboration using modern analytical tools.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
                className="flex gap-4 items-start group"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors"
                >
                  <Lightbulb className="text-blue-600" size={24} />
                </motion.div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Innovation</h4>
                  <p className="text-slate-700">
                    Certified in Product Management, Business Analysis, and Management Consulting, Google Analytics with expertise
                    in Agile/Scrum and workflow automations using AI.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Location & Languages</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-slate-600 font-medium mb-2">Based in</div>
                <div className="text-xl font-bold text-slate-900">Visakhapatnam, Andhra Pradesh</div>
              </div>
              <div className="text-center">
                <div className="text-slate-600 font-medium mb-2">Languages</div>
                <div className="text-xl font-bold text-slate-900">English (Professional) • Telugu (Native)</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
