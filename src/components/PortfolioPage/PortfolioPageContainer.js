import React from "react";
import PortfolioPage from "./PortfolioPage";
import { connect } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";
// import SuspenseHOC from "../../Suspense/Suspense";
import KazTransGas from "./PortfolioPageWorks/KazTransGas";
// const KazTransGas = React.lazy(() => import("./PortfolioPageWorks/KazTransGas"));
// const PortfolioPage = React.lazy(() => import("./PortfolioPage"));

let PortfolioPageContainer = (props) => {
  return (
    <div>
      <BrowserRouter>
        {/* <Route exact path="/portfolio" render={SuspenseHOC(PortfolioPage)}  /> */}
        <Route exact path="/portfolio" component={() => <PortfolioPage works={props.works} />}/>
        {/* <PortfolioPage works={props.works} /> */}
        <Route exact path="/portfolio/kaztransgas" component={() => <KazTransGas works={props.works[0]} />} />
      </BrowserRouter>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    works: state.works.Works,
  };
};

export default connect(mapStateToProps, {})(PortfolioPageContainer);
