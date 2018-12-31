import * as React from "react";
import { ForgotPasswordView } from "./ui/ForgotPasswordView";
import { ForgotPasswordController } from "@airbnbclone/controller";
import { RouteComponentProps } from "react-router-dom";

export class ForgotPasswordConnector extends React.Component<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    this.props.history.push("/m/reset-password", {
      message:
        "check your email for further instructions on how to reset your password"
    });
  };
  render() {
    return (
      <ForgotPasswordController>
        {({ submit }: { submit: any }) => (
          <ForgotPasswordView submit={submit} onFinish={this.onFinish} />
        )}
      </ForgotPasswordController>
    );
  }
}
