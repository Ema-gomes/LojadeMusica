import React from 'react';
import './Popular.css';
import { useNavigate } from 'react-router-dom';
import PopularInfo from './Popular.json';

function Popular() {

const navigate = useNavigate();
const vinil = PopularInfo["Vinil"];
const cds = PopularInfo["CD"];
const merch = PopularInfo["Merchandise"];


return (
    <div className="popular">

        <div className="popular-section">
            <div className="section-header">
                <h2> VINIS </h2>
                <button onClick={() => navigate('/vinyls')}>Ver mais →</button>
            </div>

            <div className="product-row">
                {vinil.map( v => <Vinil imagem={v.imagem} nome={v.nome} preco={v.preco} id={v.id}/> ) }
            </div>
        </div>

        <div className="popular-section">
            <div className="section-header">
                <h2> CDs </h2>
                <button onClick={() => navigate('/cds')}>Ver mais →</button>
            </div>

            <div className="product-row">
                {cds.map( c => <Vinil imagem={c.imagem} nome={c.nome} preco={c.preco} id={c.id}/> ) }
            </div>
        </div>

        <div className="popular-section">
            <div className="section-header">
                <h2> MERCHANDISE </h2>
                <button onClick={() => navigate('/merch')}>Ver mais →</button>
            </div>

            <div className="product-row">
                {merch.map( m => <Vinil imagem={m.imagem} nome={m.nome} preco={m.preco} id={m.id}/> ) }
            </div>
        </div>
    </div>
  );
}

function Vinil({imagem, nome, preco, id}) {
return (
 <div className="produto" >
<img src={imagem} alt="vinil"/>
<p>{nome}</p>
<p>{preco}</p>
</div>

);
}

export default Popular;