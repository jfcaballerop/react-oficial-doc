import './App.css';
import { LoginControl, Page } from './components/Body';
import Numbers from './components/Numbers.jsx';
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
      <hr />

      <Numbers />

    </div>
  );
  return element;
}

export default App;
