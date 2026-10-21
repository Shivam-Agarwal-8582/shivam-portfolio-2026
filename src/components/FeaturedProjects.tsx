import { useState } from 'react';
import { featuredProjects } from '../data/portfolioData';
import { ProjectVisual } from './ProjectVisuals';
import { ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GithubIcon } from './Icons';

const filterCategories = [
  'All Projects',
  'AI',
  'Full Stack',
  'DSA & Algorithms'
] as const;

export const FeaturedProjects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All Projects');

  const filteredProjects = featuredProjects.filter((project) => {
    if (activeFilter === 'All Projects') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-10 xl:px-16 relative bg-white/50 dark:bg-[#0B0F17]/50">
      <div className="w-full max-w-[1720px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7C3AED] dark:text-[#C4B5FD] bg-purple-50 dark:bg-purple-950/50 px-4 py-1.5 rounded-full border border-purple-200/80 dark:border-purple-800/60">
            Selected Work
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Production-ready systems, algorithmic engines, and full-stack software backed by genuine GitHub code.
          </p>
          <div className="mt-3 w-20 h-1.5 bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#FF6B6B] mx-auto rounded-full" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-2xl text-sm sm:text-base font-bold transition-all duration-200 ${
                activeFilter === category
                  ? 'bg-[#7C3AED] text-white shadow-lg shadow-purple-500/25 scale-105'
                  : 'bg-white dark:bg-[#1E293B] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const borderAccentClasses = {
                purple: 'border-purple-200/90 hover:border-purple-400 dark:border-purple-900/60 dark:hover:border-purple-600',
                blue: 'border-blue-200/90 hover:border-blue-400 dark:border-blue-900/60 dark:hover:border-blue-600',
                coral: 'border-red-200/90 hover:border-red-400 dark:border-red-900/60 dark:hover:border-red-600',
                emerald: 'border-emerald-200/90 hover:border-emerald-400 dark:border-emerald-900/60 dark:hover:border-emerald-600',
              }[project.accentColor] || 'border-gray-200 hover:border-gray-400';

              const badgeAccentClasses = {
                purple: 'bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200 dark:border-purple-800',
                blue: 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800',
                coral: 'bg-red-50 text-red-700 dark:bg-red-950/60 dark:text-red-300 border-red-200 dark:border-red-800',
                emerald: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
              }[project.accentColor] || 'bg-gray-100 text-gray-700';

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`group rounded-3xl bg-white dark:bg-[#111827] border ${borderAccentClasses} shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden`}
                >
                  {/* Top Custom Visual Illustration Container */}
                  <div className="h-64 sm:h-72 lg:h-80 w-full bg-gray-50/80 dark:bg-gray-900/40 border-b border-gray-100 dark:border-gray-800/80 overflow-hidden">
                    <ProjectVisual type={project.visualType} />
                  </div>

                  {/* Card Content */}
                  <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category Tag */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider border ${badgeAccentClasses}`}>
                          {project.category}
                        </span>
                        {project.liveDemoUrl && (
                          <span className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>Live Application</span>
                          </span>
                        )}
                      </div>

                      {/* Project Title */}
                      <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#171717] dark:text-white group-hover:text-[#7C3AED] dark:group-hover:text-[#C4B5FD] transition-colors duration-200">
                        {project.title}
                      </h3>

                      {/* Short Description */}
                      <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        {project.shortDescription}
                      </p>

                      {/* Verified Highlights */}
                      <ul className="mt-5 space-y-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                        {project.highlights.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-start space-x-2.5">
                            <span className="text-[#7C3AED] font-bold text-base">›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technology Badges */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-gray-100 dark:bg-[#1E293B] text-gray-800 dark:text-gray-200 border border-gray-200/90 dark:border-gray-700/90"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="mt-8 pt-5 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-3">
                        {/* GitHub link */}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gray-100 dark:bg-[#1E293B] text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors shadow-xs"
                          title="View Source on GitHub"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>GitHub Repository</span>
                        </a>

                        {/* Live Demo link (only shown when genuine demo exists) */}
                        {project.liveDemoUrl && (
                          <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#7C3AED] text-white hover:bg-[#6D28D9] transition-colors shadow-sm"
                            title="Open Live Application"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>

                      <span className="text-sm font-mono text-gray-400 dark:text-gray-500 font-bold">
                        0{index + 1}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
