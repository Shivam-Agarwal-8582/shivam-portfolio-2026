import { Sparkles, CheckCircle, ShieldCheck, Zap, ShoppingCart } from 'lucide-react';

export const AIResumeVisual = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-900/10 via-purple-500/5 to-transparent dark:from-purple-950/40 dark:via-purple-900/20 p-6 sm:p-7 flex flex-col justify-between font-mono text-sm select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-purple-200/50 dark:border-purple-800/40">
        <div className="flex items-center space-x-2.5">
          <Sparkles className="w-5 h-5 text-[#7C3AED]" />
          <span className="font-bold text-gray-900 dark:text-purple-200 text-sm sm:text-base">Gemini 1.5 ATS Engine</span>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
          Analysis Complete
        </span>
      </div>

      {/* Main Score & Metric Display */}
      <div className="my-4 grid grid-cols-12 gap-4 items-center">
        {/* Radial ATS Score */}
        <div className="col-span-5 bg-white dark:bg-[#111827] rounded-2xl p-4 border border-purple-100 dark:border-purple-900/50 text-center shadow-sm">
          <div className="text-xs font-bold uppercase tracking-wider text-gray-400">ATS Match Score</div>
          <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#7C3AED] mt-1">88<span className="text-base font-normal text-gray-400">/100</span></div>
          <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mt-1">High Compatibility</div>
        </div>

        {/* Skill Match Pills */}
        <div className="col-span-7 space-y-2">
          <div className="flex items-center justify-between text-xs sm:text-sm font-medium bg-white dark:bg-[#111827] px-3.5 py-1.5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-xs">
            <span className="text-gray-700 dark:text-gray-200">Spring Boot / Java</span>
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
          </div>
          <div className="flex items-center justify-between text-xs sm:text-sm font-medium bg-white dark:bg-[#111827] px-3.5 py-1.5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-xs">
            <span className="text-gray-700 dark:text-gray-200">MySQL & JPA Schema</span>
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
          </div>
          <div className="flex items-center justify-between text-xs sm:text-sm font-medium bg-white dark:bg-[#111827] px-3.5 py-1.5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-xs">
            <span className="text-gray-700 dark:text-gray-200">RESTful Architecture</span>
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
          </div>
        </div>
      </div>

      {/* Terminal log ticker */}
      <div className="bg-gray-900 text-gray-200 rounded-xl p-3 text-xs sm:text-sm font-mono leading-relaxed">
        <span className="text-purple-400 font-semibold">PDFBox</span>: Parsed 2 pages · <span className="text-amber-400 font-semibold">Gemini</span>: 8 REST endpoints invoked · Cache hit: MySQL
      </div>
    </div>
  );
};

