import { getVehicleActivity } from '../../rest/vehicle';

export const getVehicleActivitySuccess = (payload) => {
  return {
    type: 'GET_VEHICLE_ACTIVITY_SUCCESS',
    payload
  }
}

export const getVehicleActivityInProgress = () => {
  return {
    type: 'GET_VEHICLE_ACTIVITY_PROGRESS',
  }
}

export const getVehicleActivityFailed = (err) => {
  return {
    type: 'GET_VEHICLE_ACTIVITY_FAILED',
    err
  }
}

export const fetchVehicleActivity = (params) => {
  return async (dispatch) => {
    dispatch(getVehicleActivityInProgress());
    try{
      const response = await getVehicleActivity(params);
      dispatch(getVehicleActivitySuccess(response));
    }catch (e){
      dispatch(getVehicleActivityFailed(e))
    }
  }
}