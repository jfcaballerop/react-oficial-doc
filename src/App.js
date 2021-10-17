import './App.css';
import { LoginControl, Page } from './components/Body';
import Forms from './components/Forms';
import Numbers from './components/Numbers.jsx';
import Reservation from './components/Reservation';
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

      <hr></hr>
      <Forms />
      <hr></hr>
      <Reservation />

    </div>
  );
  return element;
}

export default App;
