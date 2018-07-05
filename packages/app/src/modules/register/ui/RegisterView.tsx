import * as React from "react";
import { withFormik, FormikErrors, FormikProps, Field } from "formik";
import { View } from "react-native";
import { InputField } from "../../shared/InputField";
import { validUserSchema } from "@airbnbclone/common";

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

        <Button title="Register" onPress={handleSubmit as any} />
      </View>
    );
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { setErrors, props, setSubmitting }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);
