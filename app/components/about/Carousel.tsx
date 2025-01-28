'use client';

import { useState, useEffect, JSX } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import about2 from '@/public/images/about/about2.svg'
import about3 from '@/public/images/about/about3.svg'
import about4 from '@/public/images/about/about4.svg'
import ballet3 from '@/public/images/about/ballet3.svg'
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

interface ImageData {
    src: StaticImageData;
}

const images: ImageData[] = [
    { src: about3 },
    { src: about4 },
    { src: ballet3 },
];

export default function Carousel(): JSX.Element {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const prevSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                nextSlide();
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isHovered]);

    return (
        <div
            className="relative md:w-full md:max-w-screen-lg md:mx-auto pb-20 md:pb-0"
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Container */}
            <div className="relative md:h-[450px] md:w-[550px] h-[300px] w-[325px] overflow-hidden rounded-md">
                <Image
                    src={images[currentIndex].src}
                    alt={`Slider Image ${currentIndex + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 ease-in-out"
                />
            </div>

            {/* Previous Button */}
            <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-black"
                onClick={prevSlide}
            >
                <IoIosArrowDropleft size={40} />
            </button>

            {/* Next Button */}
            <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-black"
                onClick={nextSlide}
            >
                <IoIosArrowDropright size={40} />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-10 rounded-md transition-all ${
                            index === currentIndex ? "bg-indigo-700" : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}