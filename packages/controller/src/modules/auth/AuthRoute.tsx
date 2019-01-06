import * as React from "react";
import { RouteProps, Route, RouteComponentProps, Redirect } from "react-router";
import gql from "graphql-tag";
import { graphql, ChildProps } from "react-apollo";
import { MeQuery } from "../../schemaTypes";

type Props = RouteProps;

class C extends React.PureComponent<ChildProps<Props, MeQuery>> {
  renderRouter = (routeProps: RouteComponentProps<{}>) => {
    const { data, component } = this.props;

    if (!data || !data.loading) {
      return null;
    }

    const { me } = data;
    if (!me) {
      return <Redirect to="/login" />;
    }

    const Component = component as any;

    return <Component {...routeProps} />;
  };
  render() {
    const { data: _, component: __, ...rest } = this.props;
    return <Route {...rest} render={this.renderRouter} />;
  }
}

const meQuery = gql`
  query MeQuery {
    me {
      email
    }
  }
`;

export const AuthRoute = graphql<Props, MeQuery>(meQuery)(C);
