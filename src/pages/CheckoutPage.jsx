import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';

function CheckoutPage() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        upi: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        alert('Purchase successful!');
    };

    return (
        <Container className="my-5">
            <Card className="p-4 shadow-sm">
                <h3 className="mb-4 text-center">Enter Your Details</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email ID</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="10-digit mobile number"
                            pattern="[0-9]{10}"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="address"
                            rows={2}
                            value={form.address}
                            onChange={handleChange}
                            placeholder="Your delivery or billing address"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>UPI ID</Form.Label>
                        <Form.Control
                            type="text"
                            name="upi"
                            value={form.upi}
                            onChange={handleChange}
                            placeholder="yourupi@bank"
                            required
                        />
                    </Form.Group>

                    <Button type="submit" variant="primary" className="w-100">
                        Pay Now
                    </Button>
                </Form>
            </Card>
        </Container>
    );
}

export default CheckoutPage;
