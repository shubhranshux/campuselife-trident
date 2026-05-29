import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/common/Header';
import CampusHero from './components/campus/CampusHero';
import News from './components/campus/News';
import { 
  Research as CampusResearch, 
  Facilities as CampusFacilities,
  Impact, 
  Quote
} from './components/campus/Sections';

import Activities from './components/activities/Activities';
import Clubs from './components/activities/Clubs';
import Events from './components/activities/Events';
import Sports from './components/activities/Sports';
import Leadership from './components/activities/Leadership';

import SectionDivider from './components/common/SectionDivider';
import Footer from './components/common/Footer';

import AboutTrident from './pages/AboutTrident';
import DepartmentLibraries from './pages/DepartmentLibraries';

function MainContent() {
  return (
    <main>
      {/* ── Hero (dark bg with campus images) ── */}
      <CampusHero />

      {/* Hero (dark) → News (cream) */}
      <SectionDivider type="wave" topColor="#1A1817" bottomColor="#F5EEEC" height={80} />

      {/* ── News — Magazine Spread ── */}
      <News />

      {/* News (cream) → Research (dark emerald) */}
      <SectionDivider type="curve" topColor="#F5EEEC" bottomColor="#1A2E22" height={70} />

      {/* ── Research — Split Screen ── */}
      <CampusResearch />

      {/* Research (dark emerald) → Activities (warm gradient) */}
      <SectionDivider type="wave" topColor="#1A2E22" bottomColor="#EFE7DF" height={70} />

      {/* ── Activities — Accordion ── */}
      <Activities />

      {/* Activities (cream) → Facilities (light) */}
      <SectionDivider type="curve" topColor="#F5EEEC" bottomColor="#F9F7F5" height={60} />

      {/* ── Facilities — Tabs ── */}
      <CampusFacilities />

      {/* Facilities (light) → Impact (dark) */}
      <SectionDivider type="tilt" topColor="#F9F7F5" bottomColor="#1A1817" height={70} />

      {/* ── Impact — Counter Dashboard ── */}
      <Impact />

      {/* Impact (dark) → Events (cream) */}
      <SectionDivider type="wave" topColor="#1A1817" bottomColor="#FAF7F2" height={70} />

      {/* ── Events — Horizontal Cards ── */}
      <Events />

      {/* Events (cream) → Clubs (dark charcoal) */}
      <SectionDivider type="curve" topColor="#FAF7F2" bottomColor="#3E3A36" height={70} />

      {/* ── Clubs — Film-strip Carousel ── */}
      <Clubs />

      {/* Clubs (dark) → Sports (cream) */}
      <SectionDivider type="wave" topColor="#3E3A36" bottomColor="#F5EEEC" height={70} />

      {/* ── Sports — Mosaic Gallery ── */}
      <Sports />

      {/* Sports (cream) → Leadership (dark) */}
      <SectionDivider type="curve" topColor="#F5EEEC" bottomColor="#1A1817" height={70} />

      {/* ── Leadership — Circular Portraits ── */}
      <Leadership />

      {/* Leadership (dark) → Quote (blue) */}
      <SectionDivider type="wave" topColor="#1A1817" bottomColor="#2C3A8C" height={70} />

      {/* ── Quote — Cinematic ── */}
      <Quote />

      {/* Quote (blue) → Footer (dark) */}
      <SectionDivider type="curve" topColor="#2C3A8C" bottomColor="#1A1817" height={70} />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element={<AboutTrident />} />
        <Route path="/libraries" element={<DepartmentLibraries />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}
