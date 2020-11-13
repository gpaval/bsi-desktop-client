import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { TableComponent } from "./components/TableComponent";

import IframeRouter from "./pages/IFrame/IframeRouter";

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path={"/iframe"}>
          <IframeRouter />
        </Route>
        <Route path={"/cms"}>
          <TableComponent />
        </Route>
        <Redirect to={"/"}></Redirect>
      </Switch>
    </Router>
  );
}

export default AppRoutes;
