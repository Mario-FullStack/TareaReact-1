import './App.css';
import Boton from './Boton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Darle click al botón cuando creas que esté listo.  
        </p>
        <Boton cargando={true}/>
      </header>
    </div>
  );
}

export default App;
