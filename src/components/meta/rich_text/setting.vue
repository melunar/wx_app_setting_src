<template>
  <div ref="editor" style="text-align:left"></div>
</template>
<script>
import Wangeditor from "wangeditor";
export default {
  name: "richText",
  data: function() {
    return {
      editorContent: ''
    };
  },
  mounted:function() {
    var editor = new Wangeditor(this.$refs.editor);
    editor.customConfig.onchange = function(html){
      this.editorContent = html;
      console.log(this.editorContent);
    }.bind(this);
    editor.create();
  }
};
</script>