import { secondaryProjects } from '../data/portfolioData';
import { FolderGit2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon } from './Icons';

export const MoreProjects = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-10 xl:px-16 relative">
      <div className="w-full max-w-[1720px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#2563EB] dark:text-[#93C5FD] bg-blue-50 dark:bg-blue-950/50 px-4 py-1.5 rounded-full border border-blue-200/80 dark:border-blue-800/60">
            Repository Archive
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] dark:text-white">
            More things I've built
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Secondary systems, simulations, and algorithmic experiments explored during my coursework.
          </p>
          <div className="mt-3 w-20 h-1.5 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] mx-auto rounded-full" />
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {secondaryProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="group p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#111827] border border-gray-200/90 dark:border-gray-800/90 shadow-sm hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-800 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top bar with folder icon & github link */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-800/40 flex items-center justify-center text-[#7C3AED]">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    title={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#171717] dark:text-white group-hover:text-[#7C3AED] dark:group-hover:text-[#C4B5FD] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              {/* Technologies at Bottom */}
              <div className="mt-7 pt-5 border-t border-gray-100 dark:border-gray-800/70">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-lg bg-gray-100 dark:bg-[#1E293B] text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
