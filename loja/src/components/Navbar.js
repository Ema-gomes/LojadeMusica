import React from "react";
import './Navbar.css';

function Navbar (){
    return (
        <div className= 'navbar'>
        <nav>
            <ul>
                <li>Género</li>
                <li>Formato</li>
                <li>Merchandise</li>
                <li>Mais</li>
                <li>Sobre</li>
            </ul>
        </nav>
        </div>
    );
}

export default Navbar;