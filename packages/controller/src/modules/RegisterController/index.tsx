import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import { normalizeErrors } from "../../utils/normalizeErrors";
import { NormalizeErrorMap } from "../types/NormalizeErrorMap";

interface IProps {
  children: (
    data: { submit: (values: any) => Promise<NormalizeErrorMap | null> }
  ) => JSX.Element | null;
}

class RC extends React.PureComponent<ChildMutateProps<IProps, any, any>> {
  submit = async (values: any) => {
    console.log(values);
    const {
      data: { register }
    } = await this.props.mutate({
      variables: values
    });
    console.log(register);

    if (register) {
      return normalizeErrors(register);
    }
    return null;
  };
  render() {
    return this.props.children({
      submit: this.submit
    });
  }
}

const registerMutation = gql`
  mutation RegisterMutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      path
      message
    }
  }
`;

export const RegisterController = graphql(registerMutation)(RC);
