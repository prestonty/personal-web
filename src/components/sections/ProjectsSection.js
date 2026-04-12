import Project from "../Project";

const projects = [
    {
        src: "/assets/project-photos/investoryx.webp",
        title: "InvestoryX",
        category: "Stock Analytics Platform",
        link: "https://www.investoryx.ca/",
        github: "https://github.com/prestonty/InvestoryX",
        height: 220,
        star: true,
    },
    {
        src: "/assets/project-photos/trailmixer.webp",
        title: "TrailMixer",
        category: "AI Powered Video Editor",
        link: "https://devpost.com/software/trailmixer",
        github: "https://github.com/prestonty/Trailmixer-frontend",
        height: 220,
    },
    {
        src: "/assets/project-photos/linguistify.webp",
        title: "Linguistify",
        category: "Video Dubbing Software",
        link: "https://devpost.com/software/linguistify",
        github: "https://github.com/prestonty/Linguistify",
        height: 220,
    },
    {
        src: "/assets/project-photos/bliss.webp",
        title: "bliss",
        category: "Web Development",
        link: "https://devpost.com/software/bliss-wtaofu?",
        github: "https://github.com/prestonty/bliss",
        height: 410,
    },
    {
        src: "/assets/project-photos/ai-girlfriend.webp",
        title: "AI Girlfriend",
        category: "",
        link: "https://github.com/prestonty/AI-GIRLFRIEND",
        github: "https://github.com/prestonty/AI-GIRLFRIEND",
        height: 410,
    },
];

export default function ProjectsSection() {
    return (
        <section
            id="projects"
            className="2xs:mx-4 xs:mx-4 sm:mx-4 md:mx-12 lg:mx-20 xl:mx-24 2xl:mx-28 mt-[180px] w-auto mb-32"
        >
            <h2 className="text-center font-semibold text-6xl">Projects</h2>
            <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 max-w-7xl mx-auto">
                {projects.map((p) => (
                    <Project key={p.title} {...p} />
                ))}
            </div>
        </section>
    );
}
