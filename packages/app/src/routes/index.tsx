import * as React from "react";
import { NativeRouter, Switch, Route } from "react-router-native";
import { RegisterConnector } from "../modules/register/RegisterConnector";
import { LoginConnector } from "../modules/login/LoginConnector";

export const Routes = () => (
  <NativeRouter initialEntries={["/login"]}>
    <Switch>
      <Route exact={true} path="/login" component={LoginConnector} />
      <Route exact={true} path="/register" component={RegisterConnector} />
    </Switch>
  </NativeRouter>
);
