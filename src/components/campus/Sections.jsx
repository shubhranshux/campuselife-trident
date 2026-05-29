import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Microscope, Beaker, Globe, Cpu, Home, Utensils, HeartPulse, Wifi, Building, Bus, ArrowRight, Quote as QuoteIcon } from 'lucide-react'

import researchImg from '../../assets/real_research.jpg'
import facility1 from '../../assets/facilities_campus_green.jpg'
import facility2 from '../../assets/real_cafeteria.jpg'
import facility3 from '../../assets/facilities_sports.jpg'
import facility4 from '../../assets/real_lab.jpg'
import facility5 from '../../assets/athletics_facility.png'
import facility6 from '../../assets/news_campus_life.jpg'

// ==========================================
// RESEARCH — "Split Screen Parallax" Design
// Dark emerald with floating stats and offset image
// ==========================================
export function Research() {
  const stats = [
    { num: '₹5Cr+', label: 'Research Funding' },
    { num: '120+', label: 'Published Papers' },
    { num: '15+', label: 'Active Patents' },
  ]

  return (
    <section className="relative py-28 md:py-36 overflow-hidden" id="research" style={{ backgroundColor: '#1A2E22' }}>

      {/* Background Style: Topographic Lines (Static, Multi-color) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center"
        style={{ 
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="absolute border rounded-[40%_60%_70%_30%/40%_50%_60%_50%]" 
            style={{ 
              borderColor: i % 2 === 0 ? '#E8BD63' : '#34785A',
              width: `${(i+1)*300}px`, 
              height: `${(i+1)*250}px` 
            }} 
          />
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-14 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E8BD63]">— Research & Innovation</span>
            <h2 className="serif text-4xl md:text-5xl lg:text-[56px] text-white leading-[1.05] tracking-tight mt-4 mb-8">
              Pushing the boundaries<br />of <span className="italic font-light text-[#E8BD63]">knowledge.</span>
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-lg">
              A DSIR-SIRO recognized institution with active research programmes in AI, IoT, renewable energy, and advanced materials.
            </p>

            {/* Research Areas — Horizontal Pill Tags */}
            <div className="flex flex-wrap gap-3 mb-12">
              {[
                { icon: Microscope, label: 'Applied Sciences' },
                { icon: Cpu, label: 'AI & ML Research' },
                { icon: Beaker, label: 'Material Engineering' },
                { icon: Globe, label: 'Sustainable Systems' },
              ].map((area) => (
                <div key={area.label} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-default">
                  <area.icon size={14} className="text-[#E8BD63]" />
                  <span className="text-white/70 text-sm font-medium">{area.label}</span>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="flex gap-10">
              {stats.map((s, idx) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="serif text-3xl md:text-4xl font-bold text-[#E8BD63]">{s.num}</div>
                  <div className="text-white/40 text-xs font-medium uppercase tracking-widest mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Offset Image Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background accent block */}
            <div className="absolute -top-8 -right-8 w-full h-full rounded-[24px] bg-[#E8BD63]/10" />
            <div className="relative h-[450px] lg:h-[550px] rounded-[24px] overflow-hidden shadow-2xl">
              <img src={researchImg} alt="Research Laboratory" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ==========================================
// FACILITIES — "Interactive Tabs with Floating Preview" Design
// Warm cream with clickable tabs that reveal full-bleed images
// ==========================================
export function Facilities() {
  const facilities = [
    { title: 'Premium Hostels', desc: 'In-campus safe residence with modern amenities, 24/7 security, and a home-like atmosphere for students from across the country.', img: facility1, icon: Home, color: '#34785A' },
    { title: 'Food Centers', desc: 'Multi-cuisine dining halls offering wholesome meals in spacious, naturally-lit settings designed to encourage community.', img: facility2, icon: Utensils, color: '#E56D24' },
    { title: 'Healthcare', desc: 'Dedicated health center with qualified medical professionals and emergency care facilities available round-the-clock.', img: facility3, icon: HeartPulse, color: '#D3494B' },
    { title: 'Modern Infrastructure', desc: 'AICTE-standard smart classrooms, advanced computing labs, and state-of-the-art seminar halls for immersive learning.', img: facility4, icon: Building, color: '#2C3A8C' },
    { title: 'Campus WiFi', desc: 'High-speed internet connectivity across the entire campus, enabling seamless digital learning and research.', img: facility5, icon: Wifi, color: '#E8BD63' },
    { title: 'Safe Transport', desc: 'Extensive bus fleet covering all major routes across Bhubaneswar and surrounding areas for safe daily commute.', img: facility6, icon: Bus, color: '#A59381' },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative py-28 md:py-36 overflow-hidden" id="facilities" style={{ backgroundColor: '#F9F7F5' }}>

      {/* Background Style: Diagonal Pattern (Multi-color) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #3E3A36 0, #3E3A36 2px, transparent 2px, transparent 15px, #E56D24 15px, #E56D24 17px, transparent 17px, transparent 30px)'
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 xl:px-14 relative z-10">

        {/* Header — Right-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-right mb-16"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#34785A]">Facilities —</span>
          <h2 className="serif text-4xl md:text-5xl lg:text-[56px] text-[#3E3A36] leading-[1.05] tracking-tight mt-3">
            Everything you<br /><span className="italic font-light text-[#E56D24]">need.</span>
          </h2>
        </motion.div>

        {/* Tabs + Image Grid */}
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">

          {/* Tabs Column */}
          <div className="space-y-3">
            {facilities.map((fac, idx) => {
              const Icon = fac.icon
              const isActive = idx === activeIndex
              return (
                <motion.button
                  key={fac.title}
                  onClick={() => setActiveIndex(idx)}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className={`w-full flex items-center gap-5 p-5 rounded-[16px] text-left transition-all duration-500 ${isActive ? 'bg-white shadow-[0_15px_40px_-15px_rgba(62,58,54,0.15)]' : 'hover:bg-white/40'}`}
                >
                  <div
                    className="w-12 h-12 rounded-[12px] flex items-center justify-center flex-shrink-0 transition-colors duration-500"
                    style={{ backgroundColor: isActive ? fac.color + '15' : '#3E3A36' + '08' }}
                  >
                    <Icon size={20} style={{ color: isActive ? fac.color : '#3E3A36' + '40' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="serif text-lg font-bold text-[#3E3A36] mb-0.5">{fac.title}</h4>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-[#3E3A36]/50 text-sm leading-relaxed"
                      >
                        {fac.desc}
                      </motion.p>
                    )}
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Image Preview */}
          <div className="relative h-[450px] lg:h-[600px] rounded-[28px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={facilities[activeIndex].img}
                alt={facilities[activeIndex].title}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${facilities[activeIndex].color}30 0%, transparent 60%)` }} />
            <div className="absolute top-8 left-8 px-5 py-2 rounded-full bg-white/90 backdrop-blur-sm">
              <span className="serif text-sm font-bold text-[#3E3A36]">{facilities[activeIndex].title}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ==========================================
// IMPACT — "Counter Dashboard" Design
// Rich gold with large animated numbers, geometric shapes
// ==========================================
export function Impact() {
  const impactData = [
    { number: '94%', label: 'Placement Rate', desc: 'Students placed in top companies' },
    { number: '120+', label: 'Recruiters', desc: 'Fortune 500 & leading MNCs' },
    { number: '20+', label: 'Years', desc: 'Of academic excellence' },
    { number: '6', label: 'NBA Programmes', desc: 'Nationally accredited courses' },
  ]

  return (
    <section className="relative py-28 md:py-36 overflow-hidden" style={{ backgroundColor: '#1A1817' }}>

      {/* Background Style: Glow Orbs (Static, Multi-color) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
        <div 
          className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full bg-[#E8BD63]/20 blur-[100px]" 
        />
        <div 
          className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#D3494B]/15 blur-[120px]" 
        />
        <div 
          className="absolute top-[20%] left-[30%] w-[400px] h-[400px] rounded-full bg-[#34785A]/15 blur-[100px]" 
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-14 relative z-10">

        {/* Header — Center */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E8BD63]">— Our Impact</span>
          <h2 className="serif text-4xl md:text-5xl lg:text-[56px] text-white leading-[1.05] tracking-tight mt-3">
            Numbers that<br /><span className="italic font-light text-[#E8BD63]">speak.</span>
          </h2>
        </motion.div>

        {/* Stats Grid — 2x2 */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {impactData.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative p-10 md:p-12 rounded-[24px] border border-white/5 bg-white/[0.03] backdrop-blur-sm hover:border-[#E8BD63]/20 transition-all duration-500 group"
            >
              {/* Number */}
              <div className="serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#E8BD63] mb-4 group-hover:scale-105 transition-transform duration-500 origin-left">
                {item.number}
              </div>
              <h3 className="text-white text-lg font-bold uppercase tracking-widest mb-2">{item.label}</h3>
              <p className="text-white/40 text-sm">{item.desc}</p>

              {/* Subtle accent corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-[24px]">
                <div className="absolute top-3 right-3 w-4 h-4 rounded-full border border-[#E8BD63]/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==========================================
// QUOTE — "Full-Screen Cinematic" Design
// Deep blue immersive with giant quote marks and convocation image
// ==========================================
export function Quote() {
  return (
    <section className="relative py-36 md:py-44 overflow-hidden" style={{ backgroundColor: '#2C3A8C' }}>

      {/* Background Image — Semi-transparent */}
      <div className="absolute inset-0 opacity-10">
        <img src="/section_convocation_1780036911511.png" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-[#2C3A8C]/90" />

      {/* Background Style: Cosmic Space (Static, Multi-color) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(60)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          const colors = ['#ffffff', '#E8BD63', '#E56D24'];
          const color = colors[Math.floor(Math.random() * colors.length)];
          return (
            <div
              key={i}
              className="absolute rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              style={{
                backgroundColor: color,
                width: size + 'px',
                height: size + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.5 + 0.3,
              }}
            />
          );
        })}
      </div>

      {/* Giant Quote Mark */}
      <div className="absolute top-10 left-10 md:left-20 text-[200px] md:text-[300px] leading-none serif text-white/5 pointer-events-none select-none">
        "
      </div>

      <div className="max-w-4xl mx-auto px-6 xl:px-14 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <QuoteIcon size={40} className="text-[#E8BD63] mx-auto mb-8" />
          <blockquote className="serif text-2xl md:text-3xl lg:text-4xl text-white/90 leading-relaxed font-light italic mb-10">
            "Education is not the filling of a pail, but the lighting of a fire. At Trident, we ignite curiosity, foster innovation, and build leaders who shape the future."
          </blockquote>
          <div className="w-12 h-[2px] bg-[#E8BD63] mx-auto mb-6" />
          <p className="text-white/70 text-sm font-bold uppercase tracking-[0.2em]">Dr. Biswa Bijayi Panigrahi </p>
          <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Founder & Chairman, Trident Group</p>
        </motion.div>
      </div>
    </section>
  )
}
