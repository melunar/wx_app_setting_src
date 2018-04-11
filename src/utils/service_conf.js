var urlList = {
    templatePagesList: {
        comment: "根据模板获取所有页面",
        url: "/static/mock/pages_in_template.json",
        method: "get",
        isRequestBody: false
    },
    pageInfo: {
        comment: "根据页面获取页面信息，包括页面配置和组件及信息",
        url: "/static/mock/page_info.json",
        method: "get",
        isRequestBody: false
    }
    /* , metaInfo: {
        comment: "获取一个组件的信息，包括sort和配置信息",
        url: "/static/mock/meta_info.json",
        method: "get",
        isRequestBody: false
    } */
};

export default urlList;