import { Globe, Briefcase, BookOpen, TrendingUp, ArrowRight } from 'lucide-react';

export default function WhoIsItFor() {
  const scrollToForm = () => {
    const formElement = document.getElementById('enquiry-form-container');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const TARGET_AUDIENCE = [
    {
      title: 'Culture Enthusiasts',
      description: 'Anyone exploring Global culture & communication.',
      image: '/src/assets/images/indian_culture_enthusiast_1783949148707.jpg',
      icon: Globe,
    },
    {
      title: 'Working Professionals',
      description: 'Professionals working with multilingual clients or global companies.',
      image: '/src/assets/images/indian_working_professional_1783949166271.jpg',
      icon: Briefcase,
    },
    {
      title: 'Exam Aspirants',
      description: 'Students preparing for Goethe/TELC proficiency exams.',
      image: '/src/assets/images/indian_exam_aspirant_1783949182286.jpg',
      icon: BookOpen,
    },
    {
      title: 'Career Upskillers',
      description: 'Anyone looking to enhance their career with a valuable language skill.',
      image: '/src/assets/images/indian_career_upskiller_1783949197564.jpg',
      icon: TrendingUp,
    }
  ];

  return (
    <section 
      id="who-is-it-for" 
      className="w-[90%] mx-auto my-16 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden rounded-[32px] border border-slate-100 shadow-[0_10px_35px_-10px_rgba(15,23,42,0.05)]"
    >
      {/* Background Graphic Blobs */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#003E9B]/3 rounded-full blur-[140px] pointer-events-none translate-x-1/3" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-[#DC9F02]/3 rounded-full blur-[140px] pointer-events-none -translate-x-1/3" />
      
      {/* Dynamic Radial Dot Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-50" />

      <div className="w-full px-6 sm:px-12 md:px-16 py-16 sm:py-20 relative z-10">
        
        {/* Section Title exactly matching the reference style */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            <span className="block text-[#0F172A]">Who Can Join</span>
            <span className="block text-[#003E9B] mt-1">Our Language Programs?</span>
          </h2>
          {/* Accent Line in Title */}
          <div className="w-12 h-1 bg-[#3B82F6] rounded-full mx-auto my-4" />
          <p className="text-slate-500 text-sm sm:text-base font-semibold max-w-xl mx-auto font-sans">
            Tailored for diverse learners with different goals and aspirations.
          </p>
        </div>

        {/* 4 Card Premium Row/Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {TARGET_AUDIENCE.map((item, index) => {
            const IconComponent = item.icon;
            
            return (
              <div
                key={index}
                onClick={scrollToForm}
                className="bg-white rounded-[32px] p-4 pb-8 border border-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,62,155,0.08)] transition-all duration-300 group cursor-pointer flex flex-col items-center text-center h-full"
              >
                {/* Image Wrap with rounded layout & overlapping icon */}
                <div className="relative w-full aspect-[1.1] rounded-[24px] overflow-visible bg-slate-50 mb-8">
                  <div className="w-full h-full rounded-[24px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.98]"
                    />
                  </div>
                  
                  {/* Floating Circular Overlapping Icon Badge */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-[#003E9B] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(29,78,216,0.25)] border-4 border-white z-10 transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>

                {/* Content Details */}
                <div className="flex flex-col items-center flex-1 px-2">
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#003E9B] tracking-tight leading-snug transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Accent Line */}
                  <div className="w-8 h-[3px] bg-[#3B82F6] rounded-full my-3.5 opacity-80" />
                  
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-semibold">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

