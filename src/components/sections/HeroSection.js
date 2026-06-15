'use client';

import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useLoading } from "../LoadingContext";

const roles = [
    "Software Engineer",
    "Designer", // press X to doubt
    "Martial Artist",
    "Gamer",
    "Traveler",
];

export default function HeroSection() {
    const [roleCounter, setRoleCounter] = useState(0);
    const [role, setRole] = useState(roles[roleCounter]);
    const [roleAnimation, setRoleAnimation] = useState("");

    // Stay hidden until the preloader finishes, then play the staggered reveal.
    const { ready } = useLoading();
    const reveal = (animationClasses) => (ready ? animationClasses : "opacity-0");

    return (
        <section>
            <div className="px-6 sm:px-10 lg:mx-[4rem] w-auto min-h-[80svh]">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-0 pt-24 lg:pt-0 lg:h-[420px] lg:mt-[6rem]">
                    <div className="text-center lg:text-left lg:mr-20 xl:mr-36">
                        <h1 className={`${reveal("animate-fade-up animate-duration-[800ms] animate-ease-out animate-delay-[0ms]")} text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold`}>
                            Preston Tom-Ying
                        </h1>

                        <div className="mt-4 lg:mt-12 xl:mt-16">
                            <div className={`${reveal("animate-fade-up animate-duration-[800ms] animate-ease-out animate-delay-[200ms]")} text-base lg:text-lg xl:text-xl`}>
                                <p className="inline-block">Hi, I am a&nbsp;</p>
                                <p className={`inline-block ${roleAnimation} animate-duration-[400ms] animate-ease-out`}>
                                    {role}
                                </p>
                            </div>
                            <p className={`${reveal("animate-fade-up animate-duration-[800ms] animate-ease-out animate-delay-[400ms]")} text-base lg:text-lg xl:text-xl`}>
                                Systems Design Engineering @ UWaterloo
                            </p>
                        </div>

                        <div className={`mt-10 lg:mt-28 flex items-center justify-center lg:justify-start gap-3 ${reveal("animate-fade-up animate-duration-[800ms] animate-ease-out animate-delay-[600ms]")}`}>
                            <a
                                href="https://github.com/prestonty"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="flex items-center justify-center w-11 h-11 rounded-full text-white hover:bg-blue transition-colors duration-300"
                            >
                                <FaGithub className="w-6 h-6" />
                            </a>
                            <a
                                href="https://linkedin.com/in/prestonty"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="flex items-center justify-center w-11 h-11 rounded-full text-white hover:bg-blue transition-colors duration-300"
                            >
                                <FaLinkedinIn className="w-6 h-6" />
                            </a>
                            {/* <a
                                className="font-black text-2xl ml-3 hover:text-blue duration-300"
                                href="https://drive.google.com/file/d/1Q9iqbVfGTwA20MRUSnJab-eNZ2niLJWV/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Resume
                            </a> */}
                        </div>
                    </div>

                    <div className="w-48 sm:w-64 lg:w-[400px] shrink-0">
                        <Image
                            className={`text-center w-full h-auto ${reveal("animate-fade-right animate-duration-[1500ms] animate-ease-out animate-delay-[300ms]")}`}
                            src="/assets/self-photos/CircleProfile.webp"
                            width={400}
                            height={400}
                            sizes="(max-width: 1024px) 16rem, 400px"
                            priority
                            alt="profile-pic"
                        />
                    </div>
                </div>

                <div className="flex justify-center">
                    <img
                        className="mt-10 lg:mt-20 w-6 sm:w-8 animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-in-out"
                        src="/assets/scrollDownWhite.png"
                        alt="scroll-down-icon"
                    />
                </div>
            </div>
        </section>
    );
}
