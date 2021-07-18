const initialState = {
  polyline: "",
  vehicles: [],
  loading: false,
  error: null,
}

const PlaceInteractionReducer = (state = initialState, action) => {
  switch (action.type){
    case 'GET_VEHICLE_ACTIVITY_SUCCESS':
      return {...state, polyline: action.payload.polyline, error: null, loading: false};
    case 'GET_VEHICLE_ACTIVITY_RESET':
      return {...state, polyline: "", error: null, loading: false};
    case 'GET_VEHICLE_ACTIVITY_PROGRESS':
      return {...state, error: null, polyline: "", loading: true};
    case 'GET_VEHICLE_ACTIVITY_FAILED':
      return {...state, error: action.err, loading: false};
    case 'GET_VEHICLE_LIST_SUCCESS':
      return {...state, vehicles: action.payload.list};
    default:
      return state;
  }
}

export default PlaceInteractionReducer