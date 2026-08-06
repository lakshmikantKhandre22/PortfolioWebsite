import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, Layout, ChevronLeft, ChevronRight } from 'lucide-react';

const projectsList = [
  {
    id: 1,
    title: 'JobTrack',
    subtitle: 'AI-Powered Job & Internship Tracker',
    category: 'mern',
    description: 'JobTrack is a full-stack MERN application that helps students and job seekers manage their entire job search in one place. Users can upload resumes, receive AI-powered resume analysis, compare resumes with job descriptions, track applications, and monitor interview progress through an interactive dashboard.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Cloudinary', 'Gemini AI'],
    features: [
      'AI Resume Analysis & ATS Resume Scoring',
      'Resume vs Job Description Matching & AI Suggestions',
      'Job & Internship Application Tracker with Analytics',
      'Interview Scheduling & Reminders',
      'Secure JWT Auth & Cloudinary Resume Storage'
    ],
    github: 'https://github.com/lakshmikantKhandre22/JobTrack',
    demo: 'https://jobtrack-2.onrender.com',
    screenshots: [
      '/assets/projects/jobtrack1.png',
      '/assets/projects/jobtrack2.png',
      '/assets/projects/jobtrack3.png'
    ]
  },
  {
    id: 2,
    title: 'ExpenseTracker',
    subtitle: 'AI Personal Finance & Wealth Management',
    category: 'mern',
    description: 'ExpenseTracker is a premium, full-stack personal finance and wealth management platform. It allows users to log transactions, structure category budgets with warning alerts, scan physical paper receipts with OCR parsing, view financial cash flow analytics, and consult with an AI wealth planner.',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Cloudinary', 'Recharts', 'Gemini AI'],
    features: [
      'Interactive AI Wealth Advisor Chatbot',
      'Real-Time Budget Warnings & Alert Badges',
      'Dynamic Recharts Financial Analytics',
      'Receipt Scanning with OCR Parsing',
      'Secure JWT Authentication & Session Handling'
    ],
    github: 'https://github.com/lakshmikantKhandre22/Ai-Expense-Tracker-FullStack',
    demo: 'https://ai-expense-tracker-fullstack-mern-1.onrender.com',
    screenshots: [
      '/assets/projects/expense1.png',
      '/assets/projects/expense2.png',
      '/assets/projects/expense3.png'
    ]
  },
  {
    id: 3,
    title: 'ShopSphere',
    subtitle: 'Full-Stack MERN E-Commerce Platform',
    category: 'mern',
    description: 'ShopSphere is a feature-rich full-stack MERN e-commerce application that enables users to browse products, manage shopping carts and wishlists, process payments securely, and monitor order histories through an intuitive dashboard.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'Tailwind CSS', 'Razorpay', 'Cloudinary', 'JWT'],
    features: [
      'Product Search, Filtering & Detail Pages',
      'Secure JWT Auth & Admin Management Dashboard',
      'Razorpay Payment Gateway Integration',
      'Cart, Wishlist & Order History Management',
      'Cloudinary Image Uploads for Product Catalog'
    ],
    github: 'https://github.com/lakshmikantKhandre22/Ai_Powered_FullStack_Ecommerce_Website',
    demo: 'https://ai-powered-fullstack-ecommerce-website-fxdw.onrender.com',
    screenshots: [
      '/assets/projects/ecom1.png',
      '/assets/projects/ecom2.png',
      '/assets/projects/ecom3.png'
    ]
  },
  {
    id: 4,
    title: 'Airbnb Clone',
    subtitle: 'Full Stack MERN Vacation Rental Platform',
    category: 'mern',
    description: 'A complete replication of Airbnb with vacation rental features, showcasing listing search, booking, location maps, reviews, and host dashboard.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Tailwind CSS', 'JWT', 'Cloudinary'],
    features: [
      'Property Listings CRUD with upload',
      'Booking Reservation engine',
      'User Review & Rating system',
      'Interactive location maps',
      'Host Management Dashboard'
    ],
    github: 'https://github.com/lakshmikantKhandre22/AirbnbMernWebsite',
    demo: 'https://airbnbmernwebsite-1.onrender.com',
    screenshots: [
      '/assets/projects/air1.png',
      '/assets/projects/air2.png'
    ]
  },
  {
    id: 5,
    title: 'BlogApp',
    subtitle: 'Full Stack Blog Platform',
    category: 'mern',
    description: 'A full-stack blog publishing space utilizing an MVC architecture. Supports categories, user comments, and secure profile customization.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Passport.js', 'Bootstrap', 'Cloudinary'],
    features: [
      'Blog Article CRUD Operations',
      'Interactive Comments Section',
      'Category/Tag filtration system',
      'Cloudinary-managed image uploading',
      'Passport.js JWT authentication'
    ],
    github: 'https://github.com/lakshmikantKhandre22/FullStackBlogApp',
    demo: 'https://fullstackblogapp-z7bi.onrender.com',
    screenshots: [
      '/assets/projects/Blog1.png',
      '/assets/projects/Blog2.png'
    ]
  },
  {
    id: 6,
    title: 'Weather App',
    subtitle: 'Simple React Weather Dashboard',
    category: 'react',
    description: 'A responsive weather dashboard fetching real-time metrics from the OpenWeather API. Features dynamic styling matching the weather condition of the searched city.',
    tech: ['React.js', 'Tailwind CSS', 'OpenWeather API', 'JavaScript'],
    features: [
      'Real-time temperature and wind info',
      'Dynamic weather state backgrounds',
      'Search auto-complete & history',
      'Responsive, mobile-first design'
    ],
    github: 'https://github.com/lakshmikantKhandre22/Simple-React-Weather-App',
    demo: 'https://simple-react-weather-app-ochre.vercel.app',
    screenshots: [
      '/assets/projects/weather1.png'
    ]
  }
];

