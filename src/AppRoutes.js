import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Frame from "react-frame-component";
import IframeRouter from "./pages/IFrame/IframeRouter";

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path={"/iframe"}>
          {/* Testing purposes only  */}
          <Frame width="500px" height="500px">
            <IframeRouter />
          </Frame>
        </Route>

        <Redirect to={"/"}></Redirect>
      </Switch>
    </Router>
  );
}

export default AppRoutes;
