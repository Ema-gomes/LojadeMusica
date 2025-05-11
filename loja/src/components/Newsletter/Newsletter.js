import React from "react";
import './Newsletter.css';

function Newsletter (){
return (
<div className="newsletter">
<h2> Recebe conteúdo exclusivo </h2>
<p> Subscreve a nossa newsletter e sê o primeiro a saber das últimas ofertas e lançamentos </p>
    <div>
        <input type="email" placeholder= 'Insira o seu email' />
        <button> Subscrever </button>
    </div>
</div>
);
}

export default Newsletter;