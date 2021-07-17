import { combineReducers} from "redux";

import vehicle from "../pages/vehicleList/vehicleList.reducer";
import place from "../pages/placeInteraction/placeInteraction.reducer";
import vehicleActivity from "../pages/vehicleActivity/vehicleActivity.reducer";

export default combineReducers({
  vehicle,
  vehicleActivity,
  place
});