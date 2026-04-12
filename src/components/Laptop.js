'use client';

import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function Laptop() {
    return (
        <Spline
            class=""
            scene="https://prod.spline.design/e8oyNwjFih9u2Kqg/scene.splinecode"
        />
    );
}
