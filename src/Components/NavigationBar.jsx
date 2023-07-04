import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default class NavigationBar extends React.Component {
    
    render() {
        return (
            
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                    <Navbar.Brand href="#home">M Rizki.</Navbar.Brand>
                    <Nav className="{menu ms-auto mb-2 mt-2}">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#display">About</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
            
        )
    }
}