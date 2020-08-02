import React from "react";
import Article from "./Article";
import { connect } from "react-redux";

let ArticleContainer = (props) => {
    return(
        <div>
            <Article article={props.articles[props.currentArticleId]} currentArticleId={props.currentArticleId} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
      articles: state.articles.Articles,
      currentArticleId: state.articles.currentArticleId,
    };
  };

export default connect(mapStateToProps, {})(ArticleContainer);