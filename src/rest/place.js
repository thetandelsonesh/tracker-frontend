import ajax from './index';

export const getPlaceList = () => {
  return ajax('get', '/place');
}

export const getPlaceInteraction = (params) => {
  return ajax('get', '/place/interaction', params);
}