export const SeatBookingVisual = () => {
  const seats = [
    { id: 'A1', status: 'booked' },
    { id: 'A2', status: 'booked' },
    { id: 'A3', status: 'available' },
    { id: 'A4', status: 'selected' },
    { id: 'B1', status: 'available' },
    { id: 'B2', status: 'available' },
    { id: 'B3', status: 'booked' },
    { id: 'B4', status: 'available' },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-900/10 via-blue-500/5 to-transparent dark:from-blue-950/40 dark:via-blue-900/20 p-6 sm:p-7 flex flex-col justify-between font-mono text-sm select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-blue-200/50 dark:border-blue-800/40">
        <div className="flex items-center space-x-2.5">
          <ShieldCheck className="w-5 h-5 text-[#2563EB]" />
          <span className="font-bold text-gray-900 dark:text-blue-200 text-sm sm:text-base">Floor Matrix & RBAC</span>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">
          @Transactional Safe
        </span>
      </div>

      {/* Seating Grid */}
      <div className="my-4 bg-white dark:bg-[#111827] rounded-2xl p-4 border border-blue-100 dark:border-blue-900/50 shadow-sm">
        <div className="flex justify-between items-center mb-3 text-xs text-gray-500 dark:text-gray-400 uppercase font-bold">
          <span>Desk Zone Alpha</span>
          <span className="text-[#2563EB] font-bold">1 Seat Selected</span>
        </div>
        <div className="grid grid-cols-4 gap-2.5">
          {seats.map((seat) => (
            <div
              key={seat.id}
              className={`h-10 rounded-xl flex items-center justify-center font-bold text-xs sm:text-sm transition-all ${
                seat.status === 'selected'
                  ? 'bg-[#2563EB] text-white shadow-md scale-105'
                  : seat.status === 'booked'
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                  : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60'
              }`}
            >
              {seat.id}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Concurrency Pill */}
      <div className="flex items-center justify-between text-xs sm:text-sm bg-blue-50 dark:bg-blue-950/50 text-blue-900 dark:text-blue-200 p-3 rounded-xl font-medium">
        <span>Race condition lock: Active</span>
        <span className="font-bold">Zero Double-Booking</span>
      </div>
    </div>
  );
};

export const LRUCacheVisual = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-red-900/10 via-orange-500/5 to-transparent dark:from-red-950/40 dark:via-orange-900/20 p-6 sm:p-7 flex flex-col justify-between font-mono text-sm select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-red-200/50 dark:border-red-800/40">
        <div className="flex items-center space-x-2.5">
          <Zap className="w-5 h-5 text-[#FF6B6B]" />
          <span className="font-bold text-gray-900 dark:text-red-200 text-sm sm:text-base">Doubly Linked List + Map</span>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-100 dark:bg-red-950/60 text-[#FF6B6B] dark:text-red-300">
          O(1) Time Verified
        </span>
      </div>

      {/* Node Chain Illustration */}
      <div className="my-4 bg-white dark:bg-[#111827] rounded-2xl p-4 border border-red-100 dark:border-red-900/50 shadow-sm">
        <div className="flex justify-between items-center mb-3 text-xs text-gray-500 dark:text-gray-400 uppercase font-bold">
          <span>Head (MRU)</span>
          <span>Tail (LRU)</span>
        </div>
        
        {/* Linked List visualization */}
        <div className="flex items-center justify-between space-x-2 overflow-x-auto py-1">
          <div className="px-3.5 py-2 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-center">
            <span className="text-xs text-gray-400 block">K1</span>
            <span className="font-bold text-[#FF6B6B] text-sm sm:text-base">V: 42</span>
          </div>
          <span className="text-gray-400 dark:text-gray-500 font-bold text-base">⇄</span>
          <div className="px-3.5 py-2 rounded-xl bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800 text-center">
            <span className="text-xs text-gray-400 block">K2</span>
            <span className="font-bold text-purple-600 dark:text-purple-400 text-sm sm:text-base">V: 89</span>
          </div>
          <span className="text-gray-400 dark:text-gray-500 font-bold text-base">⇄</span>
          <div className="px-3.5 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-dashed border-gray-300 dark:border-gray-700 text-center opacity-60">
            <span className="text-xs text-gray-400 block">K3</span>
            <span className="font-bold text-gray-500 text-sm sm:text-base">Evict</span>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
        <div className="p-3 bg-white dark:bg-[#111827] rounded-xl border border-gray-100 dark:border-gray-800 flex justify-between items-center">
          <span className="text-gray-500">Cache Hits:</span>
          <span className="font-extrabold text-emerald-600 dark:text-emerald-400 text-sm sm:text-base">94.2%</span>
        </div>
        <div className="p-3 bg-white dark:bg-[#111827] rounded-xl border border-gray-100 dark:border-gray-800 flex justify-between items-center">
          <span className="text-gray-500">Capacity:</span>
          <span className="font-extrabold text-gray-800 dark:text-gray-100 text-sm sm:text-base">3 / 3</span>
        </div>
      </div>
    </div>
  );
};

export const StoreCraftVisual = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-emerald-900/10 via-emerald-500/5 to-transparent dark:from-emerald-950/40 dark:via-emerald-900/20 p-6 sm:p-7 flex flex-col justify-between font-mono text-sm select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-emerald-200/50 dark:border-emerald-800/40">
        <div className="flex items-center space-x-2.5">
          <ShoppingCart className="w-5 h-5 text-emerald-600" />
          <span className="font-bold text-gray-900 dark:text-emerald-200 text-sm sm:text-base">MERN Retail Storefront</span>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
          Redux Toolkit
        </span>
      </div>

      {/* Store Item Card Preview */}
      <div className="my-4 bg-white dark:bg-[#111827] rounded-2xl p-4 border border-emerald-100 dark:border-emerald-900/50 shadow-sm flex items-center justify-between">
        <div>
          <span className="text-xs text-gray-400 uppercase font-bold">Live Store Inventory</span>
          <div className="font-bold text-gray-900 dark:text-gray-100 text-sm sm:text-base mt-0.5">Physical Store Catalog</div>
          <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mt-1">Real-time stock sync</div>
        </div>
        <div className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-extrabold text-xs sm:text-sm shadow-sm">
          In Stock
        </div>
      </div>

      {/* Payment & Logistics Badges */}
      <div className="flex items-center justify-between text-xs sm:text-sm bg-gray-900 text-gray-200 p-3 rounded-xl font-medium">
        <span>Payment: Razorpay + COD</span>
        <span className="text-emerald-400 font-bold">Admin Portal Ready</span>
      </div>
    </div>
  );
};

export const ProjectVisual = ({ type }: { type: string }) => {
  switch (type) {
    case 'ai-resume':
      return <AIResumeVisual />;
    case 'seat-booking':
      return <SeatBookingVisual />;
    case 'lru-cache':
      return <LRUCacheVisual />;
    case 'ecommerce':
      return <StoreCraftVisual />;
    default:
      return <AIResumeVisual />;
  }
};
