import Menu from './Paginas/Menu';
import SubMenu from './Paginas/submenu';
import Cliente from './Paginas/Jsx/Cliente'
import Estado from './Ejemplos/Estado';
import Estado2 from './Ejemplos/Estado2';
import Estado1 from './Ejemplos/Estado1';
import Estado4 from './Ejemplos/Estado4';
import PruebaChildren from './Ejemplos/Prueba';
import PruebaChildren2 from './Ejemplos/Prueba2';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Menu />
        </p>
      </header>
      <main>
        <div>
        <SubMenu />
        <Cliente />
        </div>
        
        <p>@rebekattan</p>
      </main>
      <div>

        <h2>Ejemplos de props.children</h2>
        <PruebaChildren>
        </PruebaChildren>

        <PruebaChildren2 nombre='Rebeca' edad='23'>
        <p>Soy una parrafo mostrado a través de props.children</p>
        <img src="https://cdn.iconscout.com/icon/free/png-256/search-2130850-1794981.png"
        width="50px" height="50px"></img>
        </PruebaChildren2>
        <br/>
        
        <h2>Ejemplos de state</h2>
        <Estado />
        <Estado4 />
        <br/>

        <h2>Ejemplos de props y state</h2>
        <Estado1 />
        <Estado2 />

      </div>
    </div>
  );
}

export default App;
