<template>
<div class="meta-rich-text">
    <p v-html="metaInfo.richTextContent" class="text-content" :style="{
        'padding': metaInfo.paddingValue + 'px',
        'background-color': metaInfo.bgColor
        }"></p>
</div>
</template>

<script>
import metaStyleUpdate from "../mixins/meta_style_update.js";
export default {
    name: "metaRichText",
    mixins: [metaStyleUpdate],
    props: {
        metaId: { type: Number, default: 0 },
        metaConfig: {
            type: Object,
            default: function() {
                return {
                    bgColor: "#fff", //背景色
                    paddingValue: 3, //内边距
                    richTextContent: "暂无内容" //内容
                };
            }
        }
    },
    data: function() {
        return {
            metaInfo: this.metaConfig
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
    methods: {}
};
</script>

<style scoped lang="less">
//@import "../less/variables.less";
//@import "../less/sprite.less";
.meta-rich-text {
    position: relative;
    .text-content {
    }
}
</style>