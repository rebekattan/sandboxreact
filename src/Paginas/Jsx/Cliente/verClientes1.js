/*ejemplo de class based component
siempre debe heredar de la clase component */

import React, {Component} from 'react';
import '../../../Paginas/menu.css';
import NuevoCliente1 from './NuevoCliente1';
import NuevoCliente2 from './NuevoCliente2';
import NuevoCliente3 from './NuevoCliente3';
import NuevoClientev4a from './NuevoClientev4a';
import NuevoClientev4b from './NuevoClientev4b'

class verClientes1 extends Component{
    render(){
        return(
            <div>
                <p className="est1">Uso de class based components</p>
                <NuevoCliente1 />
                <NuevoCliente2 />
                <NuevoCliente3 nombre='Luke SkyWalker' edad='25' />
                <NuevoClientev4a nombre='Rebeca' edad='23' />
                <NuevoClientev4b nombre='María' edad='16' />
            </div>
        )
    }
}

export default verClientes1;