import React from "react";

const About = () => {
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img
              src="https://media.sproutsocial.com/uploads/2016/09/5-LinkedIn-Best-Practices-featured.png"
              alt="linkedin-logo"
            />
            <span className="card-title" />
          </div>
          <div className="card-content">
            <p>You can check my info via link below.</p>
          </div>
          <div className="card-action">
            <a href="https://www.linkedin.com/in/romanchenkopv/">
              My LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
