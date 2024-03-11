import {useState} from "react";

// import Navbutton from "./components/Navbar";
// import Header from "./components/Header";
import { SocialIcon } from 'react-social-icons'
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import Laptop from "./components/Laptop";
import Playlist from "./components/Playlist";
import Project from "./components/Project";
// import Document from "./components/Document";
import Earth from "./components/Earth";

import Japan from "./countryPages/Japan";

function App() {
    // let role = "Software Developer";

    const [destination, setDestination] = useState("Japan");

    return (
        <div className="App">
            <div className="bg-black text-white font-regular font-work-sans">
                {/* Header */}
                <Navbar />

                {/* HOME START ------------------------------------------------------- */}
                <div
                    id="#home"
                    className="mx-[15rem] px-[100px] w-auto h-[790px]"
                >
                    {/* home page (Who am I) (software engineer, web developer, martial artist, etc) */}
                    <div className="flex h-[420px] mt-[6rem] items-center justify-center">
                        {/* mr-36 mb-[25rem]*/}
                        <div className="mr-36">
                            <h1 className="animate-fade-up animate-duration-[1000ms] animate-ease-out animate-delay-[1500ms] text-7xl font-semibold">
                                Preston Tom-Ying
                            </h1>

                            <div className="mt-16">
                                <p className="animate-fade-up animate-duration-[800ms] animate-ease-out animate-delay-[2000ms] text-xl">
                                    Hi, I am a Software Developer
                                </p>
                                {/* MAKE THE FONT SIZE SCALABLE RESPONSIVE WEB DESIGN!!! */}
                                <p className="animate-fade-up animate-duration-[800ms] animate-ease-out animate-delay-[2500ms] text-xl">
                                    Systems Design Engineering @ UWaterloo
                                </p>
                            </div>
                        </div>
                        <img
                            className="text-center animate-fade-right animate-duration-[2000ms] animate-ease-out animate-delay-[1000ms]"
                            src="assets\self-photos\profile-pic.png"
                            width={400}
                            alt="profile-pic"
                        />
                    </div>


                    {/* small footer containing socials and link to resume (view matthew ao for reference) */}
                    {/* linkedIn, Instagram, Github, Resume */}
                    <div className="flex items-center">
                        <SocialIcon url="https://github.com/prestonty" target="_blank" rel="noreferrer" bgColor="transparent" fgColor="white" />
                        <SocialIcon url="https://linkedin.com/in/prestonty" target="_blank" rel="noreferrer" bgColor="transparent" fgColor="white" />
                        <a className="font-black text-lg ml-3" href="https://drive.google.com/file/d/1VreSeqKpQftLUILROUmt9HUJr0Q2tXay/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
                    </div>
                    <div className="flex justify-center">
                    <img
                        className="mt-20 animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-in-out"
                        src="assets\scrollDownWhite.png"
                        alt="scroll-down-icon"
                    />
                    </div>
                </div>
                {/* HOME END ------------------------------------------------------- */}

                {/* FUN CORNER START ------------------------------------------------------- */}
                <div id="#fun" className="m-auto w-auto h-[600px]">
                    <h3 className="text-4xl font-light text-center mb-16">
                        Code Jam Corner
                    </h3>
                    <div className="flex justify-center">
                        {/* <img className="absolute mt-[100px] mr-[150px]" src="assets/purpleDots.png" /> */}
                        <Playlist />
                        <div className="w-[600px] h-[485px]">
                            <p className="absolute ml-40 text-silver">
                                Try clicking on the laptop and pressing WASD!
                            </p>
                            <Laptop />
                        </div>
                    </div>
                </div>
                {/* FUN CORNER END ------------------------------------------------------- */}

                {/* PROJECTS START ------------------------------------------------------- */}
                <div
                    id="#projects"
                    className="mx-[15rem] px-[100px] mt-[180px] w-auto h-[860px] mb-32"
                >
                    <h2 className="font-semibold text-6xl" id="#projects">
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
                </div>
                {/* PROJECTS END ------------------------------------------------------- */}

                {/* EXPERIENCE START ------------------------------------------------------- */}
                {/* <div id="#experience" className="items-center mx-[15rem] px-[100px] border-2 w-auto h-[860px] mb-32">
                    <h2 className="font-semibold text-6xl" id="#experience">
                        Experience
                    </h2> */}
                {/* <Document /> */}
                {/* make components containing elements to projects */}
                {/* name of project, picture of project, brief description, technologies used (in expanded section) */}
                {/* I SHOULD PUT THE LOGOS OF ALL THE COMPANIES I WORKED FOR ON THE WEBSITE, KINDA LIKE SPONSORS BUT NOT REALLY?? idk if this a good idea */}
                {/* HACKATHONS MIGHT ACTUALLY BE WORTHY, PUT UNIVERSITY LOGOS*/}
                {/* </div> */}
                {/* EXPERIENCE END ------------------------------------------------------- */}

                {/* TRAVELS START ------------------------------------------------------- */}
                <div
                    id="#travels"
                    // h-[860px] for some reason i made the height here fixed, I removed this for now
                    className="items-center mx-[15rem] px-[100px] border-2 w-auto mb-32"
                >
                    <h2 className="font-semibold text-6xl my-10" id="#travels">
                        Welcome to {destination}
                    </h2>
                    <div className="w-[500px] h-[450px] border-2">
                        <Earth />
                    </div>

                    {/* Country/Place List */}

                    {/* im thinking we got the overwatch announcer voice saying "Welcome to... Los Angeles" */}
                    {/* then each destination has a photo of the city life at night/day*/}
                    {/* upgrade the country logos cause the words arent big enough and the images arent big */}
                    <div className="flex items-center justify-center">
                        <button onClick={() => setDestination("Japan")}>
                            <img src="/assets/self-photos/Flags/JapanIcon.png" alt="Destination" width={200}/>
                        </button>
                        <button onClick={() => setDestination("Hong Kong")}>
                            <img src="/assets/self-photos/Flags/HongKongIcon.png" alt="Destination" width={200}/>
                        </button>
                        <button onClick={() => setDestination("Los Angeles")}>
                            <img src="/assets/self-photos/Flags/LAIcon.png" alt="Destination" width={200}/>
                        </button>
                        <button onClick={() => setDestination("Las Vegas")}>
                            <img src="/assets/self-photos/Flags/LasVegasIcon.png" alt="Destination" width={200}v/>
                        </button>
                        <button onClick={() => setDestination("New York City")}>
                            <img src="/assets/self-photos/Flags/NYCIcon.png" alt="Destination" width={200}/>
                        </button>

                    </div>
                    {/* <Japan/> */}

                    {/* make a globe that you can interact with with dots with all the countries you visited */}
                </div>
                {/* TRAVELS END ------------------------------------------------------- */}
                <Footer />
            </div>
        </div>
    );
}

export default App;
