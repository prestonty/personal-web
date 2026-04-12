'use client';

const experiences = [
    {
        title: "Software Engineer",
        company: "Carta",
        logo: "/assets/logos/carta-logo.png",
        term: "Winter 2026",
        url: "https://carta.com/",
    },
    {
        title: "Software Engineer",
        company: "Miovision",
        logo: "/assets/logos/miovision-logo.png",
        term: "Summer 2025",
        url: "https://miovision.com/",
    },
    {
        title: "Full Stack Developer",
        company: "BTNX",
        logo: "/assets/logos/btnx-logo.png",
        term: "Fall 2024",
        url: "https://www.btnx.com/",
    },
    {
        title: "ML Research Assistant",
        company: "University of Waterloo",
        logo: "/assets/logos/uwaterloo-logo.png",
        term: "Winter 2024",
        url: "https://horesearchgroup.com/",
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
            <h3 className="text-4xl font-light text-center mb-12">Experience</h3>

            <div className="flex flex-col">
                {experiences.map((exp, i) => (
                    <a
                        key={exp.company}
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-5 py-5 hover:opacity-60 transition-opacity duration-200 ${i < experiences.length - 1 ? "border-b border-white/10" : ""}`}
                    >
                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                            <img
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                className="w-10 h-10 object-contain rounded-lg opacity-80"
                                onError={(e) => {
                                    e.target.style.display = "none";
                                    e.target.parentElement.innerHTML =
                                        `<div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/40">${exp.company[0]}</div>`;
                                }}
                            />
                        </div>
                        <div className="flex-1 flex items-center justify-between gap-4">
                            <div className="flex flex-col">
                                <p className="text-base md:text-lg font-bold">{exp.company}</p>
                                <p className="text-base text-white/50 md:text-lg font-medium">{exp.title}</p>
                            </div>
                            <p className="text-sm md:text-base text-white/50 text-right">{exp.term}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
