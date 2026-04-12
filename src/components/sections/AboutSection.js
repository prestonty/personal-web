const hackathons = [
    { name: "YRHacks", school: "York Region" },
    { name: "DeltaHacks 9", school: "McMaster University" },
    { name: "MetHacks 2023", school: "Toronto Metropolitan University" },
    { name: "Hack the North 10", school: "University of Waterloo" },
    { name: "Hack the Valley 8", school: "U of T Scarborough" },
    { name: "Hack Western 10", school: "Western University" },
    { name: "UofTHacks 11", school: "University of Toronto" },
    { name: "Hack the Valley 9 (Organizer)", school: "U of T Scarborough" },
    { name: "DeltaHacks X", school: "McMaster University" },
    { name: "UofTHacks 12", school: "University of Toronto" },
    { name: "Hack the 6ix", school: "York University" },
];

export default function AboutSection() {
    return (
        <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
            <h3 className="text-4xl font-light text-center mb-6">About Me</h3>

            <p className="mx-auto max-w-3xl text-center text-sm sm:text-base md:text-lg lg:text-xl font-normal text-balance">
                It started off as fun trips to visit friends from other universities, but it slowly
                evolved into a strange obsession. I'm aiming to visit all the major Canadian
                universities through their hackathons before I graduate. So far I've been to:
            </p>

            <div className="mt-10 grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-1/4">
                {hackathons.map((h) => (
                    <div
                        key={h.name}
                        className="rounded-2xl border border-black/5 bg-white/10 dark:bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow p-5 md:p-6 lg:p-7"
                    >
                        <div className="flex items-start gap-3">
                            <span aria-hidden className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-current" />
                            <div>
                                <h4 className="text-lg md:text-xl lg:text-2xl font-medium leading-tight">
                                    {h.name}
                                </h4>
                                <p className="text-sm md:text-base opacity-70">{h.school}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-center 2xs:text-xs xs:text-xs sm:text-sm md:text-sm lg:text-lg xl:text-xl font-normal mt-12">
                My current career interests focus on learning backend engineering, including scalable
                system design, database architecture, and machine learning infrastructure. In my free
                time, I practice martial arts, play casual badminton, run long distances, and rummage
                for vintage video games.
            </p>
        </section>
    );
}
