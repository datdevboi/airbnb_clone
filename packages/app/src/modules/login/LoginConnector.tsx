import * as React from "react";
import { SecureStore } from "expo";
import { LoginView } from "../../modules/login/ui/LoginView";
import { LoginController } from "@airbnbclone/controller";
import { SID_KEY } from "../shared/constants";
export class LoginConnector extends React.Component {
  saveSessionId = (sid: string) => {
    SecureStore.setItemAsync(SID_KEY, sid);
  };
  render() {
    return (
      <LoginController onSessionId={this.saveSessionId}>
        {({ submit }: { submit: any }) => <LoginView submit={submit} />}
      </LoginController>
    );
  }
}
