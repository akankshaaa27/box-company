import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Target, Eye, ShieldCheck, Award, Factory, Microscope } from 'lucide-react';

const About = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <>
            <Helmet>
                <title>About Us | Tade Packaging Solutions</title>
                <meta name="description" content="Learn about Tade Packaging's mission, vision, and our commitment to quality in corrugated box manufacturing." />
            </Helmet>

            {/* Header Section */}
            <section className="bg-primary pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6"
                    >
                        Driving Packaging Excellence
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-blue-100 max-w-2xl mx-auto"
                    >
                        For over two decades, we have been more than just a manufacturer—we've been a partner
                        in protecting and presenting your products.
                    </motion.p>
                </div>
            </section>

            {/* Overview */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-secondary pl-6">Company Overview</h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    Established in 1998, Tade Packaging started with a simple goal: to provide high-quality
                                    packaging that industrial clients could rely on. Today, we are one of the most
                                    technologically advanced corrugated box manufacturers in the region.
                                </p>
                                <p>
                                    Our Pune-based facility spans over 50,000 sq. ft. and is equipped with fully
                                    automated corrugation lines, multi-color flexo printers, and high-precision
                                    die-cutting machines. We process over 1,500 tons of Kraft paper monthly, serving
                                    industries ranging from automotive to FMCG.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div {...fadeInUp} className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1530124560676-4ae822479713?q=80&w=1000&auto=format&fit=crop"
                                alt="Our Facility"
                                className="rounded-3xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                                <p className="text-secondary font-black text-4xl">25+</p>
                                <p className="text-gray-500 font-bold uppercase tracking-wider text-xs">Years of Innovation</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24 bg-industrial-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            {...fadeInUp}
                            className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100"
                        >
                            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8">
                                <Target className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                To empower businesses with sustainable, cost-effective, and robust packaging
                                solutions through continuous technological advancement and exceptional
                                engineering standards.
                            </p>
                        </motion.div>

                        <motion.div
                            {...fadeInUp}
                            className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100"
                        >
                            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8">
                                <Eye className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                To be the global benchmark for excellence in the paper-based packaging industry by
                                fostering innovation and ensuring environmental stewardship in every box we create.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Infrastructure & Quality */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="section-title">World-Class Infrastructure</h2>
                        <p className="section-subtitle">Our facility is designed for efficiency, scale, and uncompromising quality.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <Factory className="w-8 h-8" />,
                                title: "In-House Corrugation",
                                desc: "High-speed automatic 3-ply and 5-ply plants for consistent flute formation and sheet strength."
                            },
                            {
                                icon: <Microscope className="w-8 h-8" />,
                                title: "Quality Testing Lab",
                                desc: "Equipped with Bursting Strength Testers, ECT, and moisture meters for real-time QC monitoring."
                            },
                            {
                                icon: <ShieldCheck className="w-8 h-8" />,
                                title: "Warehousing",
                                desc: "Climate-controlled storage area for 500+ tons of finished inventory to ensure rapid dispatch."
                            }
                        ].map((item, i) => (
                            <motion.div key={i} {...fadeInUp} className="text-center group">
                                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-industrial-light text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-8 transform -rotate-12 group-hover:rotate-0">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-24 bg-industrial-dark text-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-xl">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Commitment to Standards</h2>
                            <p className="text-gray-400 text-lg mb-8">
                                We take pride in our certifications which testify to our commitment to
                                operational excellence and environmental responsibility.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="flex items-center space-x-4">
                                    <Award className="w-10 h-10 text-secondary" />
                                    <div>
                                        <h5 className="font-bold">ISO 9001:2015</h5>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest">Quality Management</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <ShieldCheck className="w-10 h-10 text-secondary" />
                                    <div>
                                        <h5 className="font-bold">MSME Certified</h5>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest">Govt of India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-24 h-24 bg-white/5 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10">
                                <span className="font-bold text-sm text-gray-300">ISO</span>
                            </div>
                            <div className="w-24 h-24 bg-white/5 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10">
                                <span className="font-bold text-sm text-gray-300">FSC</span>
                            </div>
                            <div className="w-24 h-24 bg-white/5 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10">
                                <span className="font-bold text-sm text-gray-300">CE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
