import React, { useEffect } from 'react';
import { FaExternalLinkAlt, FaCheck } from 'react-icons/fa';

const ProjectsPage = () => {
    useEffect(() => {
        document.title = "Case Studies | High-Impact Software Engineering Projects";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute("content", "Discover how RuahVerse delivers measurable business value through high-concurrency systems, digital portals, and scalable digital infrastructure.");
        window.scrollTo(0, 0);
    }, []);

    const projects = [
        {
            title: "Architectural Website",
            tech: "REACT JS",
            description: "Zionic ARC delivers innovative Commercial Architecture, Residential Architecture, Interior Design, and Institutional Architecture solutions—designed with precision, functionality, and modern aesthetics.",
            features: ["Advanced Transitions", "Performance Optimization", "Responsive Grid", "SEO Engine"],
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
            link: "https://zionicarc.com"
        },
        {
            title: "Health Care Website",
            tech: "REACT JS / Python / POSTGRESQL",
            description: "New Balan Medical delivers innovative online medicine booking, doctor availability tracking, clinic management, and healthcare service solutions—designed with efficiency, accessibility, reliability, and modern patient-centered experience.",
            features: ["Online Medicine Booking", "Doctor Availability Tracking", "Clinic Management", "Mobile Responsive"],
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
            link: "https://newbalanpharmacy.com"
        }
    ];

    return (
        <main className="pt-24 min-h-screen bg-slate-50">
            {/* Page Hero */}
            <section className="py-20">
                <div className="container-custom">
                    <p className="text-primary-600 font-bold tracking-widest uppercase mb-4">Evidence of Excellence</p>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">
                        Impact-Driven <br />
                        <span className="text-gradient">Case Studies</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl font-medium leading-relaxed">
                        We don't just deliver code—we deliver business value. Explore how RuahVerse transforms operational challenges into high-performance technical advantages.
                    </p>
                </div>
            </section>

            {/* Projects List */}
            <section className="pb-32">
                <div className="container-custom space-y-12 max-w-7xl mx-auto">
                    {projects.map((project, idx) => (
                        <div key={idx} className="bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 flex flex-row min-h-[160px] md:min-h-[250px] lg:min-h-[280px]">
                            {/* Left Side: Image */}
                            <div className="w-[35%] lg:w-[45%] relative overflow-hidden group shrink-0">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500"></div>
                                <div className="absolute top-2 sm:top-4 md:top-8 left-2 sm:left-4 md:left-8">
                                    <span className="bg-white/20 backdrop-blur-md text-white text-[8px] md:text-[10px] font-black uppercase tracking-widest px-2 py-1 md:px-6 md:py-3 rounded-full border border-white/30 whitespace-nowrap">
                                        CASE STUDY
                                    </span>
                                </div>
                            </div>

                            {/* Right Side: Content */}
                            <div className="w-[65%] lg:w-[55%] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between relative">
                                <div>
                                    <h2 className="text-sm md:text-4xl lg:text-5xl font-black text-slate-900 mb-1 md:mb-2 line-clamp-2">{project.title}</h2>
                                    <p className="text-slate-400 font-bold text-[8px] md:text-xs tracking-widest uppercase mb-2 md:mb-8">{project.tech}</p>

                                    <p className="text-xs sm:text-sm md:text-lg text-slate-500 leading-relaxed mb-4 md:mb-10 font-medium">
                                        {project.description}
                                    </p>

                                    <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-4 gap-x-4 md:gap-x-8 mb-4 md:mb-12">
                                        {project.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-center gap-2 md:gap-3 text-slate-700 font-bold text-[10px] md:text-sm">
                                                <FaCheck className="text-emerald-500 text-[8px] md:text-xs" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-auto pt-3 md:pt-8 border-t border-slate-100">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 md:gap-2 text-slate-900 font-black uppercase tracking-widest text-[8px] md:text-sm relative group"
                                    >
                                        <span>Explore</span>
                                        <FaExternalLinkAlt className="text-[8px] md:text-xs transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                                    </a>

                                    <div className="hidden sm:flex gap-1 md:gap-2">
                                        <div className="w-6 h-6 md:w-10 md:h-10 bg-slate-100 rounded-full flex items-center justify-center text-[8px] md:text-[10px] font-black text-slate-400">RC</div>
                                        <div className="w-6 h-6 md:w-10 md:h-10 bg-primary-600 rounded-full flex items-center justify-center text-[8px] md:text-[10px] font-black text-white">RV</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
};

export default ProjectsPage;
