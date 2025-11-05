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
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500"></div>
      </div>
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Enterprise-grade <span className="bg-gradient-to-br from-primary-500 to-secondary-500 bg-clip-text text-transparent">Full-Stack Apps</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">
              React JS, Flask & UI/UX — Done Fast
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-6 font-medium">
              Scalable, secure web solutions for growing businesses
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              RuahVerse delivers outstanding web applications backed by solid technical expertise and a deep commitment to quality. 
              We transform your ideas into powerful, scalable solutions that drive real business growth.
            </p>
            <div className="flex justify-center lg:justify-start items-center gap-8 mb-10">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary-100 rounded-full">
                  <FaCode className="text-primary-500 text-xl" />
                </div>
                <span className="text-gray-700 font-medium">Clean Code</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-secondary-100 rounded-full">
                  <FaRocket className="text-secondary-500 text-xl" />
                </div>
                <span className="text-gray-700 font-medium">Fast Delivery</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                className="btn-primary hover:transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-4 shadow-xl hover:shadow-2xl"
                onClick={scrollToContact}
              >
                Get a Free Quote →
              </button>
              <button 
                className="btn-secondary hover:transform hover:-translate-y-1 transition-all duration-300 text-lg"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Portfolio
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="bg-gray-900 rounded-lg shadow-2xl p-1 max-w-md w-full animate-float transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gray-800 rounded-t-lg px-4 py-3 flex items-center justify-between">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <span className="text-gray-400 text-sm font-mono">ruah-verse-app.js</span>
              </div>
              <div className="bg-gray-900 rounded-b-lg p-4 font-mono text-sm leading-6">
                <div className="text-gray-300">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-400">RuahVerse</span>{' '}
                  <span className="text-gray-300">=</span>{' '}
                  <span className="text-yellow-400">() =&gt; {'{'}</span>
                </div>
                <div className="text-gray-300 ml-4">
                  <span className="text-purple-400">return</span>{' '}
                  <span className="text-yellow-400">(</span>
                </div>
                <div className="text-gray-300 ml-8">
                  <span className="text-gray-400">&lt;</span>
                  <span className="text-red-400">div</span>{' '}
                  <span className="text-green-400">className</span>
                  <span className="text-gray-400">=</span>
                  <span className="text-orange-400">"success"</span>
                  <span className="text-gray-400">&gt;</span>
                </div>
                <div className="text-gray-300 ml-12">
                  <span className="text-gray-400">&lt;</span>
                  <span className="text-red-400">h1</span>
                  <span className="text-gray-400">&gt;</span>
                  Your Vision, Our Code
                  <span className="text-gray-400">&lt;/</span>
                  <span className="text-red-400">h1</span>
                  <span className="text-gray-400">&gt;</span>
                </div>
                <div className="text-gray-300 ml-8">
                  <span className="text-gray-400">&lt;/</span>
                  <span className="text-red-400">div</span>
                  <span className="text-gray-400">&gt;</span>
                </div>
                <div className="text-gray-300 ml-4">
                  <span className="text-yellow-400">)</span>
                </div>
                <div className="text-yellow-400">{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero