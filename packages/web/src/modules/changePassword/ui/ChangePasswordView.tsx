import * as React from "react";
import { withFormik, FormikProps, Field } from "formik";
import { Form, Icon, Button } from "antd";
import { changePasswordSchema } from "@airbnbclone/common";

import { InputField } from "../../shared/InputField";
const FormItem = Form.Item;

interface FormValues {
  newPassword: string;
}
interface Props {
  submit: (values: FormValues) => Promise<null>;
  id: string;
}

class C extends React.Component<FormikProps<FormValues> & Props> {
  render() {
    const { handleSubmit, id } = this.props;

    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          position: "relative",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div>{id}</div>
        <Form
          style={{ width: 500 }}
          className="login-form"
          onSubmit={handleSubmit}
        >
          <Field
            name="newPassword"
            placeholder="New Password"
            type="password"
            prefix={
              <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any
            }
            component={InputField}
          />

          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Change Password
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export const ChangePasswordView = withFormik<Props, FormValues, any>({
  validationSchema: changePasswordSchema,
  mapPropsToValues: () => ({ newPassword: "" }),
  handleSubmit: async (values, { setErrors, props, setSubmitting }) => {
    const errors = await props.submit({
      newPassword: values.newPassword
      // key: props.id
    });

    console.log(errors);
    if (errors) {
      setErrors(errors);
    }
  },

  validateOnBlur: false,
  validateOnChange: false
})(C);
