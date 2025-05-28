import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

function ListaProductos({ agregarAlCarrito }) {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function obtenerProductos() {
            try {
                const respuesta = await fetch("https://fakestoreapi.com/products");
                if (!respuesta.ok) throw new Error("Error al obtener productos");
                const datos = await respuesta.json();
                setProductos(datos);
            } catch (err) {
                setError(err.message);
            } finally {
                setCargando(false);
            }
        }

        obtenerProductos();
    }, []);

    if (cargando) return <p>Cargando productos...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Container className="text-center mt-5">
    <Row className="justify-content-center">
    {productos.slice(0, 8).map(producto => ( // Muestra solo 6 productos
        <Col key={producto.id} md={4} className="d-flex">
            <Card className="producto-card">
                <Card.Body  className="d-flex flex-column">
                    <Card.Title>{producto.title}</Card.Title>
                    <Button as={Link} to={`/producto/${producto.id}`} variant="info">Ver detalles</Button>
                    <Button variant="success" className="mt-2" onClick={() => agregarAlCarrito(producto)}>
                        Agregar al carrito
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    ))}
</Row>

</Container>
    );
}

export default ListaProductos;
