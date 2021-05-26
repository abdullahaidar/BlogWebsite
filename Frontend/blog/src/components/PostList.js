import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Card, Button } from 'react-bootstrap';
import './PostList.css';

const PostList = (props) => {
        console.log(props.posts)

    const deleteHandel = (id) => {
        props.deletePost(id);
    }

    return (
        <Container >
            <Row >
                <ul className='flex'>
                    {props.posts ? props.posts.map((element, index) =>
                        <li key={index}>
                            <Card style={{ margin: '1rem' }}>
                                <Card.Body>
                                    <Card.Title>{element.title}</Card.Title>
                                    <Card.Text>{element.content} </Card.Text>
                                    <Link to={`/post/${element.id}`}>
                                        <Button className='btn' variant="primary" >Read More</Button>
                                    </Link>
                                    <Link to={`/edit/${element.id}`}><Button className='btn-edit'>Edit Post</Button></Link>
                                    <Button className='btn-edit' onClick={() => deleteHandel(element.id)}>Delete Post</Button>
                                </Card.Body>
                            </Card>
                        </li>)
                        : <h1>There are no posts</h1>
                    }
                </ul>
            </Row>
        </Container>
    )
}

export default PostList
