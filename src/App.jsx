import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import ProjectsPage from "./components/ProjectsPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import "./App.css";

const Home = () => {
  useEffect(() => {
    document.title = "RuahVerse | Premium Web Development & Custom AI Solutions";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "RuahVerse is a premium software studio specializing in scalable web development, high-performance mobile apps, and custom AI solutions for modern enterprises.");
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <div id="about"><About /></div>
        <div id="services"><Services /></div>
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="overflow-x-hidden w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<><Header /><AboutPage /><Footer /></>} />
        <Route path="/services" element={<><Header /><ServicesPage /><Footer /></>} />
        <Route path="/projects" element={<><Header /><ProjectsPage /><Footer /></>} />
        <Route
          path="/privacy"
          element={
            <div className="min-h-screen bg-white">
              <Header />
              <PrivacyPolicy />
              <Footer />
            </div>
          }
        />
        <Route
          path="/terms"
          element={
            <div className="min-h-screen bg-white">
              <Header />
              <TermsOfService />
              <Footer />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;