import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Header.css'
import { Col, Container, Form, FormControl, Nav, Navbar, Row, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';




const Header = () => {


  const style ={
    textDecoration: "none",
    padding: "10px",
    margin:"10px",
    }
const Active = {
  "color": "red",
    }

    return (

// Nav Ber Start Here 

<div className="MainHeader">
    <Navbar bg="" expand="lg" className="Container">
      <Container fluid>
      <Navbar.Brand className="text-success font-bold fs-1  fw-bold">MK-US</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0 fs-4 fw-normal "
        style={{ maxHeight: '100px' }}
        navbarScroll >
        <NavLink activeStyle={Active} style={style} to="/home" className="text-primary">Home</NavLink>
        <NavLink activeStyle={Active} style={style} to="/service">Services</NavLink>
        <NavLink activeStyle={Active} style={style} to="/about">About Us</NavLink>
        <NavLink activeStyle={Active} style={style} to="/markting">Larn Markting</NavLink>
      </Nav>

      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success" className="bg-info text-white p-2 border-0 ">Search </Button>
      </Form>
    </Navbar.Collapse>
  </Container>
  </Navbar>



  <Container className="Main-banner">
   <Row className="h-75">
    <Col className="col d-flex justify-content-center align-items-center banner-haf">
      <h1 >Larn Markting  From the Leaders in Business Education </h1>
    </Col>
    <Col className="banner "></Col>
     </Row>
    </Container>



   </div> 
    );
};

export default Header;