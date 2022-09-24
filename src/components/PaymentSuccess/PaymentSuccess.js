import React from "react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card } from "react-bootstrap";
import "./PaymentSuccess.css";

const PaymentSuccess = () => {
  return (
    <div>
      <Card
        className="bg-dark-nagalay border border-secondary text-center mx-auto m-5 rounded-4"
        style={{ width: "25rem" }}
      >
        <Card.Body>
          <Card.Text className="my-5">
            <FontAwesomeIcon
              className="text-successfull fs-1"
              icon={faCheckCircle}
            />
          </Card.Text>
          <Card.Title className="text-white fs-2">
            Payment Successful
          </Card.Title>
          <Card.Text className="my-5">
            <Button variant="outline-warning rounded-pill fs-5 px-5">
              View transaction history
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PaymentSuccess;
