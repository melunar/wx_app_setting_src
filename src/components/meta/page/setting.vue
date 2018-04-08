<template>
    <div class="page-setting">
        <inputNormal 
            v-model="pageName"
            :labelText="'页面名称'"
            :isShowTips="true"
            :tipsContent="'注意：页面名称是便于后台查找，页面标题是手机端标题'" />
        <inputNormal 
            v-model="pageTitle"
            :labelText="'页面标题'" />
        <colorSelect 
            :labelText="'页面颜色'"
            :curColor="pageBgColor"
            :defaultColor="pageBgColor" />
        <colorSelect 
            :labelText="'顶部背景颜色'"
            :curColor="pageHeaderBgColor"
            :defaultColor="pageHeaderBgColor" />
        <radioGroup 
            v-model="pageHeaderColor"
            :labelText="'顶部文字颜色'"
            :radioArray="pageHeaderColorList"
        />
        <numberSlider 
            :modelVlaue="3"
            :labelText="'页面边距'"
            :tipsText="'px'"
            :max="20" :min="0"
        />
    </div>
</template>

<script>
import inputNormal from "../_base/input_normal.vue";
import colorSelect from "../_base/color_select.vue";
import radioGroup from "../_base/radio_group.vue";
import numberSlider from "../_base/number_slider.vue";
export default {
    name: "pageMetaSetting",
    mixins:[],
    props: {
        // 页面id
        pageIdProp: {type: String, default: ""},
        // 页面名称 用于列表展示名称
        pageNameProp: {type: String, default: "未命名页面"},
        // 页面标题 用于页面内容展示
        pageTitleProp: {type: String, default: "未命名标题"},
        // 页面背景色
        pageBgColorProp: {type: String, default: "#FFF"},
        // 页面顶部背景色
        pageHeaderBgColorProp: {type: String, default: "#EEE"},
        // 页面顶部文字背景色
        pageHeaderColorProp: {type: Number, default: 1}
    },
    data: function() {
        return {
            pageName: this.pageNameProp,
            pageTitle: this.pageTitleProp,
            pageId: this.pageIdProp,
            pageBgColor: this.pageBgColorProp,
            pageHeaderBgColor: this.pageHeaderBgColorProp,
            pageHeaderColor: this.pageHeaderColorProp,
            pageHeaderColorList: [ // 顶部文字颜色列举
                { value: 1, text: "黑色" },
                { value: 2, text: "白色" }
            ],
            tipsFormat1: function(val) {
                return val/10;
            }
        };
    },
    components: {
        inputNormal,colorSelect,
        radioGroup,numberSlider
        /*requireDemo: function (resolve) {
            require([""], resolve);
        }*/
    },
    created: function() {},
    mounted: function() {},
    beforeDestroy: function() {},
    computed: {
        
    },
    watch: {},
    methods: {
        
    }
}
</script>

<style scoped lang="less">
    //@import "../less/variables.less";
    //@import "../less/sprite.less";
    .page-setting {
        
    }
</style>