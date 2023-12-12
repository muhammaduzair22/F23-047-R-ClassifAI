import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Subscription = () => {
    return (
        <div>
            <h2>Subscription</h2>
            {/* Add your subscription content here, e.g., a form */}
            <Form>
                {/* Add subscription form fields here */}
                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                {/* Add more form fields as needed */}
                <Button variant="primary" type="submit">
                    Update Subscription
                </Button>
            </Form>
        </div>
    );
};

export default Subscription;
