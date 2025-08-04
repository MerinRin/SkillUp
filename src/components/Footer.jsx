import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <Container>
        <Row className="mb-4">
          <Col md={4}>
            <img style={{height : '80px'}} src="./src/media/Navlogo.png" alt="" />
            <p>Level up your skills with curated courses from top instructors worldwide.</p>
          </Col>

          <Col md={2}>
            <h6>Explore</h6>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-light p-0 mb-2">Courses</Nav.Link>
              <Nav.Link href="#" className="text-light p-0 mb-2">Learning Paths</Nav.Link>
              <Nav.Link href="#" className="text-light p-0 mb-2">Pricing</Nav.Link>
            </Nav>
          </Col>

          <Col md={2}>
            <h6>Company</h6>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-light p-0 mb-2">About Us</Nav.Link>
              <Nav.Link href="#" className="text-light p-0 mb-2">Careers</Nav.Link>
              <Nav.Link href="#" className="text-light p-0 mb-2">Blog</Nav.Link>
            </Nav>
          </Col>

          <Col md={4}>
            <h6>Subscribe</h6>
            <p>Get the latest updates on new courses and offers.</p>
            <form>
              <input type="email" placeholder="Email address" className="form-control mb-2" />
              <button className="btn btn-outline-light btn-sm" type="submit">Subscribe</button>
            </form>
          </Col>
        </Row>

        <hr className="border-light" />

        <Row className="text-center">
          <Col>
            <p className="mb-0">&copy; {new Date().getFullYear()} SkillUp. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
