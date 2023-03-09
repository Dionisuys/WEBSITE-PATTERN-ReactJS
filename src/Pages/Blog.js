import React, { Component } from "react";
import { Col, Container, Row, Card, ListGroup } from "react-bootstrap";

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <Card className="m-5 flex-row">
              <img width={300} height={200} className="mr-3" src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card.Body className="m-3">
                <h5>Blog post</h5>
                <p>
                The first sentence of a post should have a conversational tone and articulate the main 
                point of the blog post. Internet readers can easily navigate away from a post, so making 
                your lede interesting and to the point is important. Look at the opening lines from 
                University of Wisconsin-Madison Antrhopology professor John Hawks' blog post 
                </p>
              </Card.Body>
            </Card>
            <Card className="m-5 flex-row">
              <img width={300} height={200} className="mr-3" src="https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card.Body className="m-3">
                <h5>Blog post</h5>
                <p>
                The first sentence of a post should have a conversational tone and articulate the main 
                point of the blog post. Internet readers can easily navigate away from a post, so making 
                your lede interesting and to the point is important. Look at the opening lines from 
                University of Wisconsin-Madison Antrhopology professor John Hawks' blog post 
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md="3">
            <h5 className="text-center" mt="5">
              Categories
            </h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>HTML/CSS</ListGroup.Item>
                <ListGroup.Item>JavaScrept</ListGroup.Item>
                <ListGroup.Item>Pithon</ListGroup.Item>
                <ListGroup.Item>C++</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card className="mt-5" bg="light">
              <Card.Body>
                <Card.Title className="text-center">Side Widget</Card.Title>
                <Card.Text>
                The first sentence of a post should have a conversational tone and articulate the main 
                point of the blog post. Internet readers can easily navigate away from a post, so making 
                your lede interesting and to the point is important. Look at the opening lines from 
                University of Wisconsin-Madison Antrhopology professor John Hawks' blog post
                The first sentence of a post should have a conversational tone and articulate the main 
                point of the blog post. Internet readers can easily navigate away from a post, so making 
                your lede interesting and to the point is important. Look at the opening lines from 
                University of Wisconsin-Madison Antrhopology professor John Hawks' blog post 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
