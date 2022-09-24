import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Button, Card, Container } from "react-bootstrap";

const WithdrawSuccess = () => {
  return (
    <div>
      <Container>
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
              Withdraw Successful
            </Card.Title>
            <Card.Text className="my-5">
              <Button variant="outline-warning rounded-pill fs-5 px-5">
                View transaction history
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default WithdrawSuccess;
