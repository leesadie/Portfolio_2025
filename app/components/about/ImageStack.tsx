'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
    'images/about/about3.svg',
    'images/about/about4.svg',
    'images/about/ballet3.svg'
];

const ImageStack = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [])

    return (
        <div className="relative w-80 h-80 mx-auto">
            <AnimatePresence>
                {images.map((image, index) => (
                    index === currentIndex && (
                        <motion.img 
                            key={image}
                            src={image}
                            alt={`Image ${index + 1}`}
                            initial={{ opacity: 0, scale: 0.8, x: 0 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.8, x: 100 }}
                            transition={{ duration: 0.8 }}
                            className="absolute w-full h-full object-cover rounded-xl"
                        />
                    )
                ))}
            </AnimatePresence>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                <span
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-indigo-500" : "bg-gray-300"
                    }`}
                ></span>
                ))}
            </div>
        </div>
    );
}

export default ImageStack;