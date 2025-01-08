'use client';

import { font_bold, font_med } from "../fonts";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ReachoutClient = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col lg:mx-80 mx-5 lg:pt-24 pt-10">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <div className={`lg:text-xl text-sm text-neutral-900 ${font_med.className}`}>
                        BC Children's Hospital Research Institute
                    </div>
                    <div className="lg:text-xl text-sm text-neutral-900">
                        T1D REACHOUT Time in Range Data Analysis
                    </div>
                </div>
                <div className={`lg:text-base text-sm text-neutral-700 opacity-50 lg:mt-8`}>
                    MAY 2023 - APRIL 2024
                </div>
            </div>
            <div className="pt-3">
                <Image 
                    src='/images/tir_3.svg'
                    alt="dashboard"
                    width={100}
                    height={100}
                    className="w-full object-contain justify-center items-center rounded-xl min-h-0 h-full"
                />
            </div>
            <div className="lg:text-lg text-base text-neutral-700 pt-5">
                T1D REACHOUT is a study investigating the effects of a peer support-based intervention via mobile 
                application on diabetes distress in adults with type 1 diabetes in British Columbia.
            </div>
            <div className="lg:text-lg text-base text-neutral-700 pt-5">
                As a research assistant on this study under Dr. Tricia Tang and Dr. Matthias Görges, I led time in range data collection and analysis.
                A secondary outcome, time in range (TIR) refers to the time spent by the participant within 
                the 3.9-10.0 mmol/L range, which is indicative of good glycemic control.
            </div>
            <div className="lg:grid lg:grid-cols-5 flex flex-col pt-10 lg:gap-10 gap-5">
                <div className="flex flex-col col-span-3 text-neutral-700 text-base">
                    <div className={`${font_bold.className}`}>
                        KEY POINTS
                    </div>
                    <div className="pt-5">
                        For all participants, we looked to see the effect, if any, of the T1D REACHOUT intervention on time in range and visualize changes before and after participation.
                    </div>
                    <div className="pt-5">
                        Continuous glucose monitors used were the Dexcom G6, Dexcom G7, and FreeStyle Libre 3.
                    </div>
                    <div className="pt-5">
                        In addition to calculating time in range, we calculated time spent in the high range, very high range, low range, and very low range, as well as Glucose Management Indicator and coefficient of variation.
                    </div>
                </div>
                <div className="flex flex-row gap-10 lg:hidden block">
                    <div className="flex flex-col col-span-1 text-neutral-700 text-base">
                        <div className={`${font_bold.className}`}>
                            SKILLS
                        </div>
                        <div className="pt-5">
                            Data collection
                        </div>
                        <div>
                            Data analysis
                        </div>
                        <div>
                            Data visualization
                        </div>
                    </div>
                    <div className="flex flex-col col-span-1 text-neutral-700 text-base">
                        <div className={`${font_bold.className}`}>
                            TOOLS
                        </div>
                        <div className="pt-5">
                            R
                        </div>
                        <div>
                            tidyverse
                        </div>
                        <div>
                            Jupyter
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block flex flex-col col-span-1 text-neutral-700 text-base">
                    <div className={`${font_bold.className}`}>
                        SKILLS
                    </div>
                    <div className="pt-5">
                        Data collection
                    </div>
                    <div>
                        Data analysis
                    </div>
                    <div>
                        Data visualization
                    </div>
                </div>
                <div className="hidden lg:block flex flex-col col-span-1 text-neutral-700 text-base">
                    <div className={`${font_bold.className}`}>
                        TOOLS
                    </div>
                    <div className="pt-5">
                        R
                    </div>
                    <div>
                        tidyverse
                    </div>
                    <div>
                        Jupyter
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center py-10 group gap-1 text-base text-neutral-900"
                onClick={() => router.push('/')}>
               <div className="hover:opacity-50 underline underline-offset-2 transition cursor-pointer">
                    Back
                </div>
            </div>
        </div>
    );
}

export default ReachoutClient;