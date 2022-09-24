import React from "react";
import logo from "../../images/logo.png";
import loacationmark from "../../images/location-mark.png";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const header = () => {
  return (
    <div>
      <div className="header">
        <div className="container"></div>
      </div>
      <Navbar className="border-bottom">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" className="logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <div className="location text-white">
                <img src={loacationmark} alt="" className="location p-1" />
                Sector x, Uttara,Dhaka
              </div>
            </Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a className="text-white" href="login">
                Became a Host
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default header;
