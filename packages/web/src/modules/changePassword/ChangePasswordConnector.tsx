import * as React from "react";
import { ChangePasswordView } from "./ui/ChangePasswordView";
import { ChangePasswordController } from "@airbnbclone/controller";
import { RouteComponentProps } from "react-router-dom";

export class ChangePasswordConnector extends React.Component<
  RouteComponentProps<{
    key: string;
  }>
> {
  onFinish = () => {
    this.props.history.push("/login");
  };
  render() {
    const { key } = this.props.match.params;

    return (
      <ChangePasswordController>
        {({ submit }: { submit: any }) => (
          <ChangePasswordView
            onFinish={this.onFinish}
            // tslint:disable-next-line:jsx-no-lambda
            submit={async ({ newPassword }) =>
              submit({
                newPassword,
                key
              })
            }
          />
        )}
      </ChangePasswordController>
    );
  }
}
