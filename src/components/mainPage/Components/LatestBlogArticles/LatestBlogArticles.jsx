import React from "react";
import "../../MainPage.css";
import "../../../Media.css";
import LatestBlogArticle from "./LatestBlogArticle";
import BlockTitleText from "../../../../common/BlockTitle";
import Button from "../../../../common/Button";

let LatestBlogArticles = (props) => {
  let latestArticles = props.articles.map((article) => {
    return (
      <LatestBlogArticle
        key={article.id}
        name={article.articleName}
        date={article.articleDate}
        description={article.articleSmallDescription}
        preview={article.articlePreview}
        previewDescription={article.previewDescription}
        urlAdress={article.urlAdress}
        comments={article.comments}
        likes={article.likes}
      />
    );
  });
  return (
    <div className="latestBlogArticles wrapper">
      <BlockTitleText
        titleClass={"titleLines titleLines1"}
        blockTitleText={"Latest Blog Articles"}
      />
      <div className="articlesCards">{latestArticles}</div>
      <Button btnUrl={"Blog.html"} btnText={"View more articles"} />
    </div>
  );
};

export default LatestBlogArticles;
