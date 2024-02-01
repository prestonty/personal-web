import Navbutton from "./components/navbutton.js";
import SlideImage from "./components/slideImage.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";

function App() {
    let role = "Software Developer";

    return (
        <div className="App">
            <div className="bg-[#1a1c24]">
            {/* Header */}
            {/* <Header /> */}
            {/* <button className="bg-[#252a36]">YOOO</button> */}
            {/* main body */}
            <div class="">
                {/* home page (Who am I) (software engineer, web developer, martial artist, etc) */}
                <h1 className="animate-fade-up animate-duration-[1000ms] animate-ease-in animate-delay-[200ms] text-8xl font-work-sans font-semibold font-white">
                    Preston Tom-Ying
                </h1>

                <p class="animate-fade-up animate-duration-[1000ms] animate-ease-in animate-delay-[1000ms]">
                    Systems Design Engineering @ UWaterloo
                </p>

                <p class="animate-fade-up animate-duration-[1000ms] animate-ease-in animate-delay-[1500ms]">
                    Hi, I am a Software Developer
                </p>

                <SlideImage
                    src="/assets/self-photos/newyork_square.jpg"
                    width={400}
                    // height={200}
                />

                {/* projects (dont put experiences, lame) */}
                <h2>Projects</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>

                {/* make components containing elements to projects */}
                {/* name of project, picture of project, brief description, technologies used (in expanded section) */}

                {/* HACKATHONS MIGHT ACTUALLY BE WORTHY */}

                {/* Travels */}
                <h2 id="#travels">Travels</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
                {/* make a globe that you can interact with with dots with all the countries you visited */}
            </div>

            {/* <Navbutton text="Countries"></Navbutton> */}
            <Footer />
            </div>
        </div>
    );
}

export default App;
