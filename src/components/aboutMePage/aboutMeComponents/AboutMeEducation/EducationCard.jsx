import React from "react";
import "../../aboutMePage.css";
import "../../../Media.css"

let EducationCard = (props) => {
  return (
    <div class="cardEdu">
      <div class="imgBxEdu">
        <img src={props.eduImg} alt={props.eduImgDescr} />
        <h3>{props.eduType}</h3>
      </div>
      <div class="contentEdu">
        <p>{props.eduName}</p>
        <p>{props.eduNameAdv}</p>
        <p>Graduated: {props.eduDate}</p>
      </div>
    </div>
  );
};

export default EducationCard;
