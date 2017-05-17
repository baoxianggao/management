<template>
  <div class="server_main">
    <div class="server_main_left">
      <el-menu :default-active = "activeTab" class="el-menu-vertical-demo" theme="dark" :router="true">
        <el-menu-item index="serverStatus">服务器管理</el-menu-item>
        <el-menu-item index="serviceManagement">服务管理</el-menu-item>
      </el-menu>
    </div>
    <div  class="server_main_right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import api from '../../api/index'
  export default {
    name: 'serverManagement',
    data () {
      return {
        activeTab: this.$route.path.split("/")[1],
      }
    },
    mounted: function() {
    
    },
    methods: {
      refresh:function () {
          console.log("刷新");
        console.log(this.$router);
      }
    }
  }
</script>
<style scoped>
  .server_main{
    height: 100%;
  }
  .server_main_left{
    position: absolute;
    height: 100%;
    width: 140px;
  }
  .server_main_right{
    position: absolute;
    height: 100%;
    width: 60%;
    left: 140px;
    padding: 20px;
  }
  .el-menu-vertical-demo{
    height: 100%;
  }
  .el-menu--dark{
    background-color: rgb(16,61,94);
  }
</style>
