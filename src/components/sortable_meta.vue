<template>
    <div class="sort-meta-unit">
            {{ metaName }}
        <div class="hover-style">
            <div class="tip-btns">
                <span class="tip-btn">编辑</span>
                <span class="tip-btn">删除</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "sortableMetaUnit",
    mixins:[],
    props: {
        metaName: {type: String, default: "" }
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
    .sort-meta-unit {
        width: 100%; 
        height: 100px; /* test height */
        position: relative;
        margin-bottom: 3px;
        background: chocolate;
        &:hover { .hover-style { display: block; } }
        .hover-style { 
            display: none;
            position: absolute; top: 0;
            width: 100%;
            height: 100%;
            border: 2px dashed #123123;
            text-align: right;
        }
        .tip-btns { display: inline-block; position: absolute; right: 3px; bottom: 1px; }
        .tip-btn {
            width: 32px;
            height: 16px;
            line-height: 16px;
            display: inline-block;
            text-align: center;
            font-size: 10px;
            color: #fff;
            background: rgba(0,0,0,.4);
            margin-left: 2px;
            cursor: pointer;
            z-index: 11;
        }
    }
</style>