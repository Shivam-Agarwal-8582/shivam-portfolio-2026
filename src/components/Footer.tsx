import { personalInfo } from '../data/portfolioData';
import { Code2, ArrowUp } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gray-200/80 dark:border-gray-800/80 py-14 px-4 sm:px-6 lg:px-10 xl:px-16 bg-white/70 dark:bg-[#0B0F17]/70">
      <div className="w-full max-w-[1720px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Message */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-5 text-center sm:text-left">
          <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#171717] dark:text-white">
            Shivam Agarwal<span className="text-[#7C3AED]">.</span>
          </span>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700 text-lg">|</span>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium">
            Designed and built with curiosity.
          </p>
        </div>

        {/* Center/Right: Social Profile Links & Scroll to top */}
        <div className="flex items-center space-x-4">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl text-gray-600 dark:text-gray-400 hover:text-[#7C3AED] dark:hover:text-[#A78BFA] hover:bg-purple-50 dark:hover:bg-purple-950/40 transition-colors"
            title="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>

          <a
            href={personalInfo.leetcodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl text-gray-600 dark:text-gray-400 hover:text-[#FF6B6B] hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
            title="LeetCode Profile"
          >
            <Code2 className="w-5 h-5 text-[#FF6B6B]" />
          </a>

          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl text-gray-600 dark:text-gray-400 hover:text-[#2563EB] hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors text-base font-extrabold"
            title="LinkedIn Profile"
          >
            in
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="p-3 rounded-2xl text-gray-600 dark:text-gray-400 hover:text-[#7C3AED] hover:bg-purple-50 dark:hover:bg-purple-950/40 transition-colors bg-gray-100 dark:bg-[#1E293B]"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
