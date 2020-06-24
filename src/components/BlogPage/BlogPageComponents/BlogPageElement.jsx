import React from "react";
import img from "../../../Redux/img/articles/article1/website-launch-checklist.png";

let BlogPageElement = (props) => {
  return (
    <div className="blogArticle">
      <h1>{props.name}</h1>
      <hr />
      <div className="dateViews">
        <p className="date">By Amir Aimurzayev on {props.date}</p>
      </div>
      <img src={props.img} alt={props.imgDescr} />
      <article>{props.description}</article>
      <div className="buttonPage leftSideButton">
        <a href={props.url}>
          <button>Read more</button>
        </a>
      </div>
    </div>
  );
};

export default BlogPageElement;
