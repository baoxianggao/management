<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
    min-width: 840px;
    overflow: auto;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    /*margin-top: 60px;*/
    width: 100%;
    height: 100%;
    min-width: 840px;
    overflow: auto;
    /*position: relative;*/
  }
</style>
