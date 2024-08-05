import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Header(){
    return (
        <header className="header">
            <h1>{"Header"}</h1>
            <nav>
                <li>
                    {/*componente Link en ves de etiqueta a para SPA, no es necesario recargar..., con a (ancor) es necesario */}
                    <ul><Link to="/inicio"><strong>Inicio</strong></Link></ul>
                    <ul><Link to="/api"><strong>Api</strong></Link></ul>
                    <ul><Link to="/redes"><strong>Redes</strong></Link></ul>
                </li>
            </nav>
        </header>
    )
}