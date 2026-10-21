import { useState, type FormEvent } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, Code2, Copy, Check, Send } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build mailto fallback link with pre-filled data
    const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Hi Shivam,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    window.location.href = mailtoUrl;
    setSubmissionStatus('Opening your default email app with this message pre-filled. You can also directly reach out at shivamagarwalblp@gmail.com.');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-10 xl:px-16 relative">
      <div className="w-full max-w-[1720px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7C3AED] dark:text-[#C4B5FD] bg-purple-50 dark:bg-purple-950/50 px-4 py-1.5 rounded-full border border-purple-200/80 dark:border-purple-800/60">
            Get in Touch
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] dark:text-white">
            Let's build something useful.
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Have an interesting opportunity, project, or technical idea? I'd love to connect.
          </p>
          <div className="mt-3 w-20 h-1.5 bg-gradient-to-r from-[#7C3AED] to-[#FF6B6B] mx-auto rounded-full" />
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14">
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-[#111827] border border-gray-200/90 dark:border-gray-800/90 shadow-md space-y-6">
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#171717] dark:text-white">
                Contact Information
              </h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Feel free to email me directly or give me a call. I usually respond within 24 hours.
              </p>

              {/* Email item with Copy button */}
              <div className="p-5 rounded-2xl bg-purple-50/80 dark:bg-purple-950/40 border border-purple-200/80 dark:border-purple-800/70 flex items-center justify-between gap-4">
                <div className="flex items-center space-x-4 overflow-hidden">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/60 text-[#7C3AED] flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Email Address</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base lg:text-lg font-bold text-[#171717] dark:text-white hover:text-[#7C3AED] truncate block mt-0.5"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-3 rounded-xl bg-white dark:bg-[#1E293B] border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:text-[#7C3AED] shadow-sm transition-all shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>

              {copied && (
                <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center space-x-2 pl-1">
                  <Check className="w-4 h-4" />
                  <span>Email copied to clipboard!</span>
                </div>
              )}

              {/* Phone item */}
              <div className="p-5 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/70 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/60 text-[#2563EB] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Phone / WhatsApp</div>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-base sm:text-lg font-bold text-[#171717] dark:text-white hover:text-[#2563EB] mt-0.5 block"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Profile Links */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                  Online Profiles:
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gray-50 dark:bg-[#1E293B] border border-gray-200/80 dark:border-gray-800 hover:border-[#7C3AED] transition-colors shadow-xs"
                  >
                    <GithubIcon className="w-6 h-6 text-gray-800 dark:text-gray-200 mb-1.5" />
                    <span className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200">GitHub</span>
                  </a>

                  <a
                    href={personalInfo.leetcodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gray-50 dark:bg-[#1E293B] border border-gray-200/80 dark:border-gray-800 hover:border-[#FF6B6B] transition-colors shadow-xs"
                  >
                    <Code2 className="w-6 h-6 text-[#FF6B6B] mb-1.5" />
                    <span className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200">LeetCode</span>
                  </a>

                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gray-50 dark:bg-[#1E293B] border border-gray-200/80 dark:border-gray-800 hover:border-[#2563EB] transition-colors shadow-xs"
                  >
                    <span className="font-extrabold text-[#2563EB] text-xl leading-tight mb-1">in</span>
                    <span className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-[#111827] border border-gray-200/90 dark:border-gray-800/90 shadow-md">
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#171717] dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-8">
                Fill out the form below. When submitted, it will launch your email client with your message pre-formatted.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-bold text-gray-800 dark:text-gray-200 mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className={`w-full px-5 py-3.5 rounded-2xl text-base bg-gray-50 dark:bg-[#1E293B] border ${
                        errors.name ? 'border-red-400' : 'border-gray-200 dark:border-gray-700'
                      } text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED]`}
                    />
                    {errors.name && <p className="mt-1.5 text-xs sm:text-sm text-red-500 font-semibold">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold text-gray-800 dark:text-gray-200 mb-2">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-5 py-3.5 rounded-2xl text-base bg-gray-50 dark:bg-[#1E293B] border ${
                        errors.email ? 'border-red-400' : 'border-gray-200 dark:border-gray-700'
                      } text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED]`}
                    />
                    {errors.email && <p className="mt-1.5 text-xs sm:text-sm text-red-500 font-semibold">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-bold text-gray-800 dark:text-gray-200 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. SDE Opportunity / Technical Inquiry"
                    className={`w-full px-5 py-3.5 rounded-2xl text-base bg-gray-50 dark:bg-[#1E293B] border ${
                      errors.subject ? 'border-red-400' : 'border-gray-200 dark:border-gray-700'
                    } text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED]`}
                  />
                  {errors.subject && <p className="mt-1.5 text-xs sm:text-sm text-red-500 font-semibold">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-gray-800 dark:text-gray-200 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className={`w-full px-5 py-3.5 rounded-2xl text-base bg-gray-50 dark:bg-[#1E293B] border ${
                      errors.message ? 'border-red-400' : 'border-gray-200 dark:border-gray-700'
                    } text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED]`}
                  />
                  {errors.message && <p className="mt-1.5 text-xs sm:text-sm text-red-500 font-semibold">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2.5 py-4 px-8 rounded-2xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-base sm:text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message via Email Client</span>
                </button>
              </form>

              {submissionStatus && (
                <div className="mt-5 p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-sm sm:text-base text-purple-900 dark:text-purple-200 font-medium leading-relaxed">
                  {submissionStatus}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
