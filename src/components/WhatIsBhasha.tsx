export default function WhatIsBhasha() {
  return (
    <section 
      id="about" 
      className="w-[90%] mx-auto my-16 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden rounded-[32px] border border-slate-100 shadow-[0_10px_35px_-10px_rgba(15,23,42,0.05)]"
    >
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute top-1/4 left-1/12 w-[600px] h-[600px] bg-gradient-to-tr from-[#003E9B]/8 to-indigo-500/5 rounded-full blur-[140px] pointer-events-none -translate-x-1/4" />
      <div className="absolute bottom-1/4 right-1/12 w-[600px] h-[600px] bg-gradient-to-bl from-[#DC9F02]/8 to-amber-500/5 rounded-full blur-[140px] pointer-events-none translate-x-1/4" />
      
      {/* Elegant Radial Dot Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />

      <div className="w-full px-6 sm:px-12 md:px-16 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Editorial Content Layout */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Immersive Header */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#000000] tracking-tight leading-none">
              What is <br className="hidden sm:inline" />
              <span className="text-[#003E9B]">
                BHASHA WORLD
              </span>?
            </h2>
            
            {/* Main Editorial Paragraph - Highlighted Keywords for high-end look */}
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-sans font-light max-w-xl">
              Bhasha World is a <strong className="font-semibold text-slate-900">multilingual language-learning platform</strong> helping students and professionals master global languages - <span className="text-[#003E9B] font-semibold">German, Japanese, French</span> and more - through <span className="underline decoration-[#DC9F02] decoration-2 underline-offset-4 font-semibold text-slate-900">live, small-batch</span>, certification-focused training.
            </p>

            {/* Premium Decorative Quote/Accent Divider */}
            <div className="pl-6 border-l-4 border-l-[#DC9F02] py-2">
              <span className="text-sm italic text-slate-500 block font-sans">
                "Our immersive curriculums are aligned with CEFR & JLPT standards, designed to take you from a beginner to a confident multilingual speaker."
              </span>
            </div>

            {/* CTA Interaction Row */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => {
                  const text = encodeURIComponent(
                    `Hello Bhasha World! I am interested in learning a language with you. Please share details of your small batches and pricing plans.`
                  );
                  window.open(`https://wa.me/919158397363?text=${text}`, '_blank');
                }}
                className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold rounded-2xl shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.216 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Column: Simple Clean Video Container */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Ambient Background Aura Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-[#003E9B]/10 via-indigo-500/5 to-[#DC9F02]/10 rounded-full blur-[80px] pointer-events-none opacity-80" />
            
            {/* Clean Rounded Aspect Container */}
            <div className="relative w-full max-w-[300px] sm:max-w-[320px] aspect-[9/16] rounded-3xl overflow-hidden bg-black shadow-2xl shadow-slate-900/15 border border-slate-100 group">
              {/* High-definition Embed for Vertical YouTube Shorts */}
              <iframe
                className="w-full h-full relative z-0"
                src="https://www.youtube.com/embed/RfQtI_5AdOM?autoplay=0&mute=0&controls=1&rel=0"
                title="Bhasha World Language Learning Academy Short"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
