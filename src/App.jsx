import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/common/Header';
import SubNav from './components/common/SubNav';
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

import SectionDivider, { SkewedMarquee } from './components/common/SectionDivider';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';

import AboutTrident from './pages/AboutTrident';
import DepartmentLibraries from './pages/DepartmentLibraries';
import Scholarships from './pages/Scholarships';
import ICTClassrooms from './pages/ICTClassrooms';
import ExtraCurricular from './pages/ExtraCurricular';
import CampusSecurity from './pages/CampusSecurity';
import InnovationLab from './pages/InnovationLab';
import SportsGames from './pages/SportsGames';
import IEDC from './pages/IEDC';
import IncubationCell from './pages/IncubationCell';
import Hostels from './pages/Hostels';
import FoodCenters from './pages/FoodCenters';
import Healthcare from './pages/Healthcare';
import ModernLabs from './pages/ModernLabs';
import CampusWiFi from './pages/CampusWiFi';
import SafeTransport from './pages/SafeTransport';
import TechFest from './pages/TechFest';
import CulturalEvening from './pages/CulturalEvening';
import FreshersParty from './pages/FreshersParty';

import ChoreographyClub from './pages/ChoreographyClub';
import SocialServiceClub from './pages/SocialServiceClub';
import CodingClub from './pages/CodingClub';
import CommunicationClub from './pages/CommunicationClub';
import MusicClub from './pages/MusicClub';
import Gymnasium from './pages/Gymnasium';
import Basketball from './pages/Basketball';
import Football from './pages/Football';
import Volleyball from './pages/Volleyball';
import Badminton from './pages/Badminton';
import TableTennis from './pages/TableTennis';
import ComingSoon from './pages/ComingSoon';

// Pages copied from academics-trident (header/footer links)
import AICTEDisclosurePage from './pages/AICTEDisclosurePage';
import BPUTAffiliationPage from './pages/BPUTAffiliationPage';
import NAACPage from './pages/NAACPage';
import NBAPage from './pages/NBAPage';
import FinancialAuditsPage from './pages/FinancialAuditsPage';
import AntiRaggingPage from './pages/AntiRaggingPage';
import IQACPage from './pages/IQACPage';
import TestimonialsPage from './pages/TestimonialsPage';
import StudentClubsPage from './pages/StudentClubsPage';
import CiscoThingQbatorPage from './pages/CiscoThingQbatorPage';
import GrievancePage from './pages/GrievancePage';
import ICCPage from './pages/ICCPage';
import NIRFPage from './pages/NIRFPage';
import SIROPage from './pages/SIROPage';
import CareerPage from './pages/CareerPage';
import InformationBrochurePage from './pages/InformationBrochurePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import DisclaimerPage from './pages/DisclaimerPage';
import TermsOfUsePage from './pages/TermsOfUsePage';



