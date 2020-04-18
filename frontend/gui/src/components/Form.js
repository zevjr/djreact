import React from 'react';
import {useForm} from "react-hook-form";
import {Col, Form, Button, Card} from "react-bootstrap";

function CustomForm() {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data)
    return (
        <Card>
            <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>
                                Title
                                <Form.Control ref={register} name="title" placeholder="Put a title hear!"/>
                            </Form.Label>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>
                                Content
                                <Form.Control ref={register} name="content" placeholder="Enter some content ..."/>
                            </Form.Label>
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type="submit"> Submit </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default CustomForm;