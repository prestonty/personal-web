'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Project(props) {
    return (
        <motion.div
            className="font-work-sans"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <a
                className="block"
                href={props.link}
                target="_blank"
                rel="noreferrer"
            >
                <div
                    className="relative w-full border-4 overflow-hidden"
                    style={{ height: props.height || "300px" }}
                >
                    <Image
                        className="object-cover duration-500"
                        src={props.src}
                        alt="project"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                </div>
            </a>

            <div className="flex items-center justify-between gap-2 mt-4 mb-2">
                <div className="flex items-center gap-x-2">
                    <p className="text-silver xs:text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                        {props.category}
                    </p>
                    {props.star && (
                        <span className="text-yellow-400 text-lg lg:text-xl xl:text-2xl">
                            ⭐
                        </span>
                    )}
                </div>
                {props.github && (
                    <a href={props.github} target="_blank" rel="noreferrer">
                        <FaGithub
                            className="text-gray-400 text-xl lg:text-2xl xl:text-3xl 
                   transform scale-90 transition-transform duration-300 hover:scale-100 will-change-transform"
                        />
                    </a>
                )}
            </div>

            <a
                className="inline"
                href={props.link}
                target="_blank"
                rel="noreferrer"
            >
                <p className="inline text-white xs:text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl hover:text-blue duration-500">
                    {props.title}
                </p>
            </a>
        </motion.div>
    );
}
