import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-industrial-dark text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center space-x-2">
                            <Package className="w-8 h-8 text-secondary" />
                            <span className="text-2xl font-bold tracking-tight">
                                TADE <span className="text-secondary">PACKAGING</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Leading manufacturer and supplier of premium corrugated packaging solutions.
                            We deliver quality, durability, and sustainability in every box.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-secondary transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-secondary transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-secondary transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-secondary transition-colors"><Instagram className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Company</Link></li>
                            <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Our Products</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Manufacturing Process</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Quality Standards</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Our Products */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Products</h4>
                        <ul className="space-y-4">
                            <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Corrugated Boxes</Link></li>
                            <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Printed Cartons</Link></li>
                            <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Die-cut Boxes</Link></li>
                            <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Product Displays</Link></li>
                            <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Heavy Duty Rolls</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                                <span>123 Industrial Estate, Sector 5, <br />Pune, Maharashtra 411001</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Phone className="w-5 h-5 text-secondary shrink-0" />
                                <a href="tel:+911234567890" className="hover:text-white transition-colors">+91 123 456 7890</a>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <a href="mailto:info@tade-packaging.com" className="hover:text-white transition-colors">info@tade-packaging.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {currentYear} Tade Packaging. All rights reserved.</p>
                    <p className="mt-4 md:mt-0">Design & Developed by Antigravity AI</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
