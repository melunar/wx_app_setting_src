<template>
<div class="page-setting">
    <inputNormal 
        v-model="PageName"
        :labelText="'页面名称'"
        :isShowTips="true"
        :tipsContent="'注意：页面名称是便于后台查找，页面标题是手机端标题'" />
    <inputNormal 
        v-model="PageTitle"
        :labelText="'页面标题'" />
    <colorSelect 
        :labelText="'页面颜色'"
        v-model="PageBgColor"
        :defaultColor="PageBgColorDefault" />
    <colorSelect 
        :labelText="'顶部背景颜色'"
        v-model="PageHeaderBgColor"
        :defaultColor="PageHeaderBgColorDefault" />
    <radioGroup 
        v-model="PageHeaderColor"
        :labelText="'顶部文字颜色'"
        :radioArray="PageHeaderColorList" />
    <!-- <numberSlider 
        v-model="MarginValue"
        :labelText="'页面边距'"
        :tipsText="'px'"
        :max="20" :min="0" /> -->
</div>
</template>

<script>
import inputNormal from "../_base/input_normal.vue";
import colorSelect from "../_base/color_select.vue";
import radioGroup from "../_base/radio_group.vue";
import numberSlider from "../_base/number_slider.vue";
export default {
    name: "pageMetaSetting",
    mixins: [],
    props: {
        // 页面名称 用于列表展示名称
        pageName: { type: String, default: "未命名页面" },
        // 页面标题 用于页面内容展示
        pageTitle: { type: String, default: "未命名标题" },
        // 页面背景色
        pageBgColor: { type: String, default: "#FFF" },
        // 页面顶部背景色
        pageHeaderBgColor: { type: String, default: "#EEE" },
        // 页面顶部文字背景色
        pageHeaderColor: { type: Number, default: 1 },
        // 页面边距
        marginValue: { type: Number, default: 0 }
    },
    data: function() {
        return {
            PageName: this.pageName,
            PageTitle: this.pageTitle,
            PageBgColor: this.pageBgColor,
            PageBgColorDefault: "#FFF",
            PageHeaderBgColor: this.pageHeaderBgColor,
            PageHeaderBgColorDefault: "#FFF",
            PageHeaderColor: this.pageHeaderColor,
            MarginValue: this.marginValue,
            PageHeaderColorList: [
                // 顶部文字颜色列举
                { value: 1, text: "黑色" },
                { value: 2, text: "白色" }
            ]
        };
    },
    components: {
        inputNormal,
        colorSelect,
        radioGroup,
        numberSlider
        /*requireDemo: function (resolve) {
            require([""], resolve);
        }*/
    },
    created: function() {},
    mounted: function() {},
    beforeDestroy: function() {},
    computed: {},
    watch: {
        /* 监听属性值改变 对外变更store start */
        PageName: function(val) {
            this.dispatchNewStore();
        },
        PageTitle: function(val) {
            this.dispatchNewStore();
        },
        PageBgColor: function(val) {
            this.dispatchNewStore();
        },
        PageHeaderBgColor: function(val) {
            this.dispatchNewStore();
        },
        PageHeaderColor: function(val) {
            this.dispatchNewStore();
        },
        MarginValue: function(val) {
            this.dispatchNewStore();
        }
        /* 监听属性值改变 对外变更store end */
    },
    methods: {
        //更新属性数据
        dispatchNewStore: function() {
            var data = {
                pageName: this.PageName,
                pageTitle: this.PageTitle,
                pageBgColor: this.PageBgColor,
                pageHeaderBgColor: this.PageHeaderBgColor,
                pageHeaderColor: this.PageHeaderColor,
                marginValue: this.MarginValue
            };
            console.log("页面做了新的设置....");
            this.$store.dispatch("VUEX_IS_TO_SAVE", true);
            this.$store.dispatch("VUEX_SETTING_PAGE", data);
        }
    }
};
</script>

<style scoped lang="less">
//@import "../less/variables.less";
//@import "../less/sprite.less";
.page-setting {
    position: relative;
}
</style>