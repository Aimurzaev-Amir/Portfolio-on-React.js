import React from "react";
import BlogPage from "./BlogPage";
import { connect } from "react-redux";

let BlogPageContainer = (props) => {
    return(
        <BlogPage articles={props.articles} />
    )
}

let mapStateToProps = (state) => {
    return{
        articles: state.articles.Articles,
    }
}

export default connect(mapStateToProps, {})(BlogPageContainer);