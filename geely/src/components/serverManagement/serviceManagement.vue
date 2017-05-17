<template>
  <div>
    <el-tabs v-model="editableTabsValue2" type="card">
      <el-tab-pane
        v-for="(item, index) in editableTabs2"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
        <el-table
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="ip"
            label="ip"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="服务名称"
          >
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态"
          >
          </el-table-column>
          <el-table-column
            prop="lastload"
            label="上次访问"
          >
          </el-table-column>
          <el-table-column
            prop="time"
            label="持续时间"
          >
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import api from '../../api/index'
  export default {
    name: 'serverManagement',
    data () {
      return {
        activeTab: '1',
        editableTabsValue2: '1',
        editableTabs2: [{
          title: '通信服务',
          name: '1',
          content: 'IP:139.196.229.233'
        }, {
          title: '注册服务',
          name: '2',
          content: 'IP:139.196.229.234'
        },
          {
            title: '数据服务',
            name: '3',
            content: 'IP:139.196.229.235'
          },
          {
            title: 'web服务',
            name: '4',
            content: 'IP:139.196.229.236'
          }],
        tableData: [
          {
            status: '良好',
            name: '通信服务',
            ip: '139.196.229.233',
            lastload:'17s前',
            time:'1h'
          }, {
            status: '良好',
            name: '注册服务',
            ip: '139.196.229.234',
            lastload:'17s前',
            time:'1h'
          }, {
            status: '良好',
            name: '数据服务',
            ip: '139.196.229.235',
            lastload:'17s前',
            time:'1h'
          }, {
            status: '良好',
            name: 'web服务',
            ip: '139.196.229.236',
            lastload:'17s前',
            time:'1h'
          }]
      }
    },
    
    methods: {
      handleClick(tab, event) {
      }
    }
  }
</script>
