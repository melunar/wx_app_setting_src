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
                            'background-color': pageBgColor,
                            'padding': marginValue + 'px'
                        }" >
                        <div v-if="meatUnit.length === 0" class="phone-empty">
                            您尚未添加任何元素
                        </div>
                        <div v-if="meatUnit.length > 0" class="phone-sort-meat">
                            <draggable v-model="meatUnit"> 
                                <component :is="componentId" 
                                v-for="(item, index) in meatUnit" :key="index"
                                :metaId="item.id"
                                :metaName="item.name" />
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
    mixins:[],
    props: {
        // 组件列表
        meatUnit: {type: Array, default: function() { return [{name: "carousel", id: new Date().getTime()},{name: "bottomMenu", id: new Date().getTime() + 1000},{name: "number3"},{name: "number4"},{name: "number5"}] }},
        // 页面标题 用于页面内容展示
        pageTitle: {type: String, default: "未命名标题"},
        // 页面背景色
        pageBgColor: {type: String, default: "#FFF"},
        // 页面顶部背景色
        pageHeaderBgColor: {type: String, default: "#FFF"},
        // 页面顶部文字背景色
        pageHeaderColor: {type: Number, default: 1},
        // 页面边距
        marginValue: {type: Number, default: 0}
    },
    data: function() {
        return { 
            pageHeaderColorMap: {
                "1": "#000",
                "2": "#fff"
            }
        };
    },
    components: {
        sortableMeta: function (resolve) {
            require(["./sortable_meta.vue"], resolve);
        },
        draggable
    },
    created: function() {
    },
    mounted: function() {},
    beforeDestroy: function() {},
    computed: {
        componentId: function() {
            return this.meatUnit.length ? "sortableMeta" : "";
        }
    },
    watch: {},
    methods: {

    }
}
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
            height: 900px; width: 375px;
            position: absolute;
            left: 50%; margin-left: -188px;
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
            height: 54px;width: 100%;
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
            .x-pic; .x-pic-icon339x60-phone-top;
        }
        .phone-content {
            min-height: 500px; width: 100%;
            border: 1px solid #ddd;
            border-top: 0;
            background-color: @pageBgColor;
            position: relative; top: -3px;
        }
        .phone-empty {
            width: 100%;
            height: 400px;
            line-height: 400px;
            text-align: center;
        }
        .phone-sort-meat {}
    }
</style>