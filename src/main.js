import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router/index.js";

Vue.config.productionTip = false;

//引入element-ui组件库
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 导入一些配置
require("./utils/config.js");

import storeModules from "./utils/store.js";
Vue.use(Vuex);
var store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: storeModules
});

import gcService from "./utils/service.js";
 
window.vueInstance = new Vue({
    el: "#app",
    router,
    store,
    components: { App },
    template: "<App/>"
});
