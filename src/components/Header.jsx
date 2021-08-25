import React from "react";

//assets
import gif from "../assets/coding-freak.gif";
import cv from "../assets/cv.pdf";

function Header() {
  return (
    <div className="flex md:flex-nowrap flex-wrap flex-grow md:px-20">
      <div className="flex flex-col md:w-1/2 w-full p-2 justify-center">
        <img src={gif} alt="Coding GIF" className="h-auto w-4/5 m-auto" />
      </div>
      <div className="flex flex-col md:w-1/2 w-full p-2 justify-center">
        <h1 className="text-4xl font-extrabold md:m-5 m-5 mt-0">
          Hello, I'm Salim Al Mersally
        </h1>
        <h2 className="text-xl font-light m-5">
          A passionate computer engineer student at the Lebanese American
          University, and a front-end web developer with good knowledge in HTML,
          CSS, JavaScript, ReactJS, and NodeJS. I am always striving to learn
          more and expand my skills and knowledge.
        </h2>
        <div className="m-5">
          <a
            href={cv}
            download="Salim Mersally's CV"
            className="rounded-md bg-gray-500 hover:bg-blue-500 py-2 px-4 text-white text-lg font-medium"
          >
            Download my CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
