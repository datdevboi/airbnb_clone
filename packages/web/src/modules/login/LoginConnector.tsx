import * as React from "react";
import { LoginView } from "./ui/LoginView";

export class LoginConnector extends React.Component {
  dummySubmit = async (values: any) => {
    console.log(values);

    return null;
  };
  render() {
    return (
      <LoginView submit={this.dummySubmit} />
      //   <RegisterController>
      //     {({ submit }: { submit: any }) => <RegisterView submit={submit} />}
      //   </RegisterController>
    );
  }
}
