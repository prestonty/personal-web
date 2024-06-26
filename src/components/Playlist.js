export default function Playlist() {
    return (
        <div class="flex">
            <div class="w-[300px] mr-16">
                <iframe
                    class=""
                    src="https://open.spotify.com/embed/track/0T3pyPYtHAsxIRymAZsTkX?utm_source=generator&theme=0"
                    // to make the background, grey, add &theme=0
                    width="100%"
                    height="110"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="song1"
                ></iframe>
                <iframe
                    src="https://open.spotify.com/embed/track/02wNtFxlr9dLmZXKT5TIF5?utm_source=generator&theme=0"
                    width="100%"
                    height="110"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="song2"
                ></iframe>
                <iframe
                    src="https://open.spotify.com/embed/track/2zPANzQTt5Nbkg0eBPb7HI?utm_source=generator&theme=0"
                    width="100%"
                    height="110"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="song3"
                ></iframe>
                <iframe
                    src="https://open.spotify.com/embed/track/5ye1TParxcolbnNsOXO8qE?utm_source=generator&theme=0"
                    width="100%"
                    height="110"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="song4"
                ></iframe>
            </div>

            {/* Only show these songs when screen is big enough. "invisible" makes it disappear, "hidden" unmounts the element */}
            <div class="w-[300px] mr-20 xs:hidden sm:hidden md:hidden lg:hidden xl:block 2xl:block">
                <iframe
                    src="https://open.spotify.com/embed/track/5MUb136to9lnJLfIy5FZKI?utm_source=generator&theme=0"
                    width="100%"
                    height="110"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="song5"
                ></iframe>
                <iframe
                    src="https://open.spotify.com/embed/track/7KA4W4McWYRpgf0fWsJZWB?utm_source=generator&theme=0"
                    width="100%"
                    height="110"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="song6"
                ></iframe>
                <iframe
                    src="https://open.spotify.com/embed/track/5TZKpQFKCbIlWGD8DzHbC6?utm_source=generator&theme=0"
                    width="100%"
                    height="110"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="song7"
                ></iframe>
                <iframe
                    src="https://open.spotify.com/embed/track/2SLwbpExuoBDZBpjfefCtV?utm_source=generator&theme=0"
                    width="100%"
                    height="110"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="song8"
                ></iframe>
            </div>
        </div>
    );
}
