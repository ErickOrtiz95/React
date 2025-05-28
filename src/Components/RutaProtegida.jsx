import { Navigate } from "react-router-dom";

function RutaProtegida({ children, autenticado }) {
    return autenticado ? children : <Navigate to="/login" />;
}

export default RutaProtegida;
