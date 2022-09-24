import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const DuePayment = () => {
  return (
    <div>
      <Container>
        <h4 className="text-white mb-3">
          <FontAwesomeIcon icon={faArrowLeft} /> Due Payment
        </h4>
        <Row className="pt-5">
          <Col>
            <Button variant="outline-primary">Bank Account</Button>{" "}
            <Button variant="outline-secondary">Visa/Master</Button>{" "}
            <Button variant="outline-success">Mobile Bank</Button>{" "}
            <Button variant="outline-warning">Credit/Debit card</Button>{" "}
          </Col>
        </Row>
        <Row className="pt-5">
          <Col>
            <Card
              className="bg-transparent border border-secondary"
              style={{ width: "20rem" }}
            >
              <Card.Body>
                <Card.Title className="text-white">Amount to pay</Card.Title>
                <Card.Text className="mt-5">
                  <Form>
                    <Form.Group controlId="formBalance">
                      <Form.Control
                        className="bg-transparent border-0 border-bottom rounded-0 text-white"
                        type="number"
                        placeholder="00.00"
                      />
                    </Form.Group>
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h4 className="text-white">Note</h4>
            <p className="text-white">
              You can pay due payment amount from here.
            </p>

            <Form>
              <Form.Group className="mb-3" controlId="formBankName">
                <Form.Label className="text-white">Bank Name</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Bank Name</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAccountHolderName">
                <Form.Label className="text-white">
                  Account Holder Name
                </Form.Label>
                <Form.Control type="text" placeholder="Istiak Alam Sader" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAccountNumber">
                <Form.Label className="text-white">Account Number</Form.Label>
                <Form.Control type="text" placeholder="1234 7362 8979678" />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="warning" size="lg" type="submit">
                  Confirm
                </Button>
              </div>
            </Form>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default DuePayment;
