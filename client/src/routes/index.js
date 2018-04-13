import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Items from "../containers/Items";
import Login from "../containers/Login";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Items} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  )
}

export default Routes;