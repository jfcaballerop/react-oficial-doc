import './App.css';
import * as Title from './components/Title';

function App() {
  const name = 'Pepe perez 2';
  const element = (
    <div>
      <Title.Saludo name={name} />
      <Title.Hora />
    </div>
  );
  return element;
}

export default App;
