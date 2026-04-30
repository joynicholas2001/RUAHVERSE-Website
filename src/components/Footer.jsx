import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaArrowUp,
  FaArrowRight
} from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetStarted = (e) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      scrollToSection(e, 'contact');
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-16 md:pt-24 pb-8 md:pb-12 relative overflow-hidden">
      {/* Structural Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12 md:mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-1 space-y-8">
            <h3 className="text-3xl font-black tracking-tighter">
              RUAH<span className="text-blue-500">VERSE</span>
            </h3>
            <p className="text-slate-400 font-medium leading-relaxed">
              Engineering high-performance digital ecosystems for the next decade of business growth.
            </p>
            <div className="flex gap-4">
              {/* Placeholder for social if needed later */}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-500">Navigation</h4>
            <ul className="space-y-4">
              {['About', 'Services', 'Projects', 'Contact'].map((item) => {
                const isPageLink = ['About', 'Services', 'Projects'].includes(item);
                return (
                  <li key={item}>
                    {isPageLink ? (
                      <Link
                        to={`/${item.toLowerCase()}`}
                        onClick={() => window.scrollTo(0, 0)}
                        className="group flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-bold text-sm"
                      >
                        <FaArrowRight className="text-[10px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
                        {item}
                      </Link>
                    ) : (
                      <button
                        onClick={(e) => handleGetStarted(e)}
                        className="group flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-bold text-sm text-left"
                      >
                        <FaArrowRight className="text-[10px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
                        {item}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Integration */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-500">Connect</h4>
            <div className="space-y-6">
              <a href="mailto:contactruahverse@gmail.com" className="block space-y-1 group">
                <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Email Address</div>
                <div className="text-slate-200 font-bold group-hover:text-blue-400 transition-colors">contactruahverse@gmail.com</div>
              </a>
              <a href="tel:+919963416422" className="block space-y-1 group">
                <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Direct Line</div>
                <div className="text-slate-200 font-bold group-hover:text-blue-400 transition-colors">+91 9963416422</div>
              </a>
            </div>
          </div>

          {/* CTA Box */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 border border-white/5 rounded-3xl p-8 space-y-6">
              <h4 className="font-black text-lg">Have a project?</h4>
              <p className="text-sm text-slate-400 font-medium">Let's discuss how we can scale your vision.</p>
              <button
                onClick={handleGetStarted}
                className="w-full btn-premium py-4 !text-sm"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest leading-none">
              &copy; {currentYear} RUAH VERSE.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-slate-500 hover:text-white text-[10px] uppercase font-black tracking-widest transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-slate-500 hover:text-white text-[10px] uppercase font-black tracking-widest transition-colors">Terms of Service</Link>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-white/5 border border-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all group"
            aria-label="Back to top"
          >
            <FaArrowUp className="text-blue-500 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
