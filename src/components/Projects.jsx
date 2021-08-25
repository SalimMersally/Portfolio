import React from "react";

//img
import trivia from "../assets/website-1.png";
import neon from "../assets/website-2.png";
import github from "../assets/github.svg";

function Projects() {
  return (
    <div className="flex flex-col md:px-20">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold m-5">My Projects</h1>
      </div>

      <div className="flex flex-wrap justify-around">
        <div className="flex flex-col md:w-2/5 w-4/5 shadow-lg rounded-sm my-5 border-2">
          <div className="w-full border-b-2">
            <img src={trivia} />
          </div>
          <div className="flex flex-col px-10 py-5">
            <h2 className="text-xl font-bold text-blue-500">JS Trivia</h2>
            <h3 className="text-lg italic font-light">
              A place to enjoy your time
            </h3>
            <h3>Tools:</h3>
            <div className="flex flex-wrap">
              <span className="text-white bg-blue-500 rounded-lg px-1 m-1">
                HTML
              </span>
              <span className="text-white bg-blue-500 rounded-lg px-1 m-1">
                CSS
              </span>
              <span className="text-white bg-blue-500 rounded-lg px-1 m-1">
                JavaScript
              </span>
              <span className="text-white bg-blue-500 rounded-lg px-1 m-1">
                React.JS
              </span>
              <span className="text-white bg-blue-500 rounded-lg px-1 m-1">
                Firebase
              </span>
              <span className="text-white bg-blue-500 rounded-lg px-1 m-1">
                Bootstrap
              </span>
            </div>
            <div className="pt-2 flex flex-wrap justify-center">
              <a
                href="https://js-trivia-leb2.netlify.app/"
                target="_blank"
                className="rounded-md bg-gray-500 hover:bg-blue-500 py-2 px-4 text-white text-lg font-medium mx-2 mt-2"
              >
                Demo &#10132;
              </a>
              <a
                href="https://github.com/Lebanon-02-WBC-Capstones/js-trivia-web"
                target="_blank"
                className="flex rounded-md bg-gray-500 hover:bg-blue-500 py-2 px-4 text-white text-lg font-medium mx-2 mt-2"
              >
                <div>Github</div>
                <div className="flex items-center h-full ml-1">
                  <img src={github} className="w-5 SVGWhite" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:w-2/5 w-4/5 shadow-lg my-5 rounded-sm border-2">
          <div className="w-full border-b-2">
            <img src={neon} />
          </div>
          <div className="flex flex-col px-10 py-5">
            <h2 className="text-xl font-bold text-blue-500">Neon Movie App</h2>
            <h3 className="text-lg italic font-light">
              A place to check the latest movies
            </h3>
            <h3>Tools:</h3>
            <div className="flex flex-wrap">
              <span className="text-white bg-blue-500 rounded-lg px-1 m-1">
                HTML
              </span>
              <span className="text-white bg-blue-500 rounded-lg px-1 m-1">
                CSS
              </span>
              <span className="text-white bg-blue-500 rounded-lg px-1 m-1">
                JavaScript
              </span>
              <span className="text-white bg-blue-500 rounded-lg px-1 m-1">
                React.JS
              </span>
              <span className="text-white bg-blue-500 rounded-lg px-1 m-1">
                Bootstrap
              </span>
            </div>
            <div className="pt-2 flex flex-wrap justify-center">
              <a
                href="https://neonmovies.netlify.app/"
                target="_blank"
                className="rounded-md bg-gray-500 hover:bg-blue-500 py-2 px-4 text-white text-lg font-medium mx-2 mt-2"
              >
                Demo &#10132;
              </a>
              <a
                href="https://github.com/SalimMersally/ReCoded-React-Movie-App"
                target="_blank"
                className="flex rounded-md bg-gray-500 hover:bg-blue-500 py-2 px-4 text-white text-lg font-medium mx-2 mt-2"
              >
                <div>Github</div>
                <div className="flex items-center h-full ml-1">
                  <img src={github} className="w-5 SVGWhite" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
