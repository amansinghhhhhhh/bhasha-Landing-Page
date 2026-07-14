import { motion } from 'motion/react';

// @ts-ignore
import c1 from '../assets/brand_logos/Corporate-01.webp';
// @ts-ignore
import c2 from '../assets/brand_logos/Corporate-02.webp';
// @ts-ignore
import c3 from '../assets/brand_logos/Corporate-03.webp';
// @ts-ignore
import c4 from '../assets/brand_logos/Corporate-04.webp';
// @ts-ignore
import c5 from '../assets/brand_logos/Corporate-05.webp';
// @ts-ignore
import c7 from '../assets/brand_logos/Corporate-07.webp';
// @ts-ignore
import c8 from '../assets/brand_logos/Corporate-08.webp';
// @ts-ignore
import c9 from '../assets/brand_logos/Corporate-09.webp';
// @ts-ignore
import c10 from '../assets/brand_logos/Corporate-10.webp';
// @ts-ignore
import e1 from '../assets/brand_logos/Educational-1.webp';
// @ts-ignore
import e2 from '../assets/brand_logos/Educational-2.webp';
// @ts-ignore
import o1 from '../assets/brand_logos/Other-01.webp';
// @ts-ignore
import o3 from '../assets/brand_logos/Other-03.webp';
// @ts-ignore
import o4 from '../assets/brand_logos/Other-04.webp';
// @ts-ignore
import o7 from '../assets/brand_logos/Other-07.webp';
// @ts-ignore
import o8 from '../assets/brand_logos/Other-08.webp';
// @ts-ignore
import o10 from '../assets/brand_logos/Other-10.webp';
// @ts-ignore
import o11 from '../assets/brand_logos/Other-11.webp';

export default function TrustStrip() {
  const brandLogos = [
    { img: c1, name: 'Corporate Brand 1' },
    { img: c2, name: 'Corporate Brand 2' },
    { img: c3, name: 'Corporate Brand 3' },
    { img: c4, name: 'Corporate Brand 4' },
    { img: c5, name: 'Corporate Brand 5' },
    { img: c7, name: 'Corporate Brand 6' },
    { img: c8, name: 'Corporate Brand 7' },
    { img: c9, name: 'Corporate Brand 8' },
    { img: c10, name: 'Corporate Brand 9' },
    { img: e1, name: 'Educational Institution 1' },
    { img: e2, name: 'Educational Institution 2' },
    { img: o1, name: 'Global Organization 1' },
    { img: o3, name: 'Global Organization 2' },
    { img: o4, name: 'Global Organization 3' },
    { img: o7, name: 'Global Organization 4' },
    { img: o8, name: 'Global Organization 5' },
    { img: o10, name: 'Global Organization 6' },
    { img: o11, name: 'Global Organization 7' },
  ];

  // Duplicate arrays to ensure seamless continuous wrapping
  const marqueeBrands = [...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <section className="w-[90%] mx-auto my-16 bg-white py-12 border border-slate-100 overflow-hidden relative select-none rounded-[32px] shadow-[0_10px_35px_-10px_rgba(15,23,42,0.05)]">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[100px] bg-[#DC9F02]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[100px] bg-[#003E9B]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* BRAND PARTNERS TITLE */}
      <div className="mb-8 text-center relative z-10 px-4">
        <span className="text-xl sm:text-2xl font-black tracking-[0.25em] text-[#003E9B] uppercase font-display">
          Partnerships
        </span>
      </div>

      {/* INFINITE SCROLLING CONTAINER FOR BRAND LOGOS */}
      <div className="relative w-full z-10 flex items-center overflow-hidden">
        {/* Left & Right Elegant Smooth Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        {/* Scrolling Track in the opposite direction for parallax feel */}
        <div className="flex overflow-hidden w-full">
          <motion.div 
            className="flex space-x-10 shrink-0 py-5 px-3 items-center"
            animate={{ x: ["-33.333%", 0] }}
            transition={{
              ease: "linear",
              duration: 50,
              repeat: Infinity,
            }}
          >
            {marqueeBrands.map((brand, idx) => (
              <div 
                key={idx} 
                className="h-[72px] sm:h-[90px] w-[160px] sm:w-[210px] flex items-center justify-center shrink-0 bg-white border border-slate-100 rounded-2xl p-2 sm:p-3 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:border-[#003E9B]/30 hover:shadow-[0_8px_20px_rgba(0,62,155,0.08)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <img 
                  src={brand.img} 
                  alt={brand.name} 
                  className="max-h-[85%] max-w-[85%] object-contain pointer-events-none select-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
