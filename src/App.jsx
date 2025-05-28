
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ListaProductos from "./pages/ListaProductos";
import Carrito from "./pages/Carrito";
import DetalleProducto from "./pages/DetalleProducto";
import RutaProtegida from "./components/RutaProtegida";

function App() {
    const [carrito, setCarrito] = useState([]); // Estado para el carrito
    const autenticado = true;

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]); // Agregar productos
    };

    const eliminarDelCarrito = (id) => {
        setCarrito(carrito.filter(producto => producto.id !== id)); // Eliminar productos
    };

    return (
        <BrowserRouter>
            <Header />
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/productos" element={<ListaProductos agregarAlCarrito={agregarAlCarrito} />} />
                <Route path="/producto/:id" element={<DetalleProducto />} />
                <Route path="/carrito" element={
                    <RutaProtegida autenticado={autenticado}>
                        <Carrito carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />
                    </RutaProtegida>
                } />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
