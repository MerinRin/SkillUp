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
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <img style={{ height: 60, paddingInline: 40 }} src="./src/media/NavLogo.png" alt="" />

                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='px-5 fs-5' onClick={() => navigate(`/`)}>Home</Nav.Link>
                            <Nav.Link className='px-5 fs-5'  onClick={() => navigate(`/`)}>Courses</Nav.Link>
                            <Nav.Link className='px-5 fs-5' onClick={() => navigate(`/cart`)}>Cart</Nav.Link>
                        </Nav>

                        <div className='d-flex gap-4 px-5'>
                            <Button className='fs-5 px-4' variant="outline-warning">Sign up</Button>
                            <Button className='fs-5 px-4' variant="outline-warning">Login</Button>
                        </div>


                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header