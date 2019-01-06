import * as React from "react";
import { Formik } from "formik";
import { Form, Button } from "antd";

import { Page1 } from "./ui/Page1";
import { Page2 } from "./ui/Page2";
import { Page3 } from "./ui/Page3";
import { RouteComponentProps } from "react-router-dom";
const FormItem = Form.Item;

// name: String!
//   category: String!
//   descrition: String!
//   price: Int!
//   beds: Int!
//   guest: Int!
//   latitude: Float!
//   longitude: Float!
//   amenities: [String!]!

interface FormValues {
  name: string;
  category: string;
  description: string;
  price: number;
  beds: number;
  guest: number;
  latitude: number;
  longitude: number;
  amenities: string[];
}

interface State {
  page: number;
}
// tslint:disable-next-line:jsx-key
const pages = [<Page1 />, <Page2 />, <Page3 />];
export class CreateListingConnector extends React.PureComponent<
  RouteComponentProps<{}>,
  State
> {
  state = {
    page: 0
  };
  submit = (values: FormValues, actions: {}) => {
    console.log(values);
  };

  nextPage = () => {
    this.setState(prev => ({
      page: prev.page + 1
    }));
  };
  render() {
    return (
      <Formik<{}, FormValues>
        initialValues={{
          name: "",
          category: "",
          description: "",
          price: 0,
          beds: 0,
          guest: 0,
          latitude: 0,
          longitude: 0,
          amenities: []
        }}
        onSubmit={this.submit}
      >
        {({ handleSubmit }) => (
          <div
            style={{
              height: "100vh",
              width: "100vw",
              display: "flex",
              position: "relative",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Form
              style={{ width: 500 }}
              className="login-form"
              onSubmit={handleSubmit}
            >
              {pages[this.state.page]}
              <FormItem>
                {this.state.page === pages.length - 1 ? (
                  <Button type="primary" htmlType="submit">
                    create listing
                  </Button>
                ) : (
                  <Button type="primary" onClick={this.nextPage}>
                    next page
                  </Button>
                )}
              </FormItem>
            </Form>
          </div>
        )}
      </Formik>
    );
  }
}
