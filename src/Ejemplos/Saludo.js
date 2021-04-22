import React, { Component } from 'react'

////EJEMPLO DE PROPS Y STATE
//Este componente se muestra en Estado1

class Saludo extends Component {
  render() {
    return <p className="alinear">Hola {this.props.nombre}!</p>
  }
}

export default Saludo;