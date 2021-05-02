import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";


const Home = () => {
  return (
    <div className="col-10 container">
      <div className="d-flex justify-content-center d-flex align-items-center home-details me-md-5">
        <div className="home-full-text-part">
          <h2>Hello!</h2>
          <h1 className="mt-4">This is Mostakimul Kabir</h1>
          <h6 className="mt-4">
            <span style={{ color: "blue" }}>
              <Typewriter
                options={{
                  strings: ["Full Stack Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h6>
          <p className="mt-4">
            A current student of Computer Science at American International
            University - Bangladesh.<br></br> Want to go forward and dive deep in the
            technology world. <br></br>My career goal is to assume a role which allows me
            to take responsibility for <br></br> analyzing, solving problems, handle
            various situation and utilize my maximum potential.
          </p>
          
          <a
            target="_blank"
            href="https://drive.google.com/file/d/14c7tDguuxCnCKBPv8txBSG8hf1DeOxpI/view?usp=sharing"
            className="btn btn-primary"
            rel="noreferrer"
          >
            My Resume!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
