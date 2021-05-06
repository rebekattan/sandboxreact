import React, {Component, useState} from 'react';
import '../../../Paginas/menu.css';

class verClientes2 extends Component{
    constructor(props){
        super(props)
        
        const vendedoresPermanentes = [
            {nombre:'Luis Perez',edad:'25'},
            {nombre:'Carlos Robles',edad:'30'},
            {nombre:'Juan Chavez',edad:'34'},
            {nombre:'Maria Castro',edad:'24'}
        ];

        this.state ={ 
            datos : vendedoresPermanentes
        }
        
        
        this.cambiarVendedor = this.cambiarVendedor.bind(this);
        this.update =this.update.bind(this);
    }

    handleChange = (item) =>{
        this.state({
            vendedores:{
                ...this.state.vendedores,
                [item.target.name]: item.target.value
            },
        })
    }

    cambiarVendedor(){

        //vendedores sustitutos
        const vendedoresSustitutos = [
            {nombre:'Stefany Guzman',edad:'42'},
            {nombre:'Mario Reyes',edad:'33'},
            {nombre:'Cristina Alfaro',edad:'24'},
            {nombre:'Flor Cruz',edad:'31'}
        ]

        this.setState({datos : vendedoresSustitutos});
    }

    update(dato,index) {
       var contador = 0;
       var lista = this.state.vendedores;
       lista.map((registro=>{
           if(dato.index ==registro.index){
                lista[index].nombre=dato.nombre;
           }
       }))
      }

    render(){
        return(
            <div className="container">
                <div className="card size">
                <h2>Distribución de Vendedores <br/><br/></h2>
                <form>
                    <div className="row justify-content-center">
                        <div className="col-2">
                            {
                            this.state.datos.map((item, index) => (
                                
                                <ul key={index}>Nombre: <br /> {item.nombre}</ul>
                            ))
                            }
                        </div>
                        <div className="col-2">
                            {
                            this.state.datos.map((item, index) => (
                                
                                <ul key={index}>Edad: <br /> {item.edad}</ul>
                            ))
                            }
                        </div>
                        <div className="col-2">
                            {
                            this.state.datos.map((item, index) => (
                                
                                <ul key={index}>Cliente: <br />Cliente {index +1}</ul>
                            ))
                            }
                        </div>
                        <div className="col-4">
                            {
                            this.state.datos.map((item, index) => (
                                
                                <ul key={index}><small><b>Reasignar</b></small> <br />
                                    <input name="nombre" type="text" placeholder="Escriba un nombre" ></input>
                                    <button className="btn btn-outline-primary" onClick={()=>this.update(item,index)}>Actualizar</button>
                                </ul>
                            ))
                            }
                        </div>
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