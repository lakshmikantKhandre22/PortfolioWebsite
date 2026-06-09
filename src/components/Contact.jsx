import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const contactInfo = [
  {
    title: 'Email Address',
    value: 'lakshmikant22122005@gmail.com',
    href: 'mailto:lakshmikant22122005@gmail.com',
    icon: <Mail className="h-5 w-5 text-indigo-500 dark:text-white" />
  },
  {
    title: 'Phone Number',
    value: '+91 9226576729',
    href: 'tel:+919226576729',
    icon: <Phone className="h-5 w-5 text-purple-500 dark:text-white" />
  },
  {
    title: 'Current Location',
    value: 'Pune, Maharashtra, India',
    href: 'https://maps.google.com/?q=Pune,India',
    icon: <MapPin className="h-5 w-5 text-pink-500 dark:text-white" />
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 dark:bg-darkBg bg-lightBg transition-colors duration-300 grid-bg relative">
      <div className="glow-circle top-1/4 left-1/3 w-[300px] h-[300px] bg-indigo-500/10 dark:bg-indigo-500/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold font-outfit text-slate-900 dark:text-white"
          >
            Get In <span className="text-gradient-primary">Touch</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-1 w-20 bg-indigo-500 mx-auto mt-4 rounded-full"
          ></motion.div>
          <p className="text-slate-600 dark:text-white mt-6 font-sans">
            Have an opportunity, a question, or want to collaborate? Drop a message below or contact me directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card border border-slate-200 dark:border-slate-850 p-8 rounded-3xl space-y-8 shadow-sm">
              <h3 className="text-2xl font-bold font-outfit text-slate-900 dark:text-white">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-850/40 hover:bg-slate-100 dark:hover:bg-black transition-all border border-slate-200/20 dark:border-slate-800/20 group"
                  >
                    <div className="p-3 bg-white dark:bg-slate-800 rounded-xl group-hover:scale-105 transition-transform border border-slate-100 dark:border-slate-700/50">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-white font-mono uppercase tracking-wider">{info.title}</p>
                      <p className="text-sm sm:text-base font-medium font-outfit text-slate-800 dark:text-white truncate max-w-[220px] sm:max-w-xs">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social links row */}
              <div className="pt-6 border-t border-slate-200/50 dark:border-slate-800/50 space-y-4">
                <p className="text-xs text-slate-500 dark:text-white font-mono uppercase tracking-wider">Connect via Socials</p>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/lakshmikantKhandre22" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3.5 bg-slate-100/60 dark:bg-slate-850/60 rounded-xl hover:text-indigo-500 dark:hover:text-indigo-400 text-slate-600 dark:text-white border border-slate-200/20 dark:border-slate-800/20 transition-colors"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/lakshmikantkhandre/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3.5 bg-slate-100/60 dark:bg-slate-850/60 rounded-xl hover:text-indigo-500 dark:hover:text-indigo-400 text-slate-600 dark:text-white border border-slate-200/20 dark:border-slate-800/20 transition-colors"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://leetcode.com/u/laksh-22_/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3.5 bg-slate-100/60 dark:bg-slate-850/60 rounded-xl hover:text-indigo-500 dark:hover:text-indigo-400 text-slate-600 dark:text-white border border-slate-200/20 dark:border-slate-800/20 transition-colors"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.777 9.778a3.75 3.75 0 0 0 0 5.304l3.194 3.194a3.75 3.75 0 0 0 5.304 0l9.778-9.777a1.375 1.375 0 0 0-.002-1.944l-3.193-3.193a1.375 1.375 0 0 0-1.943-.002L9.672 10.02a.625.625 0 1 1-.884-.884l6.216-6.215a1.375 1.375 0 0 0 0-1.943l-1.375-1.375A1.375 1.375 0 0 0 13.483 0zm-6.22 13.916a1.25 1.25 0 1 1-1.767 1.768 1.25 1.25 0 0 1 1.768-1.768zm3.535-3.535a1.25 1.25 0 1 1-1.768 1.768 1.25 1.25 0 0 1 1.768-1.768z" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex"
          >
            <div className="w-full glass-card border border-slate-200 dark:border-slate-850 p-8 rounded-3xl shadow-sm flex flex-col justify-between relative">
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-bold font-outfit text-slate-900 dark:text-white mb-2">
                  Send Message
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold font-outfit text-slate-500 dark:text-slate-400">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-800 dark:text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold font-outfit text-slate-500 dark:text-slate-400">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-800 dark:text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold font-outfit text-slate-500 dark:text-slate-400">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-800 dark:text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Collaboration Inquiry"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold font-outfit text-slate-500 dark:text-slate-400">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-800 dark:text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-400 text-white rounded-xl font-bold flex items-center justify-center space-x-2 text-sm transition-colors shadow-lg shadow-indigo-500/10"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Success Alert */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute inset-x-8 bottom-8 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center space-x-2 text-sm font-outfit z-10"
                  >
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
