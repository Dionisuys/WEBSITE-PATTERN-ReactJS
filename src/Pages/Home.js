import React, { Component } from "react";
import { Container, Card, Button, Row } from "react-bootstrap";
import CarouselBox from "../Components/CarouselBox";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">Our team</h2>
          <Row md={3} className="m-4">
            <Card>
              <Card.Img 
              variant="top" 
              src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>Unfortunately, the question “What does a web developer do?” doesn’t have one simple answer. 
                  As noted above, there are some different types of web developers, each of which focuses on a different aspect of the creation of a website.
                  To understand what is a web developer it is crucial to know that the three main types of developers are front-end, back-end, and full-stack.
                  Front-end developers are responsible for the parts of a website that people see and interact with, back-end developers are responsible for the behind 
                  the scenes code that controls how a website loads and runs, and full-stack developers do a bit of everything.</Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img 
              variant="top" 
              src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>Unfortunately, the question “What does a web developer do?” doesn’t have one simple answer. 
                  As noted above, there are some different types of web developers, each of which focuses on a different aspect of the creation of a website.
                  To understand what is a web developer it is crucial to know that the three main types of developers are front-end, back-end, and full-stack.
                  Front-end developers are responsible for the parts of a website that people see and interact with, back-end developers are responsible for the behind 
                  the scenes code that controls how a website loads and runs, and full-stack developers do a bit of everything.</Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img 
              variant="top" 
              src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>Unfortunately, the question “What does a web developer do?” doesn’t have one simple answer. 
                  As noted above, there are some different types of web developers, each of which focuses on a different aspect of the creation of a website.
                  To understand what is a web developer it is crucial to know that the three main types of developers are front-end, back-end, and full-stack.
                  Front-end developers are responsible for the parts of a website that people see and interact with, back-end developers are responsible for the behind 
                  the scenes code that controls how a website loads and runs, and full-stack developers do a bit of everything.</Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </>
    );
  }
}
