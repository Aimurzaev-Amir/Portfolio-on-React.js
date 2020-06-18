import React from "react";
import Introduction from "./Components/Introduction";
import "./MainPage.css";
import SkillsList from "./Components/SkillsList";
import LatestWorksContainer from "./Components/LatestWorks/LatestWorksContainer";
import LatestBlogArticlesContainer from "./Components/LatestBlogArticles/LatestBlogArticlesContainer";
import FeedbackForm from "./Components/FeedbackForm/FeedbackForm";
import MainBanner from "./Components/MainBanner";

let MainPage = () => {
  return (
    <div class="bgBlue">
      <header class="aboutMePage">
        <MainBanner />
      </header>
      <Introduction />
      <SkillsList />
      <LatestWorksContainer />
      <LatestBlogArticlesContainer />
      <FeedbackForm />
    </div>
  );
};

export default MainPage;
