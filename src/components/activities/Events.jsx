import { motion } from 'framer-motion'

import event1 from '../../assets/news_hackathon.png';
import event2 from '../../assets/news_trifest.png';
import event3 from '../../assets/Freshers party.jpeg';

const events = [
  { year: '2025', month: 'OCT', title: 'TechFest — TRIDENT 2025', desc: 'Annual technology symposium featuring hackathons, coding competitions, and industry talks.', img: event1, color: '#E56D24' },
  { year: '2025', month: 'DEC', title: 'Cultural Evening', desc: 'The vibrant annual cultural festival celebrating music, dance, drama, and creative arts.', img: event2, color: '#2C3A8C' },
  { year: '2026', month: 'FEB', title: 'Freshers Party', desc: 'Welcoming the new batch with a night of music, performances, and memories.', img: event3, color: '#34785A' },
]

/*
 * DESIGN: "Horizontal Event Cards with Large Date"
 * Each event is a wide horizontal card with a massive date on the left,
 * description in center, and image on the right.
 * Alternating accent bars.
 */
export default function Events() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden" id="events" style={{ backgroundColor: '#FAF7F2' }}>

      {/* Background Style: Paper Cut Layers (Multi-color) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        <svg className="absolute bottom-0 left-0 w-full drop-shadow-[0_-10px_10px_rgba(62,58,54,0.05)] text-white" viewBox="0 0 1440 120" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,40 Q1080,120 720,60 Q360,0 0,40 Z"></path>
        </svg>
        <svg className="absolute bottom-8 left-0 w-full drop-shadow-[0_-10px_10px_rgba(62,58,54,0.03)] text-[#F5EEEC]" viewBox="0 0 1440 120" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,60 Q1080,20 720,80 Q360,140 0,60 Z"></path>
        </svg>
        <svg className="absolute bottom-16 left-0 w-full opacity-20 text-[#D3494B]" viewBox="0 0 1440 120" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,80 Q1080,0 720,100 Q360,160 0,80 Z"></path>
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-14 relative z-10">

        {/* Header — Center with counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-4 mb-5">
            <div className="w-10 h-10 rounded-full border-2 border-[#E8BD63]/30 flex items-center justify-center">
              <span className="serif text-sm font-bold text-[#E8BD63]">{events.length}</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#3E3A36]/50">Upcoming Events</span>
          </div>
          <h2 className="serif text-4xl md:text-5xl lg:text-[56px] text-[#3E3A36] leading-[1.05] tracking-tight">
            Mark your<br /><span className="italic font-light text-[#D3494B]">calendar.</span>
          </h2>
        </motion.div>

        {/* Event Cards */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {events.map((event, idx) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              viewport={{ once: true }}
              className="group relative grid md:grid-cols-[120px_1fr_280px] gap-6 md:gap-10 items-center bg-white rounded-[24px] p-6 md:p-8 hover:shadow-[0_30px_60px_-20px_rgba(62,58,54,0.12)] transition-shadow duration-500"
            >
              {/* Left — Big Date */}
              <div className="text-center md:text-left">
                <div className="serif text-4xl md:text-5xl font-bold leading-none" style={{ color: event.color }}>{event.month}</div>
                <div className="text-[#3E3A36]/30 text-sm font-bold tracking-wider">{event.year}</div>
              </div>

              {/* Center — Text */}
              <div>
                <h3 className="serif text-xl md:text-2xl font-bold text-[#3E3A36] mb-2 group-hover:text-[#2C3A8C] transition-colors">{event.title}</h3>
                <p className="text-[#3E3A36]/50 text-[15px] leading-relaxed">{event.desc}</p>
              </div>

              {/* Right — Image */}
              <div className="h-40 md:h-44 rounded-[16px] overflow-hidden">
                <img src={event.img} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>

              {/* Accent bar on the left edge */}
              <div className="absolute left-0 top-8 bottom-8 w-1 rounded-full transition-opacity duration-500 opacity-0 group-hover:opacity-100" style={{ backgroundColor: event.color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
