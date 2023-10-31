import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import './Header.css'
export const Header = () => {
  return (
    <Navbar
      fixed="top"
      style={{ position: "fixed", top: 0, zIndex: 10 }}
      bg="light"
      expand="lg"
    >
      <Container>
        <Navbar.Brand>
          {" "}
          <Link to={"./"}>
 {/*     <img style={{ height: "50px" }} src={logo} alt="" />{" "}  */}
           <h1 className="heading" style={{color:"black"}}>
                  Title<span className="textcolor"> Ai</span> <br />
              </h1>{" "}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav >  <Link className="link" to={"./"}>Home </Link></Nav>
            <Nav>  <Link className="link"to={"./about"}>About Us</Link></Nav>
            <Nav >  <Link className="link"to={"./contact"}>Contact Us </Link></Nav>
           {/*  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
