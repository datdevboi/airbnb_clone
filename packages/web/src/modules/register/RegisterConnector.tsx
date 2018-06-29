import * as React from "react";
import { RegisterView } from "./ui/RegisterView";
import { RegisterController } from "@airbnbclone/controller";

export class RegisterConnector extends React.Component {
  render() {
    return (
      <RegisterController>
        {({ submit }: { submit: any }) => <RegisterView submit={submit} />}
      </RegisterController>
    );
  }
}
