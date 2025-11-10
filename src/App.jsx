import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import './App.css';

function App() {
  const [legalContent, setLegalContent] = useState(null);

  const showLegal = (type) => {
    if (type === 'terms') {
      setLegalContent({
        title: 'Terms of Service',
        content: <TermsOfService />,
      });
    } else if (type === 'privacy') {
      setLegalContent({
        title: 'Privacy Policy',
        content: <PrivacyPolicy />,
      });
    }
  };

  const closeLegal = () => {
    setLegalContent(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Technologies />
        <Contact />
      </main>
      <Footer onShowLegal={showLegal} />
      <LegalModal
        title={legalContent?.title}
        content={legalContent?.content}
        onClose={closeLegal}
      />
    </div>
  );
}

export default App;
