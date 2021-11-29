import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="cols-icon">
              <a href="https://www.facebook.com/naimur.rahman.946954/">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
              <a href="#">
                <i className="fa fa-youtube-square" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Naimur Rahman </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Web Dev 😎",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    "Mern stck Dev 📱",
                    1000,
                    "Cross Platform Dev 🔴",
                    1000,
                    "React/React Native 🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              building applications with front and back end operations.
            </span>
          </div>

          <div className="profile-options">
            <button style={{ color: "#fff", border: '1px solid #FF5823' }} className="btn primary-btn"> Hire Me </button>
            <a href="#" download="g">
              <button style={{ backgroundColor: '#FF5823', color: '#fff' }} className="btn highlighted-btn">Get Resume</button>
            </a>
            {/* <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a> */}
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
