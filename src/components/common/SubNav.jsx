import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const links = [
  { name: 'News', id: 'news' },
  { name: 'Research', id: 'research' },
  { name: 'Activities', id: 'activities' },
  { name: 'Facilities', id: 'facilities' },
  { name: 'Impact', id: 'impact' },
  { name: 'Events', id: 'events' },
  { name: 'Clubs', id: 'clubs' },
  { name: 'Sports', id: 'sports' },
  { name: 'Leadership', id: 'leadership' },
];

const SubNav = () => {
  const location = useLocation();
  const [activeToken, setActiveToken] = useState('news');
  const [isVisible, setIsVisible] = useState(false);

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      const heroElement = document.getElementById('hero') || document.querySelector('section:first-of-type');
      const heroHeight = heroElement?.offsetHeight || 700;
      setIsVisible(window.scrollY > heroHeight - 100);

      // ScrollSpy logic
      let current = '';
      for (const link of links) {
        const element = document.getElementById(link.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = link.id;
          }
        }
      }
      if (current) setActiveToken(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Don't render SubNav on subpages — but AFTER all hooks
  if (!isHomePage) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.165, 0.84, 0.44, 1] }}
          className="fixed top-[72px] lg:top-[76px] left-0 w-full bg-white/95 backdrop-blur-md border-b border-primary/5 z-[1000] py-4 shadow-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="flex justify-start md:justify-center gap-6 md:gap-8 overflow-x-auto whitespace-nowrap pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
              {links.map((link) => (
                <li key={link.id} className="flex-shrink-0">
                  <button 
                    onClick={() => handleClick(link.id)}
                    className={cn(
                      "relative text-[10px] md:text-xs font-black uppercase tracking-widest transition-all duration-300 pb-1.5",
                      activeToken === link.id ? "text-[#1B4D8E]" : "text-slate-400 hover:text-[#1B4D8E]/60"
                    )}
                  >
                    {link.name}
                    {activeToken === link.id && (
                      <motion.div 
                        layoutId="active-nav"
                        className="absolute bottom-0 left-0 w-full h-[3px] rounded-full bg-[#1B4D8E]"
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubNav;
