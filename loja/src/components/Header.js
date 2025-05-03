import React from "react";
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header (){
const navigate = useNavigate();

return (
<header className="header">

  <div className="left-section">
  <button>≡</button>
  </div>

  <div className="logo"onClick={() => navigate('/')}>
  LALALAALAL
  </div>

  < nav className="right-section">
  <div className="cart" onClick={() => navigate('/cart')}>
  <p> 🛒 Carrinho </p>
        </div>
  <div className="account" onClick={() => navigate('/login')}>
  <p> 👤 Login/Registo </p>
        </div>
        </nav>
        </header>
);
}

export default Header;