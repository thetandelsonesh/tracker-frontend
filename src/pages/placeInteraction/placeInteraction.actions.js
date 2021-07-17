import { getPlaceInteraction, getPlaceList } from '../../rest/place';

export const getPlacesListSuccess = (payload) => {
  return {
    type: 'GET_PLACE_LIST_SUCCESS',
    payload
  }
}

export const getPlacesListFailed = (err) => {
  return {
    type: 'GET_PLACE_LIST_FAILED',
    err
  }
}

export const getPlaceInteractionSuccess = (payload) => {
  return {
    type: 'GET_PLACE_INTERACTION_SUCCESS',
    payload
  }
}

export const getPlaceInteractionInProgress = () => {
  return {
    type: 'GET_PLACE_INTERACTION_PROGRESS',
  }
}

export const getPlaceInteractionFailed = (err) => {
  return {
    type: 'GET_PLACE_INTERACTION_FAILED',
    err
  }
}

export const fetchPlaceList = (params) => {
  return async (dispatch) => {
    try{
      const response = await getPlaceList(params);
      dispatch(getPlacesListSuccess(response));
    }catch (e){
      dispatch(getPlacesListFailed(e))
    }
  }
}

export const fetchPlaceInteraction = (params) => {
  return async (dispatch) => {
    dispatch(getPlaceInteractionInProgress());
    try{
      const response = await getPlaceInteraction(params);
      dispatch(getPlaceInteractionSuccess(response));
    }catch (e){
      dispatch(getPlaceInteractionFailed(e))
    }
  }
}