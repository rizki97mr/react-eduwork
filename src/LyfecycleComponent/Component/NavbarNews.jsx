import React from "react";
import { Container, Navbar } from "react-bootstrap";

class NavbarNews extends React.Component {
    render () {
        return (
            <Navbar className="bg-body-tertiary">
                <Container>
                <Navbar.Brand href="#home"><b>React News</b></Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}

export default NavbarNews;