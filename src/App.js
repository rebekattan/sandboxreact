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
      
          <Menu />
        
      </header>
      <main>
        <div>
        <SubMenu />
        <Cliente />
        </div>
        
        <p><br /><br /><br /><br /> @rebekattan</p>
      </main>
      
    </div>
  );
}

export default App;
