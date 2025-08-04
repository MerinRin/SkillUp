import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { courses } from '../components/Data';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

function Landing({ cartItems, setCartItems }) {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (course) => {
        setSelectedCourse(course);
        setShow(true);
    };

    const addToCart = (id) => {
        setCartItems((prevItems) => [...prevItems, id]);
    };

    return (
        <>
            <header>
                <div style={{ position: 'relative' }}>
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 2,
                            color: 'white',
                            textAlign: 'center',
                            textShadow: '5px 5px 20px rgba(0, 0, 0, 1)'
                        }}
                    >
                        <h2 style={{ fontSize: '4.5rem', fontWeight: 'bold' }}>
                            Explore Over 7,287 Courses from Top Instructors
                        </h2>
                        <p style={{ fontSize: '1.25rem' }}>
                            Learn Web Development, Design, Marketing & More
                        </p>
                        <a href='#courses' className="btn btn-primary btn-lg mt-3 shadow-lg">
                            Get Started
                        </a>
                    </div>

                    <img
                        src="https://incentiveandmotivation.com/wp-content/uploads/2022/08/Red-Black-Fitness-Gym-Presentation-Template-3-1024x576.png"
                        alt=""
                        className="d-block w-100"
                        style={{ height: '875px', objectFit: 'cover' }}
                    />
                </div>
            </header>

            <div id='courses'>
                <h1 className='p-5 fs-2'>Recommended courses for you,</h1>
                <div className="container">
                    <div className="row">
                        {courses.map(course => (
                            <div key={course.id} className="col-12 col-sm-6 col-lg-3 mb-4">
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={course.img} />
                                    <Card.Body>
                                        <Card.Title>{course.title}</Card.Title>
                                        <Card.Text>{course.description}</Card.Text>
                                        <div>
                                            <div className='pt-2'>
                                                <i className="fa-solid fa-star text-warning"></i>
                                                <i className="fa-solid fa-star text-warning"></i>
                                                <i className="fa-solid fa-star text-warning"></i>
                                                <i className="fa-solid fa-star text-warning"></i>
                                                <i className="fa-solid fa-star-half-stroke text-warning"></i>
                                                <span className="text-muted">{course.rating}/5 ({course.students - 4000} reviews)</span>
                                            </div>
                                            <div className='pb-3'>
                                                <span className="text-muted text-decoration-line-through me-2">₹{course.price + 100}</span>
                                                <span className="fw-bold text-success">₹{course.price}</span>
                                            </div>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <Button onClick={() => navigate(`/details/${course.id}`)} variant="primary">Details</Button>

                                            <Button variant="primary" onClick={() => { handleShow(course); addToCart(course.id) }} >
                                                Add to cart
                                            </Button>

                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                        ))}
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Added to Cart</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>The course has been added to your cart!</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={() => navigate(`/cart`)}>
                                    Go to Cart
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing