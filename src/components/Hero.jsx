import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail } from 'lucide-react';

const titles = [
  "Full Stack MERN Developer",
  "Problem Solver",
  "Software Engineer",
  "Open Source Enthusiast"
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const currentFullTitle = titles[titleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentFullTitle.substring(0, displayText.length + 1));
        setTypingSpeed(100);

        if (displayText === currentFullTitle) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setDisplayText(currentFullTitle.substring(0, displayText.length - 1));
        setTypingSpeed(50);

        if (displayText === '') {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, typingSpeed]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden grid-bg dark:bg-darkBg bg-lightBg transition-colors duration-300">
      {/* Decorative Glow Circles */}
      <div className="glow-circle top-1/4 left-1/4 w-[350px] h-[350px] bg-indigo-500/20 dark:bg-indigo-500/10"></div>
      <div className="glow-circle bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/20 dark:bg-purple-500/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass-card border border-indigo-500/30 dark:border-indigo-400/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium font-outfit shadow-sm">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-outfit text-slate-900 dark:text-white tracking-tight leading-tight">
              Hi, I'm <br className="sm:hidden" />
              <span className="text-gradient-primary">Lakshmikant Khandre</span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold font-outfit text-slate-700 dark:text-slate-200 h-12">
              I am a <span className="text-indigo-500 dark:text-indigo-400 font-mono">{displayText}</span>
              <span className="animate-pulse text-indigo-500">|</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-white max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed">
              Full Stack Developer specializing in the MERN Stack. Passionate about building robust, high-performance web applications with clean architecture and rich user interfaces.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="#contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 transition-all flex items-center justify-center space-x-2 text-base font-outfit"
              >
                <Mail className="h-5 w-5" />
                <span>Contact Me</span>
              </a>
              <a 
                href="/resume.pdf"
                download="Lakshmikant_Khandre_Resume.pdf"
                className="w-full sm:w-auto px-8 py-3.5 glass-card text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-xl font-semibold transition-all flex items-center justify-center space-x-2 text-base border border-slate-200 dark:border-slate-800 font-outfit"
              >
                <FileText className="h-5 w-5 text-indigo-500" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-6">
              <a 
                href="https://github.com/lakshmikantKhandre22" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:text-indigo-500 dark:hover:text-indigo-400 text-slate-600 dark:text-slate-400 transition-colors border border-slate-200 dark:border-slate-800"
                aria-label="GitHub Profile"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/lakshmikantkhandre/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:text-indigo-500 dark:hover:text-indigo-400 text-slate-600 dark:text-slate-400 transition-colors border border-slate-200 dark:border-slate-800"
                aria-label="LinkedIn Profile"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://leetcode.com/u/laksh-22_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:text-indigo-500 dark:hover:text-indigo-400 text-slate-600 dark:text-slate-400 transition-colors border border-slate-200 dark:border-slate-800"
                aria-label="LeetCode Profile"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.777 9.778a3.75 3.75 0 0 0 0 5.304l3.194 3.194a3.75 3.75 0 0 0 5.304 0l9.778-9.777a1.375 1.375 0 0 0-.002-1.944l-3.193-3.193a1.375 1.375 0 0 0-1.943-.002L9.672 10.02a.625.625 0 1 1-.884-.884l6.216-6.215a1.375 1.375 0 0 0 0-1.943l-1.375-1.375A1.375 1.375 0 0 0 13.483 0zm-6.22 13.916a1.25 1.25 0 1 1-1.767 1.768 1.25 1.25 0 0 1 1.768-1.768zm3.535-3.535a1.25 1.25 0 1 1-1.768 1.768 1.25 1.25 0 0 1 1.768-1.768z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Graphic/Photo container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Spinning background accent */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-3xl animate-spin-slow opacity-30 dark:opacity-20 blur-xl"></div>
              
              {/* Photo frame */}
              <div className="absolute inset-2 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-3xl p-1 shadow-2xl">
                <div className="w-full h-full bg-slate-900 rounded-[22px] overflow-hidden relative">
                  <img 
                    src="/profile.jpg" 
                    alt="Lakshmikant Khandre" 
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-white font-outfit font-semibold text-lg">Lakshmikant Khandre</p>
                    <p className="text-indigo-400 font-mono text-xs">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
