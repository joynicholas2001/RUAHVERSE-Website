import React from 'react';
import { FaLaptopCode, FaMobile, FaDatabase, FaCloud, FaCog, FaCheck, FaArrowRight, FaShieldAlt, FaBolt } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Enterprise Software Architecture",
      description: "We engineer robust, scalable software systems designed for complex business logic and high-concurrency environments.",
      features: ["Custom CRM/ERP Systems", "Scalable Infrastructure", "Secure API Architectures", "Cloud Integration"],
      color: "from-violet-600 to-indigo-600"
    },
    {
      icon: <FaMobile />,
      title: "Modern E-Commerce",
      description: "Conversion-optimized online stores with seamless payment flows and intuitive product management.",
      features: ["Unified Checkout", "Inventory Sync", "Secure Payments", "Mobile-First UX"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: <FaCloud />,
      title: "Next-Gen AI & Automation",
      description: "Intelligent automation and AI-driven solutions that optimize workflows and drive data-backed decision making.",
      features: ["AI Model Integration", "Predictive Analytics", "Process Automation", "Custom AI Agents"],
      color: "from-emerald-600 to-teal-600"
    }
  ];


  return (
    <section id="services" className="section-padding bg-white relative">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl space-y-4 text-center lg:text-left">
            <p className="text-violet-600 font-bold tracking-widest text-sm uppercase">Our Expertise</p>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              Scalable Solutions for the <br />
              <span className="text-gradient">Modern Enterprise</span>
            </h2>
          </div>
          <p className="text-lg text-slate-500 max-w-lg text-center lg:text-left font-medium leading-relaxed">
            RuahVerse is a specialized digital studio focused on engineering enterprise-grade systems. We move beyond simple templates to build custom, scalable architectures that handle your complex business logic with ease.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 md:mb-32">
          {services.map((service, idx) => (
            <div key={idx} className="group relative glass-card p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-slate-50 border-slate-100 hover:border-violet-200 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-2xl">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-3xl shadow-lg mb-8 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-500 mb-8 leading-relaxed font-medium">
                {service.description}
              </p>
              <ul className="space-y-4 mb-10">
                {service.features.map((item, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                    <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px] text-slate-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                      <FaCheck />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 font-bold text-violet-600 group/btn mt-auto"
              >
                Inquire Project <FaArrowRight className="text-xs transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          ))}
        </div>


        {/* Development Process */}
        <div className="mt-16 md:mt-32">
          <div className="text-center mb-16 px-4">
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Execution Strategy</h3>
            <p className="text-slate-500 font-medium">A systematic approach to turning your vision into a market-ready product.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 md:gap-8">
            {[
              { num: "01", title: "Discovery", desc: "Deep analysis of your objectives and technical roadmap preparation." },
              { num: "02", title: "Architecture", desc: "Designing high-fidelity prototypes and scalable data structures." },
              { num: "03", title: "Construction", desc: "Agile development sprints with continuous CI/CD integration." },
              { num: "04", title: "Deployment", desc: "Cloud orchestration and white-glove support post-launch." }
            ].map((step, idx) => (
              <div key={idx} className="relative p-8 group">
                {idx < 3 && <div className="hidden md:block absolute top-12 left-full w-full h-[2px] bg-slate-100 -z-10 group-hover:bg-violet-200 transition-colors"></div>}
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-sm font-black text-slate-400 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 mb-6">
                  {step.num}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;