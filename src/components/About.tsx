import { personalInfo, featuredProjects } from '../data/portfolioData';
import { Code2, FolderGit2, GraduationCap, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const About = () => {
  const stats = [
    {
      label: 'DSA Problems Solved',
      value: personalInfo.dsaSolved,
      subtext: 'LeetCode & Codeforces',
      icon: Code2,
      color: 'text-[#FF6B6B]',
      bgColor: 'bg-red-50 dark:bg-red-950/30',
      borderColor: 'border-red-200/60 dark:border-red-800/40'
    },
    {
      label: 'Academic Standing',
      value: '8.11',
      unit: '/10 CGPA',
      subtext: 'Chandigarh University',
      icon: GraduationCap,
      color: 'text-[#7C3AED]',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      borderColor: 'border-purple-200/60 dark:border-purple-800/40'
    },
    {
      label: 'Featured Projects',
      value: `${featuredProjects.length}`,
      subtext: 'Verified Implementations',
      icon: FolderGit2,
      color: 'text-[#2563EB]',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200/60 dark:border-blue-800/40'
    }
  ];

  const focusPoints = [
    'Backend Engineering with Spring Boot, Spring Security, and JPA',
    'Full-Stack Architecture with React.js, TypeScript, and REST APIs',
    'AI Integrations utilizing Google Gemini 1.5 API workflows',
    'Algorithm Optimization & Data Structures with verified O(1) complexities'
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-10 xl:px-16 relative">
      <div className="w-full max-w-[1720px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7C3AED] dark:text-[#C4B5FD] bg-purple-50 dark:bg-purple-950/50 px-4 py-1.5 rounded-full border border-purple-200/80 dark:border-purple-800/60">
            Background & Focus
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] dark:text-white">
            A little about me
          </h2>
          <div className="mt-3 w-20 h-1.5 bg-gradient-to-r from-[#7C3AED] to-[#2563EB] mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-gray-700 dark:text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed">
            {personalInfo.aboutBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            {/* Core Competencies list */}
            <div className="pt-4">
              <h3 className="font-display text-base sm:text-lg font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">
                Current Technical Focus:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {focusPoints.map((point, i) => (
                  <div key={i} className="flex items-start space-x-3 text-base sm:text-lg text-gray-800 dark:text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-[#7C3AED] shrink-0 mt-1" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Verified Statistic Cards */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#111827] border ${stat.borderColor} shadow-md hover:shadow-xl transition-all duration-200 flex items-center space-x-6`}
                >
                  <div className={`w-18 h-18 sm:w-20 sm:h-20 rounded-3xl ${stat.bgColor} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-9 h-9 sm:w-10 sm:h-10 ${stat.color}`} />
                  </div>
                  <div>
                    <div className="flex items-baseline space-x-2">
                      <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#171717] dark:text-white">
                        {stat.value}
                      </span>
                      {stat.unit && (
                        <span className="text-base sm:text-lg font-bold text-gray-500 dark:text-gray-400">
                          {stat.unit}
                        </span>
                      )}
                    </div>
                    <div className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mt-1">
                      {stat.label}
                    </div>
                    <div className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                      {stat.subtext}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
