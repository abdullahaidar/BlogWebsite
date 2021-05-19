import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export const AddPost = () => {
    return (
        <Container>
            <Form>
                <h3>Add a New Post</h3>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Add a title" />
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button type="submit" className='mt-3'>Submit</Button>
            </Form>
        </Container>
    )
}
