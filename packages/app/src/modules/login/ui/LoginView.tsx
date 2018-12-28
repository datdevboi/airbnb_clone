import * as React from "react";
import { withFormik, FormikErrors, FormikProps, Field } from "formik";
import { View, Text } from "react-native";
import { InputField } from "../../shared/InputField";
import { loginSchema } from "@airbnbclone/common";

import { Button, Card } from "react-native-elements";

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

          justifyContent: "center"
        }}
      >
        <Card>
          <Text style={{ fontSize: 30, marginBottom: 10 }}>Login</Text>
          <Field
            name="email"
            placeholder="Email"
            component={InputField as any}
            containerStyle={{ width: "100%" }}
          />

          <Field
            name="password"
            secureTextEntry={true}
            placeholder="Password"
            component={InputField as any}
            containerStyle={{ width: "100%" }}
          />

          <Button
            style={{ marginTop: 20 }}
            title="Login"
            onPress={handleSubmit as any}
          />
        </Card>
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
