import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen dark:bg-darkBg bg-lightBg text-slate-800 dark:text-slate-200 transition-colors duration-300 antialiased overflow-x-hidden selection:bg-indigo-500 selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Landing Section */}
        <Hero />

        {/* Professional Summary & Metrics */}
        <About />

        {/* Interactive Skills Radar / Grid */}
        <Skills />

        {/* Showcasing MERN & React Projects */}
        <Projects />

        {/* LeetCode & Course Milestones */}
        <Achievements />

        {/* College & Degree Timeline */}
        <Education />

        {/* Functional Contact Form */}
        <Contact />

        {/* Bottom Social Row & Up Button */}
        <Footer />
      </div>
    </ThemeProvider>
  );

}


export default App;





