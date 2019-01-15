import * as React from "react";
import { Formik, Form, FormikActions } from "formik";
import { Form as AntForm, Button } from "antd";

import { Page1 } from "./ui/Page1";
import { Page2 } from "./ui/Page2";
import { Page3 } from "./ui/Page3";
import { RouteComponentProps } from "react-router-dom";
import { withCreateListing, WithCreateListing } from "@airbnbclone/controller";
const FormItem = AntForm.Item;

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
class C extends React.PureComponent<
  RouteComponentProps<{}> & WithCreateListing,
  State
> {
  state = {
    page: 0
  };
  submit = async (
    values: FormValues,
    { setSubmitting, resetForm }: FormikActions<FormValues>
  ) => {
    await this.props.createListing(values);
    setSubmitting(false);
    resetForm();
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
        {({ isSubmitting }) => (
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
            <Form style={{ width: 500 }} className="login-form">
              {pages[this.state.page]}

              <FormItem style={{ display: "flex", justifyContent: "flex-end" }}>
                {this.state.page === pages.length - 1 ? (
                  <div>
                    <Button
                      type="primary"
                      htmlType="submit"
                      disabled={isSubmitting}
                    >
                      create listing
                    </Button>
                  </div>
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

export const CreateListingConnector = withCreateListing(C);
