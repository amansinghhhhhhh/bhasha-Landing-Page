import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  ArrowUpRight, 
  Clock, 
  User, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  BookOpen,
  CheckCircle,
  HelpCircle,
  ArrowUp,
  ArrowRight
} from 'lucide-react';
import { LANGUAGES } from '../types';

interface LanguagesOfferProps {
  onLanguageSelect: (langName: string) => void;
  activeLang?: string;
}

interface CourseItem {
  name: string;
  nativeName: string;
  greeting: string;
  bgImage: string;
  flagUrl: string;
  duration: string;
  popularCert: string;
  price: string;
  category: 'foreign' | 'indian';
  rating: string;
  reviewsCount: string;
}

const COURSES_DATA: CourseItem[] = [
  {
    name: 'German',
    nativeName: 'Deutsch',
    greeting: 'HALLO!',
    bgImage: 'https://bhashaworld.com/wp-content/uploads/2026/03/German.jpg-1-1024x683.webp',
    flagUrl: 'https://flagcdn.com/w160/de.png',
    duration: '3 Months',
    popularCert: 'Goethe / TELC',
    price: '12,500',
    category: 'foreign',
    rating: '4.9',
    reviewsCount: '380+'
  },
  {
    name: 'French',
    nativeName: 'Français',
    greeting: 'BONJOUR!',
    bgImage: 'https://bhashaworld.com/wp-content/uploads/2026/03/France.jpg-1-1-1024x683.webp',
    flagUrl: 'https://flagcdn.com/w160/fr.png',
    duration: '3 Months',
    popularCert: 'DELF / DALF',
    price: '12,500',
    category: 'foreign',
    rating: '4.9',
    reviewsCount: '190+'
  },
  {
    name: 'Spanish',
    nativeName: 'Español',
    greeting: '¡HOLA!',
    bgImage: 'https://bhashaworld.com/wp-content/uploads/2026/03/Spain.jpg-2-1024x683.webp',
    flagUrl: 'https://flagcdn.com/w160/es.png',
    duration: '3 Months',
    popularCert: 'DELE Prep',
    price: '12,500',
    category: 'foreign',
    rating: '4.8',
    reviewsCount: '140+'
  },
  {
    name: 'Japanese',
    nativeName: '日本語',
    greeting: 'こんにちは',
    bgImage: 'https://bhashaworld.com/wp-content/uploads/2026/03/Japan.jpg-2-1024x683.webp',
    flagUrl: 'https://flagcdn.com/w160/jp.png',
    duration: '3 Months',
    popularCert: 'JLPT (N5-N1)',
    price: '12,500',
    category: 'foreign',
    rating: '4.9',
    reviewsCount: '210+'
  },
  {
    name: 'Korean',
    nativeName: '한국어',
    greeting: '안녕하세요',
    bgImage: 'https://bhashaworld.com/wp-content/uploads/2026/03/Korean.jpg-1-1-1024x683.webp',
    flagUrl: 'https://flagcdn.com/w160/kr.png',
    duration: '3 Months',
    popularCert: 'TOPIK Prep',
    price: '12,500',
    category: 'foreign',
    rating: '4.9',
    reviewsCount: '160+'
  },
  {
    name: 'English',
    nativeName: 'English',
    greeting: 'HELLO!',
    bgImage: 'https://bhashaworld.com/wp-content/uploads/2026/03/English.jpg-1-1-1024x683.webp',
    flagUrl: 'https://flagcdn.com/w160/gb.png',
    duration: '3 Months',
    popularCert: 'IELTS / TOEFL',
    price: '2,499',
    category: 'foreign',
    rating: '4.9',
    reviewsCount: '250+'
  },
  {
    name: 'Italian',
    nativeName: 'Italiano',
    greeting: 'CIAO!',
    bgImage: 'https://bhashaworld.com/wp-content/uploads/2026/03/Italy.jpg-1-1024x683.webp',
    flagUrl: 'https://flagcdn.com/w160/it.png',
    duration: '3 Months',
    popularCert: 'CILS Prep',
    price: '12,500',
    category: 'foreign',
    rating: '4.8',
    reviewsCount: '90+'
  },
  {
    name: 'Arabic',
    nativeName: 'العربية',
    greeting: 'مَرْحَبًا!',
    bgImage: 'https://bhashaworld.com/wp-content/uploads/2026/03/Arabic.jpg-1-1-1024x683.webp',
    flagUrl: 'https://flagcdn.com/w160/ae.png',
    duration: '3 Months',
    popularCert: 'ALPT Prep',
    price: '12,500',
    category: 'foreign',
    rating: '4.7',
    reviewsCount: '80+'
  },
  {
    name: 'Russian',
    nativeName: 'Русский',
    greeting: 'ПРИВЕТ!',
    bgImage: 'https://bhashaworld.com/wp-content/uploads/2026/03/Russia.jpg-1-1-1024x683.webp',
    flagUrl: 'https://flagcdn.com/w160/ru.png',
    duration: '3 Months',
    popularCert: 'TORFL Prep',
    price: '12,500',
    category: 'foreign',
    rating: '4.8',
    reviewsCount: '75+'
  },
  {
    name: 'Portuguese',
    nativeName: 'Português',
    greeting: 'OLÁ!',
    bgImage: 'https://bhashaworld.com/wp-content/uploads/2026/03/Portuguese.jpg-1-1-1024x683.webp',
    flagUrl: 'https://flagcdn.com/w160/pt.png',
    duration: '3 Months',
    popularCert: 'CAPLE Prep',
    price: '12,500',
    category: 'foreign',
    rating: '4.8',
    reviewsCount: '60+'
  },
  {
    name: 'Tamil',
    nativeName: 'தமிழ்',
    greeting: 'வணக்கம்',
    bgImage: 'https://bhashaworld.com/wp-content/uploads/2026/03/Tamil.jpg-1-1024x683.webp',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    duration: '30 Hours',
    popularCert: 'Bhasha Cert',
    price: '2,499',
    category: 'indian',
    rating: '4.9',
    reviewsCount: '200+'
  },
  {
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    greeting: 'ನಮಸ್ಕಾರ',
    bgImage: 'https://bhashaworld.com/wp-content/uploads/2026/03/Kannada.jpg-1-1024x683.webp',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    duration: '30 Hours',
    popularCert: 'Bhasha Cert',
    price: '2,499',
    category: 'indian',
    rating: '4.9',
    reviewsCount: '200+'
  },
  {
    name: 'Sanskrit',
    nativeName: 'संस्कृतम्',
    greeting: 'सुप्रभातम्',
    bgImage: 'https://bhashaworld.com/wp-content/uploads/2026/03/Sanskrit.jpg-1024x683.webp',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    duration: '30 Hours',
    popularCert: 'Bhasha Cert',
    price: '2,499',
    category: 'indian',
    rating: '4.9',
    reviewsCount: '150+'
  },
  {
    name: 'Bengali',
    nativeName: 'বাংলা',
    greeting: 'নমস্কার',
    bgImage: 'https://bhashaworld.com/wp-content/uploads/2026/03/bengali.jpg-1-1024x683.webp',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    duration: '30 Hours',
    popularCert: 'Bhasha Cert',
    price: '2,499',
    category: 'indian',
    rating: '4.8',
    reviewsCount: '110+'
  },
  {
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    greeting: 'નમસ્તે',
    bgImage: 'https://bhashaworld.com/wp-content/uploads/2026/03/Gujarati.jpg-1-1024x683.webp',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    duration: '30 Hours',
    popularCert: 'Bhasha Cert',
    price: '2,499',
    category: 'indian',
    rating: '4.8',
    reviewsCount: '125+'
  },
  {
    name: 'Marathi',
    nativeName: 'मराठी',
    greeting: 'नमस्कार',
    bgImage: 'https://bhashaworld.com/wp-content/uploads/2026/03/Marathi.jpg-1024x683.webp',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    duration: '30 Hours',
    popularCert: 'Bhasha Cert',
    price: '2,499',
    category: 'indian',
    rating: '4.8',
    reviewsCount: '180+'
  },
  {
    name: 'Malayalam',
    nativeName: 'മലയാളം',
    greeting: 'നമസ്കാരം',
    bgImage: 'https://bhashaworld.com/wp-content/uploads/2026/03/Malayalam.jpg-1-1024x683.webp',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    duration: '30 Hours',
    popularCert: 'Bhasha Cert',
    price: '2,499',
    category: 'indian',
    rating: '4.9',
    reviewsCount: '95+'
  },
  {
    name: 'Telugu',
    nativeName: 'తెలుగు',
    greeting: 'నమస్కారం',
    bgImage: 'https://bhashaworld.com/wp-content/uploads/2026/03/Telugu.jpg-1024x683.webp',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    duration: '30 Hours',
    popularCert: 'Bhasha Cert',
    price: '2,499',
    category: 'indian',
    rating: '4.8',
    reviewsCount: '105+'
  },
  {
    name: 'Hindi',
    nativeName: 'हिन्दी',
    greeting: 'नमस्ते',
    bgImage: 'https://bhashaworld.com/wp-content/uploads/2026/03/Hindi.jpg-1024x683.webp',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    duration: '30 Hours',
    popularCert: 'Bhasha Cert',
    price: '2,499',
    category: 'indian',
    rating: '4.9',
    reviewsCount: '320+'
  },
  {
    name: 'Urdu',
    nativeName: 'اردو',
    greeting: 'سلام',
    bgImage: 'https://bhashaworld.com/wp-content/uploads/2026/03/Urdu.jpg-1024x683.webp',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    duration: '30 Hours',
    popularCert: 'Bhasha Cert',
    price: '2,499',
    category: 'indian',
    rating: '4.8',
    reviewsCount: '85+'
  }
];

