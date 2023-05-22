import axios from "axios";
const api = "http://localhost:4400";
const axiosInstance = axios.create({
  baseUrl: api,
  timeout: 10000,
  headers: {
    "content-type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  function (res) {
    // stop global loader
    return processResponse(res);
  },
  function (err) {
    return Promise.reject(processError(res));
  }
);

const processResponse = (res) => {
  if (res?.status == 200) {
    return { issuccess: true, data: res.data };
  } else {
    return {
      isFailure: true,
      status: res?.status,
      msg: res?.msg,
      code: res?.code,
    };
  }
};

const processError = (err) => {
  if (err.response) {
    console.log('Error IN Response:')
 return{

 }
  } else if (err.request) {

  } else if (err.response) {

  }
};
