import React, { useState } from "react";
import './Header.css';
import Navbar from '../Navbar/Navbar'
import cart_icon from '../imagens/cart_icon.png'
import { useNavigate } from 'react-router-dom';

function Header (){
const navigate = useNavigate();
const [menuOpen, setMenuOpen] = useState(false);

return (
<div className="complete">
    <div className="header">

        <div className="left-section">

         <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✖' : '≡'}
          </button>
        </div>

        <div className="logo"onClick={() => navigate('/')}>
        LALALAALAL
        </div>

        <div className="right-section">
            <div className="cart" onClick={() => navigate('/cart')}>
            <img src={cart_icon} alt="" style={{width: "20px"}} />
            </div>

            <div className="cart-count">0</div>

            <div className="login" onClick={() => navigate('/login')}>
            <button> Login </button>
            </div>
        </div>
    </div>

    {menuOpen && <Navbar />}
    </div>
    );
}
export default Header;