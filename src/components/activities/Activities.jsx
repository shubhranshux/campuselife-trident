import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

import act1 from '../../assets/facilities_sports.jpg';
import act2 from '../../assets/news_seminar.jpg';
import act3 from '../../assets/news_hackathon.png';
import act4 from '../../assets/athletics_facility.png';
import act5 from '../../assets/news_innovation_lab.png';
import act6 from '../../assets/about_engineering_workshop.jpg';

const activityCategories = [
  { title: 'Extra Curricular', description: 'Trident promotes and nurtures the talents in its students through sports, athletics, and physical activities.', color: '#E56D24', href: 'https://activities-tat.tekkzy.com/extra-curricullar/', stats: '15+ Sports', img: act1 },
  { title: 'Co-Curricular', description: 'Activities that complement the academic curriculum — debates, quizzes, seminars, workshops, and national-level competitions.', color: '#2C3A8C', href: 'https://activities-tat.tekkzy.com/co-curricular/', stats: '30+ Events', img: act2 },
  { title: 'Innovation Lab', description: 'Fostering innovation through incubation cells, startup mentoring, and technical project competitions at national level.', color: '#E8BD63', href: 'https://activities-tat.tekkzy.com/innovation-&-entrepreneurship/', stats: 'Innovation Cell', img: act3 },
  { title: 'Sports & Games', description: 'World-class sports facilities including cricket ground, football field, basketball, volleyball, badminton, and more.', color: '#34785A', href: 'https://activities-tat.tekkzy.com/sports-&-games/', stats: '10+ Facilities', img: act4 },
  { title: 'IEDC', description: 'Innovation & Entrepreneurship Development Cell (IEDC) supported by DST, Government of India, driving startup culture.', color: '#D3494B', href: 'https://activities-tat.tekkzy.com/iedc(activites)/', stats: 'Govt. Recognized', img: act5 },
  { title: 'Incubation Cell', description: 'A dedicated incubation center that supports student startups with mentoring, infrastructure, and seed funding.', color: '#A59381', href: 'https://activities-tat.tekkzy.com/incubation-cell/', stats: 'Startup Support', img: act6 },
];

/*
 * DESIGN: "Vertical Accordion with Full-bleed Reveal"
 * Stacked horizontal bars that expand on click to reveal image + details
 */
export default function Activities() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: 'linear-gradient(180deg, #EFE7DF 0%, #F5EEEC 100%)' }}>

      {/* Background Style: Mesh Gradient (Static, Multi-color) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-50 mix-blend-multiply">
        <div 
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#E56D24]/30 blur-[100px]"
        />
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#E8BD63]/30 blur-[120px]"
        />
        <div 
          className="absolute top-[20%] left-[30%] w-[40%] h-[40%] rounded-full bg-[#D3494B]/20 blur-[100px]"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-14 relative z-10">

        {/* Header — Left-aligned with accent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-start gap-6 mb-16"
        >
          <div className="w-1 h-20 rounded-full bg-gradient-to-b from-[#E56D24] to-[#E8BD63] flex-shrink-0 mt-2" />
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#3E3A36]/50">Beyond Academics</span>
            <h2 className="serif text-4xl md:text-5xl lg:text-[56px] text-[#3E3A36] leading-[1.05] tracking-tight mt-2">
              A World of<br /><span className="italic font-light text-[#E56D24]">Possibilities.</span>
            </h2>
          </div>
        </motion.div>

        {/* Accordion Layout */}
        <div className="space-y-4">
          {activityCategories.map((cat, idx) => {
            const isOpen = idx === activeIdx;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06 }}
                viewport={{ once: true }}
                onClick={() => setActiveIdx(idx)}
                className="cursor-pointer rounded-[20px] overflow-hidden transition-all duration-500"
                style={{ backgroundColor: isOpen ? '#fff' : 'rgba(255,255,255,0.4)' }}
              >
                {/* Header Bar */}
                <div className="flex items-center gap-5 px-8 py-6">
                  <div className="w-3 h-3 rounded-full flex-shrink-0 transition-transform duration-500" style={{ backgroundColor: cat.color, transform: isOpen ? 'scale(1.5)' : 'scale(1)', boxShadow: isOpen ? `0 0 15px ${cat.color}40` : 'none' }} />
                  <h3 className="serif text-xl md:text-2xl font-bold text-[#3E3A36] flex-1">{cat.title}</h3>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] hidden md:block" style={{ color: cat.color }}>{cat.stats}</span>
                  <ArrowRight size={18} className="text-[#3E3A36]/20 transition-transform duration-500" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', color: isOpen ? cat.color : undefined }} />
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 px-8 pb-8">
                        <div className="flex flex-col justify-center">
                          <p className="text-[#3E3A36]/60 text-[16px] leading-relaxed mb-6">{cat.description}</p>
                          <a
                            href={cat.href}
                            target="_blank"
                            className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:gap-5 transition-all duration-300"
                            style={{ color: cat.color }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            Explore <ArrowRight size={14} />
                          </a>
                        </div>
                        <div className="h-[250px] md:h-[300px] rounded-[16px] overflow-hidden">
                          <img src={cat.img} alt={cat.title} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
