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
            <component :is="metaSettingComponentId" 
              :metaId="setting_meta.metaId" :metaInfo="setting_meta"></component>
              <!-- <carouselSetting /> -->
              <!-- <bottomMenuSetting /> -->
              <!-- <richTextSetting/> -->
          </div> 
          <richTextSetting/> 
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
      , metaId: 0  //组件id
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
      return this.$store.state.system.vuex_setting_is_page;  
    },
    setting_page: function() {
      this.$store.dispatch("VUEX_SETTING_IS_PAGE", true);
      return this.$store.state.system.vuex_setting_page;
    },
    setting_meta: function() {  
      debugger
      if(this.$store.state.system.vuex_setting_meta) { 
        this.$store.dispatch("VUEX_SETTING_IS_PAGE", false); 
        
        
        var metaId = this.$store.state.system.vuex_setting_meta.metaId;
        if(this.metaId !== metaId) {
          this.refreshMeta(function() { 
            
            this.metaId = this.$store.state.system.vuex_setting_meta.metaId;
            this.metaSettingComponentId = this.setMetaName(this.$store.state.system.vuex_setting_meta.metaType, this.$store.state.system.vuex_setting_meta.metaId); 
            
          }.bind(this));  
        } else {
          this.metaId = this.$store.state.system.vuex_setting_meta.metaId;
            this.metaSettingComponentId = this.setMetaName(this.$store.state.system.vuex_setting_meta.metaType, this.$store.state.system.vuex_setting_meta.metaId); 
        }
        return this.$store.state.system.vuex_setting_meta;
      } else {
        this.metaSettingComponentId = this.setMetaName("0000000");
        return {};
      }
    }
  },
  watch: {
    //务必用监听
    "setting_page": function(val) {
      if(!val) { 
      }
    },
    "setting_meta": function(val) {
      if(!val) { 
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
    setMetaName: function(id, metaId) {
      /* if(this.metaId !== metaId) {
        this.refreshMeta(function() { 
          
        }.bind(this));  
      } */
      if(!GC.metaListMap[id]) {
        //message.error("组件设置初始化失败！请联系开发者");
        return "";
      }
      this.metaNameText = GC.metaListMap[id].name;// + "(" + this.setting_meta.metaId +")";
      console.log("读取到的配置组件 = " + GC.metaListMap[id].meta)
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