import React, { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState("hidden");

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">
                  Logo
                </span>
              </a>
            </div>
          </div>

          <div className="flex space-x-7">
            <div className="hidden md:flex items-center space-x-1">
              <a
                href=""
                className="py-4 px-2 text-blue-500 border-b-4 border-blue-500 font-semibold "
              >
                Home
              </a>
              <a
                href=""
                className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              >
                Projects
              </a>
              <a
                href=""
                className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              >
                Resume
              </a>
              <a
                href=""
                className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              >
                Contact
              </a>
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
          <li className="active">
            <a
              href=""
              className="block text-sm px-2 py-4 text-white bg-blue-500 font-semibold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="block text-sm px-2 py-4 hover:bgbluen-500 transition duration-300"
            >
              Project
            </a>
          </li>
          <li>
            <a
              href=""
              className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href=""
              className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
