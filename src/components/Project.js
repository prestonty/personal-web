// React Spring for animations
// import { animated, useSpring } from "@react-spring/web";
// import { useState, useEffect } from "react";
// TODO
{
    /* I NEED TO PLAT THE ANIMATION WHEN IT COMES INTO SCROLL VIEW, NOT WHEN U REFRESH WEBSITE!!! */
}
{
    /* add icon to learn more (short description of tech stack expand down) */
}

export default function Project(props) {
    return (
        // <animated.div style={animateProps}>
        <div class="font-work-sans m-10">
            <a
                class="inline-block"
                href={props.link}
                target="_blank"
                rel="noreferrer"
            >
                <img
                    class="border-4 hover:text-blue duration-500"
                    // old animation: animate-fade-up animate-once animate-duration-[2200ms] animate-delay-500 animate-ease-out
                    src={props.src}
                    alt="project"
                />
            </a>
            <p class="text-silver text-xl mt-4 mb-2">{props.category}</p>
            <a
                class="inline"
                href={props.link}
                target="_blank"
                rel="noreferrer"
            >
                <p class="inline text-white text-3xl hover:text-blue duration-500">
                    {props.title}
                </p>
            </a>
        </div>
        // </animated.div>
    );
}
