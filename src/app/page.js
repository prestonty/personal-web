import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import FunCornerSection from "../components/sections/FunCornerSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import TravelsSection from "../components/sections/TravelsSection";

export default function Home() {
    return (
        <div className="bg-black text-white font-regular font-work-sans">
            <div id="home"></div>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <FunCornerSection />
            <ProjectsSection />
            <TravelsSection />
            <Footer />
        </div>
    );
}
