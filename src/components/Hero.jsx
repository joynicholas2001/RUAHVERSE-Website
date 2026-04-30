import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCode, FaRocket, FaChevronRight } from 'react-icons/fa';
import logo from '../assests/RUAH-VERSE-LOGO_PNG.png';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToProjects = () => {
    navigate('/projects');
  };

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-24 pb-16 overflow-hidden mesh-gradient">
      {/* Dynamic Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600/5 border border-violet-600/10 text-violet-600 font-bold text-sm tracking-wide animate-reveal">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              AVAILABLE FOR NEW PROJECTS
            </div>

            <h1 className="title-hero animate-reveal" style={{ animationDelay: '0.1s' }}>
              Your Vision,<br />
              <span className="text-gradient">Our Code</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium animate-reveal" style={{ animationDelay: '0.2s' }}>
              We build high-performance web solutions that help startups and businesses scale faster with modern technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start animate-reveal" style={{ animationDelay: '0.3s' }}>
              <button
                className="btn-premium px-10 py-5 text-lg group"
                onClick={scrollToContact}
              >
                Get a Free Quote
                <FaChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                className="btn-outline-premium px-10 py-5 text-lg"
                onClick={goToProjects}
              >
                Our Portfolio
              </button>
            </div>

            {/* Trust Metrics */}
            <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-8 animate-reveal" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-600/10 flex items-center justify-center">
                  <FaCode className="text-violet-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 leading-none">Clean & Scalable</div>
                  <div className="text-sm text-slate-500">2026 Standards</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center">
                  <FaRocket className="text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 leading-none">Ultra-Fast</div>
                  <div className="text-sm text-slate-500">Next-Gen Performance</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Piece: Modern Code Window */}
          <div className="relative animate-reveal" style={{ animationDelay: '0.5s' }}>
            <div className="relative z-20 bg-[#0f172a] rounded-[2rem] overflow-hidden shadow-[0_48px_96px_-16px_rgba(0,0,0,0.6)] transform hover:scale-[1.03] transition-all duration-700 animate-float-slow border border-white/5">
              {/* Terminal Header */}
              <div className="bg-[#1e293b]/50 px-8 py-5 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-[0_0_12px_rgba(255,95,86,0.2)]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-[0_0_12px_rgba(255,189,46,0.2)]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-[0_0_12px_rgba(39,201,63,0.2)]"></div>
                </div>
                <div className="text-xs font-mono text-slate-400 tracking-wider">
                  ruah-verse-app.js
                </div>
              </div>

              {/* Code Content */}
              <div
                className="p-10 font-mono text-sm sm:text-base leading-relaxed bg-[#0f172a] h-[320px] flex flex-col justify-center"
                style={{
                  color: '#ffffff',
                  fontVariantLigatures: 'none',
                  WebkitFontSmoothing: 'antialiased'
                }}
              >
                {/* Line 1 */}
                <div className="mb-2">
                  <span style={{ color: '#c678dd' }}>const</span> RuahVerse = ( ) ={">"} {"{"}
                </div>

                {/* Line 2 */}
                <div className="pl-6 mb-2">
                  <span style={{ color: '#c678dd' }}>return</span> (
                </div>

                {/* Line 3 */}
                <div className="pl-12 mb-2">
                  <span style={{ color: '#e06c75' }}>&lt;div</span> className=<span style={{ color: '#d19a66' }}>"success"</span><span style={{ color: '#e06c75' }}>&gt;</span>
                </div>

                {/* Line 4 */}
                <div className="pl-24 mb-2">
                  <span style={{ color: '#e06c75' }}>&lt;h1&gt;</span>Your Vision, Our Code<span style={{ color: '#e06c75' }}>&lt;/h1&gt;</span>
                </div>

                {/* Line 5 */}
                <div className="pl-12 mb-2">
                  <span style={{ color: '#e06c75' }}>&lt;/div&gt;</span>
                </div>

                {/* Line 6 */}
                <div className="pl-6 mb-2">
                  )
                </div>

                {/* Line 7 */}
                <div>{"}"}</div>
              </div>

              {/* Glowing decorative gradient inside window */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-600/10 blur-[100px] -z-10 pointer-events-none"></div>
            </div>

            {/* Backdrop Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-violet-600/10 blur-[120px] -z-10 animate-pulse-slow"></div>
          </div>
        </div>
      </div>

      {/* Visual divider/Curve */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
