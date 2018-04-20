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
    <imageUploads 
        :maxLength="6"
        :dataList="menuList"
        :isText="menuType === 1"
        @change="getNewImages" />
</div>
</template>

<script>
import colorSelect from "../_base/color_select.vue";
import radioGroup from "../_base/radio_group.vue";
import imageUploads from "../_base/image_upload_list.vue";
export default {
    name: "bottomMenuSetting",
    mixins: [],
    props: {
        // 组件id
        metaId: { type: Number, default: 0 },
        metaInfo: {
            type: Object,
            default: function() {
                return {
                    menuType: 1, //按钮类型
                    bgColor: "#fff", //背景颜色
                    activeBgColor: "#fff", //选中背景色
                    lineColor: "#fff", //边框颜色
                    fontColor: "#666", //字体颜色
                    activeFontColor: "#666", //激活字体颜色
                    menuList: [
                        { text: "", imgSrc: "", linkPageId: "" },
                        { text: "", imgSrc: "", linkPageId: "" },
                        { text: "", imgSrc: "", linkPageId: "" }
                    ]
                };
            }
        }
    },
    data: function() {
        return {
            metaType: "003",
            metaText: "自定义菜单",

            menuType: this.metaInfo.menuType,
            bgColor: this.metaInfo.bgColor,
            activeBgColor: this.metaInfo.activeBgColor,
            lineColor: this.metaInfo.lineColor,
            fontColor: this.metaInfo.fontColor,
            activeFontColor: this.metaInfo.activeFontColor,
            menuList: this.metaInfo.menuList,

            menuTypeList: [
                //按钮类型列举
                { value: 1, text: "图片+文字" },
                { value: 2, text: "图片" }
            ]
        };
    },
    components: {
        colorSelect,
        radioGroup,
        imageUploads
        /*requireDemo: function (resolve) {
            require([""], resolve);
        }*/
    },
    created: function() {},
    mounted: function() {},
    beforeDestroy: function() {},
    computed: {},
    watch: {
        menuType: function() {
            this.dispatchNewStore();
        },
        bgColor: function() {
            this.dispatchNewStore();
        },
        activeBgColor: function() {
            this.dispatchNewStore();
        },
        lineColor: function() {
            this.dispatchNewStore();
        },
        fontColor: function() {
            this.dispatchNewStore();
        },
        activeFontColor: function() {
            this.dispatchNewStore();
        },
        menuList: function() {
            this.dispatchNewStore();
        }
    },
    methods: {
        // 图片更新
        getNewImages: function(newList) {
            this.menuList = newList;
        },
        //更新属性数据
        dispatchNewStore: function() {
            var data = {
                metaId: this.metaId,
                metaType: this.metaType, //组件类型 一定要有
                menuType: this.menuType, //按钮类型
                bgColor: this.bgColor, //背景颜色
                activeBgColor: this.activeBgColor, //选中背景色
                lineColor: this.lineColor, //边框颜色
                fontColor: this.fontColor, //字体颜色
                activeFontColor: this.activeFontColor, //激活字体颜色

                menuList: this.menuList
            };
            console.log("组件设置变更....");
            this.$store.dispatch("VUEX_SETTING_META", data);
        }
    }
};
</script>

<style scoped lang="less">
//@import "../../../less/variables.less";
//@import "../../../less/sprite.less";
.bottom-menu-setting {
    position: relative;
}
</style>