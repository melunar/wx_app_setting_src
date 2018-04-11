<template>
    <div class="componnets-detail-settings">
        <div class="page-title">{{ isPage ? '页面配置' :  setting_meta.name + "配置"}}</div>
        <div class="page-content">
					<div v-if="isPage" class="page-setting-content">
            <!-- {{ setting_page.title }} <br> -->
            <!-- {{ setting_page.name }} -->
          </div>
          <div v-if="!isPage" class="meta-setting-content">
            <!-- {{ setting_meta.name }} -->
          </div>
				</div>
        <pageSetting />
        <metaCarouselSetting />
        <metaBottomMenuSetting />
        <!-- <richTextSetting/> -->
    </div>
</template>

<script>
export default {
  name: "componnetsOptions",
  mixins: [],
  data: function() {
    return {
      // isPage: true
    };
  },
  components: {
    pageSetting: function (resolve) {
        require(["./meta/page/setting.vue"], resolve);
    },
    metaCarouselSetting: function (resolve) {
        require(["./meta/carousel/setting.vue"], resolve);
    },
    metaBottomMenuSetting: function (resolve) {
        require(["./meta/bottom_menu/setting.vue"], resolve);
    },
    richTextSetting: function (resolve) {
        require(["./meta/rich_text/setting.vue"], resolve);
    }
  },
  created: function() {},
  mounted: function() {},
  beforeDestroy: function() {},
  computed: { 
    isPage: function() {
      return this.$store.state.system.vuex_setting_is_page;  
    },
    setting_page: function() {
      this.$store.dispatch("VUEX_SETTING_IS_PAGE", true);
      // this.isPage = true;
      /*if(this.$store.state.system.vuex_setting_is_page) { //点击导航的页面编辑
        return this.$store.state.system.vuex_setting_page;  
      } */
      return this.$store.state.system.vuex_setting_page;
    },
    setting_meta: function() { 
      // this.isPage = false;
      this.$store.dispatch("VUEX_SETTING_IS_PAGE", false);
      // this.$store.state.system.vuex_setting_page = false;
      return this.$store.state.system.vuex_setting_meta;
    }
  },
  watch: {
    "setting_page": function(val) {
      if(!val) {
        // todo
      }
    },
    "setting_meta": function(val) {
      if(!val) {
        // todo
      }
    }
  },
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