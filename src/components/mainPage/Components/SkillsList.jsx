import React from "react";
import stl from "../MainPage.module.css";
// import app from "../../App.css"
import Adaptive from "../img/Adaptive-skills.svg";
import FrontEnd from "../img/Front-end-skills.svg";
import CrossBrowsers from "../img/cross-browsers-skills.svg";
import design from "../img/design-skills.svg";
import idea from "../img/idea-skills.svg";

let SkillsList = () => {
  return (
    <div className={stl.skills + " " + stl.wrapper}>
      <div className={stl.titleLines + " " + stl.titleLines1}>
        <hr className={stl.line} />
        <div className={stl.title}>
          <h2 className={stl.title2}>This is what i do</h2>
        </div>
        <hr className={stl.line} />
      </div>

      <div className={stl.skillsCards}>
        <div
          className={stl.skillCard}
          data-aos="flip-right"
          data-aos-delay="200"
        >
          <img src={idea} alt="Great ideas skill" />
          <p>Great ideas</p>
        </div>
        <div
          className={stl.skillCard}
          data-aos="flip-right"
          data-aos-delay="200"
        >
          <img src={design} alt="design skill" />
          <p>Professional design</p>
        </div>
        <div
          className={stl.skillCard}
          data-aos="flip-right"
          data-aos-delay="350"
        >
          <img src={FrontEnd} alt="front-end skill" />
          <p>HTMl + CSS + JS</p>
        </div>
        <div
          className={stl.skillCard}
          data-aos="flip-right"
          data-aos-delay="500"
        >
          <img src={Adaptive} alt="adaptive skill" />
          <p>Clean code and responsive layout</p>
        </div>
        <div
          className={stl.skillCard}
          data-aos="flip-right"
          data-aos-delay="650"
        >
          <img src={CrossBrowsers} alt="cross-browsers skill" />
          <p>Browser Compatibility</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsList;
