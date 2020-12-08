import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import WithAuth from "./hocs/withAuth";
import WithSessionCookie from "./hocs/withSessionCookie";
import CarInfo from "./pages/CarInfo/CarInfo";
import Cms from "./pages/Cms/Cms";
import CmsCreate from "./pages/CmsCreate/CmsCreate";
import CmsUpdate from "./pages/CmsUpdate/CmsUpdate";

import IframeRouter from "./pages/IFrame/IframeRouter";
import NewMaintenance from "./pages/NewMaintenance/NewMaintenance";
import SelectCar from "./pages/SelectCar/SelectCar";
import SuccessfullyAuthed from "./pages/SuccessfullyAuthed/SuccessfullyAuthed";

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path={"/iframe"}>
          <WithAuth component={IframeRouter} />
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
        <Route path="/successfully">
          <WithSessionCookie component={SuccessfullyAuthed} />
        </Route>
        <Route path="/carInfo/:carId">
          <WithSessionCookie component={CarInfo} />
        </Route>
        <Route path="/selectCar">
          <WithSessionCookie component={SelectCar} />
        </Route>
        <Route path="/new-maintenance">
          <WithSessionCookie component={NewMaintenance} />
        </Route>
        <Redirect to={"/"} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
