import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SLIDES = [
  {
    image: "/hero_campus_fest_1780036785374.png",
    heading: "Campus Life",
    sub: "Where memories are made",
    accent: "#E8BD63",
  },
  {
    image: "/hero_campus_aerial_1780036803636.png",
    heading: "Our Campus",
    sub: "Built for brilliance",
    accent: "#34785A",
  },
  {
    image: "/hero_students_group_1780036822222.png",
    heading: "Friendships",
    sub: "Bonds that last forever",
    accent: "#E56D24",
  },
  {
    image: "/hero_sports_action_1780036845055.png",
    heading: "Play Hard",
    sub: "Champions are forged here",
    accent: "#D3494B",
  },
];

export default function CampusHero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent(prev => (prev + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const goTo = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const slide = SLIDES[current];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1A1817]">

      {/* Background Image with Ken Burns */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.heading}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817] via-[#1A1817]/60 to-transparent z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1817]/80 via-[#1A1817]/20 to-transparent z-0" />



      {/* Content — Bottom-Left Editorial Style */}
      <div className="absolute inset-0 flex items-end">
        <div className="w-full max-w-[1400px] mx-auto px-6 xl:px-14 pb-28 md:pb-36">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Accent Line */}
              <motion.div
                className="w-16 h-1 rounded-full mb-6"
                style={{ backgroundColor: slide.accent }}
                layoutId="accent-line"
              />

              {/* Main Heading — Massive */}
              <h1
                className="serif text-[64px] md:text-[96px] lg:text-[140px] font-bold text-white leading-[0.85] tracking-[-0.03em] mb-6"
              >
                {slide.heading}
              </h1>

              {/* Sub Text */}
              <p className="text-white/70 text-xl md:text-2xl font-light tracking-wide max-w-lg">
                {slide.sub}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Right-side Vertical Progress Dots */}
      <div className="absolute right-6 xl:right-14 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
        {SLIDES.map((s, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className="group relative w-3 flex flex-col items-center"
          >
            <div
              className="w-3 h-3 rounded-full border-2 transition-all duration-500"
              style={{
                borderColor: idx === current ? s.accent : 'rgba(255,255,255,0.3)',
                backgroundColor: idx === current ? s.accent : 'transparent',
                boxShadow: idx === current ? `0 0 12px ${s.accent}60` : 'none',
              }}
            />
            {idx === current && (
              <motion.div
                layoutId="dot-label"
                className="absolute right-6 top-1/2 -translate-y-1/2 whitespace-nowrap"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </motion.div>
            )}
          </button>
        ))}
      </div>

      {/* Bottom Scroll Hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-8 bg-white/30" />
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">Scroll</span>
      </motion.div>
    </section>
  );
}
