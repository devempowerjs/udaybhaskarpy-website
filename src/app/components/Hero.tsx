import { TypeAnimation } from 'react-type-animation';
import { Github, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import profilePic from '../../assets/profilepic.jpg';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-6"
          >
            <div className="space-y-2">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl text-cyan-400"
              >
                Hello, I am
              </motion.h2>

              <div className="h-20 sm:h-24 md:h-28 flex items-center justify-center lg:justify-start">
                <TypeAnimation
                  sequence={[
                    'Uday Bhaskar',
                    2000,
                    'Aspiring Data Scientist',
                    2000,
                    'Python Developer',
                    2000,
                    'Data Enthusiast',
                    2000,
                    'Problem Solver',
                    2000,
                  ]}
                  wrapper="h1"
                  speed={50}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                  repeat={Infinity}
                />
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl"
            >
              Turning raw data into meaningful insights and practical solutions.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Projects
                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => window.open('https://github.com/udaybhaskarpy', '_blank')}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 rounded-lg font-medium hover:bg-slate-800 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Github size={18} />
                Explore GitHub
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 text-purple-400 rounded-lg font-medium hover:bg-slate-800 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={18} />
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 animate-pulse transition duration-1000"></div>

              {/* Image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-slate-900">
                <img
                  src={profilePic}
                  alt="Uday Bhaskar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center"
              >
                <span className="text-3xl">🐍</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-lg backdrop-blur-sm border border-purple-500/30 flex items-center justify-center"
              >
                <span className="text-3xl">📊</span>
              </motion.div>

            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-cyan-400 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}