import { connect } from 'react-redux';
import VehicleListComp from "./vehicleList.comp";
import { fetchVehicleList } from './vehicleList.actions';

const mapStateToProps = (state) => {
  return {...state.vehicle}
}

const mapDispatchToProps = {
  fetchVehicleList
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleListComp);