import React from "react";
import "../App.css";

let Button = (props) => {
  return (
    <div class="buttonPage">
      <a href={props.btnUrl}>
        <button>{props.btnText}</button>
      </a>
    </div>
  );
};

export default Button;
