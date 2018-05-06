export default {
    computed: {
        meta_setting() {
            return this.$store.state.system.vuex_setting_meta;
        }
    },
    watch: {
        // 监听设置项变化 更新组件视图
        meta_setting(config) {
            if (
                this.metaId &&
                config.metaId === this.metaId &&
                !config.isDefaultConfig
            ) {
                this.metaInfo = config;
            }
        }
    },
    methods: {
        // 输出: 配置等基本信息
        getInfo() {
            var data = {
                metaId: this.metaId, // 唯一标识
                metaType: this.metaType, // 组件类型代码
                metaName: this.metaName, // 组件类型英文名
                metaText: this.metaText, // 组件类型中文名
                config: this.metaInfo // 配置项
            };
            return data;
        }
    }
};
