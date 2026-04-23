import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './screens/Home/Home';
import Detalle from './screens/Detalle/Detalle';
import Notfound from './screens/Notfound/Notfound';
import Peliculas from './screens/Peliculas/Peliculas';
import ResultadoBusqueda from './screens/ResultadoBusqueda/ResultadoBusqueda';
import Favoritos from './screens/Favoritos/Favoritos';
import Register from './screens/Register/Register';
import Login from './screens/Login/Login';

function App() {
  return (
    <Switch>
      <Route path="/" exact={true} component = {Home}/>
      <Route path="/registro" exact={true} component = {Register}/>
      <Route path="/login" exact={true} component = {Login}/>
      <Route path="/favoritas" exact={true} component = {Favoritos}/>
      
      <Route path="/detalle/:id" exact={true} component = {Detalle}/>
      <Route path="/peliculas/:tipo" exact={true} component = {Peliculas}/>
      <Route path="/resultados/:termino" exact={true} component = {ResultadoBusqueda}/>
      
    

      <Route path="" component = {Notfound}/>
    </Switch>
  );
}

export default App;
