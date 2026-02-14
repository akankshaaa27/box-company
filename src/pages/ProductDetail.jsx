import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import {
    ArrowLeft, CheckCircle, Package, Send, ShieldPlus,
    Truck, HelpCircle, ChevronRight, Share2, Box, Image as ImageIcon
} from 'lucide-react';
import Box3D from '../components/Box3D';

const ProductDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.slug === slug);
    const [formStatus, setFormStatus] = useState(null);
    const [viewMode, setViewMode] = useState('image'); // 'image' or '3d'

    if (!product) {
        return (
            <div className="pt-40 pb-20 text-center">
                <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
                <Link to="/products" className="text-primary font-bold">Back to Products</Link>
            </div>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('loading');
        setTimeout(() => {
            setFormStatus('success');
            e.target.reset();
        }, 1500);
    };

    const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

    return (
        <>
            <Helmet>
                <title>{product.name} | Industrial Packaging | Tade Packaging</title>
                <meta name="description" content={product.shortDescription} />
            </Helmet>

            <section className="pt-32 pb-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center space-x-2 text-sm font-medium text-gray-500 mb-8">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-gray-900 border-b-2 border-secondary">{product.name}</span>
                    </nav>

                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center text-primary font-bold mb-10 hover:translate-x-[-4px] transition-transform"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Product Images */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-gray-50 shadow-xl border border-gray-100 flex items-center justify-center">
                                {viewMode === 'image' ? (
                                    <motion.img
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.src = '/assets/images/hero.jpg';
                                        }}
                                    />
                                ) : (
                                    <Box3D
                                        length={product.dimensions?.length || 30}
                                        width={product.dimensions?.width || 20}
                                        height={product.dimensions?.height || 25}
                                        texture={product.category === 'Printed' ? product.image : null}
                                    />
                                )}

                                {/* View Mode Toggles */}
                                <div className="absolute bottom-6 right-6 flex space-x-2">
                                    <button
                                        onClick={() => setViewMode('image')}
                                        className={`p-3 rounded-xl transition-all shadow-lg ${viewMode === 'image' ? 'bg-primary text-white' : 'bg-white text-gray-400 hover:text-primary'}`}
                                    >
                                        <ImageIcon className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode('3d')}
                                        className={`p-3 rounded-xl transition-all shadow-lg ${viewMode === '3d' ? 'bg-primary text-white' : 'bg-white text-gray-400 hover:text-primary'}`}
                                    >
                                        <Box className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-4 gap-4">
                                <div
                                    onClick={() => setViewMode('image')}
                                    className={`aspect-square rounded-2xl overflow-hidden cursor-pointer border-2 transition-all ${viewMode === 'image' ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                >
                                    <img
                                        src={product.image}
                                        className="w-full h-full object-cover"
                                        alt={`${product.name} Thumbnail`}
                                        onError={(e) => {
                                            e.target.src = '/assets/images/hero.jpg';
                                        }}
                                    />
                                </div>
                                <div
                                    onClick={() => setViewMode('3d')}
                                    className={`aspect-square rounded-2xl flex flex-col items-center justify-center cursor-pointer border-2 transition-all ${viewMode === '3d' ? 'border-primary bg-primary/5' : 'border-transparent bg-gray-50 opacity-60 hover:opacity-100'}`}
                                >
                                    <Box className="w-6 h-6 text-primary mb-1" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">3D Model</span>
                                </div>
                                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 cursor-help opacity-40">
                                    <img
                                        src={product.image}
                                        className="w-full h-full object-cover grayscale"
                                        alt={`${product.name} Alternative View`}
                                        onError={(e) => {
                                            e.target.src = '/assets/images/hero.jpg';
                                        }}
                                    />
                                </div>
                                <div className="aspect-square rounded-2xl bg-industrial-light flex flex-col items-center justify-center text-primary cursor-pointer hover:bg-primary/5 transition-colors">
                                    <Share2 className="w-6 h-6 mb-2" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider">Share</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Product Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="inline-block bg-secondary/10 text-secondary text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
                                {product.category}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">{product.name}</h1>
                            {product.price && (
                                <p className="text-2xl font-black text-primary mb-8 flex items-center">
                                    ₹{product.price}
                                    <span className="text-sm text-gray-400 font-medium lowercase ml-2">Starting price / piece</span>
                                </p>
                            )}
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                {product.description}
                            </p>

                            {/* Specs Table */}
                            <div className="mb-10">
                                <h3 className="text-xl font-bold mb-4 flex items-center">
                                    <Package className="w-6 h-6 mr-2 text-primary" />
                                    Technical Specifications
                                </h3>
                                <div className="bg-industrial-light rounded-2xl overflow-hidden border border-gray-200">
                                    <table className="w-full text-sm text-left">
                                        <tbody>
                                            {Object.entries(product.specifications).map(([key, value], i) => (
                                                <tr key={key} className={i % 2 === 0 ? 'bg-white/50' : ''}>
                                                    <th className="px-6 py-4 font-bold text-gray-500 uppercase tracking-wider w-1/3">{key.replace(/([A-Z])/g, ' $1')}</th>
                                                    <td className="px-6 py-4 font-semibold text-gray-900">{value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Key Features Icons */}
                            <div className="grid grid-cols-2 gap-4 mb-10">
                                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                                    <ShieldPlus className="text-primary w-6 h-6" />
                                    <span className="text-xs font-bold text-gray-700 uppercase">Durability Ensured</span>
                                </div>
                                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                                    <Truck className="text-primary w-6 h-6" />
                                    <span className="text-xs font-bold text-gray-700 uppercase">Fast Delivery</span>
                                </div>
                            </div>

                            {/* Inquiry Form Card */}
                            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
                                <h3 className="text-2xl font-black mb-2 flex items-center">
                                    Request Pricing
                                    <Send className="w-5 h-5 ml-3 text-secondary" />
                                </h3>
                                <p className="text-sm text-gray-500 mb-6 font-medium">Get a customized quote for bulk quantities within 24 hours.</p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input required type="text" placeholder="Full Name *" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none font-medium text-sm transition-all" />
                                        <input required type="email" placeholder="Work Email *" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none font-medium text-sm transition-all" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input required type="tel" placeholder="Phone Number *" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none font-medium text-sm transition-all" />
                                        <input type="text" placeholder="Quantity Needed" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none font-medium text-sm transition-all" />
                                    </div>
                                    <button
                                        disabled={formStatus === 'loading' || formStatus === 'success'}
                                        className={`w-full py-4 rounded-xl font-black text-white transition-all shadow-lg ${formStatus === 'success' ? 'bg-green-500' : 'bg-primary hover:bg-primary-dark '
                                            }`}
                                    >
                                        {formStatus === 'loading' ? 'Processing...' :
                                            formStatus === 'success' ? 'Inquiry Sent Successfully!' :
                                                'Send Request'}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Extended Features & Applications */}
            <section className="py-24 bg-industrial-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h4 className="text-2xl font-bold mb-8 border-b-2 border-primary pb-4 inline-block">Key Performance Features</h4>
                            <ul className="grid grid-cols-1 gap-4">
                                {product.features.map((feature, i) => (
                                    <li key={i} className="flex items-center space-x-3 bg-white p-5 rounded-2xl shadow-sm">
                                        <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                                        <span className="font-semibold text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold mb-8 border-b-2 border-secondary pb-4 inline-block">Ideal Applications</h4>
                            <div className="flex flex-wrap gap-3">
                                {product.applications.map((app, i) => (
                                    <span key={i} className="px-6 py-3 bg-white border border-gray-200 rounded-full font-bold text-gray-600 text-sm shadow-sm hover:shadow-md transition-shadow">
                                        {app}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-12 p-8 bg-primary rounded-3xl text-white">
                                <HelpCircle className="w-10 h-10 mb-4 opacity-50" />
                                <h5 className="text-xl font-bold mb-2">Need a Custom Design?</h5>
                                <p className="text-blue-100 mb-6 text-sm">Our engineering team can create customized prototypes based on your product dimensions and shipping stress tests.</p>
                                <Link to="/contact" className="inline-block bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-secondary hover:text-white transition-all">Consult Designer</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-black mb-12 text-center">You May Also Be Interested In</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedProducts.map(p => (
                            <Link to={`/products/${p.slug}`} key={p.id} className="group">
                                <div className="aspect-video rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-lg transition-all">
                                    <img
                                        src={p.image}
                                        alt={p.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => {
                                            e.target.src = '/assets/images/hero.jpg';
                                        }}
                                    />
                                </div>
                                <h4 className="text-lg font-bold group-hover:text-primary transition-colors">{p.name}</h4>
                                <p className="text-sm text-gray-500 font-medium">See specs <ArrowLeft className="w-3 h-3 inline rotate-180" /></p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetail;
