import React from "react";
import "./styles.css";

interface Props {
  label: "Facebook" | "Instagram" | "Twitter" | "LinkedIn" | "GitHub";
  url: string;
  icon: string;
}

export const SocialItem: React.FC<Props> = (props) => {
  return (
    <a className={`social-item-wrapper ${props.label.toLowerCase()}`} href={props.url} target="_blank" rel="noreferrer">
      <i className={props.icon} />
      <span>{props.label} </span>
    </a>
  );
};
