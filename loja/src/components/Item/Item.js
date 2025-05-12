import React from 'react';
import './Item.css';

function Item({ imagem, nome, preco, id }) {
  return (
    <div className="produto">
      <img src={imagem} alt={nome}  />
      <p>{nome}</p>
      <p>{preco}</p>
    </div>
  );
}

export default Item;
