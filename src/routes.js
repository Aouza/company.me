import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Details from "./pages/Details";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/details/:id" component={Details} />
    </Switch>
  );
};

export default Routes;
