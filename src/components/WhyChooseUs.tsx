import { ArrowRight, Sparkles } from 'lucide-react';
import { REASONS_TO_CHOOSE } from '../types';

interface WhyChooseUsProps {
  onApplyClick?: () => void;
}

export default function WhyChooseUs({ onApplyClick }: WhyChooseUsProps) {
  const scrollToForm = () => {
    if (onApplyClick) {
      onApplyClick();
      return;
    }
    const formElement = document.getElementById('enquiry-form-container');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const renderReasonIcon = (index: number) => {
    const wrapperClass = "relative w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100/80 flex items-center justify-center group-hover:bg-[#003E9B]/5 group-hover:border-[#003E9B]/15 transition-all duration-300 shadow-sm";
    const iconColor = "text-slate-600 group-hover:text-[#003E9B] group-hover:scale-105 transition-all duration-300";
    const badgeBg = "bg-slate-700 group-hover:bg-[#003E9B]";
    
    switch (index) {
      case 0: // Live Interactive Online & Offline Sessions
        return (
          <div className={wrapperClass}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-9 h-9 ${iconColor}`}>
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
              <circle cx="12" cy="10" r="2" />
              <path d="M7 15a5 5 0 0 1 10 0" />
            </svg>
            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            </div>
          </div>
        );
      case 1: // Limited Students Batch
        return (
          <div className={wrapperClass}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-9 h-9 ${iconColor}`}>
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
        );
      case 2: // ISO-Certified Curriculum
        return (
          <div className={wrapperClass}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`w-9 h-9 ${iconColor}`}>
              <path d="M8.5 14.5L6 21l6-3 6 3-2.5-6.5" />
              <path d="M12 2a8 8 0 1 0 8 8 8 8 0 0 0-8-8z" />
              <circle cx="12" cy="10" r="5" strokeWidth="1" />
            </svg>
            <div className={`absolute -top-1.5 -right-1.5 px-2 py-0.5 rounded-full ${badgeBg} border-2 border-white flex items-center justify-center shadow-sm transition-colors duration-300`}>
              <span className="text-[9px] font-black text-white font-sans">ISO</span>
            </div>
          </div>
        );
      case 3: // Goethe / TELC Preparation
        return (
          <div className={wrapperClass}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-9 h-9 ${iconColor}`}>
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c0 1.5 2 2.5 6 2.5s6-1 6-2.5v-5" />
              <line x1="18.5" y1="11" x2="18.5" y2="17" />
              <circle cx="18.5" cy="18" r="0.5" fill="currentColor" />
            </svg>
          </div>
        );
      case 4: // Recorded Classes
        return (
          <div className={wrapperClass}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-9 h-9 ${iconColor}`}>
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
            </svg>
          </div>
        );
      case 5: // Cultural Learning
        return (
          <div className={wrapperClass}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-9 h-9 ${iconColor}`}>
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
        );
      case 6: // Flexible Scheduling
        return (
          <div className={wrapperClass}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-9 h-9 ${iconColor}`}>
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full ${badgeBg} border-2 border-white flex items-center justify-center shadow-sm transition-colors duration-300`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-white">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
          </div>
        );
      case 7: // Passport & Visa Guidance
        return (
          <div className={wrapperClass}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-9 h-9 ${iconColor}`}>
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              <circle cx="12" cy="10" r="3" strokeWidth="1" />
            </svg>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center shadow-sm">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-white">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section 
      id="why-choose-us" 
      className="w-[90%] mx-auto my-16 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 relative overflow-hidden rounded-[32px] border border-slate-100 shadow-[0_10px_35px_-10px_rgba(15,23,42,0.05)]"
    >
      
      {/* Decorative blurred spots */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-[#003E9B]/4 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[450px] h-[450px] bg-[#DC9F02]/4 rounded-full blur-[130px] pointer-events-none" />
      
      {/* Subtle background mesh line grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      <div className="w-full px-6 sm:px-12 md:px-16 py-16 sm:py-20 relative z-10">
        
        {/* Section Headers - BOTH PRESERVED EXACTLY AND ENHANCED VISUALLY */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
          
          {/* Header - STRICTLY PRESERVED */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#003E9B] tracking-tight leading-tight">
            Reasons to choose us?
          </h2>
          
          {/* Subheading text - STRICTLY PRESERVED */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Whether you're planning to study in European countries, work with Multiple language-speaking companies, or build a career globally - this program builds real fluency, one level at a time.
          </p>
        </div>

        {/* 8 Custom Hover Cards - Clean, lightweight and modern layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS_TO_CHOOSE.map((reason, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.02)] hover:-translate-y-1 hover:shadow-[0_12px_24px_-6px_rgba(0,62,155,0.06)] hover:border-slate-200/80 transition-all duration-300 group flex flex-col items-center text-center cursor-pointer"
                onClick={scrollToForm}
              >
                {/* Clean minimalist icon wrapper */}
                <div className="flex-shrink-0 mb-5">
                  {renderReasonIcon(index)}
                </div>

                {/* Content Space */}
                <div className="flex-grow flex flex-col justify-center">
                  {/* Title - STRICTLY PRESERVED */}
                  <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-800 tracking-tight leading-snug group-hover:text-[#003E9B] transition-colors duration-300">
                    {reason.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Call - High End Button with Blue Background and White Text */}
        <div className="mt-16 text-center">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center space-x-3 text-sm sm:text-base font-extrabold text-white bg-gradient-to-r from-[#003E9B] to-[#0051C6] hover:from-[#002B6D] hover:to-[#003E9B] px-8 py-4 rounded-2xl shadow-xl shadow-[#003E9B]/20 hover:shadow-2xl hover:shadow-[#003E9B]/30 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-[#DC9F02] animate-pulse shrink-0" />
            <span className="font-sans">Enroll & Get 1-Year Access</span>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
              <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
