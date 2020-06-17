import React, { Suspense } from "react";

const SuspenseHOC = (Component) => {
  return (props) => {
    return <Suspense fallback={"...loading"}>
      <Component {...props} />
    </Suspense>;
  };
};

export default SuspenseHOC;
