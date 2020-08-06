import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import SuspenseHOC from "./Suspense/Suspense";
import { connect } from "react-redux";
import Navbar from "./components/Header/Navbar";
import BlogPageContainer from "./components/BlogPage/BlogPageContainer";
import ArticleContainer from "./components/BlogPage/BlogPageComponents/ArticleContainer";
import PortfolioPageContainer from "./components/PortfolioPage/PortfolioPageContainer";
import WorkContainer from "./components/PortfolioPage/PortfolioPageWorks/WorkContainer";
import Footer from "./components/footer/Footer";
import AdminMenu from "./components/adminPanel/AdminMenu";
// const PortfolioPageContainer = React.lazy(() => import("./components/PortfolioPage/PortfolioPageContainer"));
// const BlogPageContainer = React.lazy(() => import("./components/BlogPage/BlogPageContainer"));
const MainPage = React.lazy(() => import("./components/mainPage/MainPage"));
const AboutMePage = React.lazy(() => import("./components/aboutMePage/AboutMePage"));
const FeedbackForm = React.lazy(() =>
  import("./components/mainPage/Components/FeedbackForm/FeedbackForm")
);

function App(props) {
  return (
    <div>
      <Navbar />
      <Route exact path="/" render={SuspenseHOC(MainPage)} />
      <Route exact path="/about-me" render={SuspenseHOC(AboutMePage)} />
      <Route exact path="/contacts" render={SuspenseHOC(FeedbackForm)} />
      {/* <Route exact path="/portfolio" render={SuspenseHOC(PortfolioPageContainer)} /> */}
      <Route exact path="/portfolio" component={() => <PortfolioPageContainer /> } />
      <Route exact path={props.works[props.currentWorkId].urlAdress} component={() => <WorkContainer /> } />
      {/* <Route exact path="/blog" render={SuspenseHOC(BlogPageContainer)} /> */}
      <Route exact path="/blog" component={() => <BlogPageContainer /> } />
      <Route exact path={props.articles[props.currentArticleId].urlAdress} component={() => <ArticleContainer /> } />
      <Route exact path="/admin" render={SuspenseHOC(AdminMenu)} />
      <Footer />
    </div>
  );
}

let mapStateToProps = (state) => {
    return {
      works: state.works.Works,
      currentWorkId: state.works.currentWorkId,
      articles: state.articles.Articles,
      currentArticleId: state.articles.currentArticleId,
    };
  };

export default connect(mapStateToProps, {})(App);