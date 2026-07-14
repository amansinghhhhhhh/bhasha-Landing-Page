import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Import testimonial thumbnails with relative paths
// @ts-ignore
import thumb1 from '../assets/thubnail image/8 (1).webp';
// @ts-ignore
import thumb2 from '../assets/thubnail image/9 (1).webp';
// @ts-ignore
import thumb3 from '../assets/thubnail image/10 (1).webp';
// @ts-ignore
import thumb4 from '../assets/thubnail image/11.webp';
// @ts-ignore
import thumb5 from '../assets/thubnail image/14.webp';
// @ts-ignore
import thumb6 from '../assets/thubnail image/6 (1).webp';

interface VideoTestimonial {
  id: number;
  greeting: string;
  language: string;
  image: string;
  videoUrl: string;
  studentName: string;
  studentRole: string;
  languageLearned: string;
  rating: number;
  comment: string;
}

const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 1,
    greeting: 'Hallo!!!',
    language: 'German',
    image: thumb1,
    videoUrl: 'https://bhashaworld.com/wp-content/uploads/2026/03/09.mp4',
    studentName: 'Neha S.',
    studentRole: 'Working Professional',
    languageLearned: 'German A1-A2',
    rating: 5,
    comment: 'Learning German at Bhasha World was incredibly smooth. The focus on everyday conversation helped me clear my A1 exam with high scores!'
  },
  {
    id: 2,
    greeting: 'Hallo!!!',
    language: 'German',
    image: thumb2,
    videoUrl: 'https://bhashaworld.com/wp-content/uploads/2026/03/08.mp4',
    studentName: 'Aarav K.',
    studentRole: 'School Student',
    languageLearned: 'German Kids Program',
    rating: 5,
    comment: 'The interactive games and fun activities made learning German super enjoyable. I speak confidently with my friends now!'
  },
  {
    id: 3,
    greeting: 'こんにちは',
    language: 'Japanese',
    image: thumb3,
    videoUrl: 'https://bhashaworld.com/wp-content/uploads/2026/03/07.mp4',
    studentName: 'Sneha P.',
    studentRole: 'College Student',
    languageLearned: 'Japanese JLPT N5',
    rating: 5,
    comment: 'The JLPT prep here is very structured. The small batch size allowed me to ask questions without any hesitation.'
  },
  {
    id: 4,
    greeting: 'Hallo!!!',
    language: 'German',
    image: thumb4,
    videoUrl: 'https://bhashaworld.com/wp-content/uploads/2026/03/06.mp4',
    studentName: 'Madhavi D.',
    studentRole: 'Senior Citizen Batch',
    languageLearned: 'German A1-A2',
    rating: 5,
    comment: 'Ich heisse Madhavi. Ich liebe Indien. Bhasha World has given me the confidence to learn German in my 70s. The small batch was incredibly comforting!'
  },
  {
    id: 5,
    greeting: 'Bonjour!!',
    language: 'French',
    image: thumb5,
    videoUrl: 'https://bhashaworld.com/wp-content/uploads/2026/03/10.mp4',
    studentName: 'Susmita P.',
    studentRole: 'Working Professional',
    languageLearned: 'French Corporate Program',
    rating: 5,
    comment: 'Highly structured lessons. Flexible timings made it easy for me to attend classes along with my busy work schedule.'
  },
  {
    id: 6,
    greeting: 'Bonjour!!',
    language: 'French',
    image: thumb6,
    videoUrl: 'https://bhashaworld.com/wp-content/uploads/2026/03/11.mp4',
    studentName: 'Anand P.',
    studentRole: 'Senior Citizen Batch',
    languageLearned: 'French DELF A1',
    rating: 5,
    comment: 'A wonderful experience. The teacher pays individual attention to every student. Learning French is my favorite hobby now.'
  }
];

export default function Testimonials() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="testimonials" 
      className="w-[90%] mx-auto my-16 bg-[#EAF1FA] py-16 sm:py-20 overflow-hidden relative select-none rounded-[32px] border border-slate-100 shadow-[0_10px_35px_-10px_rgba(15,23,42,0.05)]"
    >
      {/* Decorative Grids and Sparkles */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-[0.15]" />
      <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-indigo-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-[90%] mx-auto max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left space-y-3 max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight leading-none">
              Student Success <span className="text-[#003E9B]">Video Stories</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
              Real reviews, real communication milestones. Watch our amazing students speak their target language fluently!
            </p>
          </div>

          {/* Carousel Buttons */}
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#003E9B] hover:border-[#003E9B] hover:shadow-md active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label="Previous Student"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#003E9B] hover:border-[#003E9B] hover:shadow-md active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label="Next Student"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollContainerRef}
          className="flex items-stretch overflow-x-auto pb-8 scrollbar-none gap-6 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {VIDEO_TESTIMONIALS.map((testimonial) => {
            return (
              <div
                key={testimonial.id}
                className="w-[280px] sm:w-[320px] shrink-0 snap-start bg-slate-900 rounded-[32px] overflow-hidden shadow-xl shadow-blue-900/10 border border-white/10 flex flex-col justify-center relative aspect-[1/1] cursor-pointer group"
                onMouseEnter={() => setHoveredId(testimonial.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setPlayingVideo(testimonial.videoUrl)}
              >
                {/* Full-bleed background poster image */}
                <img
                  src={testimonial.image}
                  alt={`${testimonial.studentName} Bhasha World Student Success Poster`}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                />

                {/* Dynamic Background Sparkle details */}
                <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent opacity-40 pointer-events-none" />

                {/* Play Button Icon Center Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-[#DC9F02] group-hover:border-[#DC9F02]/50 group-hover:shadow-lg group-hover:shadow-[#DC9F02]/30">
                    <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Video Testimonial Player Modal */}
      <AnimatePresence>
        {playingVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
            onClick={() => setPlayingVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-black/80"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setPlayingVideo(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900/80 border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-90"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Universal Video Embed (Supports YouTube and Vimeo) */}
              <iframe
                className="w-full h-full relative z-10 animate-fade-in"
                src={(() => {
                  const url = playingVideo;
                  if (url.includes('vimeo.com')) {
                    if (url.includes('player.vimeo.com')) {
                      return `${url}?autoplay=1&muted=0&badge=0&autopause=0`;
                    }
                    const match = url.match(/vimeo\.com\/(\d+)/);
                    if (match) {
                      return `https://player.vimeo.com/video/${match[1]}?autoplay=1&muted=0&badge=0&autopause=0`;
                    }
                  }
                  if (url.includes('youtube.com') || url.includes('youtu.be')) {
                    if (url.includes('embed/')) {
                      return `${url}?autoplay=1&mute=0&controls=1&rel=0`;
                    }
                    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
                    if (match) {
                      return `https://www.youtube.com/embed/${match[1]}?autoplay=1&mute=0&controls=1&rel=0`;
                    }
                  }
                  return url;
                })()}
                title="Bhasha World Success Video Testimonial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
