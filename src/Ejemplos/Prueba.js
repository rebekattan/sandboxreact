import React, {Component} from 'react';
import PropTypes from 'prop-types';

//EJEMPLO DE PROPS.CHILDREN

/* props.children hace referencia a lo que hay entre las etiquetas de apertura y cierre del componente */

class PruebaChildren extends Component {
    render(){
        //destructuring
        const {children}=this.props;
        return(
            <div>
                <h3>{children}</h3>
            </div>
        )
    }
}

//indico el tipo de dato
PruebaChildren.propTypes={
    children:PropTypes.array
}

//paso los datos que seran leidos por su indice
PruebaChildren.defaultProps={
    children:[
        "Hola ,",
        "Esto es un props.children"
    ]
}

export default PruebaChildren;