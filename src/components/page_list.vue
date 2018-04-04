<template>
    <div class="page-manager">
        page list
    </div>
</template>

<script>
export default {
  name: "pageList",
  mixins: [],
  data: function() {
    return {};
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
@import "../less/variables.less";
//@import "../less/sprite.less";
.page-manager {
  display: inline-block;
  height: 100%;
  width: 325px;
  background-color: @pageListBgColor;
}
</style>