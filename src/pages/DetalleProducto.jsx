import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";

function DetalleProducto() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function obtenerProducto() {
            try {
                const respuesta = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!respuesta.ok) throw new Error("Error al obtener el producto");
                const datos = await respuesta.json();
                setProducto(datos);
            } catch (err) {
                setError(err.message);
            } finally {
                setCargando(false);
            }
        }

        obtenerProducto();
    }, [id]);

    if (cargando) return <p className="text-center">Cargando...</p>;
    if (error) return <p className="text-danger">Error: {error}</p>;

    return (
        <Container className="mt-4">
            <Card className="shadow">
                <Card.Body>
                    <Card.Title>{producto?.title}</Card.Title>
                    <Card.Text>Descripción: {producto?.description}</Card.Text>
                    <Card.Text>Precio: ${producto?.price}</Card.Text>
                    <Button variant="primary" href="/productos">Volver a Productos</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default DetalleProducto;
