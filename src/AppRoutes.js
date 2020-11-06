import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path={"/"}>
          <div>Hello world!</div>
        </Route>
       
        <Redirect to={'/'}></Redirect>
      </Switch>
    </Router>
  );
}

export default AppRoutes;