import { ArrowRight, MessageSquare } from 'lucide-react';

const CTA_IMAGE_PATH = '/language-courses-new/images/regenerated_image_1783941713921.png';

interface FinalCTAProps {
  onApplyClick: () => void;
  onWhatsAppClick: () => void;
}

export default function FinalCTA({ onApplyClick, onWhatsAppClick }: FinalCTAProps) {
  return (
    <section className="py-20 bg-[#F8FAFC] overflow-hidden">
      <div className="w-[90%] mx-auto">
        {/* Full-Bleed Premium CTA Banner with Background Image */}
        <div className="relative rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(13,59,102,0.15)] border border-slate-100 bg-[#0F172A] text-white min-h-[480px] md:min-h-[520px] flex items-center">
          
          {/* Background Image with Dark Vignette Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={CTA_IMAGE_PATH}
              alt="Young Indian student study abroad success"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-75 contrast-105 saturate-110 scale-105 hover:scale-100 transition-transform duration-[2s] ease-out"
            />
            {/* Elegant multi-stage dark gradient overlays for ultra readability & luxury look */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070B14]/95 via-[#0F172A]/85 to-[#0F172A]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/90 via-transparent to-[#070B14]/30" />
            
            {/* Ambient gold/blue glow spots in the background */}
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#F4B400]/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#0D3B66]/40 rounded-full blur-[120px] pointer-events-none" />
          </div>

          {/* Premium Content Panel */}
          <div className="relative z-10 w-full p-8 sm:p-12 md:p-16 lg:p-20 max-w-3xl space-y-8">
            
            <div className="space-y-4">
              {/* Headline */}
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-sm">
                Start Speaking Confidently in <span className="text-[#DC9F02]">30 Days</span>
              </h2>

              {/* Subheadline/Promo */}
              <p className="text-xl sm:text-2xl md:text-3xl text-slate-200 font-bold leading-relaxed max-w-2xl">
                Enroll & Get 1-Year Access
              </p>
            </div>

            {/* Redesigned Premium Actions with Glassmorphism Hover States */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onApplyClick}
                className="bg-accent hover:bg-[#E2A600] text-[#0F172A] font-extrabold py-4 px-8 rounded-2xl shadow-[0_10px_25px_-5px_rgba(244,180,0,0.4)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 flex items-center justify-center space-x-2.5 group cursor-pointer text-base"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-5 h-5 text-[#0F172A] group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>

              <button
                onClick={onWhatsAppClick}
                className="bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 text-white font-bold py-4 px-8 rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2.5 hover:scale-[1.03] active:scale-[0.97] cursor-pointer text-base group"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400 fill-emerald-400/10 group-hover:scale-110 transition-transform duration-300" />
                <span>Ask On Whatsapp</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

