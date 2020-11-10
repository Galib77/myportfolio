import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import logo from '../../assets/icons/logow.png' 

import './header.css'

const Header = () => {
    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="md" variant="dark" className="animate-navbar nav-theme justify-content-between">
            <Navbar.Brand href="#home">
                <img className="logo" src={logo} alt="My Portfolio Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About Me</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#project">Project</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
