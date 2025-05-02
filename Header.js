import React from "react";
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header (){
const navigate = useNavigate();

return (
<header className="header">

  <div className="left-section">
  </div>

  <div className="logo">LALALAALAL</div>

  < nav className="right-section">
  <div className="account" onClick={() => navigate('/account')}>
  <p> 👤 Conta </p>
        </div>
        </nav>
        </header>
);
}

export default Header;
