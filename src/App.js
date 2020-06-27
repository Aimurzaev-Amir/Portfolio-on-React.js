import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import SuspenseHOC from "./Suspense/Suspense";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/footer/Footer";

const BlogPageContainer = React.lazy(() => import("./components/BlogPage/BlogPageContainer"));
const PortfolioPageContainer = React.lazy(() => import("./components/PortfolioPage/PortfolioPageContainer"));
const MainPage = React.lazy(() => import("./components/mainPage/MainPage"));
const AboutMePage = React.lazy(() => import("./components/aboutMePage/AboutMePage"));
const FeedbackForm = React.lazy(() =>
  import("./components/mainPage/Components/FeedbackForm/FeedbackForm")
);

function App() {
  return (
    <div>
      <Navbar />
      <Route exact path="/" render={SuspenseHOC(MainPage)} />
      <Route exact path="/about-me" render={SuspenseHOC(AboutMePage)} />
      <Route exact path="/contacts" render={SuspenseHOC(FeedbackForm)} />
      <Route exact path="/portfolio" render={SuspenseHOC(PortfolioPageContainer)} />
      <Route exact path="/blog" render={SuspenseHOC(BlogPageContainer)} />
      <Footer />
    </div>
  );
}

const PortfolioApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

export default PortfolioApp;
