import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Cms from "./pages/Cms/Cms";
import CmsCreate from "./pages/CmsCreate/CmsCreate";
import CmsUpdate from "./pages/CmsUpdate/CmsUpdate";

import IframeRouter from "./pages/IFrame/IframeRouter";

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path={"/iframe"}>
          <IframeRouter />
        </Route>
        <Route path={"/cms"}>
          <Cms />
        </Route>
        <Route path="/cms-create">
          <CmsCreate />
        </Route>
        <Route path="/cms-update/:id">
          <CmsUpdate />
        </Route>
        <Redirect to={"/"}></Redirect>
      </Switch>
    </Router>
  );
}

export default AppRoutes;
