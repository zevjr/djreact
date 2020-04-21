import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Form } from "react-bootstrap";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

function CustomForm({ requestType, buttonName, articleID }) {

    const [method, setMethod] = useState(false)
    const { register, handleSubmit } = useForm();
    let history = useHistory();


    useEffect(() => {
        if (buttonName === 'Update') {
            setMethod(true)
        }
    }, [buttonName])

    function onSubmit(data) {
        switch (requestType) {
            case 'post':
                axios.post('http://127.0.0.1:8000/api/', (data))
                    .then(res => console.log(res))
                    .catch(error => console.error(error, data));
                break;
            case 'put':
                axios.put(`http://127.0.0.1:8000/api/${articleID}/`, (data))
                    .then(res => console.log(res))
                    .catch(error => console.error(error, data));
                break;
            default:
                break;
        }
    }
    function handleDeleted() {
        axios.delete(`http://127.0.0.1:8000/api/${articleID}/`)
            .then(res => console.log(res))
            .catch(error => console.error(error));
        history.push('/');
    }

    return (
        <Card>
            <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>
                                Title
                                <Form.Control ref={register} name="title" placeholder="Put a title hear!" />
                            </Form.Label>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>
                                Content
                                <Form.Control ref={register} name="content" placeholder="Enter some content ..." />
                            </Form.Label>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Button className="mr-3" variant="primary" type="submit"> {buttonName} </Button>
                            {method &&
                                <Button variant="danger" type="submit" onClick={handleDeleted}> Delete </Button>
                            }
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default CustomForm;