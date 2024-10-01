import React, { useState } from "react";
import "./Footer.css";
import img1 from "./photo/1.jpg";
import img2 from "./photo/2.jpg";
import img3 from "./photo/3.jpg";

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:bilge.koosee@gmail.com?subject=Contact from ${formData.firstName} ${formData.lastName}&body=${formData.message}`;
    window.location.href = mailtoLink;
  };
  return (
    <section id="footer" className="contact-footer">
      <div className="footer">
        <div className="contentfooter">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="inputBox">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <span>First Name</span>
            </div>
            <div className="inputBox">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <span>Surname</span>
            </div>

            <div className="inputBox">
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="footer-div">
              <button className="btn my-footerbtn">Contact</button>
            </div>
          </form>
          <div className="card-footer">
            <div className="footer__socials">
              <a
                href="https://github.com/bilgekosee"
                target="_blank"
                rel="noreferrer"
                className="footer__social"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.instagram.com/bilge_kosee/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="footer__social"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/Bilgekoose"
                target="_blank"
                rel="noreferrer"
                className="footer__social"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/bilgekosee/"
                target="_blank"
                rel="noreferrer"
                className="footer__social"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div className="up-all-container">
              <div className="upwork-container">
                <div
                  className="upwork"
                  style={{ backgroundImage: `url(${img1})` }}
                ></div>
                <div className="upwork-text">
                  <span>
                    Upwork profilime aşağıdaki linkten ulaşabilirsiniz
                  </span>
                  <a href="https://www.upwork.com/freelancers/~01a6c7a5b2e7f8924a">
                    Upwork Profile
                  </a>
                </div>
              </div>
              <div className="upwork-container-iletisim">
                <div
                  className="upwork"
                  style={{ backgroundImage: `url(${img2})` }}
                ></div>
                <div className="upwork-text">
                  <span>Telefon</span>
                  <span>(+90) 507 084 1822</span>
                </div>

                <div
                  className="upwork"
                  style={{ backgroundImage: `url(${img3})`, marginLeft: "3px" }}
                ></div>
                <div className="upwork-text">
                  <span>Mail</span>
                  <a href="mailto:someone@example.com">E-posta Gönder</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__copy">
          <p>© Copyright All rights reserved</p>
          <p className="footer-copy-text">
            🪐This site has been created by Bilge Köşe🪐
          </p>
        </div>
      </div>
    </section>
  );
};
export default Footer;
