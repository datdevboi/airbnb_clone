import * as React from "react";
import { withFormik, FormikProps, Field, Form } from "formik";
import { Form as AntForm, Icon, Button } from "antd";
import { changePasswordSchema } from "@airbnbclone/common";

import { InputField } from "../../shared/InputField";
import { NormalizeErrorMap } from "@airbnbclone/controller";
const FormItem = AntForm.Item;

interface FormValues {
  newPassword: string;
}
interface Props {
  submit: (values: FormValues) => Promise<NormalizeErrorMap | null>;
}

class C extends React.Component<FormikProps<FormValues> & Props> {
  render() {
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
        <Form style={{ width: 500 }}>
          <Field
            name="newPassword"
            placeholder="New Password"
            type="password"
            prefix={
              <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} /> as any
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
    const errors = await props.submit(values);

    console.log(errors);

    if (errors) {
      setErrors(errors);
    }
  }
})(C);
