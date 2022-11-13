import React from "react";

import {
  css,
  Button,
  Card,
  Grid,
  Input,
  Spacer,
  Text,
} from "@nextui-org/react";

import { login } from "../../util/services/LoginService";

const button = css({ float: "right" });

let email: string;
let password: string;

const LoginCard: React.FC = () => {
  return (
    <Grid.Container justify="center">
      <Card css={{ margin: "32px", width: "50%" }}>
        <Card.Header>
          <Text>Login</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Input
            bordered
            label="Email"
            onChange={(e) => {
              email = e.target.value;
            }}
          />
          <Spacer y={1} />
          <Input.Password
            bordered
            label="Password"
            onChange={(e) => {
              password = e.target.value;
            }}
          />
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Grid.Container justify="flex-end">
            <Button
              className={button()}
              onPress={() => {
                login(email, password);
              }}
            >
              Submit
            </Button>
          </Grid.Container>
        </Card.Footer>
      </Card>
    </Grid.Container>
  );
};

export default LoginCard;