function MainContent() {
  return (
    <main>
      {/* ── Hero (dark bg with campus images) ── */}
      <CampusHero />

      {/* Hero (dark) → News (light beige) */}
      <SectionDivider type="gradient" topColor="#1A1817" bottomColor="#EFE7DF" accentColor="#E8BD63" accentHeight={6} height={80} />

      {/* ── News — Magazine Spread ── */}
      <News />

      {/* News (light beige) → Research (off-white) */}
      <SectionDivider type="curve" topColor="#EFE7DF" bottomColor="#F9F7F5" height={70} />

      {/* ── Research — Split Screen ── */}
      <CampusResearch />

      {/* Research (off-white) → Activities (light beige) */}
      <SectionDivider type="wave" topColor="#F9F7F5" bottomColor="#EFE7DF" height={70} />

      {/* ── Activities — Accordion ── */}
      <Activities />

      {/* Activities (light beige) → Facilities (off-white) */}
      <SectionDivider type="curve" topColor="#EFE7DF" bottomColor="#F9F7F5" height={60} />

      {/* ── Facilities — Tabs ── */}
      <CampusFacilities />

      {/* Facilities (off-white) → Impact (light beige) */}
      <SectionDivider type="tilt" topColor="#F9F7F5" bottomColor="#EFE7DF" height={70} />

      {/* ── Impact — Counter Dashboard ── */}
      <Impact />

      {/* Skewed marquee band — organic visual break */}
      <SkewedMarquee 
        items={["Vibrant Campus", "24/7 Innovation", "100+ Clubs", "State-of-the-Art Sports", "Diverse Community", "Green Environment", "Modern Hostels", "Endless Opportunities"]}
        bgColor="#1A1817"
        speed={40}
      />

      {/* Impact (light beige) → Events (off-white) */}
      <SectionDivider type="wave" topColor="#EFE7DF" bottomColor="#F9F7F5" height={70} />

      {/* ── Events — Horizontal Cards ── */}
      <Events />

      {/* Events (off-white) → Clubs (light beige) */}
      <SectionDivider type="curve" topColor="#F9F7F5" bottomColor="#EFE7DF" height={70} />

      {/* ── Clubs — Film-strip Carousel ── */}
      <Clubs />

      {/* Clubs (light beige) → Sports (off-white) */}
      <SectionDivider type="torn" topColor="#EFE7DF" bottomColor="#F9F7F5" height={50} />

      {/* ── Sports — Mosaic Gallery ── */}
      <Sports />

      {/* Sports (off-white) → Leadership (dark) */}
      <SectionDivider type="curve" topColor="#F9F7F5" bottomColor="#1A1817" height={70} />

      {/* ── Leadership — Circular Portraits ── */}
      <Leadership />

      {/* Leadership (light beige) → Quote (off-white) */}
      <SectionDivider type="wave" topColor="#EFE7DF" bottomColor="#F9F7F5" height={70} />

      {/* ── Quote — Cinematic ── */}
      <Quote />

      {/* Quote (off-white) → Footer (dark) */}
      <SectionDivider type="curve" topColor="#F9F7F5" bottomColor="#1A1817" height={70} />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <SubNav />
      
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element={<AboutTrident />} />
        <Route path="/library" element={<DepartmentLibraries />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/ict-classrooms" element={<ICTClassrooms />} />
        <Route path="/extra-curricular" element={<ExtraCurricular />} />
        <Route path="/security" element={<CampusSecurity />} />
        <Route path="/innovation-lab" element={<InnovationLab />} />
        <Route path="/sports-games" element={<SportsGames />} />
        <Route path="/iedc" element={<IEDC />} />
        <Route path="/incubation-cell" element={<IncubationCell />} />
        <Route path="/hostels" element={<Hostels />} />
        <Route path="/cafeteria" element={<FoodCenters />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/modern-labs" element={<ModernLabs />} />
        <Route path="/campus-wifi" element={<CampusWiFi />} />
        <Route path="/safe-transport" element={<SafeTransport />} />
        <Route path="/techfest" element={<TechFest />} />
        <Route path="/cultural-evening" element={<CulturalEvening />} />
        <Route path="/freshers-party" element={<FreshersParty />} />

        {/* Club Pages */}
        <Route path="/choreography-club" element={<ChoreographyClub />} />
        <Route path="/social-service-club" element={<SocialServiceClub />} />
        <Route path="/coding-club" element={<CodingClub />} />
        <Route path="/communication-club" element={<CommunicationClub />} />
        <Route path="/music-club" element={<MusicClub />} />

        {/* Sports Pages */}
        <Route path="/gymnasium" element={<Gymnasium />} />
        <Route path="/basketball" element={<Basketball />} />
        <Route path="/football" element={<Football />} />
        <Route path="/volleyball" element={<Volleyball />} />
        <Route path="/badminton" element={<Badminton />} />
        <Route path="/table-tennis" element={<TableTennis />} />

        {/* Header & Footer linked pages (from academics-trident) */}
        <Route path="/aicte-disclosure" element={<AICTEDisclosurePage />} />
        <Route path="/bput-affiliation" element={<BPUTAffiliationPage />} />
        <Route path="/naac" element={<NAACPage />} />
        <Route path="/nba" element={<NBAPage />} />
        <Route path="/financial-audits" element={<FinancialAuditsPage />} />
        <Route path="/anti-ragging" element={<AntiRaggingPage />} />
        <Route path="/iqac" element={<IQACPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/student-clubs" element={<StudentClubsPage />} />
        <Route path="/cisco-thingqbator" element={<CiscoThingQbatorPage />} />
        <Route path="/grievance" element={<GrievancePage />} />
        <Route path="/icc" element={<ICCPage />} />
        <Route path="/nirf" element={<NIRFPage />} />
        <Route path="/siro" element={<SIROPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/information-brochure" element={<InformationBrochurePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/terms-of-use" element={<TermsOfUsePage />} />

        {/* Catch-all for undefined routes */}
        <Route path="*" element={<ComingSoon />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}
