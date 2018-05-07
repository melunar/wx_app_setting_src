var urlList = {
    templatePagesList: { // demo 有数据
        comment: "根据模板获取所有页面",
        url: "/static/mock/pages_in_template.json",
        method: "get",
        isRequestBody: false
    },
    templatePagesList0: { //  demo 无数据
        comment: "根据模板获取所有页面",
        url: "/static/mock/pages_in_template0.json",
        method: "get",
        isRequestBody: false
    },
    pageInfo: {
        comment: "根据页面获取页面信息，包括页面配置和组件及信息",
        url: "/static/mock/page_info.json",
        method: "get",
        isRequestBody: false
    },
    pageInfo0: {
        comment: "根据页面获取页面信息，包括页面配置和组件及信息",
        url: "/static/mock/page_info0.json",
        method: "get",
        isRequestBody: false
    },
    setIndexPage: {
        comment: "设置首页页面",
        url: "http://test/url",
        method: "post",
        isRequestBody: false
    },
    savePage: {
        comment: "保存页面配置",
        url: "http://test/url",
        method: "post",
        isRequestBody: false
    }
};

export default urlList;
// module.exports = urlList; 建议用ES6
