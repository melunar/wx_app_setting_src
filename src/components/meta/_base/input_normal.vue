<template>
    <div class="setting-meta-input">
        <baseLine :labelText="labelText">
            <template slot="settingBaseLineSlot">
                <el-input v-model="_value" size="mini" />
                <template v-if="isShowTips">
                    <p class="input-tips" :style="{'color': tipsColor}">{{ tipsContent }}</p>
                </template>
            </template>
        </baseLine>
    </div>
</template>

<script>
import baseLine from "./base_line.vue";
export default {
    name: "settingMetaInput",
    mixins:[],
    props: { 
        // 标签文字
        labelText: {type: String, default: "未知属性"},
        // 是否显示提示文本
        isShowTips: {type: Boolean, default: false},
        // 提示文本内容
        tipsContent: {type: String, default: "注意：..."},
        // 提示文本文字颜色
        tipsColor: {type: String, default: "#bcc2c8"},
        // model
        value: {type: String, default: ""}
    },
    data: function() {
        return {
            //myText: this.value
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
    watch: {
        "value": function(val) {
            //this.$emit("input", val)
        }
    },
    methods: {

    }
}
</script>

<style scoped lang="less">
    //@import "../less/variables.less";
    //@import "../less/sprite.less";
    .setting-meta-input {
        position: relative;  width: 100%;

        .input-tips {
            
        }
    }
</style>