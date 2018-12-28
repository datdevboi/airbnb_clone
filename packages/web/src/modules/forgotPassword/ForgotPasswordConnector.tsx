import * as React from "react";
import { ForgotPasswordView } from "./ui/ForgotPasswordView";

export class ForgotPasswordConnector extends React.Component {
  dummySubmit = async () => {
    console.log("dummy submit");
    return null;
  };
  render() {
    return <ForgotPasswordView submit={this.dummySubmit} />;
  }
}
