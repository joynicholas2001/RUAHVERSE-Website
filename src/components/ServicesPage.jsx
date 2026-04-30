import React, { useEffect } from 'react';
import { FaLaptopCode, FaMobileAlt, FaBrain, FaServer, FaCheckCircle, FaProjectDiagram } from 'react-icons/fa';

const ServicesPage = () => {
    useEffect(() => {
        document.title = "Software Services | Web, Mobile & Enterprise Solutions";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute("content", "Explore our technical capabilities in custom web development, cross-platform mobile apps, AI automation, and enterprise software architecture.");
        window.scrollTo(0, 0);
    }, []);
    return (
        <main className="pt-24 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] -z-0"></div>
                <div className="container-custom relative z-10">
                    <p className="text-blue-400 font-bold tracking-widest uppercase mb-4">Enterprise Capabilities</p>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                        High-Stakes Technical <br />
                        <span className="text-gradient">Solutions for Scale</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl font-medium leading-relaxed">
                        We deliver engineered systems that empower modern enterprises. Our services are built on the foundations of performance, security, and absolute reliability.
                    </p>
                </div>
            </section>

            {/* Deep Service Coverage */}
            <section className="section-padding">
                <div className="container-custom space-y-32">

                    {/* Web Development */}
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <div className="w-16 h-16 bg-violet-600/10 rounded-2xl flex items-center justify-center text-3xl text-violet-600">
                                <FaLaptopCode />
                            </div>
                            <h2 className="text-4xl font-black text-slate-900">Custom Web Development</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                We engineer high-performance web applications that serve as the technical backbone for complex business operations. Our approach goes beyond front-end aesthetics; we build robust data-driven ecosystems.
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {["Single-Page Applications (SPA)", "Progressive Web Apps (PWA)", "Complex Dashboard Systems", "E-Commerce Architectures"].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 font-bold text-slate-900">
                                        <FaCheckCircle className="text-emerald-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="glass-panel p-10 bg-slate-50 rounded-[3rem] border-slate-100">
                            <h3 className="text-xl font-bold mb-6 text-slate-900 italic">Technical Focus: Performance</h3>
                            <p className="text-slate-500 mb-8">Utilizing modern stacks like React, Next.js, and Node.js to ensure sub-second page loads and optimized server-side rendering for superior SEO metrics.</p>
                            <div className="flex gap-4">
                                <div className="h-2 flex-1 bg-slate-200 rounded-full overflow-hidden">
                                    <div className="w-[98%] h-full bg-emerald-500"></div>
                                </div>
                                <span className="text-xs font-black text-slate-400">98% PERFORMANCE</span>
                            </div>
                        </div>
                    </div>

                    {/* Mobile App Development */}
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1 glass-panel p-10 bg-slate-50 rounded-[3rem] border-slate-100">
                            <h3 className="text-xl font-bold mb-6 text-slate-900 italic">Technical Focus: Reliability</h3>
                            <p className="text-slate-500">Cross-platform synchronization and offline-first capabilities for mission-critical mobile deployments.</p>
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="p-4 bg-white rounded-2xl shadow-sm text-center">
                                    <div className="text-2xl font-black text-blue-600">iOS</div>
                                    <div className="text-[10px] text-slate-400 font-bold uppercase">Optimized</div>
                                </div>
                                <div className="p-4 bg-white rounded-2xl shadow-sm text-center">
                                    <div className="text-2xl font-black text-blue-600">Android</div>
                                    <div className="text-[10px] text-slate-400 font-bold uppercase">Optimized</div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-8 text-right lg:text-left">
                            <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-3xl text-blue-600 mx-auto lg:ml-0">
                                <FaMobileAlt />
                            </div>
                            <h2 className="text-4xl font-black text-slate-900">Mobile App Development</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                Delivering high-fidelity mobile experiences that bridge the gap between user convenience and enterprise functionality. We specialize in cross-platform development that doesn't compromise on native speed.
                            </p>
                            <div className="flex flex-wrap justify-end lg:justify-start gap-4 font-bold text-slate-900">
                                {["React Native Expertise", "Unified API Integration", "Real-time Push Systems", "Secure Mobile Wallets"].map((item, idx) => (
                                    <span key={idx} className="bg-slate-100 px-4 py-2 rounded-lg text-sm">{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* AI & Automation */}
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <div className="w-16 h-16 bg-emerald-600/10 rounded-2xl flex items-center justify-center text-3xl text-emerald-600">
                                <FaBrain />
                            </div>
                            <h2 className="text-4xl font-black text-slate-900">Next-Gen AI & Automation</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                Harnessing the power of generative AI and machine learning to automate complex workflows and drive data-backed decision making across your organization.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "Custom LLM Integration", desc: "Fine-tuning models for industry-specific knowledge retrieval." },
                                    { title: "Predictive Analytics", desc: "Forecasting market trends and operational requirements." },
                                    { title: "Autonomous Agents", desc: "AI-driven systems that handle recursive operational tasks." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 group">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold text-xs group-hover:bg-emerald-500 group-hover:text-white transition-colors">{idx + 1}</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                                            <p className="text-sm text-slate-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-slate-900 p-12 rounded-[3rem] text-white shadow-2xl">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                <h3 className="text-xl font-bold uppercase tracking-widest text-emerald-400">Intelligent Workflows</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10 font-mono text-xs text-slate-400">
                                    PROCESS INPUT: 2.5TB / DAY
                                </div>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10 font-mono text-xs text-emerald-400">
                                    ANALYTICS ENGINE: ACTIVATED
                                </div>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10 font-mono text-xs text-slate-400">
                                    EFFICIENCY GAIN: +42% ESTIMATED
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enterprise Software Architecture */}
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="glass-panel p-10 bg-slate-900 rounded-[3rem] text-white flex flex-col justify-center min-h-[400px]">
                            <FaServer className="text-6xl text-blue-500 mb-8 mx-auto" />
                            <h3 className="text-2xl font-black text-center mb-4">Core Infrastructure</h3>
                            <p className="text-slate-400 text-center max-w-sm mx-auto">Scalable cloud-native architectures designed for 99.9% uptime and high-concurrency workloads.</p>
                        </div>
                        <div className="space-y-8">
                            <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-3xl text-blue-600">
                                <FaProjectDiagram />
                            </div>
                            <h2 className="text-4xl font-black text-slate-900">Enterprise Software Architecture</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                We design and implement the foundation of your digital business. From CRM and ERP systems to complex middleware, our architectures are built for resilience and long-term sustainability.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">Microservices</h4>
                                    <p className="text-sm text-slate-500">Decoupled systems for modular scaling and independent deployment.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">Resilient API</h4>
                                    <p className="text-sm text-slate-500">Secure, documented, and high-performance communication layers.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default ServicesPage;
