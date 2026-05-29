import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import club1 from '../../assets/annual function.jpg';
import club2 from '../../assets/cta_convocation.jpg';
import club3 from '../../assets/Dance 1.jpeg';
import club4 from '../../assets/about_students_studying.jpg';
import club5 from '../../assets/dance 2.jpg';
import club6 from '../../assets/cta_research_scholars.jpg';

const clubs = [
  { img: club1, name: 'Music Club', desc: 'Acoustic performances, band practice, and annual music festivals.', accent: '#E8BD63' },
  { img: club2, name: 'Communication Club', desc: 'Public speaking, debate competitions, and leadership training.', accent: '#E56D24' },
  { img: club3, name: 'Dance Club', desc: 'Classical, contemporary, and hip-hop dance workshops and performances.', accent: '#D3494B' },
  { img: club4, name: 'Social Service Club', desc: 'Community outreach, blood donation drives, and social responsibility.', accent: '#34785A' },
  { img: club5, name: 'Choreography Club', desc: 'Group performances, flash mobs, and inter-college dance competitions.', accent: '#2C3A8C' },
  { img: club6, name: 'Coding Club', desc: 'Hackathons, competitive programming, and open-source contributions.', accent: '#A59381' },
]

/*
 * DESIGN: "Horizontal Scroll on Vertical Scroll"
 * The section is pinned while scrolling, and the cards
 * translate horizontally from right to left as the user scrolls down.
 */
export default function Clubs() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [trackWidth, setTrackWidth] = useState(0)

  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.scrollWidth - window.innerWidth + 200)
    }
    const handleResize = () => {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.scrollWidth - window.innerWidth + 200)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  })

  // Smooth out the scroll progress using spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Map the smoothed progress to horizontal translation
  const x = useTransform(smoothProgress, [0, 1], [0, -trackWidth])

  return (
    <section
      ref={sectionRef}
      className="relative"
      id="clubs"
      style={{ height: `${Math.max(200, trackWidth + window.innerHeight)}px`, backgroundColor: '#3E3A36' }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden" style={{ backgroundColor: '#3E3A36' }}>

        {/* Background Style: Hexagonal Grid (Multi-color) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.05]">
          <svg width="100%" height="100%">
            <defs>
              <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E8BD63" />
                <stop offset="50%" stopColor="#E56D24" />
                <stop offset="100%" stopColor="#D3494B" />
              </linearGradient>
              <pattern id="hexagons" width="50" height="86.6" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
                <path d="M25 0L50 14.43V43.3L25 57.74L0 43.3V14.43ZM25 86.6L50 72.17V43.3L25 28.87L0 43.3V72.17Z" fill="none" stroke="url(#hexGradient)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>

        {/* Content Wrapper */}
        <div className="h-full flex flex-col justify-center relative z-10">

          {/* Header Row */}
          <div className="max-w-[1400px] w-full mx-auto px-6 xl:px-14 mb-12">
            <div className="flex items-end justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E8BD63]">— Student Clubs</span>
                <h2 className="serif text-4xl md:text-5xl lg:text-[56px] text-white leading-[1.05] tracking-tight mt-3">
                  Find your<br /><span className="italic font-light text-[#E8BD63]">tribe.</span>
                </h2>
              </div>

              {/* Scroll Progress Indicator */}
              <div className="hidden md:flex items-center gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Scroll to explore</span>
                <div className="w-24 h-[2px] bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#E8BD63] rounded-full"
                    style={{ scaleX: smoothProgress, transformOrigin: 'left' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Track */}
          <motion.div
            ref={trackRef}
            className="flex gap-6 md:gap-8 pl-6 xl:pl-14 pr-[30vw]"
            style={{ x }}
          >
            {clubs.map((club, idx) => (
              <div
                key={club.name}
                className="min-w-[320px] md:min-w-[400px] lg:min-w-[450px] h-[400px] md:h-[480px] rounded-[24px] overflow-hidden relative group flex-shrink-0 cursor-pointer"
              >
                <img
                  src={club.img}
                  alt={club.name}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817] via-[#1A1817]/30 to-transparent opacity-90" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  {/* Number */}
                  <span className="serif text-5xl font-bold block mb-3 transition-colors duration-500" style={{ color: club.accent + '30' }}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="w-6 h-[2px] mb-4 transition-all duration-500 group-hover:w-12" style={{ backgroundColor: club.accent }} />
                  <h3 className="serif text-2xl font-bold text-white mb-2">{club.name}</h3>
                  <p className="text-white/50 text-sm leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {club.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
