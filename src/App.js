import Navbutton from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import Laptop from "./components/Laptop";
import Playlist from "./components/Playlist";
import Project from "./components/Project";
import Document from "./components/Document";

function App() {
    let role = "Software Developer";

    return (
        <div className="App">
            <div className="bg-black text-white font-regular font-work-sans">
                {/* Header */}
                <Navbar />

                {/* HOME START ------------------------------------------------------- */}
                <div
                    id="#home"
                    class="mx-[15rem] px-[100px] w-[1440px] h-[790px]"
                >
                    {/* home page (Who am I) (software engineer, web developer, martial artist, etc) */}
                    <div class="flex h-[420px] mt-[6rem] items-center justify-center">
                        {/* mr-36 mb-[25rem]*/}
                        <div class="mr-36">
                            <h1 class="animate-fade-up animate-duration-[1000ms] animate-ease-out animate-delay-[1500ms] text-7xl font-semibold">
                                Preston Tom-Ying
                            </h1>

                            <div class="mt-16">
                                <p class="animate-fade-up animate-duration-[800ms] animate-ease-out animate-delay-[2000ms] text-2xl">
                                    Hi, I am a Software Developer
                                </p>
                                <p class="animate-fade-up animate-duration-[800ms] animate-ease-out animate-delay-[2500ms] text-2xl">
                                    Systems Design Engineering @ UWaterloo
                                </p>
                            </div>
                        </div>
                        <img
                            class="text-center animate-fade-right animate-duration-[2000ms] animate-ease-out animate-delay-[1000ms]"
                            src="assets\self-photos\profile-pic.png"
                            width={400}
                        />
                    </div>

                    <img
                        class="ml-[570px] mt-20 animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-in-out"
                        src="assets\scrollDownWhite.png"
                    />
                </div>
                {/* HOME END ------------------------------------------------------- */}

                {/* FUN CORNER START ------------------------------------------------------- */}
                <div id="#fun" class="m-auto px-[50px] w-[1440px] h-[600px]">
                    <h3 class="text-4xl font-light text-center mb-16">
                        Code Jam Corner
                    </h3>
                    <div class="flex">
                        <Playlist />
                        <div class="w-[600px] h-[485px]">
                            <p class="absolute mt-8 ml-40 text-silver">
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
                    class="mx-[15rem] px-[100px] mt-[180px] w-[1440px] h-[860px] mb-32"
                >
                    <h2 class="font-semibold text-6xl" id="#projects">
                        Projects
                    </h2>
                    <div class="flex items-center justify-center mt-8">
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

                {/* I AM REMOVING THIS SECTION FOR NOW CAUSE IT PISSES ME OFF */}
                {/* EXPERIENCE START ------------------------------------------------------- */}
                {/* <div id="#experience" class="items-center mx-[15rem] px-[100px] border-2 w-[1440px] h-[860px] mb-32">
                    <h2 class="font-semibold text-6xl" id="#experience">
                        Experience
                    </h2> */}
                {/* <Document /> */}
                {/* make components containing elements to projects */}
                {/* name of project, picture of project, brief description, technologies used (in expanded section) */}
                {/* I SHOULD PUT THE LOGOS OF ALL THE COMPANIES I WORKED FOR ON THE WEBSITE, KINDA LIKE SPONSORS BUT NOT REALLY?? idk if this a good idea */}
                {/* HACKATHONS MIGHT ACTUALLY BE WORTHY */}
                {/* </div> */}
                {/* EXPERIENCE END ------------------------------------------------------- */}

                {/* TRAVELS START ------------------------------------------------------- */}
                <div
                    id="#travels"
                    class="items-center mx-[15rem] px-[100px] border-2 w-[1440px] h-[860px] mb-32"
                >
                    <h2 class="font-semibold text-6xl" id="#travels">
                        Travels
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                    {/* make a globe that you can interact with with dots with all the countries you visited */}
                </div>
                {/* TRAVELS END ------------------------------------------------------- */}

                <Footer />
            </div>
        </div>
    );
}

export default App;
