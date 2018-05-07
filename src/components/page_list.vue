<template>
<div class="page-manager">
    <div class="page-list-header">
        <div class="plh-title">页面
        <i class="plh-add fa fa-plus" title="新建页面" @click="addNewPage"></i>
        </div>
    </div>
    <div class="page-list-content">
        <el-table :data="pageListArr" style="width: 100%;height:25">
        <el-table-column prop="title" label="名称" width="170"></el-table-column>
        <el-table-column prop="isHomePage" label="首页" width="50">
            <template slot-scope="scope">
            <span v-if="scope.row.isHomePage === true" 
                class="btn-set-home is-home" @click="setHomePage(scope.row,false)">是</span>
            <span v-else class="btn-set-home not-home" @click="setHomePage(scope.row,true)">否</span>
            </template>
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
            <span class="btn-operate edit fa fa-edit" title="编辑" @click="editPage(scope.row)"></span>
            <span class="btn-operate delete fa fa-trash" title="删除" @click="deletePage(scope.row)"></span>
            </template>
        </el-table-column>
        </el-table>
    </div>
</div>
</template>

<script>
export default {
    name: "pageList",
    mixins: [],
    data: function() {
        return {
            pageListArr: []
        };
    },
    components: {
        /*requireDemo: function (resolve) {
            require([""], resolve);
        }*/
    },
    created: function() {
        setTimeout(() => {
            this.getPageList();
        },100);
    },
    mounted: function() {},
    beforeDestroy: function() {},
    computed: {},
    watch: {},
    methods: {
        // 从路由获取唯一标识
        getParam() {
            // 模拟 /#/?id=1能取到模拟数据 否则取到空
            var param = this.$route.query;
            if(!param || !param.id) { // 校验参数 TODO:
                message.error("无法获取 code = 1");
                return 0;
            }
            return { // TODO:
                id: param.id
            };
        },
        //获取当前模板的页面列表
        getPageList() {
            var param = this.getParam();
            if(!param) { return; }
            var urlFixed = param.id == 1 ? "" : "0";
            SERVICE(
                "templatePagesList" + urlFixed,
                param,
                (res) => {
                    this.pageListArr = res.data;
                    if (res.data && res.data.forEach && res.data.length) {
                        this.getPageInfo(0); //激活第一个页面
                    }
                }
            );
        },
        //获取页面的所有信息
        getPageInfo: function(index, isId) {
            var param = {
                id: isId ? index : this.pageListArr[index].id
            };
            var urlFixed = Math.random() > 0.5 ? "0" : "";
            SERVICE(
                "pageInfo" + urlFixed,
                param,
                function(res) {
                    this.setCurPageStore(res.data);
                }.bind(this)
            );
        },
        // 添加新页面
        addNewPage: function() {
            var isHomePage = !this.pageListArr.length;
            var newPageObj = {
                id: new Date().getTime(),
                title: "未命名页面",
                isHomePage: isHomePage
            };
            // TODO: service
            // 成功之后添加本地数据或刷新页面
            this.pageListArr.push(newPageObj);
        },
        setHomePage: function(row, flag) {
            var pageId = row.id;
            SERVICE("setIndexPage", {id: pageId}, (res) => {
                for (var i = 0; i < length; i++) {
                    if (this.pageListArr[i].id === pageId) {
                        this.pageListArr[i].isHomePage = true;
                    } else {
                        this.pageListArr[i].isHomePage = false;
                    }
                }
                message.success("设置主页成功！");
            }, (res) => {
                message.error("设置主页失败 code = 2");
            });
        },
        // 保存页面
        savePage: function() { 
            if(this.$store.state.system.vuex_is_to_save) {
                message.info("保存页面...");
            }
        },
        // 编辑当前点击页面
        editPage: function(row) {
            this.savePage();
            var id = row.id;
            this.getPageInfo(id, true);
        },
        // 删除页面
        deletePage: function(row) {
            var length = this.pageListArr.length;
            for (var i = 0; i < length; i++) {
                if (this.pageListArr[i].id === row.id) {
                    this.pageListArr.splice(i, 1);
                    break;
                }
            }
        },
        //设置页面配置的参数
        setCurPageStore: function(pageInfo) {
            if (!pageInfo.config) {
                message.error("获取页面配置失败！");
                return;
            }
            this.$store.dispatch("VUEX_SETTING_PAGE", pageInfo.config);
            this.$store.dispatch("VUEX_SETTING_IS_PAGE", true);
            if (!pageInfo.metas) {
                message.error("获取页面组件！");
                return;
            }
            this.$store.dispatch("VUEX_PAGE_METAS", pageInfo.metas);
        }
    }
};
</script>

<style scoped lang="less">
@import "../less/variables.less";
//@import "../less/sprite.less";
.page-manager {
    display: inline-block;
    height: 100%;
    width: 325px;
    background-color: @pageListBgColor;
    overflow-y: auto;
    .page-list-header {
        height: 50px;
        line-height: 50px;
        width: 100%;
        padding: 0 20px;
        font-size: 16px;
    }
    .plh-add {
        float: right;
        margin-top: 16px;
        font-size: 18px;
        cursor: pointer;
    }
    .page-list-content {
        border-top: 1px solid #e1e1e1;
    }
    .btn-set-home {
        display: inline-block;
        font-size: 12px;
        height: 20px;
        width: 20px;
        text-align: center;
        border-radius: 3px;
        cursor: pointer;
        &.is-home {
            background: #3a8ee6;
            color: #fff;
        }
        &.not-home {
            background: #909399;
            color: #fff;
        }
    }
    .btn-operate {
        height: 20px;
        width: 20px;
        display: inline-block;
        font-size: 10px;
        float: left;
        line-height: 20px;
        color: #fff;
        border-radius: 3px;
        text-align: center;
        cursor: pointer;
        &.edit {
            background: #3a8ee6;
        }
        &.delete {
            margin-left: 6px;
            background: red;
        }
    }
}
</style>