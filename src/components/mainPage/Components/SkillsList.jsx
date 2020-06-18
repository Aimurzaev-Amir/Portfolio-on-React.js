import React from "react";
import "../MainPage.css";
import "../../Media.css"
import Adaptive from "../img/Adaptive-skills.svg";
import FrontEnd from "../img/Front-end-skills.svg";
import CrossBrowsers from "../img/cross-browsers-skills.svg";
import design from "../img/design-skills.svg";
import idea from "../img/idea-skills.svg";

let SkillsList = () => {
  return (
    <div class="skills wrapper">
      <div class="titleLines titleLines1">
        <hr class="line" />
        <div class="title">
          <h2>This is what i do</h2>
        </div>
        <hr class="line" />
      </div>

      <div class="skillsCards">
        <div class="skillCard" data-aos="flip-right" data-aos-delay="200">
          <img src={idea} alt="Great ideas skill" />
          <p>Great ideas</p>
        </div>
        <div class="skillCard" data-aos="flip-right" data-aos-delay="200">
          <img src={design} alt="design skill" />
          <p>Professional design</p>
        </div>
        <div class="skillCard" data-aos="flip-right" data-aos-delay="350">
          <img src={FrontEnd} alt="front-end skill" />
          <p>HTMl + CSS + JS</p>
        </div>
        <div class="skillCard" data-aos="flip-right" data-aos-delay="500">
          <img src={Adaptive} alt="adaptive skill" />
          <p>Clean code and responsive layout</p>
        </div>
        <div class="skillCard" data-aos="flip-right" data-aos-delay="650">
          <img src={CrossBrowsers} alt="cross-browsers skill" />
          <p>Browser Compatibility</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsList;