export default function LanguagesOffer({ onLanguageSelect, activeLang }: LanguagesOfferProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'foreign' | 'indian'>('all');
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Filter courses based on active tab
  const filteredCourses = COURSES_DATA.filter(
    (course) => activeTab === 'all' || course.category === activeTab
  );

  // Update scroll buttons state
  const checkScrollState = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollState();
    window.addEventListener('resize', checkScrollState);
    return () => window.removeEventListener('resize', checkScrollState);
  }, [filteredCourses]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.75;
      const targetScroll = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      
      carouselRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="languages" 
      className="w-[90%] mx-auto my-16 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden rounded-[32px] border border-slate-100 shadow-[0_10px_35px_-10px_rgba(15,23,42,0.05)]"
    >
      {/* Decorative Grid and Ambient Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />
      <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] bg-[#003E9B]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] bg-[#DC9F02]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full px-6 sm:px-12 md:px-16 py-16 sm:py-20 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-2xl text-left">
            
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#001730] tracking-tight leading-tight">
              Top Rated <span className="text-[#003E9B]">Language Courses</span>
            </h2>
            
            <p className="text-slate-500 text-sm sm:text-base font-sans leading-relaxed">
              Become fluent with live interactive sessions, native-level certifications, and practical speaking formats. Rated 4.9/5 by 1200+ students.
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center space-x-3 self-start md:self-end">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                canScrollLeft 
                  ? 'border-[#003E9B]/20 text-[#003E9B] bg-white hover:bg-[#003E9B] hover:text-white hover:border-[#003E9B] shadow-sm' 
                  : 'border-slate-200 text-slate-300 bg-slate-50 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                canScrollRight 
                  ? 'border-[#003E9B]/20 text-[#003E9B] bg-white hover:bg-[#003E9B] hover:text-white hover:border-[#003E9B] shadow-sm' 
                  : 'border-slate-200 text-slate-300 bg-slate-50 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Tab Filter buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {[
            { id: 'all', label: 'All Languages' },
            { id: 'foreign', label: 'Foreign Languages' },
            { id: 'indian', label: 'Indian Languages' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer border ${
                activeTab === tab.id
                  ? 'bg-[#003E9B] text-white border-[#003E9B] shadow-lg shadow-[#003E9B]/20 scale-105'
                  : 'bg-white text-slate-600 border-slate-200/80 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* CAROUSEL HORIZONTAL SLIDER */}
        <div 
          ref={carouselRef}
          onScroll={checkScrollState}
          className="flex overflow-x-auto space-x-6 pb-8 snap-x snap-mandatory scrollbar-none scroll-smooth relative"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, idx) => {
              const isSelected = activeLang === course.name;
              return (
                <motion.div
                  key={course.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -15 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => onLanguageSelect(course.name)}
                  className={`snap-start shrink-0 w-[300px] sm:w-[360px] bg-white border rounded-[32px] overflow-hidden transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                    isSelected
                      ? 'border-[#003E9B] ring-4 ring-[#003E9B]/10 shadow-[0_20px_40px_rgba(0,62,155,0.12)] scale-[1.01]'
                      : 'border-slate-100 hover:border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,23,48,0.06)] hover:-translate-y-1'
                  }`}
                >
                  {/* Top Image Banner with Overlapping Flag */}
                  <div className="relative h-[230px] w-full">
                    <div className="w-full h-full overflow-hidden bg-slate-100 rounded-t-[32px]">
                      <img 
                        src={course.bgImage} 
                        alt={`${course.name} Language Course Landmark`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    
                    {/* Overlapping country flag badge at the bottom-left of image */}
                    <div className="absolute bottom-[-22px] left-6 z-20 bg-white p-1.5 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] border border-slate-100/80 flex items-center justify-center">
                      <img 
                        src={course.flagUrl} 
                        alt={`${course.name} Flag`}
                        referrerPolicy="no-referrer"
                        className="w-12 h-8 object-cover rounded-xl border border-slate-100"
                      />
                    </div>
                  </div>

                  {/* Course Metadata Content */}
                  <div className="p-6 pt-9 flex-1 flex flex-col justify-between space-y-6">
                    
                    {/* Header Details */}
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-[#001730] leading-snug group-hover:text-[#003E9B] transition-colors font-sans">
                        {course.name} Language Course
                      </h3>
                    </div>

                    {/* Meta Info Row */}
                    <div className="flex items-center gap-4 text-slate-500 text-xs font-medium py-1">
                      <div className="flex items-center space-x-1.5">
                        <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                        <span className="text-[13px]">Batch Based</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <User className="w-4 h-4 text-slate-400 shrink-0" />
                        <span className="text-[13px]">No Age Limit</span>
                      </div>
                      <div className="flex items-center space-x-1 text-slate-700">
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                        <span className="text-[13px] font-semibold">{course.rating} <span className="text-slate-400 font-normal">({course.reviewsCount})</span></span>
                      </div>
                    </div>

                    {/* CTA View Details Button */}
                    <div className="pt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onLanguageSelect(course.name);
                        }}
                        className="w-full flex items-center justify-between px-6 py-3.5 bg-[#003E9B] hover:bg-[#DC9F02] text-white rounded-2xl font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_4px_12px_rgba(0,62,155,0.15)] hover:shadow-[0_6px_20px_rgba(220,159,2,0.2)] group/btn cursor-pointer"
                      >
                        <span className="font-sans font-bold">View Details</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5 shrink-0" />
                      </button>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Custom Training Help Panel */}
        <div className="mt-16 bg-white border border-slate-100 rounded-[32px] p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,62,155,0.05)] transition-all duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#DC9F02]/5 rounded-full blur-[85px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#003E9B]/4 rounded-full blur-[85px] pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 relative z-10 text-left">
            <div className="p-4 bg-[#003E9B]/5 border border-[#003E9B]/10 rounded-2xl text-[#003E9B] shrink-0 shadow-inner">
              <BookOpen className="w-7 h-7 stroke-[2]" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-lg font-bold text-[#001730] tracking-tight">
                Looking for customized corporate syllabus or executive timings?
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
                We formulate customized academic batches, private 1-on-1 tutoring levels, and flexible weekend timings to perfectly match your target timeframe.
              </p>
            </div>
          </div>
          
          <button
            onClick={() => onLanguageSelect('German')}
            className="w-full md:w-auto bg-[#003E9B] hover:bg-[#002B6B] text-white font-extrabold text-xs sm:text-sm px-8 py-4 rounded-2xl flex items-center justify-center space-x-2.5 shadow-lg hover:shadow-xl transition-all duration-300 shrink-0 cursor-pointer uppercase tracking-wider"
          >
            <span>Talk to Senior Advisor</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
}
