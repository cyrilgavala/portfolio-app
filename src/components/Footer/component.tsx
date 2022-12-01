import React from "react";
import "./styles.css";

export const Footer: React.FC = () => {
  return <footer>&copy; {new Date().getFullYear()} Cyril Gavala</footer>;
};
