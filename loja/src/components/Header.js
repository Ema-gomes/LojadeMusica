import React from "react";
import './Header.css';
import cart_icon from './imagens/cart_icon.png'
import perfil_icon from './imagens/perfil_icon.png'
import { useNavigate } from 'react-router-dom';

function Header (){
const navigate = useNavigate();
//const [mostrarFooterOriginal, setMostrarFooterOriginal] = useState(true);
//const toggleFooter = () => {
 //   setMostrarFooterOriginal(!mostrarFooterOriginal);
 // };

return (
//{mostrarFooterOriginal ? (
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
    <div className="cart-count">0</div>
    </div>
  <div className="login" onClick={() => navigate('/login')}>
        <button> Login </button>
    </div>
  </div>
</div>


//) : ( //
//<div className="header">

  //<div className="left-section">
  //<button>≡</button>
  //</div>

  //<div className="logo"onClick={() => navigate('/')}>
  //LALALAALAL
  //</div>

  //<div className="right-section">
    //<div className="cart" onClick={() => navigate('/cart')}>
    //<img src={cart_icon} alt="" style={{width: "20px"}} />
    //<div className="cart-count">0</div>
    //</div>
  //<div className="account" onClick={() => navigate('/account')}>
  //<img src={perfil_icon} alt="" style={{width: "20px"}} />
    //    <p> Username </p>
    //</div>
  //</div>
//</div>
);
}

export default Header;