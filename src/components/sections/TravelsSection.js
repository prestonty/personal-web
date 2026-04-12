'use client';

import { useState, useEffect } from "react";
import Earth from "../Earth";

const destinations = [
    "Los Angeles",
    "Las Vegas",
    "New York City",
    "日本", // I need to make a separate collage for 2024 Japan trip
    // "香港", // remove for now because I lost the photos
    // "Korea",
    // "Taiwan",
    "England",
    "France",
    "Italy",
];

export default function TravelsSection() {
    const [destination, setDestination] = useState("Los Angeles");
    const [destinationAnimation, setDestinationAnimation] = useState("");

    useEffect(() => {
        setDestinationAnimation("animate-fade-right");
        const timeoutId = setTimeout(() => setDestinationAnimation(""), 400);
        return () => clearTimeout(timeoutId);
    }, [destination]);

    return (
        <section id="travels" className="flex flex-col items-center justify-center mx-auto mb-32">
            <h2
                className={`font-semibold my-12 ${destinationAnimation} animate-duration-[400ms] animate-ease-out 2xs:text-2xl xs:text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-6xl 2xl:text-6xl`}
            >
                Welcome to {destination}
            </h2>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
                <div className="w-[500px] h-[450px] hidden lg:block">
                    <Earth />
                </div>
                {/* Travel Collage Photo Display */}
                <img
                    className="w-full max-w-[800px] h-auto object-contain px-4"
                    src={`/assets/self-photos/travel-collage/${destination.replaceAll(" ", "")}.webp`}
                    alt="Destination"
                />
            </div>

            {/* Country/Place List */}
            <div className="flex flex-wrap items-center justify-center mt-10 mx-4 gap-2 lg:gap-x-2">
                {destinations.map((dest, index) => (
                    <button
                        key={index}
                        className="border-2 border-gray-300 text-black hover:text-white hover:border-blue-400 hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg overflow-hidden"
                        onClick={() => setDestination(dest)}
                    >
                        <img
                            src={`/assets/destination-icons/${dest.replaceAll(" ", "")}Icon.png`}
                            alt={dest}
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[200px] lg:h-auto hover:brightness-110 transition-all duration-300"
                        />
                    </button>
                ))}
            </div>
        </section>
    );
}
