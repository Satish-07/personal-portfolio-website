import { Database, BarChart3, Table2, Workflow, Sparkles, TrendingUp, Lightbulb, Users, FileText, CheckSquare, PenTool, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Skills() {
  const tools = [
    { name: 'MySQL', icon: Database, level: 83 },
    { name: 'Tableau', icon: BarChart3, level: 78 },
    { name: 'Microsoft Excel', icon: Table2, level: 90 },
    { name: 'Google Analytics', icon: TrendingUp, level: 80 },
    { name: 'JIRA (Agile/Scrum)', icon: CheckSquare, level: 87 },
    { name: 'Confluence', icon: BookOpen, level: 81 },
    { name: 'WIREFRAMES (Balsamiq/Lucidchart)', icon: PenTool, level: 75 },
    { name: 'AI Workflow Automation', icon: Sparkles, level: 85 },
  ];

  const functionalAreas = [
    { name: 'Business Analysis', icon: BarChart3 },
    { name: 'Product Management', icon: Lightbulb },
    { name: 'Strategic Consulting', icon: Users },
    { name: 'Process Optimization', icon: Workflow },
    { name: 'Investment Analysis', icon: TrendingUp },
    { name: 'Leadership', icon: Users },
  ];

  const coreSkills = [
    'Product Analysis',
    'Business Frameworks',
    'User Stories',
    'Strategic Consulting',
    'Market Research',
    'Elicitation Techniques',
    'Data Visualization',
    'AI Automations',
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for transforming data into actionable business insights
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-on-scroll animation-delay-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Tools & Technologies</h3>
              <div className="space-y-6">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors"
                        >
                          <tool.icon className="text-blue-600" size={20} />
                        </motion.div>
                        <span className="font-semibold text-slate-900">{tool.name}</span>
                      </div>
                      <span className="text-slate-600 font-medium">{tool.level}%</span>
                    </div>
                    <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out skill-bar"
                        style={{ width: `${tool.level}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll animation-delay-400">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Functional Areas</h3>
              <div className="grid grid-cols-2 gap-4">
                {functionalAreas.map((area, index) => (
                  <motion.div
                    key={area.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors"
                    >
                      <area.icon className="text-blue-600" size={24} />
                    </motion.div>
                    <h4 className="font-semibold text-slate-900">{area.name}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-on-scroll animation-delay-600">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {coreSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="bg-indigo-600 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow border border-indigo-700 hover:border-indigo-800"
                >
                  <span className="font-medium text-white">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
