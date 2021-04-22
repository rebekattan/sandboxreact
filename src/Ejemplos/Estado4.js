import React, {Component} from 'react';

//EJEMPLO DE STATE

class Estado4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Facultad: "Ciencias Económicas",
      Carrera: "Ingeniería en CC. de la Computación",
      Materia: "Sistemas de Información Gerencial",
      Universidad: "UCAD"
    };
  }
  render() {
    return (
      <div className="alinear">
        <h1>{this.state.Universidad}</h1>
        <p>
          Facultad: {this.state.Facultad} <br/>
          Carrera: {this.state.Carrera} <br/>
          Materia: {this.state.Materia}
        </p>
      </div>
    );
  }
}

export default Estado4;