import Menu from './Paginas/Menu';
import SubMenu from './Paginas/submenu';
import Cliente from './Paginas/Jsx/Cliente'
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
        
        <p>@rebecaJKT</p>
      </main>
    </div>
  );
}

export default App;
