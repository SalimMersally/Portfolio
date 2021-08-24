import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Switch></Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
