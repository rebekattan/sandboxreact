import React, {Component} from 'react';
import Saludo from './Saludo';


//EJEMPLO DE PROPS Y STATE

class Estado1 extends Component{

    constructor(props) {
        super(props)

        //inicializo el state
        this.state = {
          nombre: ' ___________',
        }
        
        this.saludar = this.saludar.bind(this)
      }
    
      saludar() {
        this.setState({ nombre: 'Rebeca' })
      }

      render() {
        return (
          <div  className="alinear">
            
              <button className="button" onClick={this.saludar}>Saludar</button>
              <Saludo nombre={this.state.nombre} />
            
          </div>
        )
      }
}


export default Estado1;