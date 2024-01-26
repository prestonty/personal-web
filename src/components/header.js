import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// nav buttons use <div> and <a> instead of <button>
export default function Header() {
    // Optional tailwind (add this when u call this element: bg-cloudBurst, text-[white], )
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#travels">Travels</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
