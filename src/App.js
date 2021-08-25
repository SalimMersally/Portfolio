import "./App.css";
import React from "react";

//components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import ContactMe from "./components/ContactMe.jsx";

function App() {
  return (
    <div className="">
      <div className="flex flex-col md:h-screen">
        <Navbar />
        <Header />
      </div>

      <Skills />

      <Education />

      <Projects />

      <ContactMe />

      <Footer />
    </div>
  );
}

export default App;
