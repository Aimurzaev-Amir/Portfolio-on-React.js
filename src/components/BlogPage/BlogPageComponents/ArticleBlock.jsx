import React from "react";

let ArticleBlock = (props) => {
  let sectionTitle = props.sectionTitle ? <h3>{props.sectionTitle}</h3> : null;
  let sectionImg = props.sectionImg ? (
    <img src={props.sectionImg} alt={props.sectionImgDescr} />
  ) : null;
  return (
    <div className="articleBlock">
      {sectionImg}
      {sectionTitle}
      <p>{props.sectionText}</p>
    </div>
  );
};

export default ArticleBlock;
