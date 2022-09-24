import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import useFirebase from "../../Firebase/useFirebase";

const Registration = () => {
  const navigate = useNavigate();

  const redirect_uri = "paitopai";

  const { googleLogin, logOut } = useFirebase();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        navigate("/paitopai");
      })
      .catch((error) => {
        alert(`${error.message}`);
      });
  };

  return (
    <div>
      <Container>
        <h1 className="text-warning text-center">Welcome to Nagalay</h1>
        <div class="d-flex justify-content-between">
          <h4 className="text-white">Create new Account</h4>
          <h4 className="text-warning">Sign up</h4>
        </div>
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="text"
                  className="bg-transparent"
                  placeholder="Govt. issued name"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicBirth">
                <Form.Control
                  type="text"
                  className=" bg-transparent"
                  placeholder="Date  of birth"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicGender">
                <Form.Select
                  aria-label="Default select example"
                  className="bg-transparent text-white"
                >
                  <option>Gender</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Control
                  type="text"
                  className="bg-transparent"
                  placeholder="Address"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicCity">
                <Form.Control
                  type="text"
                  className="bg-transparent"
                  placeholder="City"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicCountry">
                <Form.Control
                  type="text"
                  className="bg-transparent"
                  placeholder="Country"
                />
              </Form.Group>
            </Col>
          </Row>
          <h4 className="text-white">Optional informations</h4>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formMaritalStatus">
                <Form.Select
                  aria-label="Default select example"
                  className="bg-transparent text-white"
                >
                  <option>Marital Status</option>
                  <option value="1">Married</option>
                  <option value="2">Unmarried</option>
                  <option value="3">Other</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formLanguage">
                <Form.Select
                  aria-label="Default select example"
                  className="bg-transparent text-white"
                >
                  <option>Language</option>
                  <option value="1">Bangla</option>
                  <option value="2">English</option>
                  <option value="3">Arabic</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formLanguageSpoken">
                <Form.Select
                  aria-label="Default select example"
                  className="bg-transparent text-white"
                >
                  <option>Language Spoken</option>
                  <option value="1">Bangla</option>
                  <option value="2">English</option>
                  <option value="3">Arabic</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formCityVisited">
                <Form.Select
                  aria-label="Default select example"
                  className="bg-transparent text-white"
                >
                  <option>City Visited</option>
                  <option value="1">Bangladesh</option>
                  <option value="2">India</option>
                  <option value="3">Pakistan</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formWorkExperience">
                <Form.Select
                  aria-label="Default select example"
                  className="bg-transparent text-white"
                >
                  <option>Work Experience</option>
                  <option value="1">Bangla</option>
                  <option value="2">English</option>
                  <option value="3">Arabic</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="formEducationalExperience"
              >
                <Form.Select
                  aria-label="Default select example"
                  className="bg-transparent text-white"
                >
                  <option>Educational Experience</option>
                  <option value="1">Bangladesh</option>
                  <option value="2">India</option>
                  <option value="3">Pakistan</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formHobbies">
                <Form.Select
                  aria-label="Default select example"
                  className="bg-transparent text-white"
                >
                  <option>Hobbies</option>
                  <option value="1">Bangla</option>
                  <option value="2">English</option>
                  <option value="3">Arabic</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formSkills">
                <Form.Control
                  type="text"
                  className="bg-transparent"
                  placeholder="Skills"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formFacebook">
                <Form.Control
                  type="text"
                  className="bg-transparent"
                  placeholder="Facebook"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formInstagram">
                <Form.Control
                  type="text"
                  className="bg-transparent"
                  placeholder="Instagram"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formTwitter">
                <Form.Control
                  type="text"
                  className="bg-transparent"
                  placeholder="Twitter"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formLinkedIn">
                <Form.Control
                  type="text"
                  className="bg-transparent"
                  placeholder="LinkedIn"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Text className="text-white">
                Already have an account?
                <span className="text-warning">Sign in</span>
              </Form.Text>
            </Form.Group>
          </Row>
        </Form>
        <Row>
          <h4 className="text-white">Or</h4>
          <Col>
            <Button href="#">Facebook</Button>
          </Col>
          <Col>
            <Button href="#">Apple</Button>
          </Col>
          <Col>
            <Button onClick={handleGoogleLogin}>Google</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Registration;
