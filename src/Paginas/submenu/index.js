import React from 'react';
import { BrowserRouter, Link} from 'react-router-dom';
import '../../Paginas/menu.css';

function SubMenu(){
    return(
        <BrowserRouter>
            <ul className="menuUl">
                <Link to="/jsx" className="subMenu">Jsx</Link>
                <Link to="/props" className="subMenu">Props</Link>
                <Link to="/states" className="subMenu">States</Link>
            </ul>
        </BrowserRouter>
    )
}

export default SubMenu;