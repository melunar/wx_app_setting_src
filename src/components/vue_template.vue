<template>
    <div class="MAIN">
        div#.main*2   
    </div>
</template>

<script>
// import xxx from "../xxx.vue"
// var xx = require("../xx.js")
export default {
    name: "NAME",
    mixins: [],
    props: {
        name: {
            type: Array,
            default: function() {
                return [];
            }
        }
    },
    data: function() {
        return {};
    },
    components: {
        /*requireDemo: function (resolve) {
            require([""], resolve);
        }*/
    },
    created: function() {
        var a;
    },
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
.MAIN {}
</style>