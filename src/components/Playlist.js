export default function Playlist() {
    const songs = [
        {
            id: 1,
            src: "https://open.spotify.com/embed/track/0T3pyPYtHAsxIRymAZsTkX?utm_source=generator&theme=0",
            title: "song1",
        },
        {
            id: 2,
            src: "https://open.spotify.com/embed/track/02wNtFxlr9dLmZXKT5TIF5?utm_source=generator&theme=0",
            title: "song2",
        },
        {
            id: 3,
            src: "https://open.spotify.com/embed/track/2zPANzQTt5Nbkg0eBPb7HI?utm_source=generator&theme=0",
            title: "song3",
        },
        {
            id: 4,
            src: "https://open.spotify.com/embed/track/5ye1TParxcolbnNsOXO8qE?utm_source=generator&theme=0",
            title: "song4",
        },
        {
            id: 5,
            src: "https://open.spotify.com/embed/track/5MUb136to9lnJLfIy5FZKI?utm_source=generator&theme=0",
            title: "song5",
        },
        {
            id: 6,
            src: "https://open.spotify.com/embed/track/7KA4W4McWYRpgf0fWsJZWB?utm_source=generator&theme=0",
            title: "song6",
        },
        {
            id: 7,
            src: "https://open.spotify.com/embed/track/5TZKpQFKCbIlWGD8DzHbC6?utm_source=generator&theme=0",
            title: "song7",
        },
        {
            id: 8,
            src: "https://open.spotify.com/embed/track/2SLwbpExuoBDZBpjfefCtV?utm_source=generator&theme=0",
            title: "song8",
        },
    ];

    const renderSong = (song) => (
        <iframe
            key={song.id}
            src={song.src}
            width="100%"
            height="110"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title={song.title}
            className="mb-2"
        />
    );

    return (
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            {/* First column - always visible */}
            <div className="w-full lg:w-[300px] md:mx-4">
                {songs.slice(0, 4).map(renderSong)}
            </div>

            {/* Second column - hidden on small screens, visible on large screens */}
            <div className="hidden lg:block w-full lg:w-[300px]">
                {songs.slice(4, 8).map(renderSong)}
            </div>
        </div>
    );
}
