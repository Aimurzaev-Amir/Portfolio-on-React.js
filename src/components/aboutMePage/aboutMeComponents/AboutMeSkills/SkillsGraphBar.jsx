import React from "react";
import "../../aboutMePage.css";
import "../../../Media.css"

let SkillGraphBar = (props) => {
  return (
    <div class="bar" id={props.barId} data-aos="fade-up" data-aos-delay="200">
      <div class="barText">
        <p class="barTextProcent">
          {props.barProcent} <span>%</span>
        </p>
        <p class="barTextSkill">{props.barText}</p>
      </div>
    </div>
  );
};

export default SkillGraphBar;
