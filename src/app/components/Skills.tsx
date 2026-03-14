import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function Skills() {
  const techStackBadges = [
    {
      name: 'Python',
      url: 'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54',
      category: 'Programming',
    },
    {
      name: 'NumPy',
      url: 'https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white',
      category: 'Data Science',
    },
    {
      name: 'Pandas',
      url: 'https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white',
      category: 'Data Science',
    },
    {
      name: 'PyTorch',
      url: 'https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white',
      category: 'Machine Learning',
    },
    {
      name: 'Git',
      url: 'https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white',
      category: 'Tools',
    },
    {
      name: 'GitHub',
      url: 'https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white',
      category: 'Tools',
    },
    {
      name: 'Power BI',
      url: 'https://img.shields.io/badge/power_bi-F2C811?style=for-the-badge&logo=powerbi&logoColor=black',
      category: 'Visualization',
    },
  ];

  const otherSkills = [
    { name: 'Data Analysis', icon: '📊' },
    { name: 'Problem Solving', icon: '🧩' },
    { name: 'Logical Thinking', icon: '🧠' },
    { name: 'Chess', icon: '♟️' },
    { name: 'Self Development', icon: '🎯' },
    { name: 'Fitness', icon: '💪' },
  ];

  return (
    <section id="skills" className="relative py-20 md:py-32 bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="text-purple-400" size={32} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Skills & Tech Stack
              </span>
            </h2>
            <Sparkles className="text-cyan-400" size={32} />
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 text-lg">Technologies and tools I work with</p>
        </motion.div>

        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-200 mb-6 text-center">
              Core Technologies
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              {techStackBadges.map((badge, index) => (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="relative group"
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                  
                  {/* Badge Image */}
                  <div className="relative">
                    <img
                      src={badge.url}
                      alt={badge.name}
                      className="h-8 sm:h-10 object-contain transition-transform duration-200"
                    />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-slate-800 text-xs text-cyan-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {badge.category}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Other Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-200 mb-8 text-center">
            Additional Skills & Interests
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group bg-slate-900/50 backdrop-blur-sm border border-purple-500/10 rounded-xl p-6 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div className="text-center space-y-3">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h4 className="text-sm font-medium text-gray-300 group-hover:text-purple-400 transition-colors">
                    {skill.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Categories Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">7+</div>
            <div className="text-gray-300">Tech Skills</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">5+</div>
            <div className="text-gray-300">Projects Built</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-gray-300">Learning & Growing</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
