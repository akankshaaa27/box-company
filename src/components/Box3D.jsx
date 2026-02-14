import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Box3D = ({ length = 20, width = 20, height = 20, texture = null, color = "#d2b48c" }) => {
    const [rotation, setRotation] = useState({ x: -25, y: 45 });
    const [isRotating, setIsRotating] = useState(true);

    // Scaling factor to keep the box within view (max dimension ~200px)
    const maxDim = Math.max(length, width, height);
    const scale = 200 / maxDim;

    const l = length * scale;
    const w = width * scale;
    const h = height * scale;

    useEffect(() => {
        if (!isRotating) return;
        const interval = setInterval(() => {
            setRotation(prev => ({ ...prev, y: prev.y + 0.5 }));
        }, 30);
        return () => clearInterval(interval);
    }, [isRotating]);

    const handleMouseDown = (e) => {
        setIsRotating(false);
        const startX = e.pageX;
        const startY = e.pageY;
        const startRotX = rotation.x;
        const startRotY = rotation.y;

        const handleMouseMove = (moveE) => {
            const deltaX = moveE.pageX - startX;
            const deltaY = moveE.pageY - startY;
            setRotation({
                x: startRotX - deltaY * 0.5,
                y: startRotY + deltaX * 0.5
            });
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <div
            className="relative w-full h-[400px] flex items-center justify-center perspective-[1000px] cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
        >
            <motion.div
                className="relative preserve-3d"
                style={{
                    width: l,
                    height: h,
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                    transition: isRotating ? 'none' : 'transform 0.1s ease-out'
                }}
            >
                {/* Front */}
                <div
                    className="absolute inset-0 border border-black/10 flex items-center justify-center"
                    style={{
                        backgroundColor: color,
                        transform: `translateZ(${w / 2}px)`,
                        width: l,
                        height: h
                    }}
                >
                    {texture && <img src={texture} className="w-full h-full object-cover opacity-30 grayscale" alt="" />}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-black/20"></div>
                    <span className="text-[10px] font-bold opacity-30 uppercase tracking-tighter">Front - {length}cm</span>
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 border border-black/10"
                    style={{
                        backgroundColor: color,
                        transform: `rotateY(180deg) translateZ(${w / 2}px)`,
                        width: l,
                        height: h
                    }}
                >
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>

                {/* Right */}
                <div
                    className="absolute top-0 border border-black/10"
                    style={{
                        backgroundColor: color,
                        left: l - w / 2,
                        width: w,
                        height: h,
                        transform: `rotateY(90deg)`
                    }}
                >
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="flex items-center justify-center h-full">
                        <span className="text-[10px] font-bold opacity-30 uppercase tracking-tighter rotate-90">{width}cm</span>
                    </div>
                </div>

                {/* Left */}
                <div
                    className="absolute top-0 border border-black/10"
                    style={{
                        backgroundColor: color,
                        left: -w / 2,
                        width: w,
                        height: h,
                        transform: `rotateY(-90deg)`
                    }}
                >
                    <div className="absolute inset-0 bg-black/5"></div>
                </div>

                {/* Top */}
                <div
                    className="absolute left-0 border border-black/10"
                    style={{
                        backgroundColor: color,
                        top: -w / 2,
                        width: l,
                        height: w,
                        transform: `rotateX(90deg)`
                    }}
                >
                    {/* Top flaps detail */}
                    <div className="absolute inset-0 border-x border-black/10 flex items-center justify-center">
                        <div className="w-[1px] h-full bg-black/20"></div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
                </div>

                {/* Bottom */}
                <div
                    className="absolute left-0 border border-black/10"
                    style={{
                        backgroundColor: color,
                        bottom: -w / 2,
                        width: l,
                        height: w,
                        transform: `rotateX(-90deg)`
                    }}
                >
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>
            </motion.div>

            {/* Shadow */}
            <div
                className="absolute bottom-20 w-48 h-12 bg-black/10 rounded-[100%] blur-xl"
                style={{ transform: `scale(${1 + rotation.x / 100})` }}
            ></div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-white/80 px-4 py-2 rounded-full border border-gray-100 shadow-sm">
                Drag to rotate • {length} x {width} x {height} cm
            </div>
        </div>
    );
};

export default Box3D;
