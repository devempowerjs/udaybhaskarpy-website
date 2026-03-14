import { motion } from 'motion/react';
import { Github, GitFork, Star, Code, ExternalLink } from 'lucide-react';

export function GitHub() {
  return (
    <section id="github" className="relative py-20 md:py-32 bg-gradient-to-b from-slate-900 to-slate-950">
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
            <Github className="text-purple-400" size={40} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                GitHub Journey
              </span>
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 text-lg">My coding journey and contributions</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - GitHub Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Profile Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-6 mb-6">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center border-2 border-purple-500/30">
                      <Github className="text-purple-400" size={40} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-900"></div>
                  </div>
                  
                  {/* Info */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-100">Uday Bhaskar</h3>
                    <a
                      href="https://github.com/udaybhaskarpy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                    >
                      @udaybhaskarpy
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 mb-6">
                  Aspiring Data Scientist | Python Developer | Building projects to learn and grow
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">5+</div>
                    <div className="text-xs text-gray-500">Repositories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">100+</div>
                    <div className="text-xs text-gray-500">Contributions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">Growing</div>
                    <div className="text-xs text-gray-500">Activity</div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://github.com/udaybhaskarpy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-center rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                >
                  Visit GitHub Profile
                </a>
              </div>
            </div>

            {/* Contribution Highlights */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-200 mb-4 flex items-center gap-2">
                <Code className="text-cyan-400" size={20} />
                Contribution Highlights
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Python Projects</span>
                  <span className="text-cyan-400 font-semibold">5+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Data Analysis Focus</span>
                  <span className="text-blue-400 font-semibold">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Active Learning</span>
                  <span className="text-purple-400 font-semibold">Daily</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - GitHub Stats & Activity */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Tech Focus */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-200 mb-4">
                Primary Technologies
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Python', percentage: 95, color: 'bg-cyan-500' },
                  { name: 'Data Analysis', percentage: 85, color: 'bg-blue-500' },
                  { name: 'NumPy/Pandas', percentage: 80, color: 'bg-purple-500' },
                ].map((tech) => (
                  <div key={tech.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">{tech.name}</span>
                      <span className="text-gray-300">{tech.percentage}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full ${tech.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/udaybhaskarpy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group"
          >
            <Github size={24} />
            <span>Explore My GitHub</span>
            <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}