import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const phoneNumber = "918046076823";
    const message = "Hello, I am interested in your corrugated packaging solutions.";

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
            aria-label="Chat on WhatsApp"
        >
            <div className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block border border-gray-100">
                Chat with us
            </div>
            <MessageCircle className="w-8 h-8" />
        </button>
    );
};

export default WhatsAppButton;
