import React from 'react';
import {
  FaPython,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaServer,
  FaCode,
  FaLock,
  FaRocket
} from 'react-icons/fa'
import {
  SiMongodb,
  SiPostgresql,
  SiDjango,
  SiExpress,
  SiVite,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript
} from 'react-icons/si'

const Technologies = () => {
  const techCategories = [
    {
      title: "Frontend Stack",
      technologies: [
        { name: "React / Next.js", icon: <SiNextdotjs />, color: "text-slate-900" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-500" },
        { name: "Framer Motion", icon: <FaRocket />, color: "text-violet-600" }
      ]
    },
    {
      title: "Backend Core",
      technologies: [
        { name: "Node.js", icon: <FaNodeJs />, color: "text-emerald-600" },
        { name: "Python / Django", icon: <SiDjango />, color: "text-emerald-800" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-500" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" }
      ]
    },
    {
      title: "Engineering Tools",
      technologies: [
        { name: "Git / GitHub", icon: <FaGitAlt />, color: "text-orange-600" },
        { name: "Docker", icon: <FaServer />, color: "text-blue-400" },
        { name: "Vite", icon: <SiVite />, color: "text-amber-500" },
        { name: "REST / GraphQL", icon: <FaDatabase />, color: "text-pink-600" }
      ]
    }
  ]

  return (
    <section id="technologies" className="section-padding bg-slate-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 md:mb-24 space-y-4 md:space-y-6">
          <p className="text-blue-400 font-black tracking-widest text-sm uppercase">The Tech Stack</p>
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Built with the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Next-Generation</span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto font-medium text-lg leading-relaxed">
            We don't rely on outdated tools. Our engineering team leverages a cutting-edge stack power-packed with performance, security, and scalability. Every line of code is written with the future in mind, ensuring your platform remains robust for years to come.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {techCategories.map((category, idx) => (
            <div key={idx} className="space-y-6 md:space-y-8 p-6 md:p-10 glass-dark rounded-[2rem] md:rounded-[2.5rem] !border-white/5 hover:!border-white/10 transition-all">
              <h3 className="text-xl font-black tracking-tight text-white/90 underline decoration-blue-500 decoration-4 underline-offset-8">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {category.technologies.map((tech, tIdx) => (
                  <div key={tIdx} className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-default overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <div className={`text-3xl ${tech.color} group-hover:scale-110 transition-transform`}>
                      {tech.icon}
                    </div>
                    <span className="font-bold text-slate-300 group-hover:text-white transition-colors">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Badges */}
        <div className="mt-16 md:mt-32 grid md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: <FaCode />, title: "Clean Code", desc: "Strict adherence to SOLID principles and 2026 architectural standards." },
            { icon: <FaLock />, title: "Secure Default", desc: "Industrial-grade security protocols implemented from line one." },
            { icon: <FaRocket />, title: "High Velocity", desc: "Optimized delivery pipelines for rapid iterations and deployments." }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4 p-8">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400 text-2xl shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
