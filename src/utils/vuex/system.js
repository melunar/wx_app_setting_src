var state = {
    vuex_setting_is_page: false,
    vuex_add_meta_info: null, //添加组件
    /* 
        {metaId: new Date().getTime(), metaType: "001"}
    */

    vuex_page_metas: null, //页面组件
    vuex_setting_meta: null, //当前配置的组件信息
    vuex_setting_page: null, //当前配置的页面信息
    vuex_is_to_save: false //是否需要保存当前页 用于切换页面时校验处理
};
var actions = {
    VUEX_SETTING_PAGE: function(store, param) {
        store.commit("VUEX_SETTING_PAGE", param);
    },
    VUEX_ADD_META_INFO: function(store, param) {
        store.commit("VUEX_ADD_META_INFO", param);
    },
    VUEX_PAGE_METAS: function(store, param) {
        store.commit("VUEX_PAGE_METAS", param);
    },
    VUEX_SETTING_META: function(store, param) {
        store.commit("VUEX_SETTING_META", param);
    },
    VUEX_SETTING_IS_PAGE: function(store, param) {
        store.commit("VUEX_SETTING_IS_PAGE", param);
    },
    VUEX_IS_TO_SAVE: function(store, param) {
        store.commit("VUEX_IS_TO_SAVE", param);
    }
};
var mutations = {
    VUEX_SETTING_PAGE: function(state, val) {
        state.vuex_setting_page = val;
    },
    VUEX_ADD_META_INFO: function(state, val) {
        state.vuex_add_meta_info = val;
    },
    VUEX_PAGE_METAS: function(state, val) {
        state.vuex_page_metas = val;
    },
    VUEX_SETTING_META: function(state, val) {
        state.vuex_setting_meta = val;
    },
    VUEX_SETTING_IS_PAGE: function(state, val) {
        state.vuex_setting_is_page = val;
    },
    VUEX_IS_TO_SAVE: function(state, val) {
        state.vuex_is_to_save = val;
    }
};
export default {
    state: state,
    actions: actions,
    mutations: mutations
};
