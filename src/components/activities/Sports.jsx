import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import sport1 from '../../assets/Gym.jpg';
import sport2 from '../../assets/facilities_sports.jpg';
import sport3 from '../../assets/facilities_campus_green.jpg';
import sport4 from '../../assets/about_students_studying.jpg';
import sport5 from '../../assets/news_campus_life.jpg';
import sport6 from '../../assets/cta_campus_reading.jpg';

const sports = [
  { img: sport1, label: 'Gymnasium', accent: '#E8BD63', stat: 'Modern Equipments' },
  { img: sport2, label: 'Basketball', accent: '#E56D24', stat: '3 Courts' },
  { img: sport3, label: 'Football', accent: '#34785A', stat: 'FIFA Standard' },
  { img: sport4, label: 'Volleyball', accent: '#D3494B', stat: '2 Courts' },
  { img: sport5, label: 'Badminton', accent: '#2C3A8C', stat: 'Indoor Arena' },
  { img: sport6, label: 'Table Tennis', accent: '#A59381', stat: '4 Tables' },
]

/*
 * DESIGN: "Typographic List" — completely non-card based.
 * Just large typography separated by thin elegant borders.
 * Images appear floating on hover.
 */
export default function Sports() {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  return (
    <section className="relative py-28 md:py-36 overflow-hidden" id="sports" style={{ backgroundColor: '#F5EEEC' }}>

      {/* Background Style: Noise Texture + Floating Shapes (Static, Multi-color) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
        <div 
          className="absolute top-20 left-20 w-32 h-32 rounded-full border border-[#34785A]/20" 
        />
        <div 
          className="absolute bottom-40 right-20 w-48 h-48 border border-[#E8BD63]/20" 
          style={{ transform: 'rotate(45deg)' }}
        />
        <div 
          className="absolute top-1/2 left-1/3 w-24 h-24 border border-[#E56D24]/20" 
          style={{ transform: 'rotate(20deg)' }}
        />
        <div 
          className="absolute top-[20%] right-[30%] w-32 h-32 rounded-full border border-[#2C3A8C]/15" 
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-14 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="serif text-4xl font-bold text-[#34785A]/30">✦</span>
          </div>
          <h2 className="serif text-4xl md:text-5xl lg:text-[56px] text-[#3E3A36] leading-[1.05] tracking-tight">
            Play with<br /><span className="italic font-light text-[#34785A]">passion.</span>
          </h2>
        </motion.div>

        {/* Non-Card Typographic List */}
        <div className="max-w-5xl mx-auto flex flex-col relative">
          
          {/* Top border of the list */}
          <div className="w-full h-[1px] bg-[#3E3A36]/10" />

          {sports.map((sport, idx) => {
            const isHovered = hoveredIdx === idx

            return (
              <motion.div
                key={sport.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group flex flex-col md:flex-row items-center justify-between py-10 md:py-12 border-b border-[#3E3A36]/10 relative cursor-pointer"
              >
                {/* Left Side: Stat */}
                <div className="w-full md:w-48 text-left mb-2 md:mb-0">
                  <span 
                    className="text-[12px] font-bold uppercase tracking-[0.25em] transition-colors duration-500"
                    style={{ color: isHovered ? sport.accent : '#3E3A3640' }}
                  >
                    {sport.stat}
                  </span>
                </div>

                {/* Center: Massive Typography */}
                <div className="flex-1 text-left relative z-10 w-full">
                  <h3 
                    className="serif text-5xl md:text-7xl lg:text-[90px] font-bold text-[#3E3A36] transition-all duration-700 leading-none"
                    style={{ 
                      transform: isHovered ? 'translateX(20px)' : 'translateX(0px)',
                      color: isHovered ? '#1A1817' : '#3E3A36'
                    }}
                  >
                    {sport.label}
                  </h3>
                </div>

                {/* Right: Arrow Icon */}
                <div className="hidden md:flex w-16 h-16 rounded-full border border-[#3E3A36]/20 items-center justify-center transition-all duration-500 group-hover:bg-[#3E3A36]">
                  <ArrowRight size={24} className="text-[#3E3A36] group-hover:text-[#F5EEEC] group-hover:-rotate-45 transition-all duration-500" />
                </div>

                {/* Hover Reveal Image (Floating) */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, x: -20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.8, x: 20 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="hidden md:block absolute right-32 top-1/2 -translate-y-1/2 w-80 h-48 rounded-[20px] overflow-hidden shadow-2xl pointer-events-none z-20"
                    >
                      <div className="absolute inset-0 bg-black/10 z-10" />
                      <img 
                        src={sport.img} 
                        alt={sport.label} 
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Mobile Image Reveal (Inline) */}
                <div className={`md:hidden w-full overflow-hidden transition-all duration-500 mt-6 rounded-[16px] ${isHovered ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <img src={sport.img} alt={sport.label} className="w-full h-48 object-cover" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
