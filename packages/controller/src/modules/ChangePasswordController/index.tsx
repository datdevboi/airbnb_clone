import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import {
  ForgotPasswordChangeMutation,
  ForgotPasswordChangeMutationVariables
} from "../../schemaTypes";
import { normalizeErrors } from "../../utils/normalizeErrors";
import { NormalizeErrorMap } from "../types/NormalizeErrorMap";

interface IProps {
  children: (
    data: {
      submit: (
        values: ForgotPasswordChangeMutationVariables
      ) => Promise<NormalizeErrorMap | null>;
    }
  ) => JSX.Element | null;
}

class FP extends React.PureComponent<
  ChildMutateProps<
    IProps,
    ForgotPasswordChangeMutation,
    ForgotPasswordChangeMutationVariables
  >
> {
  submit = async (values: ForgotPasswordChangeMutationVariables) => {
    const {
      data: { forgotPasswordChange }
    } = await this.props.mutate({
      variables: values
    });

    if (forgotPasswordChange) {
      return normalizeErrors(forgotPasswordChange);
    }

    return null;
  };
  render() {
    return this.props.children({
      submit: this.submit
    });
  }
}

const ChangePasswordMutation = gql`
  mutation ForgotPasswordChangeMutation($key: String!, $newPassword: String!) {
    forgotPasswordChange(key: $key, newPassword: $newPassword) {
      path
      message
    }
  }
`;

export const ChangePasswordController = graphql<
  IProps,
  ForgotPasswordChangeMutation,
  ForgotPasswordChangeMutationVariables
>(ChangePasswordMutation)(FP);
