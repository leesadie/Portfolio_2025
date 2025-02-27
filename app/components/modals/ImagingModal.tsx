'use client';

import { useState } from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

import useImagingModal from "../hooks/useImagingModal";
import Modal from "../Modal";
import { font_med } from "@/app/fonts";

const ImagingModal = () => {
    const imagingModal = useImagingModal();
    const [isLoading, setIsLoading] = useState(false);

    const bodyContent = (
        <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center">
                <Image 
                    src='/images/mcp_imaging_4.svg'
                    alt="dashboard"
                    width={100}
                    height={100}
                    className="w-full h-1/2  object-contain justify-center items-center min-h-0 h-full transition"
                />
            </div>
            <div className="lg:mx-20 mx-5 pt-5">
                <div className="text-neutral-700 opacity-50 pt-5 text-sm">
                    SUMMER 2024
                </div>
                <div className={`text-netural-700 text-base ${font_med.className}`}>
                    Mayo Clinic Platform
                </div>
                <hr className="mt-3"/>
                <div className="text-neutral-900 mt-3 lg:text-base tracking-tight text-sm">
                    During my internship at Mayo Clinic Platform, I worked with the 
                    Accelerate team to estsablish a process for health tech startups building
                    AI products with imaging modalities (e.g. MR, CT, PET).
                    I developed a use case with DICOM standard prostate MR images in which I defined a cohort, 
                    annotated potential abnormalities, built segmentation and classification models 
                    with both PyTorch and Tensorflow, and documented known issues.
                </div>
                <hr className="mt-3"/>
                <div className="flex flex-row gap-1 items-center group cursor-pointer">
                    <a target="_blank" rel="noopener noreferrer" href="mailto:leesadie025@gmail.com">
                        <div className="text-indigo-700 flex flex-row text-neutral-700 mt-2 text-base py-2 group-hover:opacity-50 transition">
                            Email me for more info
                            <div className="group-hover:translate-x-1 transition">
                                <IoIosArrowRoundForward size={24} className="text-indigo-700"/>
                            </div>
                        </div>
                    </a>
                </div>
                <hr className="mt-3"/>
            </div>
        </div>
    )

    return (
        <Modal 
            disabled={isLoading}
            isOpen={imagingModal.isOpen}
            onClose={imagingModal.onClose}
            body={bodyContent}
        />
    );
}

export default ImagingModal;