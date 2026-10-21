import { educationHistory } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const Education = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-10 xl:px-16 relative bg-white/40 dark:bg-[#0B0F17]/40">
      <div className="w-full max-w-[1720px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7C3AED] dark:text-[#C4B5FD] bg-purple-50 dark:bg-purple-950/50 px-4 py-1.5 rounded-full border border-purple-200/80 dark:border-purple-800/60">
            Academic Background
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] dark:text-white">
            Education
          </h2>
          <div className="mt-3 w-20 h-1.5 bg-gradient-to-r from-[#7C3AED] to-[#2563EB] mx-auto rounded-full" />
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-8">
          {educationHistory.map((item, index) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-[#111827] border border-gray-200/90 dark:border-gray-800/90 shadow-sm hover:shadow-xl transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-800/40 flex items-center justify-center text-[#7C3AED] shrink-0">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#171717] dark:text-white">
                      {item.institution}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1">
                      <span className="flex items-center space-x-1.5 font-medium">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center space-x-1.5 font-medium">
                        <Calendar className="w-4 h-4" />
                        <span>{item.duration}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Score Pill */}
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-2xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200/80 dark:border-purple-800/70 self-start sm:self-auto">
                  <span className="text-sm font-bold text-gray-600 dark:text-gray-300">
                    {item.scoreLabel}:
                  </span>
                  <span className="font-display text-lg sm:text-xl font-extrabold text-[#7C3AED] dark:text-[#C4B5FD]">
                    {item.score}
                  </span>
                </div>
              </div>

              {/* Degree / Branch */}
              <div className="mt-6">
                <h4 className="font-display text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {item.degree}
                </h4>

                {item.highlights && (
                  <ul className="mt-4 space-y-2 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <span className="text-[#7C3AED] font-bold text-lg">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
