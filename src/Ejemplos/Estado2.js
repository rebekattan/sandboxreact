import React, {Component} from 'react';

//USO DE PROPS Y STATE

class Estado2 extends Component{

    constructor(props){
        super(props)
        this.state = {hora: "10:00 am"}
        this.cambiarHora = this.cambiarHora.bind(this);
    }

    cambiarHora(){
        this.setState({hora: "1:00 pm"});
    }

    render(){
        return (
        <div>
            <h2>Son las {this.state.hora}</h2>
            <button className="button" onClick={this.cambiarHora}>Cambiar hora</button>
        </div>
        )
    }
}

export default Estado2;