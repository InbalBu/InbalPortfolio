import React from "react";
import "./Skills.css";
import WebIcon from "@mui/icons-material/Web";
import ComputerIcon from "@mui/icons-material/Computer";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

function Skills() {
  return (
    <div className="skills component__space" id="Skills">
      <div className="heading">
        <h1 className="heading">My Skills</h1>
        <p className="heading p__color">
          I enjoy thinking outside the box and come up with original ideas
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="skills__box pointer">
              <div className="icon">
                <WebIcon />
              </div>
              <div className="skills__meta">
                <h1 className="skills__text">Website Development</h1>
                <p className="p skills__text p__color">
                  Creating modern, unique, responsive websites. Using advanced
                  technology that includes Html, Css, React.js, JavaScript.
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="skills__box pointer">
              <div className="icon">
                <ComputerIcon />
              </div>
              <div className="skills__meta">
                <h1 className="skills__text">.NET Development</h1>
                <p className="p skills__text p__color">
                  Building apps using WPF, UWP, Object-oriented programming
                  languages, C#, MVVM Architecture and more.
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="skills__box pointer">
              <div className="icon">
                <PersonOutlineIcon />
              </div>
              <div className="skills__meta">
                <h1 className="skills__text">Soft Skills</h1>
                <p className="p skills__text p__color">
                  Goal achiever. Team player. Learning & working againts the clock.{" "}
                  <br />
                  Problem solving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
