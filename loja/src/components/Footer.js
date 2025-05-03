import React from "react";
import './Footer.css';
import { useNavigate } from 'react-router-dom';

function Footer (){
const navigate = useNavigate();
return (
<footer >
<div className="footer-container">
<table>
<tr>
    <td className="footer-section">
        <h3>LALLALALALAL</h3>
        <p> Trabalho realizado por Beatriz Simões e Ema Gomes</p>
    </td>
    <td className="footer-section">
        <h3>Links Úteis</h3>
        <ul>
            <li><a onClick={() => navigate('/about')}>Sobre Nós</a></li>
            <li><a onClick={() => navigate('/faqs')}>FAQs</a></li>
            <li><a onClick={() => navigate('/contacts')}>Contacta-nos</a></li>
        </ul>
    </td>
    <td className="footer-section">
        <h3>Siga-nos</h3>
        <ul>
            <li><a href="https://www.facebook.com/primaveraporto/">Facebook</a></li>
            <li><a href="https://www.instagram.com/primaverasound_porto/">Instagram</a></li>
            <li><a href="https://www.x.com/primavera_porto/">X</a></li>
        </ul>
    </td>
    </tr>
</table>
</div>
</footer>
);
}

export default Footer;