import React from 'react';
import { Award, Code2, ShieldAlert, CheckCircle2, Trophy, ExternalLink, Calendar } from 'lucide-react';
import { motion as framerMotion } from 'framer-motion';

const codingMetrics = [
  {
    title: 'LeetCode Problem Solver',
    score: '250+ Solved',
    desc: 'Solved over 250 Data Structures and Algorithms problems, covering arrays, trees, dynamic programming, and graphs.',
    icon: <Code2 className="h-6 w-6 text-yellow-500" />,
    link: 'https://leetcode.com/u/laksh-22_/'
  },
  {
    title: 'Apna College Sigma Program',
    score: 'MERN & DSA',
    desc: 'Completed rigorous curriculum covering Advanced Java, Data Structures & Algorithms, and MERN Full Stack Development.',
    icon: <Trophy className="h-6 w-6 text-indigo-500" />,
    link: '#'
  },
  {
    title: 'CS Fundamentals Mastery',
    score: 'Core Concepts',
    desc: 'Strong academic foundation in Object-Oriented Programming (OOP), Database Management Systems (DBMS), and Computer Networks.',
    icon: <CheckCircle2 className="h-6 w-6 text-emerald-500" />,
    link: null
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 dark:bg-darkBg bg-lightBg transition-colors duration-300 relative overflow-hidden">
      <div className="glow-circle top-10 left-10 w-[300px] h-[300px] bg-indigo-500/10 dark:bg-indigo-500/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <framerMotion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold font-outfit text-slate-900 dark:text-white"
          >
            Milestones & <span className="text-gradient-primary">Achievements</span>
          </framerMotion.h2>
          <framerMotion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-1 w-20 bg-indigo-500 mx-auto mt-4 rounded-full"
          ></framerMotion.div>
          <p className="text-slate-600 dark:text-white mt-6 font-sans">
            Demonstrated capabilities in problem solving, algorithmic thinking, and modern full-stack application development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LeetCode & Skills highlights */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            {codingMetrics.map((item, idx) => (
              <framerMotion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ x: 8 }}
                className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-850 flex items-start space-x-4 shadow-sm hover:border-indigo-500/30 transition-all duration-200"
              >
                <div className="p-3 bg-slate-100 dark:bg-slate-800/80 rounded-xl flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-grow space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-outfit font-bold text-lg text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <span className="font-mono text-xs font-bold text-indigo-500 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-2.5 py-1 rounded-md">
                      {item.score}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-white font-sans leading-relaxed">
                    {item.desc}
                  </p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs text-indigo-500 hover:text-indigo-600 font-semibold font-outfit mt-2 pt-2 border-t border-slate-200/40 dark:border-slate-800/40 w-full"
                    >
                      <span>Verify profile / details</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </framerMotion.div>
            ))}
          </div>

          {/* Certificate showcase */}
          <framerMotion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex"
          >
            <div className="w-full rounded-2xl bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 p-1 flex">
              <div className="w-full h-full bg-slate-900/95 rounded-[15px] p-8 flex flex-col justify-between relative overflow-hidden text-white font-outfit">
                {/* Accent glow */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/30 rounded-full filter blur-2xl"></div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-indigo-500/20 rounded-xl border border-indigo-500/30">
                      <Award className="h-7 w-7 text-indigo-400" />
                    </div>
                    <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest font-bold">
                      Credential
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                      Sigma Web Development & DSA
                    </h3>
                    <p className="text-indigo-300 font-mono text-sm">
                      Apna College Program
                    </p>
                  </div>
                  
                  <p className="text-sm text-slate-300 leading-relaxed font-sans font-light">
                    An intensive program covering core web architecture, advanced data structures, algorithms in Java, and MERN Stack (MongoDB, Express, React, Node.js) development.
                  </p>
                </div>

                <div className="pt-8 border-t border-slate-850/60 mt-8 space-y-4">
                  <div className="flex items-center space-x-3 text-xs text-slate-400 font-mono">
                    <Calendar className="h-4 w-4 text-indigo-400" />
                    <span>Issued: May 2026</span>
                  </div>
                  <a
                    href="/certificate-sigma-90-69189c68c6c025e40a03af27.pdf"
                    download="Lakshmikant_Khandre_ApnaCollege_Sigma_Certificate.pdf"
                    className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-bold flex items-center justify-center space-x-2 text-sm shadow-lg shadow-indigo-500/15 transition-all"
                  >
                    <span>Download Certificate PDF</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </framerMotion.div>

        </div>

      </div>
    </section>
  );
};

export default Achievements;
