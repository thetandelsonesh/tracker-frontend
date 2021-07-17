const initialState = {
  list: [],
  loading: true,
  error: {}
}

const VehicleReducer = (state = initialState, action) => {
  switch (action.type){
    case 'GET_VEHICLE_LIST_SUCCESS':
      return {...state, list: action.payload.list, loading: false};
    case 'GET_VEHICLE_LIST_PROGRESS':
      return {...state, loading: true};
    case 'GET_VEHICLE_LIST_FAILED':
      return {...state, error: action.err, loading: false};
    default:
      return state;
  }
}

export default VehicleReducer