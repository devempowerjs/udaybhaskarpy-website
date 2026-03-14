import { motion } from 'motion/react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'NumPy Student Marks Analysis',
      description: 'Comprehensive analysis of student marks using NumPy. Implemented statistical calculations, data aggregation, and performance metrics to identify patterns and insights in educational data.',
      github: 'https://github.com/udaybhaskarpy/numpy-student-marks-analysis',
      tags: ['NumPy', 'Data Analysis', 'Python'],
      gradient: 'from-cyan-500/20 to-blue-600/20',
      borderColor: 'border-cyan-500/30',
    },
    {
      title: 'Class Performance Analyzer',
      description: 'Automated class performance analysis tool built with Python. Generates detailed reports on student achievements, identifies improvement areas, and provides actionable insights for educators.',
      github: 'https://github.com/udaybhaskarpy/class-performance-analyzer-python',
      tags: ['Python', 'Analytics', 'Automation'],
      gradient: 'from-blue-500/20 to-purple-600/20',
      borderColor: 'border-blue-500/30',
    },
    {
      title: 'Student Report Parser',
      description: 'Intelligent report parsing system that extracts and processes student data from various formats. Streamlines data handling and enables efficient reporting workflows.',
      github: 'https://github.com/udaybhaskarpy/student-report-parser-python',
      tags: ['Python', 'Data Parsing', 'Automation'],
      gradient: 'from-purple-500/20 to-pink-600/20',
      borderColor: 'border-purple-500/30',
    },
    {
      title: 'Student Performance Report',
      description: 'Advanced performance reporting system utilizing Python for data manipulation and analysis. Creates comprehensive performance dashboards with visual representations of student progress.',
      github: 'https://github.com/udaybhaskarpy/student-performance-report-python',
      tags: ['Python', 'Reporting', 'Data Visualization'],
      gradient: 'from-pink-500/20 to-rose-600/20',
      borderColor: 'border-pink-500/30',
    },
    {
      title: 'Student Report Analyzer',
      description: 'Complete student report analysis solution that transforms raw academic data into meaningful insights. Features logical structuring, pattern recognition, and automated report generation.',
      github: 'https://github.com/udaybhaskarpy/Student-Report-Analyzer-Using-Python',
      tags: ['Python', 'Data Analysis', 'Machine Learning'],
      gradient: 'from-cyan-500/20 to-purple-600/20',
      borderColor: 'border-cyan-500/30',
    },
  ];

  return (
    <section id="projects" className="relative py-20 md:py-32 bg-slate-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
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
            <Code2 className="text-cyan-400" size={32} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 text-lg">Building practical solutions with data and code</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300`}></div>
              
              {/* Card */}
              <div className={`relative bg-slate-900/80 backdrop-blur-sm border ${project.borderColor} rounded-2xl p-6 sm:p-8 h-full flex flex-col hover:shadow-xl transition-all duration-300`}>
                {/* Project Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Code2 className="text-cyan-400" size={28} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-slate-800/50 border border-cyan-500/20 text-cyan-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800/50 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-200 group/btn"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">View Code</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-200 group/btn"
                  >
                    <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/udaybhaskarpy?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">{projects.length}</div>
            <div className="text-gray-300 text-sm">Featured Projects</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">100%</div>
            <div className="text-gray-300 text-sm">Python Powered</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">Open</div>
            <div className="text-gray-300 text-sm">Source Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
