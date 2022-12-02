import React from "react";
import "./styles.css";

interface SocialItemProps {
  label: "Facebook" | "Instagram" | "Twitter" | "LinkedIn" | "GitHub";
  url: string;
  icon: string;
}

export const SocialItem = ({ label, url, icon }: SocialItemProps) => {
  return (
    <a className={`social-item-wrapper ${label.toLowerCase()}`} href={url} target="_blank" rel="noreferrer">
      <i className={icon} />
      <span>{label} </span>
    </a>
  );
};
