var state = {
    vuex_setting_is_page: false, 
    vuex_setting_meta: { //当前配置的组件信息
        name: "meta", // 组件名称
        type: "", // 组件名称（代码）
        id: "" // 组件实例id
        , timeStamp: new Date().getTime()
    }, 
    vuex_setting_page: { //当前配置的页面信息
        title: "page", // 页面标题
        name: "", // 页面名称
        url: "", // 页面url
        id: "" // 页面id
        , timeStamp: new Date().getTime()
    }
    //vuex_setting_from: {} //当前配置选中组件或页面
};
var actions = { 
    VUEX_SETTING_PAGE: function(store, param) {
        store.commit("VUEX_SETTING_PAGE", param)
    },
    VUEX_SETTING_META: function(store, param) {
        store.commit("VUEX_SETTING_META", param)
    },
    VUEX_SETTING_IS_PAGE: function(store, param) {
        store.commit("VUEX_SETTING_IS_PAGE", param)
    }
};
var mutations = { 
    "VUEX_SETTING_PAGE": function (state, val) {
        state.vuex_setting_page = val;
    },
    "VUEX_SETTING_META": function (state, val) {
        state.vuex_setting_meta = val;
    },
    "VUEX_SETTING_IS_PAGE": function (state, val) {
        state.vuex_setting_is_page = val;
    }
};
export default {
    state: state,
    actions: actions,
    mutations: mutations
}