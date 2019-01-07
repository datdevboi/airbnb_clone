import * as React from "react";
import { Field } from "formik";

import { Form, InputNumber } from "antd";

export const Page3 = () => (
  <>
    <Form.Item label="Latitude">
      <Field name="latitude" placeholder="0" component={InputNumber} />
    </Form.Item>
    <Form.Item label="Longtitude">
      <Field name="longtitude" placeholder="0" component={InputNumber} />
    </Form.Item>
    <Form.Item label="Amenities">
      <Field name="amenities" placeholder="0" component={InputNumber} />
    </Form.Item>
  </>
);
