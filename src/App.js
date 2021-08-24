import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/resume">
            <Resume />
          </Route>

          <Route path="/contactme">
            <ContactMe />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
