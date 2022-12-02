import React from "react";
import "./styles.css";
import { Intro } from "../../pages/Intro";
import { Projects } from "../../pages/Projects";
import { Footer } from "../Footer";

export const App = () => (
  <div className="App">
    <Intro />
    <Projects />
    <Footer />
  </div>
);
