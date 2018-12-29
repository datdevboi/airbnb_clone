import * as React from "react";
import { ChangePasswordView } from "./ui/ChangePasswordView";
import { ChangePasswordController } from "@airbnbclone/controller";

export class ChangePasswordConnector extends React.Component<any> {
  render() {
    const { id } = this.props.match.params;

    return (
      <ChangePasswordController>
        {({ submit }: { submit: any }) => (
          <ChangePasswordView id={id} submit={submit} />
        )}
      </ChangePasswordController>
    );
  }
}
