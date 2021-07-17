const initialState = {
  list: [],
  places: [],
  loading: false,
  error: null,
}

const PlaceInteractionReducer = (state = initialState, action) => {
  switch (action.type){
    case 'GET_PLACE_INTERACTION_SUCCESS':
      return {...state, list: action.payload.list,total: action.payload.total,  error: null, loading: false};
    case 'GET_PLACE_LIST_SUCCESS':
      return {...state, places: action.payload.list};
    case 'GET_PLACE_INTERACTION_PROGRESS':
      return {...state, error: null, loading: true};
    case 'GET_PLACE_INTERACTION_FAILED':
      return {...state, error: action.err, loading: false};
    default:
      return state;
  }
}

export default PlaceInteractionReducer