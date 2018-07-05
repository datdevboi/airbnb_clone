import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import { normalizeErrors } from "../../utils/normalizeErrors";

interface IProps {
  children: (
    data: { submit: (values: any) => Promise<any> }
  ) => JSX.Element | null;
}

class LC extends React.PureComponent<ChildMutateProps<IProps, any, any>> {
  submit = async (values: any) => {
    console.log(values);
    const {
      data: { login }
    } = await this.props.mutate({
      variables: values
    });
    console.log(login);

    if (login) {
      return normalizeErrors(login);
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
      path
      message
    }
  }
`;

export const LoginController = graphql(loginMutation)(LC);