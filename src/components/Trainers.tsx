import { Award } from 'lucide-react';
import { TEAM_MEMBERS } from '../types';

export default function Trainers() {
  return (
    <section 
      id="trainers" 
      className="w-[90%] mx-auto my-16 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 relative overflow-hidden rounded-[32px] border border-slate-100 shadow-[0_10px_35px_-10px_rgba(15,23,42,0.05)]"
    >
      <div className="w-full px-6 sm:px-12 md:px-16 py-16 sm:py-20 relative z-10">
        
        {/* Section Headers - BOTH PRESERVED EXACTLY */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          
          {/* Header - STRICTLY PRESERVED */}
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#003E9B] tracking-tight leading-tight">
            Trainers
          </h2>
          
          {/* Subtitle - STRICTLY PRESERVED */}
          <p className="text-base text-slate-600 font-medium">
            Learn from certified, experienced tutors. Meet Our Team Members
          </p>
        </div>

        {/* Responsive Grid of Certified Professional Trainers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((trainer, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Photo frame with smooth zoom hover */}
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <img
                    src={trainer.image}
                    alt={`${trainer.name} - ${trainer.role} at Bhasha World`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="space-y-1 text-left">
                    {/* Name - STRICTLY PRESERVED */}
                    <h3 className="text-lg font-bold text-secondary tracking-tight">
                      {trainer.name}
                    </h3>
                    
                    {/* Role - STRICTLY PRESERVED */}
                    <p className="text-xs font-semibold text-[#003E9B] uppercase tracking-wider font-display">
                      {trainer.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
