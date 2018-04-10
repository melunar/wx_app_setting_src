<template>
    <div class="meta-carousel">
        <imageDisplay :type="1" 
            :imageList="imageList"
            :btnPosition="btnPosition"
            :btnShape="btnShape" 
            :btnColor="btnColor"
            :btnMarginLR="btnMarginLR"
            :btnMarginBottom="btnMarginBottom"
            :btnTransparency="btnTransparency" />    
    </div>
</template>

<script>
import imageDisplay from "../meta_base/image_display.vue";
export default {
    name: "metaCarousel",
    mixins:[],
    props: {
        imageList: {type: Array, default: function() { return [
            { src: "", linkUrl: "#" },
            { src: "", linkUrl: "#" }
        ] }},
        btnShape: {type: Number, default: 1},
        btnPosition: {type: Number, default: 3},
        btnColor: {type: String, default: "#fff"},
        btnMarginLR: {type: Number, default: 5},
        btnMarginBottom: {type: Number, default: 5},
        btnTransparency: {type: Number, default: 0.8},
    },
    data: function() {
        return {
            // ImageList: this.imageList,
            // BtnShape: this.btnShape,
            // BtnPosition: this.btnPosition,
            // BtnColor: this.btnColor,
            // BtnMarginLR: this.btnMarginLR,
            // BtnMarginBottom: this.btnMarginBottom,
            // BtnTransparency: this.btnTransparency
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
    methods: {

    }
}
</script>

<style scoped lang="less">
    //@import "../less/variables.less";
    //@import "../less/sprite.less";
    .meta-carousel {
        
    }
</style>