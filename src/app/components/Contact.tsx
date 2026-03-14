import { motion } from 'motion/react';
import { Mail, Github, Instagram, Send, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'uday232012@gmail.com',
      link: 'mailto:uday232012@gmail.com',
      color: 'text-red-400',
      bgColor: 'from-red-500/20 to-pink-600/20',
      borderColor: 'border-red-500/30',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@udaybhaskarpy',
      link: 'https://github.com/udaybhaskarpy',
      color: 'text-gray-300',
      bgColor: 'from-gray-500/20 to-slate-600/20',
      borderColor: 'border-gray-500/30',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@uday_thinks',
      link: 'https://instagram.com/uday_thinks',
      color: 'text-pink-400',
      bgColor: 'from-pink-500/20 to-purple-600/20',
      borderColor: 'border-pink-500/30',
    },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-gradient-to-b from-slate-950 to-slate-900">
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
            <Send className="text-cyan-400" size={32} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing data science projects, collaboration opportunities, or just connecting!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Message */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/10 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Whether you have a question, want to collaborate on a project, or just want to say hi, I'll do my best to get back to you as soon as possible!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin size={20} className="text-cyan-400" />
                  <span>India</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone size={20} className="text-cyan-400" />
                  <span>Available on request</span>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="block group"
                >
                  <div className={`relative bg-slate-900/50 backdrop-blur-sm border ${method.borderColor} rounded-xl p-6 hover:shadow-lg transition-all duration-300 h-full`}>
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${method.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <method.icon className={method.color} size={28} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">{method.label}</div>
                        <div className={`${method.color} font-medium group-hover:text-cyan-300 transition-colors text-sm`}>
                          {method.value}
                        </div>
                      </div>
                      <Send size={16} className="text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </motion.a>
              ))}
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
          <div className="inline-block bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-600/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
            <p className="text-gray-300 text-lg mb-4">
              Prefer email? Drop me a line directly at
            </p>
            <a
              href="mailto:uday232012@gmail.com"
              className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-400 transition-all"
            >
              uday232012@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}