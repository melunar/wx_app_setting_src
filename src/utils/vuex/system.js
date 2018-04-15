var state = {
    vuex_setting_is_page: false, 
    vuex_add_meta_info: null, //添加组件
    /* 
        {metaId: new Date().getTime(), metaType: "001"}
    */

    vuex_page_metas: null, //页面组件 
    vuex_setting_meta: null/* { //当前配置的组件信息
        name: "meta", // 组件名称
        type: "", // 组件名称（代码）
        id: "" // 组件实例id
        , timeStamp: new Date().getTime()
    } */, 
    vuex_setting_page: null//{ //当前配置的页面信息
        /* "id": 0, 
        "pageName": "", 
        "pageTitle": "", 
        "pageBgColor": "", 
        "pageBgColorDefault": "", 
        "pageHeaderBgColor": "", 
        "pageHeaderBgColorDefault": "", 
        "pageHeaderColor": "", 
        "marginValue": 0 */
    // }
    //vuex_setting_from: {} //当前配置选中组件或页面
};
var actions = { 
    VUEX_SETTING_PAGE: function(store, param) {
        store.commit("VUEX_SETTING_PAGE", param)
    },
    VUEX_ADD_META_INFO: function(store, param) {
        store.commit("VUEX_ADD_META_INFO", param)
    },
    VUEX_PAGE_METAS: function(store, param) {
        store.commit("VUEX_PAGE_METAS", param)
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
    "VUEX_ADD_META_INFO": function (state, val) {
        state.vuex_add_meta_info = val;
    },
    "VUEX_PAGE_METAS": function (state, val) {
        state.vuex_page_metas = val;
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