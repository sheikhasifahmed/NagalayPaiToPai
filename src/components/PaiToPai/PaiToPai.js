import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
  Table,
} from "react-bootstrap";
import "./PaiToPai.css";

const PaiToPai = () => {
  return (
    <div>
      <Container>
        <h4 className="text-white mb-3">
          <FontAwesomeIcon icon={faArrowLeft} /> Pai To Pai
        </h4>
        <div className="select-service">
          <Form.Select aria-label="Default select example">
            <option>Select Services</option>
            <option value="1">Space Rental</option>
            <option value="2">Car Rental</option>
            <option value="3">Car Parking</option>
            <option value="4">Enterprise</option>
          </Form.Select>
        </div>
        <Row>
          <Col>
            <Card className="bg-card-pai my-4">
              <Card.Body>
                <Card.Title className="text-white">Current Balance</Card.Title>
                <Card.Text className="text-white">10000</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-card-pai my-4">
              <Card.Body>
                <Card.Title className="text-white">Due Balance</Card.Title>
                <Card.Text className="text-white">1000</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-card-pai my-4">
              <Card.Body>
                <Card.Title className="text-white">
                  Pending Clearence
                </Card.Title>
                <Card.Text className="text-white">1000</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-card-pai my-4">
              <Card.Body>
                <Card.Title className="text-white">Avilable Points</Card.Title>
                <Card.Text className="text-white">100</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Note</h5>
            <ListGroup as="ul" className="pai-list mb-3">
              <ListGroup.Item>
                <li>
                  Credit Balance: If user pay digital payment, then this payment
                  diposit here.
                </li>
              </ListGroup.Item>
              <ListGroup.Item>
                <li>
                  Due Balance: If user pay cash payment, then our commission
                  diposit here.
                </li>
              </ListGroup.Item>
              <ListGroup.Item>
                <li>
                  Pending Clearence: If host request for withdraw, then this
                  amount show here till manually payment.
                </li>
              </ListGroup.Item>
              <ListGroup.Item>
                <li>
                  Available Points: User get point against every services and
                  user can use it at payment.
                </li>
              </ListGroup.Item>
            </ListGroup>
            <div className="p2p-button">
              <Button variant="warning" className="m-1" href="#" active>
                Due Payment
              </Button>
              <Button variant="warning" className="m-1" href="#">
                Withdraw
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <h4 className="text-white m-2">Transaction history</h4>
          <Table bordered rounded className="table-rounded m-3">
            <thead>
              <tr>
                <th>Date</th>
                <th>Transaction type</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>24 Jan, 2022</td>
                <td>Due Payment</td>
                <td>$2000</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>24 Jan, 2022</td>
                <td>Due Payment</td>
                <td>$2000</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>24 Jan, 2022</td>
                <td>Due Payment</td>
                <td>$2000</td>
                <td>Completed</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
};

export default PaiToPai;
