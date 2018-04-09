<template>
    <div class="setting-meta-slider">
        <baseLine :labelText="labelText">
            <template slot="settingBaseLineSlot">
                <el-slider style="width: 100%; height: 35px;"
                    v-model="myVlaue" :max="max" :min="min" />
                <span class="slider-tip"> {{ myVlaue }}({{ tipsText }}) </span>
            </template>
        </baseLine>
    </div>
</template>

<script>
import baseLine from "./base_line.vue";
export default {
    name: "settingMetaSlider",
    mixins:[],
    props: { 
        // 标签文字
        labelText: {type: String, default: "未知属性"},
        // 默认值
        modelVlaue: {type: Number, default: 0},
        // 单位名称或提示
        tipsText: {type: String, default: "单位"},
        // 最大值
        max: {type: Number, default: 100},
        // 单位名称或提示
        min: {type: Number, default: 0},
        
    },
    data: function() {
        return {
            myVlaue: this.modelVlaue
        };
    },
    components: {
        baseLine
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

    }
}
</script>

<style scoped lang="less">
    //@import "../less/variables.less";
    //@import "../less/sprite.less";
    .setting-meta-input {
        position: relative;  width: 100%;

         
    }
</style>