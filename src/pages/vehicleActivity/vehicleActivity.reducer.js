const initialState = {
  list: [],
  vehicles: [],
  loading: false,
  error: null,
}

const PlaceInteractionReducer = (state = initialState, action) => {
  switch (action.type){
    case 'GET_VEHICLE_ACTIVITY_SUCCESS':
      return {...state, list: action.payload.list, error: null, loading: false};
    case 'GET_VEHICLE_ACTIVITY_RESET':
      return {...state, list: [], error: null, loading: false};
    case 'GET_VEHICLE_LIST_SUCCESS':
      return {...state, vehicles: action.payload.list};
    case 'GET_VEHICLE_ACTIVITY_PROGRESS':
      return {...state, error: null, list: [], loading: true};
    case 'GET_VEHICLE_ACTIVITY_FAILED':
      return {...state, error: action.err, loading: false};
    default:
      return state;
  }
}

export default PlaceInteractionReducer