import { useState, FormEvent } from 'react';
import { Check, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { LANGUAGES, Lead } from '../types';

interface LeadFormProps {
  onSubmitSuccess: (lead: Lead) => void;
  defaultLanguage?: string;
}

export default function LeadForm({ onSubmitSuccess, defaultLanguage = '' }: LeadFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interestedLanguage, setInterestedLanguage] = useState(defaultLanguage);
  const [preferredMode, setPreferredMode] = useState<'Online' | 'Offline'>('Online');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!name.trim()) tempErrors.name = 'Full name is required';
    if (!phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(phone.trim())) {
      tempErrors.phone = 'Please enter a valid phone number';
    }
    if (!email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!interestedLanguage) {
      tempErrors.interestedLanguage = 'Please select a language';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const WEBHOOK_URL =
    'https://script.google.com/macros/s/AKfycbxY9lYEgSuJfsdzRUrjFJbtuuY2YKwta6CNNcH_7hQhxKbI5BeqUXsmCLZRUpQxHnmm/exec';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const newLead: Lead = {
      id: Math.random().toString(36).substring(2, 9).toUpperCase(),
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      interestedLanguage,
      preferredMode,
      date: new Date().toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      status: 'Pending'
    };

    // Store in LocalStorage
    const existingLeads: Lead[] = JSON.parse(localStorage.getItem('bhasha_leads') || '[]');
    existingLeads.unshift(newLead);
    localStorage.setItem('bhasha_leads', JSON.stringify(existingLeads));

    // Send to Google Sheet via Webhook
    try {
      const payload = new URLSearchParams({
        form_name: 'Landing Page',
        ...newLead
      });
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: payload
      });
    } catch {
      // Silently fail — data is already saved in localStorage
    }

    setIsSubmitting(false);
    onSubmitSuccess(newLead);

    // Reset form
    setName('');
    setPhone('');
    setEmail('');
    setInterestedLanguage('');
  };

  return (
    <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-[0_32px_64px_-16px_rgba(15,23,42,0.12)] border border-slate-100 relative group">
      {/* Absolute Badge from Minimal Design */}
      <div className="absolute -top-5 -right-5 w-24 h-24 sm:w-28 sm:h-28 bg-accent rounded-full flex items-center justify-center text-center p-3 shadow-lg transform rotate-12 z-10 group-hover:scale-105 transition-transform duration-300">
        <div className="text-primary font-black text-xs sm:text-sm uppercase leading-tight font-display">
          Free Demo<br />Class
        </div>
      </div>

      <div className="absolute -top-10 -left-10 w-24 h-24 bg-accent/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />

      <div className="mb-6 pr-16 sm:pr-20">
        <div className="flex items-center space-x-2 bg-slate-50 border border-slate-100 rounded-full px-3 py-1 w-max mb-2">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">Book Free Demo</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-display font-bold text-secondary tracking-tight">
          Book Free Demo
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          Reserve your limited free demo slot. No credit card required.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name-input" className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-1.5">
            Full Name
          </label>
          <input
            id="name-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Rahul Sharma"
            className={`w-full px-4 py-3 rounded-xl bg-slate-50 border transition-all text-sm ${
              errors.name ? 'border-red-400 bg-red-50/10' : 'border-slate-200'
            }`}
          />
          {errors.name && <p className="text-[11px] text-red-500 mt-1 pl-1 font-semibold">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone-input" className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-1.5">
            Phone Number
          </label>
          <input
            id="phone-input"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. +91 98765 43210"
            className={`w-full px-4 py-3 rounded-xl bg-slate-50 border transition-all text-sm ${
              errors.phone ? 'border-red-400 bg-red-50/10' : 'border-slate-200'
            }`}
          />
          {errors.phone && <p className="text-[11px] text-red-500 mt-1 pl-1 font-semibold">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email-input" className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-1.5">
            Email Address
          </label>
          <input
            id="email-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. rahul@gmail.com"
            className={`w-full px-4 py-3 rounded-xl bg-slate-50 border transition-all text-sm ${
              errors.email ? 'border-red-400 bg-red-50/10' : 'border-slate-200'
            }`}
          />
          {errors.email && <p className="text-[11px] text-red-500 mt-1 pl-1 font-semibold">{errors.email}</p>}
        </div>

        {/* Interested Language */}
        <div>
          <label htmlFor="language-select" className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-1.5">
            Interested Language
          </label>
          <select
            id="language-select"
            value={interestedLanguage}
            onChange={(e) => setInterestedLanguage(e.target.value)}
            className={`w-full px-4 py-3 rounded-xl bg-slate-50 border transition-all text-sm appearance-none cursor-pointer ${
              errors.interestedLanguage ? 'border-red-400 bg-red-50/10' : 'border-slate-200'
            }`}
            style={{
              backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
              backgroundPosition: 'right 1rem center',
              backgroundSize: '1.25rem',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <option value="">Select Language</option>
            {LANGUAGES.map((lang) => (
              <option key={lang.name} value={lang.name}>
                {lang.flag} {lang.name} ({lang.nativeName})
              </option>
            ))}
          </select>
          {errors.interestedLanguage && (
            <p className="text-[11px] text-red-500 mt-1 pl-1 font-semibold">{errors.interestedLanguage}</p>
          )}
        </div>

        {/* Preferred Mode */}
        <div>
          <span className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-2">
            Preferred Mode
          </span>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setPreferredMode('Online')}
              className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all flex items-center justify-center space-x-2 ${
                preferredMode === 'Online'
                  ? 'bg-primary text-white border-primary shadow-sm'
                  : 'bg-slate-50 text-secondary border-slate-200 hover:bg-slate-100'
              }`}
            >
              <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                preferredMode === 'Online' ? 'border-white' : 'border-gray-400'
              }`}>
                {preferredMode === 'Online' && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
              </div>
              <span>Online Mode</span>
            </button>

            <button
              type="button"
              onClick={() => setPreferredMode('Offline')}
              className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all flex items-center justify-center space-x-2 ${
                preferredMode === 'Offline'
                  ? 'bg-primary text-white border-primary shadow-sm'
                  : 'bg-slate-50 text-secondary border-slate-200 hover:bg-slate-100'
              }`}
            >
              <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                preferredMode === 'Offline' ? 'border-white' : 'border-gray-400'
              }`}>
                {preferredMode === 'Offline' && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
              </div>
              <span>Offline Mode</span>
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          id="submit-form-btn"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-xl bg-primary text-white font-bold tracking-wide shadow-premium hover:shadow-premium-hover transition-all flex items-center justify-center space-x-2 relative cursor-pointer ${
            isSubmitting ? 'opacity-85 cursor-not-allowed' : 'hover:scale-[1.01] active:scale-[0.99]'
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Booking demo slot...</span>
            </>
          ) : (
            <>
              <span>Book Free Demo</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        {/* Trust verification strip */}
        <div className="flex items-center justify-center space-x-2 text-[11px] text-gray-500 pt-2 border-t border-slate-50">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>We respect your privacy. ISO-certified educational security.</span>
        </div>
      </form>
    </div>
  );
}
