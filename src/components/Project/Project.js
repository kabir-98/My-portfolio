import React from "react";
import "./Project.css";
import kkr from "../../image/project/kkr.PNG";
import favTeam from "../../image/project/teaminfo.PNG";
import events from "../../image/project/fork.PNG";
import Ride from "../../image/project/rideSharing.PNG";

const projects = [
  {
    img: events,
    title: "Fork Events",
    details: "A complete Event Management Website",
    link: "https://home-decor-53afc.web.app/",
  },
  {
    img: Ride,
    title: "Let's Travel!",
    details: "Simple Ride Shearing prototype",
    link: "https://lets-travel-1.web.app/",
  },
  {
    img: favTeam,
    title: "Team InfoPedia",
    details: "See your Favorite Team's details",
    link: "https://priceless-bell-cde11f.netlify.app/",
  },
  {
    img: kkr,
    title: "KKR Team Management",
    details: "Simple Player picking and Price Calculation",
    link: "https://elated-shirley-c0b921.netlify.app/",
  },
];

const Project = () => {
  return (
    <div className="project-details p-5">
      <h1>Project</h1>
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-6 p-4">
            <div className="p-3">
              <img className="project-img" src={project.img} alt="" />
              <h4>{project.title}</h4>
              <p>{project.details}</p>
              <a
                className="btn btn-primary"
                href={`${project.link}`}
                target="_blank"
                rel="noreferrer"
              >
                See Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
