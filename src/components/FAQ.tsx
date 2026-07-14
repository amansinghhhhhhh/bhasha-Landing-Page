import React, { useState, useMemo } from 'react';
import { ChevronDown, Search, MessageSquare, Sparkles, HelpCircle, Phone, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../types';

interface FAQProps {
  onWhatsAppClick?: () => void;
  onApplyClick?: () => void;
}

export default function FAQ({ onWhatsAppClick, onApplyClick }: FAQProps) {
  const [openId, setOpenId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const handleWhatsAppClick = () => {
    if (onWhatsAppClick) {
      onWhatsAppClick();
    } else {
      const text = encodeURIComponent(
        `Hello Bhasha World! I am interested in learning a language with you. Please share details of your small batches and pricing plans.`
      );
      window.open(`https://wa.me/918149207363?text=${text}`, '_blank');
    }
  };

  const handleApplyClick = () => {
    if (onApplyClick) {
      onApplyClick();
    } else {
      const formElement = document.getElementById('lead-generation-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleAccordion = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Helper function to map FAQ ID to specific category tags
  const getFaqCategory = (id: number): string => {
    if ([1, 16, 18].includes(id)) return 'General & Career';
    if ([2, 5, 8, 17].includes(id)) return 'Programs';
    if ([3, 6, 10, 11, 12, 13].includes(id)) return 'Batches & Timing';
    if ([4, 7, 9, 14, 15].includes(id)) return 'Certificates & Exams';
    return 'General & Career';
  };

  const categories = ['All', 'General & Career', 'Programs', 'Batches & Timing', 'Certificates & Exams'];

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      
      const faqCat = getFaqCategory(faq.id);
      const matchesCategory = activeCategory === 'All' || faqCat === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <section 
      id="faqs" 
      className="w-[90%] mx-auto my-16 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden rounded-[40px] border border-slate-100/80 shadow-[0_15px_40px_-15px_rgba(15,23,42,0.04)] select-none"
    >
      {/* Subtle Grid and Glow backgrounds */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none opacity-50" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#003E9B]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DC9F02]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full px-6 sm:px-12 md:px-16 py-16 sm:py-20 relative z-10">
        
        {/* Compact Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3.5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#003E9B]/5 border border-[#003E9B]/10 rounded-full text-xs font-bold uppercase tracking-wider text-[#003E9B]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Frequently Asked <span className="text-[#003E9B]">Questions</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Bhasha World's dynamic batches, international certs, levels, and career outcomes.
          </p>
        </div>

        {/* Filter Navigation & Search Bar Row */}
        <div className="flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-6 mb-10 pb-6 border-b border-slate-100">
          
          {/* Category Tabs */}
          <div className="flex items-center overflow-x-auto pb-2 xl:pb-0 scrollbar-none -mx-6 px-6 xl:mx-0 xl:px-0 gap-2">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              const count = cat === 'All' 
                ? FAQS.length 
                : FAQS.filter(f => getFaqCategory(f.id) === cat).length;
              
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenId(null);
                  }}
                  className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center space-x-2 shrink-0 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#003E9B] border-[#003E9B] text-white shadow-md shadow-[#003E9B]/15'
                      : 'bg-slate-50 border-slate-150 text-slate-600 hover:bg-slate-100 hover:border-slate-200'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] font-extrabold font-mono px-1.5 py-0.5 rounded-md ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-200/60 text-slate-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Inline Compact Search */}
          <div className="relative w-full xl:max-w-xs shrink-0">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full pl-10 pr-10 py-2.5 rounded-full bg-slate-50 border border-slate-150 text-xs font-bold text-slate-800 transition-all focus:bg-white focus:ring-4 focus:ring-[#003E9B]/5 focus:border-[#003E9B] focus:outline-none placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[10px] font-extrabold text-slate-400 hover:text-[#003E9B] uppercase tracking-wider font-mono cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* 2-Column Responsive Compact Accordion Grid */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              <motion.div 
                layout 
                className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start"
              >
                {filteredFaqs.map((faq) => {
                  const isOpen = openId === faq.id;
                  const faqCategory = getFaqCategory(faq.id);
                  
                  return (
                    <motion.div
                      key={faq.id}
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.25 }}
                      className={`group border rounded-2xl transition-all duration-300 overflow-hidden bg-white ${
                        isOpen
                          ? 'border-[#003E9B]/30 shadow-[0_12px_24px_rgba(0,62,155,0.03)] ring-1 ring-[#003E9B]/5'
                          : 'border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md'
                      }`}
                    >
                      {/* Accordion Trigger */}
                      <button
                        onClick={() => toggleAccordion(faq.id)}
                        className="w-full px-5 py-4 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                      >
                        <div className="space-y-1">
                          <span className="text-[9px] font-extrabold text-[#003E9B]/80 uppercase tracking-widest font-mono block">
                            {faqCategory}
                          </span>
                          <h3 className="font-sans text-sm sm:text-base font-bold text-slate-900 leading-snug group-hover:text-[#003E9B] transition-colors duration-200">
                            {faq.question}
                          </h3>
                        </div>
                        
                        <div className={`p-2 rounded-lg border transition-all duration-300 shrink-0 mt-0.5 ${
                          isOpen 
                            ? 'bg-[#003E9B] border-[#003E9B] text-white rotate-180' 
                            : 'bg-slate-50 border-slate-100 text-slate-400 group-hover:text-slate-700'
                        }`}>
                          <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                      </button>

                      {/* Accordion Content Block */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 pt-1 bg-slate-50/20 text-xs text-slate-600 leading-relaxed space-y-3.5 font-sans border-t border-slate-50">
                              <p className="font-semibold text-slate-600">{faq.answer}</p>

                              {/* Bullets Rendering as Modern Tags */}
                              {faq.bullets && faq.bullets.length > 0 && (
                                <div className="flex flex-wrap gap-2 pt-1.5">
                                  {faq.bullets.map((bullet, bIdx) => (
                                    <div 
                                      key={bIdx} 
                                      className="flex items-center space-x-1.5 bg-white border border-slate-100 rounded-lg py-1.5 px-2.5 shadow-2xs hover:border-[#003E9B]/30 transition-colors"
                                    >
                                      <div className="w-1.5 h-1.5 rounded-full bg-[#DC9F02]" />
                                      <span className="text-[10px] font-extrabold text-slate-700 tracking-wide">{bullet}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-200 p-8">
                <div className="max-w-xs mx-auto space-y-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-400">
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">No matching questions</p>
                    <p className="text-xs text-slate-400 mt-1">Try typing another keyword or reset the filters below.</p>
                  </div>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('All');
                    }}
                    className="px-5 py-2.5 bg-[#003E9B] hover:bg-[#002D72] text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* High-Contrast Glassmorphic Helpline Row at the Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-50/50 p-6 sm:p-8 rounded-[24px]">
          <div className="flex items-start space-x-4 max-w-xl">
            <div className="p-3 bg-[#DC9F02]/10 rounded-xl text-[#DC9F02] shrink-0">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div className="space-y-1 text-left">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">Still have questions about our modules?</h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Connect directly with our senior counseling desk on WhatsApp. We typically respond within 5 minutes.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={handleWhatsAppClick}
              className="py-3 px-6 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl text-xs font-extrabold uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-[#25D366]/15 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
              <span>Ask on WhatsApp</span>
            </button>
            
            <button
              onClick={handleApplyClick}
              className="py-3 px-6 bg-[#003E9B] hover:bg-[#002D72] text-white rounded-xl text-xs font-extrabold uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-[#003E9B]/10 cursor-pointer"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

