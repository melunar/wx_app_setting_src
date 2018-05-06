<template>
<div class="sort-meta-unit">
    <div v-if="metaId">
        <!-- 带有配置的组件 -->
        <component ref="meta" v-if="!!metaConfig" :is="componentId" :metaId="metaId" :metaConfig="metaConfig"></component>
        <!-- 首次添加没有配置的组件 -->
        <component ref="meta" v-if="!metaConfig" :is="componentId" :metaId="metaId" />
    </div>
    <div v-if="!metaId" style="height: 100px; background: chocolate;">
        {{"test " + metaName }}
    </div>
    <div class="hover-style"
        @click="setEditStatus"
        :style="{'display': isCurrentSelect ? 'block' : 'none'}">
        <div class="tip-btns">
            <span class="tip-btn" @click="setEditStatus">编辑</span>
            <span class="tip-btn" @click.stop="deleteMetaFromPage">删除</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "sortableMetaUnit",
    mixins: [],
    props: {
        // 组件ID 时间戳
        metaId: { type: Number, default: 0 },
        //组件类型： '001'
        metaType: { type: String, default: "000000" },
        // 组件名称  需要跟组件名称完全对应 用于is动态加载组件
        metaName: { type: String, default: "" },
        // 组件配置
        metaConfig: {
            type: Object,
            default: function() {
                return null;
            }
        }
    },
    data: function() {
        return {};
    },
    components: {
        carousel: function(resolve) {
            require(["@/components/meta/carousel/carousel.vue"], resolve);
        },
        bottomMenu: function(resolve) {
            require(["@/components/meta/bottom_menu/bottom_menu.vue"], resolve);
        },
        richText: function(resolve) {
            require(["@/components/meta/rich_text/rich_text.vue"], resolve);
        }
    },
    created: function() {},
    mounted: function() {},
    beforeDestroy: function() {},
    computed: {
        // 组件指针
        componentId: function() {
            if (this.metaId) {
                var name = GC.metaListMap[this.metaType]
                    ? GC.metaListMap[this.metaType].meta
                    : "";
                var text = GC.metaListMap[this.metaType]
                    ? GC.metaListMap[this.metaType].name
                    : "--";
                console.log("渲染组件：" + text);
                return name;
            }
            return "";
        },
        //是否高亮当前组件
        isCurrentSelect: function() {
            if (this.$store.state.system.vuex_setting_is_page) {
                return false;
            }
            return this.$store.state.system.vuex_setting_meta
                ? this.$store.state.system.vuex_setting_meta.metaId ===
                      this.metaId
                : false;
        }
    },
    watch: {},
    methods: {
        // 输出: 配置等基本信息
        getInfo() {
            return this.$refs.meta.getInfo();
        },
        // 编辑当前组件
        setEditStatus: function() {
            if (
                this.$store.state.system.vuex_setting_meta &&
                this.$store.state.system.vuex_setting_meta.metaId ===
                    this.metaId &&
                !this.$store.state.system.vuex_setting_is_page
            ) {
                //重复触发同一个组件实例的编辑
                return;
            }

            var metaConfig = this.metaConfig || {}; //新组件 没有配置
            // 这里设计的数据格式 config没有和id，type属性分离开，因此后面需要另加属性判断是不是新的组件（空配置）
            if (!this.metaConfig) {
                metaConfig.isDefaultConfig = true; // 如果是新组建 使用默认配置
            }
            metaConfig.metaType = this.metaType;
            metaConfig.metaId = this.metaId;
            console.log("编辑组件", metaConfig);
            this.$store.dispatch("VUEX_SETTING_META", metaConfig);
        },
        // 删除组件
        deleteMetaFromPage: function() {
            this.$emit("delMeta", {
                metaId: this.metaId,
                metaType: this.metaType
            });
        }
    }
};
</script>

<style scoped lang="less">
//@import "../less/variables.less";
//@import "../less/sprite.less";
.sort-meta-unit {
    width: 100%;
    min-height: 20px;
    position: relative;
    overflow: hidden;
    &:hover {
        .hover-style {
            display: block !important;
        }
    }
    .hover-style {
        display: none;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        border: 2px dashed #123123;
        text-align: right;
    }
    .tip-btns {
        display: inline-block;
        position: absolute;
        right: 3px;
        bottom: 1px;
    }
    .tip-btn {
        width: 32px;
        height: 16px;
        line-height: 16px;
        display: inline-block;
        text-align: center;
        font-size: 10px;
        color: #fff;
        background: rgba(0, 0, 0, 0.4);
        margin-left: 2px;
        cursor: pointer;
        z-index: 11;
    }
}
</style>