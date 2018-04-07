<template>
    <div class="page-header">
        <div class="navbar-left fl">
            <span class="normal-btn" @click="testVuexDispatch">
                <i class="fa fa-angle-left btn-pre-icon" style="font-size: 20px;"></i>
                <span class="btn-text">返回</span>
            </span>
        </div>
        <!--中间按钮-->
        <div class="navbar-main"> 
            <span class="normal-btn up-down-btn" @click="pageSet">
                <i class="fa fa-wrench btn-pre-icon"></i>
                <span class="btn-text">页面设置</span>
            </span>
            <span v-for="(item, index) in metaTypeList" :key="index" 
                @mouseover="showSubMeta($event, item.id, index)"  
                class="normal-btn up-down-btn">
                <i class="btn-pre-icon" :class="[item.fontawesomeIcon]"></i>
                <span class="btn-text">{{ item.name }}</span>
            </span>
            <div class="panel-lists box-shadow" :style="curMetaPanelStyle"
                v-if="curMetaList.length" @mouseleave="hideSubMeta" > 
				<!-- <span class="panel-arrow"></span> -->
                <ul class="show-panel">
                    <li class="panel-meta" v-for="(item, index) in curMetaList" :key="index">
                        <i class="" :class="[item.fontawesomeIcon]"></i>
                        <span>{{ item.name }}</span>
                    </li> 
                </ul>
            </div>
        </div>
        <!--中间按钮 结束-->

        <!--右侧按钮-->
        <ul class="navbar-right fr">
            <span class="normal-btn">
                <i class="fa fa-cog fa-fw btn-pre-icon"></i>
                <span class="btn-text">模板设置</span>
            </span>
            <span class="normal-btn">
                <i class="fa fa-copy fa-fw btn-pre-icon"></i>
                <span class="btn-text">另存为模板</span>
            </span>
            <span class="normal-btn">
                <i class="fa fa-save fa-fw btn-pre-icon"></i>
                <span class="btn-text">保存页面</span>
            </span>
        </ul>
        <!--右侧按钮 结束-->
    </div>
</template>

<script>
export default {
  name: "pageHeader",
  data: function() {
    return {
      metaTypeMap: {}, //组件类型映射
      metaTypeList: GC.metaTypeList, //组件类型列表
      metaList: GC.metaList //组件列表
      , curMetaList: [] //当前hover展示组件
      , curMetaPanelStyle: {} //当前hover展示组件的位置样式
    };
  },
  created: function() {
    this._initMetaTypeMap();
  },
  mounted: function() {},
  beforeDestroy: function() {},
  methods: {
    _initMetaTypeMap: function() {
      this.metaTypeMap = {};
      var tep = null;
      for (var key in this.metaTypeList) {
        tep = this.metaTypeList[key];
        if (this.metaTypeMap[tep.id]) {
          continue;
        }
        this.metaTypeMap[tep.id] = tep.name;
      }
      window.GC.metaTypeMap = this.metaTypeMap;
    },
    //计算当前需要展示的列表
    showSubMeta: function(e, tyId, index) {
        // todo 优化 mousemove时这里一直在计算
        this.curMetaList = [];
        for(let i in this.metaList) {
            if(this.metaList[i].type === tyId) {
                this.curMetaList.push(this.metaList[i]);
            }
        }
        this.curMetaPanelStyle = {
            // position: "static",
            // top: e.pageY + 10 + "px",
            left: 40 + 80 * index + "px" // todo 优化 大致 居中
        };
        console.log(e.pageX, e.pageY)
    },
    hideSubMeta: function() {
        console.log("hideSubMeta");
        this.curMetaList = [];
    },
    testVuexDispatch: function() {
      
    },
    //打开、关闭页面配置
    pageSet: function() {
        // var pageInfo = this.$store.state.system.vuex_setting_page;
        // pageInfo.timeStamp = new Date().getTime();
        this.$store.dispatch("VUEX_SETTING_IS_PAGE", true);
        // this.$store.state.system.vuex_setting_from.isSettingPage = false;
        // this.$store.state.system.vuex_setting_from.isSettingPage = !this.$store.state.system.vuex_setting_from.isSettingPage;
    }
  }
};
</script>

<style scoped lang="less">
@import "../less/variables.less";
.page-header {
  position: relative;
  width: 100%;
  height: 50px;
  background-color: @pageHeaderColor;
  z-index: 8;
  cursor: pointer;
  .normal-btn {
    padding: 14px 15px;
    color: #fff;
    padding: 0 15px;
    color: #fff;
    line-height: 50px;
    height: 50px;
    display: inline-block;
    background: @pageHeaderColor;
    &:hover {
      background: @pageHeaderHoverColor;
    }
    .btn-pre-icon {
      display: inline-block;
      line-height: 50px;
      margin-right: 4px;
      float: left;
    }
    .btn-text {
      display: inline-block;
      line-height: 50px;
      float: left;
    }
    &.up-down-btn .btn-text {
      width: 100%;
      height: 25px;
      line-height: 25px;
    }
    &.up-down-btn .btn-pre-icon {
      width: 100%;
      font-size: 16px;
      height: 22px;
      line-height: 22px;
      margin-top: 3px;
    }
  }
  .navbar-main {
    margin: 0 auto;
    width: 500px;
    text-align: center;
  }

  .navbar-right {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 30px;
  }
  /* 下拉菜单  */
  .panel-lists { position: relative; width: 362px; top: 3px; /* margin: 0 auto; */ }
  .panel-arrow {
    position: absolute; display: block;
    width: 0; height: 0; left: 50%; top: -18px !important;
    border: 9px solid transparent;
    border-bottom-color: #fff !important;
    margin-left: -6px;
  }
  .show-panel { 
      width: 100%;
      cursor: pointer; text-align: left;
      border-top: 1px solid #ddd;
      border-left: 1px solid #ddd;
      background: white;
  }
  .panel-meta { 
      display: inline-block; width: 120px; height: 32px;
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
      text-align: center;
      i, span { line-height: 32px; color: #444; font-size: 12px; }
      span:hover { text-decoration: underline; color: #89bceb; }
      &:nth-child(3n) { border-right: none; } 
  }
}
</style>