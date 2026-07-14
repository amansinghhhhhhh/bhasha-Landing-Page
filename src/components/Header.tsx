import { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowRight, Menu, X, Globe, Sparkles, GraduationCap } from 'lucide-react';
// @ts-ignore
import logoUrl from '../assets/images/bhasa_logo.webp';

interface HeaderProps {
  onApplyClick: () => void;
  onWhatsAppClick: () => void;
  onCallClick: () => void;
}

export default function Header({ onApplyClick, onWhatsAppClick, onCallClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Navigation Header */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 top-2 mx-auto w-[90%] bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-md py-3`}
      >
        <div className="w-[92%] mx-auto">
          <div className="flex items-center justify-between">
            
            {/* Unique Architectural Logo */}
            <a href="#" className="flex items-center select-none group">
              <img 
                src={logoUrl} 
                alt="Bhasha World Logo" 
                className="h-12 md:h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>

            {/* Desktop Navigation Link Menu with Premium Interaction */}
            <nav className="hidden md:flex items-center space-x-1 bg-slate-100/60 p-1 rounded-full border border-slate-200/50 backdrop-blur-sm">
              <a 
                href="#about" 
                className="text-xs font-bold text-slate-700 hover:text-white hover:bg-[#003E9B] px-4 py-2 rounded-full transition-all duration-300 uppercase tracking-wider"
              >
                About Bhasha
              </a>
              <a 
                href="#why-choose-us" 
                className="text-xs font-bold text-slate-700 hover:text-white hover:bg-[#003E9B] px-4 py-2 rounded-full transition-all duration-300 uppercase tracking-wider"
              >
                Why Us
              </a>
              <a 
                href="#languages" 
                className="text-xs font-bold text-slate-700 hover:text-white hover:bg-[#003E9B] px-4 py-2 rounded-full transition-all duration-300 uppercase tracking-wider"
              >
                Languages
              </a>
              <a 
                href="#trainers" 
                className="text-xs font-bold text-slate-700 hover:text-white hover:bg-[#003E9B] px-4 py-2 rounded-full transition-all duration-300 uppercase tracking-wider"
              >
                Experts
              </a>
              <a 
                href="#faqs" 
                className="text-xs font-bold text-slate-700 hover:text-white hover:bg-[#003E9B] px-4 py-2 rounded-full transition-all duration-300 uppercase tracking-wider"
              >
                FAQs
              </a>
            </nav>

            {/* Right Action Actions */}
            <div className="hidden md:flex items-center space-x-3.5">
              <button
                onClick={onApplyClick}
                className="bg-white hover:bg-[#003E9B] text-slate-900 hover:text-white font-bold px-6 py-2.5 rounded-[14px] border-2 border-[#003E9B] shadow-sm transition-all duration-300 flex items-center justify-center space-x-2 active:scale-[0.98] cursor-pointer text-[13px] tracking-wide hover:scale-[1.02] hover:shadow-[0_4px_12px_rgba(0,62,155,0.08)] group"
              >
                <span>Book Free Demo</span>
                <svg className="w-4 h-4 text-slate-800 fill-slate-800 transition-all duration-300 group-hover:scale-110 group-hover:text-white group-hover:fill-white" viewBox="0 0 24 24">
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                </svg>
              </button>
              
              <button
                onClick={onApplyClick}
                id="header-cta-btn"
                className="bg-[#003E9B] hover:bg-[#002F75] text-white font-bold px-7 py-3 rounded-[14px] shadow-[0_4px_14px_rgba(0,62,155,0.25)] transition-all duration-300 flex items-center justify-center cursor-pointer text-[13px] tracking-wide hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(0,62,155,0.35)] active:scale-[0.98]"
              >
                <span>Enroll Now</span>
              </button>
            </div>

            {/* Mobile Hamburger Drawer Trigger */}
            <div className="flex items-center space-x-2 md:hidden">
              <button
                onClick={onCallClick}
                className="p-2.5 text-[#0D3B66] hover:bg-slate-100 rounded-full transition-colors border border-slate-200/50 bg-white"
                aria-label="Call advisor"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 text-slate-800 hover:bg-slate-100 rounded-full transition-colors border border-slate-200/50 bg-white"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Premium Animated Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-2 right-2 mt-2 bg-white rounded-2xl border border-slate-200 shadow-2xl py-6 px-5 z-40">
            <div className="flex flex-col space-y-3">
              
              <div className="pb-2 border-b border-slate-100">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">Navigation Menu</span>
              </div>

              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-bold text-slate-700 hover:text-[#0D3B66] py-2 flex items-center justify-between uppercase tracking-wider"
              >
                <span>About Bhasha World</span>
                <span className="text-[10px] text-slate-300 font-mono">01</span>
              </a>
              <a
                href="#why-choose-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-bold text-slate-700 hover:text-[#0D3B66] py-2 flex items-center justify-between uppercase tracking-wider"
              >
                <span>Why Choose Us</span>
                <span className="text-[10px] text-slate-300 font-mono">02</span>
              </a>
              <a
                href="#languages"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-bold text-slate-700 hover:text-[#0D3B66] py-2 flex items-center justify-between uppercase tracking-wider"
              >
                <span>Languages Offered</span>
                <span className="text-[10px] text-slate-300 font-mono">03</span>
              </a>
              <a
                href="#trainers"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-bold text-slate-700 hover:text-[#0D3B66] py-2 flex items-center justify-between uppercase tracking-wider"
              >
                <span>Expert Faculty</span>
                <span className="text-[10px] text-slate-300 font-mono">04</span>
              </a>
              <a
                href="#faqs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-bold text-slate-700 hover:text-[#0D3B66] py-2 flex items-center justify-between uppercase tracking-wider"
              >
                <span>FAQ Help Desk</span>
                <span className="text-[10px] text-slate-300 font-mono">05</span>
              </a>

              <div className="pt-4 flex flex-col space-y-3.5 border-t border-slate-100">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onApplyClick();
                  }}
                  className="w-full bg-white border-2 border-[#003E9B] text-slate-900 font-bold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 shadow-sm text-xs tracking-wider uppercase"
                >
                  <span>Book Free Demo</span>
                  <svg className="w-4 h-4 text-slate-800 fill-slate-800" viewBox="0 0 24 24">
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onApplyClick();
                  }}
                  className="w-full bg-[#003E9B] hover:bg-[#002F75] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center shadow-md text-xs tracking-widest uppercase"
                >
                  <span>Enroll Now</span>
                </button>
              </div>

            </div>
          </div>
        )}
      </header>

      {/* Persistent Floating Utility Hub for desktop */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col space-y-3">
        {/* Floating Call Button */}
        <button
          onClick={onCallClick}
          id="floating-call-btn"
          className="w-14 h-14 bg-white hover:bg-slate-50 text-slate-800 rounded-full shadow-2xl border border-slate-200/80 flex items-center justify-center cursor-pointer transition-all hover:scale-110 active:scale-95 group relative"
          aria-label="Call support advisor"
        >
          <Phone className="w-5 h-5 text-emerald-600 animate-pulse" />
          <span className="absolute right-full mr-3 bg-slate-950 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-md whitespace-nowrap">
            Call Advisor Support
          </span>
        </button>

        {/* Floating WhatsApp Button */}
        <button
          onClick={onWhatsAppClick}
          id="floating-whatsapp-btn"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:bg-[#20ba59] transition-all hover:scale-110 active:scale-95 group relative animate-bounce"
          style={{ animationDuration: '3.s' }}
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
          <span className="absolute right-full mr-3 bg-slate-950 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-md whitespace-nowrap">
            WhatsApp Live Chat
          </span>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[9px] font-bold text-white animate-pulse">
            1
          </span>
        </button>
      </div>


    </>
  );
}
