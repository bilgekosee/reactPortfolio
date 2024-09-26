import React from "react";
import "./Skills.css";
const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-titles">
        <h2 className="project_title">Skills</h2>
        <span className="skills_subtitle">My Technical Level</span>
      </div>
      <div className="skills_allontainer">
        <div className="skills-container">
          <div className="skills_content">
            <h3 className="skills-h3">Programming Languages</h3>
            <div className="skills-box">
              <div className="skills-group">
                <ul>
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>C++</li>
                </ul>
              </div>
              <div className="skills-group">
                <ul>
                  <li>C</li>
                  <li>C#</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-container">
          <div className="skills_content">
            <h3 className="skills-h3">Frontend</h3>
            <div className="skills-box">
              <div className="skills-group">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                </ul>
              </div>
              <div className="skills-group">
                <ul>
                  <li>Bootstrap</li>
                  <li>Vue</li>
                  <li>React</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-end">
        <div className="skills-container">
          <div className="skills_content">
            <h3 className="skills-h3">Software & Tools</h3>
            <div className="skills-box">
              <div className="skills-group">
                <ul>
                  <li>VS Code</li>
                  <li>Figma </li>
                  <li>Git & GitHub</li>
                </ul>
              </div>
              <div className="skills-group">
                <ul>
                  <li>SolidWorks</li>
                  <li>MATLAB</li>
                  <li>ROS </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
