import React, { useEffect } from 'react';
import { FaShieldAlt, FaRocket, FaHandshake, FaMicrochip } from 'react-icons/fa';

const AboutPage = () => {
    useEffect(() => {
        document.title = "About RuahVerse | Engineering Philosophy & Technical Excellence";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute("content", "Learn about the Engineering Philosophy and architectural integrity behind RuahVerse. We bridge the gap between complex requirements and high-performance software.");
        window.scrollTo(0, 0);
    }, []);
    return (
        <main className="pt-24 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-slate-50 py-20 border-b border-slate-100">
                <div className="container-custom">
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">
                        Engineering the Next Generation of <span className="text-gradient">Digital Success</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl font-medium leading-relaxed">
                        RuahVerse is a specialized technology studio committed to building high-concurrency systems and scalable software architectures for global enterprises.
                    </p>
                </div>
            </section>

            {/* Company Identity */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-black text-slate-900">Company Identity</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Founded on the principles of technical precision and architectural integrity, RuahVerse has evolved into a powerhouse for custom software engineering. We operate at the intersection of complex business logic and elegant user experiences, ensuring that every piece of code serves a measurable objective.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Our team is composed of senior architects and developers who specialize in modern full-stack ecosystems, cloud-native deployments, and AI integration. We don't just "build websites"—we architect long-term digital infrastructure.
                            </p>
                        </div>
                        <div className="bg-white p-12 rounded-[3rem] text-slate-900 border border-slate-100 space-y-8 shadow-xl relative overflow-hidden">
                            <h2 className="text-3xl font-black relative z-10">Our Vision & Mission</h2>
                            <div className="space-y-6 relative z-10">
                                <div>
                                    <h3 className="text-xl font-bold text-violet-600 mb-2">Vision</h3>
                                    <p className="text-slate-600">To be the global benchmark for technical excellence in custom software engineering, enabling businesses to scale without limits.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-violet-600 mb-2">Mission</h3>
                                    <p className="text-slate-600">To provide enterprise-grade digital solutions that transform operational complexities into seamless, high-performance competitive advantages.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Engineering Philosophy */}
            <section className="section-padding bg-slate-900 text-white">
                <div className="container-custom">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black">Engineering Philosophy</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Absolute precision at every layer of the stack.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FaShieldAlt className="text-emerald-400" />,
                                title: "Security by Design",
                                desc: "We implement zero-trust security protocols from the first line of code, ensuring data integrity across every transaction."
                            },
                            {
                                icon: <FaRocket className="text-blue-400" />,
                                title: "Performance First",
                                desc: "Sub-second response times and optimized resource allocation are non-negotiable standards for our engineering lead."
                            },
                            {
                                icon: <FaMicrochip className="text-violet-400" />,
                                title: "Scalable Abstraction",
                                desc: "Our architectures are built to grow. We use modular design patterns that allow for rapid feature expansion as your business evolves."
                            }
                        ].map((phil, idx) => (
                            <div key={idx} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-6 hover:bg-white/10 transition-all">
                                <div className="text-4xl">{phil.icon}</div>
                                <h3 className="text-2xl font-bold">{phil.title}</h3>
                                <p className="text-slate-400 leading-relaxed font-medium">{phil.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
};

export default AboutPage;
