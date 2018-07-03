import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { RegisterConnector } from "../modules/register/RegisterConnector";
import { LoginConnector } from "../modules/login/LoginConnector";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={LoginConnector} />
      <Route exact={true} path="/register" component={RegisterConnector} />
    </Switch>
  </BrowserRouter>
);
