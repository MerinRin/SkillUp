import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { courses } from '../components/Data';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

function CourseDetail({ cartItems, setCartItems }) {
    const navigate = useNavigate();

    const { courseId } = useParams()
    const course = courses.find(c => c.id == parseInt(courseId));

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
        <div className="p-4 p-md-5">
            <div className="container-fluid w-100 d-flex flex-column flex-md-row border p-3 p-md-4 gap-4">
                <img
                    src={course.img}
                    alt=""
                    className="mx-auto"
                    style={{
                        height: '250px',
                        width: '100%',
                        maxWidth: '400px',
                        objectFit: 'cover',
                    }}
                />

                <div className="p-2 flex-grow-1">
                    <h1 className="fs-3 fs-md-2">{course.title}</h1>
                    <p>{course.description}</p>

                    <p><span className="fw-bold">Instructor:</span> {course.instructor}</p>
                    <p><span className="fw-bold">Duration:</span> {course.duration}</p>
                    <p><span className="fw-bold">Level:</span> {course.level}</p>
                    <p><span className="fw-bold">Language:</span> {course.language}</p>
                    <p><span className="fw-bold">Category:</span> {course.category}</p>
                    <p><span className="fw-bold">Students Enrolled:</span> {course.students}</p>

                    <div className="mt-2">
                        <span className="text-muted text-decoration-line-through me-2">
                            ₹{course.price + 100}
                        </span>
                        <span className="fw-bold text-success">₹{course.price}</span>
                        <span className="ms-3">
                            <i className="fa-solid fa-star text-warning"></i>
                            <i className="fa-solid fa-star text-warning"></i>
                            <i className="fa-solid fa-star text-warning"></i>
                            <i className="fa-solid fa-star text-warning"></i>
                            <i className="fa-solid fa-star-half-stroke text-warning"></i>
                        </span>
                        <span className="text-muted ms-2">
                            {course.rating}/5 ({course.students - 4000} reviews)
                        </span>
                    </div>

                    <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                        <Button
                            variant="primary"
                            onClick={() => {
                                handleShow(course);
                                addToCart(course.id);
                            }}
                        >
                            Add to cart
                        </Button>
                        <Button onClick={() => navigate(`/checkout`)} variant="primary">Buy Now</Button>
                    </div>
                </div>
            </div>

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

    )
}

export default CourseDetail
