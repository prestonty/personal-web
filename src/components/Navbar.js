// nav buttons use <div> and <a> instead of <button>
export default function Navbar(props) {
    // Optional tailwind (add this when u call this element: bg-cloudBurst, text-[white], )
    return (
        <div class="bg-blue h-32">
            <ul class="text-white font-semibold font-work-sans text-4xl flex justify-evenly items-center">
                <li class="mt-4">
                    <img
                        src="assets\logos\white-logo.png"
                        width={172}
                        height={89}
                    />
                </li>
                <li class="">Projects</li>
                <li class="">Experience</li>
                <li class="">Travels</li>
            </ul>
        </div>
    );
}
