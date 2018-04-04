/*  import config from './config'
import axios from 'axios'

let tconfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
// 二手房列表详情
export const usedList = (data) => {
  return axios.get(config.used_lists, {params: data})
}
export const usedDetail = (data) => {
  return axios.get(config.used_detail, {params: data})
}
// 登录
export const login = (data) => {
  return axios.post(config.RecordListslogin, data)
}
// 注册
export const register = () => {
  return axios.post(config.register)
}  */
import axios from 'axios';

var config = [
  {url: "gateway/sys/conf_setting", type: "get", params: "", isRequestBody: false}
];

var httpTest = axios.get(config[0].url, {params: config[0].params})

// module.exports = httpTest;
export default httpTest;
