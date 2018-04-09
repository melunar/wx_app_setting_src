<template>
    <div class="setting-base-line">
        <el-row :gutter="5">
            <el-col :span="5"><div class="grid-label">{{ labelText }}</div></el-col>
            <el-col :span="19">
                <div class="grid-content">
                    <slot name="settingBaseLineSlot"></slot>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "settingBaseLine",
    mixins:[],
    props: {
        labelText: {type: String, default: "未知属性"}
    },
    data: function() {
        return {

        };
    },
    components: {
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
    .setting-base-line {
        position: relative; width: 100%; margin: 8px 0;
        .grid-label {
            text-align: right;
            line-height: 30px;
        }
        .grid-content {
            width: 96%;
            margin-left: 2%;
        }
    }
</style>