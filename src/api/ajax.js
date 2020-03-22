import axios from 'axios'
import {getUserTempId, getUserInfo} from '@/utils/storageUtils'

const ajax = axios.create({
  baseURL: "/api",
  timeout: 5000
})

ajax.interceptors.request.use((config) => {
  const userInfo = getUserInfo()
  if (userInfo && userInfo.token) {
    console.log('===', userInfo.token)
    config.headers['token'] = userInfo.token
  } 
  // 总是携带用户的临时ID(否则得不到未登陆时添加的购物项)
  config.headers['userTempId'] = getUserTempId()
  return config
})

ajax.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  return Promise.reject(error)
})

export default ajax;