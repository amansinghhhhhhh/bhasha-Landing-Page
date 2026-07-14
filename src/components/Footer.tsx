import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin, Twitter, Phone, Mail, MapPin } from 'lucide-react';
// @ts-ignore
import logoUrl from '../assets/images/bhasa_logo.webp';

interface FooterProps {
  onApplyClick?: () => void;
}

export default function Footer({ onApplyClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnrollClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onApplyClick) {
      onApplyClick();
    } else {
      const formElement = document.getElementById('lead-generation-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#003E9B] text-white py-16 relative z-10 select-none">
      <div className="w-[90%] mx-auto max-w-7xl">
        
        {/* 3-Column Grid representing the layout perfectly */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Column 1: Logo, Tagline, Social Icons */}
          <div className="col-span-1 md:col-span-4 lg:col-span-5 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <a href="#" onClick={handleHomeClick} className="block transition-transform duration-300 hover:scale-105">
              <img 
                src={logoUrl} 
                alt="Bhasha Logo" 
                className="h-16 md:h-20 w-auto object-contain brightness-0 invert" 
                referrerPolicy="no-referrer"
              />
            </a>
            
            <p className="text-lg sm:text-xl font-bold tracking-tight text-white leading-snug max-w-sm">
              Learn Languages at Any Age. Start Today.
            </p>

            {/* Social Media Circular Buttons with High-Quality Hover Transitions */}
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#1877F2] hover:border-[#1877F2] hover:scale-110 hover:-translate-y-0.5 shadow-md hover:shadow-[#1877F2]/30 transition-all duration-300"
              >
                <Facebook className="w-5 h-5 fill-current" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#E4405F] hover:border-[#E4405F] hover:scale-110 hover:-translate-y-0.5 shadow-md hover:shadow-[#E4405F]/30 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#FF0000] hover:border-[#FF0000] hover:scale-110 hover:-translate-y-0.5 shadow-md hover:shadow-[#FF0000]/30 transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:scale-110 hover:-translate-y-0.5 shadow-md hover:shadow-[#0A66C2]/30 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 fill-current" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#000000] hover:border-[#000000] hover:scale-110 hover:-translate-y-0.5 shadow-md hover:shadow-black/30 transition-all duration-300"
              >
                <Twitter className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>

          {/* Column 2: Menu */}
          <div className="col-span-1 md:col-span-3 lg:col-span-3 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide mb-1">
              Menu
            </h3>
            <ul className="space-y-3.5 text-sm sm:text-base font-semibold text-white/90">
              <li>
                <a href="#about" onClick={(e) => handleScrollClick(e, 'about')} className="hover:text-white/70 transition-colors">
                  About Bhasha
                </a>
              </li>
              <li>
                <a href="#why-choose-us" onClick={(e) => handleScrollClick(e, 'why-choose-us')} className="hover:text-white/70 transition-colors">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#languages" onClick={(e) => handleScrollClick(e, 'languages')} className="hover:text-white/70 transition-colors">
                  Languages
                </a>
              </li>
              <li>
                <a href="#trainers" onClick={(e) => handleScrollClick(e, 'trainers')} className="hover:text-white/70 transition-colors">
                  Experts
                </a>
              </li>
              <li>
                <a href="#faqs" onClick={(e) => handleScrollClick(e, 'faqs')} className="hover:text-white/70 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="col-span-1 md:col-span-5 lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide mb-1">
              Contact us
            </h3>
            
            <div className="space-y-5 w-full">
              {/* Phone item */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <h4 className="font-bold text-white text-base">Phone</h4>
                  <p className="text-sm text-white/90 font-medium tracking-wide mt-0.5">
                    8149207363 / 8308991969
                  </p>
                </div>
              </div>

              {/* Email item */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <h4 className="font-bold text-white text-base">Email</h4>
                  <p className="text-sm text-white/90 font-medium tracking-wide mt-0.5 break-all">
                    info@bhashaworld.com
                  </p>
                </div>
              </div>

              {/* Address item */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <h4 className="font-bold text-white text-base">Address</h4>
                  <p className="text-sm text-white/90 font-medium leading-relaxed tracking-wide mt-1 max-w-sm">
                    BHASHA World Language Solutions 4th Floor, Karnik Heritage, opposite Venus Traders, near hotel Rupali, FC road, Pune 411004
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Divider line exactly matching screenshot */}
        <div className="w-full h-px bg-white/25 mt-14 mb-8" />

        {/* Footer Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-white/95">
          
          {/* Left copyright / credits */}
          <p className="text-center md:text-left">
            © {currentYear} Bhasha World | Designed & Crafted By A2 Digital
          </p>

          {/* Right links */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span className="hover:text-white/80 cursor-pointer transition-colors">Terms of service</span>
            <span>|</span>
            <span className="hover:text-white/80 cursor-pointer transition-colors">Privacy policy</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
