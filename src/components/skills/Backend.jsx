import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Tools & Platforms</h3>
      <div className="skills__box">
        <div className="skills_group">
          <div className="skills_data">
            <i class="uil uil-code-branch"></i>
            <div>
              <h3 className="skills_name">Git</h3>
            </div>
          </div>
          <div className="skills_data">
            <i class="uil uil-github-alt"></i>
            <div>
              <h3 className="skills_name">GitHub</h3>
            </div>
          </div>
          <div className="skills_data">
            <i class="uil uil-visual-studio"></i>
            <div>
              <h3 className="skills_name">VS Code</h3>
            </div>
          </div>
        </div>
        <div className="skills_group">
          <div className="skills_data">
            <i class="bx bxl-aws"></i>
            <div>
              <h3 className="skills_name">AWS</h3>
            </div>
          </div>
          <div className="skills_data">
            <i class="uil uil-docker"></i>
            <div>
              <h3 className="skills_name">Docker</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
