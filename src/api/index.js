import axios from 'axios';
import router from '../router';

axios.defaults.timeout = 30 * 1000; // 默认超时30s

const handleResponse = function (res) {
  res.status !== 200 && console.log('%c status ', 'background: red; color: #fff', res.status);
  switch (res.status) {
    case 200:
      return Promise.resolve(res.data);
    case 203:
      router.push('/login');
      return Promise.reject(new Error('登录失效，请重新登录'));
    default:
      return Promise.reject(new Error('登录失效，请重新登录'));
  }
};

const axiosThen = function (response) {
  return handleResponse(response).then(resData => {
    if (resData.isSuccess || (resData.isSuccess === undefined && !resData.errors)) {
      return Promise.resolve(resData.data);
    } else {
      if (resData.errors) {
        console.error('%c CATCH ERROR ', 'background: red; color: #fff', resData.errors);
        return Promise.reject(new Error(resData.errors.map(item => item.message).join(', ')));
      } else {
        console.error('%c CATCH ERROR ', 'background: red; color: #fff', resData.msg);
        return Promise.reject(new Error(resData.msg));
      }
    }
  });
};

axios.interceptors.response.use((response) => {
  // 对响应数据做点什么
  return axiosThen(response);
}, (error) => {
  // 对响应错误做点什么
  console.error('%c CATCH ERROR ', 'background: red; color: #fff', error);
  return Promise.reject(error);
});
