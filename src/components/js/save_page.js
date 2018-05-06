let getPageAndMetaInfo = () => {
    let pageInfo = vueInstance.$store.state.system.vuex_setting_page || {};
    // let metaInfo = vueInstance.$store.state.system.vuex_setting_meta || {};
    let metaInfo = vueInstance.$root.$children[0].$children[0].$children[3].getMetaInfo() || {};
    return {
        pageInfo, metaInfo
    };
};
let savePage = (pageId) => {
    var param = getPageAndMetaInfo();
    console.log('pageinfo = ' + JSON.stringify(param.pageInfo));
    console.log('metainfo = ' + JSON.stringify(param.metaInfo));
    
    SERVICE("savePage", param, (res) => {
        // TODO: 
        vueInstance.$store.dispatch("VUEX_IS_TO_SAVE", false);
    }, () => {
        message.error("保存失败 code = 2");
    } ); 
    
}
export default {
    savePage
}