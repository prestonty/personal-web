'use client';

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex items-center justify-center pt-16 pb-10">
      <p className="mr-4">Follow Me on Socials</p>
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/prestonty"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="flex items-center justify-center w-11 h-11 rounded-full text-white hover:bg-blue transition-colors duration-300"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/in/prestonty"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="flex items-center justify-center w-11 h-11 rounded-full text-white hover:bg-blue transition-colors duration-300"
        >
          <FaLinkedinIn className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
