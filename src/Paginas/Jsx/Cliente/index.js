/* a/* Archivo principal del componente Clientes */

import React from 'react';
import VerClientes1 from './verClientes1';
import VerClientes2 from './verClientes2';

function verclientes(){

    return(
        <div>
            <div>
                {/*<VerClientes1 />*/}
                <VerClientes2 />
            </div>
        </div>
    )
}

export default verclientes;