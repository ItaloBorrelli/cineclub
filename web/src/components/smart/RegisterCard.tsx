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

import { register } from "../../util/services/RegisterUserService";

const button = css({ float: "right" });

let email: string;
let password: string;
let firstname: string;
let lastname: string;

const RegisterCard: React.FC = () => {
  return (
    <Grid.Container justify="center">
      <Card css={{ margin: "32px", width: "50%" }}>
        <Card.Header>
          <Text>Register</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Input
            bordered
            label="First Name"
            onChange={(e) => {
              firstname = e.target.value;
            }}
          />
          <Spacer y={1} />
          <Input
            bordered
            label="Last Name"
            onChange={(e) => {
              lastname = e.target.value;
            }}
          />
          <Spacer y={1} />
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
          <Spacer y={1} />
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Grid.Container justify="flex-end">
            <Button
              className={button()}
              onPress={() => {
                register(email, password, firstname, lastname);
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

export default RegisterCard;
