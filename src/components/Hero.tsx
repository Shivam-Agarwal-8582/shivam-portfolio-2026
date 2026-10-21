import { personalInfo } from '../data/portfolioData';
import { ArrowDown, Download, Terminal, Sparkles, Code2, Database, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon } from './Icons';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-10 xl:px-16 overflow-hidden"
    >
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-amber-300/15 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
        {/* Left Column: Headline and Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Small Pill Label */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200/90 dark:border-purple-800/70 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] animate-pulse" />
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#7C3AED] dark:text-[#C4B5FD] uppercase">
              {personalInfo.headlineBadge}
            </span>
          </div>

          {/* Main Headings */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-[#171717] dark:text-white leading-[1.08]">
            Hi, I'm <span className="bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#FF6B6B] bg-clip-text text-transparent">Shivam Agarwal</span>.
          </h1>

          <p className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100">
            {personalInfo.tagline}
          </p>

          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl xl:max-w-3xl leading-relaxed">
            I'm a Computer Science Engineering student interested in building useful software with <strong className="font-semibold text-gray-900 dark:text-gray-100">Java, Spring Boot, React</strong>, and <strong className="font-semibold text-gray-900 dark:text-gray-100">AI-powered technologies</strong>. I enjoy solving algorithmic problems and developing practical applications.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap gap-4 sm:gap-5 items-center">
            <a
              href="#projects"
              className="inline-flex items-center space-x-2.5 px-7 sm:px-8 py-4 rounded-2xl bg-[#7C3AED] text-white font-bold text-base sm:text-lg shadow-lg hover:bg-[#6D28D9] hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Explore My Projects</span>
              <ArrowDown className="w-5 h-5" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Shivam_Agarwal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2.5 px-7 sm:px-8 py-4 rounded-2xl bg-white dark:bg-[#1E293B] text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 font-bold text-base sm:text-lg shadow-sm hover:border-[#7C3AED] hover:text-[#7C3AED] dark:hover:border-[#7C3AED] dark:hover:text-[#A78BFA] transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Download className="w-5 h-5 text-[#7C3AED]" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Profiles */}
          <div className="mt-9 flex flex-wrap items-center gap-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            <span className="font-bold text-xs sm:text-sm uppercase tracking-wider text-gray-400 dark:text-gray-500 mr-2">
              Connect:
            </span>

            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:px-4 sm:py-3 rounded-2xl bg-white dark:bg-[#1E293B] border border-gray-200 dark:border-gray-800 hover:border-[#7C3AED] text-gray-800 dark:text-gray-200 hover:text-[#7C3AED] transition-all duration-200 shadow-sm flex items-center space-x-2 font-semibold text-sm"
              title="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>

            <a
              href={personalInfo.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:px-4 sm:py-3 rounded-2xl bg-white dark:bg-[#1E293B] border border-gray-200 dark:border-gray-800 hover:border-[#FF6B6B] text-gray-800 dark:text-gray-200 hover:text-[#FF6B6B] transition-all duration-200 shadow-sm flex items-center space-x-2 font-semibold text-sm"
              title="LeetCode Profile (250+ solved)"
            >
              <Code2 className="w-5 h-5 text-[#FF6B6B]" />
              <span>LeetCode (250+)</span>
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:px-4 sm:py-3 rounded-2xl bg-white dark:bg-[#1E293B] border border-gray-200 dark:border-gray-800 hover:border-[#2563EB] text-gray-800 dark:text-gray-200 hover:text-[#2563EB] transition-all duration-200 shadow-sm flex items-center space-x-2 font-semibold text-sm"
              title="LinkedIn Profile"
            >
              <span className="text-base font-extrabold text-[#2563EB]">in</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Expansive Developer Terminal & Visual Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5 relative w-full"
        >
          {/* Main Visual Terminal / Architecture Card */}
          <div className="relative mx-auto w-full max-w-xl xl:max-w-2xl bg-white dark:bg-[#111827] rounded-3xl border border-gray-200/90 dark:border-gray-800/90 shadow-2xl p-7 sm:p-9 overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center space-x-2.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#FF6B6B]" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#FDE68A]" />
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-400" />
              </div>
              <div className="flex items-center space-x-1.5 text-xs sm:text-sm font-mono text-gray-400 dark:text-gray-500">
                <Terminal className="w-4 h-4" />
                <span>shivam-sde.ts</span>
              </div>
            </div>

            {/* Code / Architecture Snippet */}
            <div className="mt-5 font-mono text-sm sm:text-base leading-relaxed space-y-2.5 text-gray-700 dark:text-gray-300">
              <p className="text-purple-600 dark:text-purple-400">
                <span className="text-gray-400 dark:text-gray-500">// Candidate Profile</span>
              </p>
              <p>
                <span className="text-blue-600 dark:text-blue-400">const</span> developer = &#123;
              </p>
              <p className="pl-5">
                name: <span className="text-emerald-600 dark:text-emerald-400">'Shivam Agarwal'</span>,
              </p>
              <p className="pl-5">
                role: <span className="text-emerald-600 dark:text-emerald-400">'Aspiring SDE'</span>,
              </p>
              <p className="pl-5">
                college: <span className="text-emerald-600 dark:text-emerald-400">'Chandigarh University'</span>,
              </p>
              <p className="pl-5">
                cgpa: <span className="text-[#FF6B6B] font-bold">8.11 / 10</span>,
              </p>
              <p className="pl-5">
                dsaSolved: <span className="text-amber-500 font-bold">'250+ problems'</span>,
              </p>
              <p className="pl-5">
                stack: [<span className="text-purple-600 dark:text-purple-400">'Spring Boot'</span>, <span className="text-blue-600 dark:text-blue-400">'React'</span>, <span className="text-emerald-600 dark:text-emerald-400">'AI'</span>]
              </p>
              <p>&#125;;</p>
            </div>

            {/* Live Stack Badges */}
            <div className="mt-7 pt-5 border-t border-gray-100 dark:border-gray-800 grid grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="flex items-center space-x-2.5 p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300">
                <Layers className="w-5 h-5 text-purple-600 shrink-0" />
                <span className="font-bold">Spring Boot & JPA</span>
              </div>
              <div className="flex items-center space-x-2.5 p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300">
                <Code2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="font-bold">React & TypeScript</span>
              </div>
              <div className="flex items-center space-x-2.5 p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300">
                <Database className="w-5 h-5 text-amber-600 shrink-0" />
                <span className="font-bold">MySQL & Postgre</span>
              </div>
              <div className="flex items-center space-x-2.5 p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300">
                <Sparkles className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="font-bold">Gemini 1.5 LLM</span>
              </div>
            </div>
          </div>

          {/* Floating Pill: 250+ DSA */}
          <div className="absolute -top-5 -right-3 sm:-right-5 px-4 py-2.5 rounded-2xl bg-white dark:bg-[#1E293B] border border-gray-200 dark:border-gray-700 shadow-xl flex items-center space-x-2.5 animate-float">
            <span className="w-3 h-3 rounded-full bg-[#FF6B6B]" />
            <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-gray-100">250+ DSA Solved</span>
          </div>

          {/* Floating Pill: Concurrency & O(1) */}
          <div className="absolute -bottom-5 -left-3 sm:-left-5 px-4 py-2.5 rounded-2xl bg-white dark:bg-[#1E293B] border border-gray-200 dark:border-gray-700 shadow-xl flex items-center space-x-2.5">
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-gray-100">O(1) LRU & Concurrency</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-16 sm:mt-24 flex flex-col items-center">
        <a
          href="#about"
          className="group flex flex-col items-center text-xs sm:text-sm font-bold text-gray-400 hover:text-[#7C3AED] transition-colors"
          aria-label="Scroll to About section"
        >
          <span className="mb-2 tracking-widest uppercase text-xs">Scroll down</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-300 dark:border-gray-700 flex items-start justify-center p-1.5">
            <span className="w-2 h-3 rounded-full bg-[#7C3AED] animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
