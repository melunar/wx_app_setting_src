<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
     
  },
  watch: {
     
  }
}
</script>

<style>
@import "./less/base.less";
@import "./less/custom.less";

body {
  height: 100%; width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left; 
  position: absolute; left: 0; right: 0; top: 0;bottom: 0;
  min-width: 1100px;
}
</style>
