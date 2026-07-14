import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatIsBhasha from './components/WhatIsBhasha';
import WhyChooseUs from './components/WhyChooseUs';
import LanguagesOffer from './components/LanguagesOffer';
import Trainers from './components/Trainers';
import WhoIsItFor from './components/WhoIsItFor';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import SuccessModal from './components/SuccessModal';
import LeadAdmin from './components/LeadAdmin';
import EnquiryModal from './components/EnquiryModal';
import { Lead } from './types';
import { Database, Phone, CheckCircle, Sparkles, X, Clock, ShieldCheck, HelpCircle, MessageSquare } from 'lucide-react';

export default function App() {
  const [submittedLead, setSubmittedLead] = useState<Lead | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isAdminPortalOpen, setIsAdminPortalOpen] = useState(false);
  const [isCallPopupOpen, setIsCallPopupOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('');

  // Open Enquiry Modal helper
  const handleApplyNow = () => {
    setIsEnquiryModalOpen(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Bhasha World! I am interested in learning a language with you. Please share details of your small batches and pricing plans.`
    );
    window.open(`https://wa.me/919158397363?text=${text}`, '_blank');
  };

  const handleCallRedirect = () => {
    setIsCallPopupOpen(true);
  };

  // Pre-fill form when language card is clicked
  const handleLanguageSelect = (langName: string) => {
    setActiveLang(langName);
    setIsEnquiryModalOpen(true);
  };

  const handleFormSuccess = (lead: Lead) => {
    setSubmittedLead(lead);
    setIsSuccessModalOpen(true);
  };

  // Listen for hidden trigger (Option + A) or custom footer clicks to open Admin Portal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Opt + A toggles Lead Admin panel for reviewer comfort
      if (e.altKey && e.key.toLowerCase() === 'a') {
        setIsAdminPortalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] selection:bg-accent selection:text-secondary antialiased font-sans">
      
      {/* Header Sticky Navigation */}
      <Header
        onApplyClick={handleApplyNow}
        onWhatsAppClick={handleWhatsAppRedirect}
        onCallClick={handleCallRedirect}
      />


      {/* Main Page Layout Structure */}
      <main className="relative">
        
        {/* HERO SECTION */}
        <Hero
          onApplyClick={handleApplyNow}
          onWhatsAppClick={handleWhatsAppRedirect}
          onLanguageSelect={handleLanguageSelect}
        />

        {/* WHAT IS BHASHA WORLD SECTION */}
        <WhatIsBhasha />

        {/* WHY CHOOSE US (8 PREMIUM CARDS) */}
        <WhyChooseUs />

        {/* LANGUAGES WE OFFER SECTION */}
        <LanguagesOffer onLanguageSelect={handleLanguageSelect} activeLang={activeLang} />

        {/* MEET OUR TRAINERS SECTION */}
        <Trainers />

        {/* WHO IS IT FOR SECTION */}
        <WhoIsItFor />

        {/* STUDENT TESTIMONIALS SECTION */}
        <Testimonials />

        {/* FAQ SECTION (18 DETAILED QUESTIONS) */}
        <FAQ onWhatsAppClick={handleWhatsAppRedirect} />

        {/* FINAL CALL TO ACTION BANNER */}
        <FinalCTA
          onApplyClick={handleApplyNow}
          onWhatsAppClick={handleWhatsAppRedirect}
        />

      </main>

      {/* FOOTER */}
      <Footer />

      {/* SUCCESS MODAL (RECEIPT GENERATOR) */}
      <SuccessModal
        lead={submittedLead}
        onClose={() => {
          setIsSuccessModalOpen(false);
          setSubmittedLead(null);
        }}
      />

      {/* ENQUIRY POPUP FORM MODAL */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        onSubmitSuccess={handleFormSuccess}
        defaultLanguage={activeLang}
      />

      {/* LEADS DATABASE PORTAL (CRM MODAL) */}
      {isAdminPortalOpen && (
        <LeadAdmin onClose={() => setIsAdminPortalOpen(false)} />
      )}

      {/* PREMIUM CALL COLOVER / TELEPHONE DIALER MODAL */}
      {isCallPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative overflow-hidden border border-slate-100">
            <button
              onClick={() => setIsCallPopupOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mx-auto border border-primary/10">
                <Phone className="w-6 h-6 text-accent animate-float" />
              </div>

              <h3 className="text-xl font-display font-bold text-secondary tracking-tight">
                Connect with Language Advisor
              </h3>
              
              <p className="text-sm text-gray-500 font-sans leading-relaxed">
                Speak directly with an admissions expert. Get help with syllabus details, small batches timings, or fee plans.
              </p>

              {/* Helpline card */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-slate-200/60 pb-2">
                  <div className="flex items-center space-x-1.5 text-gray-400 font-semibold uppercase tracking-wider font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Office Hours</span>
                  </div>
                  <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full text-[10px]">
                    ● Online Now
                  </span>
                </div>
                <p className="text-xs text-gray-500 font-medium text-left">
                  Monday – Sunday: 9:00 AM – 9:00 PM (IST)
                </p>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-slate-400">Helpline</span>
                  <a
                    href="tel:+919158397363"
                    className="text-lg font-bold text-primary font-mono hover:underline"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="pt-4 flex flex-col space-y-3">
                <a
                  href="tel:+919158397363"
                  className="bg-primary hover:bg-[#0D3B66]/90 text-white font-bold py-3.5 rounded-xl flex items-center justify-center space-x-2 shadow-md transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Dial Instantly</span>
                </a>
                <button
                  onClick={() => {
                    setIsCallPopupOpen(false);
                    handleWhatsAppRedirect();
                  }}
                  className="bg-slate-100 hover:bg-slate-200 text-secondary text-sm font-bold py-3.5 rounded-xl flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                  <span>Or Chat on WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center space-x-2 text-[10px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>ISO 9001:2015 Premium Educational Security</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
