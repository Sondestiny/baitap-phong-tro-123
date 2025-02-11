import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_SEVENT_URL
})

instance.interceptors.request.use(function (config) {
    // Làm gì đó trước khi request dược gửi đi
    const token = localStorage.getItem('persist:auth')
    return config;
  }, function (error) {
    // Làm gì đó với lỗi request
    return Promise.reject(error);
  });

  export default instance;

