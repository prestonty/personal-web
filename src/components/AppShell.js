'use client';

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingContext } from "./LoadingContext";
import Preloader from "./Preloader";

const HERO_IMAGE = "/assets/self-photos/CircleProfile.webp";
const MIN_DISPLAY_DESKTOP_MS = 1200;
const MIN_DISPLAY_MOBILE_MS = 600;

export default function AppShell({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const [ready, setReady] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let cancelled = false;

        // Lock scroll while the loader is up.
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        // On mobile the overlay is the floor for FCP/LCP, so keep it short and
        // don't block on fonts (next/font loads them with `swap`, non-blocking).
        const isMobile = window.matchMedia("(max-width: 767px)").matches;
        const MIN_DISPLAY_MS = isMobile ? MIN_DISPLAY_MOBILE_MS : MIN_DISPLAY_DESKTOP_MS;

        // Gating tasks: hero image loaded (+ fonts on desktop). We don't tie the
        // arc directly to these (a couple events makes a jumpy fill) — instead we
        // flip a flag and let the rAF loop ease the arc smoothly.
        let assetsReady = false;
        const imagePromise = new Promise((resolve) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = HERO_IMAGE;
        });
        const gates = isMobile
            ? [imagePromise]
            : [document.fonts ? document.fonts.ready : Promise.resolve(), imagePromise];
        Promise.all(gates)
            .then(() => {
                assetsReady = true;
            })
            .catch(() => {
                assetsReady = true;
            });

        // Continuously ease the arc toward a cap each frame for a fluid fill.
        // It climbs to ~90% while loading, then completes to 100% once the
        // assets are ready and the minimum display time has elapsed.
        const start = performance.now();
        let current = 0;
        let raf;

        const tick = (now) => {
            if (cancelled) return;

            const done = assetsReady && now - start >= MIN_DISPLAY_MS;
            const cap = done ? 1 : 0.9;
            current += (cap - current) * 0.06;
            if (done && cap - current < 0.005) current = 1;
            setProgress(current);

            if (done && current >= 1) {
                setIsLoading(false);
                document.body.style.overflow = previousOverflow;
                return;
            }
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);

        return () => {
            cancelled = true;
            cancelAnimationFrame(raf);
            document.body.style.overflow = previousOverflow;
        };
    }, []);

    return (
        <LoadingContext.Provider value={{ ready }}>
            <AnimatePresence onExitComplete={() => setReady(true)}>
                {isLoading && <Preloader progress={progress} />}
            </AnimatePresence>
            {children}
        </LoadingContext.Provider>
    );
}
