import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitsStrip from './components/BenefitsStrip';
import BrandStory from './components/BrandStory';
import WholesalePartnership from './components/WholesalePartnership';
import AppDownload from './components/AppDownload';
import CoverageMap from './components/CoverageMap';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.dir();
  }, [i18n.language, i18n.dir()]);

  return (
    <div className="min-h-screen bg-bz-bg font-sans selection:bg-bz-blue/20 selection:text-bz-ink" dir={i18n.dir()}>
      <CustomCursor />
      <Header />

      <main>
        <HeroSection />
        <BenefitsStrip />
        <BrandStory />
        <WholesalePartnership />
        <AppDownload />
        <CoverageMap />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
