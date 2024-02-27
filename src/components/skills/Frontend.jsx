import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Tech Stack</h3>
      <div className="skills__box">
        <div className="skills_group">
          <div className="skills_data">
            <i class="uil uil-react"></i>
            <div>
              <h3 className="skills_name">ReactJS</h3>
            </div>
          </div>
          <div className="skills_data">
            <i class="uil uil-java-script"></i>
            <div>
              <h3 className="skills_name">JavaScript</h3>
            </div>
          </div>
          <div className="skills_data">
            <i class="uil uil-desktop-alt"></i>
            <div>
              <h3 className="skills_name">Python</h3>
            </div>
          </div>
        </div>
        <div className="skills_group">
          <div className="skills_data">
          <i class="uil uil-server-network"></i>
            <div>
              <h3 className="skills_name">NodeJS</h3>
            </div>
          </div>
          <div className="skills_data">
            <i class="uil uil-database"></i>
            <div>
              <h3 className="skills_name">SQL</h3>
            </div>
          </div>
          <div className="skills_data">
            <i class="uil uil-css3-simple"></i>
            <div>
              <h3 className="skills_name">CSS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
