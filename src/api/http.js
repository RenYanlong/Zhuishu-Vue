import axios from 'axios';

// 根据环境切换默认请求地址
if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = 'https://novel.juhe.im';
}
else if (process.env.NODE_ENV == 'debug') {
  axios.defaults.baseURL = 'https://novel.juhe.im';
}
else if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = 'https://novel.juhe.im';
}
// 设置超时时间
axios.defaults.timeout = 2500;

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    return config;
  },
  error => {
    // 请求错误
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // 对响应错误做点什么
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          console.log('错误请求')
          break;
        case 401:
          console.log('未授权，请重新登录')
          break;
        case 403:
          console.log('拒绝访问')
          break;
        case 404:
          console.log('请求错误,未找到该资源')
          break;
        case 405:
          console.log('请求方法未允许')
          break;
        case 408:
          console.log('请求超时')
          break;
        case 500:
          console.log('服务器端出错')
          break;
        case 501:
          console.log('网络未实现')
          break;
        case 502:
          console.log('网络错误')
          break;
        case 503:
          console.log('服务不可用')
          break;
        case 504:
          console.log('网络超时')
          break;
        case 505:
          console.log('http版本不支持该请求')
          break;
        default:
          console.log(`连接错误${err.response.status}`)
      }
    } else {
      console.log('连接到服务器失败')
    }
    return Promise.resolve(error.response)
  });

export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error)
      })
  })
}

