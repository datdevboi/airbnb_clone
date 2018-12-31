import * as React from "react";
import { LoginView } from "./ui/LoginView";
import { LoginController } from "@airbnbclone/controller";
import { RouteComponentProps } from "react-router-dom";

export class LoginConnector extends React.Component<RouteComponentProps<{}>> {
  onFinish = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <LoginController>
        {({ submit }: { submit: any }) => (
          <LoginView submit={submit} onFinish={this.onFinish} />
        )}
      </LoginController>
    );
  }
}
