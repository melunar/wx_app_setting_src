<template>
    <div class="meta-carousel">
        <imageDisplay :type="1" 
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
        name: {type: Array, default: function() { return [] }}
    },
    data: function() {
        return {
            imageList: [
                { src: "", linkUrl: "" },
                { src: "", linkUrl: "" }
            ],
            btnShape: 1,
            btnPosition: 2,
            btnColor: "#fff",
            btnMarginLR: 5,
            btnMarginBottom: 5,
            btnTransparency: 0.8
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