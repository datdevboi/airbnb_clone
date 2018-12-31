import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

export class TextPage extends React.Component<RouteComponentProps<{}>> {
  render() {
    const { message } = this.props.location.state;
    return <div>{message}</div>;
  }
}
