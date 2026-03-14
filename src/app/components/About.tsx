import { motion } from 'motion/react';
import { Brain, Code, TrendingUp, Target } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Python Developer',
      description: 'Strong foundation in Python programming',
    },
    {
      icon: Brain,
      title: 'Data Science',
      description: 'NumPy, Pandas, PyTorch expertise',
    },
    {
      icon: TrendingUp,
      title: 'Problem Solver',
      description: 'Analytical and logical approach',
    },
    {
      icon: Target,
      title: 'Continuous Learner',
      description: 'Always growing and improving',
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 bg-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/10 rounded-2xl p-6 sm:p-8 shadow-xl hover:border-cyan-500/30 transition-all duration-300">
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hi, I'm <span className="text-cyan-400 font-semibold">Uday Bhaskar</span>, a curious learner and aspiring Data Scientist who enjoys exploring how data can be used to solve real-world problems.
                </p>
                <p>
                  My journey into technology began with Python, where I gradually moved from understanding core programming concepts to working with powerful data science libraries and tools. Over time, I developed a strong interest in data analysis, data manipulation, and the fundamentals of machine learning.
                </p>
                <p>
                  I enjoy working with technologies such as <span className="text-blue-400">NumPy</span>, <span className="text-blue-400">Pandas</span>, and <span className="text-blue-400">PyTorch</span>, and I'm always looking for opportunities to strengthen my practical understanding by building projects and experimenting with new ideas.
                </p>
                <p>
                  What excites me most about data science is the ability to transform raw information into meaningful insights. I enjoy analyzing patterns, breaking down problems into smaller logical steps, and creating solutions in a structured way.
                </p>
                <p>
                  Beyond coding, I value continuous self-improvement. I'm interested in developing discipline, sharpening focus, and building habits that help me grow both mentally and physically. I also enjoy strategic games like <span className="text-purple-400">chess</span>, which reflect my analytical and problem-solving mindset.
                </p>
                <p className="text-cyan-400 font-medium">
                  My goal is to become a skilled data scientist, work on impactful projects, and build tools that help people make better decisions through data.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/10 rounded-xl p-4 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="text-cyan-400" size={24} />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-200">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}