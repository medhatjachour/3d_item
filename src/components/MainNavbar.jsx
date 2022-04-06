import React from "react";
import { NavLink } from "react-router-dom";
import {useSelector} from 'react-redux'
import {
  Navbar,
  Form,
  Button,
  FormControl,
  NavDropdown,
  Nav,
  Container,
} from "react-bootstrap";
import './css/NavBar.css'
const MainNavbar = () => {
  const state = useSelector((state) => state.handleCart)
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="px-4 ">
            <Form className="d-flex">
            <Button variant="outline-success">
              
            <i className="fa fa-magnifying-glass" ></i> 
            </Button>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Nav
              className=" my-2 my-lg-0"
              style={{ maxHeight: "77px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/demo">AI</Nav.Link>
              <NavLink to='/cart' className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1" >
                  
                </i>  Cart  {state.length}  
              </NavLink>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3" disabled>Action</NavDropdown.Item>
                <NavDropdown.Item href="./Shoe2">
                  ffffapi
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Thefknai" >
              Thefknai
              </Nav.Link>
              
              <Nav.Link href="/login">logIn</Nav.Link>
              <NavLink to='/signup' className="btn btn-outline-dark ms-2">
              signUp
              </NavLink>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavbar;
