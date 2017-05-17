<template>
  <div>
    <el-button type="primary" style="margin-bottom: 10px;" v-on:click="refresh()">刷新</el-button>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="ip"
        label="服务器"
      >
      </el-table-column>
      <el-table-column
        label="运行状态"
      >
        <template scope="scope">
          <el-icon name="time"></el-icon>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  import api from '../../api/index'
  export default {
    name: 'serverManagement',
    data () {
      return {
        tableData: [
          {
            date: '良好',
            name: '通信服务',
            ip: '139.196.229.233'
          }, {
            date: '良好',
            name: '注册服务',
            ip: '139.196.229.234'
          }, {
            date: '良好',
            name: '数据服务',
            ip: '139.196.229.235'
          }, {
            date: '良好',
            name: 'web服务',
            ip: '139.196.229.236'
          }]
      }
    },
    mounted: function() {
      this.getServerStatus();
    },
    methods: {
      refresh:function () {
          this.getServerStatus();
      },
      getServerStatus:function () {
        console.log("getServerStatus");
//        try {
//          console.log(this);
//         this.$http.get(api.getServerStatus()).then(
//             function (res) {
//                 console.log(this);
//               if (res.data.status) {
//               console.log(res);
//               } else {
//               console.log("信息获取失败，原因:", res);
//               this.errhandle(res.data.err);
//               }
//             },
//             function (res) {
//              console.log("error:",res)
////             this.errhandle("网络连接失败!");
//             }
//         );
//         } catch (e) {
//            console.log(e);
////         this.errhandle("网络连接失败!");
//         }
      }
    }
  }
</script>
