import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Linkedin, Twitter, Facebook } from 'lucide-react';

const Contact = () => {
    const [formStatus, setFormStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('loading');
        setTimeout(() => {
            setFormStatus('success');
            e.target.reset();
        }, 1500);
    };

    const contactOptions = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Call Us",
            info: "+91 123 456 7890",
            sub: "Mon - Sat, 9am - 6pm",
            link: "tel:+911234567890"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email Us",
            info: "sales@tade-packaging.com",
            sub: "Quick response within 24h",
            link: "mailto:sales@tade-packaging.com"
        },
        {
            icon: <MessageCircle className="w-6 h-6" />,
            title: "WhatsApp",
            info: "+91 987 654 3210",
            sub: "Instant technical support",
            link: "https://wa.me/919876543210"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Contact Us | Get a Packaging Quote | Tade Packaging</title>
                <meta name="description" content="Contact Tade Packaging for your corrugated packaging requirements. Visit our factory or get an online quote." />
            </Helmet>

            {/* Header */}
            <section className="bg-primary/5 pt-40 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full -mr-64 -mt-64 blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Let's Build Better <span className="text-secondary">Packaging</span></h1>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                            Our experts are ready to assist you with design, estimation, and production
                            planning for your next packaging project.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="py-20 -mt-16 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {contactOptions.map((option, i) => (
                            <motion.a
                                href={option.link}
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-10 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all group border border-gray-50"
                            >
                                <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:-rotate-6">
                                    {option.icon}
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">{option.title}</h4>
                                <p className="text-xl font-black text-primary mb-1">{option.info}</p>
                                <p className="text-sm text-gray-500 font-medium">{option.sub}</p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form and Info */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">Visit Our Global Headquarter & Factory</h2>
                            <div className="space-y-10">
                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 bg-industrial-light rounded-xl flex items-center justify-center shrink-0">
                                        <MapPin className="text-primary" />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold mb-2">Corporate Office & Warehouse</h5>
                                        <p className="text-gray-600 leading-relaxed font-medium">
                                            Plot No. 45, MIDC Phase 2,<br />
                                            Hinjewadi IT Park, Pune,<br />
                                            Maharashtra 411057, India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 bg-industrial-light rounded-xl flex items-center justify-center shrink-0">
                                        <Clock className="text-primary" />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold mb-2">Operating Hours</h5>
                                        <p className="text-gray-600 font-medium">Monday — Friday: 09:00 AM - 06:00 PM</p>
                                        <p className="text-gray-600 font-medium">Saturday: 09:00 AM - 01:00 PM</p>
                                        <p className="text-gray-500 text-sm italic mt-2">Production floor runs 24/7 in 3 shifts</p>
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <h5 className="text-lg font-bold mb-6">Connect on Social Media</h5>
                                    <div className="flex space-x-6">
                                        {[Linkedin, Twitter, Facebook].map((Social, i) => (
                                            <a key={i} href="#" className="w-12 h-12 rounded-full bg-industrial-light flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                                                <Social className="w-5 h-5" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Inquiry Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-industrial-dark p-12 rounded-[3.5rem] text-white shadow-2xl relative"
                        >
                            <h3 className="text-3xl font-black mb-8">Send a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Name</label>
                                        <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:bg-white/10 focus:ring-1 focus:ring-secondary outline-none transition-all" placeholder="Enter Full Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Work Email</label>
                                        <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:bg-white/10 focus:ring-1 focus:ring-secondary outline-none transition-all" placeholder="email@company.com" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:bg-white/10 outline-none transition-all appearance-none cursor-pointer">
                                        <option className="bg-industrial-dark">General Inquiry</option>
                                        <option className="bg-industrial-dark">Sales Inquiry</option>
                                        <option className="bg-industrial-dark">Custom Design Request</option>
                                        <option className="bg-industrial-dark">Career Opportunity</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                                    <textarea required rows="5" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:bg-white/10 focus:ring-1 focus:ring-secondary outline-none transition-all resize-none" placeholder="Tell us about your requirements..."></textarea>
                                </div>

                                <button
                                    disabled={formStatus === 'loading' || formStatus === 'success'}
                                    className={`w-full py-5 rounded-2xl font-black flex items-center justify-center space-x-3 transition-all ${formStatus === 'success' ? 'bg-green-500' : 'bg-secondary hover:bg-secondary-dark'
                                        }`}
                                >
                                    {formStatus === 'loading' ? 'Sending...' :
                                        formStatus === 'success' ? 'Message Received!' :
                                            <><span>Send Inquiry</span><Send className="w-5 h-5" /></>}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[500px] w-full bg-gray-200">
                <iframe
                    title="Location Map"
                    className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0344739699!2d73.7805654!3d18.5248902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43100ac54f2!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    loading="lazy"
                ></iframe>
            </section>
        </>
    );
};

export default Contact;
