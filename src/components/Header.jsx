import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';



function Header() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
                <Container fluid className="px-3">
                    <Navbar.Brand onClick={() => navigate(`/`)}>
                        <img
                            src="./src/media/NavLogo.png"
                            alt="Logo"
                            style={{ height: 50, paddingInline: 10 }}
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 text-center"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className="px-3 fs-6 fs-md-5" onClick={() => navigate(`/`)}>
                                Home
                            </Nav.Link>
                            <Nav.Link className="px-3 fs-6 fs-md-5" onClick={() => navigate(`/`)}>
                                Courses
                            </Nav.Link>
                            <Nav.Link className="px-3 fs-6 fs-md-5" onClick={() => navigate(`/cart`)}>
                                Cart
                            </Nav.Link>
                        </Nav>

                        {/* Auth Buttons */}
                        <div className="d-flex flex-column flex-md-row gap-2 gap-md-4 mt-3 mt-md-0">
                            <Button className="fs-6 px-3" variant="outline-warning">
                                Sign up
                            </Button>
                            <Button className="fs-6 px-3" variant="outline-warning">
                                Login
                            </Button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    )
}

export default Header