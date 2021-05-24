import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Card, Button } from 'react-bootstrap';
import './PostList.css';

const PostList = (props) => {
    console.log(props);

    return (
        <Container >
            <Row >
                <ul className='flex'>
                    {props.posts.map((element, index) =>
                        <li key={index}>
                            <Card style={{ margin: '1rem' }}>
                                <Card.Body>
                                    <Card.Title>{element.title}</Card.Title>
                                    <Card.Text>{element.content} </Card.Text>
                                    <Link to={`/post/${element.id}`}>
                                        <Button className='btn' variant="primary" >Read More</Button>
                                    </Link>
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
