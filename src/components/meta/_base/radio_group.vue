<template>
<div class="setting-meta-radio-group">
    <baseLine :labelText="labelText">
        <template slot="settingBaseLineSlot">
            <el-radio-group style="margin: 7px 0 0;" v-model="_value">
                <el-radio v-for="(item, index) in radioArray" :key="index" 
                    :label="item.value">{{ item.text }}</el-radio>
            </el-radio-group>
        </template>
    </baseLine>
</div>
</template>

<script>
import baseLine from "./base_line.vue";
export default {
    name: "settingMetaRadioGroup",
    mixins: [],
    props: {
        // 标签文字
        labelText: { type: String, default: "未知属性" },
        // 选项数组
        radioArray: {
            type: Array,
            default: function() {
                return [];
            }
        },

        // model
        value: { type: Number, default: 0 }
    },
    data: function() {
        return {};
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
            get: function() {
                return this.value;
            },
            set: function(val) {
                this.$emit("input", val);
            }
        }
    },
    watch: {},
    methods: {}
};
</script>

<style scoped lang="less">
//@import "../less/variables.less";
//@import "../less/sprite.less";
.setting-meta-radio-group {
    position: relative;
    width: 100%;
}
</style>