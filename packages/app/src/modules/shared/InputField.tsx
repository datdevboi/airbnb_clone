import * as React from "react";
import { FieldProps } from "formik";
import { Input } from "react-native-elements";

const errStyle = {
  color: "red"
};
export class InputField extends React.Component<
  FieldProps<any> & { name: string }
> {
  onChangeText = (text: string) => {
    this.props.form.setFieldValue(this.props.name, text);
  };
  render() {
    const {
      field, // { name, value, onChange, onBlur }
      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
      ...props
    } = this.props;
    const errorMsg = touched[field.name] && errors[field.name];

    return (
      <Input
        {...props}
        errorStyle={errStyle}
        errorMessage={errorMsg}
        onChangeText={this.onChangeText}
        value={field.value}
      />
    );
  }
}
