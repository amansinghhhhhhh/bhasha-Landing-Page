import { useState, FormEvent } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LANGUAGES, Lead } from '../types';
// @ts-ignore
import ppopupUrl from '../assets/images/ppopup.webp';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (lead: Lead) => void;
  defaultLanguage?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  onSubmitSuccess,
  defaultLanguage = ''
}: EnquiryModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interestedLanguage, setInterestedLanguage] = useState(defaultLanguage);
  const [city, setCity] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!name.trim()) tempErrors.name = 'Name is required';
    if (!phone.trim()) {
      tempErrors.phone = 'Mobile number is required';
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(phone.trim())) {
      tempErrors.phone = 'Enter a valid mobile number';
    }
    if (!interestedLanguage) tempErrors.interestedLanguage = 'Please select a language';
    if (!city.trim()) tempErrors.city = 'City is required';
    if (!ageGroup) tempErrors.ageGroup = 'Please select an age group';

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
      interestedLanguage,
      preferredMode: 'Online',
      city: city.trim(),
      ageGroup,
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

    // Reset & Close
    setName('');
    setPhone('');
    setInterestedLanguage('');
    setCity('');
    setAgeGroup('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0F172A]/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-4xl flex relative z-10 border border-slate-100 max-h-[90vh] md:max-h-none"
          >
            {/* Close button - top right absolute */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors border border-slate-100 bg-white shadow-sm"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Split layout: Left column is cropped ppopup.webp for visual correctness */}
            <div className="hidden md:block w-[45%] relative bg-blue-700 min-h-[550px]">
              <img
                src={ppopupUrl}
                alt="Bhasha World Language Journey"
                className="absolute inset-0 w-full h-full object-cover object-left select-none pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right column: Interactive form */}
            <div className="w-full md:w-[55%] p-6 sm:p-8 md:p-10 flex flex-col justify-center overflow-y-auto max-h-[90vh] md:max-h-none">
              <div className="mb-6">
                <h3 className="text-3xl font-display font-extrabold text-[#0D3B66] tracking-tight">
                  Enquire Now
                </h3>
                <p className="text-sm text-gray-500 mt-1.5">
                  One step closer to a world of opportunities.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Your Name *"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border transition-all text-sm outline-none placeholder-slate-400 focus:border-blue-500 focus:bg-white ${
                      errors.name ? 'border-red-400 bg-red-50/10' : 'border-slate-200'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-500 mt-1 pl-1 font-semibold">{errors.name}</p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter Your Mobile Number *"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border transition-all text-sm outline-none placeholder-slate-400 focus:border-blue-500 focus:bg-white ${
                      errors.phone ? 'border-red-400 bg-red-50/10' : 'border-slate-200'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-500 mt-1 pl-1 font-semibold">{errors.phone}</p>
                  )}
                </div>

                {/* Select Language Dropdown */}
                <div>
                  <select
                    value={interestedLanguage}
                    onChange={(e) => setInterestedLanguage(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border transition-all text-sm appearance-none cursor-pointer outline-none focus:border-blue-500 focus:bg-white ${
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
                    <p className="text-[11px] text-red-500 mt-1 pl-1 font-semibold">
                      {errors.interestedLanguage}
                    </p>
                  )}
                </div>

                {/* City Input */}
                <div>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City *"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border transition-all text-sm outline-none placeholder-slate-400 focus:border-blue-500 focus:bg-white ${
                      errors.city ? 'border-red-400 bg-red-50/10' : 'border-slate-200'
                    }`}
                  />
                  {errors.city && (
                    <p className="text-[11px] text-red-500 mt-1 pl-1 font-semibold">{errors.city}</p>
                  )}
                </div>

                {/* Age Group Dropdown */}
                <div>
                  <select
                    value={ageGroup}
                    onChange={(e) => setAgeGroup(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border transition-all text-sm appearance-none cursor-pointer outline-none focus:border-blue-500 focus:bg-white ${
                      errors.ageGroup ? 'border-red-400 bg-red-50/10' : 'border-slate-200'
                    }`}
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                      backgroundPosition: 'right 1rem center',
                      backgroundSize: '1.25rem',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <option value="">- Age Group -</option>
                    <option value="Kids">Kids (Below 12)</option>
                    <option value="Students">Students (12-21)</option>
                    <option value="Professionals">Professionals (Working)</option>
                    <option value="Seniors">Seniors (Aged)</option>
                  </select>
                  {errors.ageGroup && (
                    <p className="text-[11px] text-red-500 mt-1 pl-1 font-semibold">{errors.ageGroup}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 px-6 rounded-xl bg-[#1A3FD6] hover:bg-[#1534B5] text-white font-bold tracking-wide transition-all flex items-center justify-center space-x-2 relative cursor-pointer mt-6 shadow-md shadow-blue-500/20 active:scale-[0.99]`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Please wait...</span>
                    </>
                  ) : (
                    <>
                      <span>Get Consultation</span>
                      <ArrowRight className="w-5 h-5 bg-white/20 p-0.5 rounded-full" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
