import * as React from "react";
import { FieldProps } from "formik";
import { Form, Input } from "antd";

const FormItem = Form.Item;

export const InputField: React.SFC<
  FieldProps<any> & { prefix: React.ReactNode; label?: string }
> = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  ...props
}) => {
  const errorMsg = touched[field.name] && errors[field.name];

  return (
    <FormItem
      label={label}
      validateStatus={errorMsg ? "error" : "success"}
      help={errorMsg}
    >
      <Input {...field} {...props} />
    </FormItem>
  );
};
