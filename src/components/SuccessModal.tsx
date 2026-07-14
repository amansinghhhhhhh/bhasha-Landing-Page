import { Check, MessageSquare, Download, X, Calendar, User, Mail, Phone, Globe, ShieldCheck } from 'lucide-react';
import { Lead } from '../types';

interface SuccessModalProps {
  lead: Lead | null;
  onClose: () => void;
}

export default function SuccessModal({ lead, onClose }: SuccessModalProps) {
  if (!lead) return null;

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Bhasha World! I just submitted an enquiry for the free demo slot.\n\n*My Details:*\n• Name: ${lead.name}\n• Interested Language: ${lead.interestedLanguage}\n• Mode: ${lead.preferredMode}\n• Email: ${lead.email}\n• Phone: ${lead.phone}\n• Inquiry ID: #${lead.id}\n\nPlease guide me on the next steps!`
    );
    window.open(`https://wa.me/919158397363?text=${text}`, '_blank');
  };

  const downloadReceipt = () => {
    const content = `
========================================
       BHASHA WORLD LANGUAGE PLATFORM   
       Free Demo Admission Receipt      
========================================
Inquiry ID       : #${lead.id}
Date             : ${lead.date}
Full Name        : ${lead.name}
Email Address    : ${lead.email}
Phone Number     : ${lead.phone}
Language Chosen  : ${lead.interestedLanguage}
Preferred Mode   : ${lead.preferredMode}
Status           : ISO-Certified Registered Slot
========================================
Thank you for enrolling in Bhasha World!
A Language Advisor will reach out to you within
2 hours. For instant support, WhatsApp us at:
https://wa.me/919158397363
========================================
    `;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `BhashaWorld_DemoReceipt_${lead.id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-[#0F172A]/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl relative overflow-hidden border border-slate-100">
        {/* Confetti decoration */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-accent via-primary to-accent" />
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {/* Success Checkmark Circle */}
          <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-100 animate-float">
            <Check className="w-8 h-8 text-emerald-600" />
          </div>

          <h3 className="text-2xl font-display font-bold text-center text-secondary tracking-tight">
            Demo Slot Reserved!
          </h3>
          <p className="text-sm text-gray-500 text-center mt-1">
            Congratulations, your seat has been secured in our limited batch.
          </p>

          {/* Receipt Card */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 mt-6 space-y-3 font-sans text-sm">
            <div className="flex justify-between border-b border-slate-200/60 pb-2.5">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Inquiry ID</span>
              <span className="font-mono font-bold text-primary">#{lead.id}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-500">
                <User className="w-4 h-4" />
                <span>Student</span>
              </div>
              <span className="font-semibold text-secondary">{lead.name}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-500">
                <Globe className="w-4 h-4" />
                <span>Language</span>
              </div>
              <span className="font-semibold text-primary">{lead.interestedLanguage}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>Training Mode</span>
              </div>
              <span className="font-semibold bg-primary/5 text-primary px-2.5 py-0.5 rounded-full text-xs font-bold">
                {lead.preferredMode}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-500">
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </div>
              <span className="font-semibold text-secondary break-all max-w-[200px] text-right">{lead.email}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-500">
                <Phone className="w-4 h-4" />
                <span>Phone</span>
              </div>
              <span className="font-semibold text-secondary">{lead.phone}</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-8 flex flex-col space-y-3">
            <button
              onClick={handleWhatsAppRedirect}
              className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 shadow-lg hover:bg-[#20ba59] active:scale-[0.99] transition-all cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
              <span>Initiate Fast WhatsApp Onboarding</span>
            </button>

            <button
              onClick={downloadReceipt}
              className="w-full bg-slate-100 hover:bg-slate-200/80 text-secondary font-bold py-3.5 rounded-xl flex items-center justify-center space-x-2 active:scale-[0.99] transition-all cursor-pointer text-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Receipt</span>
            </button>
          </div>

          <div className="mt-5 flex items-center justify-center space-x-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>ISO 9001:2015 Accredited Admission Portal</span>
          </div>
        </div>
      </div>
    </div>
  );
}
