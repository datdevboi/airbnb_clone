import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";

interface IProps {
  children: (
    data: { submit: (values: any) => Promise<null> }
  ) => JSX.Element | null;
}

class FP extends React.PureComponent<ChildMutateProps<IProps, any, any>> {
  submit = async (values: any) => {
    await this.props.mutate({
      variables: values
    });

    return null;
  };
  render() {
    return this.props.children({
      submit: this.submit
    });
  }
}

const forgotPasswordMutation = gql`
  mutation SendForgotPasswordMutation($email: String!) {
    sendForgotPasswordEmail(email: $email)
  }
`;

export const ForgotPasswordController = graphql(forgotPasswordMutation)(FP);
