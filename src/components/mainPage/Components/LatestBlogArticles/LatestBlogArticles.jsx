import React from "react";
import "../../MainPage.css";
import "../../../Media.css"
import LatestBlogArticle from "./LatestBlogArticle";

let LatestBlogArticles = (props) => {
  let latestArticles = props.articles.map((article) => {
    return (
      <LatestBlogArticle
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
    <div class="latestBlogArticles wrapper">
      <div class="titleLines titleLines1 titleWrapper">
        <hr class="line" />
        <div class="title">
          <h2>Latest Blog Articles</h2>
        </div>
        <hr class="line" />
      </div>

      <div class="articlesCards">{latestArticles}</div>
      <div class="buttonPage">
        <a href="Blog.html">
          <button>View more articles</button>
        </a>
      </div>
    </div>
  );
};

export default LatestBlogArticles;
