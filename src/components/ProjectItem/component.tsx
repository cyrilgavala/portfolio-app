import React from "react";
import "./styles.css";

interface Props {
  className: string;
  title: string;
  description: string;
  skills: string;
  url: string;
}
export const ProjectItem: React.FC<Props> = (props) => {
  return (
    <div className="project-wrapper">
      <div className={`front ${props.className}`}>
        <div className="title">
          <i className="fa-regular fa-hand-pointer click-here" />
          <span>{props.title}</span>
        </div>
      </div>
      <div className="back">
        <div>
          <h3>What is project about?</h3>
          <p>{props.description}</p>
        </div>
        <div>
          <h3>What I practised?</h3>
          <p>{props.skills}</p>
        </div>
        <a href={props.url} target="_blank" rel="noreferrer">
          Here you can check it out
        </a>
      </div>
    </div>
  );
};
