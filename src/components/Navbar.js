import {
    Link,
    Button,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
} from "react-scroll";
import { useState, useEffect } from "react";

export default function Navbar(props) {
    // Optional tailwind (add this when u call this element: bg-cloudBurst, text-[white], )
    const [isSticky, setIsSticky] = useState(true); // sticks to the top of the webpage
    const [sticky, setSticky] = useState("sticky top-0"); // sticks to the top of the webpage
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (prevScrollPos > currentScrollPos) {
                setSticky("sticky top-0");
                setIsSticky(true);
            } else {
                setSticky("top-0");
                setIsSticky(false);
            }
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll); // event listener linked to when user is scrolling

        // supposed to remove the event listener when the component unmounts or when the effect is rerun. This optimizes memory
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <div
            className={`bg-nightBlack h-32 ${sticky} shadow-lg z-20 transform transition-transform duration-500`}
        >
            <ul className="text-white font-semibold font-work-sans sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl flex justify-evenly items-center">
                <li className="mt-4">
                    <Link activeClass="active" smooth spy to="home">
                        {/* Logo will not exceed 172px size (DO NOT CHANGE THIS VALUE, IT IS OPTIMAL SIZE FOR IMAGE QUALITY); didnt do anything */}
                        <div className="w-[172px]">
                            <img
                                className="hover:bg-blue duration-500 cursor-pointer"
                                src="assets\logos\white-logo.png"
                                max-width="100%"
                                height="auto"
                                alt="logo"
                            />
                        </div>
                    </Link>
                </li>
                <li className="">
                    <Link
                        className="hover:text-blue duration-300 cursor-pointer"
                        activeClass="active"
                        smooth
                        spy
                        to="projects"
                    >
                        Projects
                    </Link>
                </li>
                {/* <li className="">
                    <Link activeClass="active" smooth spy to="Experience">Experience</Link>
                </li> */}
                <li className="">
                    <Link
                        className="hover:text-blue duration-300 cursor-pointer"
                        activeClass="active"
                        smooth
                        spy
                        to="travels"
                    >
                        Travels
                    </Link>
                </li>
            </ul>
        </div>
    );
}
