'use client';

import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function Earth() {
    return (
        <Spline
            class=""
            scene="https://prod.spline.design/djpL1vXaK4YObJHW/scene.splinecode"
        />
    );
}
