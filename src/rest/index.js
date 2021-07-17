import axios from 'axios';

const apiBaseURL = process.env.NODE_ENV === 'production'
  ? 'http://ec2-13-126-206-180.ap-south-1.compute.amazonaws.com/api/'
  : 'http://localhost:5000/api/';

const xAPIKey = 'dc580f09-3fcb-4da4-8927-40924a329626';

axios.defaults.baseURL =  apiBaseURL;

axios.interceptors.request.use(
  (config) => {
    config.headers['x-api-key'] = xAPIKey;
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    console.error("Interceptor : Error occured due to : ", error);
    return Promise.reject(error);
  }
);

const ajax = (type, url, data, config = {}) => {
  return new Promise((resolve, reject) => {
    let axiosParams = {
      method : type,
      url : url,
      config: config
    };
    if (type === 'get') { axiosParams.params = data} else { axiosParams.data = data}
    axios(axiosParams)
      .then((successResult) => {
        const { error, payload, msg } = successResult.data;
        if(error){
          reject(error);
        } else {
          resolve({...payload, msg});
        }
      })
      .catch((errorResult) => {
        if (!errorResult.response) {
          reject({
            code: 'ERROR',
            msg: 'We are under maintenance!'
          })
        } else {
          const response = errorResult.response.data;
          reject(response.error);
        }
      });
  });
};

export default ajax;