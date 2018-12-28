import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import { normalizeErrors } from "../../utils/normalizeErrors";

interface IProps {
  onSessionId?: (sessionId: string) => void;
  children: (
    data: { submit: (values: any) => Promise<any> }
  ) => JSX.Element | null;
}

class LC extends React.PureComponent<ChildMutateProps<IProps, any, any>> {
  submit = async (values: any) => {
    const {
      data: { login }
    } = await this.props.mutate({
      variables: values
    });

    if (login.errors) {
      return normalizeErrors(login.errors);
    }

    if (login.sessionId && this.props.onSessionId) {
      this.props.onSessionId(login.sessionId);
    }

    return null;
  };

  render() {
    return this.props.children({
      submit: this.submit
    });
  }
}

const loginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      errors {
        path
        message
      }
      sessionId
    }
  }
`;

export const LoginController = graphql(loginMutation)(LC);
