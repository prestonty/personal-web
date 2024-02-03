// nav buttons use <div> and <a> instead of <button>
export default function Project(props) {
    // Optional tailwind (add this when u call this element: bg-cloudBurst, text-[white], )
    return (
        <div class="font-work-sans m-10">
            <a class="inline-block" href={props.link} target="_blank">
                <img class="border-2" src={props.src} />
            </a>
            <p class="text-silver text-xl mt-4 mb-2">{props.category}</p>
            <a class="inline" href={props.link} target="_blank">
                <p class="inline text-white text-3xl">{props.title}</p>
            </a>

            {/* icon to learn more */}
        </div>
    );
}
