/**  系统静态js配置 */

window.GC = {}; // global config系统全局配置变量

/* 组件类型映射 */
GC.metaTypeList = [
    { id: "01", name: "基础", fontawesomeIcon: "fa fa-cube" },
    { id: "02", name: "内容", fontawesomeIcon: "fa fa-cubes" },
    { id: "03", name: "图片", fontawesomeIcon: "fa fa-image" }
];

/* 组件列表 */
GC.metaList = [
    { id: "001", meta: "richText", name: "富文本", type: "01", fontawesomeIcon: "fa fa-cubes"}
    , { id: "002", meta: "carousel", name: "轮播图", type: "01", fontawesomeIcon: "fa fa-cubes"}
    , { id: "003", meta: "bottomMenu", name: "自定义菜单", type: "01", fontawesomeIcon: "fa fa-cubes"}

];
GC.metaListMap = {};
for(var i = 0; i < GC.metaList.length; i++) {
    GC.metaListMap[GC.metaList[i].id] = GC.metaList[i];
} 