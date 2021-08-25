import React from "react";

//SVG
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";

function Footer() {
  return (
    <div className="flex md:flex-row flex-col bg-blue-500 md:px-20 px-5 py-2 justify-between">
      <div className="flex md:flex-row flex-col">
        <h2 className="text-2xl text-white font-extrabold">Reach out to Me:</h2>
        {/* Social Media */}
        <div className="flex items-center">
          <a
            href="https://www.facebook.com/profile.php?id=100008237710409"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={facebook}
              className="w-8 md:mx-2 SVGWhite mr-2"
              alt="Facebook Logo"
            />
          </a>
          <a
            href="https://www.instagram.com/salimmersally/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={instagram}
              className="w-8 mx-2 SVGWhite"
              alt="InstagramLogo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/salim-al-mersally"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedin}
              className="w-8 mx-2 SVGWhite"
              alt="LinkedIn Logo"
            />
          </a>
          <a
            href="https://github.com/SalimMersally"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} className="w-8 mx-2 SVGWhite" alt="GitHub Logo" />
          </a>
        </div>
      </div>
      <div className="text-white">&copy; SalimMersally</div>
    </div>
  );
}

export default Footer;
