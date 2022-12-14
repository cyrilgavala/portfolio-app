import React from "react";
import "./styles.css";

interface Link {
  label: string;
  url: string;
}

interface ProjectItemProps {
  className: string;
  title: string;
  description: string;
  skills: string;
  url: string;
  links: Link[];
}

export const ProjectItem = ({ className, title, description, skills, url, links }: ProjectItemProps) => {
  return (
    <div className="project-wrapper">
      <div className={`front ${className}`}>
        <div className="title">
          <i className="fa-regular fa-hand-pointer click-here" />
          <span>{title}</span>
        </div>
      </div>
      <div className="back">
        <div>
          <h3>What is project about?</h3>
          <p>{description}</p>
        </div>
        <div>
          <h3>What did I practise?</h3>
          <p>{skills}</p>
        </div>
        <a href={url} target="_blank" rel="noreferrer">
          Here you can check it out
        </a>
        <div>
          <h3>Here are the links to the source code:</h3>
          <ul>
            {links.map((link) => (
              <li key={link.label}>
                ›
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
