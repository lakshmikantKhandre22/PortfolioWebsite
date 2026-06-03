import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Layout, Server, Database, Key, ShieldCheck, Cpu, Terminal } from 'lucide-react';

const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    icon: <Code className="h-5 w-5 text-indigo-500" />,
    skills: [
      { name: 'C', level: 85 },
      { name: 'C++', level: 88 },
      { name: 'Java', level: 80 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: <Layout className="h-5 w-5 text-purple-500" />,
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Redux Toolkit', level: 85 },
      { name: 'React Router', level: 90 },
      { name: 'Bootstrap', level: 80 }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: <Server className="h-5 w-5 text-pink-500" />,
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 90 },
      { name: 'REST APIs', level: 92 },
      { name: 'MVC Architecture', level: 88 }
    ]
  },
  {
    id: 'database',
    title: 'Database & Auth',
    icon: <Database className="h-5 w-5 text-cyan-500" />,
    skills: [
      { name: 'MongoDB', level: 90 },
      { name: 'Mongoose ODM', level: 88 },
      { name: 'SQL', level: 80 },
      { name: 'JWT Auth', level: 85 },
      { name: 'Passport.js', level: 75 }
    ]
  },
  {
    id: 'concepts',
    title: 'Core CS & Tools',
    icon: <Cpu className="h-5 w-5 text-emerald-500" />,
    skills: [
      { name: 'Data Structures & Algorithms', level: 85 },
      { name: 'Object-Oriented Programming (OOP)', level: 80 },
      { name: 'DBMS Concepts', level: 82 },
      { name: 'Git & GitHub', level: 88 },
      { name: 'Postman', level: 90 },
      { name: 'VS Code', level: 95 }
    ]
  }
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 dark:bg-darkBg bg-lightBg transition-colors duration-300 grid-bg relative">
      <div className="glow-circle top-1/3 right-1/4 w-[300px] h-[300px] bg-pink-500/10 dark:bg-pink-500/5"></div>

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
            My Technical <span className="text-gradient-primary">Skills</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-1 w-20 bg-indigo-500 mx-auto mt-4 rounded-full"
          ></motion.div>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold font-outfit transition-all duration-200 border ${
              activeTab === 'all'
                ? 'bg-indigo-500 border-indigo-500 text-white shadow-md shadow-indigo-500/15'
                : 'glass-card border-slate-200 dark:border-slate-800 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold font-outfit transition-all duration-200 border flex items-center space-x-2 ${
                activeTab === cat.id
                  ? 'bg-indigo-500 border-indigo-500 text-white shadow-md shadow-indigo-500/15'
                  : 'glass-card border-slate-200 dark:border-slate-800 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
              }`}
            >
              {cat.icon}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card border border-slate-200 dark:border-slate-850 p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-lg hover:border-indigo-500/30 dark:hover:border-indigo-400/20 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-200/50 dark:border-slate-800/50">
                    <div className="p-2.5 bg-slate-100 dark:bg-slate-800/80 rounded-xl">
                      {category.icon}
                    </div>
                    <h3 className="font-outfit font-bold text-lg text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-5">
                    {category.skills.map((skill, index) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-sans font-medium text-slate-700 dark:text-white">
                            {skill.name}
                          </span>
                          <span className="font-mono text-xs text-indigo-500 dark:text-indigo-400 font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar Container */}
                        <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.05 }}
                            className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
