import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <Navbar bg="transparent" variant="transparent" fixed="top" expand="lg">
                <Container>
                    <Navbar.Brand href="/" className="text-dark fw-bolder">eSchool</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink to="/home" className="navlink">Home</NavLink>
                            <NavLink to="/courses" className="navlink">Courses</NavLink>
                            <NavLink to="/instructors" className="navlink">Instructors</NavLink>
                            <NavLink to="/about" className="navlink">About</NavLink>
                            <NavLink to="/contact" className="navlink">Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;