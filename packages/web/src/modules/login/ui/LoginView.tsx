import * as React from "react";
import { withFormik, FormikProps, Field } from "formik";
import { Form, Icon, Button } from "antd";
import { NormalizeErrorMap } from "@airbnbclone/controller";
import { Link } from "react-router-dom";
import { loginSchema } from "@airbnbclone/common";
import { InputField } from "../../shared/InputField";
const FormItem = Form.Item;

interface FormValues {
  email: string;
  password: string;
}
interface Props {
  submit: (values: FormValues) => Promise<NormalizeErrorMap | null>;
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

          <Field
            name="password"
            type="password"
            placeholder="Password"
            prefix={
              <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} /> as any
            }
            component={InputField}
          />

          <FormItem>
            <Link className="login-form-forgot" to="/forgot-password">
              Forgot password
            </Link>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Login
            </Button>
          </FormItem>
          <FormItem>
            Or <Link to="/register">Register</Link>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export const LoginView = withFormik<Props, FormValues>({
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { setErrors, props, setSubmitting }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    } else {
      props.onFinish();
    }
  },
  validationSchema: loginSchema,
  validateOnBlur: false,
  validateOnChange: false
})(C);
