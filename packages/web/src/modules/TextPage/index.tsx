import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

export class TextPage extends React.Component<RouteComponentProps<{}>> {
  render() {
    const { state } = this.props.location;
    return <h2>{state && state.message ? state.message : "hello"}</h2>;
  }
}
