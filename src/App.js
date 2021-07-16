import {HashRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/home'
import PlaceInteraction from "./pages/placeInteraction";
import VehicleActivity from "./pages/vehicleActivity";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={'/'} component={Home}/>
        <Route path={'/place-interaction'} component={PlaceInteraction}/>
        <Route path={'/vehicle-activity'} component={VehicleActivity}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
