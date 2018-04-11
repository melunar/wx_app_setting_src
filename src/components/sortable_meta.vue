<template>
    <div class="sort-meta-unit">
        <div v-if="metaId">
            <component :is="componentId"></component>
        </div>
        <div v-if="!metaId" style="height: 100px; background: chocolate;">
            {{"test " + metaName }}
        </div>
        <div class="hover-style" @click="setEditStatus">
            <div class="tip-btns">
                <span class="tip-btn" @click="setEditStatus">编辑</span>
                <span class="tip-btn">删除</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "sortableMetaUnit",
    mixins:[],
    props: {
        // 组件ID 时间戳
        metaId: {type: Number, default: 0 }, 
        // 组件名称
        metaName: {type: String, default: "" },
        // 组件名称 需要跟组件名称完全对应 用于is动态加载组件
        metaType: {type: String, default: "" },
        // 组件配置
        metaConfig: {type: Object, default: function() {return null} }
    },
    data: function() {
        return {
            // componentId: ""
        };
    },
    components: {
        carousel: function (resolve) {
            require(["@/components/meta/carousel/carousel.vue"], resolve);
        },
        bottomMenu: function (resolve) {
            require(["@/components/meta/bottom_menu/bottom_menu.vue"], resolve);
        },
        carouselSetting: function (resolve) {
            require(["@/components/meta/carousel/setting.vue"], resolve);
        }
    },
    created: function() {},
    mounted: function() {},
    beforeDestroy: function() {},
    computed: {
        componentId: function() {
            if(this.metaId) return this.metaType;
            return "";
        }
    },
    watch: {},
    methods: {
        setEditStatus: function() {
            var metaConfig = this.metaConfig;
            metaConfig.metaYype = this.metaType; //记录组件类型和名称 用于一一对应
            metaConfig.metaName = this.metaName;
            metaConfig.metaId = this.metaId;
            debugger
            this.$store.dispatch("VUEX_SETTING_META", metaConfig/* {
                name: this.metaName,  // 组件名称
                type: "", // 组件名称（代码）
                id: "" // 组件实例id
            } */);
        }
    }
}
</script>

<style scoped lang="less">
    //@import "../less/variables.less";
    //@import "../less/sprite.less";
    .sort-meta-unit {
        width: 100%; 
        min-height: 5px; /* test height */
        position: relative;
        margin-bottom: 3px; 
        overflow: hidden;
        &:hover { .hover-style { display: block; } }
        .hover-style { 
            display: none;
            position: absolute; top: 0;
            width: 100%;
            height: 100%;
            border: 2px dashed #123123;
            text-align: right;
        }
        .tip-btns { display: inline-block; position: absolute; right: 3px; bottom: 1px; }
        .tip-btn {
            width: 32px;
            height: 16px;
            line-height: 16px;
            display: inline-block;
            text-align: center;
            font-size: 10px;
            color: #fff;
            background: rgba(0,0,0,.4);
            margin-left: 2px;
            cursor: pointer;
            z-index: 11;
        }
    }
</style>