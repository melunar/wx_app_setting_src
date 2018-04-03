<template>
  <div class="setting-page-container">
      <navHeader />
  </div>
</template>

<script>
import navHeader from "@/components/header.vue";
export default {
  name: "mainPage",
  data: function() {
    return {
      
    };
  },
  components: {
    navHeader
  }
}
</script>

<style scoped lang="less">
@import "../less/variables.less";  

.setting-page-container {
  min-width: 100%;
  height: 100%;
  background-color: @pageBgColor;
}
</style>
