<template>
    <div>
        <vue-wangeditor id="editor" :menus="menus" v-model="text"></vue-wangeditor>
    </div>
</template>
<script>
import vueWangeditor from "vue-wangeditor";
export default {
  data: function() {
    return {
      text: "",
      menus: [
        "source", // 源码模式
        "|",
        "bold", // 粗体
        "underline", // 下划线
        "italic", // 斜体
        "strikethrough", // 中线
        "eraser", // 清空格式
        "forecolor", // 文字颜色
        "bgcolor", // 背景颜色
        "|",
        "quote", // 引用
        "fontfamily", // 字体
        "fontsize", // 字号
        "head", // 标题
        "unorderlist", // 无序列表
        "orderlist", // 有序列表
        "alignleft", // 左对齐
        "aligncenter", // 居中
        "alignright", // 右对齐
        "|",
        "link", // 链接
        "unlink", // 取消链接
        "table", // 表格
        "emotion", // 表情
        "|",
        "img", // 图片
        "video", // 视频
        "location", // 位置
        "insertcode", // 插入代码
        "|",
        "undo", // 撤销
        "redo", // 重做
        "fullscreen" // 全屏
      ]
    };
  },
  components: {
    vueWangeditor
  }
};
</script>