// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router/index.js'

Vue.config.productionTip = false

//引入element-ui组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import storeModules from "./utils/store.js";
Vue.use(Vuex);
var store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: storeModules
});

/* import axios from 'axios';
Vue.prototype.$http = axios; */
import httpTest from "./utils/service.js";

/* httpTest.then(function(res) {
  console.log(res);
}); */

// 导入一些配置
require("./utils/config.js");

/* eslint-disable no-new */
window.vueInstance = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
