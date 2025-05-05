import React from "react";
import './Header.css';
import cart_icon from './imagens/cart_icon.png'
import perfil_icon from './imagens/perfil_icon.png'
import { useNavigate } from 'react-router-dom';

function Header (){
const navigate = useNavigate();

return (
<div className="header">

  <div className="left-section">
  <button>≡</button>
  </div>

  <div className="logo"onClick={() => navigate('/')}>
  LALALAALAL
  </div>

  <div className="right-section">
    <div className="cart" onClick={() => navigate('/cart')}>
    <img src={cart_icon} alt="" style={{width: "20px"}} />
        <p> Carrinho </p>
    </div>
  <div className="account" onClick={() => navigate('/login')}>
  <img src={perfil_icon} alt="" style={{width: "20px"}} />
        <p> Login </p>
    </div>
  </div>
</div>
);
}

export default Header;