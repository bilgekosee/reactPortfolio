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
              <h2>2018-2022</h2>
              <h3>University</h3>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                ut voluptatum eius sapiente, totam reiciendis temporibus qui
                quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                dolore laudantium consectetur!
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
              <h3>University</h3>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                ut voluptatum eius sapiente, totam reiciendis temporibus qui
                quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                dolore laudantium consectetur!
              </h4>
            </div>
          </div>
        </div>
        <div className="about-container-left">
          <div className="about-item">
            <div className="about-text">
              <h2>2018-2022</h2>
              <h3>University</h3>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                ut voluptatum eius sapiente, totam reiciendis temporibus qui
                quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                dolore laudantium consectetur!
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
            <div
              className="circle"
              style={{ backgroundImage: `url(${img4})` }}
            ></div>
            <div className="about-text">
              <h2>2018-2022</h2>
              <h3>University</h3>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                ut voluptatum eius sapiente, totam reiciendis temporibus qui
                quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                dolore laudantium consectetur!
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
