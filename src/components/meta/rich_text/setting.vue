<template>
    <div class="meta-rich-text-setting">
        <colorSelect 
            :labelText="'背景颜色'"
            v-model="bgColor" 
            :defaultColor="'#fff'" />
          <numberSlider 
            v-model="paddingValue"
            :labelText="'页面边距'"
            :tipsText="'px'"
            :max="50" :min="0" />
        <!-- vueUEditor.ueditorPath注意路径别少了最后的斜杠 -->
        <vueUEditor @ready="initEditor" 
            :ueditorConfig="{'serverUrl': 'https://jsonplaceholder.typicode.com/posts/'}"
            :ueditorPath="'/static/ueditor1_4_3_3/'" />
    </div>
</template>

<script>
import vueUEditor from "vue-ueditor";
import colorSelect from "../_base/color_select.vue";
import numberSlider from "../_base/number_slider.vue";
export default {
    name: "metaRichTextSetting",
    mixins:[],
    props: { 
        // 组件id
        metaId: {type: Number, default: 0 },
        metaInfo: {
            type: Object,
            default: function() {
                return { 
                    // 背景颜色
                    bgColor: "#fff",
                    // 内边距
                    paddingValue: 3,
                    richTextContent: "<p>请输入内容...</p>" //内容
                     
                }
            }
        }
    },
    data: function() {
        return {
          metaType: "001",
          metaText: "富文本", 

          bgColor: this.metaInfo.bgColor,
          paddingValue: this.metaInfo.paddingValue,
          richTextContent: this.metaInfo.richTextContent //内容
        };
    },
    components: {
      vueUEditor, colorSelect, numberSlider
        /*requireDemo: function (resolve) {
            require([""], resolve);
        }*/
    },
    created: function() {},
    mounted: function() {},
    beforeDestroy: function() {},
    computed: {},
    watch: {
      "bgColor": function() { this.dispatchNewStore(); },
      "paddingValue": function() { this.dispatchNewStore(); },
      "richTextContent": function() { this.dispatchNewStore(); },
    },
    methods: {
      //更新属性数据
        dispatchNewStore: function() {
            var data = {
                metaId: this.metaId,
                metaType: this.metaType, //组件类型 一定要有

                bgColor: this.bgColor,  
                paddingValue: this.paddingValue,  
                richTextContent: this.richTextContent
            };
            console.log("组件设置变更....");
            this.$store.dispatch("VUEX_SETTING_META", data);
        },
      initEditor: function(editorInstance) {
        //设置初始化内容
        editorInstance.setContent(this.richTextContent);
        editorInstance.addListener("contentChange", function() {
          this.richTextContent = editorInstance.getContent();
        }.bind(this));
      }
    }
}
</script>

<style scoped lang="less">
    //@import "../less/variables.less";
    //@import "../less/sprite.less";
    .meta-rich-text-setting {
        
    }
</style>