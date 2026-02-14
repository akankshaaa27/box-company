import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
        >
            <div className="relative group overflow-hidden h-64">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.category}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                </h3>
                {product.price && (
                    <p className="text-primary font-black text-lg mb-3">
                        ₹{product.price}<span className="text-xs text-gray-400 font-medium lowercase"> / piece</span>
                    </p>
                )}
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                    {product.shortDescription}
                </p>

                <div className="mt-auto space-y-4">
                    <div className="flex items-center text-xs text-gray-500 font-medium">
                        <Package className="w-4 h-4 mr-2 text-secondary" />
                        Premium Quality Guaranteed
                    </div>

                    <Link
                        to={`/products/${product.slug}`}
                        className="flex items-center justify-center w-full bg-industrial-light text-primary font-bold py-3 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 group"
                    >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
