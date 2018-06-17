import * as React from "react";

import { Form, Icon, Input, Button } from "antd";
const FormItem = Form.Item;
export class RegisterView extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          height: 100 + "%",
          width: 100 + "%",
          display: "flex",
          position: "relative",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div style={{ width: 500 }} className="login-form">
          <FormItem>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          </FormItem>
          <FormItem>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          </FormItem>
          <FormItem>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
          </FormItem>
          <FormItem>
            Or <a href="">Login Now</a>
          </FormItem>
        </div>
      </div>
    );
  }
}
