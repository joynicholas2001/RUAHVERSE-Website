import React from 'react';
import { FaLightbulb, FaHandshake, FaAward, FaCogs } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section-padding bg-slate-50/50 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 md:mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            Crafting the Future of <br />
            <span className="text-gradient">Digital Success</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            We are a team of passionate developers, designers, and strategists united by a single mission: to build the web of tomorrow. We combine technical excellence with creative innovation to deliver software that stands the test of time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center mb-16 md:mb-20">
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="text-3xl font-extrabold text-slate-900 border-l-4 border-violet-600 pl-6">
                Who We Are
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Ruah Verse helps businesses grow online with modern, professional websites and custom online systems. We take your idea and turn it into a digital solution that looks great, works fast, and attracts customers.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our team brings together years of experience in modern web technologies,
                delivering scalable, secure, and user-centric applications that exceed
                client expectations. We don't just write code – we craft solutions that
                solve real-world problems.
              </p>
            </div>

            <div className="p-6 md:p-8 glass-panel-dark text-white space-y-4 shadow-2xl rounded-3xl">
              <h3 className="text-2xl font-bold border-b border-white/10 pb-4">Our Mission</h3>
              <p className="text-blue-100/80 leading-relaxed">
                To support growing businesses with reliable digital solutions that are easy to use and ready to scale. We aim to be long-term partners, helping you evolve your online presence as your business grows.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center lg:text-left">
              Why Choose Ruah Verse?
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaLightbulb />,
                  title: "Innovation First",
                  desc: "We stay ahead of technology trends, implementing the latest tools and frameworks.",
                  color: "bg-violet-600/10 text-violet-600"
                },
                {
                  icon: <FaHandshake />,
                  title: "Client Partnership",
                  desc: "Your success is our success. We work closely with you throughout the entire process.",
                  color: "bg-blue-600/10 text-blue-600"
                },
                {
                  icon: <FaAward />,
                  title: "Quality Assurance",
                  desc: "Every line of code is thoroughly tested and optimized for performance and security.",
                  color: "bg-emerald-600/10 text-emerald-600"
                },
                {
                  icon: <FaCogs />,
                  title: "Full-Stack Expertise",
                  desc: "From frontend interfaces to backend architecture, we handle every aspect.",
                  color: "bg-orange-600/10 text-orange-600"
                }
              ].map((item, idx) => (
                <div key={idx} className="glass-card p-6 md:p-8 rounded-3xl space-y-4 hover:bg-white hover:shadow-xl group">
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
