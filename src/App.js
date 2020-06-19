import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import SuspenseHOC from "./Suspense/Suspense";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/footer/Footer";

const MainPage = React.lazy(() => import("./components/mainPage/MainPage"));
const AboutMePage = React.lazy(() => import("./components/aboutMePage/AboutMePage"));

function App() {
  return (
    <div>
      <Navbar />
      <Route exact path="/" render={SuspenseHOC(MainPage)} />
      <Route exact path="/about-me" render={SuspenseHOC(AboutMePage)} />
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
