import { Container, Image } from "react-bootstrap";
import logo from "/src/assets/LOGOSIA2.0.png"; 

function Header() {
    return (
        <header className="bg-dark text-white py-3 text-center">
            <Container>
                <Image src={logo} width={100} alt="Logo de la empresa" />
                <h1>SERVICIOS INDUSTRIALES ASOCIADOS</h1>
                <p>Somos líderes del mantenimiento 🚀</p>
            </Container>
        </header>
    );
}

export default Header;
