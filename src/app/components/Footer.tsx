import { motion } from 'motion/react';
import { Github, Instagram, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/udaybhaskarpy',
      color: 'hover:text-gray-300',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      url: 'https://instagram.com/uday_thinks',
      color: 'hover:text-pink-400',
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:uday232012@gmail.com',
      color: 'hover:text-red-400',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-slate-950 border-t border-cyan-500/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Uday Bhaskar
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Data Science Portfolio
              </p>
              <p className="text-gray-500 text-xs italic">
                Built with curiosity, logic, and a passion for data.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-gray-200 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-gray-200 mb-4">
                Connect
              </h4>
              <div className="flex gap-4 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-slate-900/50 border border-cyan-500/20 rounded-lg flex items-center justify-center text-gray-400 ${social.color} hover:border-cyan-500/50 transition-all duration-300 hover:scale-110`}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                <a
                  href="mailto:uday232012@gmail.com"
                  className="hover:text-cyan-400 transition-colors"
                >
                  uday232012@gmail.com
                </a>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-cyan-500/10 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Uday Bhaskar. All rights reserved.
            </p>

            {/* Made with Love */}
            <p className="flex items-center gap-2 text-gray-500 text-sm">
              Made with{' '}
              <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />{' '}
              and Python
            </p>

            {/* Tech Stack */}
            <p className="text-gray-500 text-sm text-center md:text-right">
              Built with React & Tailwind CSS
            </p>
          </div>
        </motion.div>

        {/* Scroll to Top Indicator */}
        <motion.button
          onClick={() => scrollToSection('#home')}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, y: -5 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 z-40 group"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}
