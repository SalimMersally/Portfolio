import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const currentPage = useLocation().pathname.slice(1);
  const [showMenu, setShowMenu] = useState("hidden");
  const [buttonsStyle, setButtonStyle] = useState({
    home: "default",
    projects: "default",
    resume: "default",
    contactme: "default",
  });
  const [moobileButtonsStyle, setMobileButtonStyle] = useState({
    home: "mobileDefault",
    projects: "mobileDefault",
    resume: "mobileDefault",
    contactme: "mobileDefault",
  });

  const buttonsClass = {
    inPage: "py-4 px-2 text-blue-500 border-b-4 border-blue-500 font-semibold",
    default:
      "py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300",
    MobileInPage:
      "block text-sm px-2 py-4 text-white bg-blue-500 font-semibold",
    mobileDefault:
      "block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300",
  };

  useEffect(() => {
    let newState = {
      home: "default",
      projects: "default",
      resume: "default",
      contactme: "default",
    };
    let mobileNewState = {
      home: "mobileDefault",
      projects: "mobileDefault",
      resume: "mobileDefault",
      contactme: "mobileDefault",
    };
    newState[currentPage === "" ? "home" : currentPage] = "inPage";
    mobileNewState[currentPage === "" ? "home" : currentPage] = "MobileInPage";
    setButtonStyle(newState);
    setMobileButtonStyle(mobileNewState);
  }, [currentPage]);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2" exact>
                <span className="font-semibold text-gray-500 text-lg">
                  Salim Mersally
                </span>
              </Link>
            </div>
          </div>

          <div className="flex space-x-7">
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className={buttonsClass[buttonsStyle["home"]]} exact>
                Home
              </Link>
              <Link
                to="/projects"
                className={buttonsClass[buttonsStyle["projects"]]}
              >
                Projects
              </Link>
              <Link
                to="/resume"
                className={buttonsClass[buttonsStyle["resume"]]}
              >
                Resume
              </Link>
              <Link
                to="/contactme"
                className={buttonsClass[buttonsStyle["contactme"]]}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Show More */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => {
                if (showMenu === "hidden") {
                  setShowMenu("");
                } else {
                  setShowMenu("hidden");
                }
              }}
            >
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-blue-500 "
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={"mobile-menu " + showMenu}>
        <ul className="">
          <li className={currentPage === "" ? "active" : ""}>
            <Link
              to="/"
              className={buttonsClass[moobileButtonsStyle["home"]]}
              exact
            >
              Home
            </Link>
          </li>
          <li className={currentPage === "projects" ? "active" : ""}>
            <Link
              to="/projects"
              className={buttonsClass[moobileButtonsStyle["projects"]]}
            >
              Project
            </Link>
          </li>
          <li className={currentPage === "resume" ? "active" : ""}>
            <Link
              to="/resume"
              className={buttonsClass[moobileButtonsStyle["resume"]]}
            >
              Resume
            </Link>
          </li>
          <li className={currentPage === "contactme" ? "active" : ""}>
            <Link
              to="/contactme"
              className={buttonsClass[moobileButtonsStyle["contactme"]]}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
