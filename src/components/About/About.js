import React from "react";
import siam from "../../image/siam.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="p-5">
      <div className="row about-me container">
        <h1>About Me</h1>
        <div className="col-md-6 p-4">
          <div className="border p-2 rounded">
            <img className="img-fluid" src={siam} alt="" />
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center p-4">
          <div className="">
            <h1>Mostakimul Kabir</h1>
            <p className="my-desc">
              Strong in design and integration with intuitive problem-solving
              skills. Proficient in PYTHON, JAVASCRIPT, SQL and MongoDB.
              <br></br>
              Passionate about implementing and launching new projects. Ability
              to translate business requirements into technical solutions.
              Looking to start the career as an entry-level software engineer
              with a reputed firm driven by technology.
            </p>
          </div>
        </div>
      </div>
      <div className="container services row mt-5 d-flex justify-content-center">
        <h1>What I Can?</h1>
        <div className="col-md-4 px-4 py-3">
          <div className="border p-4 rounded">
            <h3 className="mt-3">Web Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              saepe consequatur mollitia explicabo sint distinctio.
            </p>
          </div>
        </div>
        <div className="col-md-4 px-4 py-3">
          <div className="border p-4 rounded">
            <h3 className="mt-3">Data Science</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              saepe consequatur mollitia explicabo sint distinctio.
            </p>
          </div>
        </div>
        <div className="col-md-4 px-4 py-3">
          <div className="border p-4 rounded">
            <h3 className="mt-3">Computer Vision</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              saepe consequatur mollitia explicabo sint distinctio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
