'use client';

import { useState } from "react";
import { SocialIcon } from "react-social-icons";

const roles = [
    "Software Developer",
    "Designer", // press X to doubt
    "Martial Artist",
    "Gamer",
    "Traveler",
];

export default function HeroSection() {
    const [roleCounter, setRoleCounter] = useState(0);
    const [role, setRole] = useState(roles[roleCounter]);
    const [roleAnimation, setRoleAnimation] = useState("");

    return (
        <section>
            <div className="mx-[4rem] w-auto h-[700px]">
                <div className="flex h-[420px] mt-[6rem] items-center justify-center">
                    <div className="xs:mr-8 sm:mr-8 md:mr-10 lg:mr-20 xl:mr-36">
                        <h1 className="animate-fade-up animate-duration-[1000ms] animate-ease-out animate-delay-[2000ms] 2xs:text-xl sm:text-2xl md:text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold">
                            Preston Tom-Ying
                        </h1>

                        <div className="sm:mt-4 md:mt-8 lg:mt-12 xl:mt-16">
                            <div className="animate-fade-up animate-duration-[800ms] animate-ease-out animate-delay-[2500ms] 2xs:text-xs xs:text-xs sm:text-sm md:text-sm lg:text-lg xl:text-xl">
                                <p className="inline-block">Hi, I am a&nbsp;</p>
                                <p className={`inline-block ${roleAnimation} animate-duration-[400ms] animate-ease-out`}>
                                    {role}
                                </p>
                            </div>
                            {/* MAKE THE FONT SIZE SCALABLE RESPONSIVE WEB DESIGN!!! */}
                            <p className="animate-fade-up animate-duration-[800ms] animate-ease-out animate-delay-[3000ms] 2xs:text-xs xs:text-xs sm:text-sm md:text-sm lg:text-lg xl:text-xl">
                                Systems Design Engineering @ UWaterloo
                            </p>
                        </div>

                        <div className="mt-28 flex items-center animate-fade-up animate-duration-[800ms] animate-ease-out animate-delay-[3500ms]">
                            <SocialIcon
                                className="hover:bg-blue duration-300"
                                url="https://github.com/prestonty"
                                target="_blank"
                                rel="noreferrer"
                                bgColor="transparent"
                                fgColor="white"
                            />
                            <SocialIcon
                                className="hover:bg-blue duration-300"
                                url="https://linkedin.com/in/prestonty"
                                target="_blank"
                                rel="noreferrer"
                                bgColor="transparent"
                                fgColor="white"
                            />
                            <a
                                className="font-black text-2xl ml-3 hover:text-blue duration-300"
                                href="https://drive.google.com/file/d/1eCCiZEa7RhhyalzLQQ-7LC3VacU8i6Ts/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Resume
                            </a>
                        </div>
                    </div>

                    <div className="w-[400px]">
                        <img
                            className="text-center animate-fade-right animate-duration-[2000ms] animate-ease-out animate-delay-[3500ms]"
                            src="/assets/self-photos/CircleProfile.webp"
                            max-width="100%"
                            height="auto"
                            alt="profile-pic"
                        />
                    </div>
                </div>

                <div className="flex justify-center">
                    <img
                        className="mt-20 animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-in-out"
                        src="/assets/scrollDownWhite.png"
                        alt="scroll-down-icon"
                    />
                </div>
            </div>
        </section>
    );
}
