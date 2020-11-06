import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import IframeRouter from "./pages/IFrame/IframeRouter";

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path={"/iframe"}>
          <IframeRouter />
        </Route>

        <Redirect to={"/"}></Redirect>
      </Switch>
    </Router>
  );
}

export default AppRoutes;
