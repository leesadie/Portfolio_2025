'use client';

import { font_bold } from "../fonts";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io"


const SideClient = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col lg:mx-80 mx-5 lg:pt-24 pt-10">
            <div className="lg:text-2xl text-neutral-700 text-base justify-center items-center">
                On the side — things I've learned and experimented with on my own, both for fun and for projects.
            </div>
            <div className={`mt-10 text-base text-neutral-700 ${font_bold.className}`}>
                NATURAL LANGUAGE PROCESSING
            </div>
            <div className="flex flex-row mt-5 gap-5">
                <div>
                    <Image 
                        src='/images/transformer.svg'
                        alt="transformer"
                        width={100}
                        height={100}
                        className="w-full h-full object-contain justify-center rounded-lg items-center"
                    />
                </div>
                <div className="flex flex-col text-sm lg:text-base text-neutral-900 gap-2">
                    Given the increasing prevalence of NLP and LLMs, I've been interested in learning more about both
                    its theoretical background and practical applications. 
                    <div>
                        Since I was unable to formally take courses on the topic so I can stay on track to graduate in May 2026, I've been exploring 
                        key papers and model architectures on my own.
                    </div>
                    <div className="flex flex-col">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/leesadie/Pytorch_Transformer">
                            <div className="flex flex-row group">
                                <div className="underline underline-offset-2 hover:opacity-50 cursor-pointer">
                                    Transformer Model
                                </div>
                                <div className="">
                                    <IoIosArrowRoundForward size={24} className="text-indigo-700 group-hover:translate-x-1 transition"/>
                                </div>
                            </div>
                        </a>
                        <div className="flex flex-row gap-1">
                            <div className="text-sm italic">
                                From Attention Is All You Need
                            </div>
                            <a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/pdf/1706.03762">
                                <div className="text-sm italic underline underline-offset-2 cursor-pointer hover:opacity-50">
                                    (Vaswani et al., 2017)
                                </div>
                            </a>
                        </div>
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/leesadie/Seq2Seq">
                        <div className="flex flex-row group">
                            <div className="underline underline-offset-2 hover:opacity-50 cursor-pointer">
                                Sequence to Sequence Model
                            </div>
                            <div className="">
                                <IoIosArrowRoundForward size={24} className="text-indigo-700 group-hover:translate-x-1 transition"/>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className={`mt-10 text-base text-neutral-700 ${font_bold.className}`}>
                CREATIVE CODE
            </div>
            <div className="grid grid-cols-2 gap-3 mt-5">
                <div className="w-full lg:h-60 h-40 rounded-lg">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md object-cover"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/coordinates.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="w-full lg:h-60 h-40 rounded-lg">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md object-cover"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/flow.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="text-xs text-neutral-900 opacity-70 lg:text-base">
                    Spherical coordinates - p5.js
                </div>
                <div className="text-xs text-neutral-900 opacity-70 lg:text-base">
                    Flow fields - p5.js
                </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-5">
                <div className="w-full lg:h-60 h-30 rounded-lg">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md object-cover"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/loading.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="w-full lg:h-60 h-30 rounded-lg">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md object-cover"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/typography.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="w-full lg:h-60 h-30 rounded-lg">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md object-cover"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/generative.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="text-xs text-neutral-900 opacity-70 lg:text-base">
                    Loading - Processing
                </div>
                <div className="text-xs text-neutral-900 opacity-70 lg:text-base">
                    Typography - Processing
                </div>
                <div className="text-xs text-neutral-900 opacity-70 lg:text-base">
                    Generative - Processing
                </div>
            </div>
            <div className={`mt-10 text-base text-neutral-700 ${font_bold.className}`}>
                AIRBNB CLONE
            </div>
            <div className="flex flex-col gap-3 mt-5">
                <div className="w-full lg:h-full rounded-lg">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md object-cover"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/airbnb.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="text-sm lg:text-base text-neutral-900 opacity-70">
                    Followed a tutorial from @codewithantonio on YouTube to teach myself basic frontend and backend
                    for the Forestar project - NextJS 13, TypeScript, MongoDB, Prisma, NextAuth, Tailwind CSS 
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

export default SideClient;