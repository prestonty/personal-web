'use client';

import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const navLinks = [
    { label: "Experience", to: "experience" },
    { label: "Projects", to: "projects" },
    { label: "Travels", to: "travels" },
];

export default function Navbar() {
    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    return (
        <nav
            className={`
                sticky top-0 z-50
                h-16
                bg-nightBlack/90 backdrop-blur-sm
                border-b border-grey
                px-8
                flex items-center justify-between
                transition-transform duration-300
                ${visible ? "translate-y-0" : "-translate-y-full"}
            `}
        >
            {/* Logo */}
            <Link to="home" smooth spy className="cursor-pointer shrink-0">
                <img
                    src="/assets/logos/white-logo.png"
                    alt="logo"
                    className="h-7 w-auto"
                />
            </Link>

            {/* Nav links */}
            <ul className="flex items-center gap-8 font-work-sans font-medium text-base text-silver">
                {navLinks.map(({ label, to }) => (
                    <li key={to}>
                        <Link
                            to={to}
                            smooth
                            spy
                            className="relative cursor-pointer transition-colors duration-200 hover:text-white group"
                        >
                            {label}
                            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-blue transition-all duration-300 group-hover:w-full" />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
