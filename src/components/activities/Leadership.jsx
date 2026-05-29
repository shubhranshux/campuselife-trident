import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

import lead1 from '../../assets/recruiter_dp_das.jpg';
import lead2 from '../../assets/recruiter_anirban.jpg';
import lead3 from '../../assets/recruiter_dp_samantarai.jpg';
import lead4 from '../../assets/recruiter_nitin.jpg';

const leaders = [
  { img: lead1, role: 'CHAIRMAN', name: 'Dr. Chandan Kumar Das', subtitle: 'Sports Committee', color: '#E8BD63' },
  { img: lead2, role: 'FACULTY GUIDE', name: 'Dr. Mili Panigrahi', subtitle: 'Music Club (ETC)', color: '#E56D24' },
  { img: lead3, role: 'FACULTY GUIDE', name: 'Mr. Manoj Kumar Rath', subtitle: 'Communication Club', color: '#34785A' },
  { img: lead4, role: 'SPORTS OFFICER', name: 'Mr. Pratap Kumar Rath', subtitle: 'Sports & Games Committee', color: '#2C3A8C' },
]

/*
 * DESIGN: "Overlapping Profile Row"
 * Dark section with horizontally overlapping circular portraits
 * and a vertical text reveal on hover.
 * Unique from all other section layouts.
 */
export default function Leadership() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden" id="leadership" style={{ backgroundColor: '#1A1817' }}>

      {/* Background Style: Neural Network (Multi-color) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E8BD63" />
              <stop offset="100%" stopColor="#E56D24" />
            </linearGradient>
          </defs>
          <pattern id="neural" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
            <circle cx="20" cy="20" r="2" fill="#E8BD63" />
            <circle cx="80" cy="50" r="3" fill="#E56D24" />
            <circle cx="40" cy="80" r="1.5" fill="#34785A" />
            <circle cx="120" cy="20" r="2" fill="#2C3A8C" />
            <line x1="20" y1="20" x2="80" y2="50" stroke="url(#neuralGrad)" strokeWidth="0.5" />
            <line x1="20" y1="20" x2="40" y2="80" stroke="#34785A" strokeWidth="0.5" />
            <line x1="80" y1="50" x2="40" y2="80" stroke="#E56D24" strokeWidth="0.5" />
            <line x1="80" y1="50" x2="120" y2="20" stroke="#2C3A8C" strokeWidth="0.5" />
            <line x1="40" y1="80" x2="-20" y2="50" stroke="#34785A" strokeWidth="0.5" />
            <line x1="20" y1="20" x2="20" y2="-20" stroke="#E8BD63" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#neural)" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-14 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E8BD63]">— Guiding Force</span>
          <h2 className="serif text-4xl md:text-5xl lg:text-[56px] text-white leading-[1.05] tracking-tight mt-3">
            Club<br /><span className="italic font-light text-[#E8BD63]">leaders.</span>
          </h2>
        </motion.div>

        {/* Leader Cards — Wide horizontal layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, idx) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              {/* Circular Portrait with Ring */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-8">
                {/* Accent Ring */}
                <div
                  className="absolute inset-0 rounded-full border-2 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12"
                  style={{ borderColor: leader.color + '40' }}
                />
                {/* Inner Circle */}
                <div className="absolute inset-2 rounded-full overflow-hidden">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Small accent dot */}
                <div
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-[#1A1817] transition-transform duration-500 group-hover:scale-125"
                  style={{ backgroundColor: leader.color }}
                />
              </div>

              {/* Role Badge */}
              <span
                className="inline-block text-[9px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-4"
                style={{ color: leader.color, backgroundColor: leader.color + '15' }}
              >
                {leader.role}
              </span>

              {/* Name & Subtitle */}
              <h3 className="serif text-xl font-bold text-white mb-1 group-hover:text-[#E8BD63] transition-colors duration-500">{leader.name}</h3>
              <p className="text-white/40 text-sm">{leader.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
