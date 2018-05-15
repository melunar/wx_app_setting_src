/*let tconfig = {
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

import axios from "axios";
import urlList from "./service_conf.js";

window.SERVICE = function(name, params, successCallback, errorCallback) {
    var curUrl = urlList[name],
        method = curUrl.method || "get",
        isRequestBody = curUrl.isRequestBody || false,
        url = curUrl.url;
    if (!url) {
        console.warn("not config url!!!");
        return;
    }
    if (method === "get") {
        axios
            .get(url, { params: params })
            .then(function(res) {
                successCallback(res.data);
            })
            .catch(errorCallback);
    }
    if (method === "post") {
        debugger
        // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        axios
            .post(url, params, {headers:{'Content-Type':'application/x-www-form-urlencoded'}}) //text/plain;charset=UTF-8
            .then(function(res) {
                successCallback(res.data);
            })
            .catch(errorCallback);
    }
};
