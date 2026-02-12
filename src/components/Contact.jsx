import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white text-slate-900 relative overflow-hidden">
      {/* Dynamic background element */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-600/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-6">
              <p className="text-primary-600 font-black tracking-widest text-sm uppercase">Get In Touch</p>
              <h2 className="text-4xl md:text-6xl font-black leading-tight text-slate-900">
                Let's Architect <br />
                <span className="text-gradient">Your Future</span>
              </h2>
              <p className="text-slate-600 text-xl font-medium max-w-lg leading-relaxed">
                Whether you have a fully formed brief or just the kernel of an idea, let's start a conversation that transforms your business.
              </p>
            </div>

            <div className="grid gap-6 md:gap-8">
              {[
                { icon: <FaEnvelope />, title: "Email Inquiry", detail: "contactruahverse@gmail.com", sub: "Response within 24 business hours" },
                { icon: <FaPhone />, title: "Voice Call", detail: "+91 9963416422", sub: "Available Mon-Fri, 9am - 6pm" },
                { icon: <FaMapMarkerAlt />, title: "Our Base", detail: "Remote First", sub: "Global operation, local impact" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-primary-600 text-xl group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-slate-900 font-bold tracking-tight">{item.title}</h3>
                    <p className="text-lg font-black text-slate-800">{item.detail}</p>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-black">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-50 p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] border border-slate-100 shadow-2xl relative z-10 space-y-6 md:space-y-8">
              <div className="space-y-4 text-center">
                <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(16,185,129,0.1)]">
                  <FaWhatsapp className="text-emerald-500 text-5xl animate-pulse" />
                </div>
                <h3 className="text-3xl font-black italic text-slate-900">Rapid Response</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  For immediate project discussions and instant quotes, connect directly with our engineering lead on WhatsApp.
                </p>
              </div>

              <a
                href="https://wa.me/919963416422?text=Hi%20Ruah%20Verse!%20I'm%20interested%20in%20discussing%20a%20web%20development%20project."
                className="btn-premium w-full py-6 text-xl group text-center flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Message
                <FaArrowRight className="ml-3 transition-transform group-hover:translate-x-2" />
              </a>

              <p className="text-[10px] text-center text-slate-400 uppercase tracking-[0.2em] font-black">
                End-to-End Encryption Enabled
              </p>
            </div>

            {/* Backdrop Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-600/5 blur-[100px] -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
