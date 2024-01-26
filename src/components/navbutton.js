// nav buttons use <div> and <a> instead of <button>
export default function Navbutton(props) {
    // Optional tailwind (add this when u call this element: bg-cloudBurst, text-[white], )
    return (
        <a href="https://tailwindcss.com/docs/border-radius">
            <div class="text-center rounded-[30px] bg-cloudBurst w-36 h-14 text-[white] inline-block align-middle">
                {props.text}
            </div>
        </a>
    );
}
