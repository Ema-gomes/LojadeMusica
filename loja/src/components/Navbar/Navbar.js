import React from "react";
import './Navbar.css';
import { useNavigate } from 'react-router-dom';


function Navbar (){

const navigate = useNavigate();

    return (
        <div className= 'navbar'>
        <nav>
            <ul>
                <li onClick={() => navigate('/vinis')}>Vinis</li>
                <li onClick={() => navigate('/cds')}>CDs</li>
                <li onClick={() => navigate('/merch')}>Merchandise</li>
                <li onClick={() => navigate('/other')}>Mais</li>
            </ul>
        </nav>
        </div>
    );
}

export default Navbar;