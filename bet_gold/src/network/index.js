// http/index.js
import axios from 'axios'
// import { useLoading } from 'vue-loading-overlay'
// 创建axios的一个实例
import router from '../routes'
import aes from '@/utils/aes'
let BaseUrl = ''
let message = ''


if (process.env.NODE_ENV == 'development') {
  BaseUrl = '/api'
} else {
  BaseUrl = window.location.protocol
}



const instance = axios.create({
  baseURL: BaseUrl, // 接口统一域名
  timeout: 6000, // 设置超时
  withCredentials: true,
  headers:{'Content-Type': 'application/json;charset=UTF-8'}
})

instance.interceptors.request.use((config) => {
  //const token = window.localStorage.getItem('tttt')
  const token = localStorage.getItem('tttt') ?
  JSON.parse(aes.Cryptodecrypt(JSON.parse(localStorage.getItem('tttt')), {
    key: "@hKe9@A1lKe9$Tz1kE@8HnG7",
    iv: "1234567890123456"
  })) :
  null
  token && (config.headers.Authorization = `Bearer ${token}`)
  if (config.requestBase == '/api') {
    config.baseURL = '/api'
  } else{
    config.baseURL = '/pay'
  }

  // let encx = aes.encrypt(JSON.stringify(config.data?.data),`-----BEGIN RSA PUBLIC KEY-----
  // MIICCgKCAgEAwC+fj1t6bcbC4IKv84bR94HgNmwfpCfjz+b0UaZO+8qyS131wqO7
  // +AAYRh7M3lQFXN7z+1P729TRXiFQ+FyDUYexnbo8q8xuS1FI3hYpLDPoiWm08M0V
  // NScSfG1SZClupjIOQc/G3UUq0Oy/RVKN96OSyBJEavbN9efGAUo5j+hJDeM5vADX
  // h4ROGWpGhb6xcbP8QAZoDMQuHj2kqjDORDqUvViNJ8Yp3e7AiHk5bQYrhYqpabHJ
  // fouvBGwpuSKh7XGrmOVbo6TYt9/ypAz/1iftcV6rRKYRTuEjoQHHcD9Jif2fuXCv
  // 4AWHhEgTye33YBxQHdWcp33YcyOe4PFgLbxQT0pmlR6nx8aPFMednVF4COa7pvJV
  // 9wFth+OM1B2K7sPBqkW5KNZxIU2LlSsd+mzyngYbJG98JBGvTL+dZkvFuzl7ap1b
  // baAlER+Uam7B2QotvXLf8CYNrYnn6QRnMO44WFHXQuWc5TvH8g0dZneqzhx3Hcln
  // TCeH/8sp/kJYvVDhpolqQHHv/ag/cO36pwtBWfzM0AkH4bI8XCHDees2w3dv9oQk
  // s+qHIERxBq/kvLZ64O4j+Ka6Pd/P9+FyTamnFJnexomwwYOqBnQpXeenq66NQBIj
  // owVbqcix8nEUXsJiIbI6tX8Ch63Cvhkkx2pUjty8ocLL3mQgsgkFxtcCAwEAAQ==
  // -----END RSA PUBLIC KEY-----`)
  // config.data = {data:encx,key:config?.data?.key}
  config.data = {data:config.data?.data,key:config?.data?.key}
  
  // else{
  //   config.baseURL = '/pay'
  // }
 return config
}, (error) => {
  Promise.reject(error)
}
)

// 响应拦截器
instance.interceptors.response.use((response) => {
  return response
}, (error) => {
  console.log(error,"errrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
  // 响应错误 Authorization token expired
  if (error?.response?.data?.statusCode == 401 || error?.response?.status == 401 ||  error?.response?.data?.message == '登录Token已过期, 请重新登录') {
    window.localStorage.clear();
    setTimeout(() => {
              window.location.reload()
              router.push('/')
    }, 1000);
  }
  console.log(error.response.data.statusCode    ,"response code")
  if (error?.response && error?.response?.status) {
    const status = error.response.status
    switch (status) {
      case 400:
        message = '请求错误'
        break
      case 401:
        message = '请求错误'
        break
      case 403:
        console.log("403 ---------->",status);
        break
      case 404:
        message = '请求地址出错'
        break
      case 408:
        message = '请求超时'
        break
      case 500:
        message = '服务器内部错误!'
        break
      case 501:
        message = '服务未实现!'
        break
      case 502:
        message = '网关错误!'
        break
      case 503:
        message = '服务不可用!'
        break
      case 504:
        message = '网关超时!'
        break
      case 505:
        message = 'HTTP版本不受支持'
        break
      default:
        message = '请求失败'
    }
    return Promise.reject(error)
  }
  return Promise.reject(error)
})

export  default instance
