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
            <span class="normal-btn up-down-btn">
                <i class="fa fa-wrench btn-pre-icon"></i>
                <span class="btn-text">页面设置</span>
            </span>
            <span class="normal-btn up-down-btn">
                <i class="fa fa-cube btn-pre-icon"></i>
                <span class="btn-text">基础</span>
            </span>
            <span class="normal-btn up-down-btn">
                <i class="fa fa-cubes btn-pre-icon"></i>
                <span class="btn-text">内容</span>
            </span> 
            <span class="normal-btn up-down-btn">
                <i class="fa fa-image btn-pre-icon"></i>
                <span class="btn-text">图片</span>
            </span> 
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
      
    };
  },
  methods: {
      testVuexDispatch: function() {
          this.$store.dispatch("VUEX_DEMO", !this.$store.state.demo.vuex_demo)
      }
  }
}
</script>

<style scoped lang="less">
    @import "../less/variables.less";
    .page-header {
        position: relative;
        width: 100%;
        height: 50px;
        background-color: @pageHeaderColor;
        cursor: pointer; overflow: hidden;
        .normal-btn {
            padding: 14px 15px;
            color: #fff;
            padding: 0 15px;
            color: #fff;
            line-height: 50px;
            height: 50px;
            display: inline-block;
            background: @pageHeaderColor;
            &:hover { background: @pageHeaderHoverColor; }
            .btn-pre-icon {  display: inline-block; line-height: 50px; margin-right: 4px; float: left; }
            .btn-text {  display: inline-block; line-height: 50px; float: left; }
            &.up-down-btn .btn-text { width: 100%;  height: 25px; line-height: 25px; }
            &.up-down-btn .btn-pre-icon { width: 100%; font-size: 16px; height: 22px; line-height: 22px; margin-top: 3px;}
        }
        .navbar-main {
            margin: 0 auto;
            width: 500px;
            text-align: center;
        }

        .navbar-right {
            position: absolute; top: 0; right: 0;
            margin-right: 30px;
        }
    }
</style>