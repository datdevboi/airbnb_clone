import * as React from "react";

import { LoginView } from "../../modules/login/ui/LoginView";
import { LoginController } from "@airbnbclone/controller";
export class LoginConnector extends React.Component {
  dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };
  render() {
    return (
      <LoginController>
        {({ submit }: { submit: any }) => <LoginView submit={submit} />}
      </LoginController>
    );
  }
}
