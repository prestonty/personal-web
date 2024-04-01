import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export default function Navbar(props) {
    // Optional tailwind (add this when u call this element: bg-cloudBurst, text-[white], )
    return (
        <div class="bg-blue h-32">
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
                <li class="">
                    <Link activeClass="active" smooth spy to="Experience">Experience</Link>
                </li>
                <li class="">
                    <Link activeClass="active" smooth spy to="travels">Travels</Link>
                </li>
            </ul>
        </div>
    );
}
