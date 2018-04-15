<template>
    <!-- 用于带有图片上传和链接的组件配置 -->
    <div class="meta-base-image-upload">
         <div v-if="listBySort.length > 0" class="phone-sort-meat"> 
            <draggable v-model="listBySort" @sort="draggableSort"> 
                <div v-for="(item, index) in listBySort" :key="index" class="upload-content">
                    <div class="image-box">
                        <img src="" alt="">
                    </div>
                    <div class="upload-form">
                        <el-input size="small" disabled placeholder="图片地址" v-model="item.imgSrc">
                            <template slot="append">
                                <el-upload class="upload-demo"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :before-remove="beforeRemove"
                                    :multiple="false"
                                    :show-file-list="false"
                                    :on-exceed="handleExceed"
                                    :file-list="item.imgSrc ? [{'name': item.imgSrc, 'url': item.imgSrc}] : []">
                                    <el-button style="position: relative; top: 4px;" size="small" type="primary">选择图片</el-button>
                                    <div slot="tip" class="el-upload__tip"></div>
                                    </el-upload> 
                            </template>
                        </el-input>
                        <span class="split-space"></span>
                        <el-input size="small" disabled placeholder="链接地址" v-model="item.linkPageId">
                            <template slot="append">
                                 <el-button size="small" type="primary">链接地址</el-button>
                            </template>
                        </el-input>
                        <temlate v-if="isText">
                            <span class="split-space"></span>
                            <el-input size="small" placeholder="添加文本" v-model="item.text">
                                <template slot="append">
                                    <el-button size="small" type="primary">文字</el-button>
                                </template>
                            </el-input>
                        </temlate>
                    </div>
                    <span class="del-btn" @click="deleteOne(item, index)">×</span>
                    <!-- <el-upload class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        :multiple="false"
                        :show-file-list="true"
                        :on-exceed="handleExceed"
                        :file-list="item.url ? [item] : []">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip"></div>
                        </el-upload>  -->
                </div>
            </draggable>
        </div>
        <div class="add-btn-container">
            <el-button 
                style="width: 100%;"
                :disabled="listBySort.length >= maxLength"
                :size="'medium'"
                :icon="'el-icon-plus'"
                @click="addOne"
            >添加一个（拖拽排序）{{ listBySort.length >= maxLength ? "已达上限" : "" }}</el-button>
        </div>
    </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
    name: "metaBaseImageUpload",
    mixins:[],
    props: {
        //列举
        dataList : { type: Array, default: function() {
            return [
                {imgSrc: "", linkPageId: "", text: "1"},
                {imgSrc: "", linkPageId: "", text: "2"}
            ]
        } },
        //列表最大长度
        maxLength: { type: Number, default: 10 },
        //是否带有文本描述
        isText : { type: Boolean, default: false },
    },
    data: function() {
        return {
             listBySort: this.dataList
        };
    },
    components: {
        draggable
        /*requireDemo: function (resolve) {
            require([""], resolve);
        }*/
    },
    created: function() {
        /* this.listBySort = [];
        this.dataList.map(function(item, index) {
            this.listBySort.push({
                name: "",
                url: item.imgSrc
            });
        }.bind(this)); */
    },
    mounted: function() {},
    beforeDestroy: function() {},
    computed: {},
    watch: {},
    methods: {
        // 添加一个
        addOne: function() {
            this.listBySort.splice(this.listBySort.length, 0, {
                imgSrc: "", linkPageId: "", text: ""
            })
        },
        // 删除
        deleteOne: function(item, index) {
            this.$alert("确定要删除该项？", "提示", {
                confirmButtonText: '删除',
                callback: function() {
                    this.listBySort.splice(index, 1);
                }.bind(this)
            });
        },
        handleRemove: function(file, fileList) {
            console.log("....handleRemove");
            console.log(file, fileList);
        },
        handlePreview: function(file) {
            console.log("....handlePreview");
            console.log(file);
        },
        handleExceed: function(files, fileList) {
            console.log("....handleExceed");
            this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove: function(file, fileList) {
            console.log("....beforeRemove");
            return this.$confirm(`确定移除 ${ file.name }？`);
        },
        draggableSort: function() {}
    },
    filters: { 
    }
}
</script>

<style scoped lang="less">
    //@import "../less/variables.less";
    //@import "../less/sprite.less";
    .meta-base-image-upload {
        position: relative;
        width: 100%; height: 100%;
        .upload-content {
            position: relative;
            height: auto;
            background: #fff;
            padding: 10px;
            margin: 0 10px 10px 10px;
            border: 1px solid #e7eaec;
            border-radius: 3px;
            overflow: hidden;
        }
        .image-box {
            height: 70px;
            width: auto;
            min-width: 40px;
            max-width: 220px;
            background: #eee;
            float: left;
            margin-right: 10px;
            border: 1px solid #e7eaec;
            position: relative;   
        }
        .upload-form {
            height: auto;
            display: block;
            overflow: hidden; //自适应宽度
        } 
        .del-btn {
            position: absolute;
            top: 2px; right: 2px;
            border-radius: 10px;
            height: 20px; width: 20px;
            background: #999; color: #fff;
            cursor: pointer; line-height: 20px; text-align: center;
            &:hover { background: #666; }
        }
        .add-btn-container {
            width: 90%;
            padding-left: 10%;
        }  
        .split-space { display: block; height: 5px; }
    }
</style>