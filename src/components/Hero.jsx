import React from 'react'
import { FaCode, FaRocket, FaUsers } from 'react-icons/fa'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Welcome to <span className="highlight">Ruah Verse</span>
            </h1>
            <h2 className="hero-subtitle">
              Full-Stack Web Development Excellence
            </h2>
            <p className="hero-description">
              RuahVerse was founded with strong dedication and a clear mission — to deliver outstanding websites backed by solid technical expertise and a deep commitment to quality. 
    We believe in building long-term relationships with our clients by offering custom full-stack solutions that truly meet their business needs.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <FaCode className="stat-icon" />
              </div>
              <div className="stat">
                <FaRocket className="stat-icon" />
              </div>
            </div>
            <div className="hero-cta">
              <button className="btn-primary" onClick={scrollToContact}>
                Start Your Project Today
              </button>
              <button className="btn-secondary" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                Learn More About Us
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-window">
              <div className="code-header">
                <div className="code-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="code-title">ruah-verse-app.js</span>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="code-keyword">const</span> <span className="code-variable">RuahVerse</span> = () =&gt; {'{'}
                </div>
                <div className="code-line">
                  <span className="code-indent">  </span><span className="code-keyword">return</span> (
                </div>
                <div className="code-line">
                  <span className="code-indent">    </span>&lt;<span className="code-tag">div</span> <span className="code-attr">className</span>=<span className="code-string">"success"</span>&gt;
                </div>
                <div className="code-line">
                  <span className="code-indent">      </span>&lt;<span className="code-tag">h1</span>&gt;Your Vision, Our Code&lt;/<span className="code-tag">h1</span>&gt;
                </div>
                <div className="code-line">
                  <span className="code-indent">    </span>&lt;/<span className="code-tag">div</span>&gt;
                </div>
                <div className="code-line">
                  <span className="code-indent">  </span>)
                </div>
                <div className="code-line">{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero