import * as React from "react";
import { ForgotPasswordView } from "./ui/ForgotPasswordView";
import { ForgotPasswordController } from "@airbnbclone/controller";

export class ForgotPasswordConnector extends React.Component {
  render() {
    return (
      <ForgotPasswordController>
        {({ submit }: { submit: any }) => (
          <ForgotPasswordView submit={submit} />
        )}
      </ForgotPasswordController>
    );
  }
}
