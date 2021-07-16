import {HashRouter, Route, Switch, Link} from 'react-router-dom';

import Home from './pages/home'
import PlaceInteraction from "./pages/placeInteraction";
import VehicleActivity from "./pages/vehicleActivity";

import routes from "./constants/routes";

import bg from './images/bg.png';
import logo from './images/numadic.svg';

const App = () => {
  return (
    <HashRouter>
      <main style={{backgroundImage: `url("${bg}")`}}>
        <Link to={routes.home}><img className="logo" src={logo} alt="tracker"/></Link>
          <Switch>
            <Route exact path={routes.home} component={Home}/>
            <Route path={routes.placeInteraction} component={PlaceInteraction}/>
            <Route path={routes.vehicleActivity} component={VehicleActivity}/>
          </Switch>
      </main>
    </HashRouter>
  );
}

export default App;
