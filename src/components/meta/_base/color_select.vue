<template>
    <div class="setting-meta-color-select">
        <baseLine :labelText="labelText">
            <template slot="settingBaseLineSlot">
                <el-color-picker class="fl" v-model="_value" size="mini" @change="changeColor"/>
                <el-button size="mini" @click="resetColor">重置</el-button>
            </template>
        </baseLine>
    </div>
</template>

<script>
import baseLine from "./base_line.vue";
export default {
    name: "settingMetaColorSelect",
    mixins:[],
    props: { 
        // 标签文字
        labelText: {type: String, default: "未知颜色"},
        // 点击重置的颜色值
        defaultColor: {type: String, default: "#F3F3F3"},
        // 当前的颜色值
        value: {type: String, default: "#F3F3F3"} 
         
    },
    data: function() {
        return {
            // myCurColor: this.value
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
    computed: {
        _value: {
            get: function () {
                return this.value;
            },
            set: function (val) {
                this.$emit("input", val);
            }
        }
    },
    watch: {},
    methods: {
        // 重置颜色
        resetColor: function() {
            this._value = this.defaultColor;
        },
        // 选择颜色
        changeColor: function(color) {
            message.info("change color: " + color);
            this.$emit("change", color);
        }
    }
}
</script>

<style scoped lang="less">
    //@import "../less/variables.less";
    //@import "../less/sprite.less";
    .setting-meta-color-select {
        position: relative;  width: 100%;

        
    }
</style>