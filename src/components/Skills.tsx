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
                    initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{
                      y: -12,
                      scale: 1.08,
                      rotateY: 15,
                      rotateX: 10,
                      z: 50
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                    className="bg-gradient-to-br from-white via-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 360, z: 30 }}
                      transition={{ duration: 0.6 }}
                      style={{ transformStyle: 'preserve-3d' }}
                      className="bg-gradient-to-br from-blue-100 to-blue-200 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg relative z-10"
                    >
                      <area.icon className="text-blue-600" size={26} />
                    </motion.div>
                    <h4 className="font-semibold text-slate-900 relative z-10">{area.name}</h4>
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
                  initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
                  whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.12,
                    rotateZ: [-2, 2, -2, 0],
                    z: 40
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 px-7 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  <span className="font-semibold text-white relative z-10 drop-shadow-md">{skill}</span>
                  <motion.div
                    className="absolute inset-0 border-2 border-white/30 rounded-full"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
