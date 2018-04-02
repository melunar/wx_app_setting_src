<template>
  <div>
    <el-button>按钮</el-button>
    <p><span>123</span></p>
  </div>
</template>

<script>
export default {
  name: "mainPage",
  data: function() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
p {
  span { color: red; }
}
</style>
