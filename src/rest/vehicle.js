import ajax from './index';

export const getVehicleList = () => {
  return ajax('get', '/vehicle', {});
}

export const getVehicleActivity = (params) => {
  return ajax('get', '/vehicle/activity', params);
}