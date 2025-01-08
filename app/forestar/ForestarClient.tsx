'use client';

import { font_bold, font_med } from "../fonts";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ForestarClient = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col lg:mx-80 mx-5 lg:pt-24 pt-10">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <div className={`lg:text-xl text-sm text-neutral-900 ${font_med.className}`}>
                        UBC Emerging Media Lab
                    </div>
                    <div className="lg:text-xl text-sm text-neutral-900">
                        Forestar Web Application Development
                    </div>
                </div>
                <div className={`lg:text-base text-sm text-neutral-700 opacity-50 lg:mt-8`}>
                    SUMMER 2023
                </div>
            </div>
            <div className="pt-5">
                <Image 
                    src='/images/forestar_2.svg'
                    alt="forestar"
                    width={100}
                    height={100}
                    className="w-full object-contain justify-center items-center rounded-xl min-h-0 h-full"
                />
            </div>
            <div className="lg:text-lg text-base text-neutral-900 pt-5">
                Forestar is an extension of a 2022 UBC Faculty of Forestry clinical trial that studied the health merits
                of forest bathing (森林浴) which includes certified guides, during which participants faced challenges with mobility, transportation,
                illness, and/or guidance.
            </div>
            <div className="lg:text-lg text-base text-neutral-900 pt-5">
                As a software developer on the project, I developed the frontend and backend
                for the web application, which entailed a database of trails where users could experience 
                guided forest bathing on their own time and with their own preferences such as length and mode of instruction (written or audio).
                An augmented reality component was also introduced to situate users within their surroundings and 
                prompt focus.
            </div>
            <div className="lg:grid lg:grid-cols-5 flex flex-col pt-10 lg:gap-10 gap-5">
                <div className="flex flex-col col-span-3 text-neutral-700 text-base">
                    <div className={`${font_bold.className}`}>
                        KEY POINTS
                    </div>
                    <div className="pt-5">
                        The web app provides guided forest bathing to mitigate
                        barriers to practice and increase its accessibility.
                    </div>
                    <div className="pt-5">
                        Questions that arose during development included,
                        1) How can we build an app to reduce distractions and 
                        2) How can other media be used to increase focus on the experience?
                    </div>
                    <div className="pt-5">
                        We used specific language to remind users of the goals and the environment, 
                        and incorporated location-based augmented reality to prompt focus on a specific 
                        sense at a given location along the route.
                    </div>
                </div>
                <div className="flex flex-row gap-10 lg:hidden block">
                    <div className="flex flex-col col-span-1 text-neutral-700 text-base">
                        <div className={`${font_bold.className}`}>
                            SKILLS
                        </div>
                        <div className="pt-5">
                            Mobile-first design
                        </div>
                        <div>
                            Frontend dev
                        </div>
                        <div>
                            Backend dev
                        </div>
                    </div>
                    <div className="flex flex-col col-span-1 text-neutral-700 text-base">
                        <div className={`${font_bold.className}`}>
                            TOOLS
                        </div>
                        <div className="pt-5">
                            React
                        </div>
                        <div>
                            Node.js
                        </div>
                        <div>
                            TypeScript
                        </div>
                        <div>
                            MongoDB
                        </div>
                        <div>
                            Tailwind CSS
                        </div>
                        <div>
                            Needle Engine
                        </div>
                        <div>
                            Unity
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block flex flex-col col-span-1 text-neutral-700 text-base">
                    <div className={`${font_bold.className}`}>
                        SKILLS
                    </div>
                    <div className="pt-5">
                        Mobile-first design
                    </div>
                    <div>
                        Frontend dev
                    </div>
                    <div>
                        Backend dev
                    </div>
                </div>
                <div className="hidden lg:block flex flex-col col-span-1 text-neutral-700 text-base">
                    <div className={`${font_bold.className}`}>
                        TOOLS
                    </div>
                    <div className="pt-5">
                        React
                    </div>
                    <div>
                        Node.js
                    </div>
                    <div>
                        TypeScript
                    </div>
                    <div>
                        MongoDB
                    </div>
                    <div>
                        Tailwind CSS
                    </div>
                    <div>
                        Needle Engine
                    </div>
                    <div>
                        Unity
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

export default ForestarClient;