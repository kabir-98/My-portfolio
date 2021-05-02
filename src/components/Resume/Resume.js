import React from "react";

const skills = [
  { name: "HTML", percent: "90%" },
  { name: "CSS3", percent: "85%" },
  { name: "JavaScript", percent: "85%" },
  { name: "React", percent: "80%" },
  { name: "Node Js", percent: "75%" },
  { name: "TypeScript", percent: "50%" },
];

const Resume = () => {
  return (
    <div className="resume-details p-5">
      <div className="row container">
        <h1>My Skills</h1>
        {skills.map((skill) => (
          <div className="col-md-6 col-sm-12">
            <div className="p-3">
              <h5>
                {skill.name} - {skill.percent}
              </h5>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style={{ width: `${skill.percent}` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 mt-3">
        <h1>Resume</h1>
        <div className="p-4 mt-3">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/14c7tDguuxCnCKBPv8txBSG8hf1DeOxpI/view?usp=sharing"
            className="btn btn-primary"
            rel="noreferrer"
          >
            Here is my Resume!
          </a>
        </div>
        <div className="p-4">
          <h3>My Skills</h3>
          <ul className="lh-lg">
            <li>Web Development</li>
            <li>Data Science</li>
            <li>Computer Vision</li>
          </ul>
        </div>
        <div className="p-4">
          <h3>Study</h3>
          <ul className="lh-lg">
            <li>
              BSc. CSE - 2017 (Ongoing)
              <br></br>
              American International University - Bangladesh
            </li>
            <li>
              HSC - 2016
              <br></br>
              Dewanhat City Corporation College
            </li>
            <li>
              SSC - 2014
              <br></br>
              P.D.B High School
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
