export default {
    computed: {
        meta_setting: function() {
            return this.$store.state.system.vuex_setting_meta;
        }
    },
    watch: {
        // 监听设置项变化
        "meta_setting": function(config) { 
            if(this.metaId && config.metaId === this.metaId && !config.isDefaultConfig) {
                this.metaInfo = config; 
            }
        }
    }
}