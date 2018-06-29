import * as React from "react";
import { NativeRouter, Switch, Route } from "react-router-native";
import { RegisterConnector } from "../modules/register/RegisterConnector";

export const Routes = () => (
  <NativeRouter>
    <Switch>
      <Route exact={true} path="/" component={RegisterConnector} />
    </Switch>
  </NativeRouter>
);
