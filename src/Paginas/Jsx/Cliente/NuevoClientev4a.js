import React, {Component} from 'react';
import '../../../Paginas/menu.css';

/*
uso de props:
-props -> propiedad (parametros)
-en java usamos parametros para trabajar con funciones getters y setters
-un props puede tener cualquier tipo de datos
-utilizacion de props en un class based component
-class based component
*/

class nuevoclientev4a extends Component{
    render(){
    return <p className="est4">Mi nombre es {this.props.nombre}, soy un
    cliente y tengo {this.props.edad} años</p>
    }
}

export default nuevoclientev4a;