<template>
<div class="app-model">
    <div class="phone-container">
        <div class="phone-model">
            <div class="phone-body">
                <div class="phone-header"
                    :style="{
                        'background-color': pageHeaderBgColor,
                        'color': pageHeaderColorMap[pageHeaderColor]
                    }">{{ pageTitle }}</div>
                <div class="phone-content" 
                    :style="{
                        'background-color': pageBgColor
                    }" >
                    <div v-if="metasBySort.length === 0" class="phone-empty">
                        您尚未添加任何元素
                    </div>
                    <div v-if="metasBySort.length > 0" class="phone-sort-meat">
                        <!-- drag api
                            @start="draggableStart"
                            @add="draggableAdd"
                            @remove="draggableRemove" 
                            @update="draggableUpdate"
                            @end="draggableEnd" 
                            @choose="draggableChoose"  
                            @filter="draggableFilter" 
                            @clone="draggableClone" -->
                        <draggable v-model="metasBySort" @sort="draggableSort"> 
                            <component :is="componentId" 
                            v-for="(item, index) in metasBySort" :key="index"
                            :metaId="item.metaId"
                            :metaType="item.type"
                            :metaConfig="item.config"
                            @delMeta="deleteMeta" />
                        </draggable>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</div>
</template>

<script>
import draggable from "vuedraggable";
export default {
    name: "appModel",
    mixins: [],
    props: {
        // 组件列表
        metas: {
            type: Array,
            default: function() {
                return [
                    { name: "carousel", id: new Date().getTime() },
                    { name: "bottomMenu", id: new Date().getTime() + 1000 },
                    {
                        metaId: 3434345,
                        sort: 1,
                        id: "002",
                        text: "轮播图",
                        name: "carousel",
                        config: {
                            btnShape: 3,
                            btnPosition: 2,
                            btnColor: "#fff",
                            btnMarginLR: 5,
                            btnMarginBottom: 5,
                            btnTransparency: 0.8
                        }
                    },
                    { name: "number4" },
                    { name: "number5" }
                ];
            }
        },
        // 页面标题 用于页面内容展示
        pageTitle: { type: String, default: "未命名标题" },
        // 页面背景色
        pageBgColor: { type: String, default: "#FFF" },
        // 页面顶部背景色
        pageHeaderBgColor: { type: String, default: "#FFF" },
        // 页面顶部文字背景色
        pageHeaderColor: { type: Number, default: 1 },
        // 页面边距
        marginValue: { type: Number, default: 0 }
    },
    data: function() {
        return {
            pageHeaderColorMap: {
                "1": "#000",
                "2": "#fff"
            },
            metasBySort: this.metas || []
        };
    },
    components: {
        sortableMeta: function(resolve) {
            require(["./sortable_meta.vue"], resolve);
        },
        draggable
    },
    created: function() {},
    mounted: function() {},
    beforeDestroy: function() {},
    computed: {
        componentId: function() {
            return this.metas.length ? "sortableMeta" : "";
        },
        // 添加的新组件
        vuex_add_meta_info: function() {
            return this.$store.state.system.vuex_add_meta_info;
        },
        vuex_page_metas: function() {
            return this.$store.state.system.vuex_page_metas;
        },
        vuex_setting_meta: function() {
            return this.$store.state.system.vuex_setting_meta;
        }
    },
    watch: {
        vuex_page_metas: function(val) {
            console.log("page......");
            console.log(JSON.parse(JSON.stringify(val)))
        },
        vuex_setting_meta: function(val) {
            console.log("meta......");
            console.log(JSON.parse(JSON.stringify(val)))
            this.updateToNewConfig('meta', val)
        },
        metas: {
            handler: function(vals) {
                console.log("页面组件刷新");
                this.metasBySort = vals || [];
            },
            deep: true
        },
        vuex_add_meta_info: function(info) {
            if (!info) {
                return;
            }
            var newMeta = {
                metaId: info.metaId,
                sort: this.metasBySort.lenth,
                type: info.metaType,
                config: null
            };
            this.metasBySort.splice(this.metasBySort.length, 0, newMeta);
        }
    },
    methods: {
        updateToNewConfig: function(type, config) {
            if(type === 'page') {}
            if(type === 'meta') {
                var metaId = config.metaId;
                this.metasBySort.map(
                function(item, index) {
                    if(item.metaId === metaId) {
                        this.metasBySort[index].config = config;
                    }
                }.bind(this)
            );
            }
        },
        //删除一个组件
        deleteMeta: function(meta) {
            var metaId = meta.metaId;
            var metaType = meta.metaType;
            var metaName = GC.metaListMap[metaType].name;
            this.metasBySort.map(
                function(item, index) {
                    if (metaId === item.metaId) {
                        this.$alert(
                            "确定要删除该" + metaName + "组件？",
                            "提示",
                            {
                                confirmButtonText: "删除",
                                callback: function() {
                                    this.metasBySort.splice(index, 1); // 删除
                                    this.reSortMetas(); // 重拍
                                    if (
                                        this.$store.state.system
                                            .vuex_setting_meta &&
                                        this.$store.state.system
                                            .vuex_setting_meta.metaId ===
                                            metaId &&
                                        !this.$store.state.system
                                            .vuex_setting_is_page
                                    ) {
                                        //删除的是当前正在编辑的组件 触发到页面编辑上
                                        console.log("删除....切换到页面配置");
                                        this.$store.dispatch(
                                            "VUEX_SETTING_IS_PAGE",
                                            true
                                        );
                                    }
                                }.bind(this)
                            }
                        );
                    }
                }.bind(this)
            );
        },
        //拖拽排序
        draggableSort: function(e) {
            //console.log("-----          newIndex：" + e.newIndex);
            //console.log("-----          oldIndex：" + e.oldIndex);
            console.log("----- 拖拽重排");
            this.reSortMetas();
        },
        //拖拽排序 end

        // 对组件sort字段重新排序
        reSortMetas: function() {
            this.metasBySort.map(
                function(item, index) {
                    this.metasBySort[index].sort = index;
                }.bind(this)
            );
        }
    }
};
</script>

<style scoped lang="less">
@import "../less/variables.less";
@import "../less/sprite.less";
.app-model {
    display: inline-block;
    position: absolute;
    right: 440px;
    left: 325px;
    top: 0;
    bottom: 0;
    overflow-x: hidden;

    .phone-container {
        height: 900px;
        width: 375px;
        position: absolute;
        left: 50%;
        margin-left: -188px;
        margin-bottom: 50px; /* 为了手机模型不沉底 */
    }
    .phone-body {
        width: 365px;
        height: auto;
        border: 1px solid #ddd;
        border-radius: 10px;
        background: #fff;
        padding: 10px;
        overflow: hidden;
        float: none;
        margin: 35px auto 150px;
    }
    .phone-header {
        height: 54px;
        width: 100%;
        background-size: 100% auto;
        padding: 0 50px;
        color: black;
        text-align: center;
        line-height: 68px;
        cursor: default;
        overflow: hidden;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        border: 1px solid #ddd;
        border-width: 1px 1px 0px 1px;
        background: white;
        .x-pic;
        .x-pic-icon339x60-phone-top;
    }
    .phone-content {
        min-height: 500px;
        width: 100%;
        border: 1px solid #ddd;
        border-top: 0;
        background-color: @pageBgColor;
        position: relative;
        top: -3px;
    }
    .phone-empty {
        width: 100%;
        height: 400px;
        line-height: 400px;
        text-align: center;
    }
    .phone-sort-meat {
    }
}
</style>