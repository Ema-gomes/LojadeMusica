import React from "react";
import './AboutUs.css';
import img1 from '../imagens/img_abtUs2.png'

function AboutUs(){
return (
<div className="sobre">
<h2> Quem somos </h2>
<div className="descricao">
<p> Somos um grupo de estudantes de IGE que, no âmbito da unidade curricular de Desenvolvimento para A Internet e Aplicações Móveis, decidiu juntar a sua paixão por música e criar a sua própria loja de música. </p>
<p> Acreditamos que a música tem um papel essencial na vida das pessoas e, como tal, queremos transmitir a importância dela através deste projeto.</p>
<p> Nesta loja conseguirá encontrar uma seleção de vinis, CDs, cassetes e outros artigos relacionados com o universo musical.</p>
<p> Obrigada por visitar a nossa loja ! </p>
  </div>
<img src={img1} alt="produtos" style={{width: "40%"}} />
  </div>
);
}

export default AboutUs;