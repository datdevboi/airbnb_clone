import * as React from "react";
import { RegisterView } from "./ui/RegisterView";
import { RegisterController } from "@airbnbclone/controller";
import { RouteComponentProps } from "react-router-dom";

export class RegisterConnector extends React.Component<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    this.props.history.push("/m/confirm-email", {
      message: "check your email to confirm your account"
    });
  };
  render() {
    return (
      <RegisterController>
        {({ submit }: { submit: any }) => (
          <RegisterView submit={submit} onFinish={this.onFinish} />
        )}
      </RegisterController>
    );
  }
}
