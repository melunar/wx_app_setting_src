<template>
    <div class="componnets-detail-settings">
        组件配置
    </div>
</template>

<script>
export default {
  name: "componnetsOptions",
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
.componnets-detail-settings {
  float: right;
  height: 100%;
  width: 440px;
  background-color: @pageListBgColor;
}
</style>