// Screenshot Carousel Sub-Component
const ImageCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    // Elegant SVG placeholder when there are no screenshots
    return (
      <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-pink-900/40 flex flex-col items-center justify-center relative p-4 text-center select-none overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <Layout className="h-10 w-10 text-indigo-400 mb-2 animate-bounce" />
        <span className="font-outfit font-bold text-slate-200 text-lg uppercase tracking-wide">{title}</span>
        <span className="font-mono text-xs text-indigo-400 mt-1">Interactive UI Project</span>
      </div>
    );
  }

  const prevSlide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-slate-950 group">
      <img
        src={images[currentIndex]}
        alt={`${title} screenshot ${currentIndex + 1}`}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          {/* Dot Indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  idx === currentIndex ? 'bg-indigo-500' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projectsList
    : projectsList.filter(proj => proj.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-[#0b101d] transition-colors duration-300 relative">
      <div className="glow-circle bottom-1/3 left-10 w-[350px] h-[350px] bg-indigo-500/10 dark:bg-indigo-500/5"></div>
      
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
            Featured <span className="text-gradient-primary">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-1 w-20 bg-indigo-500 mx-auto mt-4 rounded-full"
          ></motion.div>
          <p className="text-slate-600 dark:text-white mt-6 font-sans">
            Here are the primary projects showcasing full stack web systems, APIs, cloud uploads, and AI integration.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-xl text-sm font-semibold font-outfit transition-all border ${
              filter === 'all'
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 border-indigo-500 text-white shadow-md shadow-indigo-500/15'
                : 'glass-card border-slate-200 dark:border-slate-800 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
            }`}
          >
            All Work
          </button>
          <button
            onClick={() => setFilter('mern')}
            className={`px-5 py-2 rounded-xl text-sm font-semibold font-outfit transition-all border flex items-center space-x-2 ${
              filter === 'mern'
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 border-indigo-500 text-white shadow-md shadow-indigo-500/15'
                : 'glass-card border-slate-200 dark:border-slate-800 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
            }`}
          >
            <Layers className="h-4 w-4" />
            <span>MERN Stack</span>
          </button>
          <button
            onClick={() => setFilter('react')}
            className={`px-5 py-2 rounded-xl text-sm font-semibold font-outfit transition-all border flex items-center space-x-2 ${
              filter === 'react'
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 border-indigo-500 text-white shadow-md shadow-indigo-500/15'
                : 'glass-card border-slate-200 dark:border-slate-800 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
            }`}
          >
            <Layout className="h-4 w-4" />
            <span>React Apps</span>
          </button>
        </div>

        {/* Project Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card border border-slate-200 dark:border-slate-850 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-indigo-500/30 dark:hover:border-indigo-400/20 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Screenshot or SVG Mockup */}
                <ImageCarousel images={project.screenshots} title={project.title} />

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-mono text-indigo-500 dark:text-indigo-400 uppercase tracking-widest font-bold">
                        {project.category === 'mern' ? 'MERN Stack' : 'Frontend'}
                      </span>
                      <h3 className="text-xl font-bold font-outfit text-slate-900 dark:text-white mt-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium italic mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-white font-sans leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((t) => (
                        <span 
                          key={t}
                          className="px-2 py-0.5 text-xs font-semibold font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Feature Bullets */}
                    <ul className="text-xs text-slate-600 dark:text-white font-sans space-y-1.5 pt-2 border-t border-slate-200/50 dark:border-slate-800/50">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
                          <span className="truncate">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Links */}
                  <div className="flex items-center justify-between gap-4 pt-6 mt-6 border-t border-slate-200/30 dark:border-slate-800/30">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold font-outfit text-slate-600 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>Code Repository</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 px-3.5 py-1.5 bg-indigo-50 dark:bg-indigo-950/45 hover:bg-indigo-100 text-indigo-600 dark:text-indigo-400 text-xs font-bold font-outfit rounded-lg transition-colors border border-indigo-100/50 dark:border-indigo-900/30"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
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

export default Projects;
