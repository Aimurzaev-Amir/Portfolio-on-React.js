import React from "react";
import "../App.css"

let BlockTitleText = (props) => {
    return(
        <div className={props.titleClass}>
        <hr className="line" />
        <div className="title">
          <h2>{props.blockTitleText}</h2>
        </div>
        <hr className="line" />
      </div>
    )
}

export default BlockTitleText;