import * as React from "react";
import { LoginView } from "./ui/LoginView";
import { LoginController } from "@airbnbclone/controller";

export class LoginConnector extends React.Component {
  render() {
    return (
      <LoginController>
        {({ submit }: { submit: any }) => <LoginView submit={submit} />}
      </LoginController>
    );
  }
}
 