import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Carrito({ carrito }) {
    return (
        <Container className="mt-4">
            <h2>Carrito de Compras</h2>
            <Row>
                {carrito.length === 0 ? (
                    <p>Tu carrito está vacío.</p>
                ) : (
                    carrito.map((producto, index) => (
                        <Col key={index} md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{producto.title}</Card.Title>
                                    <p>Precio: ${producto.price}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
        </Container>
    );
}

export default Carrito;
