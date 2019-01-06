import * as React from "react";
import { Field } from "formik";
import { InputField } from "../../../shared/InputField";

export const Page2 = () => (
  <>
    <Field name="name" placeholder="Name" component={InputField} />

    <Field
      name="description"
      placeholder="Description"
      component={InputField}
    />
  </>
);
