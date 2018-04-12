<template>
    <div class="meta-carousel-setting">
        <radioGroup 
            v-model="btnShape"
            :labelText="'按钮形状'"
            :radioArray="btnShapeList" />
        <radioGroup 
            v-model="btnPosition"
            :labelText="'按钮位置'"
            :radioArray="btnPositionList" />
        <colorSelect 
            :labelText="'按钮颜色'"
            v-model="btnColor"
            :defaultColor="'#fff'" /> 
        <numberSlider 
            v-model="btnMarginLR"
            :labelText="'按钮左右边距'"
            :tipsText="'px'"
            :max="50" :min="5" />
        <numberSlider 
            v-model="btnMarginBottom"
            :labelText="'按钮底部边距'"
            :tipsText="'px'"
            :max="50" :min="5" />
        <numberSlider 
            v-model="btnTransparency"
            :labelText="'按钮透明度'"
            :tipsText="'最大是1'"
            :step="0.1"
            :max="1.0" :min="0.1" />
        <br><br>
        <el-button @click="consoleOut">输出参数（console）</el-button>
    </div>
</template>

<script>
import inputNormal from "../_base/input_normal.vue";
import colorSelect from "../_base/color_select.vue";
import radioGroup from "../_base/radio_group.vue";
import numberSlider from "../_base/number_slider.vue";
export default {
    name: "metaCarouselSetting",
    mixins:[],
    props: {
        // 组件id
        metaId: {type: Number, default: 0 },
        /* 
        // 按钮形状
        btnShape: {type: Number, default: 3},
        // 按钮位置
        btnPosition: {type: Number, default: 2},
        // 按钮颜色
        btnColor: {type: String, default: "#FFF"},
        // 按钮左右边距
        btnMarginLR: {type: Number, default: 5},
        // 按钮底部边距
        btnMarginBottom: {type: Number, default: 5},
        // 按钮透明度
        btnTransparency: {type: Number, default: 0.8} */
        metaInfo: {
            type: Object,
            default: function() {
                return {
                    metaId: "", //组件实例id
                    // 按钮形状
                    btnShape: 3,
                    // 按钮位置
                    btnPosition: 2,
                    // 按钮颜色
                    btnColor: "#fff",
                    // 按钮左右边距
                    btnMarginLR: 5,
                    // 按钮底部边距
                    btnMarginBottom: 5,
                    // 按钮透明度
                    btnTransparency: 0.8
                }
            }
        }
    },
    data: function() {
        return {
            // _metaId: this.metaId,
            metaType: "002",
            metaText: "轮播图",

            btnShape: this.metaInfo.btnShape,
            btnPosition: this.metaInfo.btnPosition,
            btnColor: this.metaInfo.btnColor, 
            btnMarginLR: this.metaInfo.btnMarginLR,
            btnMarginBottom: this.metaInfo.btnMarginBottom,
            btnTransparency: this.metaInfo.btnTransparency, 

            btnShapeList: [ 
                { value: 1, text: "长方形" },
                { value: 2, text: "正方形" },
                { value: 3, text: "圆形" }
            ],
            btnPositionList: [ 
                { value: 1, text: "居左" },
                { value: 2, text: "居中" },
                { value: 3, text: "居右" }
            ]
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
        anyFormValChange: function() {
            return JSON.stringify({
                btnShape: this.btnShape,
                btnPosition: this.btnPosition,
                btnColor: this.btnColor, 
                btnMarginLR: this.btnMarginLR,
                btnMarginBottom: this.btnMarginBottom,
                btnTransparency: this.btnTransparency, 
            });
        }
    },
    watch: { 
        //同类型组件切换
        "metaId": function() {
            debugger
           // this.metaInfo = this.metaConfig;
        },
        "anyFormValChange": function() {
            this.dispatchNewStore();
        }
    },
    methods: {
        //更新属性数据
        dispatchNewStore: function() {
            var data = {
                metaId: this.metaId,
                metaType: this.metaType, //组件类型 一定要有

                btnShape: this.btnShape,  
                btnPosition: this.btnPosition,  
                btnColor: this.btnColor, 
                btnMarginLR: this.btnMarginLR, 
                btnMarginBottom: this.btnMarginBottom,
                btnTransparency: this.btnTransparency 

                , imageList: [ //todo
                    { src: "", linkUrl: "#" },
                    { src: "", linkUrl: "#" }
                ],
            };
            this.$store.dispatch("VUEX_SETTING_META", data);
        },
       consoleOut: function() {
           console.group("\/***page setting output");
           console.log("_btnShape = " + this.btnShape);
           console.log("_btnPosition = " + this.btnPosition);
           console.log("_btnColor = " + this.btnColor);
           console.log("_btnMarginLR = " + this.btnMarginLR);
           console.log("_btnMarginBottom = " + this.btnMarginBottom);
           console.log("_btnTransparency = " + this.btnTransparency);
           console.groupEnd("page setting output***\/");
       }
    }
}
</script>

<style scoped lang="less">
    //@import "../less/variables.less";
    //@import "../less/sprite.less";
    .meta-carousel-setting {
        
    }
</style>