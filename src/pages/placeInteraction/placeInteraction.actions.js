import { getPlaceInteraction } from '../../rest/place';

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