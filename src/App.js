import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./Redux/Store";
import { Provider } from "react-redux";
// import SuspenseHOC from "./Suspense/Suspense";
import MainPage from "./components/mainPage/MainPage";
// const MainPage = React.lazy(() => import("./components/mainPage/MainPage"));

function App() {
  return (
    <div>
      <Header />
      <MainPage />
      {/* <Route path="/friends" render={SuspenseHOC(FriendsContainer)} />
            <Route path="/login" render={SuspenseHOC(Login)} />
            <Route path="/edit" render={SuspenseHOC(EditProfile)} /> */}
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
