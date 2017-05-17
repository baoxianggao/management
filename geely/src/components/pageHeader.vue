<template>
  <div class="Header">
    <div class="logo">
      <img src="../assets/logo.png" alt="圣禹科技">
      <span>圣禹科技云平台</span>
    </div>
    <div class="menu-list">
      <ul class="menu-list-ul">
        <router-link to="/main" tag="li" :class="{active:nowActive}">首页</router-link>
        <router-link to="/serverStatus" tag="li" :class="{active:nowActive}">服务器管理</router-link>
        <router-link to="/main" tag="li" :class="{active:nowActive}">退出系统</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data(){
      return {
        nowActive:true
      };
    },
    methods: {
      handleSelect: function () {
      
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Header{
    position: absolute;
    top: 0;
    height: 55px;
    width: 100%;
    background-color: rgb(16,61,94);
  }
  .logo{
    font-family: "Microsoft YaHei","Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","微软雅黑",Arial,sans-serif;
    color: white;
    font-size: 1.2em;
    display: inline-block;
    left: 0;
  }
  .menu-list{
    display: inline-block;
    position: absolute;
    right: 0;
    height: 100%;
    margin-right: 1em;
  }
  .menu-list-ul {
    list-style-type: none;
    padding: 0;
  }
  .menu-list-ul li {
    display: inline-block;
    margin: 0 2em;
    font-family: "Microsoft YaHei","Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","微软雅黑",Arial,sans-serif;
    color: white;
    font-size: 1.2em;
    height: 100%;
  }
  .menu-list-ul li:hover{
    /*text-decoration:underline;*/
    color: rgb(85,151,177);
  }
  .active{
    /*border-bottom: 3px solid #1d90e6;*/
    
  }
</style>
