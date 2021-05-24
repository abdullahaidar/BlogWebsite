import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './PostList.css';

const PostList = (props) => {
    console.log(props);

    return (
        <Container >
            <Row >
                <ul className='flex'>
                    {props.posts.map((element, index) =>
                        <li key={index}>
                            <Card style={{ width: '50rem', margin: '1rem' }}>
                                <Card.Body>
                                    <Card.Title>{element.title}</Card.Title>
                                    <Card.Text>{element.content} </Card.Text>
                                    <Button  className='btn' variant="primary">Read More</Button>
                                </Card.Body>
                            </Card>
                        </li>
                    )}
                </ul>
            </Row>
        </Container>
    )
}

export default PostList
