import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export const AddPost = (props) => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    const addPost = () => {
        props.addPost(title);
         props.addPost(content);
        setTitle('');
        setContent('');
    }
    // const [state, setState] = useState({
    //     title: '',
    //     content:''
    // });

    return (
        <Container>
            <Form>
                <h3>Add a New Post</h3>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Add a title" id="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)} />
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" rows={3} id="textarea"
                        value={content}
                        onChange={(event) => setContent(event.target.value)} />
                </Form.Group>
                <Button type="submit" className='mt-3' onClick={addPost}>Submit</Button>
            </Form>
        </Container>
    )
}
