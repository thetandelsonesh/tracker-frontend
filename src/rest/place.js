import ajax from './index';

export const getPlaceInteraction = (params) => {
  return ajax('get', '/place/interaction', params);
}