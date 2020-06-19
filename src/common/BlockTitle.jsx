import React from "react";
import "../App.css"

let BlockTitleText = (props) => {
    return(
        <div class={props.titleClass}>
        <hr class="line" />
        <div class="title">
          <h2>{props.blockTitleText}</h2>
        </div>
        <hr class="line" />
      </div>
    )
}

export default BlockTitleText;