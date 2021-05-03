/*ejemplo de class based component
siempre debe heredar de la clase component */

import React, {Component, useState} from 'react';
import '../../../Paginas/menu.css';

class verClientes2 extends Component{
    constructor(props){
        super(props)
        
        this.state ={ 
            vendedores : [
            {nombre:'Luis Perez',edad:'25'},
            {nombre:'Carlos Robles',edad:'30'},
            {nombre:'Juan Chavez',edad:'34'},
            {nombre:'Maria Castro',edad:'24'}
            ]
        }
        
        this.cambiarVendedor = this.cambiarVendedor.bind(this);
    }

    cambiarVendedor(event){
        this.setState({
            vendedores : [
                {nombre:'Stefany Guzman',edad:'42'},
                {nombre:'Mario Reyes',edad:'33'},
                {nombre:'Cristina Alfaro',edad:'24'},
                {nombre:'Flor Cruz',edad:'31'}
            ]
        });
    }

    render(){
        return(
            <div className="container">
                <div className="card size">
                <h2>Distribución de Vendedores <br/><br/></h2>
                <form>
                    <div className="row justify-content-center">
                        <div className="col-3">
                            {
                            this.state.vendedores.map((item, index) => (
                                
                                <ul key={index}>Nombre: <br /> {item.nombre}</ul>
                            ))
                            }
                        </div>
                        <div className="col-3">
                            {
                            this.state.vendedores.map((item, index) => (
                                
                                <ul key={index}>Edad: <br /> {item.edad}</ul>
                            ))
                            }
                        </div>
                        <div className="col-3">
                            {
                            this.state.vendedores.map((item, index) => (
                                
                                <ul key={index}>Cliente: <br />Cliente {index +1}</ul>
                            ))
                            }
                        </div>
                        {/*<div className="col-3">
                            {
                            this.state.vendedores.map((item, index) => (
                                
                                <ul key={index}><small><b>Reasignar</b></small> <br />
                                    <input name="nombreR" type="text" value="" placeholder="Escriba un nombre"></input>
                                </ul>
                            ))
                            }
                        </div>*/}
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-2">
                            <button className="btn btn-outline-primary" onClick={this.cambiarVendedor}>Sustitutos</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

export default verClientes2;