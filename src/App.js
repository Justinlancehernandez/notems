import logo from './logo.svg';
import './App.css';
import {Login} from '../src/components/pages/Login'
import {SignUp} from '../src/components/pages/SignUp'
import { NotesMSRoutes } from '../src/components/routes/Routes';

function App() {
  return (
    <div className="App">
          <NotesMSRoutes ></NotesMSRoutes >
    </div>
  );
}

export default App;
