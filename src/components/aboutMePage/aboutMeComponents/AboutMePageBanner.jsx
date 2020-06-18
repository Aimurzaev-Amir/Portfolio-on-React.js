import React from "react";
import "../aboutMePage.css"
import left from "../img/left.png";
import right from "../img/right.png";


let AboutMePageBanner = () => {
  return (
    <div class="mainImgBg">
      <div class="mainImg wrapper">
        <div class="containerMain">
          <div class="designSide">
            <div class="sideText leftSide">
              <h1>Designer</h1>
              <p>
                UI/UX Designer with a passion for designing beautiful and functional user
                experiences.
              </p>
            </div>

            <img src={left} alt="" />
          </div>

          <div class="frontEndSide">
            <div class="sideText rightSide">
              <h1>&lt; Coder &gt;</h1>
              <p>Front End Developer who focuses on writing clean, elegant and efficient code.</p>
            </div>

            <img src={right} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePageBanner;
