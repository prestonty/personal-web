// nav buttons use <div> and <a> instead of <button>
export default function Footer() {
    // Optional tailwind (add this when u call this element: bg-cloudBurst, text-[white], )
    return (
        <div>
            <p>Follow Me on Socials</p>
            <ul>
                {/* maybe add instagram and facebook or something */}
                {/* replace these with logos */}
                <li>
                    <a href="https://www.linkedin.com/in/prestonty/">
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://github.com/prestonty">Github</a>
                </li>
            </ul>
        </div>
    );
}
