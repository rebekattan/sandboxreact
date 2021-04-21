import React from 'react';
import '../../../Paginas/menu.css';

/*
uso  de porps
-props -> propiedad (parametros)
-en java usamos parametros para trabajar con funciones getters y setters
-un props puede tener cualquier tipo de datos
*/

const nuevoclientev3 = (props) => {
    return <p><em><b>
        Mi nombre es {props.nombre}, soy un cliente y tengo {props.edad} años de edad.</b></em>
    </p>
}

export default nuevoclientev3;