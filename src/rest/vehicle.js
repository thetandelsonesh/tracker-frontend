import ajax from './index';

export const getVehicleList = () => {
  return ajax('get', '/vehicle', {});
}

export const getVehicleActivities = (params) => {
  return ajax('get', '/vehicle/activity', params);
}