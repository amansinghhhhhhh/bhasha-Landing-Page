import { useState, useEffect } from 'react';
import { ArrowRight, Award, Globe, FileText, Users, Calendar, Star, Check, Sparkles, Clock } from 'lucide-react';

// @ts-ignore
import passportHeroImage from '../assets/images/lingua_passport_hero_1783690446860.jpg';

interface HeroProps {
  onApplyClick: () => void;
  onWhatsAppClick: () => void;
  onLanguageSelect?: (langName: string) => void;
}

export default function Hero({ onApplyClick, onWhatsAppClick, onLanguageSelect }: HeroProps) {
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 14,
    seconds: 35,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 2, minutes: 14, seconds: 35 };
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  const handleApply = () => {
    if (onLanguageSelect) {
      onLanguageSelect('German'); // Defaults to main language pathway
    } else {
      onApplyClick();
    }
  };

  return (
    <section className="relative w-[90%] mx-auto mt-28 mb-16 pt-12 pb-12 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20 overflow-hidden bg-white rounded-[32px] border border-slate-100 shadow-[0_10px_35px_-10px_rgba(15,23,42,0.05)] select-none">
      
      {/* Premium Keyframe Animations for high fidelity */}
      <style>{`
        @keyframes flight-glide {
          0% { transform: translate(-40px, 40px) rotate(-5deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(320px, -180px) rotate(-15deg); opacity: 0; }
        }
        .animate-flight-glide {
          animation: flight-glide 12s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes draw-path {
          0% { stroke-dashoffset: 400; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-draw-path {
          stroke-dasharray: 8 6;
          animation: draw-path 30s linear infinite;
        }

        @keyframes float-badge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-float-1 { animation: float-badge 5s ease-in-out infinite; }
        .animate-float-2 { animation: float-badge 6s ease-in-out infinite 0.7s; }
        .animate-float-3 { animation: float-badge 7s ease-in-out infinite 1.4s; }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
      `}</style>

      {/* Grid background texture matching reference */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.22]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1.5px,transparent_1.5px),linear-gradient(to_bottom,#e2e8f0_1.5px,transparent_1.5px)] bg-[size:36px_36px]" />
        {/* Radial vignette for professional depth */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-white" />
      </div>

      <div className="w-full px-6 sm:px-12 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ================= LEFT CONTENT PANEL ================= */}
          <div className="lg:col-span-6 space-y-7 pr-0 lg:pr-4">
            
            {/* Display Title - Refined, simple, and high impact */}
            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.15]">
              Your <span className="text-[#003E9B] relative inline-block">passport<span className="absolute bottom-1.5 left-0 w-full h-[8px] bg-[#003E9B]/10 -z-10 rounded"></span></span> to a <span className="text-[#DC9F02]">bigger life</span> starts with <span className="text-[#003E9B] underline decoration-[#DC9F02] decoration-4 underline-offset-[6px]">one word.</span>
            </h1>

            {/* Subtitle with targeted bold terms */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-xl">
              Learn <strong className="text-slate-900 font-extrabold">German</strong>, <strong className="text-slate-900 font-extrabold">Japanese</strong>, or <strong className="text-slate-900 font-extrabold">French</strong> with ISO-certified training, internationally recognised certification prep (Goethe, JLPT, DELF/DALF), and real study-abroad support.
            </p>





            {/* Beautiful Premium Offer Display (formerly the button) */}
            <div className="animate-fade-in w-full max-w-lg sm:max-w-none">
              <div className="animate-float flex sm:inline-flex flex-row items-start sm:items-center gap-4 sm:gap-5 bg-gradient-to-br from-amber-50 via-amber-100/20 to-orange-50 border-2 border-amber-300 p-5 sm:p-6 px-6 sm:px-9 rounded-2xl shadow-[0_12px_28px_-6px_rgba(220,159,2,0.18)] hover:shadow-[0_16px_36px_-6px_rgba(220,159,2,0.25)] relative overflow-hidden group transition-all duration-300 w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1500ms] ease-out" />
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl text-white shrink-0 shadow-md shadow-amber-500/20 animate-pulse-gentle">
                  <Sparkles className="w-5 h-5 sm:w-6.5 sm:h-6.5" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-black text-[#DC9F02] uppercase tracking-widest font-mono">Special Access Offer</div>
                  <div className="text-base sm:text-xl lg:text-2xl font-extrabold text-slate-800 font-display mt-1 tracking-tight leading-snug">
                    Enroll & Get <span className="text-[#003E9B] underline decoration-amber-400 decoration-3 underline-offset-4">1-Year Full Platform Access</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1 max-w-md sm:max-w-none">
              <button
                onClick={onApplyClick}
                className="inline-flex items-center justify-center space-x-2.5 px-9 py-4 bg-gradient-to-r from-[#003E9B] to-[#0051C6] hover:from-[#002B6D] hover:to-[#003E9B] text-white font-extrabold rounded-xl shadow-lg shadow-[#003E9B]/15 hover:shadow-xl hover:shadow-[#003E9B]/25 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-base sm:text-lg"
              >
                <span>Book Free Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onWhatsAppClick}
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 hover:text-[#003E9B] font-bold rounded-xl border border-slate-200 shadow-sm hover:border-[#003E9B]/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-base sm:text-lg"
              >
                <svg className="w-5.5 h-5.5 text-emerald-500 fill-emerald-500" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.53 2.01 14.06 1.001 11.455 1c-5.444 0-9.866 4.372-9.87 9.802 0 1.714.452 3.39 1.31 4.877l-.994 3.634 3.746-.98zm11.511-7.825c-.29-.144-1.711-.834-1.973-.928-.264-.096-.456-.144-.648.144-.19.288-.741.928-.908 1.12-.166.192-.332.216-.622.072-.29-.144-1.223-.444-2.33-1.419-.862-.758-1.443-1.693-1.61-1.982-.168-.288-.018-.444.126-.587.13-.13.29-.336.435-.504.144-.168.192-.288.29-.48.096-.192.048-.36-.024-.504-.072-.144-.648-1.536-.888-2.112-.233-.559-.47-.483-.648-.492l-.552-.01c-.19 0-.501.072-.765.36-.264.288-1.005.96-1.005 2.34s1.005 2.712 1.147 2.904c.144.192 1.979 2.972 4.794 4.156.67.282 1.192.45 1.599.578.674.212 1.287.183 1.77.111.54-.081 1.711-.689 1.951-1.356.24-.666.24-1.237.168-1.356-.072-.12-.264-.192-.555-.336z"/>
                </svg>
                <span>Talk to Advisor</span>
              </button>
            </div>



          </div>

          {/* ================= RIGHT COMPOSITE COLLAGE PANEL ================= */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
            
            {/* Collage Container Wrapper */}
            <div className="relative w-full max-w-lg lg:max-w-none aspect-[4/3] group">
              
              {/* Inner Overflow-Hidden Container */}
              <div className="w-full h-full rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-slate-50 relative">
                <img
                  src={passportHeroImage}
                  alt="Bhasha World Language Education Collage"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                
                {/* SEAMLESS FADE TO WHITE OVERLAY (Identical to reference image) */}
                <div className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-white via-white/40 to-transparent z-10 pointer-events-none" />
              </div>

              {/* Trust Stats Bottom Banner overlapping the bottom edge (image bottom edge, centered) */}
              <div className="absolute bottom-0 translate-y-1/2 left-4 right-4 sm:left-6 sm:right-6 bg-[#003E9B]/95 backdrop-blur-md rounded-2xl sm:rounded-3xl mt-0 px-2 sm:pl-4 h-[64px] sm:h-[71.1px] border border-white/10 shadow-xl flex items-center justify-around text-white z-30">
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center space-x-1 sm:space-x-1.5 mb-0.5 sm:mb-1">
                    <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DC9F02] shrink-0" />
                    <span className="text-base sm:text-xl font-black text-[#DC9F02] leading-none">20+</span>
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest text-slate-300 block">Countries</span>
                </div>
                
                <div className="h-6 sm:h-8 w-[1px] bg-white/20" />
                
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center space-x-1 sm:space-x-1.5 mb-0.5 sm:mb-1">
                    <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DC9F02] shrink-0" />
                    <span className="text-base sm:text-xl font-black text-white leading-none">50K+</span>
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest text-slate-300 block">Students</span>
                </div>
                
                <div className="h-6 sm:h-8 w-[1px] bg-white/20" />
                
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center space-x-1 sm:space-x-1.5 mb-0.5 sm:mb-1">
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DC9F02] fill-[#DC9F02] shrink-0 animate-pulse" />
                    <span className="text-base sm:text-xl font-black text-white leading-none">4.8/5</span>
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest text-slate-300 block">Rating</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
