<template>
<div class="setting-page-container">
    <navHeader />
    <div class="page-container clearfix">
        <pageList />
        <cpSettings />
        <page 
            :metas="pageMetas"
            :pageName="pageConfig.pageName" 
            :pageTitle="pageConfig.pageTitle" 
            :pageBgColor="pageConfig.pageBgColor" 
            :pageHeaderBgColor="pageConfig.pageHeaderBgColor" 
            :pageHeaderColor="pageConfig.pageHeaderColor"
            :marginValue="pageConfig.marginValue" />
    </div> 
</div>
</template>
   
<script>
import navHeader from "@/components/header.vue";
import pageList from "@/components/page_list.vue";
import cpSettings from "@/components/cp_settings.vue";
import page from "@/components/page.vue";
export default {
    name: "mainPage",
    data: function() {
        return {};
    },
    components: {
        navHeader,
        pageList,
        cpSettings,
        page
    },
    computed: {
        pageConfig: function() {
            if (this.$store.state.system.vuex_setting_page) {
                return this.$store.state.system.vuex_setting_page;
            } else {
                return {};
            }
        },
        pageMetas: function() {
            if (this.$store.state.system.vuex_page_metas) {
                return this.$store.state.system.vuex_page_metas;
            } else {
                return [];
            }
        }
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
        top: 50px;
        width: 100%;
    }
}
</style>
