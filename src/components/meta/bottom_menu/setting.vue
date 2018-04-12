<template>
    <div class="bottom-menu-setting">
        <radioGroup 
            v-model="menuType"
            :labelText="'菜单样式'"
            :radioArray="menuTypeList" />
        <colorSelect 
            :labelText="'默认背景颜色'"
            v-model="bgColor"
            :defaultColor="'#fff'" /> 
        <colorSelect 
            :labelText="'选中背景颜色'"
            v-model="activeBgColor"
            :defaultColor="'#fff'" />
        <colorSelect 
            :labelText="'边框颜色'"
            v-model="lineColor"
            :defaultColor="'#fff'" />
        <colorSelect v-if="menuType === 1"
            :labelText="'默认文字颜色'"
            v-model="fontColor"
            :defaultColor="'#666'" />
        <colorSelect v-if="menuType === 1"
            :labelText="'选中文字颜色'"
            v-model="activeFontColor"
            :defaultColor="'#666'" />
        <br><br>
        <el-button @click="consoleOut">输出参数（console）</el-button>
    </div>
</template>

<script>
import colorSelect from "../_base/color_select.vue";
import radioGroup from "../_base/radio_group.vue"; 
export default {
    name: "bottomMenuSetting",
    mixins:[],
    props: {
        /* menuType: {type: Number, default: 1}, //按钮类型
        bgColor: {type: String, default: "#fff"}, //背景颜色
        activeBgColor: {type: String, default: "#fff"}, //选中背景色
        lineColor: {type: String, default: "#fff"}, //边框颜色
        fontColor: {type: String, default: "#666"},//字体颜色
        activeFontColor: {type: String, default: "#666"} //激活字体颜色 */
        // 组件id
        metaId: {type: Number, default: 0 },
        metaInfo: {
            type: Object,
            default: function() {
                return {
                    metaId: "",
                    menuType: 1, //按钮类型
                    bgColor: "#fff", //背景颜色
                    activeBgColor: "#fff", //选中背景色
                    lineColor: "#fff", //边框颜色
                    fontColor: "#666",//字体颜色
                    activeFontColor: "#666" //激活字体颜色
                }
            }
        }
    },
    data: function() {
        return {
            // metaId: this.metaId,
            metaType: "003",
            metaText: "自定义菜单",

            menuType: this.metaInfo.menuType,
            bgColor: this.metaInfo.bgColor,
            activeBgColor: this.metaInfo.activeBgColor,
            lineColor: this.metaInfo.lineColor,
            fontColor: this.metaInfo.fontColor,
            activeFontColor: this.metaInfo.activeFontColor,
            
            menuTypeList: [ //按钮类型列举
                { value: 1, text: "图片+文字" },
                { value: 2, text: "图片" }
            ]
        };
    },
    components: {
        colorSelect, radioGroup
        /*requireDemo: function (resolve) {
            require([""], resolve);
        }*/
    },
    created: function() {},
    mounted: function() {},
    beforeDestroy: function() {},
    computed: {},
    watch: {
        "menuType": function() {
            this.dispatchNewStore();
        },
        "bgColor": function() {
            this.dispatchNewStore();
        },
        "activeBgColor": function() {
            this.dispatchNewStore();
        },
        "lineColor": function() {
            this.dispatchNewStore();
        },
        "fontColor": function() {
            this.dispatchNewStore();
        },
        "activeFontColor": function() {
            this.dispatchNewStore();
        }
    },
    methods: {
        //更新属性数据
        dispatchNewStore: function() {
            var data = {
                metaId: this.metaId,
                metaType: this.metaType, //组件类型 一定要有
                menuType: this.menuType, //按钮类型
                bgColor: this.bgColor, //背景颜色
                activeBgColor: this.activeBgColor, //选中背景色
                lineColor: this.lineColor, //边框颜色
                fontColor: this.fontColor,//字体颜色
                activeFontColor: this.activeFontColor //激活字体颜色

                , menuList: [ // todo 
                {text: "消息", imgSrc: "", linkUrl: "#"},
                {text: "联系人", imgSrc: "", linkUrl: "#"},
                {text: "个人中心", imgSrc: "", linkUrl: "#"},
                {text: "个人中心", imgSrc: "", linkUrl: "#"}
            ],
            };
            this.$store.dispatch("VUEX_SETTING_META", data);
        },
        consoleOut: function() {
           console.group("\/***page setting output");
           console.log("MenuType = " + this.MenuType);
           console.log("ActiveBgColor = " + this.ActiveBgColor);
           console.log("LineColor = " + this.LineColor);
           console.log("FontColor = " + this.FontColor);
           console.log("ActiveFontColor = " + this.ActiveFontColor);
           console.groupEnd("page setting output***\/");
       }
    }
}
</script>

<style scoped lang="less">
    //@import "../../../less/variables.less";
    //@import "../../../less/sprite.less";
    .bottom-menu-setting {
        
    }
</style>