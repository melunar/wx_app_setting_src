<template>
    <div class="bottom-menu-setting">
        <radioGroup 
            v-model="MenuType"
            :labelText="'菜单样式'"
            :radioArray="menuTypeList" />
        <colorSelect 
            :labelText="'默认背景颜色'"
            v-model="BgColor"
            :defaultColor="'#fff'" /> 
        <colorSelect 
            :labelText="'选中背景颜色'"
            v-model="ActiveBgColor"
            :defaultColor="'#fff'" />
        <colorSelect 
            :labelText="'边框颜色'"
            v-model="LineColor"
            :defaultColor="'#fff'" />
        <colorSelect 
            :labelText="'默认文字颜色'"
            v-model="FontColor"
            :defaultColor="'#666'" />
        <colorSelect 
            :labelText="'选中文字颜色'"
            v-model="ActiveFontColor"
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
        menuType: {type: Number, default: 1}, //按钮类型
        bgColor: {type: String, default: "#fff"}, //背景颜色
        activeBgColor: {type: String, default: "#fff"}, //选中背景色
        lineColor: {type: String, default: "#fff"}, //边框颜色
        fontColor: {type: String, default: "#666"},//字体颜色
        activeFontColor: {type: String, default: "#666"} //激活字体颜色
    },
    data: function() {
        return {
            MenuType: this.menuType,
            BgColor: this.bgColor,
            ActiveBgColor: this.activeBgColor,
            LineColor: this.lineColor,
            FontColor: this.fontColor,
            ActiveFontColor: this.activeFontColor,
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
    watch: {},
    methods: {
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