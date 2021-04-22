import React, { useState } from 'react';
import './estilo.css';

//EJEMPLO DE USO DE STATE

const Estado = () => {

    const [contadorValor, actualizarContador] = useState(12);
    return(
        <div className="alinear">
            <span>Valor Actual: {contadorValor} <br /><br /></span>
            <button className="button" onClick={() => actualizarContador(contadorValor + 1)}>Incrementar</button>{'  '}
            <button className="button" onClick={() => actualizarContador(contadorValor - 1)}>Decrementar</button>

        </div>
    )
}

export default Estado;