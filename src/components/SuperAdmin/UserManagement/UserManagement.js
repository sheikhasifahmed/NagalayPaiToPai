import React from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import LogoVR from "../../../images/logo_vr.png";
import AllHost from "./AllHost/AllHost";

const UserManagement = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col sm={3} className="supersidebar">
            <div className="superlogo">
              <img src={LogoVR} alt="" className="slogo" />
            </div>
            <h5>Admin</h5>
            <div className="supersidenav">
              <Nav defaultActiveKey="" className="flex-column">
                <Nav.Link>User Management </Nav.Link>
                <Nav.Link eventKey="link-1">Roles</Nav.Link>
                <Nav.Link eventKey="link-2">All Users</Nav.Link>
                <Nav.Link eventKey="link-3">All Hosts</Nav.Link>
                <Nav.Link eventKey="link-4">Minimum Due</Nav.Link>
              </Nav>
            </div>
            <div className="signout">
              <Button>Sign Out</Button>
            </div>
          </Col>
          <Col sm={9}>
            <AllHost></AllHost>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserManagement;
