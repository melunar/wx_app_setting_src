<template>
    <div class="componnets-detail-settings">
        <div class="page-title">{{ isPage ? '页面配置' :  metaNameText + "配置"}}</div>
        <div class="page-content">
					<div v-if="isPage" class="page-setting-content">
            <pageSetting 
              :pageName="setting_page && setting_page.pageName" 
              :pageTitle="setting_page && setting_page.pageTitle" 
              :pageBgColor="setting_page && setting_page.pageBgColor" 
              :pageHeaderBgColor="setting_page && setting_page.pageHeaderBgColor" 
              :pageHeaderColor="setting_page && setting_page.pageHeaderColor" />
          </div>
          <div v-if="!isPage" class="meta-setting-content">
            <component v-if="!useDefaultConfig" :is="metaSettingComponentId" 
              :metaId="setting_meta ? setting_meta.metaId : 0" :metaInfo="setting_meta" />
            <component v-if="useDefaultConfig" :is="metaSettingComponentId" 
              :metaId="setting_meta ? setting_meta.metaId : 0" />
          </div>
        </div> 
    </div>
</template>

<script>
export default {
  name: "componnetsOptions",
  mixins: [],
  data: function() {
    return {
      // isPage: true
      metaSettingComponentId: "" //组件配置指向
      , metaNameText: ""  //组件名
      , metaId: 0  //当前组件id
      , useDefaultConfig: false //是否使用组件默认配置（针对新组件）
    };
  },
  components: {
    pageSetting: function (resolve) {
        require(["./meta/page/setting.vue"], resolve);
    },
    carouselSetting: function (resolve) {
        require(["./meta/carousel/setting.vue"], resolve);
    },
    bottomMenuSetting: function (resolve) {
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
    //是否切换到页面配置
    isPage: function() {
      if(this.$store.state.system.vuex_setting_is_page) {
        console.log("切换到页面配置");
      }
      return this.$store.state.system.vuex_setting_is_page;  
    },
    setting_page: function() {
      this.$store.dispatch("VUEX_SETTING_IS_PAGE", true);
      return this.$store.state.system.vuex_setting_page;
    },
    setting_meta: function() {  
      return this.$store.state.system.vuex_setting_meta;
    }
  },
  watch: {
    //务必用监听
    /* "setting_page": function(val) {
    
    }, */
    "setting_meta": function(val) {
        console.log("右侧组件设置更新");
        this.useDefaultConfig = !!val.isDefaultConfig;
      debugger
      //  todo 点击组件编辑->触发一次组件编辑 这里响应了两次？？？？？？？
      if(this.$store.state.system.vuex_setting_meta) { 
        this.$store.dispatch("VUEX_SETTING_IS_PAGE", false); // 组件配置时 取消页面配置状态
        var metaId = this.$store.state.system.vuex_setting_meta.metaId;
        if(this.metaId !== metaId) { //是当前组件的配置改变
          this.refreshMeta(function() {  
            this.metaId = this.$store.state.system.vuex_setting_meta.metaId;
            this.metaSettingComponentId = this.setMetaName(this.$store.state.system.vuex_setting_meta.metaType); 
            
          }.bind(this));  
        } else {
          this.metaId = this.$store.state.system.vuex_setting_meta.metaId;
            this.metaSettingComponentId = this.setMetaName(this.$store.state.system.vuex_setting_meta.metaType); 
        }
        return this.$store.state.system.vuex_setting_meta;
      } else {
        this.metaSettingComponentId = this.setMetaName("0000000");
        return {};
      }
    }
  },
  methods: {
    //解决同类型组件之间切换的问题
    refreshMeta: function(callback) {
        this.metaSettingComponentId = "";
        this.$nextTick(function() {
          callback && callback();
        }.bind(this));
    },
    setMetaName: function(id) {
      if(!GC.metaListMap[id]) {   return ""; }
      this.metaNameText = GC.metaListMap[id].name;
      console.log("配置组件 = " + this.metaNameText)
      return GC.metaListMap[id].meta + "Setting";
    }
  },
  filters: {
     
  }
};
</script>

<style scoped lang="less">
@import "../less/variables.less";
//@import "../less/sprite.less";
.componnets-detail-settings {
  float: right;
  height: 100%;
  width: 440px;
  overflow: hidden;
  background-color: @pageListBgColor;
    .page-title {
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        text-indent: 1em;
        background-color: #eee;
    }
}
</style>