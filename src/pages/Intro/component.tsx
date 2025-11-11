import React from "react";
import { PhotoHolder } from "../../components/PhotoHolder";
import { SocialItem } from "../../components/SocialItem";
import "./styles.css";

export const Intro = () => {
  return (
    <div className="intro-page">
      <PhotoHolder />
      <div className="socials-wrapper">
        <SocialItem label={"GitHub"} url={"https://github.com/cyrilgavala"} icon={"fab fa-github"} />
        <SocialItem
          label={"LinkedIn"}
          url={"https://www.linkedin.com/in/cyril-gavala-15380083/"}
          icon={"fab fa-linkedin"}
        />
        <SocialItem label={"Facebook"} url={"https://www.facebook.com/cyrilgavala"} icon={"fab fa-facebook"} />
        <SocialItem label={"Instagram"} url={"https://www.instagram.com/cyrilgavala/"} icon={"fab fa-instagram"} />
        <SocialItem label={"Twitter"} url={"https://twitter.com/cypooo"} icon={"fab fa-twitter"} />
      </div>
      <div className="about-wrapper">
        <p>I&apos;m Cyril Gavala and I‘m</p>
        <div className="spec"></div>
      </div>
    </div>
  );
};
