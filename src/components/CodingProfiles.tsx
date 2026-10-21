import { codingProfiles } from '../data/portfolioData';
import { ExternalLink, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon } from './Icons';

export const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="py-24 px-4 sm:px-6 lg:px-10 xl:px-16 relative">
      <div className="w-full max-w-[1720px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF6B6B] bg-red-50 dark:bg-red-950/50 px-4 py-1.5 rounded-full border border-red-200/80 dark:border-red-800/60">
            Problem Solving & DSA
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] dark:text-white">
            Beyond building, I solve problems.
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Consistent algorithmic practice across competitive programming platforms and open-source version control.
          </p>
          <div className="mt-3 w-20 h-1.5 bg-gradient-to-r from-[#FF6B6B] to-[#7C3AED] mx-auto rounded-full" />
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14">
          {codingProfiles.map((profile, index) => {
            const isLeetCode = profile.platform === 'LeetCode';
            const accentBg = isLeetCode
              ? 'border-red-200/90 dark:border-red-900/60 hover:border-red-400 dark:hover:border-red-700'
              : 'border-purple-200/90 dark:border-purple-900/60 hover:border-purple-400 dark:hover:border-purple-700';

            const buttonBg = isLeetCode
              ? 'bg-[#FF6B6B] hover:bg-[#EE5253] text-white shadow-lg shadow-red-500/25'
              : 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-lg shadow-purple-500/25';

            return (
              <motion.div
                key={profile.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`p-8 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-[#111827] border ${accentBg} shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-14 h-14 rounded-2xl ${isLeetCode ? 'bg-red-50 dark:bg-red-950/40 text-[#FF6B6B]' : 'bg-purple-50 dark:bg-purple-950/40 text-[#7C3AED]'} flex items-center justify-center shrink-0`}>
                        {isLeetCode ? <Code2 className="w-8 h-8" /> : <GithubIcon className="w-8 h-8" />}
                      </div>
                      <div>
                        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#171717] dark:text-white">
                          {profile.platform}
                        </h3>
                        <p className="text-sm font-mono text-gray-500 dark:text-gray-400">
                          @{profile.username}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full bg-gray-100 dark:bg-[#1E293B] text-gray-800 dark:text-gray-200">
                      {profile.badge}
                    </span>
                  </div>

                  {/* Headline & Description */}
                  <h4 className="font-display text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {profile.headline}
                  </h4>
                  <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {profile.description}
                  </p>

                  {/* Highlight Stats */}
                  {profile.stats && (
                    <div className="mt-8 grid grid-cols-2 gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-[#1E293B]/70 border border-gray-100 dark:border-gray-800">
                      {profile.stats.map((s) => (
                        <div key={s.label}>
                          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">
                            {s.label}
                          </div>
                          <div className="text-2xl sm:text-3xl font-extrabold text-[#171717] dark:text-white mt-1">
                            {s.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Profile Link Button */}
                <div className="mt-10">
                  <a
                    href={profile.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center space-x-2.5 py-4 px-6 rounded-2xl text-base sm:text-lg font-bold transition-all duration-200 transform hover:-translate-y-0.5 ${buttonBg}`}
                  >
                    <span>{isLeetCode ? 'Visit LeetCode Profile' : 'Explore My GitHub'}</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
