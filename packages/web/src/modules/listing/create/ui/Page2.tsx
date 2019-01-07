import * as React from "react";
import { Field } from "formik";

import { InputNumber } from "antd";

export const Page2 = () => (
  <>
    <Field label="Price" name="price" placeholder="0" component={InputNumber} />

    <Field label="Beds" name="beds" placeholder="0" component={InputNumber} />

    <Field
      label="Guests"
      name="guests"
      placeholder="0"
      component={InputNumber}
    />
  </>
);
