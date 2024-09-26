import React from "react";
import "./About.css";
import img1 from "./photo/1.jpg";
import img2 from "./photo/2.jpg";
import img3 from "./photo/3.jpg";
import img4 from "./photo/4.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-container-left">
          <div className="about-item">
            <div className="about-text">
              <h2>June 2020- Aug 2020</h2>
              <h3>Toyota (Intern)</h3>
              <h4>
                Completed a 30-day internship at Toyota, gaining hands-on
                experience in car maintenance and design.Involved in software
                and mechanical design using tools like SolidWorks, AutoCAD,
                Siemens NX, and Catia. Developed strong knowledge of car parts
                and their functions.
              </h4>
            </div>
            <div
              className="circle"
              style={{ backgroundImage: `url(${img2})` }}
            ></div>
          </div>
        </div>

        <div className="about-container-right">
          <div className="about-item">
            <div
              className="circle"
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
            <div className="about-text">
              <h2>2018-2022</h2>
              <h3>Graduation (Necmettin Erbakan University)</h3>
              <h4>
                I graduated from Necmettin Erbakan University with a degree in
                Mechatronics Engineering, where I gained comprehensive knowledge
                of both hardware and software systems. My coursework included a
                strong emphasis on programming, control systems, and automation
                technologies, allowing me to develop a solid foundation in
                software development alongside mechanical and electronic
                integration.
              </h4>
            </div>
          </div>
        </div>
        <div className="about-container-left">
          <div className="about-item">
            <div className="about-text">
              <h2>2023-2024</h2>
              <h3>Yapı Kredi Teknoloji (Intern)</h3>
              <h4>
                During my time at Yapı Kredi Technology, I developed and
                maintained user interfaces using React.js, focusing on improving
                performance and code readability. I played an active role in the
                design and development of software architecture, gaining
                valuable experience in API integration and data management
                processes. This position allowed me to strengthen my front-end
                development skills and work with industry best practices.
              </h4>
            </div>
            <div
              className="circle"
              style={{ backgroundImage: `url(${img3})` }}
            ></div>
          </div>
        </div>

        <div className="about-container-right">
          <div className="about-item">
            <a href="/cv/Bilge_Kose_CV.pdf" download="Bilge_Kose_CV">
              <div
                className="circleResume"
                style={{ backgroundImage: `url(${img4})` }}
              ></div>
            </a>

            <div className="about-text">
              <h2>For More Details</h2>
              <h3>Resume</h3>
              <h4>
                For more information, you can download my CV by clicking the
                image on the side
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
