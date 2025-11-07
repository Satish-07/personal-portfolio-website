import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Certifications() {
  const certifications = [
    {
      title: 'Management Consulting Nano Degree Program',
      issuer: 'Eshan Group of Institutions',
      category: 'Management Consulting',
      link: 'https://drive.google.com/file/d/172uRklewQoM8yOGfBzImc0MOTW6o3JUo/view?usp=drive_link',
    },
    {
      title: 'Google Analytics',
      issuer: 'Google',
      category: 'Digital Marketing / Web Analytics',
      link: 'https://drive.google.com/file/d/1-LiLa6z06Zz65ZmmvWxP7uRxOaIvE8U8/view?usp=drive_link',
    },
    {
      title: 'Investment Analysis and Portfolio Management',
      issuer: 'NSE Academy (National Stock Exchange of India)',
      category: 'Finance and Investment',
      link: 'https://drive.google.com/file/d/1L_n6d5VFztid6g9AypjAHntaUkxECFq7/view?usp=drive_link',
    },
    {
      title: 'Strategy Consulting',
      issuer: 'BCG (Boston Consulting Group)',
      category: 'Strategy & Consulting',
      link: 'https://drive.google.com/file/d/1y_KC0_2-vdYVp6j8LEV9AMzyP1BtKNK-/view?usp=drive_link',
    },
    {
      title: 'Google AI Essentials',
      issuer: 'Google',
      category: 'Artificial Intelligence',
      link: 'https://drive.google.com/file/d/1Ouj4jc7ko9iZ7Xd9sqMKcG9BGn9hb-rL/view?usp=drive_link',
    },
    {
      title: 'Product Management',
      issuer: 'Electronic Arts',
      category: 'Product Management',
      link: 'https://drive.google.com/file/d/1ohGy6WK7UdyYPQt1zF1MVyVpZQUBy4MR/view?usp=drive_link',
    },
    {
      title: 'Client Research and Problem Identification',
      issuer: 'Accenture',
      category: 'Market Research and Customer Insights',
      link: 'https://drive.google.com/file/d/1ykOLLtRA5YtDcCBch6lNZQI3NC24vcI3/view?usp=drive_link',
    },
    {
      title: 'Business Analysis Foundations',
      issuer: 'IIBA (International Institute of Business Analysis)',
      category: 'Business Analysis',
      link: 'https://drive.google.com/file/d/18vFWrYYa76MqTG1s4tkgmfkeC4JbXhuE/view?usp=drive_link',
    },
    {
      title: 'Leadership Skills',
      issuer: 'Online@IIMA (Indian Institute of Management Ahmedabad)',
      category: 'Management and Leadership Development',
      link: 'https://drive.google.com/file/d/1e_S9W3FtwT_AZYrwM1gbZSHP6ncf6Q8W/view?usp=drive_link',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Certifications</h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg">
              Continuous learning from industry leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.03, rotate: 1 }}
                className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-blue-200 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 20 }}
                    className="bg-blue-200 p-3 rounded-lg group-hover:bg-blue-300 transition-colors"
                  >
                    <Award className="text-blue-700" size={24} />
                  </motion.div>
                  <motion.div
                    whileHover={{ rotate: -45, scale: 1.2 }}
                    className="text-blue-400 group-hover:text-blue-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.div>
                </div>

                <h3 className="font-bold text-slate-900 mb-2 leading-snug">{cert.title}</h3>
                <p className="text-blue-700 font-semibold mb-2">{cert.issuer}</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                  {cert.category}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
