import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Form } from "react-bootstrap";
import { postDataAPI, putDataAPI, deleteDataAPI } from '../helpers/connect';
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

    async function onSubmit(data) {
        switch (requestType) {
            case 'post':
                await postDataAPI(data)
                break;
            case 'put':
                await putDataAPI(articleID, data)
                break;
            default:
                break;
        }
    }
    async function handleDeleted() {
        await deleteDataAPI(articleID)
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