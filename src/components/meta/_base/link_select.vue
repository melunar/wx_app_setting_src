<template>
<div class='link-select-panel'>
    <el-dialog title="请选择链接" :close-on-click-modal="false" :before-close="closePanel" :visible.sync="dialogTableVisible">
        <el-radio-group v-model="v" size="small">
            <el-radio class="link-item-line" v-for="(item, index) in linkList" :key="index"
                :label="item.id" border>{{ item.url }}</el-radio>
        </el-radio-group>
        <div slot="footer" class="dialog-footer">
            <el-button @click="closePanel">取 消</el-button>
            <el-button type="primary" @click="submitLink">确 定</el-button>
        </div>
    </el-dialog>
</div>
</template>
<script>
// import xxx from '../xxx.vue'
// var xx = require('../xx.js')
export default {
    name: "linkSelect",
    mixins: [],
    props: {
        linkId: {
            type: String,
            default: ""
        }
    },
    data: function() {
        return {
            v: this.linkId || "",
            linkList: [
                 
            ],
            dialogTableVisible: true
        };
    },
    components: {
        /* requireDemo: function (resolve) {
            require([''], resolve);
        } */
    },
    created: function() {
        this.loadData();
    },
    mounted: function() {},
    beforeDestroy: function() {},
    computed: {},
    watch: {},
    methods: {
        loadData() {
            this.linkList = [
                { id: "123", url: "//132.2.vm" },
                { id: "23", url: "//132112.2.vm" },
                { id: "45", url: "//1322462.2.vm" },
                { id: "44", url: "//132234.2.vm" },
                { id: "64", url: "//13222.2.vm" },
                { id: "21", url: "//135420.2.vm" },
                { id: "34", url: "//13342356.2.vm" }
            ];
            /* SERVICE("linkList",{},() => {
                // TODO:
            }); */
        },
        closePanel() {
            // TODO: ...
            this.dialogTableVisible = false;
            this.$emit("close");    
        },
        submitLink() {
            if(!this.v) { message.warn("请选择链接"); return; }
            let name = this.linkList.filter((item, index) => {
                            return item.id === this.v;
                        })[0].url;
            this.$emit("link", this.v, name);
            this.closePanel();
        }
    }
};
</script>
<style scoped lang='less'>
//@import '../less/variables.less';
//@import '../less/sprite.less';
.link-select-panel {
    position: relative;
    .link-item-line {
        display: block;
        margin: 10px;
    }
}
</style>