import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bxl-react about__icon"></i>
        <h3 className="about__title">ReactJS</h3>
      </div>
      <div className="about__box">
        <i class="bx bxl-python about__icon"></i>
        <h3 className="about__title">Python</h3>
      </div>
      <div className="about__box">
        <i class="bx bxl-javascript about__icon"></i>
        <h3 className="about__title">JavaScript</h3>
      </div>
    </div>
  );
};

export default Info;
