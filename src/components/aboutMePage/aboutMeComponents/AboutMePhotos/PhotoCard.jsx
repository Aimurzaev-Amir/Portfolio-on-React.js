import React from "react";
import "../../aboutMePage.css";
import "../../../Media.css";

let PhotoCard = (props) => {
  return (
    <div class="photo">
      <img
        class="myImg"
        onclick={props.onPhotoClickAction}
        alt={props.imgDescr}
        src={props.img}
      />
    </div>
  );
};

export default PhotoCard;
