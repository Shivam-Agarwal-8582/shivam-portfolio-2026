import { skillCategories } from '../data/portfolioData';
import { Code2, Server, Layout, Database, Cpu, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

export const Skills = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#FF6B6B]" />;
      case 'Server':
        return <Server className="w-6 h-6 text-[#7C3AED]" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-[#2563EB]" />;
      case 'Database':
        return <Database className="w-6 h-6 text-amber-500" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-emerald-500" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-indigo-500" />;
      default:
        return <Code2 className="w-6 h-6 text-[#7C3AED]" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-10 xl:px-16 relative bg-white/40 dark:bg-[#0B0F17]/40">
      <div className="w-full max-w-[1720px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7C3AED] dark:text-[#C4B5FD] bg-purple-50 dark:bg-purple-950/50 px-4 py-1.5 rounded-full border border-purple-200/80 dark:border-purple-800/60">
            Technical Stack
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] dark:text-white">
            Skills & Competencies
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Organized across languages, frameworks, system fundamentals, and development tooling.
          </p>
          <div className="mt-3 w-20 h-1.5 bg-gradient-to-r from-[#7C3AED] to-[#2563EB] mx-auto rounded-full" />
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="p-8 sm:p-9 rounded-3xl bg-white dark:bg-[#111827] border border-gray-200/90 dark:border-gray-800/90 shadow-sm hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-800 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-[#1E293B] border border-gray-100 dark:border-gray-700/60 flex items-center justify-center shrink-0">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#171717] dark:text-white">
                    {cat.title}
                  </h3>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/skill flex items-center space-x-2 px-4 py-2 rounded-xl bg-gray-50 dark:bg-[#1E293B] border border-gray-200/80 dark:border-gray-700/70 hover:border-purple-400 dark:hover:border-purple-600 transition-colors"
                    >
                      <span className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                      {skill.tag && (
                        <span className="text-[11px] sm:text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/70 px-2 py-0.5 rounded-md">
                          {skill.tag}
                        </span>
                      )}
                    </div>
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
