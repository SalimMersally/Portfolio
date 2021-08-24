import React from "react";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";

//pictures
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import firebase from "../assets/firebase.png";
import npm from "../assets/npm.png";
import git from "../assets/git.png";

function Skills() {
  return (
    <div className="md:px-20 flex-col">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold m-5">My Skills</h1>
      </div>
      <div className="flex flex-wrap justify-center ">
        <div className="flex rounded-full w-24 h-24 m-2 p-2 border-2 border-blue-500 align-middle">
          <Tooltip overlay="HTML" placement="bottom">
            <div className="mx-auto my-auto">
              <img src={html} className="w-14" alt="html" />
            </div>
          </Tooltip>
        </div>
        <div className="flex rounded-full w-24 h-24 m-2 p-2 border-2 border-blue-500 align-middle">
          <Tooltip overlay="CSS" placement="bottom">
            <div className="mx-auto my-auto">
              <img src={css} className="w-14" alt="css" />
            </div>
          </Tooltip>
        </div>
        <div className="flex rounded-full w-24 h-24 m-2 p-2 border-2 border-blue-500 align-middle">
          <Tooltip overlay="JavaScript" placement="bottom">
            <div className="mx-auto my-auto">
              <img src={javascript} className="w-14" alt="javascript" />
            </div>
          </Tooltip>
        </div>
        <div className="flex rounded-full w-24 h-24 m-2 p-2 border-2 border-blue-500 align-middle">
          <Tooltip overlay="React.JS" placement="bottom">
            <div className="mx-auto my-auto">
              <img src={react} className="w-14" alt="react" />
            </div>
          </Tooltip>
        </div>
        <div className="flex rounded-full w-24 h-24 m-2 p-2 border-2 border-blue-500 align-middle">
          <Tooltip overlay="Node.JS" placement="bottom">
            <div className="mx-auto my-auto">
              <img src={node} className="w-14" alt="node" />
            </div>
          </Tooltip>
        </div>
        <div className="flex rounded-full w-24 h-24 m-2 p-2 border-2 border-blue-500 align-middle">
          <Tooltip overlay="Java" placement="bottom">
            <div className="mx-auto my-auto">
              <img src={java} className="w-14" alt="java" />
            </div>
          </Tooltip>
        </div>
        <div className="flex rounded-full w-24 h-24 m-2 p-2 border-2 border-blue-500 align-middle">
          <Tooltip overlay="Python" placement="bottom">
            <div className="mx-auto my-auto">
              <img src={python} className="w-14" alt="python" />
            </div>
          </Tooltip>
        </div>
        <div className="flex rounded-full w-24 h-24 m-2 p-2 border-2 border-blue-500 align-middle">
          <Tooltip overlay="Firebase" placement="bottom">
            <div className="mx-auto my-auto">
              <img src={firebase} className="w-14" alt="firebase" />
            </div>
          </Tooltip>
        </div>
        <div className="flex rounded-full w-24 h-24 m-2 p-2 border-2 border-blue-500 align-middle">
          <Tooltip overlay="NPM" placement="bottom">
            <div className="mx-auto my-auto">
              <img src={npm} className="w-14" alt="npm" />
            </div>
          </Tooltip>
        </div>
        <div className="flex rounded-full w-24 h-24 m-2 p-2 border-2 border-blue-500 align-middle">
          <Tooltip overlay="Git" placement="bottom">
            <div className="mx-auto my-auto">
              <img src={git} className="w-14" alt="git" title="git" />
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default Skills;
