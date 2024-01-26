// nav buttons use <div> and <a> instead of <button>
export default function slideImage(props) {
    // Optional tailwind (add this when u call this element: bg-cloudBurst, text-[white], )
    return (
        <div class="text-center animate-fade-up animate-duration-[1600ms] animate-ease-in">
            <img
                src={props.src}
                width={props.width}
                // height={props.height}
            ></img>
        </div>
    );
}
