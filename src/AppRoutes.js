import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CarInfo from "./pages/CarInfo/CarInfo";
import Cms from "./pages/Cms/Cms";
import CmsCreate from "./pages/CmsCreate/CmsCreate";
import CmsUpdate from "./pages/CmsUpdate/CmsUpdate";

import IframeRouter from "./pages/IFrame/IframeRouter";
import SelectCar from "./pages/SelectCar/SelectCar";
import SuccessfullyAuthed from "./pages/SuccessfullyAuthed/SuccessfullyAuthed";

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
        <Route path="/successfully">
          <SuccessfullyAuthed />
        </Route>
        <Route path="/carInfo/:carId">
          <CarInfo />
        </Route>
        <Route path="/selectCar">
          <SelectCar />
        </Route>
        <Redirect to={"/"} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
