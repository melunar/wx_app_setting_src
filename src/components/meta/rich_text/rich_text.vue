<template>
    <div class="meta-rich-text">
        <p v-html="metaInfo.richTextContent" class="text-content" :style="{
            'padding': metaInfo.paddingValue + 'px',
            'background-color': metaInfo.bgColor
            }"></p>
    </div>
</template>

<script>
export default {
    name: "metaRichText",
    mixins:[],
    props: {
        metaId: { type: Number, default: 0 },
        metaConfig: { type: Object, default: function() {
            return {
                bgColor: "#fff", //背景色
                paddingValue: 3, //内边距
                richTextContent: "暂无内容", //内容
            }
        } }
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
    computed: {
        meta_setting: function() {
            return this.$store.state.system.vuex_setting_meta;
        }
    },
    watch: {
        "meta_setting": function(config) { 
            if(this.metaId && config.metaId === this.metaId) {
                this.metaInfo = config; 
            }
        }
    },
    methods: {

    }
}
</script>

<style scoped lang="less">
    //@import "../less/variables.less";
    //@import "../less/sprite.less";
    .meta-rich-text {
        position: relative;
        .text-content {}
    }
</style>