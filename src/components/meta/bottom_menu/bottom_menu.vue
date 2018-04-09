<template>
    <div class="bottom-menu-meta">
        
    </div>
</template>

<script>
export default {
    name: "bottomMenu",
    mixins:[],
    props: {
        name: {type: Array, default: function() { return [] }}
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
    //@import "../../less/variables.less";
    //@import "../../less/sprite.less";
    .bottom-menu-meta {
        
    }
</style>