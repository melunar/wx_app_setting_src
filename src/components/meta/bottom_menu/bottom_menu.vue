<template>
    <div class="meta-bottom-menu">
        <el-row type="flex" class="row-bg">
            <!-- 这里强制使用24单位为了适配flex布局最大化宽度 -->
            <el-col :span="24"
                v-for="(item, index) in metaInfo.menuList" :key="index"> 
                <div class="grid-content" :data-href="item.linkUrl"
                    :style="{
                        'border-right-color': metaInfo.lineColor,
                        'background-color': activeIndex === index ? metaInfo.activeBgColor : metaInfo.bgColor
                    }">
                    <template v-if="metaInfo.menuType === 1"><!-- 图文 -->
                        <a class="icon-top">
                            <img class="image-mini" :src="item.imgSrc | defaultMiniImageUrl(index)">
                        </a>
                        <span class="text-mini text-overflow-ellipsis"
                            :style="{
                                'color': activeIndex === index ? metaInfo.activeFontColor : metaInfo.fontColor
                            }"    
                            >{{ item.text }}</span>
                    </template>
                    <template v-if="metaInfo.menuType === 2"><!-- 图片 -->
                        <a class="icon-full">
                            <img class="image-full" :src="item.imgSrc | defaultFullImageUrl(index)">
                        </a>
                    </template>
                    </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "bottomMenu",
    mixins:[],
    props: {
        /* menuList: {type: Array, default: function() {
            return [
                {text: "消息", imgSrc: "", linkUrl: "#"},
                {text: "联系人", imgSrc: "", linkUrl: "#"},
                {text: "个人中心", imgSrc: "", linkUrl: "#"},
                {text: "个人中心", imgSrc: "", linkUrl: "#"}
            ]
        }}, //按钮列表 todo
        menuType: {type: Number, default: 1}, //按钮类型
        bgColor: {type: String, default: "#fff"}, //背景颜色
        activeBgColor: {type: String, default: "#eee"}, //选中背景色
        lineColor: {type: String, default: "#fff"}, //边框颜色
        fontColor: {type: String, default: "#666"},//字体颜色
        activeFontColor: {type: String, default: "#f66"} //激活字体颜色 */
        metaId: { type: Number, default: 0 },
        metaConfig: { type: Object, default: function() {
            return {
                menuList: [
                    {text: "消息", imgSrc: "", linkUrl: "#"},
                    {text: "联系人", imgSrc: "", linkUrl: "#"},
                    {text: "个人中心", imgSrc: "", linkUrl: "#"},
                    {text: "个人中心", imgSrc: "", linkUrl: "#"}
                ],
                menuType: 1,
                bgColor: "#fff",
                activeBgColor: "#eee",
                lineColor: "#fff", //边框颜色
                fontColor:"#666",//字体颜色
                activeFontColor: "#f66" //激活字体颜色
            }
        } }
    },
    data: function() {
        return {
            activeIndex: 0, //当前选中索引,
            metaInfo: this.metaConfig
        };
    },
    components: {
        /*requireDemo: function (resolve) {
            require([""], resolve);
        }*/
    },
    created: function() { 
    },
    mounted: function() {},
    beforeDestroy: function() {},
    computed: {
        meta_setting: function() {
            return this.$store.state.system.vuex_setting_meta;
        }
    },
    watch: { 
        //同类型组件切换
        "metaId": function() {
            this.metaInfo = this.metaConfig;
        },
        "meta_setting": function(config) { 
            if(this.metaId && config.metaId === this.metaId) {
                this.metaInfo = config; 
            }
        }
    },
    methods: {
       
    },
    filters: {
        //默认图标（替代空图标美化页面）
        defaultFullImageUrl: function(url, index) {
            if(url) return url;
            var rest = index % 5;
            return "/static/images/static_img/bottom-menu/menu-" + rest + ".png"
        },
        defaultMiniImageUrl: function(url, index) {
            if(url) return url;
            var rest = index % 5;
            return "/static/images/static_img/bottom-menu/menu-" + rest + ".png"
        }
    }
}
</script>

<style scoped lang="less">
    //@import "../../less/variables.less";
    //@import "../../less/sprite.less";
    .meta-bottom-menu {
        position: relative; width: 100%;

        .grid-content {
            height: 50px;
            border-right: 1px solid #fff;
            text-align: center;
        }
        .icon-top {
            display: inline-block;
            width: 100%;
            padding-top: 3px;
            height: 25px;
        }
        .image-mini {
            display: inline-block;
            border: none;
            width: 25px;
            height: 25px;
        }
        .text-mini {
            color: rgb(102, 102, 102);
            line-height: 20px;
            display: inline-block;
            width: 100%;
        }
        .icon-full {
            width: 100%;
            height: 100%;
            display: inline-block;
        }
        .image-full {
            display: inline-block;
            border: none;
            width: 40px;
            height: 40px;
            margin-top: 4px;
        }
    }
</style>