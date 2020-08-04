import React from "react";
import ShareArticle from "./ShareArticle";
import "../BlogPage.css";
import ArticleBlock from "./ArticleBlock";

let Article = (props) => {
  let ArticleBlocks = props.article.fullVersion.map((block) => {
    return (
      <ArticleBlock
        key={block.id}
        sectionTitle={block.sectionTitle}
        sectionImg={block.sectionImg}
        sectionImgDescr={block.sectionImgDescr}
        sectionText={block.sectionText}
      />
    );
  });
  return (
    <div className="articleReadMore blogPaper wrapper">
      <div className="blogOverlay">
        <div className="blogArticle">
          <h1>{props.article.articleName}</h1>
          <hr />
          <div className="dateViews">
            <p className="date">By Amir Aimurzayev on {props.article.articleDate}</p>
          </div>
          <img src={props.article.articlePreview} alt={props.article.previewDescription} />
          {ArticleBlocks}
        </div>
        <ShareArticle />
      </div>
    </div>
  );
};

export default Article;
