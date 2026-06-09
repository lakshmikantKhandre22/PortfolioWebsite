import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, MapPin, Award, CheckCircle } from 'lucide-react';

const courses = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming (OOP)",
  "Database Management Systems (DBMS)",
  "Web Development Architectures",
  "Discrete Mathematics",
  "Software Engineering"
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-[#0b101d] transition-colors duration-300 relative">
      <div className="glow-circle bottom-10 right-10 w-[300px] h-[300px] bg-purple-500/10 dark:bg-purple-500/5"></div>

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
            My <span className="text-gradient-primary">Education</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-1 w-20 bg-indigo-500 mx-auto mt-4 rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Main timeline college card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex"
          >
            <div className="w-full glass-card border border-slate-200 dark:border-slate-850 p-8 rounded-3xl flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-tr-3xl"></div>
              
              <div className="space-y-6">
                {/* College Title */}
                <div className="flex items-start space-x-4">
                  <div className="p-3.5 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-2xl flex-shrink-0 border border-indigo-100/50 dark:border-indigo-900/30">
                    <GraduationCap className="h-7 w-7" />
                  </div>
                  <div>
                    <span className="px-2.5 py-1 text-xs font-bold font-mono rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-500 dark:text-indigo-400 border border-indigo-100/50 dark:border-indigo-900/20">
                      2024 – 2028 (Expected)
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-outfit text-slate-900 dark:text-white mt-3">
                      JSPM's Rajarshi Shahu College of Engineering
                    </h3>
                    <p className="text-slate-600 dark:text-white font-medium font-outfit mt-1">
                      Bachelor of Technology (B.Tech) – Information Technology
                    </p>
                    <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-500 mt-2 font-mono">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>Pune, Maharashtra, India</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-white leading-relaxed font-sans pt-2 border-t border-slate-200/50 dark:border-slate-800/50">
                  Pursuing my undergraduate engineering degree with a specialization in Information Technology. Focusing heavily on coding practices, database architectures, operating systems, and full-stack software development workflows.
                </p>
              </div>

              {/* CGPA Banner */}
              <div className="flex items-center justify-between p-4 sm:p-5 mt-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-100/30 dark:border-indigo-900/20">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-emerald-500/20 rounded-xl text-emerald-600 dark:text-emerald-400">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Academic Performance</p>
                    <p className="text-sm sm:text-base font-bold font-outfit text-slate-800 dark:text-white">Current Cumulative GPA</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl sm:text-3xl font-extrabold font-outfit text-gradient-primary">9.15</span>
                  <span className="text-xs font-mono text-slate-500 block">/ 10.00</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key coursework list card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex"
          >
            <div className="w-full glass-card border border-slate-200 dark:border-slate-850 p-8 rounded-3xl flex flex-col justify-between shadow-sm">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-indigo-500" />
                  <h3 className="text-lg font-bold font-outfit text-slate-900 dark:text-white">
                    Key Coursework
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-white font-sans">
                  Foundational computer science subjects completed as part of the IT engineering curriculum:
                </p>
                <div className="grid grid-cols-1 gap-3.5 pt-2">
                  {courses.map((course) => (
                    <div 
                      key={course} 
                      className="flex items-center space-x-3 p-3 rounded-xl bg-slate-100/50 dark:bg-slate-850/45 hover:bg-slate-100 dark:hover:bg-black transition-colors border border-slate-200/20 dark:border-slate-800/20"
                    >
                      <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium font-outfit text-slate-700 dark:text-white">
                        {course}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Education;
