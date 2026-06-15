'use client';

import { useEffect, useState } from "react";

// Renders children only when the media query matches. Because the children
// aren't mounted below the breakpoint, any dynamic import inside them (e.g.
// the Spline 3D runtime + three.js) is never fetched there. Starts false so
// nothing renders on the server or before the first client measurement.
export default function MediaGate({ query, children }) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mql = window.matchMedia(query);
        const update = () => setMatches(mql.matches);
        update();
        mql.addEventListener("change", update);
        return () => mql.removeEventListener("change", update);
    }, [query]);

    return matches ? children : null;
}
