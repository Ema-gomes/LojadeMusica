import React from "react";
import './Highlight.css';
import highlight from '../imagens/highlight.png'
import highlight1 from '../imagens/highlight1.png'

function Highlight (){
return (
<div className="destaque">
    <img src={highlight} alt="" className="background-img" />
    <div className="destaque-left">
        <p className="titulo"> ÁLBUM DO MÊS </p>
        <img src={highlight1} alt="" className="album-img" />
    <p className="descricao"> Lana Del Rey: The Right Person Will Stay </p>
    <button> Comprar </button>
</div>
</div>
);
}

export default Highlight;