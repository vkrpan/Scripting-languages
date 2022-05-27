import './App.css';
import Zaglavlje from './components/Zaglavlje';
import artikli from './artikli.json';
import Tablica from './components/TrgovinaLista';
function App() {
  return (
    <div>
      <Zaglavlje/>
      <Tablica artikli={artikli}/>
    </div>
  );
}

export default App;
