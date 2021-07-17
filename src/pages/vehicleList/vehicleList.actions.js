import { getVehicleList } from '../../rest/vehicle';

export const getVehicleListSuccess = (payload) => {
  return {
    type: 'GET_VEHICLE_LIST_SUCCESS',
    payload
  }
}

export const getVehicleListInProgress = () => {
  return {
    type: 'GET_VEHICLE_LIST_PROGRESS',
  }
}

export const getVehicleListFailed = (err) => {
  return {
    type: 'GET_VEHICLE_LIST_FAILED',
    err
  }
}

export const fetchVehicleList = () => {
  return async (dispatch) => {
    dispatch(getVehicleListInProgress);
    try{
      const response = await getVehicleList();
      dispatch(getVehicleListSuccess(response));
    }catch (e){
      dispatch(getVehicleListFailed(e))
    }
  }
}