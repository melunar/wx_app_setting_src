var state = {
    vuex_demo: false
};
var actions = { 
    VUEX_DEMO: function(store, param) {
        store.commit("VUEX_DEMO", param)
    }
};
var mutations = {
    "VUEX_DEMO": function (state, bool) {
        state.vuex_demo = bool;
    }
};
export default {
    state: state,
    actions: actions,
    mutations: mutations
}