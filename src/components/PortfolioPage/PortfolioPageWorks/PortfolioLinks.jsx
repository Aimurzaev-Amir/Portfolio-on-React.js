import React from "react";
import SuspenseHOC from "../../../Suspense/Suspense";
import { Route } from "react-router-dom";
const KazTransGas = React.lazy(() => import("./KazTransGas"));

let PortfolioLinks = () => {
  return (
    <div>
      <Route exact path="/kaztransgas" render={SuspenseHOC(KazTransGas)} />
    </div>
  );
};

export default PortfolioLinks;
