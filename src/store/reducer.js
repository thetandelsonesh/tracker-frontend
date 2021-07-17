import { combineReducers} from "redux";

import vehicle from "../pages/vehicleList/vehicleList.reducer";
import place from "../pages/placeInteraction/placeInteraction.reducer";

export default combineReducers({
  vehicle,
  place
});