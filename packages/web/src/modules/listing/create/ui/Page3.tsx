import * as React from "react";
import { Field } from "formik";
import { InputField } from "../../../../modules/shared/InputField";
import { TagField } from "../../../../modules/shared/TagField";

export const Page3 = () => (
  <>
    <Field
      label="Latitude"
      name="latitude"
      placeholder="0"
      component={InputField}
      useNumberComponent={true}
    />

    <Field
      label="Longtitude"
      name="longtitude"
      placeholder="0"
      component={InputField}
      useNumberComponent={true}
    />

    <Field
      label="Amenities"
      name="amenities"
      component={TagField}
      useNumberComponent={true}
    />
  </>
);
