import logo from './logo.jpg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import { GlobalProvider } from './context/GlobalState';

import { Home } from './Components/Home';
import { AddDevice } from './Components/AddDevice';
import { EditDevice } from './Components/EditDevice';
import {FindOne} from './Components/FindOne';
import {HandleInput} from "./Components/SaveButton";
function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Switch>
        <img className="photo" src={logo} style={{height:300, width:300}} />
        </Switch>
        <Switch>
        <Route path="/save" component= {HandleInput} exact/>
          <Route path="/search" component= {FindOne} exact/>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddDevice} exact />
          <Route path="/edit/:id" component={EditDevice} exact />
        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default App;