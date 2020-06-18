import React from "react";
import "../../../Media.css"
import "../../MainPage.css"

let LatestBlogArticle = (props) => {
  return (
    <div class="articleCard">
      <div class="articleImg">
        <img src={props.preview} alt={props.previewDescription} />
      </div>
      <div class="articleDate">
        <div class="dateText">
          <p>{props.date}</p>
        </div>
      </div>
      <div class="atricleText">
        <h3>{props.name}</h3>
        <hr />
        <p>{props.description}</p>
      </div>
      <div class="socialLine">
        <div class="articleSocial">
          <div class="articleComments">
            <p>{props.comments} comments</p>
          </div>
          <div class="articleShare">
            <p>{props.likes} likes</p>
          </div>
        </div>
      </div>
      <div class="articleHover">
        <a href={props.urlAdress}>
          <h3>Read more...</h3>
        </a>
      </div>
    </div>
  );
};

export default LatestBlogArticle;
