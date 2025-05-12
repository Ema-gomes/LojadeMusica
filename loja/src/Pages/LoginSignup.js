import React from 'react';
import './CSS/LoginSignup.css';
import imagemVinil from '../components/imagens/imagem-vinil.png';


function LoginSignup() {
  return (
    <div className="loginsignup">
    <div className="loginsignup-image">
    <img src={imagemVinil} alt="" />
    </div>
      <div className="loginsignup-container">
        <h2> Registar-se </h2>
          <div className="loginsignup-fields">
            <input type="text" placeholder='Nome'/>
            <input type="email" placeholder='E-mail'/>
            <input type="password" placeholder='Password'/>
          </div>
        <button>Continuar</button>
          <div className="loginsignup-login">
            <p>Já tem uma conta?
                <span>Login</span>
            </p>
          </div>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id=''/>
            <p>Ao continuar, eu concordo com os termos e condições </p>
          </div>
      </div>
    </div>
  );
}

export default LoginSignup;