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
    mixins: [metaStyleUpdate],
    props: {
        metaId: { type: Number, default: 0 },
        metaConfig: {
            type: Object,
            default: function() {
                return {
                    imageList: [
                        { imgSrc: "", linkPageId: "#" },
                        { imgSrc: "", linkPageId: "#" }
                    ],
                    btnShape: 1,
                    btnPosition: 3,
                    btnColor: "#fff",
                    btnMarginLR: 5,
                    btnMarginBottom: 5,
                    btnTransparency: 0.8
                };
            }
        }
    },
    data: function() {
        return {
            metaType: "002",
            metaText: "轮播图",
            metaName: "carousel",
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
    computed: {},
    watch: {},
    methods: {}
};
</script>

<style scoped lang="less">
//@import "../less/variables.less";
//@import "../less/sprite.less";
.meta-carousel {
    position: relative;
}
</style>