import React from "react";
import { withAuthRedirect } from "../../../Hoc/withRedirect";

const AdminPanelMenu = () => {
  return (
    <div className="wrapper">
      <h1>AdminPanelMenu!</h1>
    </div>
  );
};

export default withAuthRedirect(AdminPanelMenu);
