import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navegador() {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/about">Sobre Nosotros</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
                    <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
                    <Nav.Link as={Link} to="/carrito">Carrito</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navegador;
