import { Calendar, MapPin, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: 'Product Management Intern',
      company: 'International Institute of SDG\'s and Public Policy Research',
      location: 'Remote',
      period: 'September 2025 – Present',
      achievements: [
        'Drove user needs analysis via 150+ responses market survey, providing actionable insights to the product team.',
        'Contributed in 3 initial product roadmaps aligned with SDG public policy research',
        'Supported product exploration and prioritisation, analysing user feedback and proposing solutions',
      ],
    },
    {
      title: 'Management Consultant Intern',
      company: 'ProCapitas',
      location: 'Remote',
      period: 'November 2024 – April 2025 (6 months)',
      achievements: [
        'Collaborated on 2 strategic consulting projects, translating business requirements into actionable insights.',
        'Processed 5,000+ rows of data with MySQL and Excel, resulting in a 20% reduction in report generation time.',
        'Identified 10–12% cost optimisation opportunities through financial and operational data analysis',
        'Conducted market research and competitive analysis to identify growth opportunities for client portfolios.',
      ],
    },
    {
      title: 'Sales Strategist',
      company: 'SSJ Constructions',
      location: 'Visakhapatnam, Andhra Pradesh, India',
      period: 'August 2021 – March 2024 (2 years 8 months)',
      achievements: [
        'Implemented data-driven solutions and lead generation that reduced operational costs by 15%',
        'Led cross-functional teams to align processes with strategic goals, driving sustainable growth',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Professional Experience</h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg">
              Proven track record of delivering measurable business impact
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="md:pl-20">
                    <div className="absolute left-5 top-0 w-7 h-7 bg-blue-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                            <motion.div
                              whileHover={{ scale: 1.3, rotate: 10 }}
                            >
                              <Building2 size={18} />
                            </motion.div>
                            <span>{exp.company}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-slate-600 mb-6">
                        <div className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          >
                            <Calendar size={16} />
                          </motion.div>
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <MapPin size={16} />
                          </motion.div>
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-3 text-slate-700">
                            <span className="text-blue-500 mt-1.5 flex-shrink-0">●</span>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
