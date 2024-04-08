import { SocialIcon } from "react-social-icons";

// nav buttons use <div> and <a> instead of <button>
export default function Footer() {
    // Optional tailwind (add this when u call this element: bg-cloudBurst, text-[white], )
    return (
        <div className="flex items-center justify-center pt-16 pb-10">
            <p className="mr-4">Follow Me on Socials</p>
            <div className="flex items-center">
                <SocialIcon
                    className="hover:bg-blue duration-300"
                    url="https://github.com/prestonty"
                    target="_blank"
                    bgColor="transparent"
                    fgColor="white"
                />
                <SocialIcon
                    className="hover:bg-blue duration-300"
                    url="https://linkedin.com/in/prestonty"
                    target="_blank"
                    bgColor="transparent"
                    fgColor="white"
                />
            </div>
        </div>
    );
}
