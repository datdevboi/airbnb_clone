import * as React from "react";
import { FieldProps } from "formik";
import { Form, Input, InputNumber } from "antd";

const FormItem = Form.Item;

export const InputField: React.SFC<
  FieldProps<any> & {
    prefix: React.ReactNode;
    label?: string;
    useNumberComponent?: boolean;
  }
> = ({
  field: { onChange, ...field }, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  useNumberComponent = false,
  ...props
}) => {
  const errorMsg = touched[field.name] && errors[field.name];

  const Comp: any = useNumberComponent ? InputNumber : Input;

  return (
    <FormItem
      label={label}
      validateStatus={errorMsg ? "error" : "success"}
      help={errorMsg}
    >
      <Comp
        {...field}
        {...props}
        onChange={
          useNumberComponent
            ? (value: any) => {
                setFieldValue(field.name, value);
              }
            : onChange
        }
      />
    </FormItem>
  );
};
