<template>
    <div class="sort-meta-unit">
        <div v-if="metaId">
            <component :is="componentId" :metaId="metaId" :metaConfig="metaConfig"></component>
        </div>
        <div v-if="!metaId" style="height: 100px; background: chocolate;">
            {{"test " + metaName }}
        </div>
        <div class="hover-style"
            :style="{'display': isCurrentSelect ? 'block' : 'none'}"
            @click="setEditStatus">
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
        //组件类型： '001' 
        metaType: {type: String, default: "000000" }, 
        // 组件名称  需要跟组件名称完全对应 用于is动态加载组件
        metaName: {type: String, default: "" },
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
        richText: function (resolve) {
            require(["@/components/meta/rich_text/rich_text.vue"], resolve);
        }
        /* carouselSetting: function (resolve) {
            require(["@/components/meta/carousel/setting.vue"], resolve);
        }, */
    },
    created: function() {},
    mounted: function() {},
    beforeDestroy: function() {},
    computed: {
        // 组件指针
        componentId: function() {
            if(this.metaId) {
                var name = GC.metaListMap[this.metaType] ? GC.metaListMap[this.metaType].meta : "";
                console.log("渲染组件：" + name);
                return name;
            } 
            return "";
        },
        //是否高亮当前组件
        isCurrentSelect: function() {
            if(this.$store.state.system.vuex_setting_is_page) {
                return false;
            }
            return this.$store.state.system.vuex_setting_meta ? this.$store.state.system.vuex_setting_meta.metaId === this.metaId : false;
        } 
    },
    watch: { 
    },
    methods: {
        setEditStatus: function() {
            var metaConfig = this.metaConfig; 
            // this.$set(this.metaConfig, "metaType", this.metaType);
            // this.$set(this.metaConfig, "metaId", this.metaId);
            metaConfig.metaType = this.metaType;
            metaConfig.metaId = this.metaId;
            debugger
            this.$store.dispatch("VUEX_SETTING_META", metaConfig);
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
        &:hover { .hover-style { display: block !important; } }
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