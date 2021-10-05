import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    // navigation links
    return (
        <div>
            <Navbar className="nav-style" variant="transparent" fixed="top" expand="lg">
                <Container>
                    <Navbar.Brand className="text-dark fw-bolder">eSchool</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink to="/home" activeStyle={{ color: 'teal', fontWeight: 'bold' }} className="navlink">Home</NavLink>
                            <NavLink to="/courses" activeStyle={{ color: 'teal', fontWeight: 'bold' }} className="navlink">Courses</NavLink>
                            <NavLink to="/instructors" activeStyle={{ color: 'teal', fontWeight: 'bold' }} className="navlink">Instructors</NavLink>
                            <NavLink to="/about" activeStyle={{ color: 'teal', fontWeight: 'bold' }} className="navlink">About</NavLink>
                            <NavLink to="/contact" activeStyle={{ color: 'teal', fontWeight: 'bold' }} className="navlink">Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;