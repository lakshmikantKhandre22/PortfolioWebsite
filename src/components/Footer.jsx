import { Terminal, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-850 dark:bg-darkBg bg-lightBg transition-colors duration-300 font-outfit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Info */}
          <div className="flex items-center space-x-2 text-slate-800 dark:text-white font-bold text-lg">
            <Terminal className="h-5 w-5 text-indigo-500" />
            <span>Lakshmikant Khandre</span>
          </div>

          {/* Tag */}
          <p className="text-sm text-slate-500 dark:text-slate-500 font-sans">
            © {new Date().getFullYear()} Lakshmikant. All rights reserved. Designed & Built with ❤️
          </p>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/lakshmikantKhandre22"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/85 text-slate-600 dark:text-slate-400 hover:text-indigo-500 transition-colors border border-slate-200/20 dark:border-slate-800/20 flex items-center justify-center"
              aria-label="GitHub Profile"
            >
              <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/lakshmikantkhandre/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/85 text-slate-600 dark:text-slate-400 hover:text-indigo-500 transition-colors border border-slate-200/20 dark:border-slate-800/20 flex items-center justify-center"
              aria-label="LinkedIn Profile"
            >
              <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://leetcode.com/u/laksh-22_/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/85 text-slate-600 dark:text-slate-400 hover:text-indigo-500 transition-colors border border-slate-200/20 dark:border-slate-800/20 flex items-center justify-center"
              aria-label="LeetCode Profile"
            >
              <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.777 9.778a3.75 3.75 0 0 0 0 5.304l3.194 3.194a3.75 3.75 0 0 0 5.304 0l9.778-9.777a1.375 1.375 0 0 0-.002-1.944l-3.193-3.193a1.375 1.375 0 0 0-1.943-.002L9.672 10.02a.625.625 0 1 1-.884-.884l6.216-6.215a1.375 1.375 0 0 0 0-1.943l-1.375-1.375A1.375 1.375 0 0 0 13.483 0zm-6.22 13.916a1.25 1.25 0 1 1-1.767 1.768 1.25 1.25 0 0 1 1.768-1.768zm3.535-3.535a1.25 1.25 0 1 1-1.768 1.768 1.25 1.25 0 0 1 1.768-1.768z" />
              </svg>
            </a>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white transition-all shadow-md shadow-indigo-500/10 flex items-center justify-center"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
