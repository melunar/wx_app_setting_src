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
                        <div v-if="metasBySort.length === 0" class="phone-empty">
                            您尚未添加任何元素
                        </div>
                        <div v-if="metasBySort.length > 0" class="phone-sort-meat">
                                <!-- @start="draggableStart"
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
                                :metaConfig="item.config" />
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
        metas: {type: Array, default: function() { return [{name: "carousel", id: new Date().getTime()},{name: "bottomMenu", id: new Date().getTime() + 1000},{
            "metaId": 3434345,
            "sort": 1,
            "id": "002",
            "text": "轮播图",
            "name": "carousel",
            "config": {
                "btnShape": 3,
                "btnPosition": 2,
                "btnColor": "#fff",
                "btnMarginLR": 5,
                "btnMarginBottom": 5,
                "btnTransparency": 0.8
            }
        },{name: "number4"},{name: "number5"}] }},
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
            },
            metasBySort: this.metas || []
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
            return this.metas.length ? "sortableMeta" : "";
        }
    },
    watch: {
        "metas": {
            handler: function(vals) {
                this.metasBySort = vals || [];
            }, deep: true
        }
    },
    methods: {
        //拖拽排序
        /* draggableStart: function(e,a,b) { 
            console.log("-----托拉拽操作：" + e.type); 
            console.log("-------------- oldIndex：" + e.oldIndex); 
        }, */
        // draggableAdd: function(e,a,b) {console.log("-----托拉拽操作：" + e.type);debugger},
        // draggableRemove: function(e,a,b) {console.log("-----托拉拽操作：" + e.type);debugger},
        // draggableUpdate: function(e,a,b) {console.log("-----托拉拽操作：" + e.type);debugger},
        /* draggableEnd: function(e,a,b) {
            console.log("-----托拉拽操作：" + e.type);
            console.log("-----          newIndex：" + e.newIndex);
            console.log("-----          oldIndex：" + e.oldIndex);
        }, */
        // draggableChoose: function(e,a,b) {console.log("-----托拉拽操作：" + e.type);debugger},
        draggableSort: function(e,a,b) {
            console.log("-----托拉拽操作：" + e.type);console.log("-----托拉拽操作：" + e.type);
            console.log("-----          newIndex：" + e.newIndex);
            console.log("-----          oldIndex：" + e.oldIndex);
        },
        // draggableFilter: function(e,a,b) {console.log("-----托拉拽操作：" + e.type);debugger},
        // draggableClone: function(e,a,b) {console.log("-----托拉拽操作：" + e.type);debugger}
        
        // todo more and more

        //拖拽排序 end
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