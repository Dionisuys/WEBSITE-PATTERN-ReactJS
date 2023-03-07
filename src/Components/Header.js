import React, { Component } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Navbar,
  Nav,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import logo from "./logo192.png";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                hidden="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link href="/" exact>
                  Home
                </Nav.Link>
                <Nav.Link href="/about">
                  About Us
                </Nav.Link>
                <Nav.Link href="/contacts">
                  Contacts
                </Nav.Link>
                <Nav.Link href="/blog">
                  Blog
                </Nav.Link> 
                {/* <Nav.Link as={NavLink} to="/" exact>
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/about">
                  About Us
                </Nav.Link>
                <Nav.Link as={NavLink} to="/contacts">
                  Contacts
                </Nav.Link>
                <Nav.Link as={NavLink} to="/blog">
                  Blog
                </Nav.Link> */}
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="me-sm-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Router>
      </>
    );
  }
}
