import * as React from "react";
import { withFormik, FormikErrors, FormikProps, Field } from "formik";
import { View } from "react-native";
import { InputField } from "../../shared/InputField";
import { loginSchema } from "@airbnbclone/common";

import { Button } from "react-native-elements";

interface FormValues {
  email: string;
  password: string;
}
interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends React.Component<FormikProps<FormValues> & Props> {
  render() {
    const { handleSubmit } = this.props;

    return (
      <View
        style={{
          flex: 1,
          display: "flex",
          position: "relative",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Field name="email" placeholder="Email" component={InputField as any} />

        <Field
          name="password"
          secureTextEntry={true}
          placeholder="Password"
          component={InputField as any}
        />

        <Button title="Login" onPress={handleSubmit as any} />
      </View>
    );
  }
}

export const LoginView = withFormik<Props, FormValues>({
  validationSchema: loginSchema,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { setErrors, props, setSubmitting }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);
