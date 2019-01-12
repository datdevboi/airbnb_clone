import * as React from "react";
import { Field } from "formik";
import { InputField } from "../../../../modules/shared/InputField";

export const Page2 = () => (
  <>
    <Field
      label="Price"
      name="price"
      placeholder="0"
      component={InputField}
      useNumberComponent={true}
    />

    <Field
      label="Beds"
      name="beds"
      placeholder="0"
      component={InputField}
      useNumberComponent={true}
    />

    <Field
      label="Guests"
      name="guests"
      placeholder="0"
      component={InputField}
      useNumberComponent={true}
    />
  </>
);
