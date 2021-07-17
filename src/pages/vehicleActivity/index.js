import { connect } from 'react-redux';
import VehicleActivity from "./vehicleActivity.comp";
import { fetchVehicleActivity } from './vehicleActivity.actions';
import { fetchVehicleList } from '../vehicleList/vehicleList.actions';

const mapStateToProps = (state) => {
  return {...state.vehicleActivity}
}

const mapDispatchToProps = {
  fetchVehicleActivity,
  fetchVehicleList
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleActivity);