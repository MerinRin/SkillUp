import React , { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { courses } from '../components/Data';

function Cart({cartItems, setCartItems}) {

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(itemId => itemId !== id));
    };
    const navigate = useNavigate();

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const subtotal = courses
            .filter(course => cartItems.includes(course.id))
            .reduce((sum, course) => sum + course.price, 0);
        setTotal(subtotal);
    }, [cartItems]);

    return (
        <>
            <div className="container py-5">
                <h2>Your Cart</h2>
                <div className="container">
                    <div className="row p-4">
                        {courses.filter(course => cartItems.includes(course.id)).map(course => (
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
                                            <Button onClick={() => removeFromCart(course.id)} variant="danger">Remove from Cart</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            
                        ))}
                    </div>
                </div>
                <h2>Cart Summary</h2>
                <div className="col-md-4">
                    <div className="p-3 border rounded">
                        <p>Subtotal:</p>
                        <p>No of courses: {cartItems.length}</p>
                        <p>Total: ₹{total+cartItems.length*100}</p>
                        <p>Discount: ₹{cartItems.length*100}</p>
                        <hr />
                        <h5>Total: ₹{total}</h5>
                        <Button onClick={() => navigate(`/checkout`)} variant="success" className="w-100 mt-2">Proceed to Checkout</Button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart