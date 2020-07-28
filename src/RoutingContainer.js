import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import SuspenseHOC from "./Suspense/Suspense";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/footer/Footer";
import Work from "./components/PortfolioPage/PortfolioPageWorks/Work";
import { connect } from "react-redux";
import PortfolioPage from "./components/PortfolioPage/PortfolioPage";
import { setWorkId } from "./Redux/WorksReducer";

const BlogPageContainer = React.lazy(() => import("./components/BlogPage/BlogPageContainer"));
// const PortfolioPageContainer = React.lazy(() => import("./components/PortfolioPage/PortfolioPageContainer"));
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
      <Route exact path="/portfolio" component={() => (
          <PortfolioPage works={props.works} setWorkId={props.setWorkId} currentWorkId={props.currentWorkId} />
        )}
      />
      <Route exact path={props.works[props.currentWorkId].urlAdress} component={() => (
          <Work works={props.works[props.currentWorkId]} currentWorkId={props.currentWorkId} />
        )}
      />
      <Route exact path="/blog" render={SuspenseHOC(BlogPageContainer)} />
      <Footer />
    </div>
  );
}

let mapStateToProps = (state) => {
    return {
      works: state.works.Works,
      currentWorkId: state.works.currentWorkId,
    };
  };

export default connect(mapStateToProps, { setWorkId })(App);