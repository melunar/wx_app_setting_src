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
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; 

import urlList from "./service_conf.js";

window.SERVICE = function(name, params, successCallback, errorCallback) {
    var curUrl = urlList[name],
        method = (curUrl.method || "get").toLowerCase(),
        isRequestBody = curUrl.isRequestBody || false,
        url = curUrl.url;
    if (!url) {
        console.warn("未找到请求地址,请核实url...");
        return;
    }
    if (method === "get") {
        axios
            .get(url, { params: params })
            .then((res) => {
                if(res.code !== 200) {
                    message.error(res.message || "请求异常...");
                } else successCallback(res.data);
            })
            .catch((e) => {
                message.error('请求失败...');
            });
    }
    if (method === "post") {
        axios.post(url, params)
            .then(function(response) {
                var res = response.data;
                if(res.code !== 200) {
                    message.error(res.message || "请求异常...");
                } else successCallback(res.data);
            })
            .catch((e) => {
                message.error('请求失败...');
            });
    }
};
