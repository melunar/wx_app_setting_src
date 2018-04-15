<template>
    <div class="meta-carousel">
        <imageDisplay :type="1" 
            :imageList="metaInfo.imageList"
            :btnPosition="metaInfo.btnPosition"
            :btnShape="metaInfo.btnShape" 
            :btnColor="metaInfo.btnColor"
            :btnMarginLR="metaInfo.btnMarginLR"
            :btnMarginBottom="metaInfo.btnMarginBottom"
            :btnTransparency="metaInfo.btnTransparency" />    
    </div>
</template>

<script>
import imageDisplay from "../meta_base/image_display.vue";
import metaStyleUpdate from "../mixins/meta_style_update.js";
export default {
    name: "metaCarousel",
    mixins:[metaStyleUpdate],
    props: {
        /* imageList: {type: Array, default: function() { return [
            { src: "", linkPageId: "#" },
            { src: "", linkPageId: "#" }
        ] }},
        btnShape: {type: Number, default: 1},
        btnPosition: {type: Number, default: 3},
        btnColor: {type: String, default: "#fff"},
        btnMarginLR: {type: Number, default: 5},
        btnMarginBottom: {type: Number, default: 5},
        btnTransparency: {type: Number, default: 0.8}, */
        metaId: { type: Number, default: 0 },
        metaConfig: { type: Object, default: function() {
            return {
                imageList:  [
                    { src: "", linkPageId: "#" },
                    { src: "", linkPageId: "#" }
                ],
                btnShape: 1,
                btnPosition: 3,
                btnColor: "#fff",
                btnMarginLR: 5,
                btnMarginBottom: 5,
                btnTransparency: 0.8,
            }
        } }
    },
    data: function() {
        return {
            metaInfo: this.metaConfig
        };
    },
    components: {
        imageDisplay
        /*requireDemo: function (resolve) {
            require([""], resolve);
        }*/
    },
    created: function() {},
    mounted: function() {},
    beforeDestroy: function() {},
    computed: {
        /* meta_setting: function() {
            return this.$store.state.system.vuex_setting_meta;
        } */
    },
    watch: {
        /* "meta_setting": function(config) { 
            if(this.metaId && config.metaId === this.metaId) {
                this.metaInfo = config; 
            }
        } */
    },
    methods: {

    }
}
</script>

<style scoped lang="less">
    //@import "../less/variables.less";
    //@import "../less/sprite.less";
    .meta-carousel {
        position: relative;
    }
</style>