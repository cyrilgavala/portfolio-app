import React from "react";
import "./styles.css";
import { ProjectItem } from "../../components/ProjectItem";

export const Projects = () => {
  return (
    <div className="projects-page">
      <div className="scroll-right">
        <i className="fa fa-arrow-right" />
        <span>Scroll right to browse the projects</span>
        <i className="fa fa-arrow-right" />
      </div>
      <ProjectItem
        className="covid19"
        title="Covid-19 stats"
        description="Full-stack project of three applications. Web-scrap one 'steals' data from https://korona.gov.sk and stores them into cloud Mongo database. Simple Node/Express API serves to communicate between ReactJS application and the database."
        skills="JavaScript, ReactJS, NodeJS, Express, web-scrap, MongoDB"
        url="https://covid-19-webapp.vercel.app"
        links={[
          { label: "UI", url: "https://github.com/cyrilgavala/covid-19-webapp" },
          { label: "API", url: "https://github.com/cyrilgavala/covid-19-api" },
          { label: "Web-scrap tool", url: "https://github.com/cyrilgavala/covid-19-web-scrap" }
        ]}
      />
      <ProjectItem
        className="reservations"
        title="Reservations app"
        description="Full-stack project of two applications. Simple backend Spring boot application with JWT authentication and authorization using Spring security and cloud MongoDB database. ReactJS frontend app for simple UI."
        skills="JavaScript, ReactJS, Spring boot, Spring security, JWT, MongoDB"
        url="https://cg-reservations-ui.vercel.app"
        links={[
          { label: "UI", url: "https://github.com/cyrilgavala/reservations-ui" },
          { label: "API", url: "https://github.com/cyrilgavala/reservations-api" }
        ]}
      />
      <ProjectItem
        className="wedding-gallery"
        title="Wedding gallery"
        description="ReactJS photo gallery from our wedding using Dropbox API."
        skills="JavaScript, ReactJS, DropboxAPI"
        url="https://wedding-gallery.vercel.app"
        links={[{ label: "UI", url: "https://github.com/cyrilgavala/cyril-vierka-wedding-gallery" }]}
      />
      <ProjectItem
        className="noise-player"
        title="White noise player"
        description="Simple web page built with React to serve as white noise player."
        skills="JavaScript, ReactJS, React hooks"
        url="https://white-noise-player.vercel.app"
        links={[{ label: "UI", url: "https://github.com/cyrilgavala/white-noise-player" }]}
      />
      <ProjectItem
        className="email-sender"
        title="Bulk e-mail sender"
        description="ReactJS application containing integrated Gmail login and interface for sending bulk emails."
        skills="JavaScript, ReactJS, GoogleAPI"
        url="https://email-sender-webapp.vercel.app"
        links={[{ label: "UI", url: "https://github.com/cyrilgavala/email-sender-webapp" }]}
      />
      <ProjectItem
        className="workouts"
        title="Workout challenges"
        description="Another full-stack project having Node/Express API for client-server communication and ReactJS application for saving a progress of various workout challenges and their visualisation."
        skills="JavaScript, ReactJS, NodeJS, Express, MongoDB"
        url="https://workout-challenges-webapp.vercel.app"
        links={[
          { label: "UI", url: "https://github.com/cyrilgavala/workout-challenges-webapp" },
          { label: "API", url: "https://github.com/cyrilgavala/workout-challenges-api" }
        ]}
      />
    </div>
  );
};
