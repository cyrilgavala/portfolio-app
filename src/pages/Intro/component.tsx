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
        <p>
          I&apos;m Cyril Gavala and I‘m enthusiastic software engineer who is mainly dived in backend development in
          Java. In my free time I try to learn and improve my skills in web development using JavaScript. I&apos;m
          adaptable and resourceful. My advantage is mathematical education, which helps me to learn things more
          quickly. Next I&apos;m creative and reliable with attention to the details. I&apos;m an Apple fan and
          musician. Also I like body-weight and yoga workouts.
        </p>
      </div>
      <div className="scroll-to-projects">
        <p>
          Click
          <button
            className="go-to-projects-btn"
            title="Click to move to projects section"
            onClick={() => document.querySelector(".projects-page")?.scrollIntoView({ behavior: "smooth" })}
          >
            here
          </button>
          to scroll down to the projects section.
        </p>
      </div>
    </div>
  );
};
