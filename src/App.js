import './App.css';
import { LoginControl, Page } from './components/Body';
import * as Title from './components/Title';

function App() {
  // const name = 'Pepe perez 2';
  const element = (
    <div>
      <Page />
      {/* <Title.Saludo name={name} /> */}
      <Title.Hora />
      <Title.ButtonGreeting name='Pepe' />
      <hr />
      <LoginControl />

    </div>
  );
  return element;
}

export default App;
