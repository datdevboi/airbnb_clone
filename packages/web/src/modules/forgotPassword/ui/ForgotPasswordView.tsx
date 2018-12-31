import * as React from "react";
import { withFormik, FormikProps, Field } from "formik";
import { Form, Icon, Button } from "antd";

import { InputField } from "../../shared/InputField";
const FormItem = Form.Item;

interface FormValues {
  email: string;
}
interface Props {
  submit: (values: FormValues) => Promise<null>;
  onFinish: () => void;
}

class C extends React.Component<FormikProps<FormValues> & Props> {
  render() {
    const { handleSubmit } = this.props;

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
        <Form
          style={{ width: 500 }}
          className="login-form"
          onSubmit={handleSubmit}
        >
          <Field
            name="email"
            placeholder="Email"
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
              Reset Password
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export const ForgotPasswordView = withFormik<Props, FormValues>({
  mapPropsToValues: () => ({ email: "" }),
  handleSubmit: async (values, { setErrors, props, setSubmitting }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    } else {
      props.onFinish();
    }
  },

  validateOnBlur: false,
  validateOnChange: false
})(C);
