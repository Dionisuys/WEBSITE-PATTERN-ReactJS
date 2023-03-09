import React, { Component } from "react";
import { Col, Container, Row, Nav, Tab } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="lebl-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                    <img src="https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    <p>
                    This book gives a comprehensive guide to the scope and history of the field of 
                    graphic design, with the use of color imagery, commentary, and historical and cultural 
                    background throughout. 02. Graphic Design School: The Principles and Practice of Graphic 
                    Design Wiley AUTHORS: David Dabner, Sandra Stewart, Eric Zempol PUBLISHER: Wiley
                    </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    <p>
                    Showing appreciation to your team can help you strengthen workplace relationships. 
                    If done regularly, expressing your appreciation can positively affect the morale of your 
                    entire office. Different messages of appreciation may be appropriate for a variety of 
                    circumstances, so it can helpful to review a list of messages that you can send. 
                    In this article, we share 61 different team appreciation messages for you to consider.
                    </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    <img src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    <p>
                    Programming involves instructing computers to perform tasks. It could be a simple task 
                    like displaying the sum of two numbers or solving complex problems like the operation of 
                    self-driving cars. Having defined programming, let's consider where it fits in the modern world.
                    </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                    <img src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    <p>
                    Frameworks are software that are developed and used by developers to build applications. 
                    What is a Framework? Since they are often built, tested, and optimized by several 
                    experienced software engineers and programmers, software frameworks are versatile, robust, 
                    and efficient.
                    </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                    <img src="https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    <p>
                    Libraries are committed to helping children and adults develop the skills needed to survive 
                    and thrive in a global information society. The ability to read and use computers are at 
                    the forefront of these skills. Basic, functional literacy is an essential skill for 
                    personal and professional growth.
                    </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
