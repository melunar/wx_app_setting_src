<template>
    <div class="setting-page-container">
        <navHeader />
        <div class="page-container clearfix">
            <pageList />
            <cpSettings />
            <appModel />
        </div> 
    </div>
</template>
   
<script>
import navHeader from "@/components/header.vue";
import pageList from "@/components/page_list.vue";
import cpSettings from "@/components/cp_settings.vue";
import appModel from "@/components/app_model.vue";
export default {
  name: "mainPage",
  data: function() {
    return {};
  },
  components: {
    navHeader,
    pageList,
    cpSettings,
    appModel
  }
};
</script>

<style scoped lang="less">
@import "../less/variables.less";

.setting-page-container {
  position: relative;
  min-width: 100%;
  height: 100%;
  background-color: @pageBgColor;

  .page-container {
    position: absolute;
    height: calc(~"100% - 55px");
    top: 50px; width: 100%;
  }
}
</style>
