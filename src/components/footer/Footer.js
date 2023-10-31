import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../footer/Footer.css";

const Footer = () => {
  return (
    <footer
      className="bg-none d-flex align-items-center py-2 mt-3"
      style={{ color: "white", borderTop: "1px solid white" }}
    >
      <Container>
        <Row>
          <Col xs={12}>
            <h3 className="footer-text mb-2 pt-1">
              Copyright © 2023 TitleAi All rights reserved{" "}
            </h3>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
