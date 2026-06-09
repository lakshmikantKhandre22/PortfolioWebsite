import { motion } from 'framer-motion';
import { Code2, Award, BookOpen, Layers } from 'lucide-react';

const stats = [
  { 
    id: 1, 
    icon: <Code2 className="h-6 w-6 text-indigo-500" />, 
    value: "250+", 
    label: "LeetCode DSA Solutions",
    description: "Strong problem solving foundation" 
  },
  { 
    id: 2, 
    icon: <Award className="h-6 w-6 text-purple-500" />, 
    value: "9.15", 
    label: "B.Tech CGPA", 
    description: "Top academic performer at RSCOE"
  },
  { 
    id: 3, 
    icon: <Layers className="h-6 w-6 text-pink-500" />, 
    value: "5+", 
    label: "Projects Completed",
    description: "MERN stack and AI integrations" 
  },
  { 
    id: 4, 
    icon: <BookOpen className="h-6 w-6 text-cyan-500" />, 
    value: "100%", 
    label: "Commitment",
    description: "Always learning and adapting" 
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-[#0b101d] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold font-outfit text-slate-900 dark:text-white"
          >
            About <span className="text-gradient-primary">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-1 w-20 bg-indigo-500 mx-auto mt-4 rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Bio text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-slate-600 dark:text-white"
          >
            <h3 className="text-2xl font-bold font-outfit text-slate-800 dark:text-slate-100">
              Who is <span className="text-indigo-500 dark:text-indigo-400">Lakshmikant</span>?
            </h3>
            
            <p className="text-lg leading-relaxed font-sans">
              I am a **Full Stack MERN Developer** and IT student at **JSPM's Rajarshi Shahu College of Engineering, Pune**, passionate about building scalable, user-centric web applications and solving complex algorithmic challenges.
            </p>
            
            <p className="text-base leading-relaxed font-sans">
              My technical core lies in **React.js, Next.js, Tailwind CSS, Node.js, Express, MongoDB, and SQL**. I specialize in clean MVC database design, robust backend logic, and integrating smart APIs (like Gemini AI) to build high-impact web products.
            </p>

            <p className="text-base leading-relaxed font-sans">
              With a strong foundation in **Data Structures & Algorithms (DSA)**, OOP, and Software Engineering, I am driven to write clean, optimized, and reusable code that solves real-world problems.
            </p>

            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-r-lg">
              <span className="italic font-sans text-slate-700 dark:text-white font-medium">
                "Driven by curiosity, backed by structured problem-solving, and committed to engineering digital experiences that make an impact."
              </span>
            </div>
          </motion.div>

          {/* Grid of Stats Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stat.id * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-850 flex flex-col justify-between"
              >
                <div className="p-3 bg-slate-100 dark:bg-slate-800/80 rounded-xl w-fit mb-4">
                  {stat.icon}
                </div>
                <div>
                  <h4 className="text-3xl font-extrabold font-outfit text-slate-900 dark:text-white mb-1">
                    {stat.value}
                  </h4>
                  <p className="text-sm font-semibold font-outfit text-slate-800 dark:text-slate-200">
                    {stat.label}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
