<template>
    <div class="meta-carousel-setting">
        <radioGroup 
            v-model="BtnShape"
            :labelText="'按钮形状'"
            :radioArray="btnShapeList" />
        <radioGroup 
            v-model="BtnPosition"
            :labelText="'按钮位置'"
            :radioArray="btnPositionList" />
        <colorSelect 
            :labelText="'按钮颜色'"
            v-model="BtnColor"
            :defaultColor="'#fff'" /> 
        <numberSlider 
            v-model="BtnMarginLR"
            :labelText="'按钮左右边距'"
            :tipsText="'px'"
            :max="50" :min="5" />
        <numberSlider 
            v-model="BtnMarginBottom"
            :labelText="'按钮底部边距'"
            :tipsText="'px'"
            :max="50" :min="5" />
        <numberSlider 
            v-model="BtnTransparency"
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
        metaId: {type: String, default: ""},
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
        btnTransparency: {type: Number, default: 0.8}
    },
    data: function() {
        return {
            BtnShape: this.btnShape,
            BtnPosition: this.btnPosition,
            BtnColor: this.btnColor, 
            BtnMarginLR: this.btnMarginLR,
            BtnMarginBottom: this.btnMarginBottom,
            BtnTransparency: this.btnTransparency, 
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
        
    },
    watch: {},
    methods: {
       consoleOut: function() {
           console.group("\/***page setting output");
           console.log("_btnShape = " + this.BtnShape);
           console.log("_btnPosition = " + this.BtnPosition);
           console.log("_btnColor = " + this.BtnColor);
           console.log("_btnMarginLR = " + this.BtnMarginLR);
           console.log("_btnMarginBottom = " + this.BtnMarginBottom);
           console.log("_btnTransparency = " + this.BtnTransparency);
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