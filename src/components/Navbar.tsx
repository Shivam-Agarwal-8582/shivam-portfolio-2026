import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';
import { Sun, Moon, Download, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Coding Profiles', href: '#coding-profiles' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAFAFF]/95 dark:bg-[#0B0F17]/95 backdrop-blur-md shadow-sm border-b border-gray-200/80 dark:border-gray-800/80 py-3.5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center space-x-3 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] dark:text-white"
          >
            <span className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#7C3AED] to-[#2563EB] flex items-center justify-center text-white text-xl font-extrabold shadow-md group-hover:scale-105 transition-transform duration-200">
              SA
            </span>
            <span className="font-extrabold tracking-wider">
              SA<span className="text-[#7C3AED]">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-xl text-sm xl:text-base font-semibold text-gray-700 dark:text-gray-300 hover:text-[#7C3AED] dark:hover:text-[#A78BFA] hover:bg-purple-50 dark:hover:bg-purple-950/40 transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons: Resume & Theme Toggle */}
          <div className="hidden sm:flex items-center space-x-3.5">
            <a
              href={personalInfo.resumeUrl}
              download="Shivam_Agarwal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-xl text-sm font-bold bg-white dark:bg-[#1E293B] text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 shadow-sm hover:border-[#7C3AED] hover:text-[#7C3AED] dark:hover:border-[#7C3AED] dark:hover:text-[#A78BFA] transition-all duration-200 hover:shadow"
              title="Download Shivam Agarwal's verified Resume (PDF)"
            >
              <Download className="w-4 h-4 text-[#7C3AED]" />
              <span>Resume</span>
            </a>

            <button
              onClick={toggleTheme}
              aria-label="Toggle light and dark theme"
              className="p-2.5 rounded-xl text-gray-700 dark:text-gray-300 bg-white dark:bg-[#1E293B] border border-gray-200 dark:border-gray-700 hover:text-[#7C3AED] dark:hover:text-[#A78BFA] hover:border-[#7C3AED] transition-all duration-200 shadow-sm"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-purple-600" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2.5">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2.5 rounded-xl text-gray-700 dark:text-gray-300 bg-white dark:bg-[#1E293B] border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-purple-600" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2.5 rounded-xl text-gray-700 dark:text-gray-300 bg-white dark:bg-[#1E293B] border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 p-5 bg-white dark:bg-[#111827] rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl transition-all">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-[#7C3AED]"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
                <a
                  href={personalInfo.resumeUrl}
                  download="Shivam_Agarwal_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2.5 px-5 py-3.5 rounded-2xl font-bold bg-[#7C3AED] text-white text-base shadow-md hover:bg-[#6D28D9]"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
