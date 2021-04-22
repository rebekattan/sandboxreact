import React from 'react';

//EJEMPLO DE PROPS.CHILDREN

const PruebaChildren2 = (props) => {
    return(
        
        <div>
            <p>
                {props.nombre} tiene {props.edad} años
            </p>
            {props.children}
        </div>
    )
}

export default PruebaChildren2;