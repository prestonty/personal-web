import { useState, useEffect } from "react";

// import Navbutton from "./components/Navbar";
// import Header from "./components/Header";
import { SocialIcon } from "react-social-icons";
import Footer from "./components/footer";

import Navbar from "./components/Navbar";
import Laptop from "./components/Laptop";
import Playlist from "./components/Playlist";
import Project from "./components/Project";
// import Document from "./components/Document";
import Earth from "./components/Earth";

function App() {
    // Home ----------------------------------------------------------------------------------
    const roles = [
        "Software Developer",
        "Designer", // press X to doubt
        "Martial Artist",
        "Gamer",
        "Traveler",
    ];
    const [roleCounter, setRoleCounter] = useState(0);
    const [role, setRole] = useState(roles[roleCounter]);
    const [roleAnimation, setRoleAnimation] = useState("");

    // Travelling ----------------------------------------------------------------------------------
    const destinations = [
        "Los Angeles",
        "Las Vegas",
        "New York City",
        "日本", // I need to make a separate collage for 2024 Japan trip
        // "香港", // remove for now because I lost the photos
        // "Korea",
        // "Taiwan",
        "England",
        "France",
        "Italy",
    ];
    const [destination, setDestination] = useState("Los Angeles"); // Japan
    const [destinationAnimation, setDestinationAnimation] = useState("");

    const hackathons = [
        { name: "DeltaHacks 9", school: "McMaster University" },
        { name: "MetHacks 2023", school: "Toronto Metropolitan University" },
        { name: "Hack the North 10", school: "University of Waterloo" },
        { name: "Hack the Valley 8", school: "U of T Scarborough" },
        { name: "Hack Western 10", school: "Western University" },
        { name: "UofTHacks 11", school: "University of Toronto" },
        { name: "Hack the Valley 9 (Organizer)", school: "U of T Scarborough" },
        { name: "DeltaHacks X", school: "McMaster University" },
        { name: "Hack the 6ix", school: "York University" },
    ];

    const extracurriculars = [
        {
            title: "Martial Arts",
            blurb: "Taekwondo black belt; love drills & sparring.",
        },
        { title: "Running", blurb: "Long-distance routes, steady base miles." },
        {
            title: "Badminton",
            blurb: "Casual games; quick footwork, good rallies.",
        },
        {
            title: "Retro Games",
            blurb: "Hunting for vintage cartridges & consoles.",
        },
    ];

    // For making destination animation play after each switch
    useEffect(() => {
        // Update the class to trigger animation restart
        setDestinationAnimation("animate-fade-right");

        // Optional: Delay the removal of the animation class to let it play
        const timeoutId = setTimeout(() => {
            setDestinationAnimation("");
        }, 400); // Adjust the timeout based on your animation duration

        // Cleanup the timeout to avoid memory leaks
        return () => clearTimeout(timeoutId);
    }, [destination]);

    // // Hook to change the roles automatically every few seconds
    // useEffect(() => {
    //     setRoleAnimation('animate-fade-up')
    //     const timeoutId = setTimeout(() => {
    //         setRoleAnimation('');
    //     }, 3000);

    //     const intervalId = setInterval(() => {
    //         // iterate index
    //         setRoleCounter(roleCounter + 1);
    //         if(roleCounter >= roles.length - 1) {
    //             setRoleCounter(0);
    //         }
    //         // Set the role
    //         setRole(roles[roleCounter]);
    //       }, 4000);

    //       // Clean up the interval when the component is unmounted or dependencies change
    //       return () => {clearInterval(intervalId); clearTimeout(timeoutId)};

    // })

    // // Role changing animations
    // useEffect(() => {
    //     setRoleAnimation('animate-fade-up')
    //     const timeoutId = setTimeout(() => {
    //         setRoleAnimation('');
    //     }, 400);

    //     return () => clearTimeout(timeoutId);
    // })

    return (
        <div className="App">
            <div className="bg-black text-white font-regular font-work-sans">
                <div id="home"></div>
                {/* Trick the navbar into navigating here when clicking on logo */}
                <Navbar />
                {/* HOME START ------------------------------------------------------- */}
                <section>
                    <div className="mx-[4rem] w-auto h-[700px]">
                        {/* home page (Who am I) (software engineer, web developer, martial artist, etc) */}
                        <div className="flex h-[420px] mt-[6rem] items-center justify-center">
                            {/* mr-36 mb-[25rem]*/}
                            <div className="xs:mr-8 sm:mr-8 md:mr-10 lg:mr-20 xl:mr-36">
                                <h1 className="animate-fade-up animate-duration-[1000ms] animate-ease-out animate-delay-[2000ms] 2xs:text-xl sm:text-2xl md:text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold">
                                    Preston Tom-Ying
                                </h1>

                                <div className="sm:mt-4 md:mt-8 lg:mt-12 xl:mt-16">
                                    <div className="animate-fade-up animate-duration-[800ms] animate-ease-out animate-delay-[2500ms] 2xs:text-xs xs:text-xs sm:text-sm md:text-sm lg:text-lg xl:text-xl">
                                        <p className="inline-block">
                                            Hi, I am a&nbsp;
                                        </p>
                                        <p
                                            className={`inline-block ${roleAnimation} animate-duration-[400ms] animate-ease-out`}
                                        >
                                            {role}
                                        </p>
                                    </div>
                                    {/* MAKE THE FONT SIZE SCALABLE RESPONSIVE WEB DESIGN!!! */}
                                    <p className="animate-fade-up animate-duration-[800ms] animate-ease-out animate-delay-[3000ms] 2xs:text-xs xs:text-xs sm:text-sm md:text-sm lg:text-lg xl:text-xl">
                                        Systems Design Engineering @ UWaterloo
                                    </p>
                                </div>
                                {/* small footer containing socials and link to resume (view matthew ao for reference) */}
                                {/* linkedIn, Instagram, Github, Resume */}
                                <div className="mt-28 flex items-center animate-fade-up animate-duration-[800ms] animate-ease-out animate-delay-[3500ms]">
                                    <SocialIcon
                                        className="hover:bg-blue duration-300"
                                        url="https://github.com/prestonty"
                                        target="_blank"
                                        rel="noreferrer"
                                        bgColor="transparent"
                                        fgColor="white"
                                    />
                                    <SocialIcon
                                        className="hover:bg-blue duration-300"
                                        url="https://linkedin.com/in/prestonty"
                                        target="_blank"
                                        rel="noreferrer"
                                        bgColor="transparent"
                                        fgColor="white"
                                    />
                                    <a
                                        className="font-black text-2xl ml-3 hover:text-blue duration-300"
                                        href="https://drive.google.com/file/d/1AApH9YLQK7FYy8OpPeUa9X4KUHUlYAyC/view"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Resume
                                    </a>
                                </div>
                            </div>
                            {/* Simple div to contain the image for resizing. Image will never exceed 400px and will resize based on screen size*/}
                            <div className="w-[400px]">
                                <img
                                    className="text-center animate-fade-right animate-duration-[2000ms] animate-ease-out animate-delay-[3500ms]"
                                    src="assets\self-photos\CircleProfile.png"
                                    // width={400}
                                    max-width="100%"
                                    height="auto"
                                    alt="profile-pic"
                                />
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <img
                                className="mt-20 animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-in-out"
                                src="assets\scrollDownWhite.png"
                                alt="scroll-down-icon"
                            />
                        </div>
                    </div>
                </section>
                <section
                    id="about"
                    className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16"
                >
                    {/* Heading */}
                    <h3 className="text-4xl font-light text-center mb-6">
                        About Me
                    </h3>

                    {/* Intro paragraph */}
                    <p className="mx-auto max-w-3xl text-center text-sm sm:text-base md:text-lg lg:text-xl font-normal text-balance">
                        It started off as fun trips to visit friends from other
                        universities, but it slowly evolved into a strange
                        obsession. I’m aiming to visit all the major Canadian
                        universities through their hackathons before I graduate.
                        So far I’ve been to:
                    </p>

                    {/* Hackathons grid */}
                    <div className="mt-10 grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-1/4">
                        {hackathons.map((h) => (
                            <div
                                key={h.name}
                                className="rounded-2xl border border-black/5 bg-white/70 dark:bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow p-5 md:p-6 lg:p-7"
                            >
                                <div className="flex items-start gap-3">
                                    <span
                                        aria-hidden
                                        className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-current"
                                    />
                                    <div>
                                        <h4 className="text-lg md:text-xl lg:text-2xl font-medium leading-tight">
                                            {h.name}
                                        </h4>
                                        <p className="text-sm md:text-base opacity-70">
                                            {h.school}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center 2xs:text-xs xs:text-xs sm:text-sm md:text-sm lg:text-lg xl:text-xl font-normal mt-12">
                        My current career interests focus on learning backend
                        engineering, including scalable system design, database
                        architecture, and machine learning infrastructure. In my
                        free time, I practice martial arts, play casual
                        badminton, run long distances, and rummage for vintage
                        video games.
                    </p>
                </section>
                {/* HOME END ------------------------------------------------------- */}
                {/* FUN CORNER START ------------------------------------------------------- */}
                <section id="fun" className="mt-20 m-auto w-auto h-[600px]">
                    <h3 className="text-4xl font-light text-center mb-16">
                        Code Jam Corner
                    </h3>
                    <div className="flex justify-center">
                        {/* <img className="absolute mt-[100px] mr-[150px]" src="assets/purpleDots.png" /> */}
                        <Playlist />
                        {/* w-[600px] h-[485px] */}
                        <div className="relative group w-[600px] h-[485px] hidden md:block">
                            {/* Hover text */}
                            <p className="pointer-events-none absolute top-2 left-4 z-10 text-silver opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                Click on the laptop and press WASD!
                            </p>

                            {/* Ensure the laptop fills the hover area */}
                            <div className="absolute inset-0">
                                <Laptop />
                            </div>
                        </div>
                    </div>
                </section>
                {/* FUN CORNER END ------------------------------------------------------- */}
                {/* PROJECTS START ------------------------------------------------------- */}
                <section
                    id="projects"
                    className="2xs:mx-4 xs:mx-4 sm:mx-4 md:mx-12 lg:mx-20 xl:mx-24 2xl:mx-28 mt-[180px] w-auto h-[860px] mb-32"
                >
                    <h2
                        className="text-center font-semibold text-6xl"
                        id="#projects"
                    >
                        Projects
                    </h2>
                    <div className="flex items-center justify-center mt-8">
                        <Project
                            src="assets\project-photos\pokeGuesser.png"
                            title={"PokeGuesser"}
                            category={"Web Development"}
                            link={"https://poke-guesser-pink.vercel.app/"}
                        />
                        <Project
                            src="assets\project-photos\bliss.png"
                            title={"bliss"}
                            category={"Web Development"}
                            link={"https://devpost.com/software/bliss-wtaofu?"}
                        />
                    </div>
                </section>
                {/* PROJECTS END ------------------------------------------------------- */}
                {/* EXPERIENCE START ------------------------------------------------------- */}
                {/* <section id="experience" className="items-center mx-[15rem] border-2 w-auto h-[860px] mb-32">
                    <h2 className="font-semibold text-6xl" id="#experience">
                        Experience
                    </h2> */}
                {/* <Document /> */}
                {/* make components containing elements to projects */}
                {/* name of project, picture of project, brief description, technologies used (in expanded section) */}
                {/* I SHOULD PUT THE LOGOS OF ALL THE COMPANIES I WORKED FOR ON THE WEBSITE, KINDA LIKE SPONSORS BUT NOT REALLY?? idk if this a good idea */}
                {/* HACKATHONS MIGHT ACTUALLY BE WORTHY, PUT UNIVERSITY LOGOS*/}
                {/* </section> */}
                {/* EXPERIENCE END ------------------------------------------------------- */}
                {/* TRAVELS START ------------------------------------------------------- */}
                <section
                    id="travels"
                    // mx-[15rem]
                    // items-center w-auto mb-32 border-2
                    className="flex flex-col items-center justify-center mx-auto mb-32"
                >
                    <h2
                        className={`font-semibold my-12 ${destinationAnimation} animate-duration-[400ms] animate-ease-out 2xs:text-2xl xs:text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-6xl 2xl:text-6xl`}
                        id="#travels"
                    >
                        Welcome to {destination}
                    </h2>
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
                        <div className="w-[500px] h-[450px] hidden lg:block">
                            <Earth />
                        </div>

                        {/* Travel Collage Photo Display */}
                        <img
                            className="w-full max-w-[800px] h-auto object-contain px-4"
                            src={`/assets/self-photos/travel-collage/${destination.replaceAll(
                                " ",
                                ""
                            )}.webp`}
                            alt="Destination"
                            // MAKE THIS RESPONSIVE LATER
                        />
                    </div>

                    {/* Country/Place List */}
                    {/* im thinking we got the overwatch announcer voice saying "Welcome to... Los Angeles" */}
                    <div className="flex flex-wrap items-center justify-center mt-10 mx-4 gap-2 lg:gap-x-2">
                        {destinations.map((dest, index) => (
                            <button
                                className="border-2 border-gray-300 text-black hover:text-white hover:border-blue-400 hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg overflow-hidden"
                                key={index}
                                onClick={() => setDestination(dest)}
                            >
                                <img
                                    src={`/assets/destination-icons/${dest.replaceAll(
                                        " ",
                                        ""
                                    )}Icon.png`}
                                    alt="Destination"
                                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[200px] lg:h-auto hover:brightness-110 transition-all duration-300"
                                />
                                {console.log(dest.replaceAll(" ", ""))}
                            </button>
                        ))}
                    </div>

                    {/* make a globe that you can interact with with dots with all the countries you visited (Too hard for now) */}
                </section>
                {/* TRAVELS END ------------------------------------------------------- */}
                <Footer />
            </div>
        </div>
    );
}

export default App;
