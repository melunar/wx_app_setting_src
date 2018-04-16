<template>
    <!-- 用于带有图片上传和链接的组件配置 -->
    <div class="meta-base-image-upload">
         <div v-if="listBySort.length > 0" class="phone-sort-meat"> 
            <draggable v-model="listBySort" @sort="draggableSort"> 
                <div v-for="(item, index) in listBySort" :key="index" class="upload-content">
                    <div class="image-box">
                        <img class="image-self" v-if="item.imgSrc" :src="item.imgSrc">
                        <img class="image-self" v-if="item.imgSrc">
                    </div>
                    <div class="upload-form">
                        <el-input size="small" disabled placeholder="图片地址" v-model="item.imgSrc">
                            <template slot="append">
                                <el-upload
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :before-remove="beforeRemove"
                                    :on-success="handleSuccess"
                                    :on-error="handleError"
                                    :multiple="false"
                                    :show-file-list="false"
                                    :on-exceed="handleExceed"
                                    :file-list="item.imgSrc ? [{'name': item.imgSrc, 'url': item.imgSrc}] : []">
                                    <el-button style="position: relative; top: 4px;" size="small" type="primary" @click="rememberIndex(index)">选择图片</el-button>
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
                        <template v-if="isText">
                            <span class="split-space"></span>
                            <el-input size="small" placeholder="添加文本" v-model="item.text">
                                <template slot="append">
                                    <el-button size="small" type="primary">文字</el-button>
                                </template>
                            </el-input>
                        </template>
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
            });
            this.$emit("change", this.listBySort);
        },
        // 删除
        deleteOne: function(item, index) {
            this.$alert("确定要删除该项？", "提示", {
                confirmButtonText: '删除',
                callback: function() {
                    this.listBySort.splice(index, 1);
                    this.$emit("change", this.listBySort);
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
        // 上传成功
        handleSuccess: function(res, fileList) {
            var fileName = fileList.name;
            message.success(`上传${fileName}成功！`);
            if(typeof this.curIndex === "undefined") {
                message.error("error, code = 0");
                return;
            } 
            this.listBySort[this.curIndex].imgSrc = fileList.url;
            this.$emit("change", this.listBySort);
            /*  demo
                fileList: "{"status":"success","name":"menu-1.png","size":9038,"percentage":100,"uid":1523893568208,"raw":{"uid":1523893568208},"url":"blob:http://localhost:4002/50b3e3be-8e08-46d5-b5f5-d7bef17d8726","response":{"id":101}}"
             */
            console.log("....handleSuccess"); 
        },
        // 上传失败
        handleError: function() {
            message.error("上传失败！");
            console.log("....handleError"); 
        },
        beforeRemove: function(file, fileList) {
            console.log("....beforeRemove");
            return this.$confirm(`确定移除 ${ file.name }？`);
        },
        draggableSort: function() {
            setTimeout(function() {
                this.$emit("change", this.listBySort);
            }.bind(this));
        },
        // 记录当前操作的索引 用于上传成功赋值
        rememberIndex: function(index) {
            this.curIndex = index;
            console.log(`当前操作NO.${index}`);
        }
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
            max-height: 110px;
            min-height: 40px;
            height: auto;
            width: auto;
            min-width: 40px;
            max-width: 220px;
            background: #eee;
            float: left;
            margin-right: 10px;
            border: 1px solid #e7eaec;
            position: relative;   
            overflow: hidden;
        }
        .image-self {

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