import React from "react";
import "../../MainPage.css";
import "../../../Media.css"

let WorkPreview = (props) => {
  return (
    <div class="workCard">
      <div class="cardInfoOverlay">
        <div class="cardHeader">
          <div class="elipses">
            <div class="elipse"></div>
            <div class="elipse"></div>
            <div class="elipse"></div>
          </div>
          <div class="toggleCard">
            <hr />
            <hr />
            <hr />
          </div>
        </div>
        <div class="cardBody">
          <img src={props.Preview} alt={props.previewDescription} />
        </div>
        <div class="workCardInfo">
          <p>{props.smallDescription}</p>
          <h3>{props.Name}</h3>
          <div class="buttonPage workCardButton">
            <a href={props.urlAdress}>
              <button>View projects</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPreview;
