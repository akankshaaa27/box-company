import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Factory, ShieldCheck, Truck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const features = [
        {
            icon: <Factory className="w-8 h-8 text-primary" />,
            title: "Advanced Manufacturing",
            description: "State-of-the-art automated corrugation production lines."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-primary" />,
            title: "Quality Assurance",
            description: "Rigorous testing for bursting factor and stacking strength."
        },
        {
            icon: <Truck className="w-8 h-8 text-primary" />,
            title: "On-Time Delivery",
            description: "Efficient logistics network ensuring timely project completion."
        },
        {
            icon: <Users className="w-8 h-8 text-primary" />,
            title: "Custom Solutions",
            description: "Expert design team to create custom packaging for any product."
        }
    ];

    return (
        <>
            <Helmet>
                <title>Tade Packaging | Quality Corrugated Box Manufacturer & Supplier</title>
                <meta name="description" content="Premium corrugated box manufacturing company. We provide printed boxes, die-cut cartons, and industrial packaging solutions." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center overflow-hidden">
                {/* Hero Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/images/hero.jpg"
                        className="w-full h-full object-cover"
                        alt="Corrugated Box Warehouse"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-industrial-dark/95 via-industrial-dark/70 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className=" "
                    >
                        <span className="inline-block bg-secondary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6">
                            Industrial Packaging Experts
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                            Premium <span className="text-secondary">Corrugated</span> <br />
                            Solutions for Every Need
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
                            We manufacture high-strength, eco-friendly corrugated boxes and custom
                            packaging solutions that protect your products and elevate your brand.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/products" className="btn-secondary flex items-center justify-center">
                                Explore Products <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link to="/contact" className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all text-center">
                                Get a Quote
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Bottom Stats */}
                <div className="absolute bottom-0 left-0 w-full bg-white/5 backdrop-blur-md border-t border-white/10 hidden lg:block">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="grid grid-cols-4 gap-8">
                            {[
                                { label: 'Annual Production', value: '10M+' },
                                { label: 'Happy Clients', value: '500+' },
                                { label: 'Product Designs', value: '1500+' },
                                { label: 'Years Experience', value: '25+' },
                            ].map((stat, i) => (
                                <div key={i} className="text-white">
                                    <p className="text-3xl font-extrabold text-secondary">{stat.value}</p>
                                    <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* About Brief Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeInUp} className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="/assets/images/feature.jpg"
                                    alt="Quality Manufacturing"
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-primary p-12 rounded-3xl text-white hidden md:block">
                                <p className="text-5xl font-black mb-1">ISO</p>
                                <p className="text-lg font-bold opacity-80 uppercase tracking-widest leading-none">9001:2015</p>
                                <p className="text-xs mt-4 font-medium opacity-60 uppercase">Certified Facility</p>
                            </div>
                        </motion.div>

                        <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">About the Company</h2>
                            <h3 className="section-title text-left mb-6">Innovative Packaging for a Durable Future</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                Since our inception, Tade Packaging has been at the forefront of the corrugated
                                packaging industry. We specialize in high-quality 3, 5, and 7-ply boxes,
                                offset-printed cartons, and precision die-cut components.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    'Quality assured products',
                                    'Trusted & Reliable vendors',
                                    'Expert engineering team',
                                    'Modern manufacturing unit',
                                    'Longer life relationship',
                                    'Affordable wholesale prices'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-3 font-medium text-gray-700">
                                        <CheckCircle className="text-secondary w-5 h-5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/about" className="text-primary font-bold flex items-center hover:translate-x-2 transition-transform">
                                Read More About Us <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-24 bg-industrial-light overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <img
                            src="/assets/images/products/craft-box.jpg"
                            alt="Premium Packaging"
                            className="w-full max-w-4xl mx-auto h-[400px] object-cover rounded-[3rem] shadow-2xl mb-12"
                        />
                        <h2 className="section-title">Our Premium Product Line</h2>
                        <p className="section-subtitle">
                            We offer a wide range of corrugated solutions tailored to various industries,
                            from small retail boxes to heavy industrial export crates.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.slice(0, 6).map((product, index) => (
                            <motion.div
                                key={product.id}
                                {...fadeInUp}
                                transition={{ delay: index * 0.1 }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link to="/products" className="btn-primary inline-flex items-center">
                            View All Products <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                    <motion.div {...fadeInUp}>
                        <h2 className="section-title">The Tade Packaging Advantage</h2>
                        <p className="section-subtitle">Why leading brands trust us for their packaging requirements.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                {...fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group"
                            >
                                <div className="mb-6 inline-block p-4 bg-primary/5 rounded-2xl group-hover:bg-primary/10 transition-colors">
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Manufacturing Process */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h2 className="section-title">Our Manufacturing Process</h2>
                        <p className="section-subtitle">How we transform raw kraft paper into high-performance packaging.</p>
                    </motion.div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden lg:block z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                            {[
                                { step: "01", title: "Paper Selection", desc: "Sourcing premium virgin kraft liners from certified mills." },
                                { step: "02", title: "Corrugation", desc: "Forming flutes and bonding liners with high-strength starch." },
                                { step: "03", title: "Conversion", desc: "Precision slotting, die-cutting, and multi-color printing." },
                                { step: "04", title: "QC & Dispatch", desc: "Rigorous stress testing and timely delivery tracking." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    {...fadeInUp}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center relative"
                                >
                                    <div className="w-12 h-12 bg-secondary text-white font-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-secondary/30">
                                        {item.step}
                                    </div>
                                    <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Call To Action */}
            <section className="py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        {...fadeInUp}
                        className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
                    >
                        {/* CTA Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full -ml-32 -mb-32"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                                Ready to Upgrade Your Packaging?
                            </h2>
                            <p className="text-xl text-primary-light text-blue-100 mb-10 max-w-2xl mx-auto">
                                Get custom quotes and expert design consultation for your
                                specific packaging challenges.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link to="/contact" className="btn-secondary text-lg px-10">
                                    Request Free Quote
                                </Link>
                                <a href="tel:+911234567890" className="flex items-center justify-center font-bold text-white hover:text-secondary transition-colors">
                                    Call Us: +91 123 456 7890
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Home;
