import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import img1 from '../../assets/news_campus_life.jpg';
import img2 from '../../assets/news_innovation_lab.png';
import img3 from '../../assets/news_hackathon.png';
import img4 from '../../assets/about_engineering_workshop.jpg';

const highlights = [
  { title: 'Scholarships & Financial Aid', desc: 'Merit-based institutional support for the brightest minds across all programmes.', img: img1, link: 'https://campuslife-tat.tekkzy.com/scholarship/', tag: 'SUPPORT' },
  { title: 'ICT-Enabled Classrooms', desc: 'Digital-first learning environments equipped with smart boards and AV systems.', img: img2, link: 'https://campuslife-tat.tekkzy.com/ict-Enable-classroom/', tag: 'TECH' },
  { title: 'Campus Security', desc: '24/7 CCTV surveillance and dedicated security personnel ensuring absolute safety.', img: img3, link: 'https://campuslife-tat.tekkzy.com/campus-security/', tag: 'SAFETY' },
];

/*
 * DESIGN: "Magazine Spread" — asymmetric Bento grid layout.
 * Left: huge featured image with overlaid text.
 * Right: stacked highlight cards with horizontal image+text.
 */
export default function News() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden" id="news" style={{ backgroundColor: '#F5EEEC' }}>

      {/* Background Style: Abstract Blobs (Static) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 mix-blend-multiply">
        <div 
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-[#E56D24]/20 blur-[100px]"
        />
        <div 
          className="absolute top-0 right-[-10%] w-[600px] h-[600px] rounded-full bg-[#2C3A8C]/15 blur-[120px]"
        />
        <div 
          className="absolute bottom-[-20%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#E8BD63]/25 blur-[100px]"
        />
        <div 
          className="absolute bottom-10 right-[20%] w-[450px] h-[450px] rounded-full bg-[#34785A]/15 blur-[110px]"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-14 relative z-10">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E56D24]">— Highlights</span>
          <h2 className="serif text-4xl md:text-5xl lg:text-[56px] text-[#3E3A36] leading-[1.05] tracking-tight mt-3">
            What makes Trident<br /><span className="italic font-light text-[#2C3A8C]">special.</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8">

          {/* Left — Featured Image Block */}
          <motion.a
            href="https://campuslife-tat.tekkzy.com/"
            target="_blank"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] lg:h-full min-h-[500px] rounded-[28px] overflow-hidden group block"
          >
            <img src={img4} alt="Campus Life" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, transparent 30%, rgba(26,24,23,0.85) 100%)' }} />

            <div className="absolute bottom-0 left-0 right-0 p-10 md:p-12">
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-[#E8BD63] bg-[#E8BD63]/15 px-4 py-1.5 rounded-full mb-5">CAMPUS LIFE</span>
              <h3 className="serif text-3xl md:text-4xl font-bold text-white mb-3">Innovation & Excellence</h3>
              <p className="text-white/60 text-[15px] leading-relaxed max-w-md">A comprehensive ecosystem nurturing technical skill, creative thinking, and leadership for the professionals of tomorrow.</p>
            </div>
          </motion.a>

          {/* Right — Stacked Cards */}
          <div className="flex flex-col gap-6">
            {highlights.map((item, idx) => (
              <motion.a
                key={item.title}
                href={item.link}
                target="_blank"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                viewport={{ once: true }}
                className="group flex gap-6 items-center p-5 rounded-[20px] bg-white/60 backdrop-blur-sm hover:bg-white transition-all duration-500 hover:shadow-[0_20px_50px_-20px_rgba(62,58,54,0.15)]"
              >
                {/* Thumbnail */}
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-[14px] overflow-hidden flex-shrink-0">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#E56D24] mb-1 block">{item.tag}</span>
                  <h4 className="serif text-lg md:text-xl font-bold text-[#3E3A36] mb-1 group-hover:text-[#2C3A8C] transition-colors">{item.title}</h4>
                  <p className="text-[#3E3A36]/50 text-sm leading-relaxed line-clamp-2">{item.desc}</p>
                </div>

                {/* Arrow */}
                <ArrowUpRight size={20} className="text-[#3E3A36]/20 group-hover:text-[#E56D24] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 flex-shrink-0" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
