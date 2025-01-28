'use client';

import Container from "../components/Container";
import { font_bold } from "../fonts";
import { font_med } from "../fonts";

import { TfiEmail } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";

import Image from "next/image";
import Carousel from "../components/about/Carousel";
import ImageStack from "../components/about/ImageStack";

const AboutClient = () => {
    return (
        <Container>
            <div className="flex md:flex-row flex-col pt-32 md:mx-40 mx-8 md:gap-14 text-neutral-900 justify-between pb-20">
                <div className="flex flex-col md:w-1/2 text-neutral-900">
                    <div className={`${font_bold.className}`}>
                        ABOUT ME
                    </div>
                    <div className="md:text-lg text-base mt-5">
                        I'm currently a junior at the University of British Columbia 
                        studying cognitive science with a minor in data science. My 
                        interests surround ethical applications of data and emerging 
                        technologies.
                    </div>
                    <div className="md:text-lg text-base mt-5">
                        I've previously worked at the Mayo Clinic (Mayo Clinic Platform), 
                        BC Children's Hospital Research Institute, and the UBC Emerging Media Lab 
                        on projects in AI/ML, data analysis, software development, and AI safety.
                    </div>
                    <div className="md:text-lg text-base mt-4">
                        Outside of work and school, you can usually find me teaching ballet, 
                        traveling, cooking, and continuing to learn new things.
                    </div>
                    <div className="mt-4 text-lg">
                        Get in touch with me -
                    </div>
                    <div className="flex flex-row gap-2 group">
                        <div className="pt-1 underline underline-offset-2 -mt-1 transition group-hover:opacity-50 cursor-pointer">
                            Email:
                        </div>
                        <a target="_blank" rel="noopener noreferrer" href="mailto:leesadie025@gmail.com">
                            <div className="group-hover:opacity-50 cursor-pointer transition">
                                leesadie025@gmail.com
                            </div>
                        </a>
                    </div>
                    <div className="flex flex-row gap-2 group">
                        <div className="pt-1 underline underline-offset-2 -mt-1 transition group-hover:opacity-50 cursor-pointer">
                            LinkedIn:
                        </div>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/leesadie/">
                            <div className="group-hover:opacity-50 transition cursor-pointer">
                                @leesadie
                            </div>
                        </a>
                    </div>
                    <div className="flex flex-row gap-2 group">
                        <div className="pt-1 underline underline-offset-2 -mt-1 transition group-hover:opacity-50 cursor-pointer">
                            Github:
                        </div>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/leesadie">
                            <div className="group-hover:opacity-50 transition cursor-pointer">
                                @leesadie
                            </div>
                        </a>
                    </div>
                </div>
                <div 
                    className="
                        flex 
                        flex-col 
                        justify-center 
                        items-center
                        pb-10
                        pt-10
                        md:pt-0"
                >
                    <ImageStack />
                </div>
            </div>
        </Container>
    );
}

export default AboutClient;