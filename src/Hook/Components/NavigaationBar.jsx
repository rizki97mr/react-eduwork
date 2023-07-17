import { Container, Navbar } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                <Navbar.Brand href="#home"><b>React News</b></Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar;