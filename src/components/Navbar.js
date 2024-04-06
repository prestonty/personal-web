import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { useState, useEffect } from 'react';

export default function Navbar(props) {
    // Optional tailwind (add this when u call this element: bg-cloudBurst, text-[white], )
    const [isSticky, setIsSticky] = useState(true); // sticks to the top of the webpage
    const [sticky, setSticky] = useState("sticky top-0"); // sticks to the top of the webpage
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if(prevScrollPos > currentScrollPos) {
                setSticky("sticky top-0");
                setIsSticky(true)
            } else {
                setSticky("top-0");
                setIsSticky(false)
            }
            setPrevScrollPos(currentScrollPos);
        }

        window.addEventListener('scroll', handleScroll); // event listener linked to when user is scrolling

        // supposed to remove the event listener when the component unmounts or when the effect is rerun. This optimizes memory
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <div class={`bg-nightBlack h-32 ${sticky} shadow-lg z-20 transform transition-transform duration-500`}>
            <ul class="text-white font-semibold font-work-sans text-4xl flex justify-evenly items-center">
                <li class="mt-4">
                    <Link activeClass="active" smooth spy to="home">
                        <img
                            src="assets\logos\white-logo.png"
                            width={172}
                            height={89}
                            alt="logo"
                        />
                    </Link>
                </li>
                <li class="">
                    <Link activeClass="active" smooth spy to="projects">Projects</Link>
                </li>
                {/* <li class="">
                    <Link activeClass="active" smooth spy to="Experience">Experience</Link>
                </li> */}
                <li class="">
                    <Link activeClass="active" smooth spy to="travels">Travels</Link>
                </li>
            </ul>
        </div>
    );
}
