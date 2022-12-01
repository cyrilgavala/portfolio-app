import React from "react";
import "./styles.css";
import { IntroPage } from "../../pages/Intro";
import { Projects } from "../../pages/Projects";
import { Footer } from "../Footer";

export const App = () => (
  <div className="App">
    <IntroPage />
    <Projects />
    <Footer />
  </div>
);
