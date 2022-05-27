import logo from './logo.svg';
import './App.css';
import Zaglavlje from './Zaglavlje.js';
import artikli from './artikli.json';
import Tablica from './TrgovinaLista.js';

function App() {
  return (
    <div className="App">
      <Zaglavlje logo={logo} />
      <Tablica artikli={artikli}/>
    </div>
  );
}

export default App;
