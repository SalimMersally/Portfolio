import React from "react";

//SVG
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";

function Navbar() {
  return (
    <nav className="bg-white shadow-md w-full md:h-16 h-32">
      <div className="md:px-20 px-5 w-full flex md:flex-row flex-col justify-between">
        {/* Name */}
        <div className="flex">
          <div>
            <div className="flex items-center px-2 md:py-3 pt-4 pb-2">
              <span className="font-semibold text-gray-500 text-4xl logo">
                Salim Al Mersally
              </span>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex items-center md:py-4 pb-4">
          <a
            href="https://www.facebook.com/profile.php?id=100008237710409"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} className="w-8 mx-2" alt="Facebook Logo" />
          </a>
          <a
            href="https://www.instagram.com/salimmersally/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} className="w-8 mx-2" alt="InstagramLogo" />
          </a>
          <a
            href="https://www.linkedin.com/in/salim-al-mersally"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} className="w-8 mx-2" alt="LinkedIn Logo" />
          </a>
          <a
            href="https://github.com/SalimMersally"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} className="w-8 mx-2" alt="GitHub Logo" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
