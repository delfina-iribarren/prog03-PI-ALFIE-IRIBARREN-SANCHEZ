import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './screens/Home/Home';
import Detalle from './screens/Detalle/Detalle';
import Notfound from './screens/Notfound/Notfound';
import Peliculas from './screens/Peliculas/Peliculas';

function App() {
  return (
    <Switch>
      <Route path="/" exact={true} component = {Home}/>
      <Route path="/detalle/:id" exact={true} component = {Detalle}/>
      <Route path="/peliculas/:tipo" exact={true} component = {Peliculas}/>
      


      <Route path="" component = {Notfound}/>
    </Switch>
  );
}

export default App;
