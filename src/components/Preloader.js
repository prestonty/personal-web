'use client';

import { motion, useReducedMotion } from "framer-motion";

// Geometry for the thin progress arc that wraps the profile photo.
const SIZE = 112;          // svg viewport (px)
const STROKE = 2;          // arc thickness
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function Preloader({ progress = 0 }) {
    const reduceMotion = useReducedMotion();
    const dashoffset = CIRCUMFERENCE * (1 - Math.min(Math.max(progress, 0), 1));

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div
                className="relative flex items-center justify-center"
                style={{ width: SIZE, height: SIZE }}
            >
                {/* Thin progress arc */}
                <svg
                    className="absolute inset-0 -rotate-90"
                    width={SIZE}
                    height={SIZE}
                    viewBox={`0 0 ${SIZE} ${SIZE}`}
                >
                    <circle
                        cx={SIZE / 2}
                        cy={SIZE / 2}
                        r={RADIUS}
                        fill="none"
                        stroke="#252a36"
                        strokeWidth={STROKE}
                    />
                    <circle
                        cx={SIZE / 2}
                        cy={SIZE / 2}
                        r={RADIUS}
                        fill="none"
                        stroke="#4968E4"
                        strokeWidth={STROKE}
                        strokeLinecap="round"
                        strokeDasharray={CIRCUMFERENCE}
                        strokeDashoffset={dashoffset}
                        // Progress is eased per-frame upstream, so a short
                        // transition just smooths sub-frame jitter without lag.
                        style={{ transition: "stroke-dashoffset 0.1s linear" }}
                    />
                </svg>

                {/* Small circular profile photo with a gentle breathe */}
                <motion.img
                    src="/assets/self-photos/CircleProfile.webp"
                    alt="Loading"
                    className="relative h-20 w-20 rounded-full object-cover"
                    animate={reduceMotion ? {} : { scale: [1, 1.06, 1] }}
                    transition={
                        reduceMotion
                            ? undefined
                            : { duration: 0.6, ease: "easeInOut", repeat: Infinity }
                    }
                />
            </div>
        </motion.div>
    );
}
