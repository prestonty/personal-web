import Link from "next/link";

const hackathons = [
    { name: "DeltaHacks 9", school: "McMaster University" },
    { name: "YRHacks", school: "York Region" },
    { name: "MetHacks 2023", school: "Toronto Metropolitan University" },
    { name: "Hack the North 10", school: "University of Waterloo" },
    { name: "Hack the Valley 8", school: "U of T Scarborough" },
    { name: "Hack Western 10", school: "Western University" },
    { name: "UofTHacks 11", school: "University of Toronto" },
    { name: "Hack the Valley 9 (Organizer)", school: "U of T Scarborough" },
    { name: "DeltaHacks X", school: "McMaster University" },
    { name: "UofTHacks 12", school: "University of Toronto" },
    { name: "Hack the 6ix", school: "York University" },
    { name: "Hack the Valley X (Organizer)", school: "U of T Scarborough" },
];

export const metadata = {
    title: "Hackathons — Preston Tom-Ying",
    description: "Every hackathon Preston has attended across Canadian universities.",
};

export default function HackathonsPage() {
    return (
        <div className="bg-black text-white font-work-sans min-h-screen">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
                <Link
                    href="/"
                    className="text-sm text-white/40 hover:text-white/70 transition-colors duration-200 mb-12 inline-block"
                >
                    ← Back
                </Link>

                <h1 className="text-4xl font-light mb-2">Hackathons</h1>
                <p className="text-white/30 text-sm mb-12">The beginning of a journey</p>

                {/* Blog */}
                <div className="flex flex-col gap-5 text-base md:text-lg text-white/80 leading-relaxed mb-16">
                    <p>
                        I fell in love with hackathons in grade 12, and I still remember gathering
                        up a team of 4 friends I met that semester and traveling to McMaster for
                        DeltaHacks 9. The feeling of building out of your imagination for the first
                        time and getting to know your team throughout the 48 hours was an experience
                        I could never forget.
                    </p>
                    <p>
                        We definitely were clueless on where to start, having no experience with
                        HTML, CSS, and using APIs, and 2023 GPT definitely led us down the wrong
                        paths at times. We were scratching our heads reading through the Spotify
                        API, going on snack runs to clear our heads, and made pivots like switching
                        from React to HTML in the middle of the hackathon.
                    </p>
                    <p>
                        Towards the end, we managed to scrape together a website called{" "}
                        <a
                            href="https://devpost.com/software/dyeify"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white underline underline-offset-4 hover:text-white/60 transition-colors duration-200"
                        >
                            Dyeify
                        </a>{" "}
                        that was basically non-functional.
                    </p>
                    <p>
                        But we weren't disappointed. Looking back, we were so proud of what we did;
                        we made a promise from then on to continue running hackathons to grow
                        together. And the following hackathon after, we ran our second hackathon
                        together, cooped up in my friend's basement during a winter storm, where we
                        won the Best Game category at YRHacks!
                    </p>
                    <p>
                        The hackathon experience wasn't just building and grinding. It's sleeping on
                        the couches with the lights still on, going on midnight runs to grab food,
                        waiting until it hits 5 AM so you can go to Starbucks because the
                        building's wifi cuts out, turning off your friend's alarm for him that's
                        still in his jeans because he sleeps through it, and yapping about life
                        while you/AI is coding. I really think I had the best team I could ever get
                        back then and I'm so grateful to be part of this community.
                    </p>
                </div>

                {/* Becoming an Organizer */}
                <h2 className="text-2xl font-light mb-4">Becoming an Organizer</h2>
                <div className="flex flex-col gap-5 text-base md:text-lg text-white/80 leading-relaxed mb-16">
                    <p>
                        Eventually, in my first year of university, I'd attended my fair share of
                        hackathons and decided to apply to be an organizer. I thought it was about
                        time to give back to the community and joined Hack the Valley, UofT
                        Scarborough's hackathon, as a developer.
                    </p>
                    <p>
                        It was a great learning experience where I got to build a web app to
                        register hackers and track their meals. It was pretty fulfilling to see it
                        used at the event and how much it sped up the process compared to when I was
                        a hacker. In my second year with HTV, for its 10th anniversary, we remade
                        the website completely from scratch. The team really grew on me and I'm
                        excited to share that this will be my <span className="text-white font-medium">third year</span> with
                        them and I'm excited for what's to come!
                    </p>
                </div>

                {/* HackCon + New York */}
                <h2 className="text-2xl font-light mb-4">HackCon + New York</h2>
                <div className="flex flex-col gap-5 text-base md:text-lg text-white/80 leading-relaxed mb-16">
                    <p>
                        Organizers usually have social events to get closer with the team, whether that's going to
                        Activate, a board game cafe, an escape room, or a picnic. But in
                        the summer of 2025, we were invited to a very special event:{" "}
                        <span className="text-white font-medium">HackCon</span> at Camp Pontiac,
                        located in Copake, New York. Ten of us from the organizing team went, and it
                        was so much fun!
                    </p>

                    <div className="my-2 grid grid-cols-2 gap-3">
                        <figure>
                            <img
                                src="/assets/blog/hackcon-bus.png"
                                alt="The bus ride to HackCon"
                                className="w-full rounded-xl object-cover h-48 sm:h-64"
                            />
                        </figure>
                        <figure>
                            <img
                                src="/assets/blog/nintendo-switch-bus.png"
                                alt="Running Smash Bros on the bus to HackCon"
                                className="w-full rounded-xl object-cover h-48 sm:h-64"
                            />
                        </figure>
                    </div>
                    <p className="text-sm text-white/40 text-center -mt-3">Running Smash Bros on the bus there</p>

                    <p>
                        At HackCon, we got to meet Swift, the CEO of Major League Hacking (MLH),
                        organizers from all around the world (Hong Kong, Europe, the USA) and
                        listened to the many conference talks there. In addition, the camp had so
                        many amenities like volleyball, basketball, ice cream, and s'mores at night.
                    </p>

                    <figure className="my-2">
                        <img
                            src="/assets/blog/hackcon-swift.jpg"
                            alt="Meeting Swift, CEO of MLH"
                            className="w-3/4 mx-auto rounded-xl object-cover"
                        />
                        <figcaption className="text-sm text-white/40 mt-2 text-center">
                            Meeting the CEO of MLH — Swift
                        </figcaption>
                    </figure>

                    <figure className="my-2">
                        <video
                            src="/assets/blog/hackcon-limbo.mov"
                            controls
                            playsInline
                            className="w-1/2 mx-auto rounded-xl"
                        />
                        <figcaption className="text-sm text-white/40 mt-2 text-center">
                            Talent Show at Hackcon
                        </figcaption>
                    </figure>
                    <p>
                        After HackCon, we commuted back to New York City to stay for a couple of
                        days, running karaoke at the back of the bus. We hit up Din Tai Fung, which
                        looked like an underground nightclub, ate some NY pizza, hit up Times
                        Square, and visited the Gentle Monster store in SoHo. I'm sure this is a memory I will never forget and I'm so happy that I joined
                        Hack the Valley!
                    </p>
                </div>

                {/* List */}
                <h3 className="text-2xl font-light mb-2">List of Hackathons Attended:</h3>
                <div className="flex flex-col">
                    {hackathons.map((h, i) => (
                        <div
                            key={h.name}
                            className={`flex items-center justify-between py-4 ${i < hackathons.length - 1 ? "border-b border-white/10" : ""}`}
                        >
                            <p className="text-base md:text-lg font-medium">{h.name}</p>
                            <p className="text-sm md:text-base text-white/50 text-right">{h.school}</p>
                        </div>
                    ))}
                </div>

                <p className="text-white/30 text-sm mt-12">{hackathons.length} hackathons and counting.</p>
            </div>
        </div>
    );
}