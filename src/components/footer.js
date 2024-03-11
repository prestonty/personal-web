import { SocialIcon } from 'react-social-icons'

// nav buttons use <div> and <a> instead of <button>
export default function Footer() {
    // Optional tailwind (add this when u call this element: bg-cloudBurst, text-[white], )
    return (
        <div className="flex items-center justify-center">
            <p className="mr-4">Follow Me on Socials</p>
            <div className="flex items-center">
                <SocialIcon url="https://github.com/prestonty" target="_blank" bgColor="transparent" fgColor="white" />
                <SocialIcon url="https://linkedin.com/in/prestonty" target="_blank" bgColor="transparent" fgColor="white" />
            </div>
        </div>
    );
}
