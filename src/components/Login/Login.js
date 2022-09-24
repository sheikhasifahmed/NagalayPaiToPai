import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <div>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Text className="text-warning">Welcome to Nagalay</Form.Text>
            <h1 className="text-white">Sign in to your account</h1>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              className=" bg-transparent"
              placeholder="Email or Phone Number"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              className=" bg-transparent"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign in
          </Button>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Text className="text-white">
              Don’t have an account?{" "}
              <span className="text-warning">Sign Up</span>
            </Form.Text>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
