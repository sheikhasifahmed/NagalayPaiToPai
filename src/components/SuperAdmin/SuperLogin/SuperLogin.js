import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import BigLogo from "../../../images/logo_vr.png";
import "./SuperLogin.css";

const SuperLogin = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Text className="text-warning">
                  Welcome to Super Admin
                </Form.Text>
                <h1 className="text-white">Log in to continue</h1>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSuperEmail">
                <Form.Control
                  type="email"
                  className=" bg-transparent"
                  placeholder="Email or Phone Number"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSuperPassword">
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
                <Form.Text>
                  <span className="text-warning">Forget Password?</span>
                </Form.Text>
              </Form.Group>
            </Form>
          </Col>
          <Col className="text-right">
            <img src={BigLogo} alt="" className="biglogo" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SuperLogin;
