import Link from "next/link";

export default function AboutSection() {
    return (
        <section id="about" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
            <h3 className="text-4xl font-light text-center mb-10">About Me</h3>

            <p className="text-sm sm:text-base md:text-lg font-normal text-white/80 mb-6">
                It started as fun trips to visit friends at other universities, but slowly evolved
                into a strange obsession where I would try to attend every major Canadian university hackathon before
                graduating. Here's my journey into the hackathon community. {" "}
                <Link
                    href="/hackathons"
                    className="text-white underline underline-offset-4 hover:text-white/60 transition-colors duration-200"
                >
                    Read more here →
                </Link>
            </p>

            <p className="text-sm sm:text-base md:text-lg font-normal text-white/80">
                My current career interests focus on backend engineering, including scalable system
                design, database architecture, and machine learning infrastructure. In my free time,
                I practice martial arts, play casual badminton, run long distances, and rummage for
                vintage video games.
            </p>
        </section>
    );
